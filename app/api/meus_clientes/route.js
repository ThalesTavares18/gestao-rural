import conexao from "@/app/lib/conexao";

export async function GET(){

    
    
    const query = `SELECT * FROM contatos;`
    const [usuario] = await conexao.execute(query)

    return new Response(

           JSON.stringify(usuario),
        {   
            status: 200,
            headers: {"content-type": "application/json"}
        }

    )
}


export async function POST( request ){

    const body = await request.json()
    
    const query = ` 
        INSERT INTO contatos
        (nome, contato)
        VALUES
        (?,?);

    `
    const [results] = await conexao.execute(
        query,
        [body.nome, body.contato]

    )

    return new Response( JSON.stringify ( results.insertId ))



}
    
