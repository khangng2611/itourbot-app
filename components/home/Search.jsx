import { View, TextInput, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import styles from './home.style';
import { icons } from '../../constants';
import { searchStation } from '../../utils/apiRequest';
import { router } from 'expo-router';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        if (searchTerm) {
            try {
                setIsLoading(true);
                const searchResponse = await searchStation(searchTerm);
                setSearchResult(searchResponse);
            } catch (e) {
                setSearchResult(e);
            } finally {
                setIsLoading(false);
            }
        }
    }
    const handleCardPress = (item) => {
        router.push({ pathname: `/station-details/${item._id}`, params: { data: JSON.stringify(item) } });
    };
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder='What are you looking for?'
                    />
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={handleClick}
                >
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {
                isLoading &&
                <ActivityIndicator size={'small'} style={styles.loading} animating={isLoading} />
            }
            {
                searchResult.length > 0 && (
                    <View style={styles.searchResultWrapper}>
                        {
                            searchResult.map((item) => (
                                <TouchableOpacity
                                    key={item._id}
                                    style={styles.searchResultItem}
                                    onPress={() => handleCardPress(item)}
                                >
                                    <Text style={styles.searchResultText}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                )
            }
        </View>
    )
}

export default Search;