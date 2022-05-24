import React from 'react';
// import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import CreateNote from './components/CreateNote';

function App() {
  const [page, setPage] = React.useState("")
  //const [notes, setNotes] = React.useState([])

  // route function for changing pages in app
  function route(e){
    setPage(e.target.name)
  }

  return (
    <div className="App">
      
      <Header />
      

      
      
      {/* Setting up routing */}
      {page == "CreateNote" && <CreateNote handleClick={route} />}
      {page == "" && <Home handleClick={route} />}

    </div>
  );
}

export default App;
