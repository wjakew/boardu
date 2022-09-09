import NotestList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';

const App = () =>{
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is my frist note',
    date: "15/04/2021"
    },

    {
      id: nanoid(),
      text: 'This is my second note',
      date: "15/04/2021"
    },

    {
      id: nanoid(),
      text: 'This is my third note',
      date: "15/04/2021"
    },

    {
      id: nanoid(),
      text: 'This is my fourth note',
      date: "15/04/2021"
    }
  
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return <div className = "container">
    <NotestList notes = {notes} handleAddNote = {addNote}/>
  </div>;
};

export default App;