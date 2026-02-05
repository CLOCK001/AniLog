import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SearchInput from "../componets/searchInput";
import styles from "../../css/styles";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  let api = "";

  const handleCick = () => {
    if (search == "") {
      alert("nothing found");
      return;
    }
    api = `https://api.jikan.moe/v4/anime?q=${search}&page=1`;
    try {
      fetch(api)
        .then((res) => res.json())
        .then((json) => setResults(json));
    } catch (err) {
      console.log(err);
      alert("Somthing went wrong!");
    }
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
