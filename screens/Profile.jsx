import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './Profile.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import {Feather,Ionicons,MaterialCommunityIcons,AntDesign,SimpleLineIcons} from '@expo/vector-icons';

const Profile = ({navigation})=>{
  // creer un state pour gerer les données de l'utilisateur
  const [userData,setUserData]  = useState(null);
// un state pour savoir si l'utilisateur est connecté ou pas 
  const [userLogin,setUserLogin] = useState(false);

  // fonction qui gére la deconnexion de l'utilisateur
  const logout=()=>{
    Alert.alert(
      "Se déconnecter","Voulez-vous vous deconnectez ?",
      [
        {
          text:"Retour", onPress:()=>{}
        },
        {
          text:"Continuer", onPress:()=>navigation.navigate('Login')
        }
        
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <View>
          <StatusBar backgroundColor={COLORS.gray1}/>
        </View>
        
        <View style={styles.profileContainer}>
            <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.profile}
            />
            
        </View>
      
        <View style={styles.infoUser}>
          <Text style={styles.name}>
            {userLogin===true? "Maxime":"Veillez vous connecter à votre compte "}
          </Text>
          {userLogin===false ? (
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                <View style={styles.loginBtn}>
                <Feather name="mail" size={20} color="black" style={{marginLeft:10}}/>
                  <Text style={styles.loginText}>L O G I N</Text>
                </View>
            </TouchableOpacity>
            ):(
            <View style={styles.loginBtn}>
              <Feather name="mail" size={20} color="black" style={{marginLeft:10}}/>
              <Text style={styles.loginText}>maximeDuponnt2024@gmmail.com</Text>
            </View>
          )
          }

          {userLogin===false ? (
            <View ></View>
            ):(
            <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
                <View style={styles.menuItem(0.5)}>
                  <Ionicons
                  name='cart-outline'
                  size={24}
                  />
                  <Text style={styles.loginText} >Commandes</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Favorites')}>
                <View style={styles.menuItem(0.5)}>
                  <Ionicons
                  name='heart-outline'
                  size={24}
                  />
                  <Text style={styles.loginText} >Articles Favoris</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                <View style={styles.menuItem(0.5)}>
                <SimpleLineIcons name='bag' size={24}/>
                  <Text style={styles.loginText} >Consulter Panier</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('LoyalityInfo')}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                  name='card-account-details-star-outline'
                  size={24}
                  />
                  <Text style={styles.loginText} > Points de fidélité</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <View style={styles.menuItem(0.5)}>
                  <AntDesign
                  name='delete'
                  size={24}
                  />
                  <Text style={styles.loginText} >Supprimer mon compte</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>logout()}>
                <View style={styles.menuItem(0.5)}>
                  <AntDesign
                  name='logout'
                  size={24}
                  />
                  <Text style={styles.loginText} >Se déconnecter</Text>
                </View>
            </TouchableOpacity>
            </View>
          )
          }
        </View>
      </View>
     </SafeAreaView>
  );
}

export default Profile;