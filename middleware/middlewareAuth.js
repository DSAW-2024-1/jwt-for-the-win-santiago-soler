const jwt = require( 'jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token) {
        return res.status(401).json({message: 'Acceso denegado'});
    }
    jwt.verify(token, 'secret', (err, decodedToken) => {
        if(err) {
            return res.status(403).json({message: 'Token inválido'});
        }
        req.user = decodedToken;
        next();
    });
}
module.exports= { verifyToken };
