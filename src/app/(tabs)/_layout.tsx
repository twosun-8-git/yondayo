import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/";
import {
  AddIcon,
  ChildrenIcon,
  HomeIcon,
  QuestionIcon,
  StarBookIcon,
} from "@/components/icons/";
import { Black } from "@/constants/Colors";

export default function TabLayout() {
  const pathname = usePathname();

  const currentNavigation = {
    home: pathname === "/",
    ranking: pathname === "/ranking",
    addBook: pathname === "/addBook",
    children: pathname === "/children",
    support: pathname === "/support",
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Black[900],
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        // headerTransparent: currentNavigation.support,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ホーム",
          tabBarIcon: () => <HomeIcon isFill={currentNavigation.home} />,
          tabBarIconStyle: {
            marginTop: -1,
          },
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: "ランキング",
          tabBarIcon: () => <StarBookIcon isFill={currentNavigation.ranking} />,
        }}
      />
      <Tabs.Screen
        name="addBook"
        options={{
          title: "本を追加",
          tabBarIcon: () => <AddIcon isFill={currentNavigation.addBook} />,
        }}
      />
      <Tabs.Screen
        name="children"
        options={{
          title: "お子さま",
          tabBarIcon: () => (
            <ChildrenIcon isFill={currentNavigation.children} />
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "サポート",
          tabBarIcon: () => <QuestionIcon isFill={currentNavigation.support} />,
        }}
      />
    </Tabs>
  );
}
