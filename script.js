import { editOrCreate } from "./renderWorkers.js";

import get from "./getWorkers.js";
import search from "./searchWorker.js";
import filter from "./filterWorer.js";
import post from "./postWorkers.js";
import edit from "./editWorkers.js";

let searchNaeme = document.getElementById("searchName");
let gender = document.getElementById("gender");
let isMarried = document.getElementById("isMarried");
let addOpenModal = document.getElementById("addOpenModal");
let addModal = document.getElementById("modal-backdrop");
let name = document.getElementById("name");
let tel = document.getElementById("tel");
let genderInput = document.getElementById("genderInput");
let isMarriedInput = document.getElementById("isMarriedInput");
let cancel = document.getElementById("cancel");
let postWorker = document.getElementById("postWorker");

export const urlAPI =
  "https://68bab9be84055bce63eff637.mockapi.io/api/v1/workers/";

searchNaeme.addEventListener("input", (e) => {
  search(e);
});

gender.addEventListener("change", (e) => {
  filter(e);
});

isMarried.addEventListener("change", (e) => {
  filter(e);
});

addOpenModal.addEventListener("click", () => {
  addModal.style.display = "flex";
  editOrCreate.value = "post";
});

cancel.addEventListener("click", () => {
  addModal.style.display = "none";
  name.value = "";
  tel.value = "";
  genderInput.checked = "";
  isMarriedInput.checked = "";
});

postWorker.addEventListener("click", () => {
  let worker = {
    name: name.value,
    tel: tel.value,
    gender: genderInput.checked,
    isMarried: isMarriedInput.checked,
  };
  if (editOrCreate.value === "post") {
    post(urlAPI, worker);
  } else if (editOrCreate.value === "edit") {
    edit(urlAPI, editOrCreate.id, worker);
  }
});

get(urlAPI);
