import React from 'react';

function ProductDetails({ match }) {
  // Extract the productId from the URL params
  const { productId } = match.params;

  // Fetch product details based on productId or use dummy data
  const productDetails = {
    id: productId,
    name: "Product Name", // Replace with actual product name
    description: "Product Description", // Replace with actual product description
    imageUrl: `src/assets/product${productId}.jpg`, // Replace with actual image URL
  };

  // Handle size selection form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSize = event.target.size.value;
    // Handle form submission, e.g., add the product to the cart
    console.log("Selected size:", selectedSize);
  };

  return (
    <div>
      {/* Display product image */}
      <img src={productDetails.imageUrl} alt={productDetails.name} style={{ maxWidth: "50%", height: "auto", float: "left", marginRight: "20px" }} />

      {/* Display product details */}
      <div>
        <h1>{productDetails.name}</h1>
        <p>{productDetails.description}</p>

        {/* Size selection form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="size">Select Size:</label>
          <select id="size" name="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;