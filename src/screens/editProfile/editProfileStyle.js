import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { fonts } from "../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { sizes } from "../../constants/fontSize";



export const editProfileStyle = StyleSheet.create({
    editProfileMain:{
        flex:1,
        paddingHorizontal:horizontalScale(17),
        paddingTop:verticalScale(10)
    },
    detailWrapper:{
      marginVertical:verticalScale(6),
      
    },
    detailText:{
        marginVertical:verticalScale(20),
        fontFamily:fonts.semiBold,
        fontSize:RFValue(sizes.p6,667),
    },
    detailHeadingText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.p5,667),
    },
    inputbox:{
        borderWidth:1,
        borderRadius:moderateScale(10),
        marginTop:verticalScale(5),
        fontFamily:fonts.regular,
        paddingHorizontal:horizontalScale(10)
    } 
})