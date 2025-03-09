import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Signup from "../components/auth/Signup";

function SignUpPage() {
  return (
    <div>
      <Navbar />
      <div> {/* Add margin-top */}
        <Signup />
      </div>
    </div>
  );
}

export default SignUpPage;