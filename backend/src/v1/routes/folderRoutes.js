const express = require("express")
const router = express.Router()

const {
  createFolder,
  getFolders,
} = require("../../controllers/foldersControllers")

router.get("/folders", getFolders)

router.post("/folders", createFolder)

module.exports = router
