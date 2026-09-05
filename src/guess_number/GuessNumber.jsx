import { useState } from "react";
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

function GuessNumber() {
  const [targetNumber, setTargetNumber] = useState(randomNumber);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuessNumber = () => {
    const guess = Number(userGuess);

    if (guess === targetNumber) {
      setMessage("Correct!");
    } else if (guess > targetNumber) {
      setMessage("Too high!");
    } else if (guess < targetNumber) {
      setMessage("Too low!");
    } else {
      setMessage("Invalid Number!");
    }
  };

  const newTarget = () => {
    setTargetNumber(randomNumber());
    setUserGuess("");
    setMessage("");
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center  justify-center">
      <div className="bg-slate-900 flex flex-col p-8 rounded-2xl shadow-2xl border-3  border-cyan-500 w-96 text-center gap-4">
        <h1 className="font-bold text-2xl">Guess Number Game</h1>
        <select className="bg-slate-700 rounded-sm">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <input
          className="rounded-sm"
          type="Number"
          onChange={(e) => setUserGuess(e.target.value)}
          value={userGuess}
          placeholder="Enter Gauss Number"
        />

        <div className="flex gap-4">
          <button
            className="bg-cyan-500 cursor-pointer rounded-sm w-full"
            o ms0nClick={handleGuessNumber}
          >
            Guess
          </button>
          <button
            className="bg-cyan-500 cursor-pointer rounded-sm w-full"
            onClick={newTarget}
          >
            New Target
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default GuessNumber;
