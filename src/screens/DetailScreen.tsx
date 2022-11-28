import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {useSelector} from 'react-redux'
import { Product } from '../types';

export const DetailScreen = ({route}: any) => {
  const id = route.params.id;
  const products: Product[] = useSelector(state => state.product.products)
  const product = products.find(item => item._id === id)


  return (
    <View style={styles.container}>
      <View style={styles.image}>

            <Image
              source={{ uri: product.avatar }}
              style={{width: 100, height: 100}}
            />

      </View>
      <View style={styles.detail}>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    flex: 9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detail: {
    flex: 9,
    backgroundColor: 'rgba(202, 255, 235, 1)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  text: {
    fontSize: 20
  },
  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  content: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center'
  },
})
