import conexao from "@/app/lib/conexao";


export async function GET(request, { params }) {
  
    const nome = await (params).nome;

    const query = `SELECT * FROM contatos WHERE nome = ?;`;
    const [results] = await conexao.execute(query, [nome]);


    return new Response(JSON.stringify(results), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}


export async function PUT(request, { params }) {
    const nome = await (params).nome;
    const body = await request.json(); 

    const query = `
        UPDATE contatos
        SET nome = ?, contato = ?
        WHERE id = ?;
    `;

    console.log();

    const [results] = await conexao.execute(query, [
        body.nome,
        body.contato,
        nome, 
    ]);

    return new Response(JSON.stringify(results), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}

export async function DELETE(request, { params }) {
    const nome = params.nome; 

    const query = `DELETE FROM contatos WHERE id = ?;`;
    const [results] = await conexao.execute(query, [nome]);

    return new Response(JSON.stringify(results), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}