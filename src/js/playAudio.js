export function playAudio(url) {
  if (url.length) {
    let src = "";
    url.forEach((item) => {
      let son = 0;
      if (item.length) {
        src = item;
        son++;
      }
    });
    const audio = document.getElementById("audio");
    audio.src = src;
    const promise = audio.play();

    if (promise !== undefined) {
      promise
        .then(() => {
          audio.play();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
  }
  url = "";
}
