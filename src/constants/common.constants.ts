export const MOBILE_MAX_SCREEN_WIDTH = 767;

export const TABLET_MAX_SCREEN_WIDTH = 1023;

export const CARD_TRANSLATE_CLASSES = {
  top: "hover:-translate-y-2",
  bottom: "hover:translate-y-2",
  left: "hover:-translate-x-2",
  right: "hover:translate-x-2",
} as const;

export const CARD_SCALE_CLASSES = {
  top: "hover:scale-y-102",
  bottom: "hover:scale-y-98",
  left: "hover:scale-x-98",
  right: "hover:scale-x-102",
  all: "hover:scale-102",
} as const;

export const DEFAULT_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
