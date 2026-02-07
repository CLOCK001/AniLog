import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  largeText: {
    color: "#fff",
    fontSize: 17,
  },
  input: {
    height: 40,
    borderWidth: 2,
    marginBottom: 12,
    borderRadius: 5,
    borderColor: "#fff",
    padding: 10,
    color: "#fff",
  },
  space: {
    margin: 10,
    marginBottom: 0,
  },
  card: {
    marginBottom: 5,
    padding: 7,
    backgroundColor: "#161616",
  },
  bageView: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  bage: {
    backgroundColor: "#A30000",
    borderColor: "#A30000",
    borderWidth: 1,
    borderRadius: 20,
    color: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default styles;
