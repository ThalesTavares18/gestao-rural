import "./inicio.css"


function Inicio () {
    
    
    
    return ( 

        <div>
            <img className="logo"src="https://placehold.co/200"/>

                 <div className="espacamento">

                    <div>

                        <a href="http://localhost:3000/producao_e_vendas"> <p className="botoes">Produção e Vendas </p> </a>
                        <a href="http://localhost:3000/estoque"> <p className="botoes"> Estoque </p> </a>

                    </div>

                    <div>

                        <a href="http://localhost:3000/preparacao"> <p className="botoes"> Preparação </p> </a>
                        <a href="http://localhost:3000/financeiro"> <p className="botoes"> Financeiro </p> </a>

                    </div>


                 </div>

                <a href="http://localhost:3000/meus_clientes"> <p style={{marginLeft:810, marginTop:0}} className="botoes"> Meus Clientes </p> </a>

        </div>
     );
}

export default Inicio;