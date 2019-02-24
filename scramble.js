/**
 * Generates the random text
 * 
 * Printable ASCII starts at 32 and ends at 126, excluding
 * SPACE (32) which is not compatible with monospace fonts
 * 
 * 126 - 33 + 1 = 94
 * 
 * @param {*} textLen length of textContent
 */
function jumble(textLen) {
  let newText = "";
  for (let i = 0; i < textLen; i++) {
    const random = Math.floor(Math.random() * 94) + 33;
    newText += String.fromCharCode(random);
  }
  return newText;
}

/**
 * Scrambles the text in element given and decodes it letter by letter
 * 
 * @author Ignatius Bagus
 * @param {*} textElement takes an element
 */
function scramble(textElement) {
  const initialName = nameTag.textContent;
  const nameLen = textElement.textContent.length;

  function scramble(decodedLetters) {
    let newText = "";
    if (decodedLetters > 0) newText = initialName.substr(0, decodedLetters);
    nameTag.textContent = newText + jumble(nameLen - decodedLetters);
  }
  let letterIndex = 0;
  let scrambleTimer = setInterval(function () {
    scramble(letterIndex);
  }, 30);
  let letterIteration = setInterval(function () {
    clearInterval(scrambleTimer);
    scrambleTimer = setInterval(function () {
      scramble(letterIndex);
    }, 30);
    if (letterIndex++ === nameLen) {
      clearInterval(scrambleTimer);
      clearInterval(letterIteration);
    }
  }, 300);
}