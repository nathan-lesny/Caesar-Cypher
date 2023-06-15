function rot13(str) {
  let decoded = '';
  for(let i = 0; i < str.length; i++) {
    let letter = str.charCodeAt(i);
    if(letter >= 'A'.charCodeAt(0) && letter <= 'Z'.charCodeAt(0)) {
      if(letter <= 'M'.charCodeAt(0)) {
        letter += 13;
      }
      else {
        letter -= 13;
      }
    }
      decoded += String.fromCharCode(letter);
  }
  return decoded;
}