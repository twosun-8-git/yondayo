import { type ClassValue, clsx } from "clsx";
import * as Haptics from "expo-haptics";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function haptic() {
  if (process.env.EXPO_OS === "ios") {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
}
