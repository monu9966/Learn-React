import { useState } from "react";

function Counter() {

    let [counter, setCounter] =useState(0)

    // let counter = 10; 

    const addValue = () => {
        // counter = counter + 1;
        if (counter === 20) {
            return;
        }
        // setCounter(counter + 1); 
        setCounter(prev => prev + 1);
    
    }

    const removeValue = () => {
        if (counter <= 0) {
            return;
        }
        // setCounter(counter - 1);
        setCounter(prev => prev - 1);
    }

    const resetValue = () => {
        setCounter(0);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="flex flex-col border-2 p-4 rounded-xl">
            <h1 className="text-3xl font-bold">Counter App</h1>
            
            <h2 className="mt-4 text-center">Counter value: {counter}</h2>
            <br />

            <button className="bg-blue-600 rounded-lg m-2 py-3 hover:bg-blue-500 cursor-pointer transition duration-200 ease-in-out hover:scale-105 active:scale-95" onClick={addValue}>Add value +</button>

            <button className="bg-blue-600  rounded-lg m-2 py-3 transition duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95 cursor-pointer" onClick={removeValue}>Remove value -</button>

            <button className="bg-blue-600 cursor-pointer m-2 rounded-lg hover:bg-blue-500" onClick={resetValue}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;