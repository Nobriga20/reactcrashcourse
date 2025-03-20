import React, {useState} from 'react'

function counter() {
    
    const[counter, setCounter] = useState (0)
    function incrementCounter(){
        setCounter (counter + 1)
    }
    }

    function decrementCounter() {
        setCounter (counter - 1)
    }
    
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {0}
            <button onClick={incrementCounter}>+</button>
        </div>
    )
} 
export default counter