import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
/*
As i am run the server with new change in file but as output show of old changes due to :-
If you are seeing old code despite running the dev server, it is almost certainly due to stale cache files or a misconfigured entry point. Parcel caches your build to disk to speed up restarts, and sometimes this cache becomes "stuck".
so either delete that cache by:- rd /s /q .parcel-cache dist or just ignore old cache as:- npx parcel index.html --no-cache

->>as when you pass dynamic data in their then use it as a props.

->> there do destructing sideways also like 
{resName,cuisuine}. equivalent as 
const {resName,cuisine} = props;

->> ((config driver UI))-make a ui accord. for different regions as based on data .

.CDN -> clodinary use it as for post images other to use it.string concatenation

_.> there refactor the props and use based on data is want as it take or not .example
 const {resData} = props;

const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime,} = resData?.data ;

looping over same data just with index change there map is better to use.
ex:-  
as in map there use a key.
{resList.map((restaurant)=>(<RestaurantCard key={restaurant.data.id} resData = {restaurant} /> ))};

Q.)why need keys?
so of having a container and inside a child restaurant there react render these component and there uniquely id for identification.so new card will come on first place.so react will unable to know which placed it to wheather it on 1st,2nd ,etc so it rerender and treat all it same. (but if give key as id then render one restaurant only not others).

->there use index key as also which is another property of map for key.((react is not suggest to use indexes as a key).This is due to order of item may change). so there place of placing item is get changed.

*/

const leftImage =
  "https://img.freepik.com/premium-photo/set-vegetables-paper-bag-isolated-white-background-concept-healthy-vegetarian-food_152520-2015.jpg";
const rightImage =
  "https://img.freepik.com/premium-photo/set-vegetables-paper-bag-isolated-white-background-concept-healthy-vegetarian-food_152520-2015.jpg";
const swiggyLogo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT3Xe38PaVJMIHGMU9qNkQHyIvPX5vf8_Fg&s"
  ;

const Header = () => {
  return (
    /*
    <div className="header">
      <div className="logoNavItems">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT3Xe38PaVJMIHGMU9qNkQHyIvPX5vf8_Fg&s" />
          <p>Food Delivery</p>
        </div>
        <div className="nav-items">
          <p link="/home">Delivery Coorporate</p>
          <p>Partner With Us</p>
          <p>Get to Home</p>
          <p>Sign In</p>
        </div>
      </div>
      <img src="https://img.freepik.com/premium-photo/set-vegetables-paper-bag-isolated-white-background-concept-healthy-vegetarian-food_152520-2015.jpg"></img>
      <div className="searchBoxHeader">
        <input
          type="text "
          name="q"
          placeholder="Search for restaurant,item or more."
        ></input>
      </div>
      <div className="hCard">
        <div className="hCardItem">
        <div className="hItemsOfCard">
         <p>Items Name</p>
         <p>Items Place</p>
         <p>Discounts</p>
         <button type="button">Explore</button>
        </div>
        <div className="hItemsOfCardImg">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt61WQwxDYvQwrK9IqXj4_bjCYuk1nWdEasw&s"/>
        </div>
        </div>

        <div className="hCardItem">
            <div className="hItemsOfCard">
         <p>Items Name</p>
         <p>Items Place</p>
         <p>Discounts</p> 
          <button type="button">Explore</button>
        </div>
        <div className="hItemsOfCardImg">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt61WQwxDYvQwrK9IqXj4_bjCYuk1nWdEasw&s"/>
        </div>
        </div>
        <img src="https://img.freepik.com/premium-photo/set-vegetables-paper-bag-isolated-white-background-concept-healthy-vegetarian-food_152520-2015.jpg"></img>
      </div>
    </div> */

    <div className="swiggy-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={swiggyLogo} alt="Swiggy" className="logo-icon" />
          <span className="logo-text">Food Delivery</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Delivery Coorporate </a>
          </li>
          <li>
            <a href="#">Partner with us</a>
          </li>
          <li>
            <a href="#" className="btn-get-app">
              Get the Home ↗
            </a>
          </li>
          <li>
            <button className="btn-sign-in">Sign in</button>
          </li>
        </ul>
      </nav>

      <main className="hero-section">
        <img src={leftImage} alt="Veggies" className="bg-image-left" />
        <img src={rightImage} alt="Sushi" className="bg-image-right" />
        <div className="search-container">
          <div className="location-input">
            <span>📍</span>
            <span>Search for restaurant,item or more.⌄</span>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
            />
            <span style={{ color: "#888", cursor: "pointer" }}>🔍</span>
          </div>
        </div>
        <div className="cards-container">
          <div className="promo-card">
            <div>
              <h2>FOOD DELIVERY</h2>
              <p className="sub-text">FROM RESTAURANTS</p>
              <p className="offer-tag">UPTO Discounts OFF</p>
            </div>
            <div className="promo-CardItems">
              <div>
                <button className="explore-btn">Explore →</button>
              </div>
              <div>
                {" "}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt61WQwxDYvQwrK9IqXj4_bjCYuk1nWdEasw&s" />
              </div>
            </div>
          </div>
          <div className="promo-card">
            <div>
              <h2>INSTAMART</h2>
              <p className="sub-text">INSTANT GROCERY</p>
              <p className="offer-tag">UPTO 60% OFF</p>
            </div>
            <div className="promo-CardItems">
              <div>
                <button className="explore-btn">Explore →</button>
              </div>
              <div>
                {" "}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt61WQwxDYvQwrK9IqXj4_bjCYuk1nWdEasw&s" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const foodItems = [
  { name: "Pizza",img: "https://www.svgrepo.com/show/505213/pizza.svg",},
  { name: "Burger", img: "https://www.svgrepo.com/show/505202/hamburger.svg" },
  { name: "Biryani", img: "https://www.svgrepo.com/show/505195/hand-pulled-noodle.svg" },
  { name: "Dosa", img: "https://cdn-icons-png.flaticon.com/128/4727/4727322.png" },
  { name: "Chinese", img: "https://cdn-icons-png.flaticon.com/128/16024/16024466.png" },
  { name: "Cake", img: "https://cdn-icons-png.flaticon.com/128/2682/2682340.png" },
  { name: "Rolls", img: "https://www.svgrepo.com/show/275732/rolls-dessert.svg" },
  { name: "Ice Cream", img: "https://cdn-icons-png.flaticon.com/128/499/499635.png" },
];

const cities = [
  "Bangalore",
  "Gurgaon",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Chandigarh",
  "Jaipur",
];

const Body = () => {
  return (
    <>
      <div className="body-container">
        <section className="food-section">
          <h2 className="food-header">Order our best food options</h2>
          <div className="food-scroll-container">
            {foodItems.map((item, idx) => (
              <div key={idx} className="food-card">
                <img src={item.img} alt={item.name} className="food-img" />
                <div className="food-name">{item.name}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="app-banner">
          <div className="banner-content">
            <h2>Get the Swiggy App</h2>
          </div>
        </section>
        <section className="cities-section">
          <h3 className="cities-header">Cities with food delivery</h3>
          <div className="cities-grid">
            {cities.map((city, idx) => (
              <a href="#" key={idx} className="city-btn">
                Order food in {city}
              </a>
            ))}
            <a href="#" className="city-btn highlight">
              Show More ⌄
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT3Xe38PaVJMIHGMU9qNkQHyIvPX5vf8_Fg&s";
const appStore =
  "https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg";
const playStore =
  "https://www.svgrepo.com/show/303139/google-play-badge-logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col">
          <img src={logoUrl} alt="Swiggy" className="swiggy-logo" />
          <p className="copyright">© 2026 Food Delivery Limited</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Food Delivery Corporate</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Food Delivery One</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
          </ul>
          <h4 style={{ marginTop: "30px" }}>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Life at Food Delivery</h4>
          <ul>
            <li>
              <a href="#">Explore with Food Delivery</a>
            </li>
            <li>
              <a href="#">Food Delivery News</a>
            </li>
            <li>
              <a href="#">Snackables</a>
            </li>
          </ul>
          <h4 style={{ marginTop: "30px" }}>Social Links</h4>
          <div className="social-links">
            <span>LinkedIn </span>
            <span>Instagram </span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <h3>For better experience, download the food delivery app now</h3>
        <div className="app-btn-container">
          <img src={playStore} alt="Google Play" className="store-btn" />
          <img src={appStore} alt="App Store" className="store-btn" />
        </div>
      </div>
    </footer>
  );
};

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
