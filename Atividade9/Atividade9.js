var n = prompt("digite a quantidade de pessoas:");

var idade = new Array(n);
var sexo = new Array(n);
var opiniao = new Array(n);

var maisvelha = 0;
var maisnova = 1000;
var media = 0;
var pessimo = 0;
var otimo = 0;
var bom = 0;
var homens = 0;
var mulheres = 0;

for(var i = 0; i < n; i++)
{
    idade[i] = parseInt(prompt("Digite sua idade: "));
    sexo[i] = prompt("Digite seu sexo, F(feminino) ou M(masculino): ");
    opiniao[i] = parseInt(prompt("Digite sua opinião, onde ótimo=4, bom=3, regular=2, péssimo=1."));

    sexo[i] = sexo[i].toUpperCase();

    if(idade[i] > maisvelha)
        maisvelha = idade[i];
    
    if(idade[i] < maisnova)
        maisnova = idade[i];
        
    media = media + idade[i];

    if(opiniao[i] == 1)
        pessimo++;
    
    if(opiniao[i] == 4)
        otimo++;
    
    if(opiniao[i] == 3)
        bom++;

    if(sexo[i] == "M")
        homens++;
    
    if(sexo[i] == "F")
        mulheres++;
    
}

media = media/n;

document.write("A MÉDIA DE IDADES: " + media.toFixed(2) + "<br>");
document.write("A PESSOA MAIS VELHA: " + maisvelha + "<br>");
document.write("A PESSOA MAIS NOVA: " + maisnova + "<br>");
document.write("A QUANTIDADE DE PESSOAS QUE RESPONDERAM PÉSSIMO: " + pessimo + "<br>");
document.write("A PORCENTAGEM DE PESSOAS QUE RESPONDERAM ÓTIMO: " + ((otimo * 100)/n).toFixed(2) +"%"+ "<br>");
document.write("A PORCENTAGEM DE PESSOAS QUE RESPONDERAM BOM: " + ((bom * 100)/n).toFixed(2) +"%"+ "<br>");
document.write("O NÚMRO DE HOMENS: " + homens + "<br>");
document.write("O NÚMERO DE MULHERES: " + mulheres + "<br>");