import React, {useContext, useEffect, useState} from "react";

import {Context} from "../context/Context"
import {getFolders} from "../services/Folders";

export default function useFolders() {
  const {folders, setFolders} = useContext(Context)

  const [update, setUpdate] = useState(false)

  useEffect(() => {
    getFolders().then(({data}) => setFolders(data))
  }, [update])

  const toggleUpdate = () => {
    update ? setUpdate(false) : setUpdate(true)
  }

  return {folders, toggleUpdate}
}
