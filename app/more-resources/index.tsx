import CompanyLogo from "@/components/CompanyLogo";
import { ScrollView, Text } from "react-native";

export default function Page() {
  return (
    <ScrollView className="wrapper">
      <CompanyLogo />
      <Text>Welcome, More Resources page!</Text>
    </ScrollView>
  );
}
