const express = require("express");
const router  = express.Router();
const userRouter = require("./user"); 
const accountRouter = require("./account");
const dotenv = require("dotenv");
dotenv.config();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
