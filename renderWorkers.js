import { urlAPI } from "./script.js";

import deleteData from "./deleteWorkers.js";

let editOrCreate = {
  value: "edit",
  id: null,
};
let render = async (allWorkers) => {
  let workers = document.getElementById("workers");

  workers.innerHTML = "";

  if (allWorkers.length === 0) {
    let noWorkers = document.createElement("p");
    noWorkers.textContent = "Xodimlar mavjud emas";
    workers.appendChild(noWorkers);
  } else {
    allWorkers.forEach((worker) => {
      let workerCard = document.createElement("div");
      workerCard.classList.add("card");

      let actions = document.createElement("div");
      actions.classList.add("actions");

      let editButton = document.createElement("button");
      editButton.classList.add("edit");
      editButton.textContent = "Tahrirlash";

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.textContent = "O'chirish";

      deleteButton.addEventListener("click", () => {
        deleteData(urlAPI, worker.id);
      });

      editButton.addEventListener("click", () => {
        let modal = document.getElementById("modal-backdrop");
        modal.style.display = "flex";

        editOrCreate.value = "edit";
        editOrCreate.id = worker.id;

        let name = document.getElementById("name");
        let tel = document.getElementById("tel");
        let genderInput = document.getElementById("genderInput");
        let isMarriedInput = document.getElementById("isMarriedInput");
        name.value = worker.name;
        tel.value = worker.tel;
        genderInput.checked = worker.gender;
        isMarriedInput.checked = worker.isMarried;
      });

      actions.appendChild(editButton);
      actions.appendChild(deleteButton);

      workerCard.innerHTML += `
        <img src="https://i.pravatar.cc/100?img=${worker.id}" alt="Xodim rasmi" />
        <h3>${worker.name}</h3>
        <p>Tel: ${worker.tel}</p>
        <p>${worker.gender ? "Erkak" : "Ayol"} · ${worker.isMarried ? "Oilali" : "Yolg'iz"}</p>
      `;

      workerCard.appendChild(actions);

      workers.appendChild(workerCard);
    });
  }
};

export { editOrCreate };
export default render;
