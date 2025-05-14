import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#574b35', color: '#fff', width: '100%', padding: '40px 0 0 0', marginTop: 64 }}>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 48 }}>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>Get In Touch</h3>
            <div style={{ color: '#fff', margin: '16px 0' }}>Boxue South Road No. 731 jiading,<br/>201801 Shanghai, China</div>
            <div style={{ color: '#fff', margin: '8px 0' }}>upko@upko.me</div>
            <div style={{ color: '#fff', margin: '8px 0' }}>(+86)13488867627</div>
          </div>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>All Products</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#fff' }}>
              <li>Labor Day Sale</li>
              <li>New arrivals</li>
              <li>Gift Sets</li>
              <li>Leather Bondage And Restraints</li>
              <li>Soft Bondage And Restraints</li>
              <li>Impacts Toys</li>
              <li>Ball Gags</li>
              <li>Nipple and Clit Clamps</li>
              <li>Anal and Urethral Toys</li>
              <li>Lingerie And Accessories</li>
              <li>Sex Toys</li>
              <li>UPKO Design Collection</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#ab966f', fontFamily: 'Libre Baskerville, serif', fontWeight: 400, fontSize: 16 }}>Information</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#fff' }}>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Return & Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Dealership</li>
              <li>FAQ</li>
              <li>Be our Affiliate</li>
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