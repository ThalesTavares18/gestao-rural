import conexao from "@/app/lib/conexao"


export async function GET( request, {params} ){
    
    const id = (await params).id

    const query = `SELECT * FROM contatos WHERE id = ?;`
    const [results] = await conexao.execute(query, [id])

    return new Response(
        JSON.stringify (results),
        {   
            status: 200,
            headers: {"content-type": "application/json"}
        }
    )

}

export async function PUT( request, {params} ){
    
    const id = (await params).id
    const body = await request.json()

  
    const query = `
        UPDATE contatos
        SET nome = ?, contato = ?
        WHERE id = ?;
    `

    const [results] = await conexao.execute(
        query, 
        [body.nome, body.contato, id]
    )

    return new Response(
        JSON.stringify(results),

        {   
            status: 200,
            headers: {"content-type": "application/json"}
        }
    )

}