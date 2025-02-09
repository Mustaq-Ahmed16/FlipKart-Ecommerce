const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state; // Access the product object passed via state
  const [quantity, setQuantity] = useState(1);
  const { cart, cartDispatch } = useCart();
  
  const navigate = useNavigate();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : prevQuantity));
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = (product) => {
    const productWithQuant = { ...product, quantity };
    cartDispatch({ type: "ADD_TO_CART", payload: productWithQuant });
    navigate('/cart');
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <img src={product.img || 'default_image_url'} alt={product.name} className="w-96 h-96 object-cover" />
      </div>

      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-lg font-medium">Price: ₹{product.price}</p>
        <p className="text-sm">Discount: {product.discount}%</p>
        <p className="text-sm">Rating: {product.rating}★</p>

        {/* Quantity Control */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <span className={`mx-2 ${quantity >= 10 ? 'text-gray-400' : ''}`}>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
              disabled={quantity >= 10}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={()=>handleAddToCart(product)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Add to Cart
        </button>

        {/* Additional product content */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Product Details</h3>
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
