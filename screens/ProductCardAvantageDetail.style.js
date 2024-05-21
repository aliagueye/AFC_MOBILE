import { StyleSheet, View } from "react-native";
import {COLORS,SIZES} from '../constants/index'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.back_afc_color
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.back_afc_color
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
        fontSize:SIZES.large22,
        marginLeft:15,
    }
    
})

export default styles;