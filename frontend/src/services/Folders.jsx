export async function getFolders() {
  const response = await fetch("http://localhost:9000/api/v1/folders")
  return response.json()
}

export const getFolder = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}folders/${id}`)
  return response.json()
}
