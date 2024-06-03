import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.back_afc_color
    },
    profile:{
        height:200,
        width:200,
        borderRadius:100,
        //borderColor:COLORS.gray1,
        resizeMode:"cover",
        marginTop:60,
        marginHorizontal:90
        //borderWidth:1
    },
    wrapper:{
        marginBottom:20,
        marginHorizontal:20
    },
    label:{
        fontFamily:"semibold",
        fontSize:SIZES.small13,
        marginBottom:5,
        marginEnd:30,
        textAlign:"right"
    },
    inputWrapper:(borderColor)=>({
        borderColor:borderColor,
        backgroundColor:COLORS.white,
        borderWidth:1,
        height:40,
        //width:300,
        borderRadius:12,
        flexDirection:"row",
        paddingHorizontal:15,
        alignItems:"center",
        marginHorizontal:10
    }),
    errorMessage:{
        color:"black",
        fontFamily:"regular",
        marginTop:5,
        marginLeft:10,
        fontSize:SIZES.xSmall
    },
    inscription:{
        //marginBottom:50,
        marginVertical:-45,
        //textAlign:"center",
        marginHorizontal:110,
        textDecorationLine:'underline',
        
    }
})

export default styles;