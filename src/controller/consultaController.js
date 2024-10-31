import { autenticar } from '../utils/jwt.js';
import * as  db from '../repository/consultaRepository.js'
import {Router} from 'express'
const enpoints = Router();





enpoints.get('/verificar/consulta',autenticar, async (req,resp) => {
    try {
        let consulta = req.query.consulta
         let registros = await db.listarC(consulta)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


 //teste
 enpoints.get('/VC',autenticar, async (req,resp) => {
    try {
        let DC = req.query.DC
         let registros = await db.VC(DC)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

 //teste







enpoints.post('/marcar/consulta',autenticar, async (req,resp) => {
    try {

     let consulta = req.body
     consulta.idUsuario = req.user.id

     let id = await db.agendarConsulta(consulta)
    
     resp.send({

      novoId:id

    })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


enpoints.put('/alterar/consulta/:id',autenticar, async (req,resp) => {
    try {
       let id = req.params.id
       let consulta = req.body
       let linhasafetadas = await db.alterarConsulta(id,consulta)

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


enpoints.delete('/excluir/consulta/:id',autenticar, async (req,resp) => {
    try {
     let id = req.params.id 
     let linhasafetadas = await db.excluirConsulta(id)
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