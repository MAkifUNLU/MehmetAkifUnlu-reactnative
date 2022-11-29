import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../store/store';
import { Product } from '../types';

export const DetailScreen = ({ route }: any) => {

  const products: Product[] = useAppSelector(state => state.product.products)
  
  const id = route.params.id;
  const product = products.find(item => item._id === id)

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: product?.avatar }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.detail}>      
          <View style={styles.content}>
          <Text style={{fontSize: 25}}>{product?.name}</Text>
          <Text style={{fontSize: 20}}>{product?.price} $</Text>  
          </View>
          <ScrollView>
          <Text style={styles.text}>{product?.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detail: {
    flex: 9,
    backgroundColor: 'rgba(202, 255, 235, 1)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  content: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
})
