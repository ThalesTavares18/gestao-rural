import conexao from "@/app/lib/conexao"

export async function GET( request){

    const hoje = new Date();
    const mesPassado = new Date();

    mesPassado.setDate(hoje.getDate() - 30);

    const query = `SELECT produtos.nome, vendas.quantidade, (produtos.preco * vendas.quantidade) AS total_venda, vendas.data 
            FROM produtos
            JOIN vendas ON vendas.id_produto = produtos.id
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