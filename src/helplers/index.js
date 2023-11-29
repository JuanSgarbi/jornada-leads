export function cpfValido(cpf) {
    let numeros, digitos, soma, i, resultado;
    let digitos_iguais = 1;
    let formatedCpf =  cpf.replace(/[^\d]+/g, '')
    if (formatedCpf.length < 11) {
        return false;
    }
    for (i = 0; i < formatedCpf.length - 1; i++) {
        if (formatedCpf.charAt(i) !== formatedCpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    }
    if (!digitos_iguais) {
        numeros = formatedCpf.substring(0, 9);
        digitos = formatedCpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--) {
            soma += parseInt(numeros.charAt(10 - i)) * i;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(0))) {
            return false;
        }
        numeros = formatedCpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--) {
            soma += parseInt(numeros.charAt(11 - i)) * i;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(1))) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}