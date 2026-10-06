import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


//tela principal
export default function AddAnimeInput({ onAdd }) {
  const [text, setText] = useState('');

  const submit = () => {
    onAdd(text);
    setText('');
  };

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Nome do anime..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={submit}
      />
      <TouchableOpacity style={styles.btn} onPress={submit}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flexDirection: 'row', margin: 16, gap: 8 },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    elevation: 1,
  },
  btn: {
    backgroundColor: '#6C5CE7',
    width: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: '#fff', fontSize: 26 },
});