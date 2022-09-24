const express = require("express")
const router = express.Router()

const {
  createFolder,
  getFolders,
  updateFolders,
  deleteFolder,
} = require("../../controllers/foldersControllers")

router.get("/folders", getFolders)

router.post("/folders", createFolder)

router.patch("/folders/:id", updateFolders)

router.delete("/folders/:id", deleteFolder)

module.exports = router
