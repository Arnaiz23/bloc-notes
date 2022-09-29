export const getAllNotes = async () => {
  const response = await fetch("http://localhost:9000/api/v1/notes")
  return await response.json()
}

export const createNote = async (body) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}notes`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({"Content-type": "application/json"})
  })
  return await response.json()
}

export const getOneNote = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}notes/${id}`)
  return await response.json()
}

export const updateOne = async (id, body) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}notes/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: new Headers({"Content-type": "application/json"})
  })
  return await response.json()
}

export const deleteNote = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}notes/${id}`, {
    method: "DELETE",
  })
  return await response.json()
}
