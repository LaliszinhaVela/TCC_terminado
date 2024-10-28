import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import adicionarRotas from './rotas.js'
import con from './repository/connection.js'

const servidor = express()

servidor.use(cors())
servidor.use(express.json())

adicionarRotas(servidor)

servidor.listen(process.env.PORT, () => console.log(`A API subiu com sucesso na porta ${process.env.PORT}`));