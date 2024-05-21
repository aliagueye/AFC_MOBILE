import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:186,
        height:235,
        borderRadius:10,
        backgroundColor:"#F5F1F1",

    },
    imageContainer:{
        flex:1,
        width:186,
        height:70,
        borderRadius:10,
        
    },
    image:{
        aspectRatio:1,
        borderRadius:5
        //resizeMode:"cover"
    },
    details:{
        padding:8
    },
    title:{
        fontFamily:"semibold",
        fontSize:SIZES.small14,
        color:COLORS.gray2,
        marginTop:20
    },
    point:{
        fontFamily:"semibold",
        fontSize:SIZES.small14,
        color:COLORS.back_afc_color,
        //marginBottom:2
    }
    

})
export default styles;