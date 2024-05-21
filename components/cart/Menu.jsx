import React from 'react';
import { View, Text,FlatList,ActivityIndicator,StyleSheet
,Dimensions} from 'react-native';
import UseFetch from '../../hook/Usefetch';
import ProductCardView from '../products/ProductCardView';
import { COLORS,SIZES } from '../../constants';

export default function Menu({menu}) {
  // Reccupérer les données avec UseFetch
  const {data,isLoading,error} = UseFetch(); 
  // Filtre les données selon le menu a afficher soit Entrée Plats dessert Boissons etc
  const filteredData = data.filter(item => item.supplier == menu)
  console.log(filteredData);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ProductCardView item={item} />
    </View>
  );
  return (
    <View >
        
      {isLoading?(
        <ActivityIndicator size={SIZES.large22} color={COLORS.primary}/>
      ) : error ? (
        <Text>something went wrong</Text>
      ) : (<FlatList
        numColumns={2} 
        data={filteredData}
        keyExtractor={(item)=>item._id}
        renderItem={renderItem}
        //horizontal
        contentContainerStyle={{columnGap:SIZES.large22}}
        
    />)}

      
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
   width: Dimensions.get('window').width/2 - 2 , // Moitié de la largeur de la fenêtre, avec un espace horizontal de 10 pixels entre les éléments
    marginBottom: 10,
  },
  
})
