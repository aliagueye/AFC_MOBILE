import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Heading.style'
import { useNavigation } from '@react-navigation/native';

const Heading = ()=>{
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.heading}>
        <Text style={styles.text1Style}> AVANTAGES </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductCardAvantageDetail')} >
            <Text style={styles.text2Style}> Tout voir </Text>
        </TouchableOpacity>
        </View>
      
     </View>
  );
}
export default Heading;
