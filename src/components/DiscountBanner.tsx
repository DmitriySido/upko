import React from 'react';

// Discount banner above header
const DiscountBanner: React.FC = () => (
  <div style={{ background: '#222', color: '#fff', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14, fontFamily: 'Poppins, Arial, sans-serif' }}>
    <span>Free Shipping For Orders Over $109</span>
  </div>
);

export default DiscountBanner; 