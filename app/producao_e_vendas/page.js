'use client'
import "./producao_e_vendas.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Producao_e_vendas() {

    const [produtos, setprodutos] = useState([])
    const [vendas, setvendas] = useState([])
    const [pesquisa, setpesquisa] = useState([])


    async function buscaTodos() {
        const response = await axios.get("http://localhost:3000/api/producao_e_vendas")
        setprodutos(response.data)
    }

    async function buscaVendas(){
        const response = await axios.get("http://localhost:3000/api/producao_e_vendas/vendas")
        setvendas(response.data)
    }

    async function buscaPorNome( nome ){
        const response = await axios.get("http://localhost:3000/api/producao_e_vendas/"+nome)
        setprodutos(response.data)
    }

    useEffect(() => {
        buscaTodos()
        buscaVendas()
    }, [])

    return ( 

        <div>           
                <div className="barrinhaverde">

                    <img className="logo"src="logo.png" width={100} height={100}/>

                    <a href="http://localhost:3000"> <p className="voltar"> Voltar </p> </a>

                    <h1 style={{marginTop:50}}>Produção e Vendas</h1>

                </div>
            
             <div  className="espacamento">

                 <p style={{marginRight:140}} className="pv">PRODUZIDOS</p>


                 <p className="pv">VENDAS</p>

            </div>

            <div className="espacamento">


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
                
                    <div className="ml">

                            <input onChange={(e)=> setpesquisa(e.target.value)}/>
                            <button onClick={()=> buscaPorNome(pesquisa)}>Pesquisar</button>

                        {
                            produtos.length > 0 ?
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                    
                                </thead>

                                {
                                    produtos.map((i, index )=>
                                        
                                        <tr key={index}>
                                            <td>{i.nome}</td>
                                            <td>{i.quantidade}</td>
                                        </tr>
                                    )
                                }

                            </table>
                            :
                            <p>Carregando...</p>
                        }

                    </div>


                </div>

                <img src="http://placehold.co/300"/>

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
                
                    <div className="mr">

                        {
                            vendas.length > 0 ?
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                    
                                </thead>

                                {
                                    vendas.map((i, index )=>
                                        
                                        <tr key={index}>
                                            <td>{i.nome}</td>
                                            <td>{i.quantidade}</td>
                                        </tr>
                                    )
                                }

                            </table>
                            :
                            <p>Carregando...</p>
                        }

                    </div>












                </div>

            </div>

        </div>

     );
}




export default Producao_e_vendas;