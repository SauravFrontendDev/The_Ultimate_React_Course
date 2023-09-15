import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const buttonStyles = { backgroundColor: "#7850f2", color: "#fff" };
  const messages = [
    "Learn Fundamentals of Web Development 🌐",
    "Acquire Version Control Skills 📚",
    "Explore JavaScript Deeply 🚀",
    "Basic React Knowledge ⚛️",
    "Build Simple React Projects 🏗️",
    "State Management 🔄",
    "Routing and Navigation 🧭",
    "API Interaction 🌐",
    "Styling in React 💅",
    "Testing and Optimization 🧪",
  ];

  const handlePrevious = () => {
    if (step > 0) setStep((step) => step - 1);
  };
  const handleNext = () => {
    if (step < 9) setStep((step) => step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        {Array.from({ length: 10 }, (val, i) => i).map((num) => (
          <div key={num + 1} className={`${step >= num ? "active" : ""}`}>
            {num + 1}
          </div>
        ))}
      </div>

      <p className="message">
        Step {step + 1}: {messages[step]}
      </p>

      <div className="buttons">
        <button onClick={handlePrevious} style={buttonStyles}>
          Previous
        </button>
        <button onClick={handleNext} style={buttonStyles}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
