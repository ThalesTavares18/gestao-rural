'use client'
import "./producao_e_vendas.css"
import { useEffect, useState } from "react";
import axios from "axios";
import host from "../lib/host";
import ReactApexChart from "react-apexcharts";

function Producao_e_vendas() {

    const [produtos, setprodutos] = useState([])
    const [vendas, setvendas] = useState([])
    const [pesquisa, setpesquisa] = useState([])

    const [dadosproduto, setDadosProdutos] = useState([])
    const [dadosNomeProduto, setDadosNomeProduto] = useState({})

    const [dados, setDados] =useState({
        series: [{
            name: 'Produzidos',
            //data: []
             data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, ],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: dadosNomeProduto,
            },
            yaxis: {
              title: {
                text: 'Quantidade vendida'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  + val + " unidades    "
                }
              }
            }
          },
    })
  
    async function buscaVendas(){
      const response = await axios.get(host+"/producao_e_vendas/vendas")  
      
      //setvendas(response.data)


      const data = response.data
      const itens = []
      
      for (let i = 0; i < data.length; i++) {
        const index = itens.findIndex(item => item.id === data[i].id);
        
        if (index == -1) {
          itens.push(data[i]);
        } else {
          itens[index].quantidade += data[i].quantidade;
        }
      }
      
      setvendas(itens)
    }

    async function buscaTodos() {
        const response = await axios.get(host+"/producao_e_vendas")

        setprodutos(response.data)

        const response2 = await axios.get(host+"/producao_e_vendas")

      const data = response2.data
      const itens = []
      
      for (let i = 0; i < data.length; i++) {
        const index = itens.findIndex(item => item.id === data[i].id);
        
        if (index == -1) {
          itens.push(data[i]);
        } else {
          itens[index].quantidade += data[i].quantidade;
        }
      }      

      //setvendas(itens)

        const opcoes = {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: itens.map(i => i.nome),
            },
            yaxis: {
              title: {
                text: 'Quantidade vendida'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  + val + " unidades"
                }
              }
            }
          }
        setDadosNomeProduto(opcoes)

        const dadosProdutoAtual = [];
        dadosProdutoAtual.push({
            name: 'Produzidos',
            data: response.data.map(i => i.quantidade)
        })
        dadosProdutoAtual.push({
          name: 'Vendidos',
          data: itens.map(i => i.quantidade)
      })
        setDadosProdutos(dadosProdutoAtual)

        setprodutos(itens)
    }

    async function buscaPorNome( nome ){
        const response = await axios.get(host+"/producao_e_vendas/"+nome)
        setprodutos(response.data)
    }

    useEffect(() => {
        buscaTodos()
        buscaVendas()
    }, [])

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


                <div>

                <style>
                        {`
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 20px 0;
                            font-family: 'Arial', sans-serif;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 12px;
                            text-align: left;
                            font-size: 16px;
                        }
                        th {
                            background-color: #4CAF50;
                            color: white;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2;
                        }
                        tr:hover {
                            background-color: #ddd;
                        }
                        `}
                </style>
                
                    <div className="ml"> {/* Tabela Produção*/}

                            <input onChange={(e)=> setpesquisa(e.target.value)}/>
                            <button onClick={()=> buscaPorNome(pesquisa)}>Pesquisar</button>

                        {
                            produtos.length > 0 ?
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                    
                                </thead>

                                {
                                    produtos.map((i, index )=>
                                        
                                        <tr key={index}>
                                            <td>{i.nome}</td>
                                            <td>{i.quantidade}</td>
                                        </tr>
                                    )
                                }

                            </table>
                            :
                            <p>Carregando...</p>
                        }

                    </div>


                </div>

                <div className="grafico">
                    <ReactApexChart options={dadosNomeProduto} series={dadosproduto} type="bar" height={350} />
                </div>

                <div>

                <style>
                        {`
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 20px 0;
                            font-family: 'Arial', sans-serif;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 12px;
                            text-align: left;
                            font-size: 16px;
                        }
                        th {
                            background-color: #4CAF50;
                            color: white;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2;
                        }
                        tr:hover {
                            background-color: #ddd;
                        }
                        `}
                </style>
                
                    <div className="mr"> {/* Tabela Vendas*/}

                    <input onChange={(e)=> setpesquisa(e.target.value)}/>
                    <button onClick={()=> buscaPorNome(pesquisa)}>Pesquisar</button>

                        {
                            vendas.length > 0 ?
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                    
                                </thead>

                                {
                                    vendas.map((i, index )=>
                                        
                                        <tr key={index}>
                                            <td>{i.nome}</td>
                                            <td>{i.quantidade}</td>
                                        </tr>
                                    )
                                }

                            </table>
                            :
                            <p>Carregando...</p>
                        }

                    </div>
                </div>

            </div>

        </div>

     );
}




export default Producao_e_vendas;