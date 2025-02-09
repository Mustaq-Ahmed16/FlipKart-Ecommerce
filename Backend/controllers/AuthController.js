import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username.trim() || !password.trim() || !email.trim()) {
      return res.status(404).json({ message: "Required fields should not be empty" });
    }

    // const existUser = signupData.find((item)=>item.name == name);
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(404).json({ message: "User already exist" })
    }
    // const newId = signupData.length > 0 ? signupData.length + 1 : 1;
    const hashedPassword = await bcrypt.hash(password, 10);
    //jwt token genereation
    const token = jwt.sign({ username: username, email: email }, process.env.SECRET_KEY, { expiresIn: "1h" });

    // const newObj = { name: name, password: hashedPassword, city: city, token: token };
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      photo: req.file ? req.file.path : null,

    });
    console.log(newUser);
    // signupData.push(newObj);
    await newUser.save();
    //display
    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        userId:newUser._id,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        photo: newUser.photo,

      },
      token
    });



  }
  catch (err) {
    return res.status(404).json({ message: "Internal server error", err });
  }
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email.trim() || !password.trim()) return res.status(404).json({ message: "Required fields should not empty" });
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not Registered" })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ username:user.username,email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" })
    return res.status(200).json({ message: "Login Successful", token: token, user });
    //token verification
    // const token = req.headers['authorization']?.split(' ')[1]
    // if (!token) {
    //   return res.status(401).json({ message: "Token not found" })
    // }
    // jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    //   if (err) {
    //     return res.status(401).json({ message: "Unauthorized" })
    //   }
    //   return res.status(200).json({ email: decoded.email, name: decoded.name, message: "Verified success", staus: 200 })

    // })
    // data.token = token;
    // console.log(data);
    // return res.status(200).json({ message: "User login Successful", data })

  }
  catch (err) {
    console.log("Internal server error", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }


}


// Forgot Password Improvement
export const forgotPassword = async (req, res) => {
  try {
    const { email, confirmPassword } = req.body;
    if (!email.trim() || !confirmPassword.trim()) return res.status(400).json({ message: "All Fields Required" });

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "User not Found" });
    }

    // Hash the new password before saving
    const hashedPassword = await bcrypt.hash(confirmPassword, 10);
    existUser.password = hashedPassword;
    await existUser.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
}







