import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, useWindowDimensions } from "react-native";
import styles from "./home.style";
import { COLORS, SIZES } from "../../constants";
import StationCard from "../common/cards/StationCard";
import useFetch from "../../hook/useFetch";
import { useContext, useEffect } from "react";
import { DataContext } from "../context";

const PopularStations = () => {
  const windowHeight = useWindowDimensions().height;
  const router = useRouter();
  const { setStationsList } = useContext(DataContext);
  const { data, isLoading, error } = useFetch("stations");
  useEffect(() => {
    if (data && data.length > 0) {
      setStationsList(data.sort((a, b) => a.stationId - b.stationId));
    }
  }, [data]);

  const handleCardPress = (item) => {
    router.push({ pathname: `/station-details/${item._id}`, params: { data: JSON.stringify(item) } });
  };

  return (
    <View style={styles.popularStationContainer(windowHeight)}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular destinations</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>No station available</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <StationCard
                item={item}
                handleCardPress={handleCardPress}
              />
            )}
            ListEmptyComponent={<Text>No station available</Text>}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ columnGap: SIZES.large }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularStations;
