let user = {
  name: "Ali",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

user.greet(); // "Hello Ali"

// Common object operations:
Object.keys(user);     // ['name', 'greet']
Object.values(user);   // ['Ali', function]
Object.entries(user);  // [['name', 'Ali'], ['greet', ƒ]]

Object.assign({}, user); // shallow copy

// Newer syntax
let user2 = { ...user }; // spread syntax
