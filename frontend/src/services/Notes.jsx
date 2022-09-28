export const getAllNotes = async () => {
  const response = await fetch("http://localhost:9000/api/v1/notes")
  return await response.json()
}
