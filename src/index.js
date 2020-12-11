require('dotenv').config();
require('./dbConect');
var RungeKutta4 = require('runge-kutta-4')

const express = require('express');
const app = express();
const morgan = require('morgan')


//middlewares
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/kutta', require('./routes/Rkutta'));
app.use('/api/consulta', require('./routes/Bdatos'));

app.use('/api/heun', require('./routes/Mheun'));


//stating the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});