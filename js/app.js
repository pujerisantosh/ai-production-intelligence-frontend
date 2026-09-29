const title = document.getElementById("title");

title.textContent = "Production Dashboard";

const incidents = [
  {
    serviceName: "Payment Service",
    message: "Payment API timeout"
  },
  {
    serviceName: "User Service",
    message: "High response latency"
  },
  {
    serviceName: "Order Service",
    message: "Database connection failure"
  }
];

const addIncidentButton = document.getElementById("addIncident");

addIncidentButton.addEventListener("click", function () {

  const card = document.createElement("div");

  card.className = "incident-card";

  card.innerHTML = `
        <h2>${serviceName}</h2>
        <p>${message}</p>
    `;

  const container = document.querySelector(".incident-container");

  container.appendChild(card);
});
