'use client'
import { useState } from "react";
import "./meusclientes.css"

function MeusClientes() {

    const [ usuario, alteraUsuario]= useState("")
    const [ telefone, alteraTelefone]= useState("")
    
    const [ mostraUsuario, alteraMostraUsuario ]= useState(false)
    const [ mostraPesquisa, alteraMostraPesquisa ]= useState(false)
    

    function Cadastro (){

        if( usuario && (telefone || email)){
            
            alteraMostraUsuario(true)
            alteraMostraUsuario = alteraMostraPesquisa
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


            <img className="logo"src="logo.png" width={100} height={100}/>


            <div className="MenuClientes">

                <h1> Meus Clientes</h1>

            </div>

                <div className="pesquisa">


                </div>

            <div> 
                    <input required onChange={ (e)=> mostraPesquisa (e.target.value)}/>

                    <button className="buttonSalvar"onClick={ ()=> mostraPesquisa()}> Pesquisar </button>
                                                        
            </div>

            {
                mostraPesquisa == true ?
                <div>
                    <p> <strong>Contatos</strong></p>

                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                </div>
                :
                <div/>
            }

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

                        Digite o email ou telefone:

                        <input onChange={ (e)=> alteraTelefone(e.target.value)}/>

                </label>

            </div>

            <br/>

            
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