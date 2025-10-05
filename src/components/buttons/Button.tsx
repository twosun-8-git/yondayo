import { Pressable, PressableProps, Text } from "react-native";

import { cn, haptic } from "@/utils";

type Props = PressableProps & {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  fill?: boolean;
  className?: string;
};

export function Button(props: Props) {
  const {
    children,
    onPress,
    disabled = false,
    fill = true,
    className,
    ...rest
  } = props;

  const handlePress = () => {
    onPress();
  };

  const fillColor = disabled ? "bg-gray-300" : "bg-red-700";
  const lineColor = disabled
    ? "border border-gray-300"
    : "border border-red-700";

  const textColor = fill
    ? "text-white-700"
    : disabled
    ? "text-gray-300"
    : "text-red-700";

  return (
    <Pressable
      {...rest}
      onPress={handlePress}
      onPressIn={haptic}
      disabled={disabled}
      className={cn(
        fill ? fillColor : lineColor,
        "flex items-center justify-center min-w-15.5 h-7 rounded-full pt-1.75 pb-2 px-4",
        className
      )}
    >
      <Text className={cn(textColor, "text-sm font-bold")}>{children}</Text>
    </Pressable>
  );
}
