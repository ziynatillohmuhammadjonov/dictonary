import "../css/style.css";
import "./updateUI";
import "./request";
import "./mode";
import "./playAudio";
import "./form";
import formUpdate from "./form";
import getData from "./request";
import updateMain from "./updateUI";
const form = document.querySelector("form");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const urlParams = window.location.search;
const key = new URLSearchParams(urlParams);
const word = key.get("q");
form.search.value = word;
if (word) {
  getData(url + word)
    .then((data) => {
      if (Array.isArray(data)) {
        let count = 0;
        data.forEach((element) => {
          if (count < 1) {
            updateMain(element);
            count++;
          }
        });
      } else {
        updateMain(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

formUpdate();
