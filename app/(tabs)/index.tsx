import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "data:image/jpeg;base64,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",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>Facebook</Text>
          <Text style={styles.text2}>Nomor Ponsel Atau Email</Text>
          <TextInput style={styles.inputtext1} placeholder="" />
          <Text style={styles.text3}>Kata Sandi</Text>
          <TextInput style={styles.inputtext2} placeholder="" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('LOGIN')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('')}>
            <Text style={styles.text4}>Lupa Kata Sandi</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "blue",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
 color:"blue",
},
text1:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},
text3:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:110,
},
text2:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:61,
},
inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:20,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  marginTop:10
 },


})