const con = require("../config/databaseConfig");

//customer controllers

const getCustomersData = (req, res) => {
  const sql = "SELECT * FROM customers";
  con.query(sql, (err, rows) => {
    console.log(rows);
  });
  const customers = req.body;
  res.send(customers);
};

const createCustomerData = async (req, res) => {
  const { name,email,phone } = req.body;

  let customers;
  
  await con.query(`INSERT INTO customers (name, email, phone) VALUES ("${name}", "${email}", "${phone}")`, function (err, result) {
    if (err) throw err;
    console.log("Row has been updated");
    req.flash("success", "Data stored!");
    console.log(result);
    customers = result;
  });

  console.log(customers);
  res.status(200).json({ customers });
};

const customerDataToUpdate = (request, response,) => {

	var id = request.params.id;

	var query = `SELECT * FROM customers WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('customers', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});

	});

}

const updateCustomerData = (req,res) => {
  var id = request.params.id;

	var name = request.body.name;

	var email = request.body.email;

	var phone = request.body.phone;
	var query = `
	UPDATE customers 
	SET name = "${name}", 
	email = "${email}", 
	phone = "${phone}", 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			console.log(data)
		}

	});

}



const deleteCustomersData = (req, res) => {
  var customer = { id: req.params.id };
  con.query(
    "DELETE FROM customers WHERE id = " + req.params.id,
    customer,
    function (err, result) {
      if (err) {
        req.flash("error", err);
        res.redirect("/");
      } else {
        req.flash("success", "Data removed :" + req.params.id);
        res.redirect("/");
      }
    }
  );
};

//address controllers

const getAddressData = (req, res) => {
  connectDb("SELECT * FROM address");
  const address = req.body;
  res.send(address);
};

const createAddressData = (req, res) => {
  const city = req.body.city;
  const province = req.body.province;
  const zip = req.body.zip;
  const house = req.body.house;
  let customers;
  const sql = `INSERT INTO customers (name, email, phone) VALUES ("${city}", "${province}", "${zip}","${house}", NOW())`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Row has been updated");
    req.flash("success", "Data stored!");
    console.log(result);
    customers = result;
  });

  console.log(customers);
  res.status(200).json({ customers });
};



const addressDataToUpdate = (request, response,) => {

	var id = request.params.id;

	var query = `SELECT * FROM address WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('address', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});

	});

}

const updateAddressData = (req,res) => {
 const id = request.params.id;
	const city = req.body.city;
  const province = req.body.province;
  const zip = req.body.zip;
  const house = req.body.house;
	var query = `
	UPDATE address 
	SET city = "${city}", 
	province = "${province}", 
	zip = "${zip}", 
  house = "${house}", 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			console.log(data)
		}

	});

}

const deleteAddressData = (req, res) => {
  var address = { id: req.params.id };
  con.query(
    "DELETE FROM address WHERE id = " + req.params.id,
    address,
    function (err, result) {
      if (err) {
        req.flash("error", err);
        res.redirect("/");
      } else {
        req.flash("success", "Data removed :" + req.params.id);
        res.redirect("/");
      }
    }
  );
};

module.exports = {
  getCustomersData,
  createCustomerData,
  customerDataToUpdate,
  updateCustomerData,
  deleteCustomersData,
  getAddressData,
  createAddressData,
  updateAddressData,
  addressDataToUpdate,
  deleteAddressData
};
