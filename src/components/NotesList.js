import Note from './Note';
import AddNote from './AddNote';
const NotestList = ({notes,handleAddNote,handleDeleteNote}) => {
    return (
        <div className = "notes-list"> 
            {notes.map((note) => (
                <Note id={note.id} text = {note.text} date = {note.date}/>
            ))}     
            <AddNote handleAddNote = {handleAddNote} handledeleteNote = {handleDeleteNote}/>
            
        </div>
    )
}

export default NotestList;