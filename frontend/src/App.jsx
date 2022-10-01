import {Route, Switch} from "wouter"

import Header from "./components/Header.jsx"
import AllNotesPage from "./pages/AllNotes.jsx"
import NewNotePage from "./pages/NewNote.jsx"
import OneNotePage from "./pages/OneNote.jsx"
import ContextProvider from "./context/Context.jsx"
import useShowMenu from "./hooks/useShowMenu.jsx"
import {useEffect} from "react"
import OneFolder from "./pages/OneFolder.jsx"
import CreateFolder from "./pages/CreateFolder.jsx"
import useFolders from "./hooks/useFolders.jsx"

function App() {

  return (
    <ContextProvider>
      <div className="bg-orange-50 dark:bg-zinc-900 text-black dark:text-white flex flex-row w-full min-h-screen overflow-hidden transition-colors duration-500">
        <Header />
        <Switch>
          <Route path="/" component={DefaultPage} />
          <Route path="/all" component={AllNotesPage} />
          <Route path="/all/new" component={NewNotePage} />
          <Route path="/all/:id" component={OneNotePage} />
          <Route path="/newFolder" component={CreateFolder} />
          <Route path="/:folderId" component={OneFolder} />
          <Route path="/:folderId/:id" component={OneNotePage} />
          <Route component={Page404} />
        </Switch>
      </div>
    </ContextProvider>
  )
}

const DefaultPage = () => {
  const {closeMenu} = useShowMenu()
  const {toggleUpdate} = useFolders()

  useEffect(() => {
    closeMenu()
    toggleUpdate()
  }, [])

  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-5xl text-center">Bloc Notes</h1>
    </div>

  )
}

const Page404 = () => {
  const {closeMenu} = useShowMenu()

  useEffect(() => {
    closeMenu()
  }, [])

  return (
    <div className="w-[90%] mx-auto grid place-items-center">
      <h1 className="text-4xl sm:text-5xl text-center">Ups... This page doesn&apos;t exists</h1>
    </div>

  )
}

export default App
