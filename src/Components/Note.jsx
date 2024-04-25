import React, {useState} from "react";
import Todo from "./Todo";
import InputItem from "./input";


function Note() {

  const [addItem, setAddItem] = useState([]);


    function addItems(inputItems) {
      setAddItem((prevValue) => {
        return [...prevValue, inputItems]
      })
      
    }
    
    function deleteItem(id) {
      setAddItem(prevValue => prevValue.filter((item, index) => index !== id));
     
    }
   
    return (
        <div>
          <InputItem 
            
           addItems={addItems}
          />
          <ul>
            {addItem.map((item, index) => (
              <Todo 
                key={index} 
                id={index} 
                text={item}
                onChecked={deleteItem}
              />
            ))}
          </ul>
          <div className="todo-item">
            <span
                className="todo-text"
      
            >
                
            </span>
           
        </div>
        </div>
    )
}
export default Note;