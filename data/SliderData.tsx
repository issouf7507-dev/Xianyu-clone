import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: any;
  description: string;
};
export const imageSliders = [
  {
    title: "Title 1",
    image: require("../assets/images/banner-B.jpg"),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta, inventore ipsam magni temporibus nihil nam accusamus eius officia, possimus ad quod explicabo tempore ratione beatae mollitia fuga, ducimus nisi?",
  },

  {
    title: "Title 2",
    image: require("../assets/images/blackF.jpg"),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta, inventore ipsam magni temporibus nihil nam accusamus eius officia, possimus ad quod explicabo tempore ratione beatae mollitia fuga, ducimus nisi?",
  },

  {
    title: "Title 3",
    image: require("../assets/images/blackF.jpg"),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta, inventore ipsam magni temporibus nihil nam accusamus eius officia, possimus ad quod explicabo tempore ratione beatae mollitia fuga, ducimus nisi?",
  },
];
