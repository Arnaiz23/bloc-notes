import React, {useState} from "react";
import {FaFolder, FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import TextMenu from "./TextMenu";

export default function ListMenu({icon, title}) {
  const [show, setShow] = useState(false)

  const toggleList = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className="flex align-center justify-start gap-4 p-2 cursor-pointer flex-col">
      <div className="flex items-center justify-between gap-4 cursor-pointer">
        <div className="flex items-center justify-start gap-4">
          <i>{icon}</i>
          <h4>{title}</h4>
        </div>
        <i onClick={toggleList}>{show ? <FaPlusCircle /> : <FaMinusCircle />}</i>
      </div>
      <ul className={`flex-col gap-2 p-1 ${show ? 'hidden' : 'flex'}`}>
        <li className="flex items-center justify-between">
          <TextMenu title="Prueba" icon={<FaFolder />} />
          <span className="opacity-[0.6]">5</span>
        </li>
        <li className="flex items-center justify-between">
          <TextMenu title="Prueba" icon={<FaFolder />} />
          <span className="opacity-[0.6]">5</span>
        </li>
        <li className="flex items-center justify-between">
          <TextMenu title="Prueba" icon={<FaFolder />} />
          <span className="opacity-[0.6]">5</span>
        </li>
      </ul>
    </div>
  )
}
