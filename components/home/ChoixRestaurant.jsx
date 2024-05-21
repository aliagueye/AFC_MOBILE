import React,{useState}from 'react';
import { View, Text,StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import { SIZES,COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

// definitions de liste des differents restaurants qu'on a gerer 
let id = 0;
const restaurants = [
    { id:id++, name: 'Afri Call Food - Gare Lille Flandre ' },
    {id:id++, name: 'Afri Call Food - Paris Ménilmontant ' },
    { id:id++,name: 'Afri Call Food - Paris Clichy' },
    { id:id++,name: 'Afri Call Food - Fives' },
    {id:id++, name: 'Afri Call Food - Porte Des Postes' },
    { id:id++,name: 'Afri Call Food - Roubaix' },
    { id:id++,name: 'Afri Call Food - Lens'},
    { id:id++,name: 'Afri Call Food - Arras'},
  ];

export default function ChoixRestaurant() {
    const navigation = useNavigation();
    //utiliser un state pour stocker le restaurant ou le client souhaite commander et le changer s'il faut 

    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleRestaurantPress = (restaurant) => {
        setSelectedRestaurant(restaurant);
        //console.log(restaurant)
        //  naviguer vers l'ecran des menu .
        navigation.navigate('ProductList',{restaurant})
    };

  return (
    <SafeAreaView >
           
             <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' 
                    size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.textUpperRow}> Selection du restaurant  </Text>
            </View>
            <ScrollView>
            <View style={styles.containerRest}>
                {restaurants.map(restaurant => (
                <TouchableOpacity
                onPress={() => handleRestaurantPress(restaurant)}
                style={styles.restaurantContainer}
                >
                    <Text style={styles.name}> {restaurant.name}</Text>
                </TouchableOpacity>
            ))}
            </View>
            </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.black
    },
    containerRest:{
        marginTop:30,
        alignItems:"center",
        alignSelf:"center"
    },
    upperRow:{
        width:SIZES.width - 5,
        //marginHorizontal:5,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.gray1,
        borderRadius:SIZES.large22,
        //top:SIZES.large22,
        marginTop:SIZES.medium18,
        zIndex:999
    },
    textUpperRow:{
        fontFamily:"semibold",
        fontSize:SIZES.medium18,
        marginLeft:40,
    },
    restaurantContainer:{
       margin:18,
       backgroundColor:COLORS.gray1,
       width:300,
       height:30,
       borderRadius:10
    },
    name:{
        fontFamily:"regular",
        fontSize:15,
        alignContent:"center",
        alignSelf:"center",
        alignItems:"flex-start",
        padding:5
    
    }

})