import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (!name || !email) {
      alert('Please fill in both fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
      });

      alert('🎉 Registered! Token: ' + response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert('Registration failed');
      console.error(error);
    }
  };

  // 🌈 Styling
  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg,rgb(244, 149, 207),rgb(246, 163, 217))',
    fontFamily: 'Poppins, sans-serif',
    animation: 'bgRotate 10s ease infinite alternate',
  };

  const card = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    width: '90%',
    maxWidth: '450px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    color: '#fff',
    animation: 'fadeIn 1s ease',
  };

  const input = {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.4)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    outline: 'none',
  };

  const button = {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    background: '#00c6ff',
    backgroundImage: 'linear-gradient(to right, #0072ff, #00c6ff)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
  };

  const buttonHover = {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
  };

  const heading = {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '30px',
  };

  return (
    <div style={container}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bgRotate {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          input::placeholder {
            color: rgba(218, 18, 95, 0.7);
          }

          input:focus {
            border: 1px solid #fff;
            background: rgba(255,255,255,0.2);
          }

          button:hover {
            filter: brightness(1.1);
          }
        `}
      </style>

      <div style={card}>
        <h2 style={heading}>🚀 Candidate Registration</h2>

        <input
          type="text"
          placeholder="👤 Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          type="email"
          placeholder="📧 Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <button
          style={button}
          onClick={handleRegister}
          onMouseOver={(e) => (e.target.style.backgroundImage = buttonHover.backgroundImage)}
          onMouseOut={(e) => (e.target.style.backgroundImage = button.backgroundImage)}
        >
          🔐 Register Now
        </button>
      </div>
    </div>
  );
}

export default Register;
