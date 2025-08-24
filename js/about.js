document.addEventListener('DOMContentLoaded', () => {
  const textBefore  = "Hello again, I post most of my projects on ";
  const fakeName    = "likndein"; 
  const realName    = "linkedin";
  const afterName   = " for now, please check them out and leave a follow. ︶ ";
  const typeSpeed   = 100;
  const deleteSpeed = 50;

  const el = document.getElementById("typewriter2");

  function typeText(text, cb) {
    let i = 0;
    (function tick(){
      if (i < text.length) {
        el.innerHTML += text[i++];
        setTimeout(tick, typeSpeed);
      } else if (cb) cb();
    })();
  }

  function deleteText(count, cb) {
    (function wipe(){
      if (count > 0) {
        el.innerHTML = el.innerHTML.slice(0, -1);
        count--;
        setTimeout(wipe, deleteSpeed);
      } else if (cb) cb();
    })();
  }

  // sequence
  typeText(textBefore, () => {
    typeText(fakeName, () => {
      setTimeout(() => {
        // delete the fake name fully
        deleteText(fakeName.length, () => {
          // then insert realName as clickable link
          el.innerHTML += `<a href="https://www.linkedin.com/in/cole-adedeji-374234222" 
                              target="_blank" 
                              style="color:blue; text-decoration:none;">
                              ${realName}
                           </a>`;
          typeText(afterName);
        });
      }, 400);
    });
  });
});
