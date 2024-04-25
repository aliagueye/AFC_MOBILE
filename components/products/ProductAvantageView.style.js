import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:186,
        height:147,
        borderRadius:10,
        backgroundColor:"#F5F1F1",

    },
    imageContainer:{
        //flex:0.9,
        width:186,
        height:100,
        borderRadius:10,
        //aspectRatio:1.9,
        resizeMode:"cover"
    },
    details:{
        padding:8
    },
    title:{
        fontFamily:"semibold",
        fontSize:SIZES.small14,
        color:COLORS.gray2,
        marginBottom:2
    },
    point:{
        fontFamily:"semibold",
        fontSize:SIZES.small14,
        color:COLORS.back_afc_color,
        marginBottom:2
    }
    

})
export default styles;