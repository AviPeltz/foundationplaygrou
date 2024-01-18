// GPTPlayground.js
import React, { useState } from 'react';

const GPTPlayground = () => {
  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3'); // Default model

  const handleRunModel = () => {
    // Add your logic here to run the selected GPT model with the inputText
    // and display the output.
    // You can use OpenAI API or any other method to interact with GPT models.

    // For now, let's just log the input text and selected model to the console.
    console.log(`Running ${selectedModel} model with input: ${inputText}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Foundation Model Playground</h1>

        <label className="flex">Input Text:</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <br />
        <label className="block mb-2">Select Model:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="gpt-3">GPT-3</option>
          <option value="gpt-3-5">GPT-3.5</option>
          <option value="llama">llama</option>
          {/* Add more models as needed */}
        </select>
        <button
          className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleRunModel}
        >
          Run Model
        </button>
      </div>
    </div>
  );
};

export default GPTPlayground;
