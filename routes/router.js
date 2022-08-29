const controller = require("../controllers/controller.js")

const express = require("express")

const router = express.Router()


////////////////////////////////////////////////////////
router.get("/", controller.getHome)
router.get("/jk", controller.getUsers)

router.post("/authUser", controller.authUser)
router.post("/signUser", controller.signUser)


// router.post("/api/login", controller.authUser)
// router.post("/rsc/login", controller.authUser)

////////////////////////////////////////////////////////

module.exports = router;