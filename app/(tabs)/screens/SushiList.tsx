import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const sushiRestaurants = [
  {
    id: '1',
    name: 'Sushi House',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/960px-Sushi_platter.jpg',
    rating: 4.8,
    deliveryTime: '25-35 min',
  },
  {
    id: '2',
    name: 'Sakura Sushi',
    image: 'https://img.cybercook.com.br/imagens/receitas/62/sushi-variado.jpeg',
    rating: 4.6,
    deliveryTime: '20-30 min',
  },
];

export default function SushiList() {
  const router = useRouter();

  const handlePress = (name:string) => {
    router.push({
      pathname: '/(tabs)/screens/SushiriaSakura',
      params: {name},
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍣 Restaurantes de Sushi</Text>
      <FlatList
        data={sushiRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item.name)}>
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
