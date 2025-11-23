//Q10 Simple closure
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const c=counter();
console.log(c());
console.log(c());
console.log(c());

//Q11 Medium closure
function createWallet(){
    let balance=0;
    function addMoney(amount){
        balance+=amount;

    }
    function checkBalance(){
       console.log(balance);
        
    }
    return {addMoney,checkBalance};
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();