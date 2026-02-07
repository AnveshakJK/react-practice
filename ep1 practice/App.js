import React from "react";
import ReactDOM from "react-dom/client";

const react = React.createElement("div",{id:"heading "},"this is the object");
const jsxHeading = <h1 id="heading">This is the jsx syntax</h1>

console.log(jsxHeading);
const reactdom = ReactDOM.createRoot(document.getElementById("root"));

//JSX -it a syntax and createElement is a react element
//creating a react element using jsx
// Babel(inside parcel) is the helper (transpiler (one code to another code like ES6 conversion also)) for jsx into react element conversion.
// like in compiler there parsing is done and all like that things as happen in babel;

// attributes and tags in inside jsx 
// if you write in multiple line then wrap in () . as due to understand it one and compiled to.

reactdom.render(jsxHeading);
