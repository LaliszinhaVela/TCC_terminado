import con from './connection.js';


export async function validarLogin (login) {
    const comando = `
    select
      id_usuario id,
      nm_usuario nome
    from tb_login
    where
     nm_usuario = ?
     and nr_senha = ?
    `;

    let registros = await con.query(comando,[login.nome,login.senha])
    return registros[0][0]

}

// terminado