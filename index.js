const express = require('express');
const dotEnv = require("dotenv");
const connectDb = require('./config/databaseConfig');
const app = express();
dotEnv.config();

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


app.get("/", (req, res) => {
    res.send('Welcome to Vara-edTech test API')
})

let PORT = 8080
const host = '0.0.0.0'
 

 const server = async () => {
    try {
        await connectDb()
            if(PORT === null || PORT === ""){
                PORT = 9000;
            }
            app.listen(PORT, host, ()=> {
                console.log(`Listening to Port ${PORT}, We are Live :)`)
             })
       
    } catch (error) {
        console.log(error)
    }
 }
 server()
