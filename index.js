const express = require("express");
const dotEnv = require("dotenv");
const apiRoutes = require("./routes/routes");
const app = express();
dotEnv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true,}))

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

app.use("/api/v1", apiRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Vara-edTech test API");
});

let PORT = 8080;
const host = "0.0.0.0";

if (PORT === null || PORT === "") {
  PORT = 9000;
}
app.listen(PORT, host, () => {
  console.log(`Listening to Port ${PORT}, We are Live :)`);
});
