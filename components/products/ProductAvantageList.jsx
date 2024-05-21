import React from 'react';
import { View, Text,FlatList,ActivityIndicator,StyleSheet } from 'react-native';
import UseFetch from '../../hook/Usefetch';
import ProductAvantageView from './ProductAvantageView';
import { COLORS, SIZES } from '../../constants';

export default function ProductAvantageList() {
    const {data,isLoading,error} = UseFetch();

    if(isLoading){
        return(
            <View style={styles.loading}>
                <ActivityIndicator
                size={24}
                color={COLORS.gray1}
                />
            </View>
        );
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (<ProductAvantageView item={item}/>)}
      contentContainerStyle={styles.container}
      //pour pouvoir separer les liggnes lors de l'affihage 
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
     </View>
  );
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    container:{
        alignItems:"center",
        //paddinngTop: SIZES.xxLarge,
        //paddingLeft: SIZES.small14/2,
        marginTop:40
    },
    separator:{
        height:16,
    }
})