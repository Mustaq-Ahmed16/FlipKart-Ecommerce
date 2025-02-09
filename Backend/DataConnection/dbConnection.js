import mongoose from 'mongoose'
import dotenv from 'dotenv'




dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL


const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // connectTimeoutMS: 10000, 
    });
    console.log("MongoDB Connected")

  }
  catch (err) {
    console.log("Internal Error at Connection")

  }
}
export default dbConnection;

