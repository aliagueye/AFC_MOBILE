import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "./../../constants/index"

const styles = StyleSheet.create({
    container:{     
        width:200,
        //height:240,
        marginEnd:22,
        marginLeft:SIZES.small13/2,
        borderRadius:SIZES.medium16,
        backgroundColor:COLORS.white
        //backgroundColor:"white",
    },imgContainer:{
        //backgroundColor:"red",
        flex:1,
        width:190,
        height:150,
        borderRadius:SIZES.small13,
        marginTop:SIZES.small13/2,
        marginLeft:SIZES.small13/2,
        overflow:"hidden"

    },image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        padding:SIZES.small13
    },title:{
        fontFamily:"semibold",
        fontSize:SIZES.large,
        marginBottom:2
    },supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small13
        ,
        color:COLORS.gray2
    },
    price:{
        fontFamily:"bold",
        fontSize:SIZES.large22,
        marginBottom:2
    },
    
})

export default styles;