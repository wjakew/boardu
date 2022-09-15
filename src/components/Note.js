// Jakub Wawak
// kubawawak@gmail.com
import { MdDeleteForever } from 'react-icons/md';

//react component for rendering note objects
const Note = ({id,text,date,handleDeleteNote}) => {
    return(

        <div className="note">
            <span> {text}</span>
            <div className = "note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick = {()=> handleDeleteNote(id)} className = 'delete-icon' size='1.3em' />
            </div>
        </div>

    )
}
export default Note;