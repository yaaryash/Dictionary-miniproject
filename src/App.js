import "./App.css";
import React, { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const words = input.toLowerCase();
    const findWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === words
    );
    if (findWord) {
      setDefinition(findWord.meaning);
      setInput("");
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        value={input}
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      <p>{definition}</p>
    </div>
  );
}

export default App;
