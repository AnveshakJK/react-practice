import { Food_delivery_Logo,leftImage,rightImage,promoCardImage } from "../utils/constants";

export const Header = () => {
  return (
    <div className="swiggy-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={Food_delivery_Logo} alt="Swiggy" className="logo-icon" />
          <span className="logo-text">Food Delivery</span>
        </div>

        <ul className="nav-links">
          <li> <a href="#">Delivery Coorporate </a> </li>
          <li> <a href="#">Partner with us</a></li>
          <li> <a href="#" className="btn-get-app"> Get the Home ↗ </a></li>
          <li><button className="btn-sign-in">Sign in</button></li>
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
            <input type="text" placeholder="Search for restaurant, item or more"/>
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
              <div><button className="explore-btn">Explore →</button></div>
              <div> {" "}<img src={promoCardImage} /></div>
            </div>
          </div>
          <div className="promo-card">
            <div>
              <h2>INSTAMART</h2>
              <p className="sub-text">INSTANT GROCERY</p>
              <p className="offer-tag">UPTO 60% OFF</p>
            </div>
            <div className="promo-CardItems">
              <div><button className="explore-btn">Explore →</button></div>
              <div>{" "}<img src={promoCardImage} /></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};