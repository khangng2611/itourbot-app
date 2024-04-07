import { FlatList, ActivityIndicator, View, Text, RefreshControl } from "react-native";
import TourItem from "./TourItem";
import { SIZES, COLORS, FONT } from "../../constants";
import styles from "./history.style";
import { useCallback, useState } from "react";

const HistoryList = ({ isVisible, fetchData }) => {
    if (!isVisible) return null;
    const { data, isLoading, error, refetch } = fetchData;
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    });
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
                <Text>Unable to get tour history.</Text>
            ) : (
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    data={data}
                    renderItem={({ item }) => (
                        <TourItem
                            item={item}
                        />
                    )}
                    ListEmptyComponent={
                        <View style={{ padding: SIZES.medium, alignItems: 'center' }}>
                            <Text style={{ fontFamily: FONT.regular }}>You haven't request a tourguide yet.</Text>
                        </View>
                    }
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ columnGap: SIZES.large }}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    )
}

export default HistoryList;