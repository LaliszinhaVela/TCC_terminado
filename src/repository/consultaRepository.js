import con from './connection.js';



export async function listarC(consulta){
    const comando = `
    select*
    from tb_paciente as paciente
    inner join tb_consulta as consulta
    on paciente.id_paciente = consulta.id_paciente
    where nm_paciente like CONCAT( ? , '%');

    `
    let resp = await con.query(comando,[consulta])
    let registros = resp[0]
    return registros
}

 //teste
 export async function VC(DC){
    const comando = `
     select *
     from tb_consulta as consulta
     inner join tb_atendimentocontinuo as continuo
     on consulta.id_consulta = continuo.id_continuo
    where dt_consulta_horario like CONCAT( ?, '%');
    `
    let resp = await con.query(comando,[DC])
    let registros = resp[0]
    return registros
}

 //teste




export async function listarD(data){
    const comando = `
    select*
    from tb_paciente as paciente
    inner join tb_consulta as consulta
    on paciente.id_paciente = consulta.id_paciente
    where nm_paciente like CONCAT( ? , '%');

    `
    let resp = await con.query(comando,[data])
    let registros = resp[0]
    return registros
}


export async function agendarConsulta(consulta){
    const comando = `

     insert into tb_consulta (id_paciente, dt_consulta_horario,ds_duracao)
     values(?,?,?)

    `
    let resp = await con.query(comando,[consulta.id,consulta.data,consulta.duracao])
    let registros = resp[0]
    return registros.insertId;
}


export async function alterarConsulta(id,consulta){
    const comando = `
      
     update tb_consulta
     set id_paciente = ?,
         dt_consulta_horario= ?,
         ds_duracao = ?

    where id_consulta = ?;     

    `
    let resp = await con.query(comando,[consulta.id,consulta.data,consulta.duração,id])
    let registros = resp[0]
    return registros.affectedRows;
}


export async function excluirConsulta(id){
    const comando = `
      delete from tb_consulta
      where id_consulta = ?
        

    `
    let resp = await con.query(comando, [id])
    let registros = resp[0]
    return registros.affectedRows;
}