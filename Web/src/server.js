// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando o express
const server = express()
server

    //utilizar body do req
    .use(express.urlencoded({ extended: true }))
    // ultilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //rotas da aplicação template

    .get('/', pages.index)
    .get('/info-point', pages.orphanage)
    .get('/main', pages.orphanages)
    .get('/add-point', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)