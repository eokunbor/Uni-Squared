import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// A simple card component to display club info
export default function ClubCard({ club, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress} accessibilityLabel={`${club.name}, ${club.category}`}>
      <View style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{club.name}</Text>
      <Text style={styles.subtitle} numberOfLines={2}>{club.description}</Text>
    </Pressable>
  );
}

// Visuals for club cards
const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#f1e0c5', 
    borderRadius: 12,
    borderWidth: 1, 
    borderColor: '#a2a2a2d9', 
    padding: 10 },
  image: { 
    height: 72, 
    borderRadius: 8, 
    backgroundColor: '#dce0d9', 
    marginBottom: 8 },
  title: { 
    fontWeight: '700' },
  subtitle: { 
    fontSize: 12, 
    color: '#6a7a66ff', 
    marginTop: 2 },
});
