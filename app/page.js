import "./inicio.css"


function Inicio () {
    
    
    
    return ( 

        <div>
            <img className="logo"src="https://placehold.co/200"/>

                 <div className="espacamento">

                    <div>

                        <p className="botoes"> Produção e Vendas</p>
                        <p className="botoes"> Estoque </p>

                    </div>

                    <div>

                        <p className="botoes"> Preparação </p>
                        <p className="botoes"> Financeiro </p>

                    </div>


                 </div>

                <p style={{marginLeft:810, marginTop:0}} className="botoes"> Meus Clientes </p>

        </div>
     );
}

export default Inicio;