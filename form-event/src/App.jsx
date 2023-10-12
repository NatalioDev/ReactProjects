import { useState } from "react"
import Note from "./components/Note"

export default function App(props) {
const [notes, setNotes] = useState(props.notes)
const [newNote, setNewNote] = useState('')
const [showAll, setSowAll] = useState(false)

const addNote = (event) => {
  event.preventDefault()
  const noteObject ={
    content: newNote,
    important: Math.random() > 0.5,
    id: notes.length + 1,
  }

  console.log(noteObject)
  setNotes(notes.concat(noteObject))
  setNewNote('')
}

const notesToShow = showAll ? notes  : notes.filter(note => note.important === true)
console.log('array',notesToShow);

const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}
  return (
    <>
      Hello World
      <div>
        <h1>Notes</h1>
        <ul>
            {notes.map(note =>
            <Note key={note.id} note={note}/>
            )}
          </ul>
          <h1>Notes Important</h1>
          <ul>
            {notesToShow.map(note=>
              <Note key={note.id} note={note}/>
              )}
          </ul>
          <div>
            <button onClick={() => setSowAll(!showAll)}>
              Show {showAll ? 'important' : 'all'}
            </button>
          </div>
          <form onSubmit={addNote}>
            <input type="text" value={newNote} onChange={handleNoteChange} />
            <button type="submit">Save</button>
          </form>
      </div>
    </>
  )
}
