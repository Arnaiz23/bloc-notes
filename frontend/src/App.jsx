import {Route, Switch} from "wouter"

import Header from "./components/Header.jsx"
import AllNotesPage from "./pages/AllNotes.jsx"

function App() {

  return (
    <div className="bg-orange-50 dark:bg-zinc-900 text-black dark:text-white flex flex-row w-full min-h-screen overflow-hidden transition-colors duration-500">
      <Header />
      <Switch>
        <Route path="/" component={DefaultPage} />
        <Route path="/all" component={AllNotesPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

const DefaultPage = () => {
  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-5xl">Bloc Notes</h1>
    </div>

  )
}

const Page404 = () => {
  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-5xl">Ups... This page doesn&apos;t exists</h1>
    </div>

  )
}

export default App
