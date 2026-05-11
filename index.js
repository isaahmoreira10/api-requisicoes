const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/saudacao",(req, res) => {
})

app.post("/imc",(req, res) =>{
    const { nome, idade, altura, peso }=req.body;


    if (!nome || !idade || !altura || !peso) {
        return res,status(404).json({erro: "Dados incompletos"})
    }

    const imc = peso / (altura * altura);
    res.json({
        nome,
        idade,
        imc: imc.toFixed(2)
    })


})

app.post("/media",(req, res) =>{
    const { nota1, nota2}=req.body;


    if (!nota1 || !nota2) {
        return res,status(404).json({erro: "Dados incompletos"})
    }

    const media =(nota1 + nota2)/2 ;
    res.json({
        nota1,
        nota2,
        media: parseFloat(media)
    })


})
app.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)

})