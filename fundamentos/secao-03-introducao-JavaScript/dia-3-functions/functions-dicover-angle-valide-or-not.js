function angulo(angA,angB,angC) {
    if (angA + angB + angC == 180) {
        return 'True';
    }
    else if (angA < 0) {
        return 'Erro, ângulo inválido';
    }
    else if (angB < 0) {
        return 'Erro, ângulo inválido';
    }
    else if (angC < 0) {
        return 'Erro, ângulo inválido';
    }
    else if (angA + angB + angC < 180 || angA + angB + angC > 180) {
        return 'False';
    }
}

console.log(angulo(50,60,80));
