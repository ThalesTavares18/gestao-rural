import conexao from "@/app/lib/conexao"

export async function GET( request, {params} ){

    const data = (await params).data

    const query = `SELECT produtos.nome, vendas.quantidade, (produtos.preco * vendas.quantidade) AS total_venda, vendas.data 
            FROM produtos
            JOIN vendas ON vendas.id_produto = produtos.id
            WHERE DATE(data) = ?;`
    const [results] = await conexao.execute(query, [data])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}