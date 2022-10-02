import {FaTrash} from "react-icons/fa/index"
import {useLocation} from "wouter"
import {deleteFolder} from "../services/Folders"

export default function NotesColumn({children, title, buttonDelete, folderId, noNote}) {

  const setLocation = useLocation()[1]

  const handleDeleteFolder = async () => {
    const response = await deleteFolder(folderId)
    if (response.status === "OK") {
      setLocation("/")
    } else {
      alert("Error in the deleteFolder process")
    }
  }

  return (
    <div className={`md:block max-w-[300px] min-w-[300px] bg-orange-100 dark:bg-zinc-800 overflow-y-auto h-screen relative ${noNote ? 'block max-w-none' : 'hidden'}`}>
      <div>
        {buttonDelete && <button className="absolute bg-red-800 top-2 right-2 z-10 p-2 rounded-md" onClick={handleDeleteFolder}><FaTrash /></button>}
        <h2 className="w-full grid place-items-center p-5 text-xl font-bold h-[56px] sticky top-0 bg-orange-100 dark:bg-zinc-800 border-b border-white">{title}</h2>
      </div>
      {children}
    </div>
  )
}
