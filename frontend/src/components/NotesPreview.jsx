import React from "react";
import {Link} from "wouter"

export default function NotesPreview({note, active, url}) {
  return (
    <Link href={`/${url}/${note._id}`}>
      <div className={`w-full ${active ? 'bg-orange-100 dark:bg-zinc-600' : 'bg-orange-200 dark:bg-zinc-700'} flex flex-col items-start justify-evenly gap-1 p-2 border-b border-white cursor-pointer`}>
        <h3 className="text-lg">{note.title}</h3>
        <time className="text-orange-500 dark:text-orange-300 text-sm">{new Date(String(note.updatedAt)).toLocaleString()}</time>
        <p className="text-slate-400 w-full overflow-hidden whitespace-nowrap text-ellipsis">{note.content}</p>
      </div>
    </Link>
  )
}
