// Jakub Wawak
// kubawawak@gmail.com

import { useState } from "react";

// react component to render adding note object
const AddNote = ( {handleAddNote, handleDeleteNote}) => {
    const [noteText,setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if ( characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleOnClick = (event) => {
        if ( noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (<div className='note new'>
        <textarea 
            rows = "8" 
            cols = "10" 
            placeholder = "Type to add new note..."
            value = {noteText}
            onChange={handleChange}
        ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaning</small>
                <button className='save' onClick = {handleOnClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;