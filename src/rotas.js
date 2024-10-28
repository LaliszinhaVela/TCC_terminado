import loginController from './controller/loginController.js'
import consultaController from './controller/consultaController.js'
import continuoController from './controller/continuoController.js'
import pacienteController from './controller/pacienteController.js'


export default function adicionarRotas(servidor){
    servidor.use(loginController),
    servidor.use(consultaController),
    servidor.use(continuoController),
    servidor.use(pacienteController)
}