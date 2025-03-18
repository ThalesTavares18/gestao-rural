'use client'
import React, { useState } from 'react';
import "./preparacao.css"

const Preparacao = () => {
  const [quantidade30kg, setQuantidade30kg] = useState("");
  const [quantidade25kg, setQuantidade25kg] = useState("");
  const [quantidade20kg, setQuantidade20kg] = useState("");
  const [quantidade10kg, setQuantidade10kg] = useState("");

  const [quantidade30kg2, setQuantidade30kg2] = useState("");
  const [quantidade25kg2, setQuantidade25kg2] = useState("");
  const [quantidade20kg2, setQuantidade20kg2] = useState("");
  const [quantidade10kg2, setQuantidade10kg2] = useState("");

  const [quantidade30kg3, setQuantidade30kg3] = useState("");
  const [quantidade25kg3, setQuantidade25kg3] = useState("");
  const [quantidade20kg3, setQuantidade20kg3] = useState("");
  const [quantidade10kg3, setQuantidade10kg3] = useState("");

  const [total1, setTotal1] = useState("");
  const [total2, setTotal2] = useState("");
  const [total3, setTotal3] = useState("");

  return (
    <div>
      <div className='produtos'>
        <div><h1>Produtos</h1></div>
        <div><h1>Produtos</h1></div>
        <div><h1>Produtos</h1></div>
      </div>

      <div className='sacosQuantidade'>
        <div className='SQ'>
          <h2>Sacos</h2>
          <h2>Quantidade</h2>
        </div>
        <div className='SQ'>
          <h2>Sacos</h2>
          <h2>Quantidade</h2>
        </div>
        <div className='SQ'>
          <h2>Sacos</h2>
          <h2>Quantidade</h2>
        </div>
      </div>

      <div className='quantidades'>
        <div>
          <label htmlFor="fname">30kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade30kg}
            onChange={(e) => setQuantidade30kg(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">25kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade25kg}
            onChange={(e) => setQuantidade25kg(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">20kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade20kg}
            onChange={(e) => setQuantidade20kg(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">10kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade10kg}
            onChange={(e) => setQuantidade10kg(e.target.value)}
          />
          <br /><br />
        </div>

        <div>
          <label htmlFor="fname">30kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade30kg2}
            onChange={(e) => setQuantidade30kg2(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">25kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade25kg2}
            onChange={(e) => setQuantidade25kg2(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">20kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade20kg2}
            onChange={(e) => setQuantidade20kg2(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">10kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade10kg2}
            onChange={(e) => setQuantidade10kg2(e.target.value)}
          />
          <br /><br />
        </div>

        <div>
          <label htmlFor="fname">30kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade30kg3}
            onChange={(e) => setQuantidade30kg3(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">25kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade25kg3}
            onChange={(e) => setQuantidade25kg3(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">20kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade20kg3}
            onChange={(e) => setQuantidade20kg3(e.target.value)}
          />
          <br /><br />
          <label htmlFor="fname">10kg</label>
          <input
            type="number"
            id="fname"
            name="fname"
            value={quantidade10kg3}
            onChange={(e) => setQuantidade10kg3(e.target.value)}
          />
          <br /><br />
        </div>
      </div>

      <div className='total'>
        <div>
          <input
            type="number"
            id="fname"
            name="fname"
            placeholder="Total"
            value={total1}
            onChange={(e) => setTotal1(e.target.value)}
          />
          <br /><br />
        </div>
        <div>
          <input
            type="number"
            id="fname"
            name="fname"
            placeholder="Total"
            value={total2}
            onChange={(e) => setTotal2(e.target.value)}
          />
          <br /><br />
        </div>
        <div>
          <input
            type="number"
            id="fname"
            name="fname"
            placeholder="Total"
            value={total3}
            onChange={(e) => setTotal3(e.target.value)}
          />
          <br /><br />
        </div>
      </div>
        <div></div>
      <div className='botoes'>
        <div>
          <button type="button">Voltar</button>
        </div>
        <div>
          <button type="button">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Preparacao;
