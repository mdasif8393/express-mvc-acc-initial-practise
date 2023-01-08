const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());

// app.use(viewCount);

dbConnect();

app.use("/api/v1/tools", toolsRoutes);




app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("Route doesn't found");
})

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  })
})

