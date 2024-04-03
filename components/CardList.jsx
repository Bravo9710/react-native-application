import { View } from "react-native";
import Card from "./Card";

const CardList = (props) => (
  <View>
    {props.profiles.map((profile) => (
      <Card key={profile.id} profile={profile} />
    ))}
  </View>
);
export default CardList;
