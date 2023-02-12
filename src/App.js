import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./App.css";
import Navbar from "./components/NavbarMain";
import Login from "./components/Login";
import Signup from './components/SignUp'

import Tasks from './components/Tasks';
import Addtask from './components/Addtask';

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    [{
             id : 1,
             text:'Doctors appointment',
             day :"Fed 5th at 2:30pm",
             reminder: true 
         },
         {
             id : 2,
             text:'Meeting at school',
             day :"Fed 6th at 8:30pm",
             reminder: false 
         }] 
     )
   
     //Delete Task 
     const deleteTask =(id)=>{
      setTasks(tasks.filter((task) =>task.id !== id ))
      
     }
     //Toggle reminder 
     const toggleReminder=(id)=>{
      // console.log (tasks.id[id])
      setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task))
     } 
     //adding task 
     const newTask= (task)=>{
      const id  = Math.floor(Math.random() *10000)+ 1
      const NewTask  ={id,...task}
      setTasks([...tasks,NewTask])
     }




  const [showButton, setButton] = useState(true);
  const [logedIn,setState] = useState(false)
  const [user, setUser] = useState({
    name: "",
    email: "",
    user_id: "",
  });
  const newUser = (user_data) => {
    console.log(user_data);
    setUser(user_data);



    setState((current) => !current)

  };
  const newUser2 = (user_data) => {
    console.log(user_data);
    setUser(user_data);


    setState((current) => !current)
  };
  const showLogin = () => {
    console.log("hello");
    setButton((current) => !current);
  };

  return (
    <div className="App">
      
     
     


    {logedIn?

    <div>
    <Navbar></Navbar>
    <Addtask addTask={newTask}/>
      { tasks.length > 0 ?<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "You have no tasks "}
    </div>
    :
    <div>
    {showButton?( <Login addUser={newUser}></Login>):null}
    {showButton ? (
   
    <ButtonGroup size="lg" className="mb-2">
    <Button onClick={showLogin}>Signup</Button>
  </ButtonGroup>
    ) : (
      <Signup addUser2={newUser2}></Signup>
    )}

    </div>
    }
    
    </div>
  );
}

export default App;
