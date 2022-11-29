import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { fetchProducts } from '../store/actions/productActions';
import { fetchCategories } from '../store/actions/categoryActions';
import { Category, Product } from '../types';
import { useAppDispatch, useAppSelector } from '../store/store';

export const HomeScreen = ({ navigation }: { navigation: any }) => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, []);

  const rawProducts: Product[] = useAppSelector(state => state.product.products)
  const categories: Category[] = useAppSelector(state => state.category.categories)


export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Image style={styles.tinyLogo}
          source={require('../images/UPaymentsStore.png')} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setFilteredName('')
              }}
            >
              <Text>
                All
              </Text>
            </TouchableOpacity>
            {categories.map(item => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setFilteredName(item.name);
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
      </View>
      <View style={styles.body}>
        <Text> Home screen</Text>
      </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Create')}
        >
          <Text style={{ fontSize: 25 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: '50%',
    height: '50%',
    marginTop: 15,
    marginBottom: -5,
    resizeMode: 'contain',
  },
  categories: {
    flexDirection: 'row'
  },
  button: {
    padding: 10,
    backgroundColor: 'rgba(0, 218, 255, 0.7)',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  body: {
    flex: 9,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'stretch',
    width: 170,
    height: 190,
    backgroundColor: 'white',
    borderColor: '#f2f2f2',
    elevation: 5,
    margin: 5,
  },
  image: {
    width: 110,
    height: 150,
    resizeMode: 'contain'
  },
  textBar: {
    flex: 1,
    backgroundColor: 'rgba(202, 255, 235, 1)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 218, 255, 1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    position: 'absolute',
    top: '85%'
  },
})