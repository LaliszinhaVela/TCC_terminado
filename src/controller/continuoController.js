import { autenticar } from '../utils/jwt.js';
import * as  db from '../repository/continuoRepository.js'
import {Router} from 'express'
const enpoints = Router();


enpoints.get('/listar/atendimentos/continuo',autenticar, async (req,resp) => {
    try {
        let atendimento = req.query.atendimento
         let registros = await db.listarA(atendimento)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


 //teste
 enpoints.get('/VA',autenticar, async (req,resp) => {
    try {
        let DA = req.query.atendimento
         let registros = await db.VA(atendimento)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

 //teste





enpoints.post('/inserir/atendimento/continuo',autenticar, async (req,resp) => {
    try {
     let continuo = req.body

     let id = await db.cadastrarAtendimentos(continuo)
     resp.send({

      novoId:id

    })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


enpoints.put('/atualizar/atendimento/continuo/:id',autenticar, async (req,resp) => {
    try {
       let id = req.params.id
       let continuo = req.body
       let linhasafetadas = await db.atualizarAtendimento(id,continuo)

       if(linhasafetadas>=1){
        resp.send()
       }
       else{
        resp.status(404).send({erro: 'Nenhum registro encontrado'})
       }
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


enpoints.delete('/excluir/atendimento/continuo/:id',autenticar, async (req,resp) => {
    try {
     let id = req.params.id 
     let linhasafetadas = await db.deletarAtendimento(id)
     if(linhasafetadas>=1){
        resp.send()
       }
       else{
        resp.status(404).send({erro: 'Nenhum registro encontrado'})
       }
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


export default enpoints;