import React, { useState } from 'react'
import './Reminder.css'
function Reminder() {
  const[reminder,setReminder]=useState([]);
  const[newReminder,setNewReminder]=useState("");

    const handleInputChange =(event)=>{
      setNewReminder(event.target.value)

    }
    const handleAddReminder = () => {
      if (newReminder.trim()) {
        setReminder(prevReminder => [...prevReminder, newReminder]);// Instead of using the spread operator (...) to update the state,should use the functional update form of setReminder when working with arrays
        setNewReminder("")
      }
    };
    const handleDeleteReminder = (index) => {
      setReminder(prevReminder => prevReminder.filter((item, itemIndex) => itemIndex !== index));
    };
    
    

  return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input type='text'
        value={newReminder}
         placeholder='Enter a reminder'
        onChange={handleInputChange}/>
        <button className='add-btn' onClick={handleAddReminder}>Add Reminder</button>
      </div>
      {
        reminder.length> 0 ? (
        <ul className='reminder-list'>
      {
        reminder.map((reminder,index)=>(
        <li key={index}>
          {reminder}
          <button className='delete-button' onClick={()=>handleDeleteReminder(index)}>Delete</button>
        </li>
        ))//'reminder' in paranthesis is a variable
      }
      </ul>):
      <p>No reminders found</p>
      }
      
    </div>
  )
}

export default Reminder
