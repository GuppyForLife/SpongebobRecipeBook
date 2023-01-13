const path = require("path");
const express = require("express");
const { sequelize } = require("./db/db");
const cors = require("cors");
const recipeRouter = require('./src/recipeRoutes');
const userRouter = require('./src/userRoutes');

sequelize
  .authenticate()
  .then((res) => console.log("Database is connected"))
  .catch((err) => {
    console.log("There was an error connecting to the database", err);
    process.exit(1);
  });

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(express.json());
app.use("/api", recipeRouter);
app.use("/api", userRouter);

const server = app.listen(8000, () => {
  console.log("Server is up and running on PORT: 8000");
});
