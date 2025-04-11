

import conexao from "@/app/lib/conexao";

export async function GET() {
    const query = `
        SELECT p.nome, p.preco, e.quantidade, e.id_produtoFROM estoque e JOIN produtos p ON e.id_produto = p.id;
    `;
    const [results] = await conexao.execute(query);

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}

export async function POST(request) {
    const body = await request.json();
    const query = `
        INSERT INTO estoque (id_produto, quantidade)
        VALUES ((SELECT id FROM produtos WHERE nome = ?), ?);
    `;

    const [results] = await conexao.execute(query, [body.id_produto, body.quantidade]);

    return new Response(
        JSON.stringify({ id: results.insertId }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}

export async function UPDATE(request) {
    const body = await request.json();
    const query = `
        UPDATE estoque SET id_produto =1, quantidade =20 WHERE id_produto = 1`;


    const [results] = await conexao.execute(query, [body.quantidade, body.id_produto]);

    return new Response(
        JSON.stringify({ message: "Estoque atualizado com sucesso!" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}


