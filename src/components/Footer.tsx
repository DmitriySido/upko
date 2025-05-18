import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#574b35', color: '#fff', width: '100%', padding: '40px 0 0 0', marginTop: 64 }}>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 48 }}>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>Get In Touch</h3>

            <div className='footer-get-in-touch-link' style={{ color: '#fff', margin: '16px 0' }}>
              <svg style={{
    width: "18.73px",
    height: "30px",
    verticalAlign: "middle",
    marginRight: "5px"
  }} viewBox="0 0 32 32" width="32" height="32"><path fill="currentColor" d="M 16.001 1.072 c 5.291 0 9.596 4.305 9.596 9.597 c 0 1.683 -0.446 3.341 -1.29 4.799 l -8.307 14.394 l -8.308 -14.395 c -0.843 -1.456 -1.289 -3.115 -1.289 -4.798 c 0 -5.292 4.305 -9.597 9.597 -9.597 Z M 16.001 14.4 c 2.058 0 3.731 -1.674 3.731 -3.731 s -1.674 -3.731 -3.731 -3.731 c -2.058 0 -3.732 1.674 -3.732 3.731 s 1.674 3.731 3.732 3.731 Z M 16.001 0.006 c -5.889 0 -10.663 4.775 -10.663 10.663 c 0 1.945 0.523 3.762 1.432 5.332 l 9.23 15.994 l 9.23 -15.994 c 0.909 -1.57 1.432 -3.387 1.432 -5.332 c 0 -5.888 -4.774 -10.663 -10.662 -10.663 v 0 Z M 16.001 13.334 c -1.472 0 -2.666 -1.193 -2.666 -2.665 c 0 -1.471 1.194 -2.665 2.666 -2.665 s 2.665 1.194 2.665 2.665 c 0 1.472 -1.193 2.665 -2.665 2.665 v 0 Z"></path></svg>
              Boxue South Road No. 731 jiading,<br/>201801 Shanghai, China</div>

            <div className='footer-get-in-touch-link' style={{ color: '#fff', margin: '8px 0' }}>
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <path
                  fill="currentColor"
                  d="M 28.244 7.47 h -25.572 v 17.06 h 26.656 v -17.06 h -1.084 Z M 27.177 8.536 l -10.298 10.298 c -0.47 0.47 -1.289 0.47 -1.759 0 l -10.3 -10.298 h 22.356 Z M 3.738 8.961 l 6.923 6.922 l -6.923 6.923 v -13.846 Z M 4.589 23.464 l 6.827 -6.826 l 2.951 2.95 c 0.436 0.436 1.016 0.677 1.633 0.677 s 1.197 -0.241 1.633 -0.677 l 2.951 -2.951 l 6.826 6.826 h -22.822 Z M 28.262 22.807 l -6.923 -6.924 l 6.923 -6.924 v 13.848 Z"
                />
              </svg>
              upko@upko.me</div>

            <div className='footer-get-in-touch-link' style={{ color: '#fff', margin: '8px 0' }}>
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <path
                  fill="currentColor"
                  d="M 23.407 30.394 c -2.431 0 -8.341 -3.109 -13.303 -9.783 c -4.641 -6.242 -6.898 -10.751 -6.898 -13.785 c 0 -2.389 1.65 -3.529 2.536 -4.142 l 0.219 -0.153 c 0.979 -0.7 2.502 -0.927 3.086 -0.927 c 1.024 0 1.455 0.599 1.716 1.121 c 0.222 0.442 2.061 4.39 2.247 4.881 c 0.286 0.755 0.192 1.855 -0.692 2.488 l -0.155 0.108 c -0.439 0.304 -1.255 0.869 -1.368 1.557 c -0.055 0.334 0.057 0.684 0.342 1.068 c 1.423 1.918 5.968 7.55 6.787 8.314 c 0.642 0.6 1.455 0.685 2.009 0.218 c 0.573 -0.483 0.828 -0.768 0.83 -0.772 l 0.059 -0.057 c 0.048 -0.041 0.496 -0.396 1.228 -0.396 c 0.528 0 1.065 0.182 1.596 0.541 c 1.378 0.931 4.487 3.011 4.487 3.011 l 0.05 0.038 c 0.398 0.341 0.973 1.323 0.302 2.601 c -0.695 1.327 -2.85 4.066 -5.079 4.066 Z M 9.046 2.672 c -0.505 0 -1.746 0.213 -2.466 0.728 l -0.232 0.162 c -0.827 0.572 -2.076 1.435 -2.076 3.265 c 0 2.797 2.188 7.098 6.687 13.149 c 4.914 6.609 10.532 9.353 12.447 9.353 c 1.629 0 3.497 -2.276 4.135 -3.494 c 0.392 -0.748 0.071 -1.17 -0.04 -1.284 c -0.36 -0.241 -3.164 -2.117 -4.453 -2.988 c -0.351 -0.238 -0.688 -0.358 -0.999 -0.358 c -0.283 0 -0.469 0.1 -0.532 0.14 c -0.104 0.111 -0.39 0.405 -0.899 0.833 c -0.951 0.801 -2.398 0.704 -3.424 -0.254 c -0.923 -0.862 -5.585 -6.666 -6.916 -8.459 c -0.46 -0.62 -0.641 -1.252 -0.538 -1.877 c 0.187 -1.133 1.245 -1.866 1.813 -2.26 l 0.142 -0.099 c 0.508 -0.363 0.4 -1.02 0.316 -1.242 c -0.157 -0.414 -1.973 -4.322 -2.203 -4.781 c -0.188 -0.376 -0.336 -0.533 -0.764 -0.533 Z"
                />
              </svg>
              (+86)13488867627</div>


          </div>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>All Products</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#fff' }}>
              <li><Link to="/products">Labor Day Sale</Link></li>
              <li><Link to="/product/upko-finger-bound-play-collection-migratory-bird-metal-collar-fingers-clamps-set/3">New arrivals</Link></li>
              <li><Link to="/">Gift Sets</Link></li>
              <li><Link to="/product/upko-bowknot-hogtie-portable-bondage-gear/5">Leather Bondage And Restraints</Link></li>
              <li><Link to="/product/upko-bondage-boutique-leather-hogtie/33">Soft Bondage And Restraints</Link></li>
              <li><Link to="/product/upko-mini-vibrator-clitoral-stimulator/84">Impacts Toys</Link></li>
              <li><Link to="/product/upko-rose-ball-gag/27">Ball Gags</Link></li>
              <li><Link to="/product/mystic-bond-collection-collar-with-pulling-nipple-clamps/8">Nipple and Clit Clamps</Link></li>
              <li><Link to="/product/vaginal-anal-hook/69">Anal and Urethral Toys</Link></li>
              <li><Link to="/products">Lingerie And Accessories</Link></li>
              <li><Link to="/products">Sex Toys</Link></li>
              <li><Link to="/products">UPKO Design Collection</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>Information</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#fff' }}>
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/refund-policy">Return & Refund Policy</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>Newsletter</h3>
            <div style={{ color: '#878787', margin: '16px 0' }}>Subscribe to our newsletter and get<br/>10% off your first purchase</div>
            <form style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="Your email address" style={{ borderRadius: 8, border: '1px solid #ccc', padding: 8, fontSize: 14 }} />
              <button type="submit" style={{ borderRadius: 8, background: '#ab966f', color: '#fff', border: 'none', padding: '8px 16px', fontWeight: 600 }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #ab966f', margin: '32px 0 0 0', padding: '16px 0', textAlign: 'center', color: '#222' }}>
          Copyright © 2025 UPKO all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 