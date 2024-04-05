import { TouchableOpacity, Image } from "react-native";
import styles from "./stationcard.style";
import InfoWrapper from "./InfoWrapper"
import { SIZES } from "../../../constants";
import LoveWrapper from "./LoveWrapper";

const StationCard = ({ item, handleCardPress }) => {
  
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <Image
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        style={styles.cardImage(null)}
      />
      <InfoWrapper size={SIZES.medium} item={item}/>
      <LoveWrapper size={SIZES.medium}/>

    </TouchableOpacity>
  );
};

export default StationCard;
