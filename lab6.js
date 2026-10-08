const id = new URLSearchParams(location.search).get("id");

// axios.get(`http://localhost:3000/students/${id}`).then((res) => {
//   const student = res.data;
// document.getElementById("name").value = student.name;
// document.getElementById("age").value = student.age;
// document.getElementById("email").value = student.email;
// })
// .catch(() => {
//   alert("Không tìm thấy sinh viên");
// });

async function getStudent() {
  try {
    const res = await axios.get(`http://localhost:3000/students/${id}`);
    console.log(res.data);
    document.getElementById("name").value = res.data.name;
    document.getElementById("age").value = res.data.age;
    document.getElementById("email").value = res.data.email;
  } catch (error) {
    console.error(error);
    alert("error.message");
  }
}

getStudent();
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

  if (age <= 0 || isNaN(age) || age === "") {
    alert("Tuổi phải lớn hơn 0");
    return;
  }

  if (email === "") {
    alert("Email không được để trống");
    return;
  }

  axios.put(`http://localhost:3000/students/${id}`, data).then(() => {
    window.location.href = "index.html";
    alert("Cập nhật thành công");
  });
});
