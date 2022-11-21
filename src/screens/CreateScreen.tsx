// import IonIcon from '@reacticons/ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import config from '../services/config';

export const CreateScreen = () => {

  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedId, setSelectedId] = useState(0);

  const option = {
    headers: { Authorization: `Bearer ${config.token}` },
  };

  type Categories = {
    id: number;
    name: string;
  };

  useEffect(() => {
    axios
      .get<Categories[]>(config.BASE_URL + 'categories', option)
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(e => console.log('error', e));
  }, []);


  return (
    <View style={styles.container}>

      <View style={styles.body}>
        {/* <TextInput
          placeholder="Product Title"
          value={productTitle}
          onChange={text => setProductTitle(text) }
          style={styles.textInput}
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChange={(text) => setPrice(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChange={(text) => setDescription(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Image Link"
          value={link}
          onChange={(text) => setLink(text)}
          style={styles.textInput}
        /> */}
        <Text>Selected Category: </Text>
        <View style={styles.flatList}>
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="All"
          />
          <Button
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            {categories.map(item => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setSelectedId(item.id);
                }}
                key={item.id}
              >
                <Text>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Add"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  body: {
    flex: 9,
    backgroundColor: 'rgba(242,242,242,255)',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textInput: {
    margin: 40
  },
  flatList: {
    flexDirection: 'row',
  }
})
