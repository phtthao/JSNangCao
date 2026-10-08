document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  axios
    .post("http://localhost:3000/students", {
      name,
      age,
      email,
    })
    .then(() => {
      window.location.href = "index.html";
      alert("Them thanh cong");
    });
});
