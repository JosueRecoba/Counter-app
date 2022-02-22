import React from "react";
import PropTypes  from "prop-types";

const CounterApp = ({value}) => {


    const handleadd = (e)=> {
        console.log(e)
    }


    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {value} </h2>

            <button onClick={ handleadd}>+1</button>

        </div>
    )
}

CounterApp.prototype = {
    value: PropTypes.number

}

export default CounterApp; 

