import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User who placed the order
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // Reference to the Product that was ordered
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'], // Ensure at least 1 item is ordered
        },
        price: {
          type: Number,
          required: true, // Store the price of the product at the time of the order
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true, // Total price of the order
    },
    shippingAddress: {
      type: String,
      required: true, // The shipping address for the order
    },
    paymentMethod: {
      type: String,
      required: true, // Store payment method used
    },
    status: {
      type: String,
      default: 'Pending', // Default to 'pending' status
    },
    paymentDate: {
      type: Date,
      default: Date.now
    },
    shippingDate: {
      type: Date,
    },
    deliveryDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order