document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone })
  });

  fetchUsers();
});

async function fetchUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();

  const list = document.getElementById('userList');
  list.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `${user.name} - ${user.email} - ${user.phone}
      <button onclick="deleteUser(${user.id})">Delete</button>`;
    list.appendChild(li);
  });
}

async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: 'DELETE' });
  fetchUsers();
}

fetchUsers();
