import con from './connection.js';


export async function validarLogin (login) {
    const comando = `
    select
      id_usuario id,
      nr_usuario nome
    from tb_login
    where
     nr_usuario = ?
     and nr_password = ?
    `;

    let registros = await con.query(comando,[login.nome,login.senha])
    return registros[0][0]

}

// terminado