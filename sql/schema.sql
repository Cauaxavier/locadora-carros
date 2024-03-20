-- creation of the database and tables

DROP DATABASE IF EXISTS locadora_carros;

CREATE DATABASE locadora_carros;

CREATE TABLE users(
    id serial primary key,
    name text not null,
    email text unique not null,
    cpf text unique not null,
    password text not null,
    createdAt timestamp default now()
)

CREATE TABLE cars(
    id serial primary key,
    model text not null,
    brand text not null,
    color text not null,
    user_id integer references users(id)
)