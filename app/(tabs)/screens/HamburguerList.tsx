import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const burgerRestaurants = [
  {
    id: '1',
    name: 'Burger King',
    image: 'https://receitas.wap.ind.br/wp-content/uploads/2024/03/Receita-de-hamburguer-na-air-fryer-1080x640.jpg',
    rating: 4.2,
    deliveryTime: '20-30 min',
  },
  {
    id: '2',
    name: 'Hamburguer do Zé',
    image: 'https://img.cybercook.com.br/imagens/receitas/295/hamburguer-caseiro.jpeg',
    rating: 4.4,
    deliveryTime: '25-35 min',
  },
];

export default function HamburguerList() {

  const router = useRouter();
  const handlePress = (name:string) => {
    router.push({
      pathname: '/(tabs)/screens/SushiList',
      params: {name},
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍔 Restaurantes de Hambúrguer</Text>
      <FlatList
        data={burgerRestaurants}
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
