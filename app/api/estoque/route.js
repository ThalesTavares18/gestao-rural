

import conexao from "@/app/lib/conexao";

export async function GET() {
    const query = `
        SELECT p.nome, p.preco, e.quantidade, e.id_produto
        FROM estoque e
        JOIN produtos p ON e.id_produto = p.id;
    `;
    const [results] = await conexao.execute(query);

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}

export async function POST(request) {
    const body = await request.json();
    const query = `
        INSERT INTO estoque (id_produto, quantidade)
        VALUES ((SELECT id FROM produtos WHERE nome = ?), ?);
    `;

    const [results] = await conexao.execute(query, [body.nome, body.quantidade]);

    return new Response(
        JSON.stringify({ id: results.insertId }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}

export async function UPDATE(request) {
    const body = await request.json();
    const query = `
        UPDATE estoque
        SET quantidade = ?
        WHERE id_produto = ?;
    `;

    const [results] = await conexao.execute(query, [body.quantidade, body.id_produto]);

    return new Response(
        JSON.stringify({ message: "Estoque atualizado com sucesso!" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}

// Express Route Example
app.post('/api/estoque', async (req, res) => {
    const { nome, preco, quantidade } = req.body;
    try {
      const produto = new Produto({ nome, preco, quantidade });
      await produto.save();
      res.status(201).json({ message: 'Produto salvo com sucesso!', id: produto._id });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro ao salvar produto no banco de dados.' });
    }
  });
  