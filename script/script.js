// =========================================================
// 1. DADOS DAS RECEITAS (TOTAL: 15 RECEITAS)
// =========================================================
const receitas = [
    // --- ÍNDICE 0: BOLO DE CENOURA ---
    {
        titulo: "Bolo de Cenoura com Cobertura de Chocolate",
        ingredientes: [
            "3 cenouras médias raladas",
            "4 ovos",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1/2 xícara de óleo",
            "1 colher de sopa de fermento em pó"
        ],
        preparo: "Bata no liquidificador as cenouras, os ovos e o óleo. Em uma tigela, misture o açúcar, a farinha e o fermento. Despeje a mistura líquida sobre os ingredientes secos e mexa bem. Asse em forno pré-aquecido a 180°C por cerca de 40 minutos. Para a cobertura, misture 1 lata de leite condensado, 3 colheres de chocolate em pó e 1 colher de manteiga e leve ao fogo baixo até engrossar. Despeje sobre o bolo quente."
    },
    // --- ÍNDICE 1: LASANHA DA VOVÓ ---
    {
        titulo: "Lasanha da Vovó",
        ingredientes: [
            "500g de massa para lasanha",
            "500g de carne moída",
            "1 sachê de molho de tomate",
            "200g de presunto fatiado",
            "300g de muçarela fatiada",
            "Molho branco caseiro (ou requeijão para simplificar)"
        ],
        preparo: "Prepare a carne moída com temperos a gosto e adicione o molho de tomate, cozinhando por 10 minutos. Em um refratário, intercale camadas de molho, massa, presunto, muçarela e molho branco. Finalize com muçarela. Asse em forno a 200°C por 30 minutos ou até gratinar."
    },
    // --- ÍNDICE 2: TORTA DE MAÇÃ ---
    {
        titulo: "Torta de Maçã Crocante",
        ingredientes: [
            "3 maçãs picadas",
            "1 colher de sopa de canela",
            "1/2 xícara de açúcar",
            "Massa pronta de torta (ou base de biscoito)",
            "Para a farofa (crumble): 1 xícara de farinha, 1/2 xícara de açúcar, 1/4 xícara de manteiga gelada"
        ],
        preparo: "Misture as maçãs picadas com a canela e o açúcar. Forre o refratário com a massa de torta. Despeje o recheio de maçã. Para o crumble, misture os ingredientes até formar uma farofa grossa. Cubra a torta com a farofa. Asse por 30 minutos a 180°C até dourar."
    },
    
    // --- ÍNDICES 3 a 14: NOVAS RECEITAS EXCLUSIVAS PARA O MODO SURPRESA ---
    {
        titulo: "Mousse de Maracujá Cremosa",
        ingredientes: [
            "1 lata de leite condensado",
            "1 lata de creme de leite",
            "1 xícara de suco concentrado de maracujá"
        ],
        preparo: "Bata todos os ingredientes no liquidificador por 5 minutos. Despeje em taças e leve à geladeira por, no mínimo, 3 horas. Decore com sementes de maracujá."
    },
    {
        titulo: "Pão de Queijo Mineiro",
        ingredientes: [
            "500g de polvilho doce",
            "1 copo de leite",
            "1/2 copo de óleo",
            "3 ovos grandes",
            "250g de queijo minas curado ralado"
        ],
        preparo: "Ferva o leite e o óleo e despeje sobre o polvilho. Misture bem. Adicione os ovos um a um, sovando a massa. Acrescente o queijo ralado e sal a gosto. Faça bolinhas e asse em forno pré-aquecido a 180°C até dourar."
    },
    {
        titulo: "Feijoada Rápida",
        ingredientes: [
            "1kg de feijão preto cozido",
            "300g de bacon em cubos",
            "300g de linguiça calabresa fatiada",
            "Temperos a gosto (alho, cebola, louro)"
        ],
        preparo: "Frite o bacon até soltar a gordura. Adicione a calabresa e frite mais um pouco. Junte o alho e a cebola e refogue. Despeje o feijão cozido e o caldo. Cozinhe em fogo baixo por 20 minutos para apurar o sabor. Sirva com arroz e couve."
    },
    {
        titulo: "Tiramisu de Travessa",
        ingredientes: [
            "2 pacotes de biscoito champanhe",
            "500g de queijo mascarpone",
            "3 ovos (separar gemas e claras)",
            "1/2 xícara de açúcar",
            "Café forte e frio para molhar os biscoitos",
            "Cacau em pó para polvilhar"
        ],
        preparo: "Bata as gemas com açúcar. Adicione o mascarpone e misture. Incorpore as claras batidas em neve. Monte a travessa: camada de creme, biscoitos molhados no café, e finalize com creme. Leve à geladeira por 4 horas e polvilhe com cacau antes de servir."
    },
    {
        titulo: "Creme de Milho Simples",
        ingredientes: [
            "2 latas de milho verde (drenadas)",
            "1 lata de creme de leite",
            "1/2 xícara de leite",
            "1 colher de sopa de amido de milho",
            "1 colher de sopa de manteiga"
        ],
        preparo: "Bata no liquidificador uma lata de milho com o leite. Reserve. Refogue alho e cebola na manteiga. Junte o milho batido, a outra lata de milho e o amido de milho dissolvido em um pouco de água. Cozinhe até engrossar. Desligue o fogo e misture o creme de leite."
    },
    {
        titulo: "Brownie de Chocolate Clássico",
        ingredientes: [
            "200g de chocolate meio amargo",
            "150g de manteiga",
            "3 ovos",
            "1 xícara de açúcar",
            "1/2 xícara de farinha de trigo",
            "Pitada de sal"
        ],
        preparo: "Derreta o chocolate com a manteiga em banho-maria. Misture. Em outra tigela, bata os ovos com o açúcar. Junte a mistura de chocolate. Adicione a farinha e o sal, misturando delicadamente. Asse em forma untada por 20-25 minutos a 180°C. O centro deve estar levemente úmido."
    },
    {
        titulo: "Sopa de Legumes da Horta",
        ingredientes: [
            "2 batatas médias",
            "1 cenoura",
            "1 chuchu",
            "1/2 abobrinha",
            "1 litro de caldo de legumes",
            "Macarrão pequeno (opcional)"
        ],
        preparo: "Pique todos os legumes em cubos pequenos. Refogue alho e cebola e adicione os legumes. Cubra com o caldo de legumes e cozinhe até ficarem macios. Tempere com sal e pimenta. Adicione o macarrão nos minutos finais, se desejar."
    },
    {
        titulo: "Pudim de Leite Condensado",
        ingredientes: [
            "1 lata de leite condensado",
            "1 lata de leite (medida do condensado)",
            "3 ovos inteiros",
            "Para a calda: 1 xícara de açúcar e 1/2 xícara de água"
        ],
        preparo: "Para a calda, derreta o açúcar e adicione a água quente. Despeje na forma. Para o pudim, bata o leite condensado, o leite e os ovos no liquidificador. Despeje sobre a calda. Asse em banho-maria em forno a 180°C por cerca de 1 hora. Deixe esfriar completamente antes de desenformar."
    },
    {
        titulo: "Salada Caesar com Molho Caseiro",
        ingredientes: [
            "1 pé de alface romana",
            "Croutons (pão torrado)",
            "Queijo parmesão ralado",
            "Para o molho: Maionese, alho, mostarda dijon, suco de limão, azeite"
        ],
        preparo: "Lave e seque bem a alface. Prepare o molho misturando bem todos os ingredientes (maionese é a base). Arrume a alface, os croutons e o queijo em uma tigela. Adicione o molho caseiro na hora de servir para não murchar a alface."
    },
    {
        titulo: "Bolo de Fubá Cremoso",
        ingredientes: [
            "3 ovos",
            "1 xícara de açúcar",
            "1 xícara de fubá",
            "1/2 xícara de farinha de trigo",
            "3 xícaras de leite",
            "1/2 xícara de óleo",
            "50g de queijo ralado (parmesão ou minas)"
        ],
        preparo: "Bata todos os ingredientes no liquidificador, exceto o fermento. Adicione o fermento e misture com uma colher. A massa fica líquida. Asse em forno médio (180°C) por cerca de 45-50 minutos. A parte de baixo deve ficar firme e o centro, cremoso."
    },
    {
        titulo: "Strogonoff de Frango Rápido",
        ingredientes: [
            "500g de peito de frango em cubos",
            "1/2 cebola picada",
            "1 colher de sopa de mostarda",
            "1 colher de sopa de ketchup",
            "1 lata de creme de leite",
            "Cogumelos fatiados (opcional)"
        ],
        preparo: "Tempere o frango e refogue com a cebola até dourar. Adicione a mostarda, o ketchup e os cogumelos. Misture bem e deixe cozinhar por 5 minutos. Desligue o fogo e adicione o creme de leite, misturando rapidamente para não ferver. Sirva com arroz branco e batata palha."
    },
    {
        titulo: "Brigadeiro Gourmet de Colher",
        ingredientes: [
            "1 lata de leite condensado",
            "3 colheres de sopa de chocolate em pó 70%",
            "1 colher de sopa de manteiga sem sal"
        ],
        preparo: "Misture todos os ingredientes em uma panela e leve ao fogo baixo. Mexa continuamente até que a mistura comece a soltar do fundo da panela (ponto de brigadeiro de colher). Sirva em potinhos ainda quente ou leve à geladeira para esfriar."
    }
];

// =========================================================
// 2. FUNÇÕES DE EXIBIÇÃO E FECHAMENTO DO MODAL
// =========================================================

// Função principal que exibe a receita no modal
function abrirModal(index) {
    const receitaSelecionada = receitas[index];
    const modal = document.getElementById('modal');
    
    document.getElementById('tituloReceita').textContent = receitaSelecionada.titulo;
    document.getElementById('preparo').textContent = receitaSelecionada.preparo;

    const ulIngredientes = document.getElementById('ingredientes');
    ulIngredientes.innerHTML = ''; 

    receitaSelecionada.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ulIngredientes.appendChild(li);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Reativa o scroll do corpo
}

// =========================================================
// 3. FUNÇÃO DO BOTÃO SURPRESA (Exclui as 3 primeiras receitas)
// =========================================================

function modoSurpresa() {
    alert('Esta é uma receita especial, selecionada aleatoriamente para você!');

    const numReceitasExcluidas = 3; 
    const receitasDisponiveis = receitas.length - numReceitasExcluidas; 

    const indiceAleatorio = Math.floor(Math.random() * receitasDisponiveis); 
    
    const indiceFinal = indiceAleatorio + numReceitasExcluidas;
    
    abrirModal(indiceFinal);
}

// =========================================================
// 4. PRELOADER
// =========================================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        loader.remove();
    });
});

// =========================================================
// 5. FUNÇÃO DE LOGOUT (Chamada pelo botão de Logout)
// =========================================================

function fazerLogout() {
    // 1. Garante que o modal esteja fechado e a rolagem liberada
    fecharModal(); 

    // 2. Executa a lógica de Logout
    alert('Logout realizado com sucesso! Redirecionando...'); 
    
    // *** CORREÇÃO: Redireciona para a tela de login/saída ***
    window.location.href = 'login.html'; 
}
// ... (Seu código JavaScript de Receitas, abrirModal, fecharModal, modoSurpresa) ...

// =========================================================
// 4. PRELOADER (LÓGICA DE CARREGAMENTO INICIAL - Usa #loader-overlay: Copo de Café)
// =========================================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        // Não remova o loader de café.
    });
});

// =========================================================
// 5. FUNÇÃO DE LOGOUT (Com LOADER DE TRANSIÇÃO - Usa #logout-loader: Liquid Loader)
// =========================================================

function fazerLogout() {
    // Garante que o modal esteja fechado antes da transição
    fecharModal(); 

    // 1. REEXIBE O NOVO LOADER DE LOGOUT
    const logoutLoader = document.getElementById('logout-loader');
    if (logoutLoader) {
        // Torna o Liquid Loader visível
        logoutLoader.classList.remove('loader-hidden'); 
        // Impede a rolagem durante a animação
        document.body.style.overflow = 'hidden';
    }
    
    // 2. Define um atraso (1.5 segundos)
    const tempoDeEspera = 1500; 

    setTimeout(() => {
        // 3. Redireciona para a tela de login/saída
        window.location.href = 'login.html'; 
    }, tempoDeEspera);
}