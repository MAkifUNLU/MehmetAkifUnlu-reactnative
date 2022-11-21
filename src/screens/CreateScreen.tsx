// import IonIcon from '@reacticons/ionicons';
import React, { ChangeEvent, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const CreateScreen = () => {

  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');


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
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Accessories"
          />
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Womens-Clothings"
          />
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Furnitures"
          />
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Electronics"
          />
        </View>
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
