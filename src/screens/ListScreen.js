import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => 
{
    const friends = [
        {name: "Friend 1", age: "18", key: "1"},
        {name: "Friend 1",  age: "18", key: "2"},
        {name: "Friend 1",  age: "33", key: "3"},
        {name: "Friend 1",  age: "18", key: "4"},
        {name: "Friend 1",  age: "33", key: "5"},
        {name: "Friend 1", age: "18",  key: "6"},
        {name: "Friend 1",  age: "29", key: "7"},
        {name: "Friend 1", age: "45",  key: "8"},
        {name: "Friend 1",  age: "18", key: "9"}
    ]
    return (<FlatList 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=> friend.key}
        data={friends} 
        renderItem={({item}) => {

        return (<View>
                     <Text style={styles.listItem}>{item.name}</Text>
                     <Text style={styles.listItem}>{item.age}</Text>
              </View>)
    }}>

    </FlatList>)
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 50,
        paddingLeft: 30
    }
});


export default ListScreen;