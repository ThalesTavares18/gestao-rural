import conexao from "@/app/lib/conexao"

export async function GET( request){

    const hoje = new Date();
    const seteDiasAtras = new Date();

    seteDiasAtras.setDate(hoje.getDate() - 7);

    const query = `SELECT produtos.nome, vendas.quantidade, (produtos.preco * vendas.quantidade) AS total_venda, vendas.data 
            FROM produtos
            JOIN vendas ON vendas.id_produto = produtos.id
            WHERE DATE(data) >= ? AND DATE(data) <= ?;`
    const [results] = await conexao.execute(query, [seteDiasAtras, hoje])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}