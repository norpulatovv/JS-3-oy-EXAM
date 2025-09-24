import render from "./renderWorkers.js";

let allData = [];

let workers = document.getElementById("workers");
function showLoading() {
  workers.innerHTML = "";
  let loader = document.createElement("div");
  loader.textContent = "Loading...";
  workers.appendChild(loader);
}

let get = async (urlAPI) => {
  if (workers.children.length < 1) showLoading();

  let response = await fetch(urlAPI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();

  render(data);
  allData = [...data];
};

export { allData };

export default get;
