export async function getFolders() {
  const response = await fetch("http://localhost:9000/api/v1/folders")
  return response.json()
}
