const users = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 17, email: 'bob@example.com' },
    { name: 'Charlie', age: 21, email: 'charlie@example.com' },
    { name: 'David', age: 19, email: 'david@example.com' }
  ];
  // Expected Output: ['alice@example.com', 'charlie@example.com']

  const femail = users
    .filter(user=>user.age>=21)
    .map(user=>user.email);

console.log(femail);
  