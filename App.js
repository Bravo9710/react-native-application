import { Text, SafeAreaView, StyleSheet } from "react-native";
import CardList from "./CardList";
import Form from "./Form";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = (profileData) => {
    setProfiles((profiles) => [profileData, ...profiles]);
  };

  return (
    <View style={styles.container}>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
