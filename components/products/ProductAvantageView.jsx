import React from 'react';
import { View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ProductAvantageView.style';

const image1 = require('./../../assets/images/Pdouce.jpg')
const ProductAvantageView = ()=> {
  return (
    <View >
        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
              source={image1}
              style={styles.imageContainer}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.title}>Frites patate douce </Text>
              <Text style={styles.point}> 26 Points  </Text>
            </View>
          </View>
        </TouchableOpacity>
    </View>
  );
}
export default ProductAvantageView;
