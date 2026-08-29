import { useEffect, useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [calculated, setCalculated] = useState(false);
  const [loading, setLoading] = useState(true);

  const binaryOperation = ["+", "-", "x", "/", "%"];

  const unaryOperation = ["sin", "cos", "tan"];

  const operations = [...binaryOperation, ...unaryOperation];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleCalculate = () => {
    if (calculated) {
      alert(
        "You have already calculated. Please clear the calculator to perform a new calculation.",
      );
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

    if (!isNaN(num1)) {
      switch (operation) {
        case "sin":
          setResult(Math.sin);
          break;
        case "cos":
          setResult(Math.cos);
          break;
        case "tan":
            setResult(Math.tan);
      }
    }

    setCalculated(true);
  };

  const clearCalculator = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
    setCalculated(false);
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {loading ? (
        <div className=" flex items-center justify-center bg-gray-800 text-white rounded-xl w-100 h-50 font-bold border-4 border-green-600">
          <h1>Welcome to your Calculator.</h1>
        </div>
      ) : (
        <div className="w-full max-w-md flex flex-col items-center justify-center py-8 bg-gray-900 rounded-2xl shadow-lg border-4 border-green-600">
          <h1 className=" text-3xl font-bold text-white text-center mb-8 bg-blue-700 p-2 rounded-xl border-2 border-white-500">
            Noob Calculator
          </h1>

          <div className=" w-full flex flex-row items-center justify-center gap-4 mb-4">
            <input
              type="number"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              placeholder="first number"
              className="m-2 w-full  px-4 py-3 bg-gray-800 text-white border border-gray700 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              type="number"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              placeholder="second number"
              className="m-2 w-full px-4 py-3 bg-gray-800 text-white border border-gray700 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />

            <div className="flex gap-4 py-1 mx-2 w-full bg-gray-800 text-white rounded-lg text-center items-center border-1 ">
              <p className="text-gray-400 text-sm font-semibold p-2">
                Result:{" "}
              </p>
              <p className="text-3xl font-bold text-green-400 ">
                {result ?? "--"}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-center bg-gray-800 text-white py-3 mb-4 rounded-lg font-bold gap-2">
            {operations.map((op) => (
              <button
                key={op}
                onClick={() => setOperation(op)}
                className={`px-4 py-2 rounded-lg font-bold cursor-pointer ${operation === op ? "bg-sky-600 text-white hover:bg-sky-400" : "bg-gray-700 text-gray hover:bg-gray-500"} `}
              >
                {op}
              </button>
            ))}
          </div>

          <div className="flex gap-2 p-2  w-full">
            <button
              onClick={handleCalculate}
              className="w-full  py-3  bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200 active:scale-95 cursor-pointer"
            >
              Calculate
            </button>

            <button
              onClick={clearCalculator}
              className="w-full py-3  bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-200 active:scale-95 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
