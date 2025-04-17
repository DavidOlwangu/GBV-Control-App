'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface IncidentDetails {
  type: string;
  description: string;
  location?: string;
  date: string;
}

interface SurvivorDetails {
  name: string;
  age: string;
  gender: string;
  contact: string;
  service: string;
}

interface PerpetratorDetails {
  name: string;
  relation: string;
  description: string;
}

const Report: React.FC = () => {
  const [step, setStep] = useState(1);

  const [incidentDetails, setIncidentDetails] = useState<IncidentDetails>({
    type: '',
    description: '',
    location: '',
    date: '',
  });

  const [survivorDetails, setSurvivorDetails] = useState<SurvivorDetails>({
    name: '',
    age: '',
    gender: '',
    contact: '',
    service: '',
  });

  const [perpetratorDetails, setPerpetratorDetails] = useState<PerpetratorDetails>({
    name: '',
    relation: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (step === 1) {
      setIncidentDetails((prev) => ({ ...prev, [name]: value }));
    } else if (step === 2) {
      setSurvivorDetails((prev) => ({ ...prev, [name]: value }));
    } else if (step === 3) {
      setPerpetratorDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Incident:', incidentDetails);
    console.log('Survivor:', survivorDetails);
    console.log('Perpetrator:', perpetratorDetails);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const inputStyle = {
    padding: '8px',
    fontSize: '14px',
    marginBottom: '10px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    marginRight: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'beige',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>Report Gender-Based Violence</h1>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {/* Step 1: Incident Details */}
          {step === 1 && (
            <>
              <h2>Incident Details</h2>
              <select name="type" value={incidentDetails.type} onChange={handleChange} style={inputStyle} required>
                <option value="">Type of Violence</option>
                <option value="Physical">Physical Violence</option>
                <option value="Sexual">Sexual Violence</option>
                <option value="Emotional">Emotional Abuse</option>
                <option value="Economic">Economic Abuse</option>
                <option value="Psychological">Psychological Abuse</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="description"
                placeholder="Description"
                value={incidentDetails.description}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={incidentDetails.location}
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                type="date"
                name="date"
                value={incidentDetails.date}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button type="button" onClick={nextStep} style={buttonStyle}>Next</button>
            </>
          )}

          {/* Step 2: Survivor Info */}
          {step === 2 && (
            <>
              <h2>Survivor Details</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={survivorDetails.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={survivorDetails.age}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={survivorDetails.gender}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Info"
                value={survivorDetails.contact}
                onChange={handleChange}
                style={inputStyle}
                required
              />
<select name="service" value={survivorDetails.service} onChange={handleChange} style={inputStyle} required>
                <option value="">Service Required</option>
                <option value="Medical">Medical Assistance</option>
                <option value="psycological">Psychological Support</option>
                <option value="legal">Legal aid</option>
                <option value="shelter">Shelter</option>
                <option value="police">Police Assistance</option>
                <option value="Other">Other</option>
              </select>
              <button type="button" onClick={prevStep} style={{ ...buttonStyle, backgroundColor: 'gray' }}>Back</button>
              <button type="button" onClick={nextStep} style={buttonStyle}>Next</button>
            </>
          )}

          {/* Step 3: Perpetrator Info */}
          {step === 3 && (
            <>
              <h2>Perpetrator Details</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={perpetratorDetails.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="relation"
                placeholder="Relation to survivor"
                value={perpetratorDetails.relation}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="description"
                placeholder="Details about perpetrator"
                value={perpetratorDetails.description}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button type="button" onClick={prevStep} style={{ ...buttonStyle, backgroundColor: 'gray' }}>Back</button>
              <button type="button" onClick={nextStep} style={buttonStyle}>Next</button>
            </>
          )}

          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <>
              <h2>Review & Submit</h2>
              <p><strong>Type:</strong> {incidentDetails.type}</p>
              <p><strong>Description:</strong> {incidentDetails.description}</p>
              <p><strong>Location:</strong> {incidentDetails.location}</p>
              <p><strong>Date:</strong> {incidentDetails.date}</p>

              <p><strong>Survivor:</strong> {survivorDetails.name}, {survivorDetails.age}, {survivorDetails.gender} {survivorDetails.contact}, {survivorDetails.service}</p>
              <p><strong>Perpetrator:</strong> {perpetratorDetails.name} ({perpetratorDetails.relation})</p>



              <button type="button" onClick={prevStep} style={{ ...buttonStyle, backgroundColor: 'gray' }}>Back</button>
              <button type="submit" style={buttonStyle}>Submit Report</button>
            </>
          )}
        </form>
      ) : (
        <div style={{
          backgroundColor: '#e6ffe6',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <h2>Thank you for your submission!</h2>
          <p>Your report has been received. Our team will reach out if follow-up is needed.</p>
        </div>
      )}
    </div>
  );
};

export default Report;
