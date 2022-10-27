const con = require('../config/databaseConfig');


//customer controllers

const getCustomersData = (req, res) => {
   const sql = "SELECT * FROM customers";
  con.query(sql, (err, rows) => {
    console.log(rows)
})
          const customers = req.body;
          res.send(customers)
      }

      const createCustomerData = (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        let customers;
       const sql = `INSERT INTO customers (name, email, phone) VALUES ("${name}", "${email}", "${phone}", NOW())`
       con.query(sql,function(err,result){
        if (err) throw err
        console.log('Row has been updated')
        req.flash('success', 'Data stored!') 
        console.log(result)
        customers = result
       })
       
     console.log(customers)
          res.status(200).json({customers})
          }

              const deleteCustomersData = (req, res) => {
                connectDb("SELECT * FROM customers")
                      const customers = req.body;
                      res.send(customers)
                  }















      //address controllers 

      const getAddressData = (req, res) => {
        connectDb("SELECT * FROM address")
              const address = req.body;
              res.send(address)
          }
      
  
  module.exports = {
    getCustomersData,createCustomerData,deleteCustomersData, getAddressData
  }