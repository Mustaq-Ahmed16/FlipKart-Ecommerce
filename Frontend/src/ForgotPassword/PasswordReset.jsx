import React, { useState } from 'react';
import UserData from '../Data/UserData';
import { useNavigate, useParams } from 'react-router-dom';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    if (newPassword == confirmPassword) {
      const user = UserData.find((item) => item.userId == id);
      console.log(user)
      console.log(id)
      if (user) {
        setUpdatedPassword(confirmPassword);
        user.password = updatedPassword;
        alert('Password Reset Successful');
        navigate('/login');
      } else {
        alert('User not found!');
      }
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <>
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
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
                  </div>
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
                    onClick={handleResetPassword}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;


