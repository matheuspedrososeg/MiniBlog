// 3 - Filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: true },
  { name: "João", available: false },
  { name: "Marcos", available: false },
  { name: "Gustavo", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(users);
console.log(availableUsers);
console.log(notAvailableUsers);
