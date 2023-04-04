const express = require("express");
const route = require("./Route/route");
const app = express();
const cors = require("cors");

app.use(cors({
  origin:"*"
}))
app.use(route);


app.listen(5000, () => {
  console.log("server is running");
})