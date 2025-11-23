// Q1 Spread Operator
let arr1=[10,20,30];
let arr2=[40,50];
let combined=[...arr1, ...arr2];
console.log("Q1 combined: ",combined);


//Q2 Spread Operator(Object)
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile={...person, ...extra};
console.log("Q2 profile: ",profile);

// Q3 Rest Operator (Function Parameters)
function sumAll(...nums){
    let sum=0;
    for (let n of nums) 
        sum +=n;
    return sum;
}
console.log("Q3 sum: "+sum);

// Q4 Rest Operator (Array Destructuring)
let numbers = [10, 20, 30, 40, 50];
let [a, ...reamining]=numbers;
console.log("Q4 a: ",a);
console.log("Q4 remaining: ",remaining);

// Q5  Nested Object Destructuring
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

const {
    address: {
        city,
        geo:{lat,lan}
    }
   
} =user;
console.log("Q5 City: ",city);
console.log("Q5 Lat: ",lat);
console.log("Q5 Lan: ",lan);

//Q6 Arrow Function
const multiply =(a,b)=>a*b;
console.log("Q6 Multiply: ",multiply(3,4));

//Q7 Optional Chaining
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

let role=
emp?.details?.profile?.role;
console.log("Q7 Role: ",role);