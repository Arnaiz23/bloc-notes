import React, {useEffect, useState} from "react"
import {FaFolder, FaPencilAlt, FaCheck, FaArrowRight, FaTimes} from "react-icons/fa"

import {getFolder, getFolders} from "../services/Folders"
import {updateOne} from "../services/Notes"

import useFolders from "../hooks/useFolders"

const FOLDER_COLOR_DEFAULT =
{
    "bg": "bg-gray-500",
    "c": "text-white"
}

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

export default function FolderSelect({note, setNote}) {
    const [folderName, setFolderName] = useState(null)
    const [folderColor, setFolderColor] = useState(FOLDER_COLOR_DEFAULT)
    const [optionsChange, setOptionsChange] = useState(false)
    const [folders, setFolders] = useState([])
    const [newFolder, setNewFolder] = useState("")
    const {toggleUpdate} = useFolders()

    const [isMounted, setIsMounted] = useState(null)

    useEffect(() => {
        if (note.folder_id) {
            const fetchData = async () => {
                const response = await getFolder(note.folder_id)
                setFolderName(response.data.name)
                setFolderColor(FOLDERS_COLORS[Math.round(Math.random(0, FOLDERS_COLORS.length + 1))])
                setIsMounted(true)
            }
            fetchData()
        } else {
            setIsMounted(true)
        }
    }, [note])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFolders()
            setFolders(response.data)
        }
        fetchData()
    }, [])

    const handleShowOptions = () => {
        optionsChange ? setOptionsChange(false) : setOptionsChange(true)
    }

    const handleChange = (e) => {
        const value = e.target.value
        if (note.folder_id.length <= 0 && value === 0) return false
        setNewFolder(value)
    }

    const handleClickChange = async () => {
        if (newFolder === note.folder_id) return
        const updateNote = structuredClone(note)
        updateNote.folder_id = newFolder
        const response = await updateOne(note._id, updateNote)
        if (response.status === "OK") {
            setOptionsChange(false)
            setNote(response.data)
            toggleUpdate(true)
        } else {
            alert("Error in the process of change the folder")
        }
    }

    return isMounted ? (
        <div className="flex justify-evenly items-center">
            <span className={`flex justify-evenly items-center gap-2 rounded-md ${!note.folder_id ? 'bg-gray-500' : `${folderColor.bg} ${folderColor.c}`} py-1 px-2 mx-5`}><i><FaFolder /></i> {note.folder_id ? `${folderName}` : 'No Folder'}</span>
            <i className={`${optionsChange ? 'hidden' : 'block'} cursor-pointer text-orange-500`} onClick={handleShowOptions}><FaPencilAlt /></i>
            <i className={optionsChange ? 'block' : 'hidden'}><FaArrowRight /></i>
            <div className={`${optionsChange ? 'flex' : 'hidden'} justify-evenly items-center`}>
                <span className='flex justify-evenly items-center gap-2 rounded-md bg-gray-500 py-1 px-2 mx-5'><i><FaFolder /></i>
                    <select className="bg-transparent flex items-center" onChange={handleChange}>
                        <option value="">No Folder</option>
                        {folders.length > 0 &&
                            folders.map(folder => <option key={folder._id} value={folder._id}>{folder.name}</option>)
                        }
                    </select>
                </span>
                <i className="text-green-500 cursor-pointer" onClick={handleClickChange}><FaCheck /></i>
                <i className="text-red-500 cursor-pointer ml-5" onClick={handleShowOptions}><FaTimes /></i>
            </div>
        </div>
    ) : (
        <div></div>
    )
}
