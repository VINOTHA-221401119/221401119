import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [assignment, setAssignment] = useState(null);
  const [projectLink, setProjectLink] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('Not Submitted');

  const candidateId = '123456'; // ✅ Replace with actual user ID (from token/localStorage)

  useEffect(() => {
    // Simulate fetch assignment API
    const fetchAssignment = async () => {
      // Replace this with actual API call
      setAssignment({
        title: 'Campus Hiring Project',
        description: 'Build a full-stack project for candidate evaluation.',
        deadline: '2025-07-10',
      });

      // Simulate fetch submission status
      const savedSubmission = localStorage.getItem('projectLink');
      if (savedSubmission) setStatus('Saved');
    };

    fetchAssignment();
  }, []);

  const handleSubmit = async () => {
    if (!projectLink) {
      alert('Please enter your GitHub project link');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/submit', {
        candidateId,
        projectLink,
        notes,
      });

      alert(response.data.message);
      setStatus('Submitted');
      localStorage.setItem('projectLink', projectLink);
    } catch (error) {
      alert('Submission failed');
    }
  };

  if (!assignment) return <div>Loading assignment...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{assignment.title}</h2>
        <p><strong>Description:</strong> {assignment.description}</p>
        <p><strong>Deadline:</strong> {assignment.deadline}</p>
        <p><strong>Status:</strong> <span style={{ color: 'gold' }}>{status}</span></p>

        <input
          style={styles.input}
          type="text"
          placeholder="GitHub Project Link"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Submit Project
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  card: {
    backgroundColor: '#ffffffdd',
    padding: '30px',
    borderRadius: '15px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    height: '80px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0072ff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Dashboard;
