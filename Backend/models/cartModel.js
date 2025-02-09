import mongoose from "mongoose";


const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // Reference to the Product model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'], // Ensure quantity is at least 1
        },
        price: {
          type: Number,
          required: true, // Price when the product was added to the cart
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true, // The total value of the cart
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart
