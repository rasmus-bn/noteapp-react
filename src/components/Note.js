import React from "react";

export default function Note(props){
    const [editedNote, setEditedNote] = React.useState({
        id: props.id,    
        notetitle: props.title,
        notetext: props.text
    })
    
    function handleChange(e){
        //sets the state of newnote
        setEditedNote(prevNoteData =>{
            return{
                ...prevNoteData,
                [e.target.name]: e.target.value
            }
        })
    }

    return(
        <div id={props.id} className="note">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button className="note-btn" name="EditNote" key="EditNote">Edit note</button>
            <button className="note-btn" onClick={(event) => props.deleteNote(event, props.id)}>Delete note</button>
            
            <div className="editnote">
                <form>
                <h4>Edit note</h4>
                <input 
                    type="text"
                    placeholder="Title on note"
                    name="notetitle"
                    value={editedNote.notetitle}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    placeholder="Write your note here..."
                    name="notetext"
                    value={editedNote.notetext}
                    onChange={handleChange}
                />
                <button name="submitNote" className="submitNote" onClick={(event) => props.updateNote(event, editedNote)}>Update Note</button>
                </form>
            </div>
        </div>
    )
}