import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import StarRating from "./components/StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating /> */}
    <StarRating maxRating={15} />
    <StarRating
      maxRating={8}
      color="#2364a1"
      size={24}
      className="test"
      defaultRate={2}
    />
  </React.StrictMode>
);
