import { useState } from "react";

function SmartCalculator() {
    const [display, setDisplay] = useState("0");
    const [firstNumber, setFirstNuber] = useState(null);
    const [operator, setOperator] = useState(null);
    const [expression, setExpression] = useState("");
    const [angleMode, setAngleMode] = useState("DEG");

    const handleNumber = (number) => {
        if (display === "0") {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    };

    const handleDecimal = () => {
        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    const handleSqareRoot = () => {
        const number = Number(display);

        if (number < 0) {
            setDisplay("Error");
            return;
        }

        const result = Math.sqrt(number);
        setExpression(`√${number} =`);
        setDisplay(String(result));
    };

    const handleSquare = () => {
        const number = Number(display);
        const result = number * number;
        setExpression(`${number}² =`);
        setDisplay(String(result));
    }

    const insertPi = () => {
        setDisplay(String(Math.PI));
        setExpression("π =");
    };

    const percentage = () => {
        const number = Number(display);
        const result = number / 100;
        setExpression(`${number}% =`);
        setDisplay(String(result));
    };

    const toRadians = (degree) => {
        return degree * (Math.PI / 180);    
    };

    const sine = () => {
        const number = Number(display);

        const angle = angleMode === "DEG" ? toRadians(number) : number;

        const result = Math.sin(angle);

        setExpression(`sin(${number}${angleMode === "DEG" ? "°" : ""}) =`);
        setDisplay(String(Number(result.toFixed(10))));
    };

    const cosine = () => {
        const number = Number(display);

        const angle =
            angleMode === "DEG"
            ? toRadians(number)
            : number;

        const result = Math.cos(angle);

        setExpression(`cos(${number}${angleMode === "DEG" ? "°" : ""})`);
        setDisplay(String(Number(result.toFixed(10))));
        };

    const tangent = () => {
        const number = Number(display);

        const angle =
            angleMode === "DEG"
            ? toRadians(number)
            : number;

        const result = Math.tan(angle);

        setExpression(`tan(${number}${angleMode === "DEG" ? "°" : ""})`);
        setDisplay(String(Number(result.toFixed(10))));
        };

    const logarithm = () => {
        const number = Number(display);

        if (number <= 0) {
            setDisplay("Error");
            return;
        }

        const result = Math.log10(number);

        setExpression(`log(${number}) =`);
        setDisplay(String(Number(result.toFixed(10))));
    };

    const naturalLog = () => {
        const number = Number(display);

        if (number <= 0) {
            setDiplay("Error");
            return;
        }

        const result = Math.log(number);

        setExpression(`ln(${number}) =`);
        setDisplay(String(Number(result.toFixed(10))));
    };

    const power = () => {
        setFirstNuber(Number(display));
        setOperator("^");
        setExpression(`${display} ^`);
        setDisplay("0");
    };

    const deleteLast = () => {
        if (display.length === 1) {
            setDisplay("0");
        } else{
            setDisplay(display.slice(0, -1));
        }
    }


    const handleOperator = (op) => {
        setFirstNuber(Number(display));
        setOperator(op);
        setExpression(`${display} ${op}`);
        setDisplay("0");
    };

    const handleCalculate = () => {
        const secondNumber = Number(display);

        if (firstNumber === null && operator === null) {
            return;
    }

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber
    } else if (operator === "-") {
        result = firstNumber - secondNumber
    } else if (operator === "*") {
        result = firstNumber * secondNumber
    } else if (operator === "/") {
        if (secondNumber === 0) {
            setDisplay("Error");
            return;
        }

        result = firstNumber / secondNumber
    } else if (operator === "^") {
        result = Math.pow(firstNumber, secondNumber);
    }

    setExpression(`${firstNumber} ${operator} ${secondNumber} =`);
    setDisplay(String(result));

    setFirstNuber(null);
    setOperator(null);
};

    const clearCalculator = () => {
        setDisplay("0");
        setFirstNuber(null);
        setOperator(null);
        setExpression("");
    }; 


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-900  rounded-3xl shadow-2xl p-5">
                <h1 className="text-white text-2xl font-bold text-center mb-5">Smart Calculator</h1>

                <div className="bg-gray-950 hover:bg-gray-800 rounded-2xl p-5 mb-5 text-white min-h[110px]">
                    <div className="text-right text-gray-400 text-lg min-h-7">{expression} {display}</div>

                    <div className="text-4xl text-right font-semibold overflow-x-auto">
                        {display}
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <button onClick={() => setAngleMode(angleMode === "DEG" ? "RAD" : "DEG")} className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl h-14 font-bold">
                        {angleMode}
                    </button>

                    <button onClick={clearCalculator} className="bg-red-500 hover:bg-red-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        AC
                    </button>

                    <button onClick={deleteLast} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        DEL
                    </button>

                    <button onClick={() => handleOperator("/")} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-14 cursor-pointer">
                        ÷
                    </button>

                    <button onClick={percentage} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        %
                    </button>

                    <button onClick={sine} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        sin
                    </button>
                    <button onClick={cosine} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        cos
                    </button>
                    <button onClick={() => handleOperator("*")} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        x
                    </button>
                    <button onClick={tangent} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        tan
                    </button>

                    <button onClick={logarithm} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        log
                    </button>
                    <button onClick={naturalLog} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        ln
                    </button>
                    <button onClick={() => handleOperator("-")} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        -
                    </button>
                    <button onClick={handleSqareRoot} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        √
                    </button>

                    <button onClick={handleSquare} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        x²
                    </button>
                    <button onClick={power} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        xʸ
                    </button>

                    <button onClick={() => handleOperator("+")} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        +
                    </button>
                    <button onClick={insertPi} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        π
                    </button>

                    <button onClick={() => handleNumber("7")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        7
                    </button>
                    <button onClick={() => handleNumber("8")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        8
                    </button>
                    <button onClick={() => handleNumber("9")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        9
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 font-semibold cursor-pointer">
                        (
                    </button>
                    <button onClick={() => handleNumber("4")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        4
                    </button>
                    <button onClick={() => handleNumber("5")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        5
                    </button>
                    <button onClick={() => handleNumber("6")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        6
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        )
                    </button>
                    <button onClick={() => handleNumber("1")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        1
                    </button>
                    <button onClick={() => handleNumber("2")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        2
                    </button>
                    <button onClick={() => handleNumber("3")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        3
                    </button>
                    <button onClick={handleDecimal} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer">
                        .
                    </button>
                    <button onClick={() => handleNumber("0")} className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl h-14 cursor-pointer col-span-1">
                        0
                    </button>

                    <button onClick={handleCalculate} className="col-span-2  bg-green-500 hover:bg-green-600 text-white rounded-xl h-14 cursor-pointer font-bold">
                        =
                        </button>    
                </div>
            </div>
        </div>
    )
}

export default SmartCalculator;