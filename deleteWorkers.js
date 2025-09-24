import get from "./getWorkers.js";

let deleteData = async (urlAPI, id) => {
  let response = await fetch(urlAPI + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    Toastify({
      text: "Delete worker",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #f81c32ff, #3b000eff)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    get(urlAPI);
  }
  return response;
};

export default deleteData;
