import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "linear-gradient(to right, #ed213a, #93291e)",
  primaryBright: "#FF4B2B",
  primaryDark: "#da22ff",
  secondary: "linear-gradient(to right, #f00000, #dc281e)",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  backgroundImg: '',
  title: "#000000",
  navBar: "linear-gradient(to right, #000000, #434343)",
  sideBar: "linear-gradient(to right, #000000, #434343)",
  heading:"#7f00ff",
  background: " #434343",
  backgroundDisabled: "#000",
  minibg:"/images/darkbg.png",
  lotterybg:"/images/whitelottery.png",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "linear-gradient(to left, #000000, #434343)",
  tertiary: "#EFF4F5",
  text: "#E5E5E5",
  textDisabled: "#BDC2C4",
  textSubtle: "#000",
  borderColor: "#E9EAEB",
  card: "linear-gradient(to right, #000000, #434343)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  backgroundImg: '/bg1.gif',
  title: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#DC143C",
  background: "#000000",
  minibg:"/images/whitebg.png",
  lotterybg:"/images/blacklottery.png",
  heading:"linear-gradient(to right, #7f00ff, #e100ff)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
