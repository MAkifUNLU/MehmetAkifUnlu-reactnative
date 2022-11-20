// import IonIcon from '@reacticons/ionicons';
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.header}>UPayments Store</Text>
        {/* <IonIcon style={styles.icon} name="search-sharp" /> */}
        <View style={styles.a}>
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
          color="white"
          onPress={() => Alert.alert('Simple Button pressed')}
          title="Furnitures"
        />
         <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          title="Electronics"
        />
        </View>
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