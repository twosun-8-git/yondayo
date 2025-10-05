const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// パスエイリアスを追加
config.resolver.alias = {
  "@": path.resolve(__dirname, "src"),
};

// Expo Routerの設定を追加
config.resolver.platforms = ["ios", "android", "native", "web"];

module.exports = withNativeWind(config, { input: "./src/global.css" });
