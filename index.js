const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dbConnent = require("./utils/dbConnect");
const routerServices = require("./routes/services.route.js");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", (req, res) => {
  res.send("No Route found");
});

// Database concention
dbConnent();

app.use("/api/v1/services", routerServices);

async function run() {
  // try {
  //   const serviceCollection = client
  //     .db("travelServices")
  //     .collection("services");
  //   const reviewCollection = client.db("travelServices").collection("reviews");
  //   app.get("/services", async (req, res) => {
  //     const query = {};
  //     const cursor = serviceCollection.find(query).sort({ price: -1 });
  //     const services = await cursor.toArray();
  //     res.send(services);
  //   });
  //   app.post("/service", async (req, res) => {
  //     const service = req.body;
  //     const result = await serviceCollection.insertOne(service);
  //     res.send(result);
  //   });
  //   app.get("/services/:id", async (req, res) => {
  //     const id = req.params.id;
  //     const query = { _id: ObjectId(id) };
  //     const service = await serviceCollection.findOne(query);
  //     res.send(service);
  //   });
  //   // Review API
  //   app.post("/review", async (req, res) => {
  //     const review = req.body;
  //     const result = await reviewCollection.insertOne(review);
  //     res.send(result);
  //   });
  //   app.get("/review/:id", async (req, res) => {
  //     const id = req.params.id;
  //     const query = { serviceId: id };
  //     const cursor = reviewCollection.find(query);
  //     const reviews = await cursor.toArray();
  //     res.send(reviews);
  //   });
  //   app.get("/reviews", async (req, res) => {
  //     let query = {};
  //     if (req.query.email) {
  //       query = {
  //         email: req.query.email,
  //       };
  //     }
  //     const cursor = reviewCollection.find(query);
  //     const orders = await cursor.toArray();
  //     res.send(orders);
  //   });
  //   app.delete("/reviews/:id", async (req, res) => {
  //     const id = req.params.id;
  //     const query = { _id: ObjectId(id) };
  //     const result = await reviewCollection.deleteOne(query);
  //     res.send(result);
  //   });
  //   app.patch("/reviews/:id", async (req, res) => {
  //     const id = req.params.id;
  //     const status = req.body.status;
  //     const query = { _id: ObjectId(id) };
  //     const updatedDoc = {
  //       $set: {
  //         status: status,
  //       },
  //     };
  //     const result = await reviewCollection.updateOne(query, updatedDoc);
  //     res.send(result);
  //   });
  // } finally {
  // }
}

run().catch((err) => console.error(err));

app.listen(port, () => {
  console.log("Server link " + process.env.PORT);
});
