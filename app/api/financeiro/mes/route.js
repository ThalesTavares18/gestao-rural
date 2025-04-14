import conexao from "@/app/lib/conexao"

export async function GET( request){

    const hoje = new Date();
    const mesPassado = new Date();

    mesPassado.setDate(hoje.getDate() - 30);

    const query = `SELECT produtos.nome, estoque.quantidade, (estoque.quantidade*produtos.preco) AS total_venda ,estoque.data
FROM produtos
INNER JOIN estoque ON estoque.id_produto = produtos.id AND entrada = 0
            WHERE DATE(data) >= ? AND DATE(data) <= ?;`
    const [results] = await conexao.execute(query, [mesPassado, hoje])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}