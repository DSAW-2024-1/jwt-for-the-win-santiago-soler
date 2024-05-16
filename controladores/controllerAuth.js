const {generateToken} = require('../utilidades/utilAuth');
function login(req, res) {
    const{email, password} = req.body;
    if(email === 'amin@admin.com' && password === 'admin') {
        const token = generateToken({email: email});
        res.cookie('jwt', token, {httpOnly: true});  
        res.status(200).json({message: 'Usuario autenticado'});
    }else{
        res.status(401).json({message: 'Usuario o contraseña incorrectos'});
    }  
}
module.exports = {login};