import React, { useState, useEffect } from 'react';

const App4 = () => {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const onChange = (event) => {
        setToDo(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if(toDo === "") {
            return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
        
    }
    const deleteList = (index)=> {
        let deleteToDo = [...toDos];
        
        for(let i=0; i<deleteToDo.length; i++) {
            if(i=== index)
            deleteToDo.splice(i, 1)
        }
        setToDos(deleteToDo);
    }
   
    
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} type="text" placeholder='Write your to do' />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
            {toDos.map((item, index) =>
            <li key={index}>
                <span>{item}</span> 
                <button onClick={()=>deleteList(index)}>삭제</button>
            </li>)}
            </ul>
        </div>
    );
};

export default App4;