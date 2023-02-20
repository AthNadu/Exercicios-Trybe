function maiorNum(num1,num2,num3) {
    if (num1 > num2 && num1 > num3){
        return num1 + " é maior que " + num2 + " e " + num3;
    }
    else if (num2 > num1 && num2 > num3){
        return num2 + " é maior que " + num1 + " e " + num3;
    }
    else if (num3 > num1 && num3 > num2){
        return num3 + " é maior que " + num1 + " e " + num2;
    }
    else {
        return "Os três números são iguais: " + num1 + " " + num2 + ' ' + num3;
    }
}

console.log(maiorNum(80,40,60));
