import Card from './Card';

function Clothing() {
  return (
    <div className="product-list">
      <Card
        imageUrl="path/to/tee-image.jpg"
        title="Tee's"
        description="These heavyweight 100% cotton tee is ethical and organic, and serves as your best bud at the gym."
      />
      <Card
        imageUrl="path/to/hoodie-image.jpg"
        title="Hoodies"
        description="Stay warm and stylish with our collection of cozy hoodies made from premium materials."
      />
      {/* Add more Card components for other products */}
    </div>
  );
}

export default Clothing