document.write("Atividade 12 <br><br>");

document.write("Primeira função: <br>")
function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calcArea = function(){
        return x * y;
    }
}

var x = prompt("Base do retangulo:");
var y = prompt("Altura do retangulo:");

var objRet = new Retangulo(x, y);

document.write("A área do Retângulo é de: " + objRet.calcArea());

document.write("<br><br>Segunda Função: <br>");

function Conta(){

    this.getNome = function(){
        return this.nome;
    }
    this.setNome = function(nome){
        this.nome = nome;
    }
    this.getBanco = function(){
        return this.banco;
    }
    this.setBanco = function(banco){
        this.banco = banco;
    }
    this.getNumConta = function(){
        return this.numConta;
    }
    this.setNumConta = function(numConta){
        this.numConta = numConta;
    }
    this.getSaldo = function(){
        return this.saldo;
    }
    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }
}

function Corrente(){ 

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };
}

function Poupanca(){ 
    
    this.getJuros = function(){
        return this.juros;
    };
    
    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.getDataVencimento = function(){
        return this.dataVencimento;
    };
    
    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

objCorrente = new Corrente();
objPoupanca = new Poupanca();

objCorrente.setNome("Rarissa Correa");
objCorrente.setBanco("JuliaCred");
objCorrente.setNumConta("12255");
objCorrente.setSaldo(5500);
objCorrente.setSaldoEspecial(11111);

objPoupanca.setNome("André");
objPoupanca.setBanco("JuliaCred");
objPoupanca.setNumConta("5353663");
objPoupanca.setSaldo(20);
objPoupanca.setJuros(25);
objPoupanca.setDataVencimento("25/11/2023");

document.write("Conta corrente:<br>Nome: " + objCorrente.getNome() + 
                "<br>Banco: " + objCorrente.getBanco() + 
                "<br>Número da Conta: " + objCorrente.getNumConta() +
                "<br>Saldo: " + objCorrente.getSaldo() +
                "<br>Saldo Especial: " + objCorrente.getSaldoEspecial());

document.write("<br><br>Conta poupança:<br>Nome: " + objPoupanca.getNome() + 
"<br>Banco: " + objPoupanca.getBanco() + 
"<br>Número da Conta: " + objPoupanca.getNumConta() +
"<br>Saldo: " + objPoupanca.getSaldo() +
"<br>Juros: " + objPoupanca.getJuros() +
"<br>Data de vencimento: " + objPoupanca.getDataVencimento());


