import React from 'react';
import { View, Text ,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ProductCardView.style'

export default function ProductCardView({item}) {

  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{item})}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                    source={{uri:item.imageUrl}}
                    style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.supplier} numberOfLines={10}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>

                </View>
            </View>
      </TouchableOpacity>
     </View>
  );
}
