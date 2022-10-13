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
    ));
        console.log(list);
    return (
    <div className = "task-list">
        {list.length  ? check : "Sin Tareas"}

        {list.length ? (
            <p>
                <button className="button blue" onClick = {onClickRemoveItem}>
                    Borrar Todo
                </button>
            </p>
        ) : null}
        
    </div>
    );
};

export default TaskList
