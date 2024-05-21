import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { SIZES } from '../../constants';

const sliderbox1 = require('./../../assets/images/sliderbox6.jpg');
const sliderbox2 = require('./../../assets/images/avis7.jpg');
const sliderbox3 = require('./../../assets/images/avis3.jpg');
const sliderbox4 = require('./../../assets/images/avis4.jpg');
const sliderbox5 = require('./../../assets/images/avis5.jpg');
const sliderbox6 = require('./../../assets/images/avis6.jpg');

export default function Temoignage() {

    /** Reccupération des images qui seront utiles a notre sliderBox */
    const slides = [sliderbox1,sliderbox2,sliderbox3,sliderbox4,sliderbox5,
        ]

  return (
    <View style={styles.container}> 
        <View>
            <Text style={styles.textStyle}>Ils nous font confiance </Text>
        </View>
        <View style={styles.carouselContainer}> 
            <SliderBox
            images={slides}
            dotColor="black"
            inactiveDotColor="black"
            dotStyle={{height:0,width:0}}
            ImageComponentStyle={{borderRadius:10,width:"95%",marginTop:0,flex:1}}
            autoplay
            circleLoop
            parentWidth={400}
            sliderBoxHeight={500}
            autoplayInterval={5000}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center",
        //marginLeft:18,
        //marginRight:18

    },
    container:{
        marginTop:SIZES.small14
    },
    textStyle:{
        fontFamily:"semibold",
        fontSize:SIZES.xLarge24,
        marginLeft:10
    }
})