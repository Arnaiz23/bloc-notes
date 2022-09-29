import React, {useEffect, useState} from "react";
import {FaFolder} from "react-icons/fa/index"
import {getFolder} from "../services/Folders";

const FOLDERS_COLORS = [
    {
        "bg": "bg-red-700",
        "c": "text-white"
    },
    {
        "bg": "bg-orange-600",
        "c": "text-white"
    },
    {
        "bg": "bg-amber-400",
        "c": "text-black"
    },
    {
        "bg": "bg-lime-500",
        "c": "text-black"
    },
    {
        "bg": "bg-cyan-500",
        "c": "text-black"
    }
]

export default function FormNote({title, content, setVisible, handleSubmit, visible, setNote, note}) {
    const handleChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
        setVisible(true)
    }
    const [folderName, setFolderName] = useState(null)
    const [folderColor, setFolderColor] = useState({})

    useEffect(() => {
        if (note.folder_id) {
            const fetchData = async () => {
                const response = await getFolder(note.folder_id)
                setFolderName(response.data.name)
                setFolderColor(FOLDERS_COLORS[Math.round(Math.random(0, FOLDERS_COLORS.length + 1))])
            }
            fetchData()
        }
    }, [note])

    return (
        <form className="w-full flex flex-col justify-start items-start relative" onSubmit={handleSubmit}>
            <input type="text" placeholder="Note Name" onChange={handleChange} name="title" defaultValue={title && title} className="w-full p-3 pl-5 focus:outline-none text-xl bg-transparent placeholder-slate-500 dark:placeholder-gray-500" />
            {folderName && <span className={`flex justify-evenly items-center gap-2 rounded-md ${!note.folder_id ? 'bg-gray-500' : `${folderColor.bg} ${folderColor.c}`} py-1 px-2 mx-5`}><i><FaFolder /></i> {note.folder_id ? `${folderName}` : 'No Folder'}</span>}
            <textarea placeholder="Write the content of the note" onChange={handleChange} name="content" defaultValue={content && content} className="w-full h-full resize-none p-3 pl-5 text-lg bg-transparent focus:outline-none placeholder-slate-500 dark:placeholder-gray-500"></textarea>
            <button className={`p-2 rounded-md bg-green-500 dark:bg-green-600 absolute bottom-3 right-3 ${visible ? 'opacity' : 'opacity-70 cursor-not-allowed'}`}>Save</button>
        </form>
    )
}
