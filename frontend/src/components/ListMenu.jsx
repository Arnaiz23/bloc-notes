import React, {useState} from "react";
import {FaFolder, FaMinusCircle, FaPlusCircle} from "react-icons/fa";

import TextMenu from "./TextMenu";
import useFolders from "../hooks/useFolders";

export default function ListMenu({icon, title}) {
  const [show, setShow] = useState(false)

  const toggleList = () => {
    show ? setShow(false) : setShow(true)
  }

  const {folders} = useFolders()

  return (
    <div className="flex align-center justify-start gap-4 p-2 cursor-pointer flex-col">
      <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleList}>
        <div className="flex items-center justify-start gap-4">
          <i>{icon}</i>
          <h4>{title}</h4>
        </div>
        {folders.length > 0 ?
          <i>{show ? <FaMinusCircle /> : <FaPlusCircle />}</i>
          :
          <p className="opacity-70">0</p>
        }
      </div>
      <ul className={`flex-col gap-2 p-1 ${show ? 'flex' : 'hidden'} max-h-[500px] overflow-y-auto`}>
        {folders.length > 0 &&
          folders.map(folder =>
            <li key={folder._id} className="flex items-center justify-between">
              <TextMenu title={folder.name} icon={<FaFolder />} link={`/folder/${folder._id}`} />
              <span className="opacity-[0.6]">{folder.length}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}
