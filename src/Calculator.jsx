import { useState } from "react";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(null);
    const [calculated, setCalculated] = useState(false);

    const handleCalculate = () => {

        if (calculated) {
            alert("You have already calculated. Please clear the calculator to perform a new calculation.");
            return;
        }

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operation) {
                case "+":
                    setResult(num1 + num2);
                    break;
                case "-":
                    setResult(num1 - num2);
                    break;
                case "x":
                    setResult(num1 * num2);
                    break;
                case "/":
                    if (num2 !== 0) {
                        setResult(num1 / num2);
                    } else {
                        setResult("Error: Division by zero");
                    }
                    break;
                case "%":
                    setResult(num1 % num2);
                    break;
                default:
                    setResult("Invalid operation");
                }
        }

        setCalculated(true);
    };

    const clearCalculator = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("+");
        setResult(null);
        setCalculated(false);
    };




    
    return (
        <div className=' min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>

            <div className='w-full max-w-md flex flex-col items-center justify-center py-8 bg-gray-900 rounded-2xl shadow-lg'>

            <h1 className=" text-3xl font-bold text-white text-center mb-8 bg-blue-700 p-2 rounded-xl">Noob Calculator</h1>

            <div className=" w-full flex flex-row items-center justify-center gap-4 mb-4">

                <input type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} className="m-2 w-full  px-4 py-3 bg-gray-800 text-white border border-gray700 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" />

                <input type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} className="m-2 w-full px-4 py-3 bg-gray-800 text-white border border-gray700 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" />

            </div>

            <div className="w-full flex flex-row items-center justify-center bg-gray-800 text-white py-3 mb-4 rounded-lg font-bold gap-2">

                <button onClick={() => setOperation("+")} className={`px-4 py-2 rounded-lg font-bold ${
                operation === "+"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray" } `}>+</button>

                <button onClick={() => setOperation("-")} className={`px-4 py-2 rounded-lg font-bold ${
                operation === "-"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray" } `}>-</button>

                <button onClick={() => setOperation("x")} className={`px-4 py-2 rounded-lg font-bold ${
                operation === "x"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray" } `}>x</button>

                <button onClick={() => setOperation("/")} className={`px-4 py-2 rounded-lg font-bold ${
                operation === "/"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray" } `}>/</button>

                <button onClick={() => setOperation("%")} className={`px-4 py-2 rounded-lg font-bold ${
                operation === "%"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray" } `}>%</button>

            </div>

            <button onClick={handleCalculate} className="flex items-center justify-center w-full mt-6 py-3  bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 active:scale-95 cursor-pointer">Calculate</button>

            <div className="w-full mt-6 p-4 bg-gray-800 text-white rounded-lg text-center">
                <p className="text-gray-400 text-sm font-semibold">Result: </p>
                <p className="text-3xl font-bold text-green-400 mt-1">{result ?? "--"}</p>
            </div>

            <button onClick={clearCalculator} className=" w-full mt-6 py-3  bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-200 active:scale-95">Clear</button>
            </div>
        </div>
    );
}

export default Calculator;