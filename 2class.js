nome =prompt("Qual o seu nome?");
idade = prompt("Quantos anos você tem?");
linguagem = prompt("Qual linguagem de programação você está estudando?");

mensagem = "olá, " + nome + " você tem " + idade +  " anos e aprendendo "  + linguagem;
pergunta = "você gosta de estudar " +linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.";

alert(mensagem);

gosto = prompt(pergunta);

if(gosto == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}