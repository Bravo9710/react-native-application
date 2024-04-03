import { Text, View, StyleSheet, Image } from "react-native";

const Card = ({ profile }) => (
  <View>
    <Image
      source={{ url: profile.avatar_url }}
      style={{ width: 30, height: 30 }}
    />
    <View>
      <Text>{profile.name}</Text>
      <Text>{profile.company}</Text>
    </View>
  </View>
);
export default Card;
