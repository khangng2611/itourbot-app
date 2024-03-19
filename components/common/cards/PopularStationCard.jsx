import { TouchableOpacity, Image } from "react-native";
import styles from "./popularstationcard.style";
import InfoWrapper from "./InfoWrapper"
import { SIZES } from "../../../constants";
import LoveWrapper from "./LoveWrapper";

const PopularStationCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <Image
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        style={styles.cardImage}
      />
      <InfoWrapper size={SIZES.medium} item={item}/>
      <LoveWrapper size={SIZES.medium}/>

    </TouchableOpacity>
  );
};

export default PopularStationCard;
