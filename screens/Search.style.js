import { StyleSheet } from "react-native"
import { COLORS, SIZES } from '../constants';
export const s = StyleSheet.create({
    searchContainer:{
        backgroundColor:COLORS.gray2,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center" ,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
    },
    searchWrapper:{
        backgroundColor:COLORS.gray2,
        flex:1,
        marginRight:SIZES.small13,
        borderRadius:SIZES.small13
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small13
    },
    camSearch:{
        backgroundColor:COLORS.primary,
        width:50,
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:SIZES.medium16,
        marginRight:0
    }
});