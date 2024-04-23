import React from 'react';
import Card from './Card';


function Clothing() {
  return (
    <div className="product-list">
      <Card
        imageUrl="./bart-over/src/assets/bart-over-white-tee.jpg"
        title="White heavyweight, oversized Tee"
        description="These 100% cotton heavyweight & oversized tee's are both ethically and organically produced, and will serve as your best bud at the gym."
      />
      <Card
        imageUrl="bart-over\src\assets\bart-over-blk-tee.jpg"
        title="Black heavyweight, oversized Tee"
        description="These 100% cotton heavyweight & oversized tee's are both ethically and organically produced, and will serve as your best bud at the gym."
      />
      {/* Add more Card components for other products */}
    </div>
  );
}

export default Clothing;