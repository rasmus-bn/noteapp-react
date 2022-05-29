import React from 'react';
// import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import AddButton from './components/AddButton';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

function App() {
  console.log("APPUUUEH")
  const [page, setPage] = React.useState("")
  const [retrievedNotes, setRetrievedNotes] = React.useState(JSON.parse(localStorage.getItem("notes"))||[])// this needs to be a state! so app stil renders if there is no notes
  // route function for changing pages in app
  function route(e){
    setPage(e.target.name)
  }
  let bob = false;

  //updates the notes in localstorage
  React.useEffect(()=>{
    console.log('BOB', bob)
    console.log('retrivednoted har settet notes', retrievedNotes)
    localStorage.setItem('notes', JSON.stringify(retrievedNotes))
  },[retrievedNotes])

  // Deletenote function
  function deleteNote(event, noteId){
    // event.preventDefault()
    event.stopPropagation()
    setRetrievedNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }

  //update notes
  function updateNote(event, note){
    bob=true;
    event.preventDefault()
    event.stopPropagation()
    console.log("DIS IS NOTE",note)
    setRetrievedNotes((oldNotes) => {
      for(let index = 0; index < oldNotes.length; index++){
        let oldNote = oldNotes[index]
        console.log("DIS IS OLDNOTE",oldNote)
        if (oldNote.id === note.id){
          oldNotes[index] = note
        }
      }
      console.log("DIS IS OLDNOTESSSSS",oldNotes)
      return JSON.parse(JSON.stringify(oldNotes))
    })
    // setRetrievedNotes(oldNotes => oldNotes.filter(oldnote => note.id !== oldnote.id))
  }


  const displayNotes = retrievedNotes.map(note =>{
    return(
      <Note 
        key = {note.id}
        id = {note.id}
        title = {note.notetitle}
        text = {note.notetext}
        deleteNote = {deleteNote}
        updateNote = {updateNote}
      />
    )
  })

  console.log("her er noter fra local:", retrievedNotes)

  return (
    <div className="App">
      
      <Header /> 
      {page === "" && displayNotes}     
      {/* Setting up routing */}
      {page === "" && <AddButton handleClick={route} />}
      {page === "CreateNote" && <CreateNote handleClick={route} />}   

    </div>
  );
}

export default App;
