import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import {Ionicons,Fontisto} from '@expo/vector-icons'
import { Carousel, Heading, Welcome,ProductRow ,Temoignage,Footer} from '../components';
import { COLORS } from '../constants';
const Home = ()=> {
  return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <TouchableOpacity>
                    <Ionicons name='location-outline' size={24} color={COLORS.gray2}/>
                </TouchableOpacity>

                <Text style={styles.location}>Afri Call Food</Text>
                <View style={{alignItems:"flex-end"}}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>8</Text>
                    </View>
                    <TouchableOpacity>
                        <Fontisto name='shopping-bag' size={24} color={COLORS.gray2}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            <Welcome/>
            <Carousel/>
            <Heading/>
            <ProductRow/>
            <Temoignage/>
            <Footer/>
        </ScrollView>
    </SafeAreaView>
   
  );
}

export default Home;