// array[]

const student1 = "Nguyễn Văn An";
const student2 = "Trần Thị Bình";
const student3 = "Lê Văn Chi";

const students = ["Nguyễn Văn An", "Trần Thị Bình", "Lê Văn Chi"];
const ids = [1, 5, 23, 46, 54];
const actives = [true, false, 42, "hoadv21"];
// danh index: 0, 1, 2
console.log("ban đầu", students);
students[0] = "hoadv";

console.log("sau khi thay đổi", students);
console.log("độ dài mảng:", students.length);

// Bài 1: Array cơ bản
const names = ["An", "Bình", "Nam", "Hòa", "Lan"]; 
console.log("Danh sách tên:", names);
console.log("Tên đầu tiên:", names[0]);
console.log("Tên cuối cùng:", names[names.length - 1]);
console.log("Số lượng tên:", names.length);
names.push("Hải");
console.log(students);
names.pop();


// Bài 2: Duyêt mảng
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
