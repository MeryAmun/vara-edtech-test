const express = require('express');
const { getCustomersData, getAddressData, deleteCustomersData, createAddressData, deleteAddressData, updateCustomerData, updateAddressData, addressDataToUpdate, customerDataToUpdate } = require('../controllers/controllers');
const app = express();
const router = express.Router()

//customer CRUD operations
//GET/SELECT
router.get('/customers', getCustomersData);
//POST/INSERT
router.post('/customers/create', getCustomersData);
//UPDATE
router.get('/customer/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM customers WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('customers', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});

	});

});
//UPDATE CUSTOMERS
router.get('/edit/:id',customerDataToUpdate);
router.post('/customer/edit/:id', updateCustomerData);
// DELETE Record
router.get('/customer/remove/(:id)', deleteCustomersData)




//address CRUD operations

//GET/SELECT
router.get('/address', getAddressData);
//POST/INSERT
router.post('/address/create', createAddressData);
//DELETE
// DELETE Record
router.get('/address/remove/(:id)', deleteAddressData)

//UPDATE ADDRESS
router.get('/edit/:id',addressDataToUpdate);
router.post('/address/edit/:id', updateAddressData);




  
  
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
  
  