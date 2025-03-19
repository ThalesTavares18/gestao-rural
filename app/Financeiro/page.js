'use client'
import { useState } from "react";
import "./financeiro.css"


function Financeiro() {



    const[mostraGasto , alteraMostragasto]= useState(false)
    const[mostraLucro, alteraMostraLucro]= useState(false)


    function MostrarGasto (){

        if( mostraGasto == true){

           alteraMostragasto(false)
          
           
        }else{

           
            alteraMostragasto(true)
            
        }

    }

    function MostrarLucro (){

        if( mostraLucro == true){

           alteraMostraLucro(false)
          
           
        }else{

           
            alteraMostraLucro(true)
            
        }

    }


    return ( 

        
        <div>
    
           
            <div className="barrinhaverde">

                <div className="Logo">

                        <img className="logo"src="logo.png" width={100} height={100}/>

                        <h1>Financeiro</h1>

                </div>

                        
                    

                <div className="BotaoVoltar">

                        <a href=" http://localhost:3000/"> 
                            <button className="buttonVoltar"> Voltar </button>
                        
                        </a>

                </div>
                    
            </div>
                

            <div className="MenuInferior">

                                        
                <button onClick={ ()=> MostrarGasto ()}> Gasto </button>

                    
                <button onClick={ ()=> MostrarLucro ()}> Lucro </button>
                
                                                                
            </div>


            <div className="CaixaTexto">

                {
                    mostraGasto == true ?


                        <div className=" caixaP">
                            <p>Caixa de texto Gastos </p>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                        

                     
                        </div>
                    :
                    <div></div>

                }

                {

                    mostraLucro == true ?


                        <div className="caixaP">
                            <p>Caixa de texto Lucros</p>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                        
                    
                        </div>
                    :
                    <div></div>
                }



            </div>

        </div>
                
      

      
        
     );
}

export default Financeiro;





