import "./inicio.css"


function Inicio () {
    
    
    
    return ( 
        
        <div>
            <div className="barrinhaverde">
                <p>Página Inicial</p>
            </div>

                 <div className="espacamento">

                    <img className="logo"src="logo.png" width={500} height={500}/>

                    <div className="espacamento_cima">

                        <div className="espacamento">

                            <a href="./producao_e_vendas"> <p className="botoes">Produção e Vendas </p> </a>
                            <a href="./estoque"> <p className="botoes"> Estoque </p> </a>     

                        </div>

                        <div className="espacamento">

                            <a href="./preparacao"> <p className="botoes"> Preparação </p> </a>
                            <a href="./Financeiro"> <p className="botoes"> Financeiro </p> </a>

                        </div>

                    <div className="espacamento_esquerda">

                        <a href="./MeusClientes"> <p style={{marginLeft:30}} className="botoes"> Meus Clientes </p> </a>
                        
                    </div>


                    </div>

                </div>

        </div>
     );
}

export default Inicio;