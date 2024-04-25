import { StyleSheet, TouchableOpacity, View ,TextInput,Text} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Feather,Ionicons} from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';
import {s} from './Search.style'

const Search = () => {
  return ( 
    <SafeAreaView>
        <View style={s.searchContainer}>
            <TouchableOpacity>
              <Ionicons 
                      name='camera-outline'
                      size={SIZES.xLarge}
                      style={s.searchIcon}
              />
            </TouchableOpacity>
            <View style={s.searchWrapper}>
                <TextInput
                 style={s.searchInput}
                 placeholder='What are you looking for ? '
                 value=''
                 onPressIn={()=>{}}
                />
            </View>
            <View>
              <TouchableOpacity style={s.camSearch}>
              <Feather
                    name='search'
                    size={24}
                    color={COLORS.white}

                  />
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    
  )
}

export default Search;