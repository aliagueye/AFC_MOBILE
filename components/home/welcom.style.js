import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        //backgroundColor:"#AF4D4E"
    },
    welcomText1:{
        fontFamily:"bold",
        fontSize:SIZES.small14 + 10,
        marginTop:SIZES.xLarge24 - 10,
        marginHorizontal:5.5,
        color:COLORS.black
        //color:COLORS.white
    },
    welcomText2:{
        fontFamily:"semibold",
        marginTop:SIZES.small14,
        marginHorizontal:5.5,
        //color:"#81201D"
        color:COLORS.gray2
    }
})

export default styles;