import React from 'react';
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  Linking,
  Pressable,
  StyleSheet,
} from 'react-native';

const emergencyResources = [
  {
    title: 'National GBV Hotline',
    description: '24/7 confidential support for GBV survivors.',
    contact: '0800 720 186',
  },
];

const healthResources = [
  {
    title: 'Government Health Facilities',
    description: 'Free medical treatment and trauma counseling for GBV survivors.',
  },
  {
    title: 'GVRC (Gender-Based Violence Recovery Centre)',
    description: 'Comprehensive medical, psychosocial, and legal support.',
    link: 'https://gvrc.or.ke/',
  },
];

const legalResources = [
  {
    title: 'FIDA Kenya',
    description: 'Provides legal aid and protection services for women and children.',
    link: 'https://fidakenya.org',
  },
];

const educationalResources = [
  {
    title: 'UN Women - Ending Violence Against Women',
    description: 'Educational material and global initiatives against GBV.',
    link: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women',
  },
];

const localOrganizations = [
  {
    title: 'Coast Women in Development',
    description: 'Empowering women through education and advocacy against GBV in Mombasa.',
    link: 'https://www.networklearning.org/100-network-learnings-blog/news-from-ngos/205-combating-gender-based-violence-in-mombasa',
  },
  {
    title: 'SOLWODI Mombasa',
    description: 'Supports women and girls in distress, focusing on victims of human trafficking and forced marriages.',
    link: 'https://www.enableme.ke/en/article/gender-based-violence-rescue-centres-in-kenya-9338',
  },
  {
    title: 'Haki Yetu Organization',
    description: 'Advocates for the rights of marginalized communities in Mombasa, including GBV survivors.',
    link: 'https://hakiyetu.ke/',
  },
  {
    title: 'Human Rights Agenda (HURIA)',
    description: 'Promotes human rights and legal support for GBV victims in the coastal region.',
    link: 'https://huria.ngo/',
  },
  {
    title: 'Muslims for Human Rights (MUHURI)',
    description: 'Focuses on human rights advocacy and legal assistance in Mombasa.',
    link: 'https://muhuri.org/',
  },
  {
    title: 'Pema Kenya',
    description: 'Advances social inclusion and human rights, working with diverse communities.',
    link: 'https://pemakenya.org/',
  },
  {
    title: 'Girls For Girls Africa Mental Health Foundation',
    description: 'Provides mental health, educational, and legal support to GBV survivors.',
    link: 'https://embermentalhealth.org/ourCohorts/girls-for-girls',
  },
];

export default function ResourcesScreen() {
  const { width } = useWindowDimensions();
  const isSmall = width < 500;
  const isTablet = width >= 768;

  const renderResource = (item: any, index: number) => (
    <View key={index} style={[styles.card, isTablet && styles.cardTablet]}>
      <Text style={[styles.cardTitle, isSmall && { fontSize: 18 }]}>{item.title}</Text>
      <Text style={[styles.cardText, isSmall && { fontSize: 16 }]}>{item.description}</Text>
      {item.contact && (
        <Text style={styles.contact}>📞 {item.contact}</Text>
      )}
      {item.link && (
        <Pressable onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.link}>🔗 Visit Website</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
      <Text style={[styles.heading, isSmall && { fontSize: 22 }]}>
        Understanding Gender-Based Violence (GBV)
      </Text>
      <Text style={[styles.description, isSmall && { fontSize: 16 }]}>
        It encompasses harmful acts directed at individuals based on their gender. It includes
        physical, emotional, sexual, and economic abuse. To combat GBV:
        {"\n"}• Respect others' rights and dignity.
        {"\n"}• Speak out against injustice.
        {"\n"}• Support survivors and provide safe spaces.
        {"\n"}• Educate communities on equality and non-violence.
        {"\n"}{"\n"}Together, we can build a society free from GBV.
      </Text>

      <Text style={styles.sectionTitle}>Emergency Support</Text>
      {emergencyResources.map(renderResource)}

      <Text style={styles.sectionTitle}>Health Services</Text>
      {healthResources.map(renderResource)}

      <Text style={styles.sectionTitle}>Legal Aid</Text>
      {legalResources.map(renderResource)}

      <Text style={styles.sectionTitle}>Education & Awareness</Text>
      {educationalResources.map(renderResource)}

      <Text style={styles.sectionTitle}>Local organizations within Mombasa</Text>
      {localOrganizations.map(renderResource)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f7f9',
  },
  containerTablet: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#444',
    marginBottom: 24,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 800,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTablet: {
    width: '80%',
    maxWidth: 700,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  cardText: {
    marginTop: 6,
    fontSize: 17,
    color: '#555',
    lineHeight: 22,
  },
  contact: {
    marginTop: 6,
    fontSize: 16,
    color: 'teal',
    fontWeight: '500',
  },
  link: {
    marginTop: 8,
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
