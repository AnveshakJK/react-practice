import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body} from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { useState,useEffect } from "react";
import { foodItems } from "./src/utils/constants";
import { Shimmer } from "./src/components/shimmer";
// import Shimmer from "./src/components/shimmer";

const AppLayout = () => {

  const [listOfRestaurant,setListOfRestaurant] = useState([]);
   
  useEffect(()=>{
  console.log("useEffect called");
  fetchData();
},[]);
  
  // async and await is help in to resolve promise.
  const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1671575&lng=75.74005629999999&collection=80463&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"); 
  //this fetch data api from api;
 const json = await data.json();
 console.log("json--->",json.data.cards); 

const filterCards = json.data.cards.map(item=>item.card?.card?.info).filter(info=>info!==undefined);
console.log(filterCards);
setListOfRestaurant(filterCards);
 let imgFC = filterCards.map((badgesV2)=>badgesV2.cloudinaryImageId);
 console.log(imgFC);
 setListOfRestaurant(imgFC);
  } 

  console.log("Body rendered");
  return (
     (!listOfRestaurant || listOfRestaurant.length === 0) 
    ? <Shimmer />:
  
    <div className="app">
      <Header />
        <img src={listOfRestaurant}  className="food-img" />
      <Body listOfRestaurant={listOfRestaurant} />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

/*
Monolith and Microservice architecture 

as previous have( monolith architecture )through app are developed . so it contain lot's of data as in there. in there single project having api,backend return,frontend return , api auth ,etc . 
suppose of change single change there become bulky part. 

now todays use a( microservice )architecture. there different service for different jobs. we servervices for different service like it form a big app. they talk to each other . this is a seperation of concerns. each job have it's own responsiblity .as single responsiblity principal.
----------------------
|  [Be]  [UI]  [Auth]      |
|    | \      \            |
|  [PB]  [SM]  [Cmd]       |
------------------------


these service in microservice how to connect to each other.
there having one benifit is any language through we can implement use this to make servie like java,puthon,golang, etc

these service are run on own service ports. like :1234 are on UI , :1000 -BE ,,
so later these use by api call 
service interact through apicall /api,etc 


-> How frontend service make api call to backend and fetch the data.?
Ans.) two approach 
1.) [app loads]->[api call]->[render to ui{render}](take some time) 

2.) [load](as soon as page loads) -> [render](data) ->[api call] ->(response get) -> [then render the thing] 

through 2nd approach gives better UX.so use it.in first till some sec as 500ms there wait for it then it appear to screen but in second approach whatever we get through render there show in there like render and make api call and render again.atleast we see skeleton.

__>> react is most popular of beacause react render is fast . so that why 2 times render is best just instead wait for some time then suddenly shows.
 
==> useEffect hook 

((hook in react -> is just normal javascript function.which react is give us.))

**)useEffect take two arguments.callback function and dependent array.

useEffect(()=>{console.log("useEffect called");} , []);

->>))when this use effect callback function is called?
Ans.) so it called after the components render.
when the body component render cycle is finished then it callback function of useEffect is called.
when the body is rendered use
effect is not just ideal it keep work on it cycles and it see the body render done then it work.


->if want something after the render of component, then useEffect is helpful , in 2nd approach.
useEffect(()=>{console.log("useEffect called");fetchData()}  , []);

fetch is given by browser to fetchData.

const fetchData = ()=>{
  const data = fetch();
  }

  //cors policy . api of being called from local host is blocked. 
 our browser is not allowing us block call from one origin to another origin.
 there bypass a error then it resolve by browser extension etc.
    
 there after work on rerender portion after api call.
 as,,,, 
 setListOfRestaurant(json.data.cards[2].data.data.cards);

  this not good way to write data there do a optional channing 
   
  json?.data?.cards[2]?.data?.data?.cards;

  
--->there is the shimmer UI as maintained.
->create a shimmer component in shimmer.jsx file 
const shimmer = ()=>{
   return (
   <div> </div>
   )
  }
export default shimmer 

_> there react first render the component . then rerendering happen with data so that flow of UI in show otherwise user think not of loading is happen there for better uI interface fetch the UI then load the data. 
-> rendering = in their converting jsx component into real DOm element that visible on screen 
-. so in react there jsx -> virtual dom (comparison if any ) so update the real dom that whole process is rendering 
-> in rerendering there call component as again , then create a new virtual dom , compare old vs new (diffing ) updates only changed element . react does not reload an entire page there only update whats changed 


-> UseState

.)rendering =call the component once again,
.) const [btnNameReact , setBtnNameReact] = useState("login");
 this btnNameReact varible is again new btnNameReact form when rerender it that it was before. as react give track . but now get make new variable with updated value. 
  useState is help in getting the UI changes but with the changes in rendering happen. there whole react component render and track changes then from that change value of new there value is get changed. so without state there 
  const nameBtn = "login" ; onclick(()=>{nameBtn = "logout "}) ; but in Ui changes not see there component is not rendering. just in console there value of changes see of happen . 
  so all behind scene is DOM . there reconcialation. 


-> there make a search feature 
there in input text. using a usestate 
in input box there bind it value to updated serach text with that localstate variable. there use of onchangehandler.
const [searchText,setsearchText] = useState("");

input onChange={(e)=>{setSearchText(e.target.value)}};

(whenever state variable updates,react trigger a reconciliation cycle(there find the version change in virtual dom.there track change)).

-> there change a localstate varibale react re-render is get happen again and again.
.) there see in every key press there re-rendering is happen .
so this done very fast manner as we see also .(there see changes then dom manipulation is done. on rerendering)
.)react-fiber is new way of reconcialation. 
.)as find the portion that changes that make react faster,all in done dom track changes.

.)there in serach do a filter 
const filteredRes = listOfRestaurant.filter((res)=>{res.data.name.toLowerCase(include(search
Text))});

setSearchText(filterRes); there done make lowercase also so that no get any casesenstive error.

.) there do a functionality once the filter is done then search on that data sometime not get search data bacause of modify the local search list as not preset. 

so solution for this make a copy of list reastaurant and filterRestaurant.

code-slow is better there question self why this code i write. so that way make it less debug and think in correct way.

----> cors proxy is help in bypassing the cors error instead of login any thing, it can bypass the error 


*/