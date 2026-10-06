import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { STATUS_LIST } from '../constants/status';

export default function AnimeCard({ anime, onChangeStatus, onRemove }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{anime.title}</Text>
      <View style={styles.row}>
        {STATUS_LIST.map((s) => (
          <TouchableOpacity
            key={s.key}
            onPress={() => onChangeStatus(anime.id, s.key)}
            style={[
              styles.btn,
              anime.status === s.key && { backgroundColor: s.color },
            ]}
          >
            <Text style={styles.btnText}>{s.icon}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => onRemove(anime.id)} style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
          {/* <Text style={styles.btnText}>🗑️</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#222' },
  row: { flexDirection: 'row', gap: 8 },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  btnText: { fontSize: 18 },
});