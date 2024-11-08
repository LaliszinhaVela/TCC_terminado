create database bd_psicolari;
use bd_psicolari;

create table tb_login (
id_usuario int primary key auto_increment,
nm_usuario varchar(50),
nr_senha varchar(30)
);

create table tb_paciente(
id_paciente int auto_increment primary key,
nm_paciente varchar(200), 
dt_nascimento date ,
nr_telefone int,
ds_email varchar(200),
ds_quadro_do_paciente varchar(3000),
ds_continuo boolean
);

create table tb_consulta(
id_consulta int auto_increment primary key,
id_paciente int,
dt_consulta_horario datetime ,
ds_duracao time ,
foreign key(id_paciente) references tb_paciente(id_paciente)
);

create table tb_atendimentoContinuo(
id_continuo int primary key auto_increment,
id_paciente int,
qdt_semana  int,
qdt_pasando varchar(200),
foreign key(id_paciente) references tb_paciente(id_paciente)
);