const {Router} = require('express');
const mongoCliente = require('mongodb').MongoClient;

const router = Router();

mongoCliente.connect('mongodb://localhost:27017', (error, database) => {
    if(error) return console.log(error);
    db = database.db('umacsv');
    console.log('Conexión éxitosa a la base de datos');
});

router.get('/', function(req, res){
    db.collection('data').find().toArray( (error, datos) => {
        if(error)
        {
            console.log(error);
            res.send('Error al consultar');
        }
        res.send(datos);
    });
});

module.exports = router;