import { Text, View } from "react-native";
import styles from "../../css/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const CardDisplay = ({ name, type, id, score }) => {
  if (score === null) {
    score = "No rating found";
  }

  if (type === null) {
    type = "Unknown";
  }

  return (
    <View style={styles.card}>
      <Text style={styles.largeText}>{name}</Text>
      <View style={styles.bageView}>
        <Text style={styles.bage}>
          <Ionicons name="information-circle" size={14} color="white" />
          {id}
        </Text>
        <Text style={styles.bage}>
          {type == "Movie" ? (
            <Ionicons name="film" size={14} color="white" />
          ) : (
            <Ionicons name="tv" size={14} color="white" />
          )}
          {type}
        </Text>
        <Text style={styles.bage}>
          <Ionicons name="star" size={14} color="white" />
          {score}/10
        </Text>
      </View>
    </View>
  );
};

export default CardDisplay;
