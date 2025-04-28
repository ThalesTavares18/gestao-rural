import conexao from "@/app/lib/conexao"

export async function GET( request, {params} ){

    const nome= (await params).nome

    const query = `SELECT * FROM produtos WHERE nome LIKE '%${nome}%' ;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}



export async function DELETE( request, {params} ){

    const nome = (await params).nome

    const query = `DELETE FROM produtos WHERE id = ?;`
    const [results] = await conexao.execute(query, [nome])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}