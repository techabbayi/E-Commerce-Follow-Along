import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidationFormObject from "../../../validation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(null); // State for avatar image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const navigate = useNavigate();

  // Avatar validation
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    
    if (file && validFormats.includes(file.type)) {
      setAvatar(URL.createObjectURL(file)); // Preview the avatar image
    } else {
      setError("Please upload a valid image (jpg, jpeg, png).");
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    const nameValidation = ValidationFormObject.validteName(name);
    if (nameValidation !== true) {
      setError(nameValidation);
      return;
    }

    // Validate email
    const emailValidation = ValidationFormObject.validteEmail(email);
    if (emailValidation !== true) {
      setError(emailValidation);
      return;
    }

    // Validate password
    const passwordValidation = ValidationFormObject.validtePass(password);
    if (passwordValidation !== true) {
      setError(passwordValidation);
      return;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If avatar is uploaded, it's optional, but check if file exists
    if (!avatar) {
      setError("Please upload an avatar.");
      return;
    }

    setError(""); // Clear any previous errors
    alert("Account created successfully!");
    navigate("/login");
  };

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-teal-500 flex justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="w-full sm:max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create an Account
        </h2>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="confirm-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Avatar Upload */}
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
              Upload your Avatar
            </label>
            <div className="mt-1">
              <input
                type="file"
                name="avatar"
                accept=".jpg, .jpeg, .png"
                onChange={handleAvatarChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              />
            </div>
            {/* Avatar preview */}
            {avatar && (
              <div className="mt-2 text-center">
                <img
                  src={avatar}
                  alt="Avatar Preview"
                  className="w-32 h-32 object-cover rounded-full mx-auto cursor-pointer"
                  onClick={openModal} // Open modal when clicked
                />
              </div>
            )}
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>
        

        {/* Login link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login" // Navigate to login page
              className="font-medium text-green-600 hover:text-green-500"
            >
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Modal for avatar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-96 h-96 object-cover rounded-md"
            />
            <button
              className="mt-4 text-red-500"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
