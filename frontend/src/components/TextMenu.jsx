import React from "react";

export default function TextMenu ({title, icon}) {
  return (
    <div className="flex items-center justify-start gap-4 p-2 cursor-pointer hover:text-orange-300">
      <i>{icon}</i>
      <h4>{title}</h4>
    </div>
  )
}
