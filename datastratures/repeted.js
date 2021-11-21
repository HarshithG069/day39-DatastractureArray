/* 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array*/

var arr = [];
for(let i = 0; i <= 100; i++){
    if(i > 10){
        digit1 = i % 10
        let n = i;
        while (n >= 10){
            n /= 10;
        }
        let digit2  = Math.floor(n)
        
        if(digit1 == digit2){
            arr.push(i);
        }
    }
}
console.log(arr)