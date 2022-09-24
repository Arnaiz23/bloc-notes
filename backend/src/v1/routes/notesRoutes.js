const express = require("express")
const router = express.Router()

const {
  getNotes,
  createNote,
  updateNote,
  getNote,
  deleteNote,
} = require("../../controllers/notesControllers")

router.get("/", (req, res) => {
  res.send("<h1>Hello world 👋</h1>")
})

router.get("/notes", getNotes)

router.get("/notes/:id", getNote)

router.post("/notes", createNote)

router.patch("/notes/:id", updateNote)

router.delete("/notes/:id", deleteNote)

module.exports = router
