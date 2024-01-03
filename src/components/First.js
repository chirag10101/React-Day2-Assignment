import React from 'react'
import { useEffect,useState } from 'react';


export default function First() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("UseEffect 1");
        document.title = "You clicked"+ count +" times";
        //Runs on every render
      },[count,setCount]);
    
      const OnClick = () => {
        setCount((count) => count + 1);
      }

    return (
        <div>
            <h3>use Effect</h3>
            <button onClick={OnClick}>Click Me !!</button>
        </div>
    )
}
