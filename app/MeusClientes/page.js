'use client'
import { useState } from "react";
import "./meusclientes.css"

function MeusClientes() {

    const [ usuario, alteraUsuario]= useState("")
    const [ telefone, alteraTelefone]= useState("")
    const [ email, alteraEmail]= useState("")

    const [ mostraUsuario, alteraMostraUsuario ]= useState(false)
    

    function Cadastro (){

        if( usuario && (telefone || email)){
            
            alteraMostraUsuario(true)
        }else{


        }




    }
    return ( 

        <div>

            <a href=" http://localhost:3000/"> 

                <button className="buttonVoltar"> Voltar </button>
            
            </a>
            <br/>
            <br/>


            <img src=" https://placehold.co/100x100"/>

            <div className="MenuClientes">

                <h1> Meus Clientes</h1>

            </div>


            <p> <u> <strong> Cadastrar Clientes </strong></u> </p>

               

            <br/>


            <div className="sumario">

                <label> 

                    Digite o nome:
                    
                    <input required onChange={ (e)=> alteraUsuario (e.target.value)}/>


                </label>

            </div>
    
            <br/>
                        
            
            <div className="sumario">

                <label>

                        Digite o telefone:

                        <input onChange={ (e)=> alteraTelefone(e.target.value)}/>

                </label>

            </div>

            <br/>

            <div className="sumario">

            <label>

                    Digite o e-mail:

                    <input onChange={ (e)=> alteraEmail(e.target.value)}/>

            </label>

            </div>

            <br/>
           
            <div >

                <button className="buttonSalvar"onClick={ ()=> Cadastro()}> Salvar </button>

            </div>
            <br/>


            {
                mostraUsuario == true &&

                    
                    <p className="mostraUsuario"> Usuário cadastrado com sucesso! </p>

                    
            }


        </div>


     );
}

export default MeusClientes;