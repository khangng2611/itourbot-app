import { View, TextInput, TouchableOpacity, Image, FlatList, Text, ActivityIndicator } from 'react-native';
import { lazy, useState } from 'react';
import styles from './home.style';
import { icons } from '../../constants';
import { useAuth } from '../context';
import { searchStation } from '../../utils/apiRequest';

const Search = () => {
    const { session } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        if (searchTerm) {
            setIsLoading(true);
            const searchResponse = await searchStation(searchTerm, session);
            setSearchResult(searchResponse);
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
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
            <ActivityIndicator size={'small'} style={styles.loading} animating={isLoading} />
            <FlatList
                data={searchResult}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.searchResultItem}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                horizontal
            />
        </View>
    )
}

export default Search;