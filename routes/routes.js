const express = require('express');
const { getCustomersData, getAddressData, deleteCustomersData } = require('../controllers/controllers');
const app = express();
const router = express.Router()

//customer CRUD operations
//GET/SELECT
router.get('/customers', getCustomersData);
//POST/INSERT
router.post('/customers/create', getCustomersData);
//DELETE
// DELETE Record
router.get('/remove/(:id)', deleteCustomersData)




//address CRUD operations
router.get('/address', getAddressData);
  
  
  //post comments
  
  app.post('/api/insert', (req, res) =>{
    const commentAuthor = req.body.commentAuthor
    const commentText = req.body.commentText
  
    const sqlInsert = "INSERT INTO comments (commentAuthor, commentText) VALUES (?,?);";
  
    pool.getConnection((err) => {
        if(err){
            console.log("Erro connecting to Db", err);
            return;
        }
        console.log('Connection established');
    pool.query(sqlInsert, [commentAuthor, commentText], (err, rows) => {
        console.log(rows)
  
        //connection.release()//return the connection to pool
  
        /////if(!err){
           /// res.send(rows)
  //}else{
           // console.log(err)
       // }
    })
    });
  
  })

  module.exports = router
  
  