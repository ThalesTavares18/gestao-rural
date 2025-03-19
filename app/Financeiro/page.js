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


    return ( 

        
        <div>
            <a href=" http://localhost:3000/"> 
                <button> Voltar </button>
            
            </a>
            
    
            <br/>
            <br/>
                <img src=" https://placehold.co/100x100"/>

           
            <div className="MenuFinanceiro">

                <h1>Financeiro</h1>

            </div> 
                

            <div className="MenuInferior">

                    <div className="buttonInferior">
                    
                        <button onClick={ ()=> Mostrar ()}> Gastos </button>

                    </div>

                    <div className="buttonInferior">

                        <button onClick={ ()=> Mostrar ()}> Lucro </button>

                    </div>                            
                    
            </div>


            <div className="CaixaTexto">

                {
                    mostraGasto == true &&


                        <div className=" caixaP">
                            <p>Caixa de texto Gastos </p>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                        

                        </div>

                }

                {

                    mostraLucro == true &&


                    <div className="caixaP">
                        <p>Caixa de texto Lucros</p>
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <br/><br/><br/>
                    
                    </div>
                }



            </div>

        </div>
                
      

      
        
     );
}

export default Financeiro;





