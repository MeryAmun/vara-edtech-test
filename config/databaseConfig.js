const mysql = require('mysql');
const dotEnv = require("dotenv");
dotEnv.config();



    const con = mysql.createPool({
        host: "localhost",
        port: 3306,
        user: process.env.USER_NAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DB
      });
      con.getConnection(function(err) {
        if (err) throw err;
              console.log("Connected!");
              return
        

        // con.query("CREATE DATABASE TestDB_Chebesi", function(err, result){
        //     if(err) throw err;
        //     console.log(result,"Database created")
        
        // })
  //            const sql = "CREATE TABLE address (address_id INT AUTO_INCREMENT PRIMARY KEY, City VARCHAR(255), Province VARCHAR(255), Zip VARCHAR(255), House VARCHAR(255), customer_id INT NOT NULL)";
  //        con.query(sql, function(err,result){
  // if(err) throw err;
  // console.log("Reference created", result)
  //        })
  //          const sql = "CREATE TABLE address (address_id INT NOT NULL, City VARCHAR(255), Province VARCHAR(255), Zip VARCHAR(255), House VARCHAR(255),customer_id INT, PRIMARY KEY (address_id), FOREIGN KEY (customer_id) REFERENCES customers(customer_id))";
  //        con.query(sql, function(err,result){
  // if(err) throw err;
  // console.log("Reference created")
  //        })
      })
      
      

  
  module.exports = con
 