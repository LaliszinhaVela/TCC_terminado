import con from './connection.js';




export async function listarA(atendimento){
    const comando = `
     select*
    from tb_paciente as paciente
    inner join tb_consulta as consulta
    on paciente.id_paciente = consulta.id_paciente
    where nm_paciente like CONCAT(? , '%');

    `
    let resp = await con.query(comando,[atendimento])
    let registros = resp[0]
    return registros
}


 

 export async function VA (DA){
    const comando = `
     select *
     from tb_consulta as consulta
     inner join tb_atendimentocontinuo as continuo
     on consulta.id_consulta = continuo.id_continuo
     where dt_consulta_horario like CONCAT( ?, '%');
    `
    let resp = await con.query(comando,[DA])
    let registros = resp[0]
    return registros
}



export async function cadastrarAtendimentos(continuo){
    const comando = `

     insert into tb_atendimentoContinuo (id_paciente,qdt_semana,qdt_pasando)
     values(?,?,?)

    `
    let resp = await con.query(comando,[continuo.id, continuo.dps,continuo.tempo])
    let registros = resp[0]
    return registros.insertId;
}


export async function atualizarAtendimento(id,continuo){
    const comando = `
      
     update tb_atendimentoContinuo
     set id_paciente = ?,
         qdt_semana = ?,
         qdt_pasando = ?

    where id_continuo = ?;     

    `
    let resp = await con.query(comando,[continuo.id, continuo.dps,continuo.tempo, id])
    let registros = resp[0]
    return registros.affectedRows;
}


export async function deletarAtendimento(id){
    const comando = `
      delete from tb_atendimentoContinuo
      where id_continuo = ?
        

    `
    let resp = await con.query(comando, [id])
    let registros = resp[0]
    return registros.affectedRows;
}