import { TextInput, View, Button } from "react-native";
import styles from "../../css/styles";

const SearchInput = ({ setFuction, value, clickFunction, loading }) => {
  return (
    <View style={styles.space}>
      <TextInput
        style={styles.input}
        placeholder="Naruto.."
        onChangeText={setFuction}
        value={value}
      />
      <View style={loading ? { display: "none" } : { display: "contents" }}>
        <Button title="find" color="#A30000" onPress={clickFunction} />
      </View>
    </View>
  );
};

export default SearchInput;
