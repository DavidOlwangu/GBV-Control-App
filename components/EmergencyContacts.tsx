import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { supabase } from '../lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

export default function EmergencyContacts() {
  const { user, loading: authLoading } = useAuth();

  // Default contacts that are always available
  const defaultContacts: Contact[] = [
    {
      id: 'default-1',
      name: 'Local Police',
      phone: '123',
      relationship: 'Emergency Services',
      isDefault: true,
    },
    {
      id: 'default-2',
      name: 'Domestic Violence Hotline',
      phone: '0745846180',
      relationship: 'Support Service',
      isDefault: true,
    },
  ];

  const [contacts, setContacts] = useState<Contact[]>(defaultContacts);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relationship: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const fetchContacts = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('emergency_contacts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching contacts:', error);
        Alert.alert('Error', 'Failed to load contacts');
        return;
      }

      // Combine default contacts with user's contacts
      const userContacts = data || [];
      const allContacts = [
        ...defaultContacts,
        ...userContacts.map(contact => ({
          id: contact.id,
          name: contact.name,
          phone: contact.phone,
          relationship: contact.relationship || '',
          isDefault: false,
        }))
      ];
      
      setContacts(allContacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      Alert.alert('Error', 'Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = async () => {
    if (!newContact.name.trim() || !newContact.phone.trim()) {
      Alert.alert('Error', 'Please fill in both name and phone number');
      return;
    }

    if (!user) {
      Alert.alert('Error', 'You must be logged in to add contacts');
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('emergency_contacts')
        .insert([
          {
            user_id: user.id,
            name: newContact.name.trim(),
            phone: newContact.phone.trim(),
            relationship: newContact.relationship.trim(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Error adding contact:', error);
        Alert.alert('Error', 'Failed to save contact');
        return;
      }

      // Add the new contact to the local state
      const newContactWithId: Contact = {
        id: data.id,
        name: data.name,
        phone: data.phone,
        relationship: data.relationship || '',
        isDefault: false,
      };

      setContacts([...contacts, newContactWithId]);
      setNewContact({
        name: '',
        phone: '',
        relationship: '',
      });
      setIsAdding(false);
      setSaveMessage('Contact saved successfully');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error adding contact:', error);
      Alert.alert('Error', 'Failed to save contact');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id: string, isDefault: boolean = false) => {
    // Prevent deletion of default contacts
    if (isDefault) {
      Alert.alert('Info', 'Default emergency contacts cannot be deleted');
      return;
    }

    if (!user) {
      Alert.alert('Error', 'You must be logged in to delete contacts');
      return;
    }

    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setLoading(true);
              const { error } = await supabase
                .from('emergency_contacts')
                .delete()
                .eq('id', id)
                .eq('user_id', user.id);

              if (error) {
                console.error('Error deleting contact:', error);
                Alert.alert('Error', 'Failed to delete contact');
                return;
              }

              // Remove from local state
              setContacts(contacts.filter((contact) => contact.id !== id));
            } catch (error) {
              console.error('Error deleting contact:', error);
              Alert.alert('Error', 'Failed to delete contact');
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  const handleCall = (phone: string) => {
    const phoneUrl = `tel:${phone}`;
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          Alert.alert('Error', 'Phone calls are not supported on this device');
        }
      })
      .catch((err) => console.error('Error opening phone dialer:', err));
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <View style={styles.contactNameContainer}>
          <AntDesign name="user" size={24} color="purple" />
          <Text style={styles.contactName}>{item.name}</Text>
          {item.isDefault && (
            <View style={styles.defaultBadge}>
              <Text style={styles.defaultBadgeText}>Default</Text>
            </View>
          )}
        </View>
        <Text style={styles.contactPhone}>{item.phone}</Text>
        <Text style={styles.contactRelationship}>{item.relationship}</Text>
      </View>
      <View style={styles.contactActions}>
        <TouchableOpacity
          onPress={() => handleCall(item.phone)}
          style={styles.callButton}
          accessibilityLabel={`Call ${item.name}`}
          disabled={loading}
        >
          <Ionicons name="call-outline" size={24} color="white" />
        </TouchableOpacity>
        {!item.isDefault && (
          <TouchableOpacity
            onPress={() => handleDeleteContact(item.id, item.isDefault)}
            style={styles.deleteButton}
            accessibilityLabel={`Delete ${item.name}`}
            disabled={loading}
          >
            <Ionicons name="trash-sharp" size={24} color="purple" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Emergency Contacts</Text>
        {user && (
          <TouchableOpacity
            onPress={() => setIsAdding(!isAdding)}
            style={styles.addButton}
            disabled={loading}
          >
            {isAdding ? (
              <Text style={styles.addButtonText}>Cancel</Text>
            ) : (
              <View style={styles.addButtonContent}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={styles.addButtonText}>Add</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>

      {!user && (
        <View style={styles.loginPrompt}>
            <Text style={styles.loginPromptText}>
            <Text>
              {/* "Sign in" as a link */}
              <Text
              style={{ color: '#6b46c1', textDecorationLine: 'underline' }}
              onPress={() => {
                // Navigate to Profile tab
                // Assumes you have navigation prop via useNavigation or similar
                // If not, replace with your navigation logic
                // Example for React Navigation:
                // navigation.navigate('Profile');
                // If using a tab navigator, you may need navigation.navigate('ProfileTab')
                // For this example, we'll use a global navigation ref if available
                // Replace as needed for your app
                // @ts-ignore
                if (typeof navigation !== 'undefined') {
                navigation.navigate('/(tabs)/profile');
                }
              }}
              >
              Sign in
              </Text>
              {' '}to add your own emergency contacts
            </Text>
            </Text>
        </View>
      )}

      {isAdding && user && (
        <View style={styles.addContactContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contact name"
            value={newContact.name}
            onChangeText={(text) => setNewContact({ ...newContact, name: text })}
            editable={!loading}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={newContact.phone}
            onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
            keyboardType="phone-pad"
            editable={!loading}
          />
          <TextInput
            style={styles.input}
            placeholder="Friend, Family, Support Service, etc."
            value={newContact.relationship}
            onChangeText={(text) =>
              setNewContact({ ...newContact, relationship: text })
            }
            editable={!loading}
          />
          <View style={styles.saveContainer}>
            <TouchableOpacity
              onPress={handleAddContact}
              style={[styles.saveButton, loading && styles.disabledButton]}
              disabled={loading}
            >
              <View style={styles.saveButtonContent}>
                <AntDesign name="save" size={24} color="white" />
                <Text style={styles.saveButtonText}>
                  {loading ? 'Saving...' : 'Save Contact'}
                </Text>
              </View>
            </TouchableOpacity>
            {saveMessage ? (
              <Text style={styles.saveMessage}>{saveMessage}</Text>
            ) : null}
          </View>
        </View>
      )}

      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(245, 242, 244)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 10,
    shadowColor: '#000',
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
  loginPrompt: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  loginPromptText: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
  },
  addContactContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 10,
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
  disabledButton: {
    backgroundColor: '#9ca3af',
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
    backgroundColor: 'white',
  },
  contactInfo: {
    flex: 1,
  },
  contactNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  contactName: {
    fontWeight: '500',
    marginLeft: 8,
    flex: 1,
  },
  contactPhone: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 32,
    marginBottom: 2,
  },
  contactRelationship: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 32,
  },
  defaultBadge: {
    backgroundColor: '#ddd6fe',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  defaultBadgeText: {
    fontSize: 10,
    color: '#6b46c1',
    fontWeight: '500',
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
  },
});