import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body} from "./src/components/Body";
import { Footer } from "./src/components/Footer";

/*
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
