import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { fetchCategories } from '../store/actions/categoryActions';
import { addProduct } from '../store/actions/productActions';
import { useAppDispatch, useAppSelector } from '../store/store';
import { Product, ProductBody } from '../types';

export const CreateScreen = ({ navigation }: { navigation: any }) => {

  const [_id, setId] = useState(0);
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [selectedId, setSelectedId] = useState(0);

  const dispatch = useAppDispatch()

  const categories = useAppSelector(state => state.category.categories)
  const newPro: Product = useAppSelector(state => state.product.products)

  useEffect(() => {
    dispatch(fetchCategories())
  }, []);

  const onPress = () => {
    const bodyParameters: ProductBody = {
      name: productTitle,
      price: price,
      description: description,
      avatar: link,
      category: categoryName,
      developerEmail: 'akifunlu@protonmail.com',
    };
    dispatch(addProduct(bodyParameters))
  }

  return (
    <View>
      <View style={styles.body}>
        <Text style={[styles.titleText, { opacity: productTitle.length === 0 ? 0 : 1 }]}>
          Product Title
        </Text>
        <TextInput
          placeholder="Product Title"
          value={productTitle}
          onChangeText={text => setProductTitle(text)}
          style={styles.titleInput}
        />
        <Text style={[styles.titleText, { opacity: price === 0 || null ? 0 : 1 }]}>
          Price
        </Text>
        <TextInput
          placeholder="Price"
          value={price.toString()}
          onChangeText={text => setPrice(parseInt(text))}
          style={styles.titleInput}
        />
        <Text style={[styles.titleText, { opacity: description.length === 0 ? 0 : 1 }]}>
          Description
        </Text>
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={[styles.titleInput, { height: 120, paddingBottom: 70 }]}
        />
        <Text style={[styles.titleText, { opacity: link.length === 0 ? 0 : 1 }]}>
          Image Link
        </Text>
        <TextInput
          placeholder="Image Link"
          value={link}
          onChangeText={(text) => setLink(text)}
          style={styles.titleInput}
        />
        <Text style={styles.titleText} >Selected Category: {categoryName}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            {categories.map((item: any) => (
              <TouchableOpacity
                style={styles.categoryButtons}
                onPress={() => {
                  setSelectedId(item._id);
                  setCategoryName(item.name);
                }}
                key={item._id}
              >
                <Text>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.navButton, { marginRight: 10 }]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ fontSize: 15 }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, { marginLeft: 10 }]}
            onPress={onPress}
          >
            <Text style={{ fontSize: 15 }}>Add Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  body: {
    backgroundColor: 'rgba(242,242,242,255)',
    paddingHorizontal: 5,
    paddingTop: 25,
  },
  titleText: {
    marginLeft: 15,
    marginBottom: -10,
    top: 10,
  },
  titleInput: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    marginTop: 25,
  },
  categories: {
    flexDirection: 'row',
    marginTop: 30,
  },
  categoryButtons: {
    padding: 10,
    height: 40,
    backgroundColor: 'rgba(0, 218, 255, 0.7)',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navButton: {
    width: 100,
    height: 50,
    backgroundColor: 'rgba(0, 218, 255, 0.7)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
})
