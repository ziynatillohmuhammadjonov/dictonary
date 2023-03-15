import updateMain from "./updateUI";
import getData from "./request";

const formUpdate = () => {
  const form = document.querySelector("form");
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const key = form.search.value.trim();
    let count = 0;
    getData(url + key)
      .then((data) => {
        if (Array.isArray(data)) {
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
  });
};
export default formUpdate;
