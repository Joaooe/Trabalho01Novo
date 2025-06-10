
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BurgerKingHighlight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Destaque do Dia: Burger King</Text>
      <Image
        source={{ uri: 'https://1000marcas.net/wp-content/uploads/2020/01/Burger-King-logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.promo}>Whopper com 30% de desconto até às 18h!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff3e0',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  logo: {
    width: 120,
    height: 120,
    marginVertical: 10,
  },
  promo: {
    fontSize: 16,
    color: '#333',
  },
});

export default BurgerKingHighlight;
