'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import "./financeiro.css"
import host from "../lib/host";
import { ToastContainer, toast, Bounce } from 'react-toastify';  // Importe o Toastify
import 'react-toastify/dist/ReactToastify.css';  // Importe o CSS necessário


function Financeiro() {

    const [data, alteradata] = useState([])
    const [pesquisa, alterapesquisa] = useState([])
    
    const [semana, alterasemana] = useState([])
    const [mes, alterames] = useState([])




    {/*const [vendas, alteravendas] = useState([]) */}



    {/* async function buscaTodos() {
        const response = await axios.get("http://localhost:3000/api/financeiro")
        alteravendas(response.data)
    } */}


    // async function pesquisadata() {

    //     const response = await axios.get("http://localhost:3000/api/financeiro/2025-01-03")
    //     console.log(response)
    //     console.log(oii)


    // }

    async function pesquisadata( data ){
        
        
        const response = await axios.get(host+"/financeiro/"+ data)
        
        alteradata( response.data )
        alterames([])
        alterasemana([])




        



    
    }
    
    async function pesquisasemana(){
        const response = await axios.get(host+"/financeiro/semana")
        alterasemana( response.data)
        alterames([])
        alteradata([])



        let semanalocal = response.data
        if(semanalocal.length == 0){
            toast.error('Não houve vendas esse semana', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            return
        }

        
        
    }
    
    async function pesquisames(){
        
        
        const response = await axios.get(host+"/financeiro/mes")
        alterames( response.data)
        alterasemana([])
        alteradata([])
        


        let meslocal = response.data

        

        if(meslocal.length == 0){
            toast.error('Não houve vendas esse mes', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce
                        });
            return
        }
        
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

        return data

    }



    

    return (


        <div>


            <div className="barrinhaverde">

                <div className="Logo">

                    <img className="logo" src="logo.png" width={100} height={100} />

                    <h1>Financeiro</h1>

                </div>




                <div className="BotaoVoltar">

                    <a href="http://localhost:3000/">
                        <button className="buttonVoltar"> Voltar </button>

                    </a>

                </div>

            </div>

            <style>{`
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    font-family: 'Arial', sans-serif;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
                    border-radius: 4px;
                    overflow: hidden;
                }

                thead {
                    background-color: #4CAF50;
                }

                th {
                    background-color: ##4CAF50;
                    color: white;
                    padding: 12px;
                    text-align: left;
                    font-size: 16px;
                    border: 1px solid #ddd;
                }

                td {
                    padding: 12px;
                    text-align: left;
                    font-size: 16px;
                    border: 1px solid #ddd;
                }

                tbody tr:nth-child(even) {
                    background-color: #f9f9f9;
                }

                tbody tr:nth-child(odd) {
                    background-color: #ffffff;
                }

                tbody tr:hover {
                    background-color: #e0e0e0;
                }
`                   }
            </style>

            <div className="botoes">

            
            <div className="pesquisa">

                <h1>Selecione uma data:   </h1>
                <input type="date" onChange={ (e)=> alterapesquisa(e.target.value) } />
                <button onClick={ ()=> pesquisadata(pesquisa) } >Pesquisar</button>


            </div>


            <div className="SemanaMes">

                <button onClick={pesquisames}> Vendas do Mês</button>


                <button onClick={pesquisasemana}> Vendas da Semana</button>


            </div>

            </div>



            {
                data.length > 0 &&
                <table>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Total de Vendas</th>
                            <th>Data</th>
                
                        </tr>
                        
                        </thead>

                        <tbody>
                        {
                            data.map( i =>
                                <tr  >
                        
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>R${i.total_venda.toFixed()}</td>
                                    <td>{formataData(i.data)}</td>
                                    

                                </tr>
                            )

                        
                        }

                       

                        </tbody>
                    </table>
                    
               
            }    






            {
                semana.length > 0 &&
                    <table>
                        <thead>
                            <h2>Vendas da Semana: </h2>
                        <tr  >
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Total de Vendas</th>
                            <th>Data</th>
                
                        </tr>
                        
                        </thead>

                        <tbody>
                        {
                            semana.map( i =>
                                <tr>
                        
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>R${i.total_venda.toFixed()}</td>
                                    <td>{formataData(i.data)}</td>
                                    

                                </tr>
                            )
                        }
                        
                        </tbody>
                    </table>
               
            }    
           


            {
                mes.length > 0 &&
                    <table>
                        <thead>
                            <h2>Vendas do Mês: </h2>
                            <tr  >
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Total de Vendas</th>
                                <th>Data</th>
                    
                            </tr>
                        
                        </thead>

                        <tbody>
                        {
                            mes.map( i =>
                                <tr  >
                        
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>R${i.total_venda.toFixed()}</td>
                                    <td>{formataData(i.data)}</td>
                                    

                                </tr>
                            )
                        }

                        </tbody>
                    </table>
               
            }    

           



            <ToastContainer />  {/* Coloque o ToastContainer no final para exibir os toasts */}
        </div>





    );
}

export default Financeiro;





