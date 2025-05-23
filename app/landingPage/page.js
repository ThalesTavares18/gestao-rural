
import "./landingPage.css";
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import host from "../lib/host";





function landingPage() {
    return ( 
        
        
        <div> 





            <div className="menuPrincipal">

              
                <div className="logoNome">

                    <img className="logo" src="logo.png" width={100} height={100} />
                    <h1> Fazenda São Pedro  </h1>

                </div>
                <div className="navegacao">


                    <a href="#produtos">Produtos</a>
                    <a href="#localizacao">Localização</a>
                    <a href="#contato">Contato</a>
                


                </div>

            </div>

            <div className="menuCentral">
                
              
                <br/>
                <p className="teste"> Plantando o Futuro</p>

                    <a href="http://10.60.46.53:3000">
                        <button className="botaoMenu"> Iniciar </button>
                    </a>
            </div>
                
                <h3> Produtos </h3> 

            <div className="cardGeral" id="produtos">
                
                <div className="card">
                    <img
                        src="mandioca.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Mandioca</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="alface.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Alface</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="couve.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Couve</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="espinafre.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Espinafre</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="cenoura.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4> Cenoura </h4>
                    </div>
                </div>



            </div>

            <div className="cardGeral">

                <div className="card">
                    <img
                        src="beterraba.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Beterraba </h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="abobrinha.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Abobrinha</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="brocolis.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Brócolis</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="batata.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Batata</h4>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="cebola.png"
                        alt="Avatar"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h4>Cebola</h4>
                    </div>
                </div>


            </div>

            <div id="localizacao" className="localizacao">
                
                <h3> Localização </h3> 
                <div style={{ textAlign: 'center' }} className="local">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.6484370918515!2d-47.893978723801986!3d-22.024777606947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87722afe006bb%3A0x4a8b254e7543696!2sSenac%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1744920602129!5m2!1spt-BR!2sbr"
                    width={500}
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>


                
                 
            </div>

            <h3>Contato</h3>

            <footer className="footer" id="contato">
            <p><i className="fas fa-phone-alt"></i> Telefone: 12 9999-99999</p>
            <p><i className="fas fa-envelope"></i> Email: fazendasaopedro@gmail.com</p>
            <a 
                href="https://wa.me/5599999999999" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i> Fale conosco no WhatsApp
            </a>
            </footer>








              



               
               




        </div>
        

     );
}
export default landingPage;













