import React from "react"
import {FaBook, FaFolderPlus, FaFile, FaFileAlt, FaTrash} from "react-icons/fa"

import ToggleTheme from "./ToggleTheme"
import TextMenu from "./TextMenu"
import ListMenu from "./ListMenu"

export default function Header() {

  return (
    <header className="h-screen bg-dark xl:flex flex-col min-w-[255px] hidden p-5 relative">
      <div className="w-full flex justify-end items-center px-6"> 
        <ToggleTheme />
      </div>
      <div>
        <div className="py-5">
          <TextMenu title="All Notes" icon={<FaFileAlt />} />
          <ListMenu title="Folders" icon={<FaBook />} />
        </div>
      </div>
      <div className="absolute bottom-5 left-5">
        <TextMenu title="New Folder" icon={<FaFolderPlus />} />
        <TextMenu title="New Note" icon={<FaFile />} />
        <TextMenu title="Trash" icon={<FaTrash />} />
      </div>
    </header>
  )
}
