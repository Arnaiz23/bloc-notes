import {useContext} from "react"
import {Context} from "../context/Context"

export default function useShowMenu() {
  const {showMenu, setShowMenu} = useContext(Context)

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }

  return {showMenu, toggleMenu}
}
