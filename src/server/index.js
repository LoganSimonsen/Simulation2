require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')
// const session = require('express-session');
// const auth_ctrl = require('./controllers/auth_controller');
// const prop_ctrl = require('./controllers/properties_controller');
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 100000000}
}))

//Massive
massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.error(err));


//Authorization Endpoints
app.post('/api/auth/login', auth_ctrl.login);
app.post('/api/auth/register', auth_ctrl.register);
app.post('/api/auth/logout', auth_ctrl.logout);

//Properties Endpoints
app.post('/api/properties', prop_ctrl.newProp);
app.get('/api/properties', prop_ctrl.getProps);
app.delete('/api/properties/:id', prop_ctrl.deleteProp);
app.get('/api/properties/filter', prop_ctrl.filteredProp);


//Shhhh....listen
port = process.env.PORT;
app.listen(port, () => console.log(`Listening: ${port}`));