import { useState, useEffect } from "react";
import dice1 from "../assets/rolling-dice/dice-1.png";
import dice2 from "../assets/rolling-dice/dice-2.png";
import dice3 from "../assets/rolling-dice/dice-3.png";
import dice4 from "../assets/rolling-dice/dice-4.png";
import dice5 from "../assets/rolling-dice/dice-5.png";
import dice6 from "../assets/rolling-dice/dice-6.png";
const RollingDice = () => {
  const [result, setResult] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const diceImgMap = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };
  const handleDiceRoll = () => {
    setIsRolling(true);
    timer = setTimeout(() => {
      // Generate the random number
      const random = 1 + (parseInt(Math.random() * 10) % 6);
      setResult(random);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="bg-amber-200 border-4 border-amber-800 p-20 rounded-2xl">
          <h1 className="font-bold">Welcome to Roll and Dice...</h1>
        </div>
      ) : (
        <div className=" bg-amber-200 border-4 border-amber-900 rounded-2xl flex flex-col items-center p-20">
          <h1 className="font-bold text-2xl outline-amber-50">Lets Roll!</h1>
          <button
            className="bg-amber-100 mt-5 p-4 w-auto rounded-2xl hover:bg-amber-500 hover:scale-105 active:scale-95 accent-amber-300 cursor-pointer"
            onClick={handleDiceRoll}
          >
            🎲 Roll the dice: {result}
          </button>

          <img
            className={`transition-transform duration-700 mt-8 ${
              isRolling ? "animate-spin" : ""
            }`}
            src={diceImgMap[result]}
            width={100}
            alt="dice"
          />
          {result === 6 && (
            <h2 className="pt-4 text-emerald-500 font-bold">YaY you got a 6</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default RollingDice;
