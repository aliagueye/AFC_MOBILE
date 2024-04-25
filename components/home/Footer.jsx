import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { SIZES } from '../../constants';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHor}>
        <Ionicons name='time-outline' size={60} />
      </View>
      <View >
        <Text style={styles.textStyle1}> NOS HORRAIRES </Text>
        <Text style={styles.textStyle2}>Tous les jours: 11H30 - 23H30  </Text>
        <Text style={styles.textStyle2}>Sauf le Vendredi: 15H00 - 23H30   </Text>
      </View>
     </View>
  );
}
const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.medium16,
    },
    containerHor:{
        alignItems:"center"
    },
    textStyle1:{
        fontFamily:"semibold",
        fontSize: SIZES.large22,
        marginLeft:110
    },
    textStyle2:{
        fontFamily:"regular",
        fontSize: SIZES.large22,
        marginLeft:30
    }
})