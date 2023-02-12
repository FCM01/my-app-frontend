
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <Button variant="outline-danger"  onClick={() => onDelete(task.id)}>Delete</Button>
       
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task