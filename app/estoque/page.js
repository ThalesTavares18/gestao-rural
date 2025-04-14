'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

    const [ produtos, alteraProdutos ] = useState([])

    const [ nome, alteraNome ] = useState([])
    const [ preco, alteraPreco ] = useState([])
    const [ quantidade, alteraQuantidade ] = useState([])

<<<<<<< Updated upstream
    const [modalNomeAberto, setModalNomeAberto] = useState(false); // Controle do modal de nome
=======
>>>>>>> Stashed changes
    const [ editando, alteraEditando ] = useState(0)
    const [ pesquisa, alteraPesquisa ] = useState("")

    async function buscaTodos(){
<<<<<<< Updated upstream
        const response = await axios.get("http://localhost:3000/api/estoque")
        alteraProdutos( response.data )
    }

    async function buscaPorNome( nome ){
        const response = await axios.get("http://localhost:3000/api/estoque/"+nome)
        alteraProdutos( response.data )
    }
=======
        const response = await axios.get("http://localhost:3000/api/produtos")
        alteraProdutos( response.data )
    }

    async function buscaPorID( id ){
        const response = await axios.get("http://localhost:3000/api/produtos/"+id)
        alteraProdutos( response.data )
    }

    function buscaPorNome(){}

    async function insereProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }
>>>>>>> Stashed changes

        const response = await axios.post("http://localhost:3000/api/produtos", obj)
        console.log(response)

<<<<<<< Updated upstream
    
    function buscaPorNome(){}

    async function insereProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.post("http://localhost:3000/api/estoque", obj)
        console.log(response)

        buscaTodos()

    }

    async function atualizaProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.put("http://localhost:3000/api/estoque/"+editando, obj)

        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraPreco("")
        alteraQuantidade("")

    }

    async function removeProduto( id ){
        await axios.delete("http://localhost:3000/api/estoque/"+id)
        buscaTodos()
    }

    function formataData( valor ){
        let data = valor.split("T")[0]
        let hora = valor.split("T")[1]

        data = data.split("-")
        data = data.reverse()
        data = data.join("/")

        hora = hora.split(".")[0]
        hora = hora.split(":")
        hora = hora[0]+":"+hora[1]

        return data+" às "+hora
=======
        buscaTodos()
>>>>>>> Stashed changes

    }

<<<<<<< Updated upstream
        


    }

    
      
    
    

    function montaEdicao( produto ){
        alteraEditando( produto.id )
        alteraNome( produto.nome )
        alteraPreco( produto.preco )
        alteraQuantidade( produto.quantidade )
    }

    function enviaFormulario(e){
        e.preventDefault()

        if( editando == 0 ){
            insereProduto()
        }else{
            atualizaProduto()
        }

    }


    

    useEffect( ()=> {
        buscaTodos()
    }, [] )

=======
    async function atualizaProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.put("http://localhost:3000/api/produtos/"+editando, obj)

        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraPreco("")
        alteraQuantidade("")

    }

    async function removeProduto( id ){
        await axios.delete("http://localhost:3000/api/produtos/"+id)
        buscaTodos()
    }

    function formataData( valor ){
        let data = valor.split("T")[0]
        let hora = valor.split("T")[1]

        data = data.split("-")
        data = data.reverse()
        data = data.join("/")

        hora = hora.split(".")[0]
        hora = hora.split(":")
        hora = hora[0]+":"+hora[1]

        return data+" às "+hora

    }

    function montaEdicao( produto ){
        alteraEditando( produto.id )
        alteraNome( produto.nome )
        alteraPreco( produto.preco )
        alteraQuantidade( produto.quantidade )
    }

    function enviaFormulario(e){
        e.preventDefault()

        if( editando == 0 ){
            insereProduto()
        }else{
            atualizaProduto()
        }

    }

    useEffect( ()=> {
        buscaTodos()
    }, [] )

>>>>>>> Stashed changes
    return (
        <div>
            
            <style>
                {`
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    font-family: Arial, sans-serif;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                    border: 1px solid #ddd;
                }
                th {
                    background-color: #f4f4f4;
                    color: #333;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                `}
            </style>

            <h1>Gerenciamento de produtos</h1>

            <button>Listagem</button>
            <button>Cadastro</button>

            <hr/>

            <p>Busca de produtos. Digite o ID:</p>
            <input onChange={ (e)=> alteraPesquisa(e.target.value) } />
<<<<<<< Updated upstream
            <button onClick={ ()=> buscaPorNome(pesquisa) } >Pesquisar</button>

            

            <h2>Estoque</h2>

            {
                estoque.length > 0 ?
=======
            <button onClick={ ()=> buscaPorID(pesquisa) } >Pesquisar</button>

            <h2>Listagem</h2>

            {
                produtos.length > 0 ?
>>>>>>> Stashed changes
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Preço</td>
                            <td>Quantidade</td>
                            <td>Registro</td>
                        </tr>
                        {
<<<<<<< Updated upstream
                            estoque.map( i =>
=======
                            produtos.map( i =>
>>>>>>> Stashed changes
                                <tr  >
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>R$ {i.preco.toFixed(2)}</td>
                                    <td>{i.quantidade}</td>
                                    <td>{ formataData(i.registro) }</td>
                                    
                                    <td>
<<<<<<< Updated upstream
                                        <button onClick={ ()=> redirect("/estoque/"+i.id) } >Ver</button>
                                        <button onClick={ ()=> montaEdicao(i) } >Editar</button>
                                        <button onClick={ ()=> removeProduto(i.id) } >Remover</button> 
                                    </td>

                                </tr>
                            )
                        }
                    </table>
                :
                    <p>Carregando...</p>
            }


<h2> Registro </h2>
{
                produtos.length > 0 ?
                    <table>
                        <tr>
                           
                            <td>Nome</td>
                            <td>Quantidade</td>
                            <td>Registro</td>
                        </tr>
                        {
                            produtos.map( i =>
                                <tr  >
                                    
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>{ formataData(i.registro) }</td>
                                    
                                    <td>
=======
>>>>>>> Stashed changes
                                        <button onClick={ ()=> redirect("/produto/"+i.id) } >Ver</button>
                                        <button onClick={ ()=> montaEdicao(i) } >Editar</button>
                                        <button onClick={ ()=> removeProduto(i.id) } >Remover</button> 
                                    </td>

                                </tr>
                            )
                        }
                    </table>
                :
                    <p>Carregando...</p>
            }

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
            <hr/>

            <h2>Cadastro</h2>

            <form onSubmit={ (e)=> enviaFormulario(e) } >
                <label> Digite o nome do produto: <br/> <input onChange={(e)=> alteraNome(e.target.value) } value={nome} /> </label>
                <br/>
                <label> Digite o preço: <br/> <input onChange={(e)=> alteraPreco(e.target.value) } value={preco} /> </label>
                <br/>
                <label> Digite a quantidade: <br/> <input onChange={(e)=> alteraQuantidade(e.target.value) } value={quantidade} /> </label>
                <br/>
                <button>Salvar</button>

            </form>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes
    );
}