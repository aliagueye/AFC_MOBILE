import React from 'react';
import { View, Text } from 'react-native';
import styles from './welcom.style';
import { COLORS } from '../../constants';
 
const Welcome = ()=> {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomText1}>AFRICAIN OUI, MAIS PAS QUE...</Text>
      <Text style={styles.welcomText2}>
        UN CONCEPT UNIQUE QUI ALLIE RESTAURATION RAPIDE, STREET FOOD
        ET CUISINE AUTHENTIQUE.
      </Text>
     </View>
  );
}
export default Welcome; 
