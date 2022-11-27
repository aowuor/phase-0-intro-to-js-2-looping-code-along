// Code your solutions in this file

function writeCards(names, event){
    let newArr = [];
    for (let i = 0; i < names.length; i++){
        let msg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
        newArr.push(msg);  
    }
    return newArr;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));


function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i--);
    }
}
countDown(10);
