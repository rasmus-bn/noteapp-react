import React from "react";

export default function CreateNote(props){
    
    const [noteData, setNoteData] = React.useState({
        notetitle: "",
        notetext: ""
    })

    function handelCreateNote(e){
        e.preventDefault()//prevents reload of app
        localStorage.setItem(noteData, JSON.stringify(noteData))
    }

    const storedData = localStorage.getItem('noteData')

    console.log('stored data: ', storedData)

    function handleChange(e){
        setNoteData(prevNoteData =>{
            return{
                ...prevNoteData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return(
        <div className="createnote">

            <button name="" key="Home" className='backbtn' onClick={props.handleClick}>←</button>

            <h1>Create a note</h1>

            <form className="form">
                <input 
                    type="text"
                    placeholder="Title on note"
                    name="notetitle"
                    value={noteData.notetitle}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    placeholder="Write your note here..."
                    name="notetext"
                    value={noteData.notetext}
                    onChange={handleChange}
                />
                <button name="submitNote" className="submitNote" onClick={handelCreateNote}>Create Note</button>
            </form>

        </div>
    )
}