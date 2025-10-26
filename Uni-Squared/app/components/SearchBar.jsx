import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// A search bar component with menu and filter icons
export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.wrap}>
      <Pressable hitSlop={10}><Ionicons name="menu" size={20} /></Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search for orgs"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <Pressable hitSlop={10}><Ionicons name="filter" size={18} /></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f1e0c5', 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#71816d', 
    paddingHorizontal: 10, 
    paddingVertical: 8, 
    gap: 8 
  },
  input: { flex: 1, fontSize: 14 },
});
