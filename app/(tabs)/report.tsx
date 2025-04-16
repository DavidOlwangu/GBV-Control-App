'use client';

import React, { useState, ChangeEvent, FormEvent, CSSProperties } from 'react';

interface IncidentDetails {
  type: string;
  description: string;
  location?: string;
  date: string;
}

const Report: React.FC = () => {
  const [incidentDetails, setIncidentDetails] = useState<IncidentDetails>({
    type: '',
    description: '',
    location: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIncidentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', incidentDetails);
    setIsSubmitted(true);
  };

  // Inline styles
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle: CSSProperties = {
    textAlign: 'center',
    maxWidth: '500px',
    marginBottom: '30px',
  };

  const formStyle: CSSProperties = {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  };

  const groupStyle: CSSProperties = {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle: CSSProperties = {
    marginBottom: '6px',
    fontWeight: 'bold',
  };

  const inputStyle: CSSProperties = {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const textareaStyle: CSSProperties = {
    ...inputStyle,
    resize: 'vertical',
  };

  const buttonStyle: CSSProperties = {
    padding: '6px 14px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const confirmationStyle: CSSProperties = {
    backgroundColor: '#e6ffe6',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #b2ffb2',
    maxWidth: '500px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Report Gender-Based Violence</h1>
        <p>
          If you or someone you know is experiencing gender-based violence, please use this form to report the
          incident. Your information is confidential and will be handled with care.
        </p>
      </header>

      {!isSubmitted ? (
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="type">Type of Violence</label>
            <select
              id="type"
              name="type"
              value={incidentDetails.type}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select type</option>
              <option value="Physical">Physical Violence</option>
              <option value="Sexual">Sexual Violence</option>
              <option value="Emotional">Emotional Abuse</option>
              <option value="Economic">Economic Abuse</option>
              <option value="Psychological">Psychological Abuse</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="description">Incident Description</label>
            <textarea
              id="description"
              name="description"
              value={incidentDetails.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe what happened..."
              style={textareaStyle}
              required
            ></textarea>
          </div>

          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="location">Location (Optional)</label>
            <input
              type="text"
              id="location"
              name="location"
              value={incidentDetails.location}
              onChange={handleChange}
              placeholder="e.g. school, street name, home"
              style={inputStyle}
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="date">Date of Incident</label>
            <input
              type="date"
              id="date"
              name="date"
              value={incidentDetails.date}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={groupStyle}>
            <button type="submit" style={buttonStyle}>Submit Report</button>
          </div>
        </form>
      ) : (
        <div style={confirmationStyle}>
          <h2>Thank you for your submission</h2>
          <p>
            Your report has been received. Our team will review it and provide support as needed. You're not alone.
          </p>
        </div>
      )}
    </div>
  );
};

export default Report;
