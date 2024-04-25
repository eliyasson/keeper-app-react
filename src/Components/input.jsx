import React, {useState} from "react";

function InputItem(props) {

    const [inputItems, setInputItems] = useState("");

    function handleChange(event) {
        setInputItems(event.target.value);
    }

    return (
        <div className="form">
            <input name="list" 
                onChange={handleChange}  
                type="text" 
                value={inputItems}
            />
            <button 
                onClick={()=> {
                    props.addItems(inputItems);
                     setInputItems("");
                } }
                    type="submit">
                <span>Add</span>
            </button>
        </div>
    ) 
}
export default InputItem;