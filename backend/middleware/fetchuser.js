const jwt = require("jsonwebtoken");
const JWT_KEY = "jwt_key";

const fetchuser = (req, res, next)=>{
    //Get the user from the jwt tokend add id to the req object
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).json({error: 'Please authenticate using a valid token'});
    }
    try {
        const data = jwt.verify(token, JWT_KEY );
    req.user = data.user;
    next();
    } catch (error) {
        res.status(401).json({error: 'Please authenticate using a valid token'});
    }
    
}


module.exports = fetchuser
