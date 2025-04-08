import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT produtos.nome, estoque.quantidade FROM produtos, estoque;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status:200,
            headers: { "Content-Type": "application/json"}
        }
    )
   
}