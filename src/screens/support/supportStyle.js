import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../constants/dimension";
import { color } from "../../constants/colors";


export const supportStyle = StyleSheet.create({
    supportMain:{
        flex:1,
        paddingHorizontal:horizontalScale(17),
        paddingTop:verticalScale(10),
        backgroundColor:color.white,
        alignItems:"center",
        justifyContent:"center"
    }
})