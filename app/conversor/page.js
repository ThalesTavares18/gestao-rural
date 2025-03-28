'use client';
import PDFParser from 'pdf2json';
import * as pdfjsLib from 'pdfjs-dist';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import fs from "fs";


function Conversor() {
    const [pdfFile, setPdfFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [jsonData, setJsonData] = useState(null);

    //const pdfParser = new PDFParser();

    //pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.mjs';


    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
        }
    }

    function downloadJson() {
        const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'output.json';
        link.click();
    }

    // Função para converter o PDF para XLSX
    function convertPdfToXlsx() {
        if (!pdfFile) {
            alert("Por favor, selecione um arquivo PDF.");
            return;
        }

        console.log("clicado foi")
        setLoading(true);

        const reader = new FileReader();
        reader.onload = function (event) {
            const typedArray = new Uint8Array(event.target.result);
            console.log('Arquivo carregado, processando...');

            pdfjsLib.getDocument(typedArray).promise
                .then((pdf) => {
                    const totalPages = pdf.numPages;
                    let pdfText = '';

                    const pagePromises = [];
                    console.log(`Total de páginas: ${totalPages}`);

                    for (let i = 1; i <= totalPages; i++) {
                        pagePromises.push(
                            pdf.getPage(i).then((page) => {
                                return page.getTextContent().then((textContent) => {
                                    textContent.items.forEach((item) => {
                                        pdfText += item.str + ' ';
                                    });
                                });
                            })
                        );
                    }

                    Promise.all(pagePromises).then(() => {
                        console.log('Texto extraído do PDF:', pdfText);
                        const rows = pdfText.split('\n').map((line) => line.split(' '));

                        // Gerar o XLSX
                        const worksheet = XLSX.utils.aoa_to_sheet(rows);
                        const wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, worksheet, 'PDFData');
                        XLSX.writeFile(wb, 'output.xlsx');
                        console.log('Arquivo XLSX gerado');

                        // Após gerar o arquivo XLSX, converte para JSON
                        const pdfParser = new PDFParser(worksheet, 1);

                        pdfParser.on("pdfParser_dataError", (errData) =>
                         console.error(errData.parserError)
                        );
                        pdfParser.on("pdfParser_dataReady", (pdfData) => {
                         fs.writeFile(
                          "./pdf2json/test/F1040EZ.content.txt",
                          pdfParser.getRawTextContent(),
                          () => {
                           console.log("Done.");
                          }
                         );
                        });
                        
                        pdfParser.loadPDF("./pdf2json/test/pdf/fd/form/F1040EZ.pdf");

                        // const jsonFromXlsx = XLSX.utils.sheet_to_json(worksheet);
                        // console.log('JSON gerado a partir do XLSX:', jsonFromXlsx);
                        // setJsonData(jsonFromXlsx); // Armazena o JSON
                    });
                })
                .catch((error) => {
                    console.error('Erro ao processar o PDF:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        reader.readAsArrayBuffer(pdfFile);
    }

    return (
        <div>
            <h1>Converter PDF para XLSX</h1>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={convertPdfToXlsx} disabled={loading}>
                {loading ? 'Convertendo...' : 'Converter para XLSX'}
            </button>

            {jsonData && (
                <div>
                    <button onClick={downloadJson}>Baixar JSON</button>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Conversor;
