const id = new URLSearchParams(location.search).get("id");

axios.get(`http://localhost:3000/students/${id}`).then((res) => {
  const student = res.data;
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("email").value = student.email;
});

document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const data = {
    name,
    age,
    email,
  };

  if (name === "") {
    alert("Họ tên không được để trống");
    return;
  }

  if (age <= 0) {
    alert("Tuổi phải lớn hơn 0");
    return;
  }

  if (email === "") {
    alert("Email không được để trống");
    return;
  }

  axios.put(`http://localhost:3000/students/${id}`, data).then(() => {
    alert("Cập nhật thành công");
  });
});
