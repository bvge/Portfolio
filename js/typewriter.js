document.addEventListener('DOMContentLoaded', () => {
  const textBefore = "Hey there! My name is ";
  const fakeName   = "**** *******";
  const realName   = "COLE";
  const afterName  = " ADEDEJI, Welcome!";
  const typeSpeed  = 100;
  const deleteSpeed= 50;

  const el = document.getElementById("typewriter");

  function typeText(text, cb) {
    let i = 0;
    (function tick(){
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(tick, typeSpeed);
      } else if (cb) cb();
    })();
  }

  function deleteText(count, cb) {
    (function wipe(){
      if (count > 0) {
        el.textContent = el.textContent.slice(0, -1);
        count--;
        setTimeout(wipe, deleteSpeed);
      } else if (cb) cb();
    })();
  }

  // sequence
  typeText(textBefore, () => {
    typeText(fakeName, () => {
      // tiny pause before deleting the asterisks
      setTimeout(() => {
        deleteText(fakeName.length, () => {
          typeText(realName, () => {
            typeText(afterName);
            // no fade-out; blink continues forever
          });
        });
      }, 400);
    });
  });
});