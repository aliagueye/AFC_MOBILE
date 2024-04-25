import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { COLORS,SIZES } from '../../constants';
import ProductAvantageView from './ProductAvantageView';

// COntenant le code de l'affichage de la carte d'avantage en ligne  
export default function ProductRow() {
    const product = [1,2,3,4]
  return (
    <View>
      <FlatList
      data= {product}
      renderItem={({item}) => <ProductAvantageView/>}
      horizontal
      contentContainerStyle={{columnGap:SIZES.medium16}}
      />
     </View>
  );
}
