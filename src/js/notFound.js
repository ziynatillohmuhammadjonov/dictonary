function notPages(boolean) {
  const notFoundEl = document.getElementById("notFound");
  const mainEl = document.querySelector(".main");
  if (!boolean) {
    notFoundEl.classList.remove("hidden");
    mainEl.classList.add("hidden");
  } else {
    notFoundEl.classList.add("hidden");
    mainEl.classList.remove("hidden");
  }
}
export default notPages;
