'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import "./meusclientes.css";
import host from "../lib/host";
import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';  // Importe o Toastify
import 'react-toastify/dist/ReactToastify.css';  // Importe o CSS necessário




export default function MeusClientes() {

    const [usuario, alteraUsuario] = useState([]);

    const [nome, alteraNome] = useState("");
    const [contato, alteraContato] = useState("");

    const [pesquisa, alteraPesquisa] = useState("");
    const [editando, alteraEditando] = useState(0)


    async function buscaTodos() {
        const response = await axios.get(host + "/meus_clientes");
        alteraUsuario(response.data);
        console.log(response.data);
    }

    async function buscaPorNome(nome) {

        nome = nome.trim(); // Remove espaços extras
        if (!nome) return;  // Não faz a pesquisa se nome estiver vazio

        const response = await axios.get(host + "/meus_clientes/" + nome)
        alteraUsuario(response.data)
    }

    async function insereUsuario() {

        if (!nome || !contato) return;

        const obj = {
            nome: nome,
            contato: contato,
        }

        const response = await axios.post(host + "/meus_clientes", obj);
        console.log(response);

        buscaTodos()
    }

    function enviaFormulario(e) {
        e.preventDefault()

        let nomeLocal = nome
        nomeLocal = nomeLocal.toLowerCase()



        if (nomeLocal.length <= 1) {
            toast.error("Nome muito curto")
            return
        }

        if (nomeLocal.length == 0) {
            toast.error("Por favor digite um nome valido")
            return
        }

        let contatoLocal = contato
        contatoLocal = contatoLocal.toLowerCase()


        if (contatoLocal.length <= 8) {
            toast.error("contato invalido")
            return
        }




        const obj = {
            nome: nomeLocal,
            contato: contato,
        }

        if (length.nomeLocal <= 3) {
            console.log("Nome muito curto")
            return

        }

        if (editando == 0) {
            insereUsuario(obj);
        }
        else {
            atualizaUsuario(obj)
        }
    }

    async function atualizaUsuario(obj) {

        console.log(obj);
        const response = await axios.put(host + "/meus_clientes/" + editando, obj)
        console.log(response)
        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraContato("")


    }

    async function removeUsuarios(id) {
        await axios.delete(host + "/meus_clientes/" + id)
        buscaTodos()

    }

    function montaEdicao(i) {
        alteraEditando(i.id)
        alteraNome(i.nome)
        alteraContato(i.contato)

    }

    function cancelarEdicao() {

        alteraEditando(0);
        alteraNome("");
        alteraContato("");
    }

    useEffect(() => {
        buscaTodos();
    }, []);

    return (
        <div>
            <div className="barrinhaverde">

                <div className="Logo">

                    <img className="logo" src="logo.png" width={100} height={100} />

                    <h1>Meus Clientes</h1>

                </div>




                <div className="BotaoVoltar">

                    <a href="http://localhost:3000/">
                        <button className="buttonVoltar"> Voltar </button>

                    </a>

                </div>

            </div>
            <br />


            <input placeholder="Pesquisa por Nome..." onChange={(e) => alteraPesquisa(e.target.value)} />
            <button className="buttonSalvar" onClick={() => buscaPorNome(pesquisa)} > Pesquisar </button>
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



                <h2> Lista de Contatos </h2>

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
                                            <button className="buttonVoltar" onClick={() => montaEdicao(i)} >Editar</button>
                                            <button className="buttonVoltar" onClick={() => removeUsuarios(i.id)} >Remover</button>
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

            <h2> Cadastrar Clientes </h2>
            <br />

            <div>
                <form onSubmit={(e) => enviaFormulario(e)}>



                    <label className="formulario">  Digite o nome: <br /> <input placeholder="Seu nome..." onChange={(e) => alteraNome(e.target.value)} value={nome} /> </label>
                    <br />
                    <label className="formulario"> Digite o contato: <br /> <input placeholder="Email ou telefone..." onChange={(e) => alteraContato(e.target.value)} value={contato} /> </label>
                    <br />
                    <br />

                    <button className="buttonSalvar" type="submit" >Salvar</button>

                    <button className="buttonSalvar" type="submit" onClick={cancelarEdicao}>Cancelar</button>

                </form>



                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            </div>


            <ToastContainer />  {/* Coloque o ToastContainer no final para exibir os toasts */}
        </div>
    );
}

