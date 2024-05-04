import mysql from "mysql"

export const db = mysql.createConnection({
    host:"loaclhost",
    user:"root",
    password:"Suraj@2903",
    database:"blog"


})