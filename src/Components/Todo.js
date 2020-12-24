import React from 'react'

const Todo = ({item,taskDone,deleteTask}) => {
    return (
        <div className='element'>
            <button className='btn-done' onClick={()=>taskDone(item.id)} >{item.isDone?'Undo':'Done'}</button>
            <button className='btn-delete' onClick={()=>deleteTask(item.id)}>Delete</button>
            <span className={item.isDone?'lineTh':'text'}>{item.task}</span>
        </div>
    )
}

export default Todo
