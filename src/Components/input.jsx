import React from "react";

function InputItem( {handleChange, inputItems, addItems}) {
    return (
        <div className="form">
            <input name="list" 
                onChange={handleChange}  
                type="text" 
                value={inputItems}
            />
            <button 
                onClick={addItems} 
                type="submit">
                <span>Add</span>
            </button>
        </div>
    ) 
}
export default InputItem;