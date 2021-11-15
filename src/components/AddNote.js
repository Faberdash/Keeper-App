import React, { useState } from 'react'

const AddNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const updateNote = (e) => {
        const {name, value} = e.target

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const clearFields = () => setNote({
        title: "",
        content: ""
    })

    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Title" value={note.title} onChange={updateNote} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={updateNote} />
                <button type="button" onClick={() => {
                     props.onAddNote(note)
                     clearFields()
                }}>Add</button>
            </form>
        </div>
    )
}

export default AddNote
