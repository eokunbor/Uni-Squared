import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function SectionHeader({ title, onViewMore }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onViewMore} hitSlop={8}>
        <Text style={styles.cta}>View More</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' },
  title: { 
    fontSize: 20, 
    fontWeight: '800' },
  cta: { 
    color: '#71816d', 
    fontWeight: '700' },
});
