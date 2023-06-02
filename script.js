const form = document.getElementById('form');
const tbody = document.getElementById('tbody');

let users = [];

// Function to add a user
function addUser(name, email, phone, gender) {
  const user = { name, email, phone, gender };
  users.push(user);
  renderTable();
}

// Function to render the table
function renderTable() {
  tbody.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.gender}</td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Function to handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const gender = document.getElementById('gender').value;
  addUser(name, email, phone, gender);
  form.reset();
});

// Function to edit a user
function editUser(index) {
  const user = users[index];
  const name = prompt('Enter new name:', user.name);
  const email = prompt('Enter new email:', user.email);
  const phone = prompt('Enter new phone number:', user.phone);
  const gender = prompt('Enter new gender:', user.gender);
  if (name && email && phone && gender) {
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.gender = gender;
    renderTable();
  }
}

// Function to delete a user
function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}

// Function to delete a user
function deleteUser(index) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      users.splice(index, 1);
      renderTable();
    }
  }
  