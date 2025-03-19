import "./inicio.css"


function Inicio () {
    
    
    
    return ( 
        
        <div>
            <div className="barrinhaverde"></div>

                 <div className="espacamento">

                    <img className="logo"src="logo.png" width={500} height={500}/>

                    <div className="espacamento_cima">

                        <div className="espacamento">

                            <a href="http://localhost:3000/producao_e_vendas"> <p className="botoes">Produção e Vendas </p> </a>
                            <a href="http://localhost:3000/estoque"> <p className="botoes"> Estoque </p> </a>     

                        </div>

                        <div className="espacamento">

                            <a href="http://localhost:3000/preparacao"> <p className="botoes"> Preparação </p> </a>
                            <a href="http://localhost:3000/Financeiro"> <p className="botoes"> Financeiro </p> </a>

                        </div>

                    <div className="espacamento_esquerda">

                        <a href="http://localhost:3000/MeusClientes"> <p style={{marginLeft:30}} className="botoes"> Meus Clientes </p> </a>
                        

                    </div>


                    </div>

                </div>

        </div>
     );
}

export default Inicio;