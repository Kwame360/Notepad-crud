import './App.css';
import Sidebar from './sidebar';
import Main from './main';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
      const [notes, setNotes] = useState([]);



      const onAddNote = () => {
        const newNote = {
          id: uuid(),
          title: "untitled Note",
          body: "",
          lastModified: Date.now(),
        };

        setNotes ([
          newNote, ...notes
        ])
      } 

      const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
      };

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote}  />
      
      <Main/>
    </div>
  );
}

export default App;
