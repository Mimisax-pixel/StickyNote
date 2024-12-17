import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note({ id, title, content, backgroundColor, onDelete, onEdit }) {
  return (
    <div className="note" style={{ backgroundColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="note-buttons">
        <button onClick={() => onEdit(id)} className="edit-button">
          <EditIcon /> 
        </button>
        <button onClick={() => onDelete(id)} className="delete-button">
           <DeleteIcon /> 
        </button>
      </div>
    </div>
  );
}

export default Note;





