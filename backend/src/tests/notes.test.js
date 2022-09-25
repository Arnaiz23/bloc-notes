const supertest = require("supertest")
const mongoose = require("mongoose")

const { app, server } = require("../index")

const api = supertest(app)

const url = "/api/v1/notes"
const idNote = "/632f84e671fdbdcc998baa7a"
const newNote = {
  title: "Prueba Test",
  content: "Esta es una nueva nota y esta creada por el test",
}
const newNoteError = {
  title: "",
  content: "Esta es una nueva nota y esta creada por el test",
}

describe("/notes ", () => {
  /* All Notes */

  it("getAllNotes (500)", async () => {
    await api.get(url).expect(500)
  })

  it("getAllNotes (200)", async () => {
    await api
      .get(url)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  /* ONE NOTE (Markdown 2 -> 632f84e671fdbdcc998baa7a) */

  it("getOneNote (500)", async () => {
    await api
      .get(url + idNote)
      .expect(500)
      .expect("Content-type", /application\/json/)
  })
  it("getOneNote (404)", async () => {
    await api
      .get(url + idNote)
      .expect(404)
      .expect("Content-type", /application\/json/)
  })
  it("getOneNote (200)", async () => {
    await api
      .get(url + idNote)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  /* Create note */

  it("Create note (500)", async () => {
    await api
      .post(url)
      .send(newNote)
      .expect(500)
      .expect("Content-type", /application\/json/)
  })

  it("Create note (400)", async () => {
    await api
      .post(url)
      .send(newNote)
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
