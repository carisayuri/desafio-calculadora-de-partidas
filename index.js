let vitorias = 500;
let derrotas = 50;
let saldoVitorias = vitorias - derrotas;
let nivel;

if (saldoVitorias <= 10) {
    nivel = "Ferro";
}
else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
}
else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
}
else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
}
else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
}
else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lend�rio";
}
else nivel = "Imortal";

console.log("O Her�i tem de saldo de " + saldoVitorias + " est� no n�vel de " + nivel)