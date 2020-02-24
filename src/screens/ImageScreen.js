import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import forest from '../../assets/img/forest.jpg';
import beach from '../../assets/img/beach.jpg';
import mountain from '../../assets/img/mountain.jpg';


const ImageScreen = () => {

    const data = [
        {title: "Forest", source: forest},
        {title: "Beach", source: beach},
        {title: "Mountain", source: mountain},
    ]
    
    return ( <View>
                <FlatList
                  data={data}
                  renderItem={({item})=> {
                        return <ImageDetail title={item.title} image={item.source} />

                  }}>


                </FlatList>
              
             </View>
            )
}


const styles = StyleSheet.create({

});


export default ImageScreen;