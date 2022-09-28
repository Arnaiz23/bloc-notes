import React, {useEffect, useState} from "react";
import {useLocation} from "wouter";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import {getAllNotes, createNote} from "../services/Notes";

export default function NewNotePage() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState({
    "title": "",
    "content": ""
  })
  const [update, setUpdate] = useState(false)
  const setLocation = useLocation()[1]

  useEffect(() => {
    const fetchData = async () => {
      const json = await getAllNotes()
      setNotes(json.data)
    }
    fetchData()
  }, [update])

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newNote.title.length <= 0) {
      return alert("The title cannot be empty")
    }

    if (newNote.content.length <= 0) {
      return alert("The content cannot be empty")
    }
    const newNoteCreated = await createNote(newNote)
    update ? setUpdate(false) : setUpdate(true)
    alert("Note created successfully")
    setLocation(`/all/${newNoteCreated.data._id}`)
  }

  return (
    <>
      <NotesColumn title="All Notes">
        {notes.length > 0 ?
          notes.map(note => <NotesPreview key={note._id} note={note} />)
          :
          <div className="grid place-items-center h-[10%]">
            <h3 className="opacity-[0.6]">Doesn&apos;t exists notes</h3>
          </div>
        }
      </NotesColumn>
      <form className="w-full flex flex-col justify-start items-start relative" onSubmit={handleSubmit}>
        <input type="text" placeholder="Note Name" onChange={handleChange} name="title" className="w-full p-3 pl-5 focus:outline-none text-xl bg-transparent" />
        {/* Here maybe I delete the line and add the folder or anything */}
        <div className="border-b border-gray-400 my-1 w-[90%] mx-auto"></div>
        <textarea placeholder="Write the content of the note" onChange={handleChange} name="content" className="w-full h-full resize-none p-3 pl-5 text-lg bg-transparent focus:outline-none"></textarea>
        <button className="p-2 rounded-md bg-green-600 absolute bottom-3 right-3">Save</button>
      </form>
    </>
  )
}
