import { adjactives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjactives.length);
  return `${adjactives[randomNumber]} ${nouns[randomNumber]}`;
};
