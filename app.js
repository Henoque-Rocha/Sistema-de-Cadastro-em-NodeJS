const express = require("express");
const app = express();
const mysql = require('mysql');

const bodyparser = require('body-parser');
const path = require('path'); //usado para direcionar as Bios.

app.listen('3000',()=> {
    console.log('Servidor Rodando 2!');
});

//Body-parser
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    let query = db.query("SELECT * FROM clientes",function(err,results){
        res.render('index',{Lista:results});
    })
});

app.get('/registrar',function(req,res){
    res.render('cadastro',{});
});

app.post('/registrar',function(req,res){
    let Nome = req.body.Nome;
    let Sobrenome = req.body.Sobrenome;
    let Empresa = req.body.Empresa;
    db.query("INSERT INTO clientes (Nome,Sobrenome,Empresa) VALUES (?,?,?)",[Nome,Sobrenome,Empresa],function(err,results) {});
    res.render('cadastro',{});
    });

//Conexão com o Banco de Dados

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'node'

});

db.connect(function(err) {
    if(err) {
        console.log('Não foi Possivel conectar ao Banco de dados.');
    }
});







//para ativar o servidor o comando é : node app.js

//para desativar o servidor o comando é : control = Ctrl + C

//para não precisar digitar esse comando vamos instalar outro npm

//Digitando : npm install nodemon logo depois de instalar é só ativar o servidor novamente 
/*

Instalação de nodemon

npm install -g nodemon : Primeiro Código

npm install --save-dev nodemon : Segundo Código

nodemon [your node app] : Terceiro Código para ativer no projeto

dependencias importantes para projetos 

Criar banco de dados:  npm install mysql

Renderizar as páginas no navegador: npm install body-parser

EJS : npm install ejs

*/