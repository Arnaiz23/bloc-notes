import React, {useState} from "react";
import {useLocation} from "wouter";

import {createNote} from "../services/Notes";

export default function FormNote() {
    const [newNote, setNewNote] = useState({
        "title": "",
        "content": ""
    })
    const setLocation = useLocation()[1]

    const handleChange = (e) => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newNote.title.length <= 0) {
            return alert("The title cannot be empty")
        }

        if (newNote.content.length <= 0) {
            return alert("The content cannot be empty")
        }
        const newNoteCreated = await createNote(newNote)
        alert("Note created successfully")
        setLocation(`/all/${newNoteCreated.data._id}`)
    }

    return (
        <form className="w-full flex flex-col justify-start items-start relative" onSubmit={handleSubmit}>
            <input type="text" placeholder="Note Name" onChange={handleChange} name="title" className="w-full p-3 pl-5 focus:outline-none text-xl bg-transparent placeholder-slate-500 dark:placeholder-gray-500" />
            {/* Here maybe I delete the line and add the folder or anything */}
            <div className="border-b border-gray-400 my-1 w-[90%] mx-auto"></div>
            <textarea placeholder="Write the content of the note" onChange={handleChange} name="content" className="w-full h-full resize-none p-3 pl-5 text-lg bg-transparent focus:outline-none placeholder-slate-500 dark:placeholder-gray-500"></textarea>
            <button className="p-2 rounded-md bg-green-500 dark:bg-green-600 absolute bottom-3 right-3">Save</button>
        </form>
    )
}
