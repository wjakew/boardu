// Jakub Wawak
// kubawawak@gmail.com
import NotestList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

// main application function
const App = () =>{
  const [notes,setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

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

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return <div className = "container">
    <Header/>
    <Search handleSearchNote={setSearchText}/>
    <NotestList notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
  </div>;
};

export default App;