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

router.post ('/suscripcion', (req, res) =>{
    let sql = "SELECT * FROM suscriptores"
    let query = conn.query(sql, (err, results) =>{
        if (err) throw err;
        res.render('../views/suscripcion', {
            results: results
        });
    });
});

router.post('/suscripcion', function(req,res){
    db.serialize(()=>{
      db.run('INSERT INTO emp(nombre,apellido,email,comentario) VALUES(?,?)', [req.body.id, req.body.name], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New employee has been added");
        res.send("New employee has been added into the database with ID = "+req.body.id+ " and Name = "+req.body.name);
      });
  });
  });

router.get('/', (req,res) =>{
    res.render('index', {
        autor: 'Richard Moreno',
        titulo: 'CannaSalud'
    })
});

router.get('/contenidos', (req,res) =>{
    res.render('contenidos')
});


router.get('/suscripcion', (req,res) =>{
    res.render('suscripcion')
});


router.get('/galeria', (req,res) =>{
    res.render('galeria')
});

router.get("/contactos", (req,res) =>{
    res.render('contactos')
});

router.get("/articulo1", (req,res) =>{
    res.render('articulo1')
});

router.get("/articulo2", (req,res) =>{
    res.render('articulo2')
});

 router.get('/',(res,req) => {
        res.render('/estilo.css')
        });

router.get('/', (req, res)=> {
    res.send(' Hola mundo')
})
module.exports = router;