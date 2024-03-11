import React from "react";
import Child from "./Child";

class Parent extends React.Component{

   // Mounting Phase
   constructor(){
    super();
    this.state = {
        name : "Joe",
        address : "Banglore, Karnataka",
        course : "React",
        age : 30
    }
   }

   //Updating Phase
   render(){
    const { name, course, age} = this.state;
      
    return (
        <div>
            <h3>{name}</h3>
            Welcome to {name}
            <Child details = {name}/>
        </div>
    )

    }
   

}

// Unmounting Phase
export default Parent;