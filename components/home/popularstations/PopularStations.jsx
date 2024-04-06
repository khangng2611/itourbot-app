import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, } from "react-native";
import { useContext, useEffect } from "react";
import styles from "./popularstations.style";
import { COLORS, SIZES } from "../../../constants";
import StationCard from "../../common/cards/StationCard";
import useFetch from "../../../hook/useFetch";

const PopularStations = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("stations");
  const handleCardPress = (item) => {
    const stationObject = { ...item, stations: data };
    router.push({ pathname: `/station-details/${item._id}`, params: { data: JSON.stringify(stationObject) } });
  };

  return (
    <View style={styles.container}>
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
