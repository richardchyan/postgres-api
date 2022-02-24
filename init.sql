CREATE TABLE songs (

   id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   writer VARCHAR(255) NOT NULL

);

INSERT INTO songs (title, writer) VALUES ('Misery', 'John Lennon');
