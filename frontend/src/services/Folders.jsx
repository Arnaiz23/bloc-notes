export async function getFolders() {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}folders`)
  return response.json()
}

export const getFolder = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}folders/${id}`)
  return response.json()
}

export const createFolder = async (body) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}folders`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify(body)
  })
  return response.json()
}

export const deleteFolder = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}folders/${id}`, {
    method: "DELETE"
  })
  return response.json()
}
