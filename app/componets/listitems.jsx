import { Text, View } from "react-native";
import CardDisplay from "./cardDisplay";

const ListItems = ({ animes }) => {
  return (
    <View>
      {animes.map((anime) => (
        <CardDisplay
          key={anime.rank}
          name={anime.title}
          type={anime.type}
          id={anime.mal_id}
          score={anime.score}
        />
      ))}
    </View>
  );
};

export default ListItems;
