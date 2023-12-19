function caesarCipher(text, factor) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let cipheredString = "";

  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i])) {
      let originalIndex = alphabet.indexOf(text[i]);
      let newIndex = (originalIndex + factor) % alphabet.length;
      cipheredString += alphabet[newIndex];
    }
  }
  return cipheredString;
}

export default caesarCipher;
