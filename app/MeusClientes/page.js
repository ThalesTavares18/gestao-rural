'use client'
import axios from "axios";
import { useEffect, useState } from "react";

import "./meusclientes.css"

export default function MeusClientes() {

    const [ usuario, alteraUsuario]= useState([])
    const [ telefone, alteraTelefone]= useState([])
    
    const [ mostraUsuario, alteraMostraUsuario ]= useState(false)
    const [ mostraPesquisa, alteraMostraPesquisa ]= useState(false)
    



    async function buscaTodos(){
        const response= await axios.get("http://localhost:3000/api/meus_clientes")
        alteraUsuario(response.data)
        console.log(response.data)
    
    }

    async function insereUsuario(){

        e.preventDefault()

        const obj = {
            nome: usuario,
            contato: telefone
        }

        const response= await axios.post("http://localhost:3000/api/meus_clientes", obj)
        console.log(response)

        buscaTodos()
    }

    function enviaFormulario(e){
        e.preventDefault()

        if( editando == 0){
            insereProdutos()
        
        }
    }

    function Cadastro (){

        if( usuario && (telefone || email)){
            
            alteraMostraUsuario(true)
            alteraMostraUsuario = alteraMostraPesquisa
        }else{



        }

    }

    useEffect( ()=> {
        buscaTodos()
       
    }, [])


    
    

   
    
    
    
    
    
    
    return ( 

        <div>

            <a href=" http://localhost:3000/"> 

                <button className="buttonVoltar"> Voltar </button>
            
            </a>
            <br/>
            <br/>


            <img className="logo"src="logo.png" width={100} height={100}/>


            <div className="MenuClientes">

                <h1> Meus Clientes</h1>

            </div>

            <div> 

                <input onChange={ (e)=> mostraPesquisa (e.target.value)}/>

                <button className="buttonSalvar"onClick={ ()=> mostraPesquisa()}> Pesquisar </button>

                <hr/>




            </div>

            <div>
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
                
                <h2> Lista Contatos </h2>

                {
                    usuario.length > 0 ?
                        <table>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                </tr>
                                
                            </thead>
                            <tbody>

                                {
                                    usuario.map ((i, index) =>
                                        <tr key={index}>
                                            <td>{i.id}</td>
                                            <td>{i.nome}</td>
                                            <td>{i.contato}</td>
                                        </tr>
                                    )
                                }

                            </tbody>


                        </table>

                    :
                    <p>Carregando...</p>

                }
            </div>


          
               <h1>  Cadastrar Clientes  </h1>
                <br/>

            <div className="sumario">

                <form onSubmit={(e)=> enviaFormulario (e)}>

                    <label> Digite o nome: <br/> <input onChange={ (e)=> alteraUsuario (e.target.value) } /> </label>
                    <br/>
                    <label> Digite o contato: <br/> <input onChange={ (e)=> alteraTelefone (e.target.value) } /> </label>
                    <br/>
                    <br/>
                    
                    <button className="buttonSalvar"onClick={ ()=> Cadastro()}> Salvar </button>

                </form>
            </div>
            
            

        </div>


     );
    }

