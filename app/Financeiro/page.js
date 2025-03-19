'use client'
import { useState } from "react";
import "./financeiro.css"


function Financeiro() {



    const[mostraGasto , alteraMostragasto]= useState(false)
    const[mostraLucro, alteraMostraLucro]= useState(false)


    function Mostrar (){

        if( mostraGasto == true){

           alteraMostragasto(false)
           alteraMostraLucro(true)
           
        }else{

            alteraMostraLucro(false)
            alteraMostragasto(true)
            
        }

    }

    function NaoMostrar(){

        if(mostraGasto == false){

            alteraMostragasto(false)
           alteraMostraLucro(true)
           
        }else{

            alteraMostraLucro(false)
            alteraMostragasto(true)
            

        }
    }
    


    return ( 

        
        <div>
            <a href=" http://localhost:3000/"> 
                <button className="buttonVoltar"> Voltar </button>
            
            </a>
            
    
            <br/>
            <br/>

            <img className="logo"src="logo.png" width={100} height={100}/>


           
            <div className="MenuFinanceiro">

                <h1>Financeiro</h1>

            </div> 
            <br/>
                

            <div className="MenuInferior">

                                        
                <button onClick={ ()=> Mostrar ()}> Gastos </button>

                    
                <button onClick={ ()=> Mostrar ()}> Lucro </button>
                
                                                                
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





