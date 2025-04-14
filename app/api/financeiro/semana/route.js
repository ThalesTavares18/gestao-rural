import conexao from "@/app/lib/conexao"

export async function GET( request){

    const hoje = new Date();
    const seteDiasAtras = new Date();

    seteDiasAtras.setDate(hoje.getDate() - 7);

    const query = `SELECT produtos.nome, estoque.quantidade, (estoque.quantidade*produtos.preco) AS total_venda ,estoque.data
FROM produtos
INNER JOIN estoque ON estoque.id_produto = produtos.id AND entrada = 0 AND DATE(data) >= ? AND DATE(data) <= ?;`
    const [results] = await conexao.execute(query, [seteDiasAtras, hoje])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}