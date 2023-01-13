const express = require("express");
const userRouter = express.Router();
const { registerNewUser, loginUser } = require("./controllers");

userRouter.post("/users/register", registerNewUser);
userRouter.post("/users/login", loginUser);

module.exports = userRouter;