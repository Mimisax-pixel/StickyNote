import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [isEditing, setIsEditing] = useState(false); // Edit mode
  const [currentNote, setCurrentNote] = useState({ id: null, title: "", content: "" });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    if (isEditing) {
      // Update existing note
      setNotes(prevNotes =>
        prevNotes.map((note, index) =>
          index === currentNote.id ? { ...note, title: newNote.title, content: newNote.content } : note
        )
      );
      setIsEditing(false);
      setCurrentNote({ id: null, title: "", content: "" });
      alert("StickyNote Updated");
    } else {
      // Add new note
      setNotes(prevNotes => [...prevNotes, newNote]);
      alert("StickyNote Added");
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
    alert("StickyNote Deleted");
  }

  function editNote(id) {
    const noteToEdit = notes[id];
    setIsEditing(true);
    setCurrentNote({ id, title: noteToEdit.title, content: noteToEdit.content });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        isEditing={isEditing}
        currentNote={currentNote}
      />
      <div className="notes-container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
