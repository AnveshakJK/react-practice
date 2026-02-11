import { logoUrl,appStore,playStore } from "../utils/constants";

export const Footer = () => {
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Food Delivery Corporate</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Food Delivery One</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
          </ul>
          <h4 style={{ marginTop: "30px" }}>Legal</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Life at Food Delivery</h4>
          <ul>
            <li><a href="#">Explore with Food Delivery</a></li>
            <li><a href="#">Food Delivery News</a></li>
            <li><a href="#">Snackables</a></li>
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