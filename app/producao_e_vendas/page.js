import "./producao_e_vendas.css"

function Producao_e_vendas() {



    return ( 

        <div>
           
                <div className="barrinhaverde">

                    <img className="logo"src="logo.png" width={100} height={100}/>


                    <a href="http://localhost:3000"> <p className="voltar"> Voltar </p> </a>

                    <h1 style={{marginTop:50}}>Produção e Vendas</h1>

                </div>
            
             <div  className="espacamento">

                 <p style={{marginRight:140}} className="pv">PRODUZIDOS</p>

                 <p className="pv">VENDAS</p>

            </div>

            <div className="espacamento">

                <p style={{marginLeft:200}}className="caixa_de_texto"></p>

                <img src="http://placehold.co/300"/>

                <p style={{marginRight:200}} className="caixa_de_texto"></p>

            </div>

        </div>

     );
}

export default Producao_e_vendas;