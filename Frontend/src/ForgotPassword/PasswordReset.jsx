import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailContext } from '../context/emailContext';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { email } = useEmailContext(); // Get the email from context

  // Handle changes for the new password
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle changes for the confirm password
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle password reset logic
  const handleResetPassword = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (newPassword === confirmPassword) {
      try {
        // Send the password reset request to the backend
        const response = await fetch('http://localhost:8002/reset-password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email, // Use the email from context
            confirmPassword, // Send the new password
          }),
        });

        const result = await response.json();

        // Check if the reset was successful
        if (response.ok) {
          alert('Password Reset Successful');
          navigate('/login'); // Redirect to login page
        } else {
          alert(result.message || 'Failed to reset password');
        }
      } catch (err) {
        console.error('Error resetting password:', err);
        alert('An error occurred while resetting your password');
      }
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="w-full flex mx-20 mt-20">
      <div className="w-5/12 h-120 py-12 bg-blue-500 ml-60 flex flex-column">
        <div className="min-h-full flex-col justify-center px-6 py-0 lg:px-8">
          <div className="mb-5 text-3xl text-white font-bold">Hurray!</div>
          <div className="mb-35 text-xl text-gray-300">Now you can reset your password</div>
          <div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Password Reset"
            />
          </div>
        </div>
      </div>
      <div className="w-8/12 h-120 py-2 bg-white-500 mr-100">
        <div className="flex min-h-full flex-col justify-center px-6 py-0 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Forgot Password?</h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    value={email}
                    disabled // Email should be read-only as it's passed via context
                  />
                </div>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-900">New Password</label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    autoComplete="newPassword"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
