import React, {useState} from "react";

import {createFolder} from "../services/Folders";
import {useLocation} from "wouter";

const CreateFolder = () => {
  const [newFolder, setNewFolder] = useState({
    "name": "",
    "length": 0
  })
  const setLocation = useLocation()[1]

  const handleChange = e => {
    setNewFolder({
      ...newFolder,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await createFolder(newFolder)
    if (response.status === "OK") {
      alert("Folder created successfully!!")
      setLocation("/")
    } else {
      alert("Error in the create folder process")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center items-center gap-16 flex-col">
      <h2 className="text-3xl">Create folder</h2>
      <input type="text" name="name" onChange={handleChange} placeholder="Folder Name" className="p-2 w-52 focus:outline-none" />
      <button className="bg-green-600 p-2 rounded-lg w-48">Create</button>
    </form>
  )
}

export default CreateFolder
