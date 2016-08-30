/**
 * Created by zi on 2016/7/25.
 */
/**
 * Created by zi on 2016/7/23.
 */
import {StyleSheet,Dimensions} from 'react-native';

let w = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        backgroundColor:"#2196F3",
        height:165
    },
    left:{
        alignItems:'center',
        // justifyContent:'center',
        marginLeft:20,
        flexDirection:'row',
        height:165,
    },
    user:{
        // flexDirection:"row",
        marginLeft:30
    },
    faceTouch:{
    },
    faceBorder:{
        borderRadius:36,
        justifyContent:"center",
        width:72,
        height:72,
        backgroundColor:"#ffffff"
    },
    status:{
        backgroundColor:"#A6D5FA",
        width:62,
        height:23,
        borderRadius:10,
        marginVertical:3
    },
    wrapper:{
        opacity:0.2,
        marginTop:-215,
        marginLeft:80
    },
    notification:{
        width:35,
        height:35,
        marginTop:-217,
        marginLeft:150
    },
    mode:{
        width:35,
        height:35,
        marginTop:-53,
        marginLeft:205
    }

});