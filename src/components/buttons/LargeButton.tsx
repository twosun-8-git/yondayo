import Feather from "@expo/vector-icons/Feather";
import { Pressable, PressableProps, Text } from "react-native";

import { cn, haptic } from "@/utils";

type Props = PressableProps & {
  children: React.ReactNode;
  color?: "red" | "blue";
  onPress: () => void;
  className?: string;
  icon?: "check" | "plus" | "cart";
  iconSize?: number;
};

export function LargeButton(props: Props) {
  const {
    children,
    color = "red",
    onPress,
    className,
    icon,
    iconSize = 16,
    ...rest
  } = props;

  const handlePress = () => {
    onPress();
  };

  const icons = {
    check: <Feather name="check" size={iconSize} color="white" />,
    plus: <Feather name="plus" size={iconSize} color="white" />,
    cart: <Feather name="shopping-cart" size={iconSize} color="white" />,
  };

  return (
    <Pressable
      {...rest}
      onPress={handlePress}
      onPressIn={haptic}
      className={cn(
        color === "red" ? "bg-red-700" : "bg-blue-700",
        "flex-row items-center justify-center w-full h-11 rounded-full py-3 px-4 gap-x-1",
        className
      )}
    >
      {icon && icons[icon]}
      <Text className={cn("text-white-700 font-bold pt-0.25")}>{children}</Text>
    </Pressable>
  );
}
