import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Pizzaria232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pizzaria 232N</Text>

      <Image
        source={{ uri: 'https://www.dimilanopizzaria.com.br/wp-content/uploads/2024/06/FILE-COM-BATATA-PALHA-optimized.png' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>As melhores pizzas da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://grupoalema.com.br/wp-content/uploads/2024/09/PIZZA-PORTUGUESA-2-scaled.jpeg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Portuguesa</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/6455572/645/img_500_1.png' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Mussarela</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://receitadeviagem.com.br/wp-content/uploads/2016/03/Pizza-de-cora%C3%A7%C3%A3o-de-galinha-Receita-de-Viagem-1024x579.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Coração</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://anamariareceitas.com.br/wp-content/uploads/2024/08/pizza-de-calabresa_1723632793345.jpg.webp' }} 
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Calabresa</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    maxWidth: 400,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default Pizzaria232n;
