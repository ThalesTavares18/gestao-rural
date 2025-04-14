

import conexao from "@/app/lib/conexao";

export async function GET() {
    

        const query = `
            SELECT p.nome, p.preco, e.quantidade, e.id_produto FROM estoque e JOIN produtos p ON e.id_produto = p.id;
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
           INSERT INTO estoque( id_produto, quantidade, data, entrada) VALUES (?, ?, '?',?);
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

    export async function PUT(request) {
        const body = await request.json();
        const query = `
            UPDATE estoque SET id_produto =?, quantidade =? WHERE id_produto = ?`;


        const [results] = await conexao.execute(query, [body.quantidade, body.id_produto]);

        return new Response(
            JSON.stringify({ message: "Estoque atualizado com sucesso!" }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    
}


