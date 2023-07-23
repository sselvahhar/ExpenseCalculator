import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import { useState } from "react";
// class Car extends React.Component {
//   render() {
//     return (
//       <div className="Car">
//         <h1>HELLOsasa WORLDs</h1>
//       </div>
//     );
//   }
// }

// function FavouriteColor() {
//   const [color, setColor] = useState("red");
//   return (
//     <>
//       <h1> My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//       <button type="button" onClick={() => setColor("Yellow")}>
//         Yellow
//       </button>
//       <button type="button" onClick={() => setColor("Green")}>
//         Green
//       </button>
//       <button type="button" onClick={() => setColor("violet")}>
//         violet
//       </button>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
