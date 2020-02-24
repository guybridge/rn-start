import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>
{    
    const name = "Guy"
    return (
        <View>
              <Text style={styles.titleText}>Getting started with React Native</Text>
            <Text styles={styles.subText}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 45
    },
    subText: {
        fontSize: 20
        
    }

});

export default ComponentScreen;