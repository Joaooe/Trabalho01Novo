import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SushiriaSakura = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sushiria Sakura</Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH3w_zC3ky1DKpxWeDABC-4IsAK1uJudqNA&s' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>A arte do sushi no seu prato!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.fromnorway.com/globalassets/recipes/salmon/sushi-nigirisalmon.jpg?width=900&height=789&transform=downFill&hash=79707519d7d2c040adc02b0726d134de' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Nigiri Sushi</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2008/05/temaki_salmao.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Temaki de Salmão</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/111f98f6130992942a4edb8b01d8011a_XL.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Uramaki</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/hot-philadelphia-1-730x480.jpeg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hot Roll</Text>
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
    color: '#c0392b',
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

export default SushiriaSakura;
