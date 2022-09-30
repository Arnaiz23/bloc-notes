import React, {createContext, useState} from "react"

export const Context = createContext()

export default function ContextProvider({children}) {
  const [folders, setFolders] = useState([])

  return (
    <Context.Provider value={{folders, setFolders}}>
      {children}
    </Context.Provider>
  )
}
