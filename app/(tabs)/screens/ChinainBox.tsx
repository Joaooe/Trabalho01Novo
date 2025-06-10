import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ChinainBox = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ChinainBox</Text>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7d/Logo-china_in_china.jpg/375px-Logo-china_in_china.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>A arte da comida chinesa no seu prato!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.seriouseats.com/thmb/whMmuASIGXY98fWRQsWLtYAd6l8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20100910-duck-primary-43f6bb74c3b7490b9b6b99b643fd31f3.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>peking-duck</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.orientalmarket.pt/blog/wp-content/uploads/2019/02/dim-sum-1.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Dim sum</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://carnediem.blog/wp-content/uploads/2024/09/Hot-Pot-17.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hot pot</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://beyond-meat-cms-production.s3.us-west-2.amazonaws.com/e9dce573-eff0-4f67-80a2-8a7eb44ee9a5.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Mapo Tofu</Text>
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

export default ChinainBox;
