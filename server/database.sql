-- Run Create Database command to create a database with the same name as the one coded into the program 
CREATE DATABASE "lily_weekend-to-do-app";
-- Open database and create run this create table command to create appropriate table 
CREATE TABLE "to-do"(
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(300) NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT FALSE
);
-- Here is some sample data to seed the app with 
INSERT INTO "to-do" ("task")
VALUES ('Email Sheila'),
    ('Meditate'),
    ('Grocery Shop'),
    ('Schedule Doctor Appt'),
    ('Call Valerie'),
    ('Pay Bills');