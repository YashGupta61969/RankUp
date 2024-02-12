import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { color } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { sizes } from "../../constants/fontSize";


export const darkModeStyle = StyleSheet.create({
    darkModeMain:{
        paddingVertical:verticalScale(10),
        paddingHorizontal:horizontalScale(17),
        backgroundColor:color.white,
        flex:1

    },
    darkModeTopText:{
        marginVertical:verticalScale(14)
    },
    darkModeTextOne:{
        fontFamily:fonts.regular,
        color:color.lightBlack,
        fontSize:RFValue(sizes.p6,667),
        marginBottom:verticalScale(2)
    },
    darkModeOption:{
        marginVertical:verticalScale(20),
        backgroundColor:color.lightGrey,
        borderRadius:moderateScale(10),
        paddingTop:verticalScale(5),
        paddingHorizontal:horizontalScale(15),
        borderWidth:1
    },
    darkModeOptionItem:{
        paddingVertical:verticalScale(15),
        borderBottomWidth:1,
        borderBottomColor:color.grey,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    darkModeOptionItemText:{
        fontFamily:fonts.medium,
        color:color.blue_brand,
        fontSize:RFValue(sizes.p3,667)
    },
    darkModeScheduleOption:{
        paddingVertical:verticalScale(15),
        borderBottomWidth:1,
        borderBottomColor:color.grey,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    outerRadioButton: {
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: horizontalScale(10),
        alignItems: 'center',
        justifyContent: 'center',
      },
      outerRadioButton: {
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: horizontalScale(10),
        alignItems: 'center',
        justifyContent: 'center',
      },
      innerRadioButton: {
        width: 12,
        height: 12,
        borderRadius: 6,
      },
})