import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HamburgueriaSabor = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hamburgueria </Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVLYPA2AALXGb4-LjbXfUwAmtdsKFOC4KBXJ0hJOfvJM4Q6bEpDx858GirSgKUQYAoFg&usqp=CAU' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>O sabor do hambúrguer artesanal!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'http://burguerlovers.com/wp-content/uploads/2016/09/cheese-burger-burgerlovers2.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Clássico Cheeseburger</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyY2WbceJW6QFL_CTE-MTHAbU7V8BVyObunA&s' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Bacon Supreme</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.vice.com/wp-content/uploads/sites/2/2019/06/1560537773182-veggie-delite-defense.jpeg?resize=1536,853' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Veggie Delight</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://sachefmio.blob.core.windows.net/fotos/double-smash-448b7b9c-3b36-41a1-8ca0-795c0bea6f40.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Double Smash</Text>
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

export default HamburgueriaSabor;
