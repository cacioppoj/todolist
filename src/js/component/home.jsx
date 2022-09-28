import React,{useState,useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TaskList from "./Tasklist.jsx";
import TodoList from "./TodoList.jsx";

//create your first component

const Home = () => {
	const [list,setList] = useState([]);

	const handleAddItem = addItem =>{
		setList([...list,addItem]);
	};
	return (
		<>
			<div className="container">
				<TodoList handleAddItem = {handleAddItem}/>
				<TaskList list={list} setList= {setList}/>
			</div>		
		</>

	);
};

export default Home;
