import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SearchInput from "../componets/searchInput";
import styles from "../../css/styles";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleCick = () => {
    if (search == "") {
      alert("nothing found");
      return;
    }
    alert(search);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        setFuction={setSearch}
        value={search}
        clickFunction={handleCick}
      />
    </SafeAreaView>
  );
};

export default Home;
