import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// A simple card component to display club info
export default function ClubCard({ club, onPress }) {
  return (
	<Pressable
	  onPress={onPress}
	  accessibilityLabel={`${club.name}, ${club.category}`}
	  // This gives opacity feedback while pressed
	  style={({ pressed }) => [
		styles.card,
		pressed && { opacity: 0.6 }, // fade effect when pressed
	  ]}
	>
	  <View style={styles.image} />
	  <Text style={styles.title} numberOfLines={1}>{club.name}</Text>
	  <Text style={styles.subtitle} numberOfLines={2}>{club.description}</Text>
	</Pressable>
  );
}
// Visuals for club cards
const styles = StyleSheet.create({
  card: {
	backgroundColor: '#fff5ddff',
	borderRadius: 12,
	borderWidth: 1,
	borderColor: '#e6dbc2ff',
	padding: 10,
	shadowColor: '#000',
	shadowOpacity: 0.05,
	shadowOffset: { width: 0, height: 2 },
	shadowRadius: 3,
	elevation: 2, // for Android shadow
  },
  image: {
	height: 72,
	borderRadius: 8,
	backgroundColor: '#e6d6abff',
	marginBottom: 8
  },
  title: {
	fontWeight: '700',
	color: '#8b5e3c',
  },
  subtitle: {
	fontSize: 12,
	color: '#a87955ff',
	marginTop: 2
  },
});