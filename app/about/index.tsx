import { ScrollView } from "react-native";
import CallImmediately from "@/components/CallImmediately";
import Headline from "@/components/Headline";

export default function Page() {
  return (
    <ScrollView className="w-11/12 mx-auto">
      <CallImmediately />
      <Headline title="Welcome, About page!" />
    </ScrollView>
  );
}
