import React,{useState} from "react";

const TodoList = (props)=>{
    const { handleAddItem } = props;

    const [description,setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (Math.random()*10),
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
                        className ="button pink"
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