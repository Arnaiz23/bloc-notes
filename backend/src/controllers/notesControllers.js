const {
  getNotesService,
  createNoteService,
} = require("../services/notesService")

async function getNotes(req, res) {
  const notes = await getNotesService()
  res.status(200).send({
    status: "OK",
    data: notes,
  })
}

const createNote = async (req, res) => {
  const body = req.body

  const newNote = await createNoteService(body)

  res.status(201).send({
    status: "OK",
    data: newNote,
  })
}

module.exports = { getNotes, createNote }
