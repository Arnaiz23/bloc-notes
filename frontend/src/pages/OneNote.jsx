import FormNote from "../components/FormNote";
import NotesColumn from "../components/NotesColumn";
import React, {useEffect, useState} from "react";
import {getAllNotes, getOneNote} from "../services/Notes";
import NotesPreview from "../components/NotesPreview";

export default function OneNotePage({params}) {
  const [notes, setNotes] = useState([])
  const [oneNote, setOneNote] = useState({
    "title": "",
    "content": ""
  })

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
      <FormNote title={oneNote.title} content={oneNote.content} />
    </>
  )
}
