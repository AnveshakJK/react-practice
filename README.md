# react-practice
How to make any production ready app
-> first thing is the planning
.)like having a header in this what we include and what not that are plan
.)then body of app ,search bar,card of restaurants look like , in their image star,etc like thing.
.) footer in copyright ,etc
as make a wireframe

->code there component of think
->top level component as App.
->header,body,footer.
->header component in logo,nav item,
->body component in- search,restaurantcard( 
    --img,--name of res,star rating,cusine,delete tie.
)
-> footer ,-copyright,-links,-address,-contact 

-->style={{backgroundColor:"#f0f0f0"}} write in jsx as wrap in js object like



----------------------------------------------------------
📁 Project structure basics

Keep UI pieces in separate components inside src/components.

Avoid hard-coding things like URLs, images, and strings inside components.
Store them in src/utils/constants.js (or similar).

File and component names should start with a capital letter.

Keep files small and focused (ideally <100 lines when possible).

src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ RestaurantCard.jsx
 │   └─ Body.jsx
 ├─ utils/
 │   └─ constants.js
 └─ App.jsx
📦 Exports in React files

There are two export styles:

Default export (one per file):

export default Header;
import Header from "./Header";

Named export (multiple allowed):

export const LOGO_URL = "...";
export const API_URL = "...";

import { LOGO_URL, API_URL } from "../utils/constants";
Use default when a file has one main component.
Use named exports when exporting multiple items.

🧠 What is a component?
A component is just a JavaScript function that returns UI (JSX).

function Header() {
  return <h1>My App</h1>;
}
🪝 Hooks (important concept)
Definition
A Hook is a normal JavaScript function provided by React that gives extra features like state, refs, etc.

Examples:

useState
useRef
useEffect
Local state variable
A state variable stores data that can change and update the UI automatically.

import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

Key rule:
Whenever state changes → React re-renders the component → UI updates.

Why is state powerful?
It keeps the data layer and UI in sync.

If data changes:
setCount(5);
React automatically updates what you see on screen.
No manual DOM updates needed.
⚡ Why React apps feel fast

Common wrong answer:
React is fast because it’s fast.
Correct idea:
React is fast because it efficiently updates the DOM.
Browsers are slow at heavy DOM operations.
React minimizes them.

🌳 DOM vs Virtual DOM
Actual DOM
Real HTML elements in the browser.
<div>
  <h1>Hello</h1>
</div>
Virtual DOM
A JavaScript object representation of the real DOM.

Example:
console.log(<h1>Hello</h1>);
This prints an object → that object is the Virtual DOM.

React elements are just objects:
React.createElement("h1", {}, "Hello");
🔁 How React updates UI
Step-by-step
React creates a Virtual DOM (object).
State changes.
React creates a new Virtual DOM.
It compares old vs new Virtual DOM.
Only changed parts update in real DOM.
This comparison process = Diffing.

🧩 Reconciliation (React Fiber)
Definition
Reconciliation is the process of comparing old and new Virtual DOM and updating only what changed.
React uses an algorithm called React Fiber.

Example
You display 7 restaurant cards.
Then user clicks filter → now only 3 cards.
React does NOT reload everything.
It compares:
Old virtual DOM → 7 cards
New virtual DOM → 3 cards
It finds 4 differences and updates only those nodes.
This makes UI updates fast.

❓ Q & A style explanations
Q: What triggers a re-render?
A: Updating state using functions like setState or setCount.

Q: Why use useState?
A: To store values that change and update UI automatically.

Q: What is a Hook?
A: A special React function that gives features like state and lifecycle.

Q: Why is React fast?
A: Because it updates only changed parts of the DOM using Virtual DOM and diffing.

Q: What is Virtual DOM?
A: A JavaScript object copy of the real DOM used for efficient updates.

Q: What is reconciliation?
A: The process of comparing old and new Virtual DOM and updating differences.

Q: What is React Fiber?
A: The modern reconciliation engine React uses to update UI efficiently.

🧪 Example combining everything
import { useState } from "react";
import { resList } from "../utils/constants";
function Body() {
  const [list, setList] = useState(resList);
  function filterTopRated() {
    const filtered = list.filter(r => r.rating > 4);
    setList(filtered);
  }
  return (
    <div>
      <button onClick={filterTopRated}>Top Rated</button>
      {list.map(res => (
        <div key={res.id}>{res.name}</div>
      ))}
    </div>
  );
}
export default Body;

Flow:
Initial list → shown on screen
Button click → state changes
React creates new Virtual DOM
Finds difference
Updates only changed items

Term;=
Component:-	Function that returns UI
Hook:-	React utility function like useState
State:-	Data that changes and re-renders UI
Virtual DOM:-	JS object version of real DOM
Diffing:-	Comparing two virtual DOMs
Reconciliation:-	Updating only changed parts
React Fiber:-	Engine behind reconciliation


?*/*****
-> there structure properly make a seperate component for different file. 
-> there put in src folder
 -> in components folder having a different component file 
 ->never keep hardcoded data in components file or app/src
->like url,data ,logo,hardcoded strings ,etc.keep in seperate file like utils/constants.
->component and others file name of start letter in capital.
->Two ways export as named and default.single file having one defualt not multiple ,so for multiple using by named export as export variable name _name_.
for this import for named export as {name variable}.
->it good to keep your file small as it help in better understandation like of 100 lines of code 
->Hook-normal js function which gives the utility. local state variable-super powerful variable that help in render the thing  ,
->useState,useRef,
->whenever the state update then react rerender the component.
-> in jsx there js in function of value get changed the UI level there changes how get reflect this helpful in there of (HOOK). which help in getting of as local state variable update ,then as soon as UI level layer update by rerender component. 
-> so this fast changes is done by react.as DOM operation done is fast.
-> why use web app or app is fast.as react is fast .not this answer is not correct as singly.(react is only good at dom manipulation).
->( as soon as change my state variable there react automatically done in fast manner. It keeps data layer sync with UI).
->(there useState in function use of updating varibale. one time we define with usestate in params as pass but next time i want to change that value then it done by using of function make like name that use it then pass in their value).
---***>)Now as how react work?
Ans.) react uses reconcialation algorithm."this also known as ((react fiber))".
On UI we have DOM(it just like a tree).
there having a restaurant container and in this having 7 restaurant cards.suppose my UI changes suppose of filtering these 7 cards to 3 filtered cards.

for there 7 res card and restaurant container there react creates a ((virtual dom  )).
==> 
actual dom -> are tags i.e <div><div><img> react element 
==> 
  so virtual dom -> is representation of actual dom. 

console.log(<Body/>);this is virtual dom that print.
this print an object. 
React.createElement("h1",{})=> React Element(object).
in this Body component of read by react as jsx,it create a object.i.e a virtual dom which it keep with it.
so virtual dom it a object for representation of actual dom.
==> 
  (Diff algorithm) is help in find out the difference between two virtual dom,one is updated and previous virtual dom. 
  suppose if have a res conatiner. contain a 7 res card. when click the button then this (old virtual dom ) is now updated to 3 (new virtual dom) there find difference in between them as of 4 node difference . then it actually update the dom on every render cycle.
This is all reconciliation algorithm or react fiber.
reconcialation - whenever the changes happen.  
this react fiber is the new way of updating the dom and find difference. 
find out diff between object is fast as comp to html.react is help in keep track of all this ui dom node.
this react doesn't touch the html alot it done by object this virtual dom.
so why react is fast??
as it done efficient dom manipulation as due to having a virtual dom(it just a object).react took over it and find difference and update UI.
const [listofRestaurant,setListofRestaurant] = useState(resList);
in this second function want due to want someone when trigger by action then able to do that task.

*/