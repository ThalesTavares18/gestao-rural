import "./inicio.css"

function Inicio () {
    
    
    
    return ( 
        
        <div>
            <div className="barrinhaverde">
                <img src="logo.png" width={25} height={25}/>
                <p>Fazendo do Pedrim</p>
            </div>

                 <div className="espacamentoprincipal">


                    <div className="botoesInicial">
                        <a href="./producao_e_vendas"> <p className="botoes"> <img src="/chart-line-solid.svg"/> <br/> Produção e Vendas </p> </a>
                        <a href="./estoque"> <p className="botoes"> <img src="/boxes-stacked-solid.svg"/> <br/> Estoque </p> </a>     
                        <a href="./planilhas"> <p className="botoes"> <img src="/table-solid.svg"/> <br/> Planilhas </p> </a>
                        <a href="./Financeiro"> <p className="botoes"> <img src="/money-bill-wheat-solid.svg"/> <br/> Financeiro </p> </a>
                        <a href="./MeusClientes"> <p style={{marginLeft:30}} className="botoes"> <img src="/users-solid.svg"/> <br/> Meus Clientes </p> </a>
                    </div>

                    <img className="logo"src="logo.png" width={250} height={250}/>

                </div>

        </div>
     );
}

export default Inicio;