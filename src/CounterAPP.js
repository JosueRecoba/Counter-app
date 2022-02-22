import React, {useState} from "react";
import PropTypes  from "prop-types";

const CounterApp = ({value}) => {


    const [ counter, setCaunter] = useState(o);
    
    

    const handleadd = ()=> {
       setCaunter (counter + 1);
    }


    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={ handleadd}>+1</button>

        </div>
    )
}

CounterApp.prototype = {
    value: PropTypes.number

}

export default CounterApp; 

