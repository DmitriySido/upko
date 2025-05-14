import React from 'react';

// Discount banner above header
const DiscountBanner: React.FC = () => (
  <div style={{ background: '#222', color: '#fff', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14, fontFamily: 'Poppins, Arial, sans-serif' }}>
    <span>15% OFF For 2 And More Items</span>
  </div>
);

export default DiscountBanner; 