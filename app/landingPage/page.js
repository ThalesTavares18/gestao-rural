import "./landingPage.css";

function landingPage() {
    return ( 


        <div> 





            <div className="menuPrincipal">

              
                <div className="logoNome">

                    <img className="logo" src="logo.png" width={100} height={100} />
                    <h1> Fazenda São Pedro  </h1>

                </div>

                <button> Produtos </button>
                <button> Localização </button>
                <button> Contato </button>
               

            </div>

            <div className="menuCentral">
                
              
                <br/>
                <p> Melhor Fazenda do mundo!!!</p>

                    <a href="http://localhost:3000/">
                        <button className="botaoMenu"> Menu </button>
                    </a>
            </div>
                
            <div className="itens">
                
                <h3> Produtos </h3> 

                <p> ...... </p>
                 
            </div>
            <div className="itens">
                
                <h3> Localização </h3> 

                <p> ...... </p>
                 
            </div>
            <div className="itens">
                
                <h3> Contato </h3> 
                <div className="informacoesContato">

                    <p>Telefone: 12 9999-99999 </p>
                    <p>Email: fazendasaopedro@gmail.com </p>
                    <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
                    Fale conosco no WhatsApp
                    </a>


                    
                </div>

                 
            </div>







              



               
               




        </div>
        

     );
}
export default landingPage;













