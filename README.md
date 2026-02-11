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