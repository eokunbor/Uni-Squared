import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
export default function SectionHeader({ title, onViewMore }) {
return (
<View style={styles.row}>
<Text style={styles.title}>{title}</Text>
<Pressable
onPress={onViewMore}
hitSlop={8}
style={({ pressed }) => [
styles.fullPageWrap,
pressed && styles.fullPagePressed,
]}
>
<Text style={styles.fullPage}>View More</Text>
</Pressable>
</View>
);
}
const styles = StyleSheet.create({
row: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between'
},
title: {
fontSize: 20,
fontWeight: '800' ,
color: '#8b5e3c',
},
fullPage: {
color: '#a87955ff',
fontWeight: '700'
},
fullPageWrap: {
paddingHorizontal: 8,
paddingVertical: 4,
},
fullPagePressed: {
opacity: 0.6, // fade on press
transform: [{ scale: 0.96 }], // press-in feel
},
});