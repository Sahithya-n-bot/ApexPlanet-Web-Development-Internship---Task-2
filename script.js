document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("🚫 Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("❗ Please enter a valid email address.");
    return;
  }

  alert("✅ Form submitted successfully! Thank you 😊");
  this.reset();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (!taskValue) return;

  const li = document.createElement("li");
  li.innerHTML = `${taskValue} <button onclick="removeTask(this)">❌</button>`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
