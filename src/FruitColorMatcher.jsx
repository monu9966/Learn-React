import { useState } from "react";
function FruitColor() {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["Red", "Yellow", "Green"];
  const colorFruitsMap = {
    red: ["Apple", "Strawberry", "Cherry"],
    yellow: ["Banana", "Lemon", "Pineapple"],
    green: ["Kiwi", "Green Apple", "Grapes"],
  };

  const handleColorPick = (color) => {
    setSelectedColor(color.toLowerCase());
    const fruits = colorFruitsMap[color.toLowerCase()];
    setSelectedFruits(fruits);
  };

  return (
    <div className=" min-h-screen bg-green-100 flex flex-col items-center justify-start p-8 gap-4">
      <h1 className="text-3xl font-bold mb-4 text-green-500">
        Fruit Color Matcher
      </h1>

      <span className="text-lg font-medium bg-amber-600 p-4 rounded-2xl text-amber-950">
        Pick a color
      </span>

      <div>
        {colors.map((color, index) => (
          <button
            key={index}
            className="bg-black text-white px-4 py-2 rounded-lg m-2 hover:bg-red-600 w-32 shadow-md border-4"
            onClick={() => handleColorPick(color)}
          >
            {color}
          </button>
        ))}
      </div>

      {selectedFruits.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="text-lg font-bold flex justify-center mb-2 text-amber-300">
            Your magic fruits are
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedFruits.map((fruit, index) => (
              <span
                key={index}
                className={`flex justify-center bg-${selectedColor}-500 text-black p-4 rounded-lg w-32 shadow-md border-4 `}
              >
                {fruit}
              </span>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FruitColor;
