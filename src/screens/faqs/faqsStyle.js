import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { color } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { sizes } from "../../constants/fontSize";
import { fonts } from "../../constants/fonts";


export const faqsStyle = StyleSheet.create({
    faqsMain:{
        paddingHorizontal:horizontalScale(17),
        flex:1,
        paddingTop:verticalScale(10),
        backgroundColor:color.white
    },
    boxMain:{
        borderWidth:1,
        marginVertical:verticalScale(10),
        borderRadius:moderateScale(10),
        paddingVertical:verticalScale(10),
        paddingHorizontal:horizontalScale(17),
        backgroundColor:color.white,
    },
    boxMainTop:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",


    },
    headingText:{
        color:color.black,
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.p4,667),
        width:"83%",
        lineHeight:verticalScale(16)
    },
    descriptionText:{
        color:color.lightBlack,
        fontFamily:fonts.regular,
        fontSize:RFValue(sizes.p5,667),
        lineHeight:verticalScale(16),
        marginTop:verticalScale(6)
    }
})