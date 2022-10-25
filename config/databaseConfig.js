const mysql = require('mysql');

const connectDb = () => {
    const con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.USER_NAME,
        password: process.env.MYSQL_PASSWORD
      });

      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      })
      
}
  
  module.exports = connectDb
 