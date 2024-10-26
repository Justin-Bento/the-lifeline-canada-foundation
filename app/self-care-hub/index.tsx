import CompanyLogo from "@/components/CompanyLogo";
import { ScrollView, Text } from "react-native";

export default function Page() {
  return (
    <ScrollView className="wrapper">
      <CompanyLogo />
      <Text>Welcome, Self-Care Hub page!</Text>
    </ScrollView>
  );
}
