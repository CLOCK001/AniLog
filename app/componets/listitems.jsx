import { Text, View } from "react-native";

const ListItems = ({ animes }) => {
  return (
    <View>
      {animes.map((anime) => (
        <View key={anime.mal_id}>
          <Text>{anime.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListItems;
