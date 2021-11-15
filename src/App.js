import React, { useState } from 'react'
import Header from './components/Header'
import AddNote from './components/AddNote'
import Note from './components/Note'
import Footer from './components/Footer'

function App() {

    const [notes, setNotes] = useState([])

    const addNote = (note) => {
        setNotes((prevNotes) => [...prevNotes, note])
    }

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => index !== id)
        })
    }

    return (
        <div>
           <Header />
           <AddNote onAddNote={addNote} />
           {notes.map((note, index) => ( 
               <Note 
                    key={index}
                    id={index} 
                    title={note.title} 
                    content={note.content}
                    onDelete={deleteNote} />
           ))}
           <Footer /> 
        </div>
    )
}

export default App
