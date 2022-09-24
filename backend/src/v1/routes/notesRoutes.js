const express = require("express")
const router = express.Router()

const {
  getNotes,
  createNote,
  updateNote,
} = require("../../controllers/notesControllers")

router.get("/", (req, res) => {
  res.send("<h1>Hello world 👋</h1>")
})

router.get("/notes", getNotes)

router.post("/notes", createNote)

router.patch("/notes/:id", updateNote)

module.exports = router
