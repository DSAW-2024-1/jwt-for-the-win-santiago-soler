const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const token = req.cookies.jwt;
    if(!token) {
        return res.status(401).json({message: 'Acceso denegado'});
    }
    jwt.verify(token, 'secret', (err, user) => {
        if(err) {
            return res.status(403).json({message: 'Token inválido'});
        }
        req.user = user;
        next();
    });
}
module.exports = {verifyToken};