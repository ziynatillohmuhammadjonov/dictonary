const body = document.body;
const modeBtn = document.getElementById("checkbox");
if (JSON.parse(localStorage.getItem("mode"))) {
  console.log();
  body.classList.add("dark-mode");
  console.log(modeBtn);
  modeBtn.checked = true;
}
modeBtn.addEventListener("change", () => {
  console.log("chek");
  body.classList.toggle("dark-mode");
  const mode = body.classList.contains("dark-mode");
  localStorage.setItem("mode", mode);
});

const modeFunc = (boolean) => {};
