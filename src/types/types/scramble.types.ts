export type ScrambleChar = {
  char: string;
  settled: boolean;
};

export type ScrambleTextHandle = {
  play: () => void;
};
