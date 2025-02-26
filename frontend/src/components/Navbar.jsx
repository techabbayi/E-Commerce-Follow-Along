import { useNavigate } from 'react-router-dom';
import { FaUser, FaPlusCircle, FaBars } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-2xl font-semibold tracking-wide">LocalBazar.</h1>

      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Desktop buttons */}
      <div className="hidden lg:flex space-x-6">
        <button 
          onClick={() => navigate('/login')} 
          className="flex items-center bg-white text-blue-900 p-2 rounded-lg shadow-md transition duration-300 hover:bg-gray-200"
        >
          <FaUser size={20} className="mr-2" />
          Login
        </button>
        <button 
          onClick={() => navigate('/createProduct')} 
          className="flex items-center bg-blue-600 text-white p-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
        >
          <FaPlusCircle size={20} className="mr-2" />
          Add Product
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 space-y-4 lg:hidden">
          <button 
            onClick={() => navigate('/login')} 
            className="w-full flex items-center text-white text-lg p-2 rounded-lg transition duration-300 hover:bg-gray-700"
          >
            <FaUser size={20} className="mr-2" />
            Login
          </button>
          <button 
            onClick={() => navigate('/createProduct')} 
            className="w-full flex items-center text-white text-lg p-2 rounded-lg transition duration-300 hover:bg-gray-700"
          >
            <FaPlusCircle size={20} className="mr-2" />
            Add Product
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
