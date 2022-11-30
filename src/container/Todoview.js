import React, { useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { addTodo ,removeTodo} from "../redux/slicefile/TodoSlice";
function Todoview() {
  const [textData, setTextData] = useState("");
  const dispatch = useDispatch();
  const textHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(textData));
    setTextData("");

  };
  const todos = useSelector((state) => state.todos.todoList);

  return (
    <div style={{marginTop:20}}>
      <div >
        <input
         type="text" 
         value={textData}
         onChange={(e)=>setTextData(e.target.value)}
         placeholder="ENTER TODO ITEMS"
          />
         <button style={{marginLeft:5,backgroundColor:"skyblue",borderWidth:1,borderRadius:8,padding:5}}
          onClick={(event)=>{textHandler(event)}}
        >ADD TODO</button>
       
      </div>
      <div style={{ flex: 1, display: "flex" }}>
      {todos.length>0?
       <ul
          style={{
            backgroundColor: "lightgrey",
            margin: "auto",
            padding: 20,
            marginTop: 20,
          }}
          
        >
          {todos.map((todo,index) => (
            <li key={todo.id} style={{marginLeft:20}}>
              <span>{todo.text}</span>
              <button
                style={{
                  marginLeft: 5,
                  backgroundColor: "#d68787",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 5,
                  margin: 10,
                }}
                onClick={() => {
                  dispatch(removeTodo(index));
                }}
              >
                REMOVE TODO
              </button>
            </li>
          ))}
        </ul> :<h3 style={{margin:"auto",marginTop:20}}>No Todo Data....</h3>}
      
      </div>
    </div>
  );
}

export default Todoview;
