/*
    -----DICIONÁRIO-----

    - CONDIÇÃO:
        É uma comparação entre 2 valores que pode ser verdadeira ou falsa (true ou false);

    - CONCATENAÇÃO:
        É o ato de unir 2 ou mais strings, formando um texto só.

    -----O QUE SÃO OPERADORES?-----
    - Os operadores são sinais que podem ser usados de diferentes formas e para
    difrentes fins.
    - Os operadores são divididos em:
        - Operadores aritméticos;
        - Operadores de atribuição;
        - Operadores CONDICIONAIS;
        - Operadores lógicos;
    - Cada um deles será detalhado abaixo;

    -----OPERADORES ARITMÉTICOS-----
    - São usados para relizar operações matemáticas entre 2 números.
    - São eles os sinais:
        - ( + ) para adição e CONCATENAÇÃO de 2 textos;
        - ( - ) para subtração;
        - ( * ) para multiplicação;
        - ( / ) para divisão;
*/

// -----EXEMPLOS OPERADORES ARITIMÉTICOS-----

console.log(1.5 + 1.5); // Resultado: 3
console.log(500 - 100); // Resultado: 400
console.log(25 * 2); // Resultado: 50 
console.log(10 / 2); // Resultado: 5
console.log("Eu amo " + "você Paola! 🧡") // Resultado: Eu amo você Paola 🧡;

// Também podem ser usados com variáveis

var x = 5;
var y = 2;
var primeiroNome = "Cristian";
var segundoNome = "Eduardo";

console.log(x + y); // Resultado: 7
console.log (x - y); // Resultado: 3
console.log(x * y); // Resultado: 10
console.log(x / y); // Resultado: 2.5
console.log(primeiroNome + " " + segundoNome); // Resultado: Cristian Eduardo

/*
    -----DICA-----
    - O JavaScript não entende quando você está utilizando o sinal de + para soma ou para concatenação,
    por isso ao somar um número com um texto, mesmo que o ele contenha apenas um número, a linguagem efetuará a concatenação ao invés da soma.
    -Exemplo:
        console.log("5" + "5"); // Resultado: 55
        console.log(5 + "5"); // Resultado: 55 também;

    -----OPERADORES DE ATRIBUIÇÃO-----
    - São usados para modificar ou dar valor as variáveis;
    - São eles:
        - ( = ) para atribuição de valores;
        - ( +=  ou ( x = x + y )) para somar e atribuir um valor numérico, ou concatenar e atribuir um texto ao já contido na variável;
        - ( -=  ou ( x = x - y )) para subtrair e atribuir um valor numérico ao já contido na variável;
        - ( *= ou ( x = x * y )) para multiplicar e atribuir um valor numérico ao já contido na variável;
        - ( /= ou ( x = x / y )) para dividir e atribuir um valor numérico ao já contido na variável;
*/

// -----EXEMPLOS OPERADORES DE ATRIBUIÇÃO-----

var x;
console.log(x); // Resultado: undefined

x = 5;
console.log(x); // Resultado: 5

x += 2;
console.log(x); // Resultado: 7

x -= 3;
console.log(x); // Resultado: 4

x *= 3;
console.log(x); // Resultado: 12

x /= 2;
console.log(x); // Resultado: 6

/*
    -----OPERADORES CONDICIONAIS-----
    - São usados para unir 2 valores afim de formar uma condição;
    - A quantidade deles é um pouco maior, mas a compreensão é bastante simples;
    - São eles:
        - ( == ) (igual a) retorna verdadeiro (true) quando os valores são iguais;
        - ( === ) (estritamente igual a) exclussivo do JavaScript, retorna verdadeiro (true) quando os valores e os tipos são iguais;

        - ( != ) (diferente de) retorna verdadeiro (true) quando os valores são diferentes;
        - ( !== ) (estritamente diferente de) exclussivo do JavaScript, retorna verdadeiro (true) quando os valores e os tipos são diferentes;

        - ( > ) (maior que) usado com números, retorna verdadeiro (true) quando o 1° número é maior que o 2°;
        - ( >= ) (maior igual que) usado com números, retorna verdadeiro (true) quando o 1° número é maior ou igual que o 2°;

        - ( < ) (menor que) usado com números, retorna verdadeiro (true) quando o 1° número é menor que o 2°;
        - ( <= ) (menor igual que) usado com números, retorna verdadeiro (true) quando o 1° número é menor ou igual que o 2°;
*/

// -----EXEMPLOS OPERADORES CONDICIONAIS-----

console.log(5 == 5); // Resultado: true
console.log("laranja" == "laranja"); // Resultado: true
console.log("5" == 5); // Resultado: true

console.log(10 === 10); // Resultado: true
console.log("maçã" === "maçã"); // Resultado: true
console.log("10" === 10); // Resultado: false

console.log(5 != 10); // Resultado: true
console.log("laranja" != "maçã"); // Resultado: true
console.log("laranja" != 5); // Resultado: true

console.log(10 !== 5); // Resultado: false
console.log("laranja" !== "maçã"); // Resultado: false
console.log("10" !== 10); // Resultado: false
console.log("laranja" !== 10); // Resultado: true

console.log(4 > 4); // Resultado: false
console.log(6 >= 6); // Resultado: true

console.log(4 < 7); // Resultado: true
console.log(4 <= 6); // Resultado: false

/*
    -----OPERADORES LÓGICOS-----
    - AND e OR São usados para unir 2 condições;
    - NOT para negar uma condição;
    - São apenas 3, mas são mais complexos de entender;
    - São eles:
        - ( && ) (operador lógico AND ( E )) retorna verdadeiro (true) quando ambas as condições forem verdadeiras;
        - ( || ) (operador lógico OR ( OU )) retorna verdadeiro (true) quando uma ou ambas as condições forem verdadeiras;
        - ( ! ) (operador lógico NOT ( NÃO )) como regra geral, retorna verdadeiro (true) quando a condição for falsa e falso (false) 
        quando for verdadeira. Vamos ver mais sobre o NOT depois, ele tem muitos usos a mais no JavaScript;
*/

// -----EXEMPLOS OPERADORES LÓGICOS-----

console.log(false || true); // Resultado: true
console.log(true || false); // Resultado: true
console.log(true || true); // Resultado: true
console.log(false || false); // Resultado: false

console.log(false && true); // Resultado: false
console.log(true && false); // Resultado: false
console.log(false && false); // Resultado: false
console.log(true && true); // Resultado: true

var estudante = true;
var idoso = false;

console.log("Paga meia entrada: " + estudante || idoso); // Resultado: true
console.log("Idoso e estudante: " + estudante && idoso); // Resutado: false