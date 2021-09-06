import { Button, FormControl, Input, InputLabel, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import db from '../../firebase';
import ('./Entry.css');


function Entry({entry}) {
    const[open,setOpen] = useState(false);
    const[input,setInput]= useState(entry.entry);

    const updateEntry = (event)=>{
        event.preventDefault();
        db.collection('entries').doc(entry.id).set({
              entry : input
        },{merge:true})
        setOpen(false);
    }

    return (
       <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div className="update-box" >
            <h2>Edit Diary</h2>
            <form>
            <FormControl>
            <InputLabel className="input-label">Missed Something?</InputLabel>
            <Input className="update-text" value={input} onChange={event => setInput(event.target.value)}/>
            </FormControl>
            <Button type="submit" className="update-btn" onClick={updateEntry} variant="contained" color="primary"><i class="fi-rr-checkbox"></i> Save</Button>
            </form>
            </div>
        </Modal>
        
        <div className="entry">
            <div className="edit-delete">
            <Button className="edit-btn" onClick={e => setOpen(true)} variant="contained" color="primary"><i class="fi-rr-edit"></i> Edit</Button>
            <Button className="delete-btn" variant="contained" color="secondary" onClick={event => db.collection('entries').doc(entry.id).delete() }> <i class="fi-rr-trash"></i> Delete</Button>
            </div>
            <div className="entry-text">
                {entry.entry}
            </div>
            
        </div>
        </>
    )
}

export default Entry
