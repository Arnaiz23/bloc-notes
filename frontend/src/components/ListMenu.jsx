import React, {useEffect, useState} from "react";
import {FaFolder, FaMinusCircle, FaPlusCircle} from "react-icons/fa";

import TextMenu from "./TextMenu";
import { getFolders } from "../services/Folders";

export default function ListMenu({icon, title}) {
  const [show, setShow] = useState(false)
  const [folders, setFolders] = useState([])

  const toggleList = () => {
    show ? setShow(false) : setShow(true)
  }

  useEffect(() => {
    getFolders().then(({data}) => setFolders(data))
  },[])

  return (
    <div className="flex align-center justify-start gap-4 p-2 cursor-pointer flex-col">
      <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleList}>
        <div className="flex items-center justify-start gap-4">
          <i>{icon}</i>
          <h4>{title}</h4>
        </div>
        <i>{show ? <FaMinusCircle /> : <FaPlusCircle />}</i>
      </div>
      <ul className={`flex-col gap-2 p-1 ${show ? 'flex' : 'hidden'}`}>
        {folders.length > 0 &&
            folders.map(folder => 
            <li key={folder._id} className="flex items-center justify-between">
              <TextMenu title={folder.name} icon={<FaFolder />} link="/" />
              <span className="opacity-[0.6]">{folder.length}</span>
            </li>
            )
        }
      </ul>
    </div>
  )
}
