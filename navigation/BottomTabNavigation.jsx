import React from 'react';
import { View, Text } from 'react-native';
/* createBottomTabNavigator composant qui gére l'affichage de la barre de navigation 
sur l'ecran */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//regrouper les fichiers Home,Profile et Search dans un fichier index pour un seul import 
import {Home,Profile,Search} from '../screens';
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
/**
 * paramétrage des options de la barre de navigation à savoir :
 * Désactiver le label 
 * Cacher la barre de navigation a l'affichage du clavier 
 */
const screenOption ={
   tabBarShowlabel:false,
   tabBarHideOnKeyboard:true,
   headerShown:false,
   tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,

   }
}

const BottomTabNavigation = ()=> {

  return (
    //Composant qui comporte tous nos onglets de navigation 
   
    <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
            name='Acceuil'
            component={Home}
            options={{
                //si actif on utilise l'option filed sinon on utilise outline
                tabBarIcon:({focused}) =>{
                    return(
                    <Ionicons name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused? COLORS.back_afc_color : COLORS.gray2}
                    />
                    );
                },
            }}
        />

        <Tab.Screen
                name="Search"
                component={Search}
                options={{
                tabBarIcon: ({ focused }) => {
                    return (
                    <Ionicons
                        name={"search-sharp"}
                        size={24}
                        color={focused ?COLORS.back_afc_color: COLORS.gray2}
                    />
                    );
                },
                }}
        />

        <Tab.Screen
            name='Commander'
            component={Search}
            options={{
                tabBarIcon:({focused}) =>{
                    return(
                    <Ionicons name={focused ? "reorder-four" : "reorder-four-outline"}
                    size={24}
                    color={focused? COLORS.back_afc_color: COLORS.gray2}
                    />
                    );
                },
            }}
        />

        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                //si actif on utilise l'option filed sinon on utilise outline
                tabBarIcon:({focused}) =>{
                    return(
                    <Ionicons name={focused ? "person" : "person-outline"}
                    size={24}
                    color={focused? COLORS.back_afc_color: COLORS.gray2}
                    />
                    );
                },
            }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
