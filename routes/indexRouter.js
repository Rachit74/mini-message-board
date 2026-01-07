const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req,res) => {
    res.send("Welcome to message board!");
})

indexRouter.get("/new", (req,res) => {
    res.send("Welcome to form page!");
})

module.exports = indexRouter;