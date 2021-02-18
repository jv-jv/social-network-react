import React, { useState } from "react"
const editorContext = React.createContext(null)

function EditorContextProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [attachmentSelected, setAttachmentSelected] = useState(null)

  function compactEditor() {
    setIsExpanded(false)
  }

  function expandEditor() {
    setIsExpanded(true)
  }

  return (
    <editorContext.Provider
      value={{
        isExpanded,
        compactEditor,
        expandEditor,
        attachmentSelected,
        setAttachmentSelected,
      }}
    >
      {children}
    </editorContext.Provider>
  )
}

export { EditorContextProvider, editorContext }
