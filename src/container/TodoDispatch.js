import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slicefile/TodoSlice";
function TodoDispatch() {
  const [textData, setTextData] = useState("");
  const dispatch = useDispatch();
  const textHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(textData));
    setTextData("");
  };

  return (
    <div style={{marginTop:20}}>
      <div >
        <input
         type="text" 
         value={textData}
         onChange={(e)=>setTextData(e.target.value)} />
         <button style={{marginLeft:5,backgroundColor:"skyblue",borderWidth:1,borderRadius:8,padding:5}}
          onClick={(event)=>{textHandler(event)}}
        >ADD TODO</button>
       
      </div>
    </div>
  );
}

export default TodoDispatch;
