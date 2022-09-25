const {
  getFoldersService,
  createFolderService,
  updateFolderService,
  deleteFolderService,
  getFolderService,
} = require("../services/foldersService")

const getFolders = async (req, res) => {
  const getFolders = await getFoldersService()

  res.status(200).send({
    status: "OK",
    data: getFolders,
  })
}

const createFolder = async (req, res) => {
  const { body } = req

  const newFolder = await createFolderService(body)

  if (newFolder.status) {
    return res.status(400).send({
      status: "ERROR",
      data: newFolder.status,
    })
  }

  res.status(201).send({
    status: "OK",
    data: newFolder,
  })
}

const updateFolders = async (req, res) => {
  const { id } = req.params
  const { body } = req

  const updateFolder = await updateFolderService(id, body)

  if (updateFolder.status) {
    return res.status(400).send({
      status: "ERROR",
      data: updateFolder.status,
    })
  }

  res.status(200).send({
    status: "OK",
    data: updateFolder,
  })
}

const deleteFolder = async (req, res) => {
  const { id } = req.params

  const deleteFolder = await deleteFolderService(id)

  if (deleteFolder.status) {
    return res.status(400).send({
      status: "ERROR",
      data: "This ID isn't exists",
    })
  }

  res.status(200).send({
    status: "OK",
    data: deleteFolder,
  })
}

const getFolder = async (req, res) => {
  const { id } = req.params

  const folder = await getFolderService(id)

  if (folder.status) {
    return res.status(404).send({
      status: "ERROR",
      data: folder.status,
    })
  }

  res.status(200).send({
    status: "OK",
    data: folder,
  })
}

module.exports = {
  getFolders,
  createFolder,
  updateFolders,
  deleteFolder,
  getFolder,
}
