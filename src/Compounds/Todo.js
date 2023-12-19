import React, { useRef, useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const taskInputRef = useRef(null);


    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInputRef.current.value.trim();
        if (taskText !== "") {
            setTasks((prevTasks) => [...prevTasks, taskText]);
            taskInputRef.current.value = "";
        }
        console.log("task is", tasks);
    };


    const toogleTask = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        });
    };

    return (
        <div className="container">
            <h1>TODO List</h1>
            <div className="input container">
                <input type="text" placeholder="enter text" className="task-input" ref={taskInputRef} />
                <button className="add-button" onClick={addTask}>add

                </button>


            </div>
            <ul className="task-list" id="tasklist">
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <input type="checkbox" className="task-checkbox" onChange={() => toogleTask(index)} />
                            <span className="task=text" >{task}</span>
                        </li>


                    ))
                }









            </ul>

        </div>

    )

}
export default Todo;