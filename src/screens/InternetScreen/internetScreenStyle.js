import { StyleSheet } from "react-native";
import { color } from "../../constants/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { fonts } from "../../constants/fonts";

export const internetScreenStyle =StyleSheet.create({
    internetScreenMain:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:color.white
    },
    imageView:{
      position:"absolute",
      bottom:0
    },
    internetText:{
        marginBottom:verticalScale(30),
        fontFamily:fonts.medium,
        color:color.black
    },
    touchableButton:{
        borderRadius:moderateScale(10),
        paddingVertical:verticalScale(10),
        width:"40%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#438e67"
    },
    touchableText:{
        fontFamily:fonts.medium,
        color:color.white
    }
})