import React, {useEffect, useState} from "react";

import FormNote from "../components/FormNote";
import NotesColumn from "../components/NotesColumn";
import {getAllNotes, getOneNote, updateOne} from "../services/Notes";
import NotesPreview from "../components/NotesPreview";

export default function OneNotePage({params}) {
  const [notes, setNotes] = useState([])
  const [oneNote, setOneNote] = useState({
    "title": "",
    "content": ""
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllNotes()
      setNotes(response.data)
    }
    fetchData()
  }, [])

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
    console.log(response)
  }

  return (
    <>
      <NotesColumn title="All Notes">
        {notes.length > 0 ?
          notes.map(note => <NotesPreview note={note} key={note._id} active={note._id === params.id && "active"} />)
          :
          <div className="grid place-items-center h-[10%]">
            <h3 className="opacity-[0.6]">Doesn&apos;t exists notes</h3>
          </div>
        }
      </NotesColumn>
      <FormNote handleSubmit={handleSubmit} setVisible={setVisible} visible={visible} title={oneNote.title} content={oneNote.content} id={params.id} setNote={setOneNote} note={oneNote} />
    </>
  )
}
