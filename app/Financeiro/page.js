'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import "./financeiro.css"


function Financeiro() {

    const [data, alteradata] = useState([])



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
        console.log(response.data )
    }



    useEffect(() => {
        
    }, [])


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
            <input onChange={ (e)=> alteradata(e.target.value) } />
            <button onClick={ ()=> pesquisadata(data) } >Pesquisar</button>


            {
                data.length > 0 ?
                    <table>
                        <tr>
                            <td>teste</td>
                            <td>teste</td>
                        </tr>
                        {
                            data.map( i =>
                                <tr  >
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
            
                                    
                    

                                </tr>
                            )
                        }
                    </table>
                :
                    <p>Carregando...</p>
            }

            <hr/>






        </div>





    );
}

export default Financeiro;





