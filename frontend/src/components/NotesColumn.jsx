import React from "react";

export default function NotesColumn({children, title}) {
  return (
    <div className="min-w-[200px] md:min-w-[300px] bg-orange-100 dark:bg-zinc-800 overflow-y-auto h-screen">
      <h2 className="w-full grid place-items-center p-5 text-xl font-bold h-[56px] sticky top-0 bg-orange-100 dark:bg-zinc-800 border-b border-white">{title}</h2>
      {children}
    </div>
  )
}
