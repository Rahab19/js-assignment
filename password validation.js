function PassValidation(password, commonWords = []) {
    if (password.length === 0) {
      return "The password cannot be blank.";
    }
    for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === password[i + 1]) {
        return "The password cannot contain repeated characters in a row.";
      }
    }
    if (commonWords.includes(password)) {
      return "The password cannot be a common word.";
    }
    return "The password is strong.";
  }
  const commonWords = ["password", "123456"];
  const password = "jjjj";
  const result = PassValidation(password, commonWords);
  console.log(result);