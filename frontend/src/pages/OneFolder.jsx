import React, {useEffect, useState} from "react";

import NotesColumn from "../components/NotesColumn";
import NotesPreview from "../components/NotesPreview";
import useFolders from "../hooks/useFolders";
import useShowMenu from "../hooks/useShowMenu";
import {getFolder} from "../services/Folders";

const OneFolder = ({params}) => {
  const [folder, setFolder] = useState({})
  const [notes, setNotes] = useState([])
  const {toggleUpdate} = useFolders()
  const {closeMenu} = useShowMenu()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFolder(params.folderId)
      setFolder(response.data)
      setNotes(response.data.notes)
    }
    fetchData()
    toggleUpdate()
    closeMenu()
  }, [params.folderId])

  return (
    <>
      <NotesColumn title={folder.name} buttonDelete={true} folderId={params.folderId} noNote={true}>
        {
          notes.length > 0 ?
            notes.map(note => <NotesPreview key={note._id} note={note} url={`folder/${folder._id}`} />)
            :
            <h3 className="p-4 text-center text-zinc-400">This folder doesn&apos;t has notes</h3>
        }
      </NotesColumn>
    </>
  )
}

export default OneFolder
