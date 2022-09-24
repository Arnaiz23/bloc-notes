const express = require("express")
const router = express.Router()

const { createFolder } = require("../../controllers/foldersControllers")

router.get("/folders", (req, res) => {
  res.send("<h1>Hello Folders</h1>")
})

router.post("/folders", createFolder)

module.exports = router
