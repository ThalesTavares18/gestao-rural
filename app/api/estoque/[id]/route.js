import conexao from "@/app/lib/conexao"

export async function GET( request, {params} ){

    const id = (await params).id

    const query = `SELECT * FROM produtos WHERE id = ?;`
    const [results] = await conexao.execute(query, [id])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}

export async function PUT( request, {params} ){

    const id = (await params).id
    const body = await request.json()

    const query = `
        UPDATE produtos
        SET nome = ?, preco = ?, quantidade = ?
        WHERE id = ?;
    `
    const [results] = await conexao.execute(
        query,
        [ body.nome, body.preco, body.quantidade, id]
    )

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}


export async function DELETE( request, {params} ){

    const id = (await params).id

    const query = `DELETE FROM produtos WHERE id = ?;`
    const [results] = await conexao.execute(query, [id])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}