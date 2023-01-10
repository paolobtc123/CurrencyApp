to set up and run

1) in mysql localhost , port 3306 ,  create database : 
CREATE DATABASE `currencyapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

1.1) if mysql is in some server change \currency-app\src\app.module.ts

2)create mysql user: currapp with password : currapp123

3) give to the currapp user all privileges on DB currencyapp

4) open terminal in \currency-app

5) run: npm i

5.1) the task saving currency exchange rates in the database runs every 20 seconds , if you want to change this :
in \currency-app\src\exchange-data\task.service.ts line 19 set the value in milliseconds
   @Interval(20000)
    handleInterval() {

6)run : nest start

7) open terminal in \currency-app-ui

8) run : npm i

9) run : react-scripts start
