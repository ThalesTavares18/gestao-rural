import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `SELECT produtos.nome, estoque.quantidade, estoque.entrada FROM estoque JOIN produtos ON estoque.id_produto = produtos.id WHERE estoque.entrada = 1;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status:200,
            headers: { "Content-Type": "application/json"}
        }
    )
   
}