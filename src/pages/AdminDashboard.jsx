import React from 'react';

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛠️ Admin Dashboard</h1>
        <p style={styles.text}>Welcome Admin! You are now in control.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #1e3c72, #2a5298)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '400px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2a5298',
  },
  text: {
    fontSize: '18px',
    color: '#555',
  },
};

export default AdminDashboard;
