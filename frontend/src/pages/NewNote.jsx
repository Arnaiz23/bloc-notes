import React, {useEffect, useState} from "react";
import FormNote from "../components/FormNote";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import {getAllNotes} from "../services/Notes";

export default function NewNotePage() {
  const [notes, setNotes] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const json = await getAllNotes()
      setNotes(json.data)
    }
    fetchData()
  }, [update])

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
      <FormNote update={update} setUpdate={setUpdate} />
    </>
  )
}
