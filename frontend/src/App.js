import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submissions, setSubmissions] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/submit`, form);
    setForm({ name: '', email: '', message: '' });
    fetchSubmissions();
  };

  // Fetch submissions from backend
  const fetchSubmissions = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/submissions`);
    setSubmissions(res.data);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        /><br />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submissions</h2>
      <ul>
        {submissions.map((s) => (
          <li key={s.id}>
            {s.name} ({s.email}): {s.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
