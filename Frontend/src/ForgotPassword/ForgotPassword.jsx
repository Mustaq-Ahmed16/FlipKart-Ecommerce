import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import UserData from '../Data/UserData';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpValid, setOtpValid] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const navigate = useNavigate();
  const [id,setId]=useState(''); // Moved inside handleEmailSubmit for cleaner code

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpValid(e.target.value.length === 6);
  };

  const generateOTP = () => {
    const OTP = Math.floor(100000 + Math.random() * 900000).toString();
    return OTP;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!email) {
      alert('Please enter a valid email');
      return;
    }

    const validEmail = UserData.find((item) => item.email == email);
    if (validEmail) {
      setId(validEmail.userId);
      console.log(id);
      console.log(validEmail.email);

      const OTP = generateOTP();
      console.log(OTP);
      setGeneratedOTP(OTP);
      // setIsOtpSent(true);

        try {
          await emailjs.send(
            'service_cj3hhvw', // Your EmailJS service ID
            'template_f083738', // Your EmailJS template ID
            { reply_to: validEmail.email, otp: OTP }, // Replace with your template variables
            'FUHQjhIfH_TMq8S_V' // Your EmailJS user ID
          );
          console.log('Email sent successfully');
        } catch (error) {
          console.error('Error sending OTP:', error);
          alert('Failed to send OTP');
        }
      } else {
        alert('Email not found!');
      }
    setIsOtpSent(true);
    
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (generatedOTP == otp) {
      alert('OTP verified successfully');
      console.log(id);
      navigate(`/password-reset/${id}`);
  
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="w-full flex mx-20 mt-20">
      <div className="w-5/12 h-120 py-12 bg-blue-500 ml-60 flex flex-column">
        <div className="min-h-full flex-col justify-center px-6 py-0 lg:px-8">
          <div className="mb-5 text-3xl text-white font-bold">Looks like you've forgotten your Password!</div>
          <div className="mb-35 text-xl text-gray-300">No worries, you can reset your password by OTP verification</div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt="login"
          />
        </div>
      </div>
      <div className="w-8/12 h-120 py-2 bg-white-500 mr-100">
        <div className="flex min-h-full flex-col justify-center px-6 py-0 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">Forgot Password?</h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              {!isOtpSent ? (
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-5"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      type="submit"
                      onClick={handleEmailSubmit}
                    >
                      Verify Email
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="otp" className="block text-sm/6 font-medium text-gray-900">OTP</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8"
                      value={otp}
                      onChange={handleOtpChange}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleOtpSubmit}
                      className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    disabled={!otpValid}
                  >
                    Verify OTP
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;



