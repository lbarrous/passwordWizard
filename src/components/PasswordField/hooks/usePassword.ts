import { useState } from "react";
import zxcvbn from "zxcvbn";
import { isPasswordTooShort } from "../../../utils";

export const usePassword = (
  currentPassword: string,
  minLength: number,
) => {
  const [password, setPassword] = useState(currentPassword);
  const [score, setScore] = useState(zxcvbn(password).score as number);

  const handleChange = (password: string) => {
    let score = 0;
    let result = null;

    // always sets a zero score when min length requirement is not met
    // avoids unnecessary zxcvbn computations (CPU intensive)
    if (!isPasswordTooShort(password, minLength)) {
      result = zxcvbn(password);
      score = result.score;
    }

    setScore(score);
    setPassword(password);
  };

  return {
    handleChange,
    password,
    score,
  };
};
