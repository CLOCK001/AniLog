import { TextInput, View, Button } from "react-native";
import styles from "../../css/styles";

const SearchInput = ({ setFuction, value, clickFunction }) => {
  return (
    <View style={styles.space}>
      <TextInput
        style={styles.input}
        placeholder="Naruto.."
        onChangeText={setFuction}
        value={value}
      />
      <Button title="find" color="#A30000" onPress={clickFunction} />
    </View>
  );
};

export default SearchInput;
