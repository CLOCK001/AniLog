import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Text } from "react-native";
import { useState } from "react";
import SearchInput from "../componets/searchInput";
import ListItems from "../componets/listitems";
import styles from "../../css/styles";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let api = "";

  const handleCick = () => {
    setIsLoading(true);
    setResults(null);
    if (search == "") {
      alert("nothing found");
      setIsLoading(false);
      return;
    }
    api = `https://api.jikan.moe/v4/anime?q=${search}&page=1`;
    try {
      fetch(api)
        .then((res) => res.json())
        .then((json) => setResults(json))
        .then(() => setIsLoading(false));
    } catch (err) {
      console.log(err);
      alert("Somthing went wrong!");
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        setFuction={setSearch}
        value={search}
        clickFunction={handleCick}
        loading={isLoading}
      />
      {results ? (
        <ListItems animes={results.data} />
      ) : (
        <ActivityIndicator
          color="#A30000"
          animating={isLoading ? true : false}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
