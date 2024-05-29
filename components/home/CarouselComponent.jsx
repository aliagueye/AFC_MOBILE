import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const sliderbox1 = require('./../../assets/images/sliderbox9.jpg');
const sliderbox2 = require('./../../assets/images/sliderbox2.jpg');
const sliderbox3 = require('./../../assets/images/sliderbox4.jpg');
const sliderbox4 = require('./../../assets/images/sliderbox8.jpg');
const sliderbox5 = require('./../../assets/images/coco.jpg');
const sliderbox6 = require('./../../assets/images/Bissap.jpg');
const sliderbox7 = require('./../../assets/images/Bouye.jpg');
const sliderbox8 = require('./../../assets/images/Thiakry.jpg');
const sliderbox9 = require('./../../assets/images/pouletbraise.jpg');
const sliderbox10 = require('./../../assets/images/pastelThon.jpg');

const CarouselComponent = ()=> {
    /** Reccupération des images qui seront utiles a notre sliderBox */
    const slides = [sliderbox1,sliderbox2,sliderbox3,sliderbox4,sliderbox5,
        sliderbox10,sliderbox9,sliderbox6,sliderbox7,sliderbox8
    ]

  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides}
        dotColor="black"
        inactiveDotColor="black"
        dotStyle={{height:0,width:0}}
        ImageComponentStyle={{borderRadius:15,width:"98%",marginTop:10}}
        autoplay
        circleLoop
        parentWidth={400}
        sliderBoxHeight={400}
        autoplayInterval={5000}
        />
     </View>
  );
}
export default CarouselComponent;

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center",
        marginLeft:18,
        marginRight:18

    }
})
