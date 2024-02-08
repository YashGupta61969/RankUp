import { StyleSheet } from "react-native";
import { verticalScale } from "../../../constants/dimension";
import { fonts } from "../../../constants/fonts";
import { sizes } from "../../../constants/fontSize";
import { color } from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";


export const accountDetailsItemsStyle = StyleSheet.create({
    userDetailItem: {
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        // borderBottomColor: color.grey,
      },
      detailHeading: {
        fontFamily: fonts.regular,
        fontSize: RFValue(sizes.p7, 667),
        color: color.blue_brand,
      },
      userDetailText: {
        fontFamily: fonts.semiBold,
        marginTop: verticalScale(4),
        color: color.blue_brand,
        fontSize: RFValue(sizes.p4, 667),
      },
})