import { useState } from "react";
import zxcvbn from "zxcvbn";

export const usePassword = (
  currentPassword: string,
  minLength: number,
  minScore: number
) => {
  const [password, setPassword] = useState(currentPassword);
  const [score, setScore] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const clear = () => {
    setScore(0);
    setIsValid(false);
    setPassword("");
  };

  const handleChange = (password: string) => {
    let score = 0;
    let result = null;

    // always sets a zero score when min length requirement is not met
    // avoids unnecessary zxcvbn computations (CPU intensive)
    if (isTooShort(password, minLength) === false) {
      result = zxcvbn(password);
      score = result.score;
    }

    setScore(score);
    setIsValid(score >= minScore);
    setPassword(password);
  };

  const isTooShort = (password: string, minLength: number) =>
  password.length < minLength;

  return {
    clear,
    handleChange,
    isTooShort,
    password,
    score,
    isValid
  };
};
