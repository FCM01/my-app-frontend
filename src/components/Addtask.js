import React, { Component }  from 'react';
import { useState } from "react"

const Addtask = ({addTask}) => {
    const [text,setText] = useState("")
    const [day,setDay] =useState("")
    const [reminder,setReminder]= useState(false)
    const Submit= (e)=>{
        e.preventDefault()

        if(!text){
            alert("Please provide a task")
            return
        }

        addTask({text,day,reminder})

        setText("")
        setDay("")
        setReminder(false)

    }
  return (
    <div>
        <form className="add-form" onSubmit={Submit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>

            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input type="text"  placeholder="Day and Time" value={day} onChange={(e)=>setDay(e.target.value)}/>

            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>

            </div>
            <input className="btn btn-block" type="submit" value="Save Task"/>



        </form>
    </div>
  )
}

export default Addtask