let original = { name: "Ali", address: { city: "Lahore" } };

// Shallow copy
let copy1 = { ...original };
copy1.address.city = "Karachi";
console.log(original.address.city); // "Karachi" ❌

/* Deep copy using JSON (not for functions) */
let copy2 = JSON.parse(JSON.stringify(original));
copy2.address.city = "Multan";
console.log(original.address.city); // "Karachi" ✅
