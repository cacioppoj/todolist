import React,{useState,useEffect} from "react"
import CheckBox from "./Checkbox.jsx"


const TaskList = (props) =>{
    const {list, setList } = props;

    const onChangeStatus = (e) =>{
        const {name,checked} = e.target;

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const onClickRemoveItem = (e) =>{
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    
    const check = list.map(item => (
    <CheckBox key ={item.id} data={item} onChange= {onChangeStatus}/>
    ))
    return (
    <div className = "task-list">
        {list.lenght ? check : "Sin Tareas"}
        {list.lenght ? (
            <p>
                <button className="button-delete" onClick = {onClickRemoveItem}>
                    Borrar Todo
                </button>
            </p>
        ) : null}
    </div>
    )
};

export default TaskList
