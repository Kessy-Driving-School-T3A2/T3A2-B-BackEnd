const controller = require("../controllers/auth.controller");
const express = require('express');
const app = express()
const router = express.Router();


router.get("/signin", controller.hangout)
router.post("/signin", controller.signin);

module.exports = router
