//DEVERIA ESTAR NO BANCO DE DADOS
const user = 'savio'
const pass = '123'

const auth = (req, res, next) => {
    if((req.header('username') === user) && (req.header('password') === pass)){
        next();
    }else {
        return res.status(403).send()
    }
}

module.exports = auth;