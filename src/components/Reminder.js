import React from 'react'
import './Reminder.css'
function Reminder() {
  return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input type='text' placeholder='Enter a reminder'/>
        <button className='add-btn'>Add Reminder</button>
      </div>
    </div>
  )
}

export default Reminder
