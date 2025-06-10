import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

const pizzaRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza da Vila',
    image: 'https://receitatodahora.com.br/wp-content/uploads/2024/08/pizza-portuguesa-0508.jpg',
    rating: 4.5,
    deliveryTime: '30-40 min',
  },
  {
    id: '2',
    name: 'Pizza & Pedaço',
    image: 'https://img.cybercook.com.br/imagens/receitas/387/pizza-de-calabresa.jpeg',
    rating: 4.7,
    deliveryTime: '35-45 min',
  },
  {
    id: '3',
    name: 'La Pizzeria',
    image: 'https://img.cybercook.com.br/imagens/receitas/654/pizza-de-mussarela.jpg',
    rating: 4.6,
    deliveryTime: '25-35 min',
  },
];

export default function PizzaList() {
  const router = useRouter();
  const handlePress = (name:string) => {
    router.push({
      pathname: '/(tabs)/screens/SushiList',
      params: {name},
  });
  };





  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍕 Restaurantes de Pizza</Text>

      <FlatList
        data={pizzaRestaurants}
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
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
