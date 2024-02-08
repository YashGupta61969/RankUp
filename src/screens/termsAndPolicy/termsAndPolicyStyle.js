import { StyleSheet } from "react-native";
import { color } from "../../constants/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { RFValue } from "react-native-responsive-fontsize";
import { sizes } from "../../constants/fontSize";
import { fonts } from "../../constants/fonts";



export const termsAndPolicyStyle = StyleSheet.create({
    termsAndPolicyMain:{
        flex:1,
        paddingHorizontal:horizontalScale(17),
        paddingTop:verticalScale(10),
        backgroundColor:color.white
    },
    termsAndPolicyOptions:{
        backgroundColor:color.lightSkyBlue,
        borderWidth:1,
        borderColor:color.grey,
        borderRadius:moderateScale(10),
        marginVertical:verticalScale(22),
        paddingHorizontal:horizontalScale(15)
    },
    termsAndPolicyOptionsItem:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:verticalScale(15),
        borderBottomWidth:1,
        borderColor:color.grey,
    },
    termsAndPolicyOptionsItemText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.p3,667),
        color:color.lightBlack

    }
})