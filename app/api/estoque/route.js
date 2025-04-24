import conexao from "@/app/lib/conexao"

export async function GET(){

    const query = `SELECT * FROM produtos;`
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
        START TRANSACTION;

            INSERT INTO produtos
            (nome, preco, quantidade)
            VALUES
            (?, ?, ?);

            INSERT INTO estoque 
            (id_produto, quantidade, entrada)
            VALUES 
            (LAST_INSERT_ID(), ?, 1)

        COMMIT;
    `
    const [results] = await conexao.execute(
        query,
        [body.nome, body.preco, body.quantidade, body.quantidade]
    )

    return new Response( JSON.stringify(results.insertId) )

}