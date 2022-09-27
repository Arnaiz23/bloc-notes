import React from "react";
import { Link } from "wouter";

export default function TextMenu ({title, icon, link}) {
  return (
    <Link href={link}>
      <a className="flex items-center justify-start gap-4 p-2 cursor-pointer hover:text-orange-300">
        <i>{icon}</i>
        <h4>{title}</h4>
      </a>
    </Link>
  )
}
