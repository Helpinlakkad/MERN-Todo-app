import React from 'react'
// import { BiEdit } from "react-icons/bi"
// import { AiFillDelete } from "react-icons/ai"

const Todo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className='todo'>
        <div className="text">{text}</div>
        <div className="icons">
            {/* <BiEdit className='icon' onclick={updateMode} />
            <AiFillDelete className='icon' onclick={deleteTodo} /> */}
            <button id="btn1" onClick={updateMode}>Update</button>
            <button id="btn2" onClick={deleteTodo}>Delete</button>
            {/* <div className="icon" onClick={updateMode}>Update</div>
            <div className="icon" onClick={deleteTodo}>Delete</div> */}
        </div>
    </div>
  )
}

export default Todo
