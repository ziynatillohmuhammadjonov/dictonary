function creatElement(parenEl, creatEl = "", elClass = "", data, count = 1) {
  // console.log(
  //   "Ota elelment: " + parenEl,
  //   "Yangi element: " + creatEl,
  //   "Element classi: " + elClass,
  //   "MA'lumot: " + data,
  //   "Soni: " + count
  // );
  const arr = [];
  if (Array.isArray(data)) {
    for (let i = 0; i < count; i++) {
      if (creatEl == "a") {
        let elem = `<${creatEl} class="${elClass}" href="./index.html?q=${data[i]}">${data[i]}</${creatEl}>`;
        arr.push(elem);
      } else {
        let elem = `<${creatEl} class="${elClass}">${data[i]}</${creatEl}>`;
        arr.push(elem);
      }
    }
  } else {
    arr.push(`<${creatEl} class="${elClass}">${data}</${creatEl}>`);
  }
  let son = 0;
  arr.forEach((item) => {
    if (son < count) {
      parenEl.innerHTML += item;
      son++;
    }
  });
  return arr;
}
export default creatElement;
