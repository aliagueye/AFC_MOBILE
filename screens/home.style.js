import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
        backgroundColor:"#81201D"
        
    },
    textStyle:{
        fontFamily:"bold",
        fontSize:40
    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        colors:COLORS.gray
    },
    cartCount:{
      width:20,
      height:20,
      alignItems:"center",
      position:"absolute",
      bottom:20,
      borderRadius:10,
      backgroundColor:"#ff6568",
      justifyContent:"center",
      zIndex:999
    },
    cartNumber:{
      fontFamily:"bold",
      fontSize:12,
      color:COLORS.lightWhite
    }
});

export default styles;