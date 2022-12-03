CREATE DATABASE todoapi;

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

-- Users

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
);

INSERT INTO users( username, email, password) VALUES(
  'Iyanuoluwaat',
  'Iyanuoluwaatxxx@gmail.com',
  'iyanextech01'
);

CREATE TABLE favs(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    food VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    animal  VARCHAR(255) NOT NULL
);


INSERT INTO favs( food, color, animal) VALUES(
  'Eba',
  'red',
  'Goat'
);


CREATE TABLE profile(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    age VARCHAR(255) NOT NULL,
    repo VARCHAR(255) NOT NULL
);

CREATE TABLE repo(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    profile_id VARCHAR(255) NOT NULL,
    repo_name VARCHAR(255) NOT NULL
);

INSERT INTO repo( profile_id, repo_name) VALUES(
  '1',
  'testofQ'
);
