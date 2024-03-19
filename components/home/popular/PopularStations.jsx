import { useState } from "react";
import { useRouter } from "expo-router";
import {View,Text,TouchableOpacity,FlatList,ActivityIndicator,} from "react-native";

import styles from "./popularstations.style";
import { COLORS, SIZES } from "../../../constants";
import PopularStationCard from "../../common/cards/PopularStationCard";
import useFetch from "../../../hook/useFetch";

const PopularStations = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("stations", {});

  const handleCardPress = (item) => {
    router.push({pathname : `/station-details/${item._id}`, params: item});
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
              <PopularStationCard
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
