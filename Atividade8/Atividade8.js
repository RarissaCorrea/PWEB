
var i = prompt("Digite a quantidade de jogos: ");

for (var x = 0; x < i; x++) {
    var escolhaP1 = prompt("Escolha entre Pedra, Papel e tesoura: ");

    var escolhaP2 = Math.random() * 3;
    var checa = 0;

    if (escolhaP2 < 1)
        escolhaP2 = "PEDRA";
    else if (escolhaP2 < 2)
        escolhaP2 = "PAPEL";
    else
        escolhaP2 = "TESOURA";

    escolhaP1 = escolhaP1.toLocaleUpperCase();

    if (escolhaP1 == escolhaP2)
        check = 0;

    else if (escolhaP1 == "PEDRA") {
        if (escolhaP2 == "PAPEL")
            check = 2;
        else
            check = 1;
    }
    else if (escolhaP1 == "PAPEL") {
        if (escolhaP2 == "TESOURA")
            check = 2;
        else
            check = 1;
    }
    else if (escolhaP1 == "TESOURA") {
        if (escolhaP2 == "PAPEL")
            check = 2;
        else
            check = 1;
    }
    else
        check = 4;

    if (check == 0)
        document.write("EMPATE!!" + "<br>" + "SUA ESCOLHA: " + escolhaP1 + "<br>" + "ESCOLHA DA MQUINA: " + escolhaP2+ "<br>");
    else if (check == 1)
        document.write("VOCÊ GANHOU!!" + "<br>" + "SUA ESCOLHA: " + escolhaP1 + "<br>" + "ESCOLHA DA MAQUINA: " + escolhaP2 + "<br>");
    else if (check == 2)
        document.write("A MAQUINA GANHOU!! " + "<br>" + "SUA ESCOLHA: " + escolhaP1 + "<br>" + "ESCOLHA DA MAQUINA:  " + escolhaP2 + "<br>");
    else if (check == 4)
        document.write("VOCÊ DIGITOU UM AOPÇÃO INVALIDA!! " + "<br>");
}





