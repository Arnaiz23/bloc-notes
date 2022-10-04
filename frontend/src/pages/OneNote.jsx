import React, {useEffect, useState} from "react";

import FormNote from "../components/FormNote";
import NotesColumn from "../components/NotesColumn";
import {deleteNote, getAllNotes, getOneNote, updateOne} from "../services/Notes";
import NotesPreview from "../components/NotesPreview";
import {useLocation} from "wouter";
import {getFolder} from "../services/Folders";
import {FaTrash} from "react-icons/fa";

export default function OneNotePage({params}) {
  const [notes, setNotes] = useState([])
  const [folder, setFolder] = useState({})
  const [oneNote, setOneNote] = useState({
    "title": "",
    "content": ""
  })

  const [visible, setVisible] = useState(false)
  const [update, setUpdate] = useState(false)
  const [location, setLocation] = useLocation()


  useEffect(() => {
    if (!params.folderId) {
      const fetchData = async () => {
        const response = await getAllNotes()
        setNotes(response.data)
        setUpdate(false)
      }
      fetchData()
    } else {
      const fetchData = async () => {
        const response = await getFolder(params.folderId)
        setNotes(response.data.notes)
        setFolder(response.data)
        setUpdate(false)
      }
      fetchData()
    }
  }, [update])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOneNote(params.id)
      setOneNote(response.data)
    }
    fetchData()
  }, [params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!visible) return false

    if (oneNote.title.length <= 0) {
      return alert("The title cannot be empty")
    }

    if (oneNote.content.length <= 0) {
      return alert("The content cannot be empty")
    }

    const response = await updateOne(params.id, oneNote)
    if (response.status === "OK") {
      setUpdate(true)
      alert("Updated note")
    } else {
      alert("Error in the update process. Retry later.")
    }
  }

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      const response = await deleteNote(params.id)
      if (response.status === "OK") {
        alert("Note deleted")
        setLocation(params.folderId ? `/${params.folderId}` : "/all")
      } else {
        alert("Error in the delete process. Retry later.")
      }
    } else {
      alert("The note is safe")
    }
  }

  return (
    <>
      <NotesColumn title={params.folderId ? folder.name : "All Notes"} noNote={false} buttonDelete={params.folderId && true} folderId={params.folderId}>
        {notes.length > 0 ?
          notes.map(note => <NotesPreview note={note} key={note._id} active={note._id === params.id && "active"} url={location.split("/")[1] === "all" ? "all" : `folder/${params.folderId}` } />)
          :
          <div className="grid place-items-center h-[10%]">
            <h3 className="opacity-[0.6]">Doesn&apos;t exists notes</h3>
          </div>
        }
      </NotesColumn>
      <FormNote handleSubmit={handleSubmit} setVisible={setVisible} visible={visible} title={oneNote.title} content={oneNote.content} id={params.id} setNote={setOneNote} note={oneNote} />
      <button onClick={handleDelete} className="absolute grid place-items-center top-3 right-3 bg-red-500 dark:bg-red-600 p-2 rounded-md"><FaTrash /></button>
    </>
  )
}
