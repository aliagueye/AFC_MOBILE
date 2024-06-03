import { StyleSheet } from "react-native"
import { COLORS, SIZES } from '../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.back_afc_color
    },
    
    profileContainer:{
        flex:1,
        alignItems:"center"
    },
    profile:{
        height:155,
        width:155,
        borderRadius:999,
        borderColor:COLORS.gray1,
        resizeMode:"cover",
        marginTop:40,
        borderWidth:2
    },
    name:{
        fontFamily:"bold",
        //fontSize:22,
        marginTop:15,
        
    },
    infoUser:{
        alignItems:"center",
        marginTop:185
    },
    loginBtn:{
        backgroundColor:COLORS.gray1,
        padding:2,
        borderWidth:0.4,
        borderColor:COLORS.gray1,
        borderRadius:10,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",alignItems:"center"
    },
    loginText:{
        fontFamily:"semibold",
        marginHorizontal:20,
        fontWeight:'600',
        fontSize:14,
        lineHeight:26
    },
    menuWrapper:{
        marginTop:40,
        width:SIZES.width-SIZES.large22,
        marginHorizontal:100,
        alignItems:"center"
    },
    menuItem: (borderBottomWidth)=>({
        borderBottomWidth:borderBottomWidth,
        flexDirection:"row",
        //justifyContent:"space-between",
        paddingVertical:15,
        paddingHorizontal:30,
        borderColor:COLORS.black,
    })
})