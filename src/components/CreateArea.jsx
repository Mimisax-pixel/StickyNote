import React, { useState, useEffect } from "react";
import UpdateIcon from '@mui/icons-material/Update';

function CreateArea({ onAdd, isEditing, currentNote }) {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (isEditing) {
      setNote({ title: currentNote.title, content: currentNote.content });
    }
  }, [isEditing, currentNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <form>
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={note.content}
        onChange={handleChange}
      />
      <button onClick={submitNote}>{isEditing ? <UpdateIcon /> : "Add"}</button>
    </form>
  );
}

export default CreateArea;
