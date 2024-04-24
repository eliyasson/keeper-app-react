import React, {useState} from "react";
import Todo from "./Todo";
import InputItem from "./input";



function Note() {
  const [inputItems, setInputItems] = useState("");
  const [addItem, setAddItem] = useState([]);

 /*  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: ""
  }); */

    function handleChange(event) {

      setInputItems(event.target.value);

      //const {value, name} = event.target;
      //const newValue = event.target.value;
      //const inputName = event.target.name;
    
      /* setFullName(prevValue => {
        return {
            ...prevValue,
        [name]: value
        }
      })
      
 */
     
      /* setFullName(prevValue => {
        if(name === "fname") {
            return {
                ...prevValue,
                fname: value 
            }
        } else if (name === "lname") {
            return {
                ...prevValue,
                lname: value
            }
        } else if (name === "email") {
            return {
                ...prevValue,
                email: value
            }
        }
      }); */
    }
    function addItems() {
      setAddItem((prevValue) => {
        return [...prevValue, inputItems]
      })
      setInputItems("");
    }
    
    function deleteItem(id) {
      setAddItem(prevValue => prevValue.filter((item, index) => index !== id));
     
    }
   
    return (
        <div>
          <InputItem
            handleChange={handleChange}
            inputItems = {inputItems}
            addItems = {addItems}
          
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
        
        </div>
    )
}
export default Note;