const supertest = require("supertest")
const mongoose = require("mongoose")

const { app, server } = require("../index")
const Note = require("../database/schemas/Notes")

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
    content: "Esta es una nueva nota y esta muy bien",
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

beforeEach(async () => {
  /* Delete all the notes */
  await Note.deleteMany({})

  const note1 = new Note(initialNotes[0])
  await note1.save()

  const note2 = new Note(initialNotes[1])
  await note2.save()
})

describe("/notes getAllNotes", () => {
  it("getAllNotes", async () => {
    await api
      .get(url)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  it("getAllNotes have as minimum 2 notes", async () => {
    const response = await api.get(url)
    expect(response.body.data).toHaveLength(2)
  })
})

describe("/notes getOneNote", () => {
  it("getOneNote (404) badID", async () => {
    const badId = "/asas"
    await api
      .get(url + badId)
      .expect(404)
      .expect("Content-type", /application\/json/)
  })
  it("getOneNote (200)", async () => {
    const response = await api.get(url)
    const { data } = response.body
    await api
      .get(url + "/" + data[0]._id)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })
})

describe("/notes create Note", () => {
  it("Create note (400) title empty", async () => {
    await api
      .post(url)
      .send(newNoteError)
      .expect(400)
      .expect("Content-type", /application\/json/)
  })

  it("Create note (201)", async () => {
    await api
      .post(url)
      .send(newNote)
      .expect(201)
      .expect("Content-type", /application\/json/)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
