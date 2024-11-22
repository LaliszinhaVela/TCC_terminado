import {gerarToken} from '../utils/jwt.js'
import * as  db from '../repository/loginRepository.js'
import {Router} from 'express'

const enpoints = Router();

enpoints.post('/valido', async (req,resp) => {
try {
    let login = req.body;

    let usu = await db.validarLogin(login);

    if (!usu) {
        return resp.status(400).send({
            erro: "Usuario ou senha incorretos !"
        })
    }

    let token = gerarToken(usu)

    resp.send({ 
        "token": token
    })

} catch (err) {
    resp.status(400).send({
        erro:err.message
    })
}

})

export default enpoints;


