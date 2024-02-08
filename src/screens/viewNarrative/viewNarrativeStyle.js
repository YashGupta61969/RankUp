import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/dimension";
import { color } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { sizes } from "../../constants/fontSize";


export const viewNarrativeStyle = StyleSheet.create({
   viewNarrativeMain:{
    flex:1,
    paddingHorizontal:horizontalScale(17),
    paddingTop:verticalScale(10),
    backgroundColor:color.white
   },
   summaryMainView:{
    borderWidth:1,
    borderColor:color.grey,
    marginVertical:verticalScale(15),
    borderRadius:moderateScale(10),
    paddingHorizontal:horizontalScale(10),
    paddingVertical:verticalScale(10),
    backgroundColor:color.lightSkyBlue
   },
   summaryTop:{
    flexDirection:"row",
    justifyContent:"space-between"
   },
   timeView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
   },
   summaryText:{
    fontFamily:fonts.semiBold,
    color:color.lightBlack,
    fontSize:RFValue(sizes.p3,667)

   },
   timeText:{
    fontFamily:fonts.mediumItalic,
    fontSize:RFValue(sizes.p5,667),
    color:color.lightBlack

   },
   partitionText:{
    fontFamily:fonts.mediumItalic,
    marginHorizontal:horizontalScale(3),
    color:color.lightBlack
   },
   dateText:{
    fontFamily:fonts.mediumItalic,
    color:color.lightBlack,
    fontSize:RFValue(sizes.p5,667),
   },
   innerView:{
    marginTop:verticalScale(12),
    backgroundColor:color.lightBlue,
    borderRadius:moderateScale(5),
    padding:moderateScale(5)
   },
   innerViewBulletText:{
    fontFamily:fonts.medium,
    color:color.white,
    marginBottom:verticalScale(6)
   },
   innerViewDescriptionText:{
    fontFamily:fonts.regular,
    color:color.white,
    fontSize:RFValue(sizes.p5,667)
   },
   bulletPointsView:{
    borderWidth:1,
    backgroundColor:color.lightSkyBlue,
    borderColor:color.grey,
    paddingHorizontal:horizontalScale(20),
    borderRadius:moderateScale(12),
    marginTop:verticalScale(10),
    marginBottom:verticalScale(15)
   },
   bulletSinglePoint:{
    paddingVertical:verticalScale(20),
    flexDirection:"row",
    borderBottomWidth:1,
    borderColor:color.grey
    // justifyContent:"space-between"
   },
   dotStyle:{
    width:4,
    height:4,
    borderRadius:moderateScale(20),
    backgroundColor:color.black,
    marginTop:verticalScale(8),
    marginRight:horizontalScale(10)
   },
   textStyle:{
    fontFamily:fonts.medium,
    color:color.lightBlack,
    fontSize:RFValue(sizes.p5,667)
   }
})