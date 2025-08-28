function testVar() {
  if (true) {
    var a = 5; // accessible outside if
    let b = 10; // only inside if
    const c = 20; // only inside if
  }
  console.log(a); // ✅
  console.log(b); // ❌
}
