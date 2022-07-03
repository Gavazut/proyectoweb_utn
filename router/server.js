const { Router } = require ('express');
const router = new Router();
const mysql = require('mysql');


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