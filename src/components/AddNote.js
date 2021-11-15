import React, { useState } from 'react'
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"
import AddIcon from '@material-ui/icons/Add'

const AddNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isInputFocused, setIsInputFocused] = useState(false)

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

    const zoomInForm = () => {
        setIsInputFocused(true)
    }

    const zoomOutForm = () => {
        setIsInputFocused(false)
    }

    return (
        <div>
            <form className="create-note">
                {isInputFocused && (
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={note.title} 
                        onChange={updateNote} />
                )}
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={isInputFocused ? "3" : "1"} 
                    value={note.content} 
                    onChange={updateNote}
                    onFocus={zoomInForm} />
                <Zoom in={isInputFocused}>
                    <Fab type="button" onClick={() => {
                        props.onAddNote(note)
                        clearFields()
                        zoomOutForm()
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default AddNote
