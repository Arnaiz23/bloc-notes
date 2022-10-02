import React, {useEffect, useState} from "react";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import useFolders from "../hooks/useFolders";
import useShowMenu from "../hooks/useShowMenu";
import {getAllNotes} from "../services/Notes";

export default function AllNotesPage() {
  const [notes, setNotes] = useState([])
  const {toggleUpdate} = useFolders()
  const {closeMenu} = useShowMenu()

  useEffect(() => {
    closeMenu()
    toggleUpdate()
    const fetchData = async () => {
      const json = await getAllNotes()
      setNotes(json.data)
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <NotesColumn title="All Notes" noNote={true}>
        {notes.length > 0 ?
          (notes.map(note => <NotesPreview note={note} key={note._id} url="all" />))
          : (
            <div className="grid place-items-center h-[10%]">
              <h3 className="opacity-[0.6]">Doesn&apos;t exists notes</h3>
            </div>
          )
        }
      </NotesColumn>
    </React.Fragment>
  )
}
