import React from 'react';
import { View, Text, FlatList,ActivityIndicator,StyleSheet} from 'react-native';
import { COLORS,SIZES } from '../../constants';
import ProductAvantageView from './ProductAvantageView';
import UseFetch from '../../hook/Usefetch'
import styles from './ProductAvantageView.style';

// COntenant le code de l'affichage de la carte d'avantage en ligne  
export default function ProductRow() {
    const product = [1,2,3,4]
    const {data,isLoading,error} = UseFetch();  
  return (
    /*<View>
      <FlatList
      data= {product}
      renderItem={({item}) => <ProductAvantageView/>}
      horizontal
      contentContainerStyle={{columnGap:SIZES.medium16}}
      />
     </View>*/

     // utiliser Usefetch pour pouvoir reccuperer les données depuis notre API
     <View >
        <View >
      {isLoading?(
        <ActivityIndicator size={SIZES.large22} color={COLORS.primary}/>
      ) : error ? (
        <Text>something went wrong</Text>
      ) : (<FlatList
        data={data}
        keyExtractor={(item)=>item.createdAt}
        renderItem={({item})=><ProductAvantageView item={item}/>}
        horizontal
        contentContainerStyle={{columnGap:SIZES.medium16}}
        //initialNumToRender={2}
    />)}

     </View>   
    </View>

     
  );
}
const s = StyleSheet.create({
  container:{
      marginTop:SIZES.medium16,
       marginLeft:12
  }
});
