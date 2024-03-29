import React from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native'

export function Product({ name, title, price, image, material, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.material}>{material}</Text>
        <Text style={styles.price}>
          <Text style={styles.symbol}>£</Text>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '4%',
    width: '100%',
  },
  image: {
    flex: 1,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    borderRadius: 10,
    aspectRatio: 3 / 2,
  },
  infoContainer: {
    flex: 3,
    padding: 16,
    width: '50%',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  material: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '300',
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  symbol: {
    fontSize: 12,
    color: 'grey',
  },
})
