import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/login', { email });
      alert('Login Successful! Token: ' + res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Candidate Login</h2>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <p style={styles.footer}>
          New here?{' '}
          <span style={styles.link} onClick={() => navigate('/register')}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px 30px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '30px',
    color: '#ffffff',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
  },
  button: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
  },
  link: {
    color: '#ffd700',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Login;
