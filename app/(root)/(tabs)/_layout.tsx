import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Icon from "../../../assets/icons/home.svg";
import Icon2 from "../../../assets/icons/heart.svg";
import Icon3 from "../../../assets/icons/search.svg";
import Icon4 from "../../../assets/icons/user.svg";
import IconPlus from "../../../assets/icons/plus.svg";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const TabLayout = () => {
  // Valeur partagée pour l'animation de rebond
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = 1.2; // Taille augmentée
    scale.value = withSpring(1, { damping: 2, stiffness: 200 }); // Rebond vers 1
  };

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: "#f1c40f",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Animated.View
              style={[styles.iconContainer, focused ? animatedStyle : null]}
              onTouchStart={handlePress}
            >
              {/* Ajoute ton icône ici */}
              <Icon
                width={34}
                height={34}
                fill={focused ? "#f1c40f" : "gray"}
              />

              {/* <Text>s</Text> */}
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "",
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Animated.View
              style={[styles.iconContainer, focused ? animatedStyle : null]}
              onTouchStart={handlePress}
            >
              {/* Ajoute ton icône ici */}
              <Icon2
                width={34}
                height={34}
                fill={focused ? "#f1c40f" : "gray"}
              />

              {/* <Text>s</Text> */}
            </Animated.View>
          ),
        }}
      />

      <Tabs.Screen
        name="plus"
        options={{
          tabBarLabel: "",
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Animated.View
              style={[
                styles.iconContainer,
                focused ? animatedStyle : null,
                {
                  borderWidth: 1,
                  padding: 4,
                  borderRadius: 100,
                  borderColor: focused ? "#f1c40f" : "gray",
                },
              ]}
              onTouchStart={handlePress}
            >
              {/* Ajoute ton icône ici */}
              <IconPlus
                width={34}
                height={34}
                fill={focused ? "#f1c40f" : "gray"}
              />

              {/* <Text>s</Text> */}
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "",
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Animated.View
              style={[styles.iconContainer, focused ? animatedStyle : null]}
              onTouchStart={handlePress}
            >
              {/* Ajoute ton icône ici */}
              <Icon3
                width={34}
                height={34}
                fill={focused ? "#f1c40f" : "gray"}
              />

              {/* <Text>s</Text> */}
            </Animated.View>
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: "",
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Animated.View
              onTouchStart={handlePress}
              style={[styles.iconContainer, focused ? animatedStyle : null]}
            >
              {/* Ajoute ton icône ici */}
              <Icon4
                width={34}
                height={34}
                fill={focused ? "#f1c40f" : "gray"}
              />

              {/* <Text>s</Text> */}
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 98,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    borderTopLeftRadius: 100, // Arrondi en haut à gauche
    borderTopRightRadius: 100, // Arrondi en haut à droite
    backgroundColor: "#333333",
    borderRadius: 50,
    overflow: "hidden",
  },
  iconContainer: {
    // backgroundColor: "#222",
    // marginTop: 343,
    // alignItems: "center",
    // Arrière-plan de l'icône (optionnel)
    // borderRadius: 50, // Pour des icônes circulaires
    // padding: 10,
  },
});

export default TabLayout;
