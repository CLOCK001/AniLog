import { Text, View } from "react-native";

const CardDisplay = ({ name, type, id, score }) => {
  return (
    <View>
      <View>
        <View>
          <Text>{name}</Text>
          <Text>{id}</Text>
        </View>
        <Text>{type}</Text>
      </View>
      <Text>{score}/10</Text>
    </View>
  );
};

export default CardDisplay;
