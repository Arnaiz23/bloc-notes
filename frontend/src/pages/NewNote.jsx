import React, {useEffect, useState} from "react";
import {useLocation} from "wouter";
import FormNote from "../components/FormNote";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import useShowMenu from "../hooks/useShowMenu";
import {getAllNotes, createNote} from "../services/Notes";

export default function NewNotePage() {
  const [notes, setNotes] = useState([])

  const [visible, setVisible] = useState(false)
  const [note, setNote] = useState({
    "title": "",
    "content": "",
    "folder_id": ""
  })
  const setLocation = useLocation()[1]
  const {closeMenu} = useShowMenu()

  useEffect(() => {
    closeMenu()
    const fetchData = async () => {
      const json = await getAllNotes()
      setNotes(json.data)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!visible) return false

    if (note.title.length <= 0) {
      return alert("The title cannot be empty")
    }

    if (note.content.length <= 0) {
      return alert("The content cannot be empty")
    }
    const newNoteCreated = await createNote(note)
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
      <FormNote handleSubmit={handleSubmit} visible={visible} setVisible={setVisible} setNote={setNote} note={note} />
    </>
  )
}
