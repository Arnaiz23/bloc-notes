import React, {useEffect, useState} from "react";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import useFolders from "../hooks/useFolders";
import {getAllNotes} from "../services/Notes";

export default function AllNotesPage() {
  const [notes, setNotes] = useState([])
  const {toggleUpdate} = useFolders()

  useEffect(() => {
    toggleUpdate()
    const fetchData = async () => {
      const json = await getAllNotes()
      setNotes(json.data)
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <NotesColumn title="All Notes">
        {notes.length > 0 ?
          (notes.map(note => <NotesPreview note={note} key={note._id} />))
          : (
            <div className="grid place-items-center h-[10%]">
              <h3 className="opacity-[0.6]">Doesn&apos;t exists notes</h3>
            </div>
          )
        }
      </NotesColumn>
      <div className="grid place-items-center w-full">
        <h2 className="text-2xl text-zinc-400">Select one note</h2>
      </div>
    </React.Fragment>
  )
}
