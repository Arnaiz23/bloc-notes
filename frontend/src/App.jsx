import {Router} from "wouter"

import Header from "./components/Header.jsx"

function App() {

  return (
    <div className="bg-orange-50 dark:bg-zinc-900 text-black dark:text-white flex flex-row w-full min-h-screen overflow-hidden">
      <Header />
    </div>
  )
}

export default App
