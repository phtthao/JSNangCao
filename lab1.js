// Bài 1: Khai báo biến
let name = "Nguyễn Văn An";
let age = 20;
let address = "Hà Nội";
let isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);

// Bài 2: Thay đổi giá trị biến
console.log(age);
age = 21;
console.log(age);

// Bài 3: Tính toán với biến
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

// Bài 4: Hàm chào hỏi
function sayHello(name) {
  console.log("Xin chào", name);
}

sayHello("An");
sayHello("Bình");
sayHello("Chi");

// Bài 5: Hàng tính tổng
function sum(a, b) {
  console.log("Tổng:", a + b);
}

sum(3, 4);
sum(10, 20);

// Bài 6: Hàm tính tiền
function calculateTotal(price, quantity) {
  const total = price * quantity;
  console.log("Tổng tiền:", total);
}

calculateTotal(10000, 3);
calculateTotal(5000, 5);

// Bài 7: Hàm tính điểm trung bình
function calculateAverage(math, english, javascript) {
  const average = (math + english + javascript) / 3;
  console.log("Điểm trung bình:", average);
}

calculateAverage(8, 7, 9);
