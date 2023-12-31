

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    const url = `http://localhost:27000/user/signin/${encodeURIComponent(email)}/${encodeURIComponent(pwd)}`;
    axios
      .get(url)
      .then(function (response) {
        const userData = response.data; // Assuming the API response is an object containing user data
        if (userData.user_mail === email && userData.user_password === pwd) {
          alert('Login successful');
          navigate('/userhome');
        } else {
          alert('Invalid email or password');
        }
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN FORM</h2>
        <br />
        email:
        <input
          type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        password:
        <input
          type="password" value={pwd} name="email" onChange={(e) => setPwd(e.target.value)}
        />{' '}
        <br />
        <input type="submit" value="Submit" />

        <h6>Don't have an account <Link to="/userregister">Signup</Link> </h6>
      </form>
    </>
  );
}

export default Login;

