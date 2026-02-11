import { foodItems,cities } from "../utils/constants";

 

export const Body = () => {
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
          <div className="banner-content"><h2>Get the Swiggy App</h2></div>
        </section>
        <section className="cities-section"><h3 className="cities-header">Cities with food delivery</h3>
          <div className="cities-grid">
            {cities.map((city, idx) => (
              <a href="#" key={idx} className="city-btn">Order food in {city}</a>
            ))}
            <a href="#" className="city-btn highlight">Show More</a>
          </div>
        </section>
      </div>
    </>
  );
};