import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors } from "@constants/themes";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    linkButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('60%'),
        height: 25,
        backgroundColor: '#DC4646',
        borderRadius: 5,
    },
    overlay: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#00000080'
    },
    wrapper: {
        position: 'absolute',
        top: 100,
        left: (wp('100%') - 300) / 2,
        alignItems: 'center',
        width: 300,
        height: 230,
        // backgroundColor: colors.WHITE,
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        zIndex: 100
    },
    buttonView: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 35,
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 35,
        backgroundColor: colors.RED.PRIMARY,
        borderBottomLeftRadius: 10,
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 35,
        backgroundColor: colors.BLUE.PRIMARY,
        borderBottomRightRadius: 10
    },
    disableButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 35,
        backgroundColor: '#0072DC80',
        borderBottomRightRadius: 10
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('100%'),
        height: 50,
        paddingLeft: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DEDEDE'
    }
});