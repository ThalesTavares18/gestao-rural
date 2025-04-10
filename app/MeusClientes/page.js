'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import "./meusclientes.css";
import { redirect } from "next/navigation";

export default function MeusClientes() {

    const [usuario, alteraUsuario] = useState([]);

    const [nome, alteraNome] = useState("");
    const [contato, alteraContato] = useState("");
    
    const [pesquisa, alteraPesquisa] = useState("");
    const [editando, alteraEditando] = useState(0)
 

    async function buscaTodos() {
        const response = await axios.get("http://localhost:3000/api/meus_clientes");
        alteraUsuario(response.data);
        console.log(response.data);
    }

    async function buscaPorID( id ){
        const response= await axios.get("http://localhost:3000/api/meus_clientes/"+id)
        alteraUsuario(response.data)
        console.log(response.data)
    }



    async function insereUsuario() {

        const obj = {
            nome: nome,
            contato: contato,
        }

        const response = await axios.post("http://localhost:3000/api/meus_clientes", obj);
        console.log(response);

        buscaTodos()
    }

    function enviaFormulario(e) {
        e.preventDefault()

        if (editando == 0) {
            insereUsuario();
        }
    else{
        atualizaUsuario()
    }
} 

    async function atualizaUsuario(){
        const obj = {
            nome: nome,
            contato: contato,
           
        }

        console.log(obj);
        const response= await axios.put("http://localhost:3000/api/meus_clientes/"+editando, obj)
        console.log(response)
        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraContato("")
        

}

    async function removeUsuarios(id){
        await axios.delete("http://localhost:3000/api/meus_clientes/"+id)
        buscaTodos()

}

    function montaEdicao( i ){
        alteraEditando(i.id)
        alteraNome(i.nome)
        alteraContato(i.contato)
       
    }

    useEffect(() => {
        buscaTodos();
    }, []);

    return (
        <div>
            <a href="http://localhost:3000/">
                <button className="buttonVoltar"> Voltar </button>
            </a>
            <br />
            <br />

            <img className="logo" src="logo.png" width={100} height={100} />

            <div className="MenuClientes">
                <h1> Meus Clientes</h1>
            </div>

           
                <input onChange={(e) => alteraPesquisa(e.target.value)} />
                <button className="buttonSalvar" onClick={() => buscaPorID(pesquisa)} > Pesquisar </button>
                <hr />
           

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
                            {usuario.map((i, index) => (
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>{i.contato}</td>


                                    <td> 
                                        <button onClick={ ()=> redirect("/meus_clientes/"+i.id)} >Ver</button>
                                        <button onClick={ ()=> montaEdicao(i)} >Editar</button>
                                        <button onClick={ ()=> removeUsuarios(i.id)} >Remover</button>
                                    </td>

                                </tr>

                                
                            )
                            )   
                            }
                        </tbody>
                    </table>
                
                
                : 
                <p>Carregando...</p>
            }
            
            </div>

            <h1> Cadastrar Clientes </h1>
            <br />

            <div className="sumario">
                <form onSubmit={(e)=> enviaFormulario (e)}>
                   
                    <label> Digite o nome: <br /> <input onChange={(e) => alteraNome(e.target.value)}  value={nome}/> </label>
                    <br />
                    <label> Digite o contato: <br /> <input onChange={(e) => alteraContato(e.target.value)}  value={contato}/> </label>
                    <br />
                    <br />

                    <button className="buttonSalvar" type="submit" >Salvar</button>
                </form>
            </div>
        </div>
    );
}

