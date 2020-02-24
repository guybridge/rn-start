import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  const {navigate} = props.navigation;

  return <View>

          <Text style={styles.text}>Hi There!</Text>

          <Button 
          style={styles.buttonStyle}
          onPress={()=> navigate("Components")}
          title="Go to the components screen"/>

          <Button 
            title="Go to list demo"
            onPress={()=> navigate("List")}
            style={styles.buttonStyle}>
           </Button>

           <Button 
            title="Go to image screen"
            onPress={()=> navigate("ImageScreen")}
            style={styles.buttonStyle}>
           </Button>

           <Button 
            title="Go to counter screen"
            onPress={()=> navigate("Counter")}
            style={styles.buttonStyle}>
           </Button>

           <Button 
            title="Go to color demo"
            onPress={()=> navigate("ColorScreen")}
            style={styles.buttonStyle}>
           </Button>


        </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    padding: 30
    }
});

export default HomeScreen;
