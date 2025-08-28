// Select elements
document.getElementById("myId")
document.querySelector(".myClass")
document.querySelectorAll("div")

// Modify content
element.textContent = "Hello"
element.innerHTML = "<b>Bold</b>"

// Modify styles
element.style.color = "red"

// Events
element.addEventListener("click", () => {
  alert("Clicked!");
})

// Create & append
let p = document.createElement("p")
p.textContent = "New paragraph"
document.body.appendChild(p)
