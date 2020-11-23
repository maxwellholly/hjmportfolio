// import express router
const router = require("express").Router();
// import auth controller
const authCtrl = require("../controllers/auth");
// POST /auth/login
router.post("/login", authCtrl.authUser);
// POST /auth/contact
router.post("/contact", authCtrl.contact)
module.exports = router;
