function maiorNum(num1,num2) {
    if (num1 > num2){
        return num1 + " é maior que " + num2;
    }
    else if (num2 > num1){
        return num2 + " é maior que " + num1;
    }
    else {
        return "Os dois números são iguais: " + num1 + " " + num2;
    }
}

console.log(maiorNum(50,50));
