import axios from 'axios'

const baseUrl = "http://localhost:3000/api/v1"

const getAllTodo = (setTodo)=>{
    axios
    .get(`${baseUrl}/getAllTodo`)
    .then(({data})=>{
        console.log('data... ->',data)
        setTodo(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const addTodo = (text, setText, setTodo)=>{
    axios
    .post(`${baseUrl}/createTodo`, {text})
    .then((data)=>{
        console.log(data)
        setText("")
        getAllTodo(setTodo)
    })
}

const updateTodo = (todoId,text,setText,setTodo,setIsUpdating)=>{
    axios
    .post(`${baseUrl}/updateTodo`,{ text, _id: todoId})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err)=>{
        console.log(err);
    })
}

const deleteTodo = (_id,setTodo)=>{
    axios
    .post(`${baseUrl}/deleteTodo`, {_id})
    .then((data)=>{
        console.log(data)
        getAllTodo(setTodo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export {getAllTodo, addTodo, updateTodo, deleteTodo}