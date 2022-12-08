import { rules } from "../rules";

const getReplacementTextByNumber = (number) => {
  for (const rule of rules) {
    if (rule.matches(number)) {
      return rule.getReplacementText();
    }
  }
  return number;
};

export { getReplacementTextByNumber };
