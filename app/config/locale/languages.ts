export type IOption = {
  id: number | string;
  text: string;
  value: number[];
};

const languages: IOption[] = [
  {
    id: "en",
    text: "English",
    value: [1],
  },
  {
    id: "ch",
    text: "Chinese",
    value: [2],
  },
  {
    id: "pt",
    text: "Portuguese",
    value: [3],
  },
  {
    id: "es",
    text: "Spanish",
    value: [4],
  },
];

export default languages;
