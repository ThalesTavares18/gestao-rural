import conexao from "@/app/lib/conexao";

export async function GET() {
    const query = `
        SELECT p.nome, e.quantidade, e.data FROM estoque e JOIN produtos p ON e.id_produto = p.id;
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
