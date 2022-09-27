import React from "react";

export default function NotesColumn({children}) {
  return (
    <div className="w-[300px] bg-orange-100 dark:bg-zinc-800 overflow-y-auto h-screen">
      {children}
    </div>
  )
}
