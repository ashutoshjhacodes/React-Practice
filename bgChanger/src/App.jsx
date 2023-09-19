import { useState } from "react";
import "./App.css";

const colorOptions = [
  { name: "Red", color: "red" },
  { name: "Green", color: "green" },
  { name: "Yellow", color: "yellow" },
  { name: "Black", color: "black" },
  { name: "White", color: "white" },
  { name: "Orange", color: "orange" },
  { name: "Gray", color: "gray" },
  { name: "Pink", color: "pink" },
];

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {colorOptions.map((option) => (
            <button
              key={option.color}
              onClick={() => changeColor(option.color)}
              className={`outline-none px-4 py-1 rounded-full ${
                option.color === "Black" ? "text-white" : "text-black"
              } shadow-lg`}
              style={{ backgroundColor: option.color }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;