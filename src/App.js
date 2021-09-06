import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Entry from './components/Entry/Entry'
import db from './firebase';
import firebase from 'firebase';
import './App.css';



function App() {
  const [entries,setEntries] = useState([]);
  const [input,setInput] = useState('');

  useEffect(() => {
    db.collection('entries').orderBy('timestamp','desc').onSnapshot(snapshot => {
         setEntries(snapshot.docs.map(doc => ({id:doc.id,entry:doc.data().entry})));
    })

  }, []);


  const addEntry = (event) => {
         event.preventDefault();
         db.collection('entries').add({
           entry: input,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
         })
         setEntries([...entries, input]);
         setInput('');
  }
  return (
    <div className="App">
      <h1 className="head-title">Meri Diary <i class="fi-rr-book"></i></h1>
      <form>
    <FormControl>
      <InputLabel className="input-label">How was your Day?</InputLabel>
    <Input className="input-text" value={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>
    <Button className="submit-btn" disabled={!input} variant="contained" color="primary" type="submit" onClick={addEntry}>
    <i class="fi-rr-add"></i>
    </Button>
    </form>
    
    <div className="entries-container">
      {entries.map(entry =>(

        <Entry entry={entry} />

      ))}
    </div>
    </div>
  );
}

export default App;
