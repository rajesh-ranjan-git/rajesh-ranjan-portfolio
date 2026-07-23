import { ToastPositionType } from "@/types/types/toast.types";

export const getToastOffsetX = (position: ToastPositionType) => {
  const isLeft = position.includes("left");
  const isRight = position.includes("right");

  if (isLeft) return -100;
  if (isRight) return 100;
  return 0;
};
