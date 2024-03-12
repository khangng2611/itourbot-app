import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularstationcard.style";
import {icons} from "../../../constants";
// import { checkImageURL } from "../../../../utils";

const PopularStationCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <Image
        source={{ uri: item.img }}
        resizeMode='cover'
        style={styles.cardImage}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.zoneName}>{item?.name}</Text>
        <View style={styles.locationRow}>
          <View style={{flexDirection:'row'}} >
            <Image source= {icons.locationIcon} resizeMode='contain'style={styles.ratingIcon}/>
            <Text style={styles.location}>Station {item?.station}</Text>
          </View>
          <View style={{flexDirection:'row'}} >
            <Image source= {icons.heart} resizeMode='contain'style={styles.ratingIcon}/>
            <Text style={styles.location}>{item?.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularStationCard;
