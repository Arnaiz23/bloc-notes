import React from "react"
import {FaBook, FaFolderPlus, FaFile, FaFileAlt, FaTrash, FaBars, FaTimes} from "react-icons/fa"

import ToggleTheme from "./ToggleTheme"
import TextMenu from "./TextMenu"
import ListMenu from "./ListMenu"
import useShowMenu from "../hooks/useShowMenu"

export default function Header() {

  const {showMenu, toggleMenu} = useShowMenu()

  return (
    <div>
      <button onClick={toggleMenu} className="absolute top-5 left-5 text-xl xl:hidden z-30">{showMenu ? <FaTimes /> : <FaBars />}</button>
      <header className={`h-screen bg-orange-50 dark:bg-zinc-900 xl:flex flex-col min-w-[255px] p-5 z-20 transition-all duration-300  ${showMenu ? 'translate-x-0 opacity-100 fixed' : 'opacity-0 -translate-x-full fixed'} xl:relative xl:translate-x-0 xl:opacity-100`}>
        <div className="w-full flex justify-end items-center px-6">
          <ToggleTheme />
        </div>
        <div>
          <div className="py-5">
            <TextMenu title="All Notes" icon={<FaFileAlt />} link="/all" />
            <ListMenu title="Folders" icon={<FaBook />} />
          </div>
        </div>
        <div className="absolute sm:bottom-5 left-5 bottom-32">
          <TextMenu title="New Folder" icon={<FaFolderPlus />} link="/newFolder" />
          <TextMenu title="New Note" icon={<FaFile />} link="/all/new" />
          <TextMenu title="Trash" icon={<FaTrash />} link="/trash" />
        </div>
      </header>
    </div>
  )
}
