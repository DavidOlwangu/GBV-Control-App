import React, { useState } from 'react';
import {View, Text, TextInput,   TouchableOpacity, FlatList, StyleSheet, Linking,} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Contact {
  id: number;
  name: string;
  phone: string;
  relationship: string;
}

export default function EmergencyContacts(){
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Local Police',
      phone: '123',
      relationship: 'Emergency Services',
    },
    {
      id: 2,
      name: 'Domestic Violence Hotline',
      phone: '0712345678',
      relationship: 'Support Service',
    },
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relationship: '',
  });

  const [isAdding, setIsAdding] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([
        ...contacts,
        {
          id: Date.now(),
          name: newContact.name,
          phone: newContact.phone,
          relationship: newContact.relationship,
        },
      ]);
      setNewContact({
        name: '',
        phone: '',
        relationship: '',
      });
      setIsAdding(false);
      setSaveMessage('Contact saved');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <View>
        <View style={styles.contactNameContainer}>
        <AntDesign name="user" size={24} color="grey" />
          <Text style={styles.contactName}>{item.name}</Text>
        </View>
        <Text style={styles.contactRelationship}>{item.relationship}</Text>
      </View>
      <View style={styles.contactActions}>
        <TouchableOpacity
          onPress={() => handleCall(item.phone)}
          style={styles.callButton}
          accessibilityLabel={`Call ${item.name}`}
        >
          <Ionicons name="call-outline" size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteContact(item.id)}
          style={styles.deleteButton}
          accessibilityLabel={`Delete ${item.name}`}
        >
          <Ionicons name="trash-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Contacts</Text>
        <TouchableOpacity
          onPress={() => setIsAdding(!isAdding)}
          style={styles.addButton}
        >
          {isAdding ? (
            <Text style={styles.addButtonText}>Cancel</Text>
          ) : (
            <View style={styles.addButtonContent}>
              <AntDesign name="plus" size={24} color="black" />
              <Text style={styles.addButtonText}>Add</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {isAdding && (
        <View style={styles.addContactContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contact name"
            value={newContact.name}
            onChangeText={(text) => setNewContact({ ...newContact, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={newContact.phone}
            onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Friend, Family, Support Service, etc."
            value={newContact.relationship}
            onChangeText={(text) =>
              setNewContact({ ...newContact, relationship: text })
            }
          />
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={handleAddContact} style={styles.saveButton}>
              <View style={styles.saveButtonContent}>
                <AntDesign name="save" size={24} color="black" />
                <Text style={styles.saveButtonText}>Save Contact</Text>
              </View>
            </TouchableOpacity>
            {saveMessage ? <Text style={styles.saveMessage}>{saveMessage}</Text> : null}
          </View>
        </View>
      )}
      {contacts.length === 0 ? (
        <Text style={styles.noContacts}>No contacts saved yet.</Text>
      ) : (
        <FlatList
          data={contacts}
          renderItem={renderContactItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6b46c1',
  },
  addButton: {
    backgroundColor: '#7950f2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addContactContainer: {
    backgroundColor: '#ede9fe',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  saveButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveMessage: {
    color: '#22c55e',
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  contactNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    fontWeight: '500',
    marginLeft: 8,
  },
  contactRelationship: {
    fontSize: 12,
    color: '#4b5563',
    marginTop: 4,
  },
  contactActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#22c55e',
    borderRadius: 9999,
    padding: 8,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 9999,
    padding: 8,
  },
  noContacts: {
    color: '#6b7280',
    textAlign: 'center',
    paddingVertical: 16,
  },
  icon: {
    marginRight: 4,
  }
});

