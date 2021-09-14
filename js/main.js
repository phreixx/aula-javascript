function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log( document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}
function redirecionar(){
    window.open("https://github.com/phreixx/");
    //window.location.href = "https://github.com/phreixx";

}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";

}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
}
*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
    
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*var n1 = "Leonardo";
var n2 = "frase";
console.log(n1 + n2 + 1425 + - + 1519);
*/
/*var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*var count;
for(count=1; count <= 5; count ++) {
    alert(count);
};
*/


/*var count = 0;
while (count <=5){
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
};
*/


/*var idade = prompt("Qual a sua idade?")
if (idade >=18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


//var frutas = [{nome: "maça" , cor: "vermelha"} , {nome:"uva", cor: "roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var nome = "Paulo Henrique";
//var idade = "30 anos";
//var n1 = 19;
//var n2 = 90;
//var frase = "Santos é o melhor time do Mundo";

//alert("Bem Vindo " + nome + ", você tem " + idade);
//alert("Você nasceu em " + século + ano);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toUpperCase());
//console.log(n1 * n2);
//alert(frase.replace("Santos", "Flamengo"));
//var lista = ["maça" , "pêra" , "laranja" ]

//alert(lista[1]);

//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


