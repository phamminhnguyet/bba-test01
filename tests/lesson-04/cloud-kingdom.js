let playerName = "Mario";
let currentLives = 3;
const coins = {
    level1: 25,
    level2: 30,
    level3: 45
};

let totalCoin = coins.level1 + coins.level2 + coins.level3;
let avarageCoin = totalCoin /3; 
console.log("Giá trị trung bình của 3 levels là: " + avarageCoin);
console.log("Số coin dư khi chia 3 là: " + totalCoin % 3)
