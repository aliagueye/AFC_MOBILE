import { StyleSheet} from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container1:{
      //backgroundColor:COLORS.back_afc_color,
      marginTop:10,flex:1
      //height:"100%"
    },
    Buttoncontainer:{
        flexDirection: 'row',
        justifyContent:"space-between",
        //justifyContent:"center",
        alignItems:"center",
        //marginTop:10
        
      //backgroundColor:COLORS.back_afc_color
    },
    upper:{
     // backgroundColor:"black",
     backgroundColor:COLORS.back_afc_color,
      height:110,
    },
    stretch: {
      width: 90,
      height: 90,
      //resizeMode: 'stretch',
      alignSelf:"center",
      //marginBottom:120
  
    },
    button:{
      backgroundColor: COLORS.gray1,
      marginHorizontal: 5, // Espacement horizontal entre les boutons
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius:10,
      marginBottom:10
    },
    textStyle:{
      fontFamily:"semibold",
      fontSize:15
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: 20,
      backgroundColor:COLORS.gray1,
      borderRadius: 5,
    },
  })
 export default styles;