/*
    -----O QUE SÃO VARIÁVEIS?-----
    - Variáveis são valores que estão armazenados na memória do computador, durante e apenas durante
    a execução do nosso programa;
    - Elas servem para guardarmos algum valor que iremos utilizar depois em nosso programa;

    -----REGRAS DAS VARIÁVEIS-----
    - A criação das variáveis envolvem 3 regras simples, são elas:

    - 📃 Regras da nomenclatura:
        Toda variável possue um nome que deve ser único no código, que usaremos para recuperar o seu valor;
        Este nome deve seguir algumas regras também:
            - Não pode conter caracteres especiais como (' & * $ %), apenas underline ( _ ) é permitido;
            - Não pode conter espaços;
            - Não pode começar com um número;

    - 💲 Regras do valor:
        Toda variável pode ou não ter um valor atribuido ela;
        O valor de uma variável pode ser alterado durante a execução do código, ao menos que seja uma constante;
        Esses valores podem ser dos seguintes tipos:
            - number:
                - Número inteiro;
                - Número com vírgula (sempre usar . invés de , );

            - string:
                - Texto (sempre colocar entres áspas duplas ou simples ('' ou ""));

            - boolean:
                - Booleano (verdadeiro ou falso (true ou false));

            - null:
                - Nulo (valor nulo);
            
            - undefined:
                - Valor indefinido (sem valor atribuido);

            - Array:
                - Lista de valores (veremos depois);
                
            - Object:
                - Objeto (veremos depois);

    - 🔒 Regra do acesso:
        As variáveis só são acessíveis a partir do momento que são declaradas no código;
        Uma variável apenas é acessível em todo o código se for declarada com var, ou fora de qualquer função, veremos isso depois;
  
    -----DECLARANDO UMA VARIÁVEL-----

    - Para declarar uma variável, basta você seguir o modelo a seguir:
    
    - ✅ ('var' ou 'let' (para qualquer variável por agora) ou 'const' (para constantes)) + 'nome da variável' + '=' + 'valor da variável'
    
    - ❌ Exemplos errados:
        var minha-idade = 4; // number, nome errado
        const nome = Cristian; // string, texto fora das aspas
        let eu amo paola = false; // boolean, nome com espaços e valor inválido 🧡
        const 9divididoPor2 = 4,5; // number, nome com número no início e com , para casa decimal invés de .
*/

//  - ✅ Exemplos corretos:
var minha_idade = 4; // number
const nome = "Cristian"; // string
const euAmoAPaola = true; // boolean
const divisaoDe9Por2 = 4.5; // number
var _valorNulo = null // null, obs: underline ( _ ) é permitido;

let valorIndefinido = undefined; // undefined
let valorIndefinido2; // undefined