import { ScrollView } from "react-native";
import CardDisplay from "./cardDisplay";
import styles from "../../css/styles";

const ListItems = ({ animes }) => {
  return (
    <ScrollView style={styles.space}>
      {animes.map((anime, index) => (
        <CardDisplay
          key={index}
          name={anime.title}
          type={anime.type}
          id={anime.mal_id}
          score={anime.score}
        />
      ))}
    </ScrollView>
  );
};

export default ListItems;
