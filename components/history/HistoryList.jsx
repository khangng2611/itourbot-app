import { FlatList, ActivityIndicator, View, Text } from "react-native";
import useFetch from "../../hook/useFetch";
import { useAuth } from "../context/AuthContext";
import TourItem from "./TourItem";
import { SIZES, COLORS } from "../../constants";
import styles from "./history.style";

const HistoryList = ({isVisible}) => {
    const { session } = useAuth();
    const { data, isLoading, error } = useFetch("tours", null, session);
    if (!isVisible) return null;
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
                <Text>Unable to get tour history.</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TourItem
                            item={item}
                        />
                    )}
                    ListEmptyComponent={<Text>You don't have any tour yet.</Text>}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ columnGap: SIZES.large }}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    )
}

export default HistoryList;