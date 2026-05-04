create database if not exists cc;

use cc;

create table usuarios if not exists (
    id int auto_increment primary key,
nome varchar(15) unique,
email varchar(50) unique,
senha varchar(11),
telefone varchar(20) 


);

CREATE TABLE enderecos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  rua VARCHAR(150),
  numero VARCHAR(10),
  cidade VARCHAR(100),
  estado VARCHAR(50),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50),
  preco DECIMAL(10,2)
 
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  endereco_id INT,
  total DECIMAL(10,2),
  status VARCHAR(50), -- pendente, enviado, entregue
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (endereco_id) REFERENCES enderecos(id)
);

CREATE TABLE itens_pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  produto_id INT,
  quantidade INT,
  preco_unitario DECIMAL(10,2),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);


create table audios if not exists (
    id int auto_increment primary key,

arquivonome varchar(100),
arquivo varchar (255),
votos INT default 0,
status enum('pendente', 'aprovado','rejeitado')default 'pendente',
nomeusuario varchar(15),
criadoem timestamp default current_timestamp,
FOREIGN KEY (nomeusuario) REFERENCES usuarios(id)

);

