// Q8 Inbuilt HOF – map, filter, reduce, sort

let nums=[10,3,7,20,13,2];
let squares=nums.map(n=>n*n);
function isPrime(n){
    if(n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0) return false;

    } 
    return true;
}

let primes =nums.filter(isPrime);
console.log(prime);
let sum=nums.reduce((acc,curr)=> acc+curr,0);
console.log(sum);

let descending =[...nums].sort((a,b)=>b-a);
console.log(descending);


//Q9 Callback Function Question
function displayCar(){
    console.log("Car");
}
function displayTruck(){
    console.log("Truck");
}
function displayBike(){
    console.log("Bike");
}
function vehicleInfo(vehicleCategory,callbackFn){
    callbackFn();
}

vehicleInfo("Car",displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike);