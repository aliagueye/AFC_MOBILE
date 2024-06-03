import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export default function Button({title,onPress,isValid}) {
  return (
    <TouchableOpacity 
      style={styles.BtnStyle(isValid===false? COLORS.back_afc_color:COLORS.gray1)}
      onPress={onPress}
    >
        <Text style={styles.BtnText}>{title}</Text>
    </TouchableOpacity>
  ); 
}
const styles = StyleSheet.create({
    BtnText:{
        fontFamily:"semibold",
        color:COLORS.black,
        fontSize:20,
    },
    BtnStyle:(BackgroundColor)=>({
        height:40,
        width:250,
        marginVertical:60,
        marginHorizontal:65,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        backgroundColor:BackgroundColor
    })
})