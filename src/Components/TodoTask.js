import React, { useState } from "react";
import Todo from "./Todo";

const TodoTask = () => {
    const [task,setTask]=useState('')
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const [todoTab,setTodoTab]=useState([])
    const addTask=()=>{
        setTodoTab([...todoTab,{id:Date.now(),task:task,isDone:false}]);
        setTask('')
    }

    const taskDone=(id)=>{
        setTodoTab(todoTab.map(item=>item.id===id?{...item,isDone:!item.isDone}:item))
    }
    const deleteTask=(id)=>{
        setTodoTab(todoTab.filter(item=>item.id!==id))
    }
  return <div>
      <div className="todo_list">
          <h1>List of what we should do this week</h1>
          <input
            type="text"
            placeholder="enter a new task"
            onChange={handleChange}
            value={task}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="list">
          {todoTab.map((item) => (
            <Todo taskDone={taskDone} deleteTask={deleteTask} item={item} key={item.id} />
          ))}
        </div>
  </div>;
};

export default TodoTask;
