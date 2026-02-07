import React from "react";
import ReactDOM from "react-dom/client";

const react = React.createElement("div",{id:"heading "},"this is the object");
const jsxHeading = <h1 id="heading">This is the jsx syntax</h1>

console.log(jsxHeading);

//React component - 2types -: class and function component
/* 
-normal javascript function -react component
-function component - a functional component return jsx
*/
const HeadingComponent = ()=>{
    return <h1>Namaste react functional component</h1>
}  
 // || both below and above are same
//  //component composition - component inside component

const number = 10000*5;
// react element use as this way
const ele = <span>React element</span>

const Title = ()=>{
    return (<div>  
        <h1 className="head" tabIndex="5" >Namaste react</h1>
        <HeadingComponent/>
        </div>
    );
} // in this fuctional way there return is used then it work other use of () write in jsx return. suppose of react element is define first and react component is make after react element but in react element there call of react component is first then get error of can't access before intialize  .

const HeadinComp = ()=>(
    <div>
        <Title/>
        {ele*5000}
        {/* inject js */}
        {number} 
        {/* using same way function component like function call */}
        {Title()}
        <h1>Namaste react functional component</h1>
    </div>
)

// in jsx run js by {} use.

const reactdom = ReactDOM.createRoot(document.getElementById("root"));

// in js cant use of const varibale before intialization ,,like of function decleration after before it use.

// as we do component in element and element in component also 


// how the data escape and do data sanitization.***(jsx is already done data sanintization)** so that cross site scritping is not done like 

// const data = 100 use in component as {data} then through browser as js can manipulate or change thing but jsx is take care of it 

// reactdom.render(jsxHeading);
reactdom.render(<HeadinComp/>);