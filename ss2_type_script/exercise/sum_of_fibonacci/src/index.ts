// happy coding 👻
console.log("hello world");

// @ts-ignore
function checkFibonacci(num: number) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return checkFibonacci(num - 2) + checkFibonacci(num - 1);


}

let sum: number = 0;
for (let i = 0; i < 10; i++) {
    console.log(checkFibonacci(i) + " ")
    sum += checkFibonacci(i);
}
console.log("Tổng dãy fibonacci là: "+sum);
