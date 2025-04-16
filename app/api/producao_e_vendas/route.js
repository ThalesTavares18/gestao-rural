import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT produtos.id, produtos.nome, estoque.quantidade FROM produtos JOIN estoque ON estoque.id_produto = produtos.id WHERE estoque.entrada = 0;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status:200,
            headers: { "Content-Type": "application/json"}
        }
    )
   
}