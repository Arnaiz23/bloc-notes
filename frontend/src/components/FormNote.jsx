import React from "react";

import FolderSelect from "./FolderSelect";

export default function FormNote({title, content, setVisible, handleSubmit, visible, setNote, note, folderHidden}) {
    const handleChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
        setVisible(true)
    }

    return (
        <form className="w-full flex flex-col justify-start items-start relative" onSubmit={handleSubmit}>
            <input type="text" placeholder="Note Name" onChange={handleChange} name="title" value={title && title} className="w-full ml-10 md:ml-0 p-3 pl-5 focus:outline-none text-xl bg-transparent placeholder-slate-500 dark:placeholder-gray-500" />
            <FolderSelect note={note} setNote={setNote} folderHidden={folderHidden} />
            <textarea placeholder="Write the content of the note" spellCheck="false" onChange={handleChange} name="content" value={content && content}  className="w-full h-full resize-none p-3 pl-5 text-lg bg-transparent focus:outline-none placeholder-slate-500 dark:placeholder-gray-500 pb-20 md:pb-5"></textarea>
            <button className={`p-2 rounded-md bg-green-500 dark:bg-green-600 absolute bottom-20 sm:bottom-3 right-3 ${visible ? 'opacity' : 'opacity-70 cursor-not-allowed'}`}>Save</button>
        </form>
    )
}
