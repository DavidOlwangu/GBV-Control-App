import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const MultiFormPage = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', phone: '' });
  const [incidentInfo, setIncidentInfo] = useState({ details: '', location: '' });

  const handlePersonalSubmit = () => {
    console.log('Personal Info:', personalInfo);
  };

  const handleIncidentSubmit = () => {
    console.log('Incident Info:', incidentInfo);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Form 1: Personal Info</Text>
      <TextInput
        placeholder="Name"
        value={personalInfo.name}
        onChangeText={(text) => setPersonalInfo({ ...personalInfo, name: text })}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Phone"
        value={personalInfo.phone}
        onChangeText={(text) => setPersonalInfo({ ...personalInfo, phone: text })}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Submit Personal Info" onPress={handlePersonalSubmit} />

      <Text style={{ fontSize: 20, marginVertical: 20 }}>Form 2: Incident Details</Text>
      <TextInput
        placeholder="Details"
        value={incidentInfo.details}
        onChangeText={(text) => setIncidentInfo({ ...incidentInfo, details: text })}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        multiline
      />
      <TextInput
        placeholder="Location"
        value={incidentInfo.location}
        onChangeText={(text) => setIncidentInfo({ ...incidentInfo, location: text })}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Submit Incident Info" onPress={handleIncidentSubmit} />
    </ScrollView>
  );
};

export default MultiFormPage;