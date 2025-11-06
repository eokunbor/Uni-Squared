import React, { useMemo, useState } from 'react';
import { View, Text, SectionList, FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../../components/SearchBar';
import SectionHeader from '../../components/SectionHeader';
import ClubCard from '../../components/ClubCard';
import { CATEGORIES, MOCK_BY_CATEGORY } from '../../data/clubs';
export default function HomeScreen({ navigation }) {
const [query, setQuery] = useState('');
const sections = useMemo(() => {
const q = query.trim().toLowerCase();
return CATEGORIES.map((cat) => {
const all = MOCK_BY_CATEGORY[cat] || [];
const filtered = q
? all.filter((c) =>
(c.name + ' ' + c.description + ' ' + c.category)
.toLowerCase()
.includes(q)
)
: all;
return {
title: cat,
data: filtered.length ? [{ key: 'row', items: filtered }] : [],
};
}).filter((s) => s.data.length > 0);
}, [query]);
return (
<View style={styles.container}>
{/* iOS will let this be transparent; Android uses translucent */}
<StatusBar
translucent
backgroundColor="transparent"
barStyle="dark-content"
/>
{/* put gradient BEHIND the safe area so it covers top + bottom */}
<LinearGradient
colors={['#f8f0dcff', '#F5E7C4', '#F5E7C4', '#e8c3a3ff']}
style={styles.gradient}
start={{ x: 0, y: 0 }}
end={{ x: 0, y: 1 }}
>
{/* tell SafeAreaView NOT to add top/left/right padding */}
<SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
<View style={styles.top}>
<SearchBar value={query} onChangeText={setQuery} />
</View>
<SectionList
sections={sections}
keyExtractor={(item) => item.key}
contentContainerStyle={{ paddingBottom: 32 }}
stickySectionHeadersEnabled={false}
renderSectionHeader={({ section }) => (
<View style={styles.sectionHeaderWrap}>
<SectionHeader
title={section.title}
onViewMore={() =>
navigation?.navigate?.('Category', { cat: section.title })
}
/>
</View>
)}
renderItem={({ item }) => (
<FlatList
data={item.items}
keyExtractor={(club) => club.id}
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={styles.hList}
renderItem={({ item: club }) => (
<View style={styles.hItem}>
<ClubCard
club={club}
onPress={() =>
navigation?.navigate?.('ClubDetail', { id: club.id })
}
/>
</View>
)}
/>
)}
ListEmptyComponent={
<Text style={styles.empty}>No clubs match your search.</Text>
}
/>
</SafeAreaView>
</LinearGradient>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
// make sure the root isn’t white
backgroundColor: '#f8f0dcff',
},
gradient: {
flex: 1,
},
screen: {
flex: 1,
},
top: {
padding: 16,
paddingBottom: 8,
},
sectionHeaderWrap: {
paddingHorizontal: 16,
marginTop: 8,
marginBottom: 6,
},
hList: {
paddingHorizontal: 12,
},
hItem: {
width: 180,
marginRight: 12,
},
empty: {
textAlign: 'center',
color: '#a87955ff',
marginTop: 24,
},
});