import { useState } from "react";
import zxcvbn from "zxcvbn";

export const usePassword = (
  currentPassword: string,
  minLength: number,
) => {
  const [password, setPassword] = useState(currentPassword);
  const [score, setScore] = useState(zxcvbn(password).score as number);
  const [isValid, setIsValid] = useState(false);

  const regex = /^(?=.*[A-Z])(?=.*\d).*$/;

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
    setIsValid(regex.test(password));
    setPassword(password);
  };

  const isTooShort = (password: string, minLength: number) =>
  password.length < minLength;

  return {
    handleChange,
    password,
    score,
    isValid
  };
};
