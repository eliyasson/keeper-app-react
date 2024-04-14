import React, {useState} from "react";
import Todo from "./Todo";


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
 
    return (
        <div>
         
          <div className="form">
            <input name="list" 
              onChange={handleChange}  type="text" 
            value={inputItems}
            />
            <button onClick={addItems} type="submit"><span>Add</span></button>
          </div>
          <ul>
            {addItem.map(item => (
               <Todo text={item}/>
            ))}
          </ul>
        </div>
    )
}
export default Note;