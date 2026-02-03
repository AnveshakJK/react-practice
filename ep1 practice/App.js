/*
<div id="parent">
  <div id="child">
   <h1>THis is h1 tag</h1>
   <h2>This is h2 tag</h2>
  </div>
</div>

*/

const heading = React.createElement(
    'div',{id:"parent"},[
        React.createElement('div',{id:"child1"},
        [React.createElement("h1",{},"This is h1 tag"),
         React.createElement("h2",{},"This is h1 tag")]),
        React.createElement('div',{id:"child2"},
        [React.createElement("h1",{},"This is h1 tag"),
         React.createElement("h2",{},"This is h1 tag")])
]);


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);