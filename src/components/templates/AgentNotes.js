import React from 'react';

const renderNoteCards = (notes) => {
  return notes.map(note => {
    return (
      <div key={note.name} className="card border-secondary mb-3">
        <div className="card-header">{note.name}</div>
        <div className="card-body">
          {note.body.map(text => <p key={text} className="card-text">{text}</p>)}
        </div>
      </div>
    );
  });
};

const AgentNotes = (props) => {
  return renderNoteCards(props.data);
};

export default AgentNotes;