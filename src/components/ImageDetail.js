import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageDetail = (props) =>
{
    console.log(props)
    return (
        <View>
            <Image source={props.image}></Image>
            <Text>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

})


export default ImageDetail;