const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({limit:'30mb',extended:true}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


app.use('/',(req,res) => {
    res.send('Welcome to Vara-edTech test api')
})
const PORT = 9000;
const host = 
 app.listen(PORT,()=> {
    console.log(`Listening to Port ${PORT}, We are Live :)`)
 })

