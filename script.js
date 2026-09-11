const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Meu nome é Elloise, tenho 17 anos e estou começando a decidir o que quero para o meu futuro. Entre tantas possibilidades, percebo que tenho um carinho especial por crianças e gosto da ideia de poder contribuir para o desenvolvimento delas. Qual decisão tomo?",
        alternativas: [
            {
                texto: "Escolho outro caminho porque acredito que trabalhar com crianças pode ser muito difícil.",
                afirmacao: "Ao deixar de lado aquilo que realmente despertava seu interesse, você percebeu que escolher uma profissão apenas pelo medo das dificuldades poderia afastá-la dos seus sonhos."
            },
            {
                texto: "Decido conhecer melhor a área da educação e começo a considerar a Pedagogia como minha futura profissão.",
                afirmacao: "Ao dar atenção ao que realmente despertava seu interesse, você encontrou na Pedagogia uma possibilidade de transformar seu carinho pelas crianças em uma profissão."
            }
        ]
    },

    {
        enunciado: "Depois de pensar bastante sobre meu futuro, descubro que quero cursar Pedagogia na UEPG. Sei que para conseguir isso precisarei me dedicar aos estudos. Como começo a me preparar?",
        alternativas: [
            {
                texto: "Continuo deixando os estudos para depois, acreditando que ainda tenho bastante tempo.",
                afirmacao: "Ao adiar sua preparação, você percebeu que um grande objetivo precisa de planejamento e dedicação desde o início."
            },
            {
                texto: "Organizo meus estudos, procuro conhecer melhor a UEPG e começo a me preparar para conquistar minha vaga.",
                afirmacao: "Ao transformar seu sonho em um objetivo, você começou a construir, passo a passo, o caminho até a UEPG."
            }
        ]
    },

    {
        enunciado: "Durante minha preparação, surgem dificuldades. Nem sempre consigo estudar como gostaria e algumas matérias parecem mais complicadas. Começo a pensar se realmente vou conseguir. O que faço?",
        alternativas: [
            {
                texto: "Desisto de tentar porque acredito que talvez eu não seja capaz de entrar na faculdade que quero.",
                afirmacao: "A insegurança fez você se afastar do seu objetivo e mostrou como é importante acreditar no próprio potencial mesmo diante das dificuldades."
            },
            {
                texto: "Continuo tentando, procuro melhorar minhas dificuldades e lembro por que comecei a lutar por esse sonho.",
                afirmacao: "Ao persistir mesmo quando as coisas ficaram difíceis, você descobriu que cada obstáculo superado deixava você mais perto da faculdade dos seus sonhos."
            }
        ]
    },

    {
        enunciado: "Finalmente chega o momento de iniciar minha graduação em Pedagogia. Durante a faculdade, começo a conhecer diferentes áreas da educação e percebo que me identifico cada vez mais com a Educação Infantil. O que decido fazer?",
        alternativas: [
            {
                texto: "Não me envolvo muito com as experiências da faculdade e penso apenas em terminar o curso.",
                afirmacao: "Ao não aproveitar as oportunidades de aprendizado, você percebeu que a faculdade poderia oferecer muito mais do que apenas um diploma."
            },
            {
                texto: "Procuro aproveitar as experiências, aprender sobre o desenvolvimento infantil e entender melhor o trabalho realizado na Educação Infantil.",
                afirmacao: "Ao se dedicar às experiências da graduação, você confirmou que trabalhar com crianças era realmente o caminho profissional que queria seguir."
            }
        ]
    },

    {
        enunciado: "Depois de concluir Pedagogia, surge a oportunidade de realizar outro sonho: trabalhar em um CMEI. Lembro da Elloise de 17 anos, que um dia imaginou como seria seu futuro. Agora preciso decidir que tipo de profissional quero ser.",
        alternativas: [
            {
                texto: "Vejo o trabalho apenas como uma obrigação e sigo a rotina sem buscar criar vínculos com as crianças.",
                afirmacao: "Com o tempo, você percebeu que trabalhar em um CMEI exige mais do que cumprir tarefas: é preciso responsabilidade, paciência, cuidado e dedicação."
            },
            {
                texto: "Procuro criar um ambiente acolhedor, respeitar cada criança e contribuir para que elas aprendam e se desenvolvam.",
                afirmacao: "Você realizou o sonho que começou aos 17 anos e descobriu que ser pedagoga significa participar dos primeiros passos de muitas crianças e fazer parte de suas histórias."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
