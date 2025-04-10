import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT produtos.nome, vendas.quantidade FROM produtos JOIN vendas ON vendas.id_produto = produtos.id;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status:200,
            headers: { "Content-Type": "application/json"}
        }
    )
   
}