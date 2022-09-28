import React,{useState} from "react";

const TodoList = (props)=>{
    const { handleAddItem } = props;
    const [description,setDescription] = useState("");
    const handleSubmit = e => {
        e.prventDefault();
        handleAddItem({
            done: false,
            id: (+new Date().toString()),
            description
        });
        setDescription("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-List">
                <div className ="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange ={e => setDescription(e.target.value)}
                    />
                    <button
                        className ="button-Add"
                        disable ={description ? "" : "disabled"}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TodoList