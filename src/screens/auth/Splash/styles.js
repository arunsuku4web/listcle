import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../../utils/colors";
export const styles=StyleSheet.create({
    container:{
     padding:24,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     height:'100%'

    },
    image:{
        width:'100%',
        height:200
    },
    titleContainer:{
        marginVertical:54
    },
    title:{
       fontSize:40,
       fontWeight:'bold',
       textAlign:"center",
       color:colors.black,
    },
    innerTitle:{
        color:colors.orange,
        textDecorationLine:'underline'
    },
    footerText:{
        color:colors.blue,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 30,
    }
})