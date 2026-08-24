import { useState } from "react";

const fruits = [
  { id: 1, name: "Apple", color: "Red", emoji: "🍎" },
  { id: 2, name: "Strawberry", color: "Red", emoji: "🍓" },
  { id: 3, name: "Cherry", color: "Red", emoji: "🍒" },

  { id: 4, name: "Banana", color: "Yellow", emoji: "🍌" },
  { id: 5, name: "Lemon", color: "Yellow", emoji: "🍋" },
    { id: 6, name: "Papaya", color: "Orange", emoji: "🍑"},
  
  { id: 7, name: "Pear", color: "Green", emoji: "🍐" },
  { id: 8, name: "Watermelon", color: "Green", emoji: "🍉" },
  { id: 9, name: "Kiwi", color: "Green", emoji: "🥝" },
  
  { id: 5, name: "Orange", color: "Orange", emoji: "🍊" },
  { id: 10, name: "Orange", color: "Orange", emoji: "🍊" },
  { id: 12, name: "Peach", color: "Orange", emoji: "🍑" },

];

function FruitsBasket() {
  const [selectedColor, setSelectedColor] = useState("all");

  const filteredFruits =
    selectedColor === "all"
      ? fruits
      : fruits.filter(
          (fruit) => fruit.color.toLowerCase() === selectedColor.toLowerCase(),
        );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🍎 Fruit Basket</h1>

      <div className="flex justify-center gap-3 mb-10">
        <button onClick={() => setSelectedColor("all")} className="px-5 py-2 rounded-full bg-gray-800 text-white cursor-pointer">All</button>

        <button
          onClick={() => setSelectedColor("red")}
          className="w-10 h-10 rounded-full bg-red-500 cursor-pointer"
        />

        <button onClick={() => setSelectedColor("yellow")} className="w-10 h-10 rounded-full bg-yellow-400 cursor-pointer" />
        
        <button onClick={() => setSelectedColor("green")} className="w-10 h-10 rounded-full bg-green-500 cursor-pointer"/>

        <button onClick={() => setSelectedColor("orange")} className="w-10 h-10 rounded-full bg-orange-500 cursor-pointer"/>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {filteredFruits.map((fruit) => (
            <div key={fruit.id} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">

            <div className="text-6xl mb-4">{fruit.emoji}</div>

            <h2 className="text-xl font-bold">{fruit.name}</h2>

            <p className="text-gray-500 capitalize">{fruit.color}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default FruitsBasket;
