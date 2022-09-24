const express = require("express")
const router = express.Router()

const {
  createFolder,
  getFolders,
  updateFolders,
} = require("../../controllers/foldersControllers")

router.get("/folders", getFolders)

router.post("/folders", createFolder)

router.patch("/folders/:id", updateFolders)

module.exports = router
