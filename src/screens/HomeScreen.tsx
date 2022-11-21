// import IonIcon from '@reacticons/ionicons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import config from '../services/config';

export const HomeScreen = ({ navigation }: { navigation: any }) => {

  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedId, setSelectedId] = useState(0);

  type Categories = {
    name: string,
    id: number
  }

  const option = {
    headers: { Authorization: `Bearer ${config.token}` },
  };

  useEffect(() => {
    axios
      .get<Categories[]>(config.BASE_URL + 'categories', option)
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(e => console.log('error', e));
  }, []);

  const selectedCategory = categories.find(categoryName => {
    return product.map(item => item.category === categoryName.name);
  });

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.header}>UPayments Store</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            {categories.map(item => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setSelectedId(item.id);
                  selectedCategory
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
      </View>
      <View style={styles.body}>
        <Text> Home screen</Text>
      </View>
      <View style={styles.footer}>
        <Text> Footer</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  navigation: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'rgba(242,242,242,255)',
  },
  body: {
    flex: 9,
    backgroundColor: 'rgba(242,242,242,255)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  header: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
  },
  icon: {
    fontSize: 40,
    flexBasis: 40,
  },
  a: {
    flexDirection: 'row'
  },
})