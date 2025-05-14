import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = 'EquaGender' }: HeaderProps) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity 
          style={styles.drawerButton} 
          onPress={openDrawer}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'purple',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 1000,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    height: 60,
    paddingHorizontal: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawerButton: {
    padding: 8,
  },
});

export default Header;