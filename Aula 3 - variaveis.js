/*
    -----O que são variáveis?-----
    - Variáveis são valores que estão armazenados na memória do computador, durante e apenas durante
    a execução do nosso programa;
    - Elas servem para guardarmos algum valor que iremos utilizar depois em nosso programa;

    -----Regras das variáveis-----
    - A criação das variáveis envolvem 3 regras simples, são elas:

    - Regra da nomenclatura:
        Toda variável possue um nome que deve ser único no código, que usaremos para recuperar o seu valor;
        Este nome deve seguir algumas regras também:
            - Não pode conter caracteres especiais como (' & * $ %), apenas underline ( _ ) é permitido;
            - Não pode conter espaços;
            - Não pode começar com um número;

    - Regra do valor:
        Toda variável pode ou não ter um valor atribuido ela;
        O valor de uma variável pode ser alterado durante a execução do código, ao menos que seja uma constante;
        Esses valores podem ser dos seguintes tipos:
            - Número inteiro;
            - Número com vírgula;
            - Texto;
            - Booleano (verdadeiro (true) ou falso (false));
            - Null (valor nulo);
            - Undefined (valor indefinido (sem valor atribuido));

            - Array (lista), veremos depois;
            - Object (objeto), Veremos depois;

    - Regra do acesso:
        As variáveis só são acessíveis a partir do momento que são declaradas no código;
        Uma variável apenas é acessível em todo o código se for declarada com var, ou fora de qualquer função, veremos depois;
  
    -----DECLARANDO UMA VARIÁVEL-----

    - Para declarar uma variável, basta você seguir como o exemplo a seguir:
    
    ('var' ou 'let' (para qualquer variável por agora) ou 'const' (para constantes)) + 'nome da variável' + '=' + 'valor da variável'
    
    - Exemplos errados:
        var minha-idade = 4
        const nome = Cristian
        let eu amo paola = false
        const 9divididoPor2 = 4,5

    - Exemplos corretos:
        var minha_idade = 4
        const nome = "Cristian"
        const euAmoAPaola = true
        const divisaoDe9Por2 = 4.5
        var _valorNulo = null
        let valorIndefinido = undefined
        let valorIndefinido2;
*/