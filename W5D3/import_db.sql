PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;




CREATE TABLE user (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

INSERT INTO
  user(fname,lname)
  VALUES
  ('Smith', 'John');


CREATE TABLE question (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR(255)
);

INSERT INTO
question(title, body)
VALUES
('What does blue taste like?', 'Where is my body?');


CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (question_id) REFERENCES question(id)
);


INSERT INTO
  question_follows(question_id,user_id)
VALUES
  (1,1) ;


CREATE TABLE replies (  
  id INTEGER PRIMARY KEY,
question_id INTEGER,
user_id INTEGER,



-- Are referencing correct things???!!!
  FOREIGN KEY (question_id) REFERENCES question(id),
  -- FOREIGN KEY (id) REFERENCES question_follows(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO
  replies(question_id,user_id)
VALUES
  (1,1) ;


CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  user_id INTEGER,



  FOREIGN KEY (question_id) REFERENCES question(id),
  FOREIGN KEY (user_id) REFERENCES user(id)

);


INSERT INTO
  question_likes(question_id,user_id)
VALUES
  (1,1) ;
