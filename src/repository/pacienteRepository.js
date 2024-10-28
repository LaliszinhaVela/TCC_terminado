
import con from './connection.js';




export async function listarP(nome){
    const comando = `
    select*
    from tb_paciente as paciente
    inner join tb_consulta as consulta
    on paciente.id_paciente = consulta.id_paciente
    where nm_paciente like CONCAT('%', ? , '%');

    `
    let resp = await con.query(comando,[nome])
    let registros = resp[0]
    return registros
}





export async function cadastrarPacientes(paciente){
    const comando = `

     insert into tb_paciente(nm_paciente,dt_nascimento,nr_telefone,ds_email,ds_quadro_do_paciente,ds_continuo)
     values(?,?,?,?,?,?)

    `
    let resp = await con.query(comando,[paciente.nome,paciente.nascimento,paciente.telefone,paciente.email,paciente.quadro,paciente.continuo])
    let registros = resp[0]
    return registros.insertId;
}


export async function alterarCadastro(id,paciente){
    const comando = `
      
     update tb_paciente
     set nm_paciente = ?,
        dt_nascimento = ?,
        nr_telefone = ?,
        ds_email = ?,
        ds_quadro_do_paciente = ?,
        ds_continuo = ?
     

    where id_paciente = ?;     

    `
    let resp = await con.query(comando,[paciente.nome,paciente.nascimento,paciente.telefone,paciente.email,paciente.quadro,paciente.continuo,id])
    let registros = resp[0]
    return registros.affectedRows;
}


export async function deletarRegistros(id){
    const comando = `
      delete from tb_paciente
      where id_paciente = ?
        

    `
    let resp = await con.query(comando, [id])
    let registros = resp[0]
    return registros.affectedRows;
}
