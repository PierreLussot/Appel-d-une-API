const grid = document.getElementById("grid-container");

fetchUsers = async () => {
  let req = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(req);
  let response = await data.json();
  console.log(response);

  response.forEach((element) => {
    const cell = document.createElement("div");
    cell.classList.add("item");

    const cellpara = document.createElement("p");
    cellpara.innerHTML = element.name;
    cellpara.appendChild(cell);

    console.log(element.name);

    grid.appendChild(cell);
  });
};
fetchUsers();
