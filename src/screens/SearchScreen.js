import React,{useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async () =>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:22,
                    term,
                    location:'san jose'
                }
            });
            setResults(response.data.businesses);
            setError('');
        }
        catch(err){
            setError('Something went wrong!');
            setResults([]);
        }
    }

    return (
        <View>
            <SearchBar 
            term={term} 
            onChangeTerm={setTerm} 
            onSubmitTerm ={searchApi}/>
            {error?<Text>{error}</Text>:null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;