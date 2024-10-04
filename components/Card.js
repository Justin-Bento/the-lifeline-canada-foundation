import { Text, View } from "react-native";
import componentStyles from "../styles/component_styles";
import baseStyles from "../styles/styles";

export default function Card() {
  return (
    <>
      <View style={componentStyles.card}>
        <Text style={baseStyles.title_lg}>If you, or Someone you know is in Crisis, Call 911 Immediately!</Text>
        <Text>The LifeLine Canada is Not a Crisis Hotline.</Text>
      </View>
    </>
  );
}
