const grid = document.getElementById("grid-container");

fetchUsers = async () => {
  let req = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(req);
  let response = await data.json();

  response.forEach((element) => {
    const cell = document.createElement("div");
    const cardClient = document.createElement("div");
    const nameClient = document.createElement("div");
    const emailClient = document.createElement("div");
    const phoneClient = document.createElement("div");
    const cellName = document.createElement("p");
    const cellEmail = document.createElement("p");
    const cellPhone = document.createElement("p");

    cell.classList.add("card-client");
    cardClient.classList.add("card-client");
    nameClient.classList.add("name-client");
    emailClient.classList.add("email-client");
    phoneClient.classList.add("phone-client");

    cellName.innerHTML = element.name;
    cellEmail.innerHTML = element.email;
    cellPhone.innerHTML = element.phone;

    cell.appendChild(cellName);
    cell.appendChild(cellEmail);
    cell.appendChild(cellPhone);
    grid.appendChild(cell);
  });
};
fetchUsers();
