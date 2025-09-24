import { allData } from "./getWorkers.js";
import render from "./renderWorkers.js";

let filter = (e) => {
  let searchValue = e.target.value;

  if (searchValue === "all") {
    render(allData);
  } else if (searchValue === "male") {
    let filteredData = allData.filter((worker) => {
      return worker.gender === true;
    });
    render(filteredData);
  } else if (searchValue === "female") {
    let filteredData = allData.filter((worker) => {
      return worker.gender === false;
    });
    render(filteredData);
  } else if (searchValue === "married") {
    let filteredData = allData.filter((worker) => {
      return worker.isMarried === true;
    });
    render(filteredData);
  } else if (searchValue === "unmarried") {
    let filteredData = allData.filter((worker) => {
      return worker.isMarried === false;
    });
    render(filteredData);
  }
};

export default filter;
