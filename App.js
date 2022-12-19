import React,{useEffect, useState} from 'react';
import {View, StyleSheet,Text,Button, DeviceEventEmitter} from 'react-native';
import * as AndroidBridge  from './Calendar';
// import { NativeModules } from 'react-native';
// const { CalendarModule } = NativeModules;
// console.log(CalendarModule );
// // CalendarModule.createCalendarEvent('vignesh', 'chennai');
// const onPress = () => {
//     console.log('We will invoke the native module here!');
//     CalendarModule.createCalendarEvent('vignesh', 'chennai');
//   };

const App = () => {
    const[count, setCount] = useState();
    useEffect(()=>{
     DeviceEventEmitter.addListener("count", (data)=>{
        console.log(data.message);
        setCount(data.message);
        
     } );
    },[count])
    return (
        <View style={styles.container}>
            <Text style={styles.titleText} >Netive code {count}</Text>
             <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={ () => AndroidBridge.openExampleActivity()}
    />
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
   
},
titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default App;


