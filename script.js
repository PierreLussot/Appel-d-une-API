const grid = document.getElementById("grid-container");

fetchUsers = async () => {
  let req = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(req);
  let response = await data.json();
  console.log(response);

  response.forEach((element) => {
    const cell = document.createElement("div");
    const cellname = document.createElement("p");
    const cellEmail = document.createElement("p");
    const cellphone = document.createElement("p");

    cell.classList.add("item");

    cellname.innerHTML = element.name;
    cellEmail.innerHTML = element.email;
    cellphone.innerHTML = element.phone;

    cell.appendChild(cellname);
    cell.appendChild(cellEmail);
    cell.appendChild(cellphone);

    grid.appendChild(cell);
  });
};
fetchUsers();
