import React, {createContext, useState} from "react"

export const Context = createContext()

export default function ContextProvider({children}) {
  const [folders, setFolders] = useState([])
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Context.Provider value={{folders, setFolders, showMenu, setShowMenu}}>
      {children}
    </Context.Provider>
  )
}
