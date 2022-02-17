import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onChangeTerm, onSubmitTerm}) =>{
    return (
    <View>
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
            placeholder="Search" 
            value={term}
            onChangeText={onChangeTerm}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing = {onSubmitTerm}
            />
        </View>
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