'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import "./financeiro.css"


function Financeiro() {

    const [data, alteradata] = useState([])
    const [pesquisa, alterapesquisa] = useState([])
    const [semana, alterasemana] = useState([])




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
        const response = await axios.get("http://localhost:3000/api/financeiro/"+ data)
        alteradata( response.data )
    
    }
    
    async function pesquisasemana(){
        const response = await axios.get("http://localhost:3000/api/financeiro/semana")
        alterasemana( response.data)
        
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

                    <a href=" http://localhost:3000/">
                        <button className="buttonVoltar"> Voltar </button>

                    </a>

                </div>

            </div>

            


            <p>Digite uma data: </p>
            <input type="date" onChange={ (e)=> alterapesquisa(e.target.value) } />
            <button onClick={ ()=> pesquisadata(pesquisa) } >Pesquisar</button>

            {
                data.length > 0 &&
                    <table>
                        <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>Quantidade</td>
                            <td>Total Venda</td>
                            <td>Data</td>
                
                        </tr>
                        
                        </tbody>
                        {
                            data.map( i =>
                                <tr  >
                        
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>{i.total_venda}</td>
                                    <td>{formataData(i.data)}</td>
                                    

                                </tr>
                            )
                        }
                    </table>
               
            }    






            {
                semana.length > 0 &&
                    <table>
                        <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>Quantidade</td>
                
                        </tr>
                        
                        </tbody>
                        {
                            semana.map( i =>
                                <tr  >
                        
                                    <td>{i.nome}</td>
                                    <td>{i.quantidade}</td>
                                    <td>{i.total_venda}</td>
                                    <td>{formataData(i.data)}</td>
                                    

                                </tr>
                            )
                        }
                    </table>
               
            }    
           
            <hr/>






        </div>





    );
}

export default Financeiro;





