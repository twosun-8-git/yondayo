import { Text, View } from "react-native";

import { Button, LargeButton } from "@/components/buttons";

export default function Screen() {
  return (
    <View className="flex h-full items-center bg-white">
      <Text className="text-lg font-bold text-blue-500">Home</Text>
      <Button
        onPress={() => {
          console.log("pressed");
        }}
        disabled={false}
      >
        削除する
      </Button>
      <LargeButton
        icon="plus"
        color="blue"
        onPress={() => {
          console.log("pressed");
        }}
      >
        バーコードをスキャンして追加する
      </LargeButton>
    </View>
  );
}
