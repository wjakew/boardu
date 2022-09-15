// Jakub Wawak
// kubawawak@gmail.com
import Note from './Note';
import AddNote from './AddNote';

// react component for storing list of notes
const NotestList = ({notes,handleAddNote,handleDeleteNote}) => {
    return (
        <div className = "notes-list"> 
            {notes.map((note) => (
                <Note id={note.id} text = {note.text} date = {note.date}/>
            ))}     
            <AddNote handleAddNote = {handleAddNote} handleDeleteNote = {handleDeleteNote}/>
            
        </div>
    )
}

export default NotestList;