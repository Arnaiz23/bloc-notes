const express = require("express")
const router = express.Router()

router.get("/folders", (req, res) => {
  res.send("<h1>Hello Folders</h1>")
})

module.exports = router
