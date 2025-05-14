import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Header from '@/components/Header';

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
    <>
    

   
      <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#fff', height:'100%' }}>
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
        <TouchableOpacity onPress={handlePersonalSubmit} >
          <Text>Submit Personal Info</Text>
        </TouchableOpacity>

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
        <TouchableOpacity  onPress={handleIncidentSubmit} >
          <Text>Submit Incident Info</Text>
        </TouchableOpacity>
      </ScrollView>
      </>
  );
};

export default MultiFormPage;