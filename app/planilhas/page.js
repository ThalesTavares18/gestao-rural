'use client'

import { useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'
import Swal from 'sweetalert2'
import "./meusclientes.css"

pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js'

export default function Testes() {
  const [file, setFile] = useState(null)
  const [json, setJson] = useState(null)
  const [mostrarJson, setMostrarJson] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      processarPDF(e.target.files[0])
    }
  }

  const processarPDF = (file) => {
    const fileReader = new FileReader()

    fileReader.onload = async function () {
      const typedArray = new Uint8Array(this.result)
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise
      const page = await pdf.getPage(1)
      const content = await page.getTextContent()
      const text = content.items.map((item) => item.str).join(' ')

      const jsonFinal = transformarTextoEmJson(text)
      setJson(jsonFinal)
      Swal.fire('PDF processado com sucesso!', '', 'success')
    }

    fileReader.readAsArrayBuffer(file)
  }

  const handleUpload = async () => {
    if (!file || !json) return

    const confirmation = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Tem certeza que quer adicionar isso ao sistema?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, adicionar!',
      cancelButtonText: 'Cancelar'
    })

    if (!confirmation.isConfirmed) {
      return
    }

    try {
      const res = await fetch('/api/planilhas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao salvar no estoque')
      }

      Swal.fire('Estoque atualizado com sucesso!', '', 'success')
    } catch (err) {
      Swal.fire('Erro ao salvar no estoque', err.message, 'error')
    }
  }

  const transformarTextoEmJson = (text) => {
    const result = {
      data_entrega: '',
      produtos: [],
      valor_total_geral: 0
    }

    const precosMatch = [...text.matchAll(/([\d.,]+)\s*R\$/g)]
    const precosRaw = precosMatch.map(p =>
      parseFloat(p[1].replace('.', '').replace(',', '.'))
    )

    let textSemPrecos = text
    precosMatch.forEach(m => {
      textSemPrecos = textSemPrecos.replace(m[0], '')
    })

    const dataMatch = text.match(/Entrega\s(\d{2}\/\d{2}\/\d{4})/)
    if (dataMatch) {
      result.data_entrega = dataMatch[1].split('/').reverse().join('-')
    }

    const kgCount = (text.match(/\bKg\b/gi) || []).length
    const produtoMatch = textSemPrecos.match(/([\s\S]*?)\s+(?:Kg\s*)+/i)

    const nomes = []
    if (produtoMatch) {
      const nomeBruto = produtoMatch[1]
        .replace(/ASSINATURA|COASCRE/gi, '')
        .trim()
        .replace(/\s+/g, ' ')
      const palavras = nomeBruto.split(' ')
      const chunk = Math.floor(palavras.length / kgCount)

      for (let i = 0; i < kgCount; i++) {
        const start = i * chunk
        const end = i === kgCount - 1 ? palavras.length : (i + 1) * chunk
        const nome = palavras.slice(start, end).join(' ')
        nomes.push(formatarNome(nome))
      }
    }

    const qtMatch = text.match(/QUANTIDADE TOTAL\s+((\d+\s+)+)/i)
    const quantidades = qtMatch
      ? qtMatch[1].trim().split(/\s+/).map(q => parseInt(q))
      : []

    let valores = []
    const valorTotalMatch = text.match(/VALOR TOTAL\s+((?:[\d.,]+\s*R\$\s*)+)/i)
    if (valorTotalMatch) {
      valores = [...valorTotalMatch[1].matchAll(/([\d\.,]+)\s*R\$/g)].map(m =>
        parseFloat(m[1].replace('.', '').replace(',', '.'))
      )
    }

    for (let i = 0; i < nomes.length; i++) {
      result.produtos.push({
        nome: nomes[i] || `Produto ${i + 1}`,
        preco_unitario: precosRaw[i] || 0,
        quantidade_total: quantidades[i] || 0,
        valor_total: valores[i] || 0
      })
    }

    result.valor_total_geral = result.produtos.reduce((acc, p) => acc + p.valor_total, 0)
    return result
  }

  const formatarNome = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }

  return (
    <div>
      <div className="barrinhaverde">
        <div className="Logo">
          <img className="logo" src="logo.png" width={100} height={100} />
          <h1>Planilhas</h1>
        </div>
        <div className="BotaoVoltar">
          <a href="http://localhost:3000/">
            <button className="buttonVoltar">Voltar</button>
          </a>
        </div>
      </div>

      <h1>clique no botão para adicionar sua planilha e depois inserir no sistema:</h1>

      <div className="upload-container">
        <label htmlFor="file-upload" className="buttonVoltar">Escolher Arquivo</label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        {json && (
          <>
            <button onClick={() => setMostrarJson(!mostrarJson)} className="buttonVoltar">
              {mostrarJson ? 'Ocultar JSON' : 'Visualizar JSON'}
            </button>
            <button onClick={handleUpload} className="buttonVoltar">
              Salvar no banco
            </button>
          </>
        )}
      </div>

      {mostrarJson && json && (
        <pre style={{
          marginTop: '20px',
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto'
        }}>
          {JSON.stringify(json, null, 2)}
        </pre>
      )}
    </div>
  )
}
