import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@anime_wishlist';
const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Carrega ao abrir o app
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => data && setAnimes(JSON.parse(data)))
      .finally(() => setLoaded(true));
  }, []);

  // Salva sempre que a lista mudar
  useEffect(() => {
    if (loaded) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(animes));
  }, [animes, loaded]);

  const addAnime = (title, status) => {
    const clean = title.trim();
    if (!clean) return;
    setAnimes((prev) => [
      { id: Date.now().toString(), title: clean, status, year: new Date().getFullYear() },
      ...prev,
    ]);
  };

  const changeStatus = (id, status) =>
    setAnimes((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));

  const removeAnime = (id) => setAnimes((prev) => prev.filter((a) => a.id !== id));

  return (
    <AnimeContext.Provider value={{ animes, addAnime, changeStatus, removeAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}

export const useAnimes = () => useContext(AnimeContext);