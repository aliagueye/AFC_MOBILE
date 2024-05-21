import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChoixRestaurant } from '../components';
import { COLORS } from '../constants';

export default function Commander() {
  return (
    <SafeAreaView style={styles.container}>
      <ChoixRestaurant/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.back_afc_color
    }
})