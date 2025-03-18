'use client'
import { useState } from "react";

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
            <h1> Meus Clientes</h1>

            <p> Cadastrar Clientes </p>
            <br/>
    
            <label> 

                Digite o nome:
                
                <input required onChange={ (e)=> alteraUsuario (e.target.value)}/>


            </label>
            <br/>
            

            <label>

                    Digite o telefone:

                    <input onChange={ (e)=> alteraTelefone(e.target.value)}/>

            </label>
            <br/>

            <label>

                    Digite o e-mail:

                    <input onChange={ (e)=> alteraEmail(e.target.value)}/>

            </label>
            <br/>
           

            <button onClick={ ()=> Cadastro()}> Salvar </button>


            {
                mostraUsuario == true &&

                    <div>
                        <p> Usuário cadastrado com sucesso! </p>
                    </div>
            }


        </div>


     );
}

export default MeusClientes;