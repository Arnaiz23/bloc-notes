import React, {useEffect, useState} from "react";
import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";

export default function AllNotesPage () {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/api/v1/notes")
      const json = await response.json()
      setNotes(json.data)
    }
    fetchData()
  }, [])

  return (
    <NotesColumn>
      <h2 className="w-full grid place-items-center p-5 pb-2 text-xl font-bold">All Notes</h2>
      <hr />
      {notes.length > 0 && 
          notes.map(note => 
          <NotesPreview note={note} key={note._id} />
          )
      }
    </NotesColumn>
  )
}
