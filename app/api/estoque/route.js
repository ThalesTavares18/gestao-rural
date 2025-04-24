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

export async function POSTasdasd( request ){

    const body = await request.json()

    const query = `
            INSERT INTO estoque 
            (id_produto, quantidade, entrada)
            VALUES 
            (77, ?, 1);
    `
    
    const [results] = await conexao.execute(
        query,
        [body.quantidade]
    )

    return new Response( JSON.stringify(results.insertId) )

}

export async function POST( request ){

    const body = await request.json()

    const id_inserido =  await insereProduto(body);
    const resultado = await insereEstoque(id_inserido, body.quantidade);

    return new Response( JSON.stringify(id_inserido) )

}

async function insereProduto( item ){
    const query = `


            INSERT INTO produtos
            (nome, preco, quantidade)
            VALUES
            (?, ?, ?);

    `
    
    const [results] = await conexao.execute(
        query,
        [item.nome, item.preco, item.quantidade]
    )

    console.log("Item de ID "+results.insertId+" inserido com sucesso!")

    return results.insertId

}

async function insereEstoque(id, quantidade){
    const query = `
        INSERT INTO estoque 
        (id_produto, quantidade, entrada)
        VALUES 
        (?, ?, 1)

    `

    const [results] = await conexao.execute(
        query,
        [id, quantidade]
    )

    console.log("Estoque inserido com id do produto "+id+" e quantidade "+quantidade)

    return results;

}