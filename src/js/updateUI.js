import creatElement from "./creatElement";
import notPages from "./notFound";
import { playAudio } from "./playAudio";
const meaningText = [];
const synonmusText = [];

function updateMain(mal) {
  const audioSourse = "";
  const mainEl = document.querySelector(".main");
  const mainingEl = document.getElementById("meaning-list");
  const resultEl = document.getElementById("result");
  const resultButton = document.querySelector(".result-button");
  const meaningFirst = document.getElementById("meaning-first");
  const synonymusEl = document.querySelector(".synonymus");
  const synonmusSpanEl = document.querySelector(".synonymus-text");
  const meaningFirsTitleEl = document.getElementById("meaning-first-title");
  const sourceEl = document.querySelector(".source");
  const { word, sourceUrls, phonetic, phonetics, meanings } = mal;

  sourceEl.innerHTML = `
  <a href=${sourceUrls} class="source-link"
            >Source:
            <span class="source-text"
              >${sourceUrls}</span
            >
            <img src="./images/icon-new-window.svg" alt="" srcset=""
          /></a>
  `;
  resultEl.textContent = "";
  creatElement(resultEl, "h1", "result-heading", word, 1);
  const phoneticText = [];
  phonetics.forEach((item) => {
    if (item.text) {
      phoneticText.push(item.text);
    }
  });
  creatElement(resultEl, "p", "result-tarnskript", phoneticText);
  // audio setup
  const audioSouce = [];
  phonetics.forEach((item) => {
    audioSouce.push(item.audio);
  });

  resultButton.addEventListener("click", () => {
    playAudio(audioSouce);
  });

  // Meaningslar bo'limi
  let meaningFirsTitle = [];
  meanings.forEach((element) => {
    synonmusText.push(element.synonyms);
    const { partOfSpeech, definitions } = element;
    meaningFirsTitle.push(partOfSpeech);
    definitions.forEach((item) => {
      meaningText.push(item.definition);
    });
  });
  meaningFirsTitleEl.textContent = "";
  meaningFirsTitleEl.textContent = meaningFirsTitle[0];

  let newSynonmus = [];
  let son = 0;
  synonmusText.forEach((text) => {
    if (text.length) {
      newSynonmus = [];
      text.forEach((item) => {
        newSynonmus.push(item);
      });
    } else {
      if (son < 1) {
        newSynonmus.push("No Synonimus");
        son++;
      }
    }
  });
  mainingEl.textContent = "";
  creatElement(mainingEl, "li", "meaning-item", meaningText, 3);
  synonymusEl.textContent = "Synonyms: ";
  synonmusSpanEl.textContent = "";
  creatElement(
    synonymusEl,
    "a",
    "synonymus-text",
    newSynonmus,
    newSynonmus.length
  );
}

export default updateMain;
