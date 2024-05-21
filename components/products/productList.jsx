import React, { useEffect, useState } from 'react';
import { View, Text,Button,StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import {Boissons, Desserts, Entrée, Plats, Veggies } from '../index'
import Burgers from '../cart/Burgers';
import styles from './ProductList.style';

const ProductList = ()=> {
  //Initialiser la liste des categories de notre Menu 
  const buttons1 = ["Entrée", "Plats", "Veggie"]
 const buttons2 = ["Burgers","Boissons","Dessert"] 
  const [selectedButton,setSelectedButton] = useState("Entrée")
  const buttonStyles = 
    {backgroundColor: COLORS.gray1, borderRadius:15}
  

  const handleButtonPress = (buttonName)=>{
    setSelectedButton(buttonName);
  }

  return (
    <SafeAreaView style={styles.container1}>
      
        <View style={styles.upper}>
            <Image
            source={{uri:'https://storage.googleapis.com/afc_corp_images/images/logo.jpg'}}
            style={styles.stretch}
            />
        </View>
        <ScrollView>
        <View style={{marginTop:10}}>
        <View style={styles.Buttoncontainer}>
          
            {buttons1.map((buttonName,index)=>
              (
                <TouchableOpacity
                key={index}
                onPress={()=>handleButtonPress(buttonName)}
                style={styles.button}
                >
                  <Text style={styles.textStyle}>{buttonName}</Text>
                </TouchableOpacity> 
                
              )
          )}</View>
          <View style={styles.Buttoncontainer}>
          {buttons2.map((buttonName,index)=>
              (<View>
                <TouchableOpacity
                key={index}
                onPress={()=>handleButtonPress(buttonName)}
                style={styles.button}
                >
                  <Text style={styles.textStyle}>{buttonName}</Text>
                </TouchableOpacity> 
                </View>
              )
          )}
        </View>
        
        {selectedButton && (
    <View >
      
      {(() => {
        switch (selectedButton) {
          case "Entrée":
            return <Entrée />;
          case "Plats":
            return <Plats />;
          case "Veggie":
            return <Veggies />;
          case "Burgers":
            return <Burgers />;
          case "Boissons":
            return <Boissons />;
          case "Dessert":
            return <Desserts />;
          default:
            return <Entrée />;
        }
      })()}
    </View>
  )}

        </View>
        </ScrollView>
    </SafeAreaView>
  );
}
export default ProductList;