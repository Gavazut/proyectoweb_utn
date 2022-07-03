const { Router } = require ('express');
const router = new Router();
const mysql = require('mysql');

// 

const conn= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'suscriptoresweb'
})
conn.connect ((err) =>{
    if (err) throw err;
    console.log("CONEXION ESTABLECIDA");


})

router.get ('/suscripcion', (req, res) =>{
    let sql = "SELECT * FROM suscriptores"
    let query = conn.query(sql, (err, results) =>{
        if (err) throw err;
        res.render('../views/suscripcion', {
            results: results
        });
    });
});

const autor = {
    autor: 'Richard Moreno',
    titulo: 'CannaSalud' } 

router.get('/', (req,res) =>{
    res.render('index', autor)
});

router.get('/contenidos', (req,res) =>{
    res.render('contenidos', autor)
});


router.get('/suscripcion', (req,res) =>{
    res.render('suscripcion', autor)
});


router.get('/galeria', (req,res) =>{
    res.render('galeria', autor)
});

router.get("/contactos", (req,res) =>{
    res.render('contactos', autor)
});

router.get("/articulo1", (req,res) =>{
    res.render('articulo1', autor)
});

router.get("/articulo2", (req,res) =>{
    res.render('articulo2', autor)
});

 router.get('/',(res,req) => {
        res.render('/estilo.css')
        });

module.exports = router;