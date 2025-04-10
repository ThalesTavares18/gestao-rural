import conexao from "@/app/lib/conexao";

export async function GET(request, {params}){

    const nome = (await params).nome
    const query = `SELECT produtos.nome, estoque.quantidade FROM produtos JOIN estoque ON estoque.id_produto = produtos.id WHERE produtos.nome LIKE '%${nome}%';`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status:200,
            headers: { "Content-Type": "application/json"}
        }
    )
   
}