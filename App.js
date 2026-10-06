import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimeProvider } from './src/context/AnimeContext';
import ListScreen from './src/screens/ListScreen';
import { STATUS } from './src/constants/status';

const Tab = createBottomTabNavigator();

const tabs = [
  { status: STATUS.FAVORITE, empty: 'Nenhum favorito ainda. Adicione o primeiro! ❤️' },
  { status: STATUS.DISLIKE, empty: 'Nenhum anime que você não gostou.' },
  { status: STATUS.DROPPED, empty: 'Nenhum anime dropado. Que disciplina! 🚫' },
];

export default function App() {
  return (
    <AnimeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerStyle: { backgroundColor: '#6C5CE7' }, headerTintColor: '#fff' }}
        >
          {tabs.map(({ status, empty }) => (
            <Tab.Screen
              key={status.key}
              name={status.label}
              options={{
                tabBarIcon: () => <Text style={{ fontSize: 20 }}>{status.icon}</Text>,
                tabBarActiveTintColor: status.color,
              }}
            >
              {() => <ListScreen status={status.key} emptyText={empty} />}
            </Tab.Screen>
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </AnimeProvider>
  );
}