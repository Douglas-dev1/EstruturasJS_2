const numeroMes = Number(prompt('Informe o numero do mes'));

let nomeMes
let dias
/*
if (numeroMes === 1) {
    nomeMes = 'Janeiro'
}
else if (numeroMes === 2) {
    nomeMes = 'Fevereiro'
}
else if (numeroMes === 3) {
    nomeMes = 'Março'
}
else if (numeroMes === 4) {
    nomeMes = 'Abril'
}
else if (numeroMes === 5) {
    nomeMes = 'Maio'
}
else if (numeroMes === 6) {
    nomeMes = 'Junho'
}
else if (numeroMes === 7) {
    nomeMes = 'Julho'
}
else if (numeroMes === 8) {
    nomeMes = 'Agosto'
}
else if (numeroMes === 9) {
    nomeMes = 'Setembro'
}
else if (numeroMes === 10) {
    nomeMes = 'Outubro'
}
else if (numeroMes === 11) {
    nomeMes = 'Novembro'
}
else if (numeroMes === 12) {
    nomeMes = 'Dezembro'
}
else {
    nomeMes = 'Mes invalido'
}
*/

switch (numeroMes) {
    case 1:
        nomeMes = 'Janeiro'
        break;
    case 2:
        nomeMes = 'Fevereiro'
        break;
    case 3:
        nomeMes = 'Março'
        break;
    case 4:
        nomeMes = 'Abril'
        break;
    case 5:
        nomeMes = 'Maio'
        break;
    case 6:
        nomeMes = 'Junho'
        break;
    case 7:
        nomeMes = 'Julho'
        break;
    case 8:
        nomeMes = 'Agosto'
        break;
    case 9:
        nomeMes = 'Setembro'
        break;
    case 10:
        nomeMes = 'Outubro'
        break;
    case 11:
        nomeMes = 'Novembro'
        break;
    case 12:
        nomeMes = 'Dezembro'
        break;

    default:
        nomeMes = 'Mês invalido!'
        break;
}
if (numeroMes > 0 && numeroMes <= 12) {
    if (numeroMes === 2) {
        dias = 28;
    }
    else if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11) {
        dias = 30;
    }
    else {
        dias = 31;
    }
}

const elementoMensagem = document.createElement("h1");
if (!numeroMes || numeroMes > 12) {
    elementoMensagem.textContent = 'Mês inválido'
}
else {
    elementoMensagem.textContent = `O número digitado ${numeroMes} corresponde ao mês ${nomeMes}`;
}
document.body.appendChild(elementoMensagem);

const elementoMensagem1 = document.createElement("h1");
elementoMensagem1.textContent = `O mês em questão tem ${dias} dias`;
if (numeroMes > 0 && numeroMes <= 12) {
    document.body.appendChild(elementoMensagem1);
}