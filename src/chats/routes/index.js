const express = require("express");
const router = express.Router();
router.use("/", require("./chats"));
module.exports = router;
