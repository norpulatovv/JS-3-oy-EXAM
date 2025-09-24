import clearForm from "./clearForm.js";
import get from "./getWorkers.js";
import clear from "./clearForm.js";

let post = async (urlAPI, data) => {
  let response = await fetch(urlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    Toastify({
      text: "Add worker",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #37f95eff, #07601bff)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    let addModal = document.getElementById("modal-backdrop");

    get(urlAPI);
    addModal.style.display = "none";
    clear();
  }
};

export default post;
