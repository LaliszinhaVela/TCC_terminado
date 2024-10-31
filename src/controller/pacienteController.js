import { autenticar } from '../utils/jwt.js';
import * as  db from '../repository/pacienteRepository.js'
import {Router} from 'express'
const enpoints = Router();




enpoints.get('/listar/pacientes',autenticar, async (req,resp) => {
    try {
        let nome = req.query.nome
         let registros = await db.listarP(nome)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


 //teste
 enpoints.get('/VP',autenticar, async (req,resp) => {
    try {
        let DP = req.query.DP
         let registros = await db.VP(DP)
         resp.send(registros)

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

 //teste



enpoints.post('/cadastrar/pacientes',autenticar, async (req,resp) => {
    try {
     let paciente = req.body

     let id = await db.cadastrarPacientes(paciente)
     resp.send({

      novoId:id

    })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})


enpoints.put('/alterar/cadastro/:id',autenticar, async (req,resp) => {
    try {
       let id = req.params.id
       let paciente = req.body
       let linhasafetadas = await db.alterarCadastro(id,paciente)

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


enpoints.delete('/deletar/registros/:id',autenticar, async (req,resp) => {
    try {
     let id = req.params.id 
     let linhasafetadas = await db.deletarRegistros(id)
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