export const getRandomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const toTitleCase = (text?: string | null) => {
  if (!text) {
    return "";
  }

  return text
    .toLowerCase()
    .split("_")
    .join(" ")
    .split("-")
    .join(" ")
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return "";
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const toSentenceCase = (text?: string | null) => {
  if (!text) {
    return "";
  }

  let temp = text.toLowerCase().split("_").join(" ").split("-").join(" ");

  return temp.charAt(0).toUpperCase() + temp.slice(1) + ".";
};
