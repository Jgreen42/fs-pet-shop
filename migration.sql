drop table if exists PETS;
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    kind TEXT
);
 
 INSERT INTO pets(age, name, kind) VALUES (7, 'FIDO', 'DOG');
 INSERT INTO pets(age, name, kind) VALUES (5, 'BUTTON', 'SNAKE');