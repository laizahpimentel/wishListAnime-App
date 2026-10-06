import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useAnimes } from '../context/AnimeContext';
import AnimeCard from '../components/AnimeCard';
import AddAnimeInput from '../components/AddAnimeInput';

export default function ListScreen({ status, emptyText }) {
  const { animes, addAnime, changeStatus, removeAnime } = useAnimes();
  const filtered = animes.filter((a) => a.status === status);

  return (
    <View style={styles.container}>
      <AddAnimeInput onAdd={(title) => addAnime(title, status)} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimeCard anime={item} onChangeStatus={changeStatus} onRemove={removeAnime} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>{emptyText}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5FA' },
  empty: { textAlign: 'center', marginTop: 40, color: '#999', fontSize: 15 },
});