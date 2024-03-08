import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {icons} from '../../../constants'

export default function TabNavigator({chosenTab}) {
    const router = useRouter()
    return (
        <View style={styles.tabNavigator}>
            <TouchableOpacity onPress={() => router.push(`/Home`)}>
                <Image
                    style={[styles.logo, {opacity: (chosenTab == "home") ? 1 : 0.5}]}
                    source={icons.home}
                    resizeMode='contain'
                />     
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => router.push(`/Map`)}>
                <Image
                    style={[styles.logo, {opacity: (chosenTab == "history") ? 1 : 0.5}]}
                    source={icons.history}
                    resizeMode='contain'
                /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push(`/Map`)}>     
                <Image
                    style={[styles.logo, {opacity: (chosenTab == "map") ? 1 : 0.5}]}
                    source={icons.map}
                    resizeMode='contain'
                /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push(`/Map`)}>     
                <Image
                    style={[styles.logo, {opacity: (chosenTab == "profile") ? 1 : 0.5}]}
                    source={icons.profile}
                    resizeMode='contain'
                />    
            </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    tabNavigator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        marginHorizontal: 10,
    },
    logo: {
        width: 25,
        // opacity: 0.5
    }
});