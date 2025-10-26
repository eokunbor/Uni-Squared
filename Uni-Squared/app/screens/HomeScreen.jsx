import React, { useMemo, useState } from 'react';
import { View, Text, SectionList, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import ClubCard from '../components/ClubCard';
import { CATEGORIES, MOCK_BY_CATEGORY } from '../data/clubs';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');

  // Build sections from your data shape
  const sections = useMemo(() => {
    // MOCK_BY_CATEGORY is like: { Cultural: [...clubs], "Greek Life": [...], ... }
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

      
      // We put a single placeholder item; renderItem will render the horizontal FlatList once.
      return {
        title: cat,
        data: filtered.length ? [{ key: 'row', items: filtered }] : [], // empty section will be skipped
      };
    }).filter((s) => s.data.length > 0);
  }, [query]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.top}>
        <SearchBar value={query} onChangeText={setQuery} />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingBottom: 24 }}
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
        renderItem={({ item, section }) => {
          const items = item.items;
          return (
            <FlatList
              data={items}
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
              initialNumToRender={6}
              windowSize={7}
              maxToRenderPerBatch={10}
              removeClippedSubviews
            />
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>No clubs match your search.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: '#c9b79c' 
  },
  top: { 
    padding: 16, 
    paddingBottom: 8 
  },
  sectionHeaderWrap: { 
    paddingHorizontal: 16, 
    marginTop: 8, 
    marginBottom: 6 
  },
  hList: { 
    paddingHorizontal: 12 
  },
  hItem: { 
    width: 180, 
    marginRight: 12 
  },
  empty: { 
    textAlign: 'center', 
    color: '#71816d', 
    marginTop: 24 },
});
