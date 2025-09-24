import { allData } from "./getWorkers.js";
import render from "./renderWorkers.js";

let search = (e) => {
  let searchValue = e.target.value;
  let filteredData = allData.filter((worker) => {
    return worker.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  render(filteredData);
};

export default search;
