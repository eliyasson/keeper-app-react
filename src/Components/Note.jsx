import React, {useState} from "react";


function Note(props) {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: ""
  });

    function handleChange(event) {
        const {value, name} = event.target;

      //const newValue = event.target.value;
      //const inputName = event.target.name;
      
      setFullName(prevValue => {
        return {
            ...prevValue,
        [name]: value
        }
      })

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
    return (
        <div className="container">
            <h1>Todo List</h1>
            
            <form  className="form">
                <input 
                    name="fname" 
                    onChange={handleChange}  type="text" 
                    placeholder="First Name"  
                    value={fullName.fname}
                />

                <input 
                    onChange={handleChange} 
                    name="lname" type="text" 
                    placeholder="Last Name" 
                    value={fullName.lname}
                />
                <input 
                    onChange={handleChange} 
                    name="email" type="text" 
                    placeholder="Email" 
                    value={fullName.email}
                />

                <button type="submit">Submit</button>
            </form>
            <h2>Hello, {fullName.fname} {fullName.lname}</h2>
            <h3>{fullName.email}</h3>
          
        </div>
    )
}
export default Note;