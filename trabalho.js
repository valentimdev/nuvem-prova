const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao petshop</h1>");
})

//rota de contato
app.get("/cachorro", function(req,res){
    res.send("<h1>Lista de cachorros</h1>");
})


//rota com parametro opcional
app.get("/consulta/", (req, res) => {
    const pet = req.query["pet"];
    res.send(`Retorno da consulta: Pet = ${pet}`);
});


app.get("/consulta/", function(req, res){

    var pet = req.query["pet"]
    res.send("Retorno da consuta: Pet = " + pet)
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})