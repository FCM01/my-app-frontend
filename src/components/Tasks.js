
import React, { Component }  from 'react';
import { useState } from "react"
import Task from "./Task"

const Tasks = ({tasks , onDelete,onToggle}) => {
  console.log(tasks)
  return (
    <div>
        {tasks && tasks.map( (t) =>(<Task key={t.id} task={t} onDelete={onDelete} onToggle={onToggle}/ >))}
    </div>
  )
}

export default Tasks