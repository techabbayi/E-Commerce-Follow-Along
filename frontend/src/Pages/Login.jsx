import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Signin from '../components/auth/Login';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div> {/* Add margin-top */}
        <Signin />
      </div>
    </div>
  );
}

export default LoginPage;