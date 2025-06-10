import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const chineseRestaurants = [
  {
    id: '1',
    name: 'China Box',
    image: 'https://djapa.com.br/wp-content/uploads/2024/07/lamen.jpg',
    rating: 4.4,
    deliveryTime: '30-45 min',
  },
  {
    id: '2',
    name: 'Templo Chinês',
    image: 'https://img.cybercook.com.br/imagens/receitas/212/yakisoba.jpeg',
    rating: 4.3,
    deliveryTime: '35-50 min',
  },
];

export default function ChinesaList() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🥡 Restaurantes de Comida Chinesa</Text>
      <FlatList
        data={chineseRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>⭐ {item.rating} · {item.deliveryTime}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#f2f2f2', borderRadius: 10, overflow: 'hidden' },
  image: { width: 100, height: 100 },
  info: { padding: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: '600' },
  details: { fontSize: 14, color: '#666', marginTop: 5 },
});
