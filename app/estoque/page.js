'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import "./pagina_estoque.css";
import host from "../lib/host";

export default function Home() {

    const [ produtos, alteraProdutos ] = useState([])

    const [ nome, alteraNome ] = useState([])
    const [ preco, alteraPreco ] = useState([])
    const [ quantidade, alteraQuantidade ] = useState([])

    const [ editando, alteraEditando ] = useState(0)
    const [ pesquisa, alteraPesquisa ] = useState("")

    async function buscaTodos(){
        const response = await axios.get(host+"/estoque")
        alteraProdutos( response.data )
    }

    async function buscaPorID( id ){
        const response = await axios.get(host+"/estoque/"+id)
        alteraProdutos( response.data )
    }

    function buscaPorNome(){}

    async function insereProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.post(host+"/estoque", obj)
        console.log(response)

        buscaTodos()

    }

    async function atualizaProduto(){

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.put(host+"/estoque/"+editando, obj)

        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraPreco("")
        alteraQuantidade("")

    }

    async function removeProduto( id ){
        await axios.delete(host+"/estoque/"+id)
        buscaTodos()
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

    return (
        <div>
            <div className="barrinhaverde">
      <div className="Logo">
        <img className="logo" src="logo.png" width={100} height={100} />
        <h1>Planilhas</h1>
      </div>
  
      <div className="BotaoVoltar">
        <a href=" http://localhost:3000/">
          <button className="buttonVoltar">Voltar</button>
        </a>
      </div>
    </div>
           

            <h1>Gerenciamento de produtos</h1>

            <button >Listagem</button>
            <button className="Botoes">Cadastro</button>

            <hr/>

            <p>Busca de produtos. Digite o ID:</p>
            <input onChange={ (e)=> alteraPesquisa(e.target.value) } />
            <button onClick={ ()=> buscaPorID(pesquisa) } >Pesquisar</button>

            
                <style>
                    {`
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        font-family: 'Arial', sans-serif;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 12px;
                        text-align: left;
                        font-size: 16px;
                    }
                    th {
                        background-color: #4CAF50;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                    tr:hover {
                        background-color: #ddd;
                    }
                    `}
                </style>

            <h2>Listagem</h2>

            {
                produtos.length > 0 ?
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Preço</td>
                            <td>Quantidade</td>
                            <td>Registro</td>
                        </tr>
                        {
                            produtos.map( i =>
                                <tr  >
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>R$ {i.preco.toFixed(2)}</td>
                                    <td>{i.quantidade}</td>
                                    
                                    <td>
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
    );
}
