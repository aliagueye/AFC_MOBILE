import { StyleSheet, TouchableOpacity, View ,TextInput,Text} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Feather,Ionicons} from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';
import {s} from './Search.style'
import axios from 'axios';


const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  //console.log(searchKey)
  const [searchResults,setSearchResults] = useState([])

  handleSearchPress = async () => {
    try {
      const results = await axios.get(`http://192.168.1.76:3000/api/products/search/${searchKey}`);
      setSearchResults(results.data); 
     
    } catch (error) {
      console.log("Échec de la récupération des produits", error);
    }
  }
  return ( 
    <SafeAreaView style={{backgroundColor:COLORS.back_afc_color,flex:1}}>
        <View style={s.searchContainer}>
            <TouchableOpacity>
              <Ionicons 
                      name='camera-outline'
                      size={SIZES.xLarge24}
                      style={s.searchIcon}
              />
            </TouchableOpacity>
            <View style={s.searchWrapper}>
                <TextInput
                 style={s.searchInput}
                 value={searchKey}
                 onChangeText={setSearchKey}
                 placeholder='Que recherchez-vous ?'
                 
                 onPressIn={()=>{}}
                />
            </View>
            <View>
              <TouchableOpacity style={s.camSearch} onPress={()=>handleSearchPress()}>
              <Feather
                    name='search'
                    size={24}
                    color={COLORS.gray1}

                  />
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    
  )
}

export default Search;