const supertest = require("supertest")

const { app } = require("../index")

const api = supertest(app)

const url = "/api/v1/notes"
const newNote = {
  title: "Create Note Test",
  content: "Esta es una nueva nota y esta creada por el test",
}
const newNoteError = {
  title: "",
  content: "Esta es una nueva nota y esta creada por el test",
}

/* Create an array for not depend of the state of the database at the moment that execute the tests */
const initialNotes = [
  {
    title: "NoteTest",
    content: "Esta es la nueva nota y es la primera",
    createdAt: new Date(),
    updatedAt: new Date(),
    folder_id: "",
  },
  {
    title: "NoteTest2",
    content: "Esta es una nueva nota y esta muy bien",
    createdAt: new Date(),
    updatedAt: new Date(),
    folder_id: "",
  },
]

const getAllContentsFromNotes = async () => {
  const response = await api.get(url)
  const { data } = response.body
  return {
    contents: data.map((note) => note.content),
    data,
  }
}

module.exports = {
  api,
  url,
  newNote,
  newNoteError,
  initialNotes,
  getAllContentsFromNotes,
}
