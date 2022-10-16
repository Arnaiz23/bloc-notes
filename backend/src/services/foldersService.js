const Folder = require("../database/schemas/Folder")
const Notes = require("../database/schemas/Notes")

const FOLDER_COLORS = [
  {
    bg: "bg-red-700",
    c: "text-white",
  },
  {
    bg: "bg-orange-600",
    c: "text-white",
  },
  {
    bg: "bg-amber-400",
    c: "text-black",
  },
  {
    bg: "bg-lime-500",
    c: "text-black",
  },
  {
    bg: "bg-cyan-500",
    c: "text-black",
  },
]

const getFoldersService = async () => {
  let getFolders

  try {
    getFolders = await Folder.find()
  } catch (err) {
    console.log(err)
  }

  return getFolders
}

const createFolderService = async (body) => {
  let createFolder

  if (body.name.length <= 0) {
    return { status: "The name cannot be empty" }
  }

  const date = new Date()

  const randomNumber = Math.round(Math.random(0, FOLDER_COLORS.length + 1))

  body.createdAt = date
  body.updateAt = date
  body.color = FOLDER_COLORS[randomNumber]

  try {
    createFolder = await Folder.create(body)
  } catch (err) {
    console.log(err)
  }

  return createFolder
}

const updateFolderService = async (id, body) => {
  try {
    const search = await Folder.findById(id)

    if (!search) {
      return { status: "This ID isn't exists" }
    }

    const notes = await Notes.find({ folder_id: id })

    const date = new Date()

    body.length = notes.length
    body.updateAt = date

    const updateNote = await Folder.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    })

    if (!updateNote) {
      return { status: "Error in the update proccess" }
    }

    return updateNote
  } catch (err) {
    return { status: "This ID isn't exists" }
  }
}

const deleteFolderService = async (id) => {
  try {
    const deleteFolder = await Folder.findByIdAndDelete(id)

    if (!deleteFolder) {
      return { status: "error" }
    }

    const notesFolder = await Notes.find({ folder_id: deleteFolder._id })

    if (notesFolder.length > 0) {
      for (const note of notesFolder) {
        note.folder_id = ""
        await Notes.findByIdAndUpdate(note._id, note, {
          returnDocument: "after",
        })
      }
    }

    return deleteFolder
  } catch (err) {
    return { status: "error" }
  }
}

const getFolderService = async (id) => {
  try {
    const folder = await Folder.findById(id)

    const notes = await Notes.find({ folder_id: folder._id }).sort({
      updatedAt: "desc",
    })

    const data = {
      _id: folder._id,
      name: folder.name,
      color: folder.color,
      notes,
    }

    return data
  } catch (err) {
    return { status: "This ID isn't exists" }
  }
}

module.exports = {
  getFoldersService,
  createFolderService,
  updateFolderService,
  deleteFolderService,
  getFolderService,
}
