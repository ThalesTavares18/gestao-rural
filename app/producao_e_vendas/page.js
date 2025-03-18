import "./producao_e_vendas.css"

function Producao_e_vendas() {



    return ( 

        <div>

            <a href="http://localhost:3000"> <p className="voltar"> Voltar </p> </a>
              
            <img className="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUWneiX531Urqgpl0xNVZ4cfvussVpm_mN__aZHy-g13FsiI0whWruLphUHNtPBE_OVM&usqp=CAU"/>

            

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