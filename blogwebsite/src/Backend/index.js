const express = require("express");
const route = require("./Route/route");
const app = express();
const cors = require("cors");

app.use(route);
app.use(cors({
    origin:"*"
}))

app.listen(5000, () => {
  console.log("server is running");
})