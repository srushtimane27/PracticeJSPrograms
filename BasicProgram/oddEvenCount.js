var oddCount = 0;
var evenCount = 0;

for(var i = 1; i <= 25; i++){
    if(i % 2 != 0){
        oddCount++
    }else{
        evenCount++
    }
}
console.log(oddCount, "Odd Count: ")
console.log(evenCount, "Even Count: ")