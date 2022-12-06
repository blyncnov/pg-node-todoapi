-- Create Database
CREATE DATABASE todoapi;

-- Create Todo Table
CREATE TABLE todo(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    userId  VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    isCompleted Boolean DEFAULT false
);

INSERT INTO todo( title, description) VALUES(
  'i am a completed transaction',
    'this is a demo transaction'
);

-- Create users Table
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
);

INSERT INTO users( username, email, password) VALUES(
  'example',
  'example@gmail.com',
  'example01'
);
