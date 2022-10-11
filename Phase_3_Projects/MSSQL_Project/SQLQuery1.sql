create database Rainbow_School

use Rainbow_School
go

create table Class
(
ClassID int primary key,
ClassName varchar(5)
)

create table Students
(
StudentID int Primary key not null,
StudentName varchar(20),
ClassID int foreign key references Class(classid)
)

create table Subjects
(
SubjectID int primary key,
SubjectName varchar(50),
ClassID int foreign key references Class(ClassID)
)

insert into Class values(1,'12A'),(2,'12B'),(3,'12C'),(4,'12D')
insert into Students values(11,'Deepansh',1),(12,'Archit',2),(13,'Chandra',3),(14,'Harshit',4),(15,'Atar',3),(16,'Daksha',1)
insert into Subjects values(1,'Maths',1),(2,'Chemistry',2),(3,'Physics',2),(4,'Economics',4),(5,'Accounts',4)

select * from Class
select * from Students
select * from Subjects

