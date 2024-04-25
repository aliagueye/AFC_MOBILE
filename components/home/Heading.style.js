import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
       marginTop:SIZES.medium16
    },
    heading:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text1Style:{
        fontFamily:"semibold",
        fontSize:SIZES.xLarge24,
    },
    text2Style:{
        fontFamily:"semibold",
        fontSize:SIZES.small14
    }
})
export default styles;