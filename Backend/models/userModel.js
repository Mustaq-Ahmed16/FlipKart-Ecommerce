import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  email: { type: String, unique: true,required:true },
  password: {type:String,required:true},
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  photo: { type: String },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart', // Reference to the Cart model (we'll set this up next)
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Reference to the Order model (for completed orders)
  }],

}  ,{ timestamps: true });

const User = mongoose.model("User", userSchema);


export default User;