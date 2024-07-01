import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <View className="mt-[50%] mb-36 w-72 mx-auto">
          <Text className="text-2xl text-white text-center">
            This is just a dummy page that is not in work as of now!
          </Text>
        </View>
        <CustomButton
          title="Go to Home"
          handlePress={() => router.push("/home")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;
