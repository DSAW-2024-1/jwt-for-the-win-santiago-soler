const express = require('express');
const cookieParser = require('cookie-parser');
const middlewareAuth = require('./middleware/middlewareAuth');
const authRoutes = require('./routes/routesAuth');  
const controllerProfile = require('./controladores/controllerProfile');
const controllerForm = require('./controladores/controllerForms');
const controllerContact = require('./controladores/controllerContacts');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/profile', middlewareAuth.verifyToken, controllerProfile);
app.use('/api/form', middlewareAuth.verifyToken, controllerForm);
app.use('/api/contact', middlewareAuth.verifyToken, controllerContact);

const PORT = process.env.PORT || 3000; 
app.get('/', (req, res) => {
    res.send('<h2>Bienvenido a la API</h2> ${PORT}');
});


app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});