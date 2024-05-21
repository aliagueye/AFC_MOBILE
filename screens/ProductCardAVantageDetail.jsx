import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants';
import styles from './ProductCardAvantageDetail.style';
import { useNavigation } from '@react-navigation/native';
import ProductAvantageList from '../components/products/ProductAvantageList';
/** fichier contenant l'affichage de tous les avantages a partir de la liste des avantages qu'on peut 
 * avoir chez africall 
  */
export default function ProductCardAvantageDetail() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' 
                    size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.textUpperRow}> Profitez de nos avantages </Text>
            </View>
            <ProductAvantageList/>
      </View>
     </SafeAreaView>
  );
}
