import conexao from "@/app/lib/conexao";
import "/meusclientes.css";

export async function POST(req) {
  try {
    const body = await req.json();
    const { data_entrega, produtos } = body;

    let produtosProcessados = 0;

    for (const item of produtos) {
      const [[produto]] = await conexao.execute(
        "SELECT id, quantidade FROM produtos WHERE nome = ?",
        [item.nome]
      );

      if (!produto) {
        console.warn(`Produto não encontrado: ${item.nome}`);
        continue;
      }

      produtosProcessados++;

      const novaQuantidade = Math.max(produto.quantidade - item.quantidade_total, 0);

      await conexao.execute(
        "UPDATE produtos SET quantidade = ? WHERE id = ?",
        [novaQuantidade, produto.id]
      );

      await conexao.execute(
        `INSERT INTO estoque (id_produto, quantidade, data, entrada)
         VALUES (?, ?, ?, 0)`,
        [produto.id, item.quantidade_total, `${data_entrega} ${new Date().toISOString()}`]
      );
    }

    if (produtosProcessados === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhum produto foi reconhecido no banco." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Estoque atualizado com sucesso." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const [dados] = await conexao.execute(`
      SELECT 
        p.nome AS produto,
        p.preco,
        e.quantidade,
        e.data
      FROM estoque e
      JOIN produtos p ON e.id_produto = p.id
      ORDER BY e.data DESC;
    `);

    return new Response(
      JSON.stringify({ vendas: dados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
