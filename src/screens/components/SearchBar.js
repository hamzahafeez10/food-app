import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onChangeTerm}) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
            placeholder="Search" 
            value={term}
            onChangeText={newTerm=>onChangeTerm(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor: 'white',
        height:50,
        marginHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
    },
    textInput:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15,
    }
});

export default SearchBar;