

import conexao from "@/app/lib/conexao"

export async function GET(){

<<<<<<< Updated upstream
    const query = `SELECT * FROM estoque;`
=======
    const query = `SELECT * FROM produtos;`
>>>>>>> Stashed changes
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}

export async function POST( request ){

    const body = await request.json()

    const query = `
<<<<<<< Updated upstream
        INSERT INTO estoque
=======
        INSERT INTO produtos
>>>>>>> Stashed changes
        (nome, preco, quantidade)
        VALUES
        (?, ?, ?);
    `
    const [results] = await conexao.execute(
        query,
        [body.nome, body.preco, body.quantidade]
    )

    return new Response( JSON.stringify(results.insertId) )

}