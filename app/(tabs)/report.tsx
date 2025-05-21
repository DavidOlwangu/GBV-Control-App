import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import Header from '@/components/Header';

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

export default function ReportScreen(){
  const navigation = useNavigation();
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (field: string, value: string) => {
    if (step === 1) {
      setIncidentDetails((prev) => ({ ...prev, [field]: value }));
    } else if (step === 2) {
      setSurvivorDetails((prev) => ({ ...prev, [field]: value }));
    } else if (step === 3) {
      setPerpetratorDetails((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = () => {
    console.log('Incident:', incidentDetails);
    console.log('Survivor:', survivorDetails);
    console.log('Perpetrator:', perpetratorDetails);
    setIsSubmitted(true);
    Alert.alert('Report Submitted', 'Thank you for your submission.');
  };

  const resetForm = () => {
    setIncidentDetails({ type: '', description: '', location: '', date: '' });
    setSurvivorDetails({ name: '', age: '', gender: '', contact: '', service: '' });
    setPerpetratorDetails({ name: '', relation: '', description: '' });
    setStep(1);
    setIsSubmitted(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.heading}>Incident Details</Text>
            <Picker
              selectedValue={incidentDetails.type}
              onValueChange={(value) => handleChange('type', value)}
              style={styles.input}
            >
              <Picker.Item label="Type of Violence" value="" />
              <Picker.Item label="Physical Violence" value="Physical" />
              <Picker.Item label="Sexual Violence" value="Sexual" />
              <Picker.Item label="Emotional Abuse" value="Emotional" />
              <Picker.Item label="Economic Abuse" value="Economic" />
              <Picker.Item label="Psychological Abuse" value="Psychological" />
              <Picker.Item label="Other" value="Other" />
            </Picker>

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={incidentDetails.description}
              multiline
              onChangeText={(text) => handleChange('description', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={incidentDetails.location}
              onChangeText={(text) => handleChange('location', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date (YYYY-MM-DD)"
              value={incidentDetails.date}
              onChangeText={(text) => handleChange('date', text)}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.heading}>Survivor Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={survivorDetails.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              keyboardType="numeric"
              value={survivorDetails.age}
              onChangeText={(text) => handleChange('age', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={survivorDetails.gender}
              onChangeText={(text) => handleChange('gender', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Info"
              value={survivorDetails.contact}
              onChangeText={(text) => handleChange('contact', text)}
            />
            <Picker
              selectedValue={survivorDetails.service}
              onValueChange={(value) => handleChange('service', value)}
              style={styles.input}
            >
              <Picker.Item label="Service Required" value="" />
              <Picker.Item label="Medical Assistance" value="Medical" />
              <Picker.Item label="Psychological Support" value="psychological" />
              <Picker.Item label="Legal Aid" value="legal" />
              <Picker.Item label="Shelter" value="shelter" />
              <Picker.Item label="Police Assistance" value="police" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.heading}>Perpetrator Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={perpetratorDetails.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Relation to Survivor"
              value={perpetratorDetails.relation}
              onChangeText={(text) => handleChange('relation', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Details about Perpetrator"
              value={perpetratorDetails.description}
              multiline
              onChangeText={(text) => handleChange('description', text)}
            />
          </>
        );
      case 4:
        return (
          <>
            <Text style={styles.heading}>Review & Submit</Text>
            <Text>Type: {incidentDetails.type}</Text>
            <Text>Description: {incidentDetails.description}</Text>
            <Text>Location: {incidentDetails.location}</Text>
            <Text>Date: {incidentDetails.date}</Text>

            <Text style={styles.heading}>Survivor</Text>
            <Text>Name: {survivorDetails.name}</Text>
            <Text>Age: {survivorDetails.age}</Text>
            <Text>Gender: {survivorDetails.gender}</Text>
            <Text>Contact: {survivorDetails.contact}</Text>
            <Text>Service Required: {survivorDetails.service}</Text>

            <Text style={styles.heading}>Perpetrator</Text>
            <Text>Name: {perpetratorDetails.name}</Text>
            <Text>Relation: {perpetratorDetails.relation}</Text>
            <Text>Description: {perpetratorDetails.description}</Text>
          </>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header/>
      
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formBox}>
          <Text style={styles.title}>Report GBV Case</Text>
          {isSubmitted ? (
            <View style={styles.successBox}>
              <Text style={styles.heading}>Thank you for your submission!</Text>
              <Text>Your report has been received. We will contact you if needed.</Text>
              <Button title="Submit Another Report" onPress={resetForm} />
              <Button title="Go Home" onPress={() => navigation.navigate('index')} />
            </View>
          ) : (
            <>
              {renderStep()}
              <View style={styles.buttonContainer}>
                {step > 1 && <Button title="Back" onPress={() => setStep(step - 1)} />}
                {step < 4 ? (
                  <Button title="Next" onPress={() => setStep(step + 1)} />
                ) : (
                  <Button title="Submit" onPress={handleSubmit} />
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  formBox: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#D8BFD8',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    fontWeight:'bold',
    borderColor: 'blue',
    borderRadius: 4,
    padding: Platform.OS === 'ios' ? 12 : 8,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
  successBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
});
