import React from 'react';
import { View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ProductAvantageView.style';
import { useNavigation } from '@react-navigation/native';

const image1 = require('./../../assets/images/Pdouce.jpg')
const image2 = require('./../../assets/images/Wrap.jpg')



const ProductAvantageView = ({item})=> {
  // Pour pouvoir naviguer vers la page de visualisation des details sur les avantages
  const navigation = useNavigation();
  return (
    /*<View >
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
   
  );*/
  <View>
      <TouchableOpacity onPress={()=>navigation.navigate("AvantagePaiement",{item})}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                    source={{uri:item.imageUrl}}
                    style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>  
                    <Text style={styles.point}>{item.product_points}</Text>
                </View>

            </View>
      </TouchableOpacity>
     </View>
  )
}
export default ProductAvantageView;
