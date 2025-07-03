const userList = document.getElementById("user-list");
const errorMessage = document.getElementById("error-message");

function fetchUsers() {
  userList.innerHTML = "";
  errorMessage.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      errorMessage.textContent = "Failed to load user data. Please check your connection.";
      console.error("Fetch error:", error);
    });
}

// Fetch on load
window.onload = fetchUsers;
