School project for course Cloud Computing fall 2021.

In every folder run 'npm i'

Add admin rights and create databases in MySQL inside docker for 03-joke-microservice_student-joke-microservice-database_1_:

"mysql -u root -p -h 127.0.0.1"

"create database if not exists joke_userservice_db character set utf8mb4 collate utf8mb4_0900_ai_ci;"
"grant all on joke_userservice_db.* to 'admin'@'%';"
"flush privileges;"

"create database if not exists joke_logservice_db character set utf8mb4 collate utf8mb4_0900_ai_ci;"
"grant all on joke_logservice_db.* to 'admin'@'%';"
"flush privileges;"

docker-compose up (--build)