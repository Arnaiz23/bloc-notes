import {Route} from "wouter"

import Header from "./components/Header.jsx"
import AllNotesPage from "./pages/AllNotes.jsx"

function App() {

  return (
    <div className="bg-orange-50 dark:bg-zinc-900 text-black dark:text-white flex flex-row w-full min-h-screen overflow-hidden">
      <Header />
      <Route path="/" component={DefaultPage} />
      <Route path="/all" component={AllNotesPage} />
    </div>
  )
}

const DefaultPage = () => {
  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-5xl">Default page</h1>
    </div>

  )
}

export default App
