let nota;

if (nota >= 90 && nota < 101) {
    console.log('Você tirou A');
}
else if (nota >= 80 && nota < 90) {
    console.log('Você tirou B');
}
else if (nota >= 70 && nota < 80) {
    console.log('Você tirou C');
}
else if (nota >= 60 && nota < 70) {
    console.log('Você tirou D');
}
else if (nota >= 50 && nota < 60) {
    console.log('Você tirou E');
}
else if (nota < 50 && nota >= 0) {
    console.log('Você tirou F');
}
else {
    console.log('Houve um erro no sistema');
}
