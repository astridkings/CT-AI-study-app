// Quiz Data para CT-AI Study App
// 110 questões em 11 capítulos (10 questões por capítulo)

const quizData = {
    chapter1: [
        {
            question: "Qual é a melhor definição de Inteligência Artificial (IA)?",
            options: [
                "Um sistema que só pode realizar cálculos matemáticos",
                "A capacidade de um sistema projetado para adquirir, processar e aplicar conhecimentos e habilidades",
                "Um programa de computador que segue regras explícitas se-então-senão",
                "Qualquer sistema automatizado que processa dados"
            ],
            correct: 1,
            explanation: "IA é definida como a capacidade de um sistema projetado para adquirir, processar e aplicar conhecimentos e habilidades."
        },
        {
            question: "O que é o 'Efeito IA'?",
            options: [
                "O fenômeno onde sistemas de IA ficam mais rápidos ao longo do tempo",
                "A situação onde tarefas anteriormente consideradas IA se tornam convencionais à medida que a tecnologia avança",
                "O efeito da IA no emprego humano",
                "O impacto psicológico da IA na tomada de decisão humana"
            ],
            correct: 1,
            explanation: "O Efeito IA refere-se a como a definição de IA muda à medida que tarefas anteriormente consideradas IA se tornam convencionais."
        },
        {
            question: "Qual tipo de IA está atualmente mais amplamente disponível?",
            options: [
                "IA Estreita",
                "IA Geral",
                "IA Super",
                "IA Quântica"
            ],
            correct: 0,
            explanation: "IA Estreita (ou IA Fraca) está atualmente amplamente disponível e projetada para tarefas específicas como filtros de spam ou sistemas de jogos."
        },
        {
            question: "Qual é a principal diferença entre sistemas convencionais e sistemas baseados em IA?",
            options: [
                "Sistemas convencionais são mais rápidos que sistemas de IA",
                "Sistemas de IA aprendem padrões a partir de dados, enquanto sistemas convencionais usam regras programadas",
                "Sistemas convencionais só podem lidar com dados de texto",
                "Sistemas de IA requerem mais eletricidade"
            ],
            correct: 1,
            explanation: "Sistemas convencionais são programados com regras explícitas (se-então-senão), enquanto sistemas de IA aprendem padrões a partir de dados para determinar o comportamento futuro."
        },
        {
            question: "Qual das opções a seguir NÃO é uma estrutura de desenvolvimento de IA popular?",
            options: [
                "TensorFlow",
                "PyTorch",
                "Keras",
                "Microsoft PowerPoint"
            ],
            correct: 3,
            explanation: "TensorFlow, PyTorch e Keras são estruturas de desenvolvimento de IA populares. PowerPoint é um software de apresentação."
        },
        {
            question: "Por que GPUs geralmente superam CPUs em aplicações de aprendizado de máquina?",
            options: [
                "GPUs têm velocidades de clock mais rápidas",
                "GPUs têm milhares de núcleos projetados para paralelismo massivo",
                "GPUs são mais caras",
                "GPUs têm mais memória"
            ],
            correct: 1,
            explanation: "GPUs têm milhares de núcleos projetados para paralelismo massivo, tornando-as mais eficientes que CPUs para tarefas de ML."
        },
        {
            question: "O que é AIaaS?",
            options: [
                "IA como Serviço - Modelos ML acessíveis via web",
                "Sistema de Aplicação de Inteligência Automatizada",
                "Software de Análise de Inteligência Artificial",
                "Padrão de Arquitetura de Interface Avançada"
            ],
            correct: 0,
            explanation: "AIaaS (AI as a Service) fornece modelos ML como serviços web que podem ser acessados sem construí-los do zero."
        },
        {
            question: "O que é aprendizagem por transferência?",
            options: [
                "Aprender múltiplos idiomas simultaneamente",
                "Modificar um modelo pré-treinado para uma tarefa diferente mas relacionada",
                "Transferir dados entre diferentes organizações",
                "Aprender transferindo conhecimento entre humanos"
            ],
            correct: 1,
            explanation: "Aprendizagem por transferência envolve modificar um modelo pré-treinado para realizar uma tarefa diferente mas relacionada, economizando recursos de treinamento."
        },
        {
            question: "Qual risco está associado ao uso de modelos pré-treinados?",
            options: [
                "Eles são sempre muito caros",
                "Podem falta transparência comparado a modelos gerados internamente",
                "Eles nunca funcionam corretamente",
                "Eles não podem ser atualizados"
            ],
            correct: 1,
            explanation: "Modelos pré-treinados podem falta transparência comparado a modelos gerados internamente e herdar quaisquer vieses ou defeitos do modelo original."
        },
        {
            question: "Qual é um requisito chave do GDPR para sistemas de IA?",
            options: [
                "Todos os sistemas de IA devem ser open source",
                "Dados pessoais (incluindo previsões) devem ser precisos",
                "Sistemas de IA devem ser programados em Python",
                "Todos os sistemas de IA devem ser aprovados pelo governo da UE"
            ],
            correct: 1,
            explanation: "GDPR exige que dados pessoais e previsões sejam precisos para o propósito pretendido."
        }
    ],
    chapter2: [
        {
            question: "Qual é a diferença entre flexibilidade e adaptabilidade?",
            options: [
                "Flexibilidade é para hardware, adaptabilidade é para software",
                "Flexibilidade é capacidade de ser usado em novas situações; adaptabilidade é facilidade de modificação",
                "São a mesma coisa",
                "Adaptabilidade é só para sistemas de IA, flexibilidade é para sistemas convencionais"
            ],
            correct: 1,
            explanation: "Flexibilidade é a capacidade de ser usado em situações fora dos requisitos originais; adaptabilidade é a facilidade de modificação para novas situações."
        },
        {
            question: "O que é autonomia no contexto de sistemas de IA?",
            options: [
                "A capacidade de trabalhar sem supervisão humana por períodos prolongados",
                "A capacidade de aprender novas linguagens de programação",
                "A capacidade de operar em qualquer plataforma de hardware",
                "A propriedade de ser autofinanciado"
            ],
            correct: 0,
            explanation: "Autonomia é a capacidade de um sistema trabalhar independentemente sem supervisão humana por períodos prolongados."
        },
        {
            question: "Que tipo de viés ocorre quando os dados de treinamento não são totalmente representativos?",
            options: [
                "Viés algorítmico",
                "Viés de amostragem",
                "Viés inadequado",
                "Viés computacional"
            ],
            correct: 1,
            explanation: "Viés de amostragem ocorre quando os dados de treinamento não são totalmente representativos do espaço de dados onde ML será aplicado."
        },
        {
            question: "O que é hacking de recompensa?",
            options: [
                "Uma vulnerabilidade de segurança em sistemas de pagamento",
                "Quando um sistema alcança um objetivo usando uma solução não intencional",
                "O processo de criptografar dados",
                "Um método para treinamento mais rápido"
            ],
            correct: 1,
            explanation: "Hacking de recompensa ocorre quando um sistema de IA alcança seu objetivo de formas não intencionais, como modificar diretamente uma pontuação em vez de jogar o jogo."
        },
        {
            question: "Qual das opções a seguir NÃO é um princípio de IA da OCDE?",
            options: [
                "IA deve beneficiar pessoas e o planeta",
                "Sistemas de IA devem respeitar direitos humanos",
                "IA deve ser completamente autônoma",
                "Organizações devem ser responsáveis por sistemas de IA"
            ],
            correct: 2,
            explanation: "Os princípios da OCDE incluem beneficiar pessoas/planeta, respeitar direitos, transparência, robustez e responsabilidade - mas não exigir autonomia completa."
        },
        {
            question: "O que é transparência no contexto de IA?",
            options: [
                "A facilidade de determinar como um sistema alcançou um resultado específico",
                "A facilidade de determinar o algoritmo e os dados de treinamento usados",
                "A clareza para entender a tecnologia",
                "Todas as anteriores"
            ],
            correct: 1,
            explanation: "Transparência refere-se especificamente à facilidade de determinar o algoritmo e os dados de treinamento usados para gerar o modelo."
        },
        {
            question: "O que torna desafiador garantir que sistemas de IA sejam seguros?",
            options: [
                "Sistemas de IA são sempre determinísticos",
                "Sistemas de IA nunca são usados em aplicações críticas de segurança",
                "Complexidade, indeterminismo, natureza probabilística e falta de transparência",
                "Sistemas de IA são sempre simples e previsíveis"
            ],
            correct: 2,
            explanation: "Sistemas de IA são desafiadores de tornar seguros devido à complexidade, indeterminismo, natureza probabilística, autoaprendizagem e falta de transparência/explicabilidade."
        },
        {
            question: "O que é um efeito colateral em sistemas de IA?",
            options: [
                "Uma funcionalidade documentada do sistema",
                "Consequências negativas de focar apenas em objetivos específicos enquanto ignora outros",
                "Um comportamento intencional do sistema",
                "Uma vulnerabilidade de segurança"
            ],
            correct: 1,
            explanation: "Efeitos colaterais são consequências negativas que ocorrem quando um sistema alcança objetivos específicos mas ignora outros aspectos ambientais."
        },
        {
            question: "Que tipo de viés é causado por configuração incorreta do algoritmo?",
            options: [
                "Viés de amostragem",
                "Viés algorítmico",
                "Viés inadequado",
                "Viés de dados"
            ],
            correct: 1,
            explanation: "Viés algorítmico ocorre quando o algoritmo de aprendizagem é configurado incorretamente, como superestimar alguns dados em relação a outros."
        },
        {
            question: "O que XAI significa?",
            options: [
                "Interface IA Externa",
                "IA Explicável (eXplainable AI)",
                "Arquitetura de IA Estendida",
                "Implementação de IA Experimental"
            ],
            correct: 1,
            explanation: "XAI significa eXplainable AI (IA Explicável), que se concentra em tornar as decisões de sistemas de IA compreensíveis para humanos."
        }
    ],
    chapter3: [
        {
            question: "Qual tipo de aprendizado treina com dados rotulados?",
            options: [
                "Aprendizado não supervisionado",
                "Aprendizado supervisionado",
                "Aprendizado por reforço",
                "Aprendizagem por transferência"
            ],
            correct: 1,
            explanation: "Aprendizado supervisionado treina com dados rotulados onde o algoritmo aprende relações entre entradas e suas saídas correspondentes."
        },
        {
            question: "Qual é a principal tarefa em problemas de classificação?",
            options: [
                "Prever um valor numérico contínuo",
                "Ordenar entradas em classes predefinidas",
                "Encontrar padrões em dados não rotulados",
                "Aprender através de recompensas e penalidades"
            ],
            correct: 1,
            explanation: "Problemas de classificação exigem ordenar entradas em classes discretas predefinidas, como reconhecimento de imagem ou detecção de spam."
        },
        {
            question: "Qual técnica de ML NÃO usa dados de treinamento?",
            options: [
                "Aprendizado supervisionado",
                "Aprendizado não supervisionado",
                "Aprendizado por reforço",
                "Aprendizagem por transferência"
            ],
            correct: 2,
            explanation: "Aprendizado por reforço não usa dados de treinamento; o agente aprende através de interação com o ambiente via recompensas e penalidades."
        },
        {
            question: "O que é overfitting?",
            options: [
                "Quando um modelo é muito simples para ajustar os dados de treinamento",
                "Quando um modelo ajusta os dados de treinamento muito de perto e não pode generalizar para novos dados",
                "Quando os dados de treinamento são insuficientes",
                "Quando o algoritmo está configurado incorretamente"
            ],
            correct: 1,
            explanation: "Overfitting ocorre quando um modelo ajusta os dados de treinamento muito de perto (incluindo ruído), tornando-o incapaz de generalizar para novos dados."
        },
        {
            question: "O que é underfitting?",
            options: [
                "Quando um modelo ajusta os dados de treinamento muito de perto",
                "Quando um modelo é muito simples para ajustar padrões dos dados de treinamento",
                "Quando os dados de treinamento contêm erros",
                "Quando o modelo aprende muito rápido"
            ],
            correct: 1,
            explanation: "Underfitting ocorre quando um modelo é muito simples para ajustar com precisão os padrões dos dados de treinamento, levando a previsões ruins tanto nos dados de treinamento quanto em novos dados."
        },
        {
            question: "No fluxo de trabalho ML, qual é o propósito do conjunto de dados de validação?",
            options: [
                "Treinar o modelo",
                "Avaliar e ajustar o modelo",
                "Testar o modelo ajustado final",
                "Armazenar os dados de treinamento"
            ],
            correct: 1,
            explanation: "O conjunto de dados de validação é usado para avaliar o modelo e ajustar seus parâmetros, mas é mantido separado do conjunto de dados de teste final."
        },
        {
            question: "O que é engenharia de recursos?",
            options: [
                "Escrever código para novos algoritmos de IA",
                "Identificar e derivar recursos informativos dos dados",
                "Testar o modelo",
                "Coletar dados de treinamento"
            ],
            correct: 1,
            explanation: "Engenharia de recursos envolve selecionar recursos relevantes e derivar novos recursos informativos de dados existentes para melhorar o desempenho do modelo."
        },
        {
            question: "Qual fator NÃO é importante ao selecionar um algoritmo ML?",
            options: [
                "Funcionalidade necessária",
                "Características de qualidade (precisão, velocidade)",
                "A cor favorita do desenvolvedor",
                "Tipos e quantidade de dados disponíveis"
            ],
            correct: 2,
            explanation: "A seleção do algoritmo considera funcionalidade, características de qualidade, tipos/quantidades de dados, número de recursos e experiência - mas não preferências pessoais."
        },
        {
            question: "O que é um hiperparâmetro?",
            options: [
                "Um parâmetro que o modelo aprende com dados",
                "Um parâmetro que controla o processo de treinamento ou estrutura do modelo",
                "A saída do modelo",
                "Um recurso nos dados de treinamento"
            ],
            correct: 1,
            explanation: "Hiperparâmetros controlam o processo de treinamento (como número de épocas) ou definem a estrutura do modelo (como número de camadas ocultas em uma rede neural)."
        },
        {
            question: "O que é desvio de conceito?",
            options: [
                "Um bug no algoritmo ML",
                "Quando o ambiente operacional muda enquanto o modelo não, causando degradação de desempenho",
                "Quando o modelo aprende muito devagar",
                "Um tipo de técnica de pré-processamento de dados"
            ],
            correct: 1,
            explanation: "Desvio de conceito ocorre quando o ambiente operacional muda ao longo do tempo mas o modelo não se adapta, levando à degradação de desempenho."
        }
    ],
    chapter4: [
        {
            question: "Qual atividade faz parte do pré-processamento de dados?",
            options: [
                "Limpeza, transformação, aumento e amostragem de dados",
                "Escrever o algoritmo ML",
                "Testar o modelo",
                "Implantar o modelo"
            ],
            correct: 0,
            explanation: "Pré-processamento de dados inclui limpeza (remover dados incorretos), transformação (mudanças de formato), aumento (aumentar amostras) e amostragem."
        },
        {
            question: "Qual é a proporção típica para conjuntos de dados treinamento:validação:teste?",
            options: [
                "10:10:80",
                "80:10:10 a 60:20:20",
                "33:33:33",
                "50:50:0"
            ],
            correct: 1,
            explanation: "Divisões típicas variam de 80:10:10 a 60:20:20 para treinamento:validação:teste, embora a proporção exata dependa dos dados disponíveis."
        },
        {
            question: "O que é dado rotulado incorretamente?",
            options: [
                "Dados que estão faltando",
                "Dados que foram rotulados incorretamente",
                "Dados que são muito antigos",
                "Dados que estão duplicados"
            ],
            correct: 1,
            explanation: "Dados rotulados incorretamente ocorrem quando dados foram rotulados erradamente, o que pode degradar o desempenho do modelo em aprendizado supervisionado."
        },
        {
            question: "Qual NÃO é um problema de qualidade de dados?",
            options: [
                "Dados incorretos",
                "Dados completos",
                "Dados incompletos",
                "Dados desbalanceados"
            ],
            correct: 1,
            explanation: "Dados completos são bons. Problemas de qualidade de dados incluem dados incorretos, incompletos, insuficientes, desbalanceados, viesados, etc."
        },
        {
            question: "O que é aumento de dados?",
            options: [
                "Excluir dados antigos",
                "Criar novos pontos de dados com base em dados existentes para aumentar o tamanho do conjunto de dados",
                "Corrigir erros em dados",
                "Comprimir arquivos de dados"
            ],
            correct: 1,
            explanation: "Aumento de dados cria novos pontos de dados a partir de dados existentes para aumentar o tamanho do conjunto de dados e melhorar a robustez do modelo."
        },
        {
            question: "O que é seleção de recursos?",
            options: [
                "Criar novos recursos a partir de existentes",
                "Identificar e manter recursos que contribuem mais para o treinamento, removendo ruído",
                "Rotular dados",
                "Testar o modelo"
            ],
            correct: 1,
            explanation: "Seleção de recursos envolve manter os recursos mais relevantes e remover os irrelevantes (ruído) para melhorar a eficiência de treinamento e a precisão do modelo."
        },
        {
            question: "Qual abordagem à rotulagem de dados envolve um grande grupo de indivíduos?",
            options: [
                "Rotulagem interna",
                "Rotulagem terceirizada",
                "Rotulagem por multidão",
                "Rotulagem assistida por IA"
            ],
            correct: 2,
            explanation: "Rotulagem por multidão envolve um grande grupo de indivíduos rotulando dados, frequentemente exigindo que múltiplos anotadores concordem com o rótulo."
        },
        {
            question: "O que pode causar dados viesados?",
            options: [
                "Erros aleatórios na rotulagem",
                "Erros sistêmicos na coleta de dados",
                "Amostragem não representativa da população",
                "Todas as anteriores"
            ],
            correct: 3,
            explanation: "Dados podem ficar viesados através de erros aleatórios, erros sistêmicos na coleta/rotulagem, amostragem não representativa ou dados intencionalmente injustos."
        },
        {
            question: "Que porcentagem de esforço no fluxo de trabalho ML é tipicamente gasta na preparação de dados?",
            options: [
                "10%",
                "25%",
                "43%",
                "70%"
            ],
            correct: 2,
            explanation: "Preparação de dados tipicamente consome cerca de 43% do esforço no fluxo de trabalho ML, tornando-a a atividade mais intensiva em recursos."
        },
        {
            question: "Qual é o propósito de manter o conjunto de dados de teste separado?",
            options: [
                "Economizar espaço de armazenamento",
                "Garantir que os dados de teste não influenciem o treinamento do modelo",
                "Fazer o modelo treinar mais rápido",
                "Cumprir regulamentos"
            ],
            correct: 1,
            explanation: "O conjunto de dados de teste deve ser mantido separado dos dados de treinamento e validação para garantir que os resultados do teste reflitam o verdadeiro desempenho do modelo em dados não vistos."
        }
    ],
    chapter5: [
        {
            question: "O que a precisão mede?",
            options: [
                "A proporção de todas as classificações corretas",
                "A proporção de positivos previstos que eram realmente positivos",
                "A proporção de positivos reais que foram corretamente previstos",
                "A média harmônica de precisão e recall"
            ],
            correct: 1,
            explanation: "Precisão = VP / (VP + FP), medindo a proporção de previsões positivas que estavam realmente corretas."
        },
        {
            question: "O que o recall mede?",
            options: [
                "A proporção de todas as classificações corretas",
                "A proporção de positivos previstos que eram realmente positivos",
                "A proporção de positivos reais que foram corretamente previstos",
                "A média harmônica de precisão e recall"
            ],
            correct: 2,
            explanation: "Recall (sensibilidade) = VP / (VP + FN), medindo a proporção de positivos reais que foram corretamente identificados."
        },
        {
            question: "O que é o F1-score?",
            options: [
                "A média aritmética de precisão e recall",
                "A média harmônica de precisão e recall",
                "A média geométrica de precisão e recall",
                "A soma de precisão e recall"
            ],
            correct: 1,
            explanation: "F1-score = 2 × (Precisão × Recall) / (Precisão + Recall), fornecendo uma medida equilibrada quando precisão e recall são igualmente importantes."
        },
        {
            question: "Quando você priorizaria precisão em vez de recall?",
            options: [
                "Detecção de câncer onde perder positivos é inaceitável",
                "Filtragem de spam onde falsos positivos são indesejáveis",
                "Quando conjuntos de dados estão perfeitamente equilibrados",
                "Quando você precisa da maior precisão possível"
            ],
            correct: 1,
            explanation: "Precisão é priorizada quando falsos positivos são custosos ou indesejáveis, como em filtragem de spam onde e-mails legítimos não devem ser marcados como spam."
        },
        {
            question: "O que é AUC?",
            options: [
                "Área Sob a Curva - para análise ROC",
                "Cálculo de Utilidade de Precisão",
                "Conversão Automática de Unidade",
                "Contagem Média de Usuários"
            ],
            correct: 0,
            explanation: "AUC (Area Under the Curve) mede a área sob a curva ROC, indicando o quão bem um classificador pode distinguir entre classes."
        },
        {
            question: "Qual métrica é usada para problemas de regressão?",
            options: [
                "F1-score",
                "Recall",
                "Erro Quadrático Médio (MSE)",
                "Coeficiente de silhueta"
            ],
            correct: 2,
            explanation: "MSE (Mean Squared Error) mede a média dos quadrados das diferenças entre valores previstos e reais em problemas de regressão."
        },
        {
            question: "Para que é usado o coeficiente de silhueta?",
            options: [
                "Problemas de classificação",
                "Problemas de regressão",
                "Problemas de agrupamento",
                "Análise de séries temporais"
            ],
            correct: 2,
            explanation: "O coeficiente de silhueta mede a qualidade do agrupamento, variando de -1 (agrupados incorretamente) a +1 (agrupamentos bem separados)."
        },
        {
            question: "Qual é uma limitação chave das métricas de desempenho ML?",
            options: [
                "Elas só medem desempenho funcional, não outras características de qualidade",
                "Elas são sempre precisas",
                "Elas não requerem ferramentas para medir",
                "Elas se aplicam ao sistema inteiro incluindo o pipeline"
            ],
            correct: 0,
            explanation: "Métricas de desempenho ML só medem a funcionalidade do modelo (ex: precisão), não outras características de qualidade como velocidade, transparência ou robustez."
        },
        {
            question: "Quando você deve usar F1-score em vez de acurácia?",
            options: [
                "Quando as classes estão perfeitamente equilibradas",
                "Quando as classes estão desbalanceadas e precisão/recall são igualmente importantes",
                "Quando recall é mais importante que precisão",
                "Quando precisão é mais importante que recall"
            ],
            correct: 1,
            explanation: "F1-score é útil quando conjuntos de dados têm classes desbalanceadas e precisão e recall são igualmente importantes."
        },
        {
            question: "Qual é o propósito de benchmarks ML?",
            options: [
                "Testar bugs de software",
                "Comparar desempenho de hardware, frameworks e plataformas em nuvem",
                "Validar qualidade de dados",
                "Medir inteligência humana"
            ],
            correct: 1,
            explanation: "Benchmarks ML (como MLCommons) fornecem maneiras padronizadas de comparar o desempenho de hardware, frameworks de software e plataformas em nuvem."
        }
    ],
    chapter6: [
        {
            question: "Qual é o tipo mais simples de rede neural?",
            options: [
                "Rede neural profunda",
                "Perceptron",
                "Rede neural convolucional",
                "Rede neural recorrente"
            ],
            correct: 1,
            explanation: "Um perceptron é uma rede de camada única, com um único neurônio, a forma mais simples de rede neural."
        },
        {
            question: "Quais são os três tipos de camadas em uma rede neural?",
            options: [
                "Frente, meio e trás",
                "Entrada, oculta e saída",
                "Treinamento, validação e teste",
                "Dados, modelo e saída"
            ],
            correct: 1,
            explanation: "Redes neurais consistem em camadas de entrada (recebem entradas), camadas ocultas (realizam cálculos) e camadas de saída (fornecem resultados)."
        },
        {
            question: "O que acontece durante o treinamento de uma rede neural?",
            options: [
                "Pesos são definidos aleatoriamente",
                "Pesos são ajustados com base na diferença entre saída e resultado esperado",
                "A rede aprende novas linguagens de programação",
                "O hardware é atualizado"
            ],
            correct: 1,
            explanation: "Durante o treinamento, dados passam pela rede, a saída é comparada aos resultados esperados, e pesos são ajustados para minimizar o erro."
        },
        {
            question: "O que é uma época no treinamento de redes neurais?",
            options: [
                "Um exemplo de treinamento",
                "Uma iteração completa por todo o conjunto de dados de treinamento",
                "O tempo que leva para treinar o modelo",
                "O número de camadas ocultas"
            ],
            correct: 1,
            explanation: "Uma época é uma iteração completa por todo o conjunto de dados de treinamento durante o treinamento de redes neurais."
        },
        {
            question: "Por que medidas de cobertura de código tradicionais não funcionam bem para redes neurais?",
            options: [
                "Redes neurais executam os mesmos caminhos de código toda vez",
                "Redes neurais não têm código",
                "Cobertura tradicional é muito complexa",
                "Redes neurais são muito lentas"
            ],
            correct: 0,
            explanation: "Medidas de cobertura tradicionais não funcionam bem porque redes neurais tendem a executar o mesmo código toda vez, fornecendo pouca diferenciação."
        },
        {
            question: "O que é cobertura de neurônios?",
            options: [
                "Todo neurônio alcança uma ativação maior que zero",
                "Todo neurônio alcança uma ativação maior que um limite específico",
                "Todo neurônio alcança tanto ativações positivas quanto negativas",
                "Pares de neurônios mudam de sinal juntos"
            ],
            correct: 0,
            explanation: "Cobertura de neurônios exige que cada neurônio alcance um valor de ativação maior que zero."
        },
        {
            question: "O que é cobertura de limite?",
            options: [
                "Toda ativação de neurônio > 0",
                "Toda ativação de neurônio > um limite específico (ex: 0,75)",
                "Todo neurônio alcança tanto ativações positivas quanto negativas",
                "Pares de neurônios onde mudança de sinal afeta o outro"
            ],
            correct: 1,
            explanation: "Cobertura de limite exige que a ativação de cada neurônio exceda um limite específico, tipicamente 0,75."
        },
        {
            question: "O que é uma rede neural profunda?",
            options: [
                "Uma rede neural com muitos pontos de dados",
                "Uma rede neural com múltiplas camadas ocultas",
                "Uma rede neural treinada por muito tempo",
                "Uma rede neural com regras complexas"
            ],
            correct: 1,
            explanation: "Uma rede neural profunda (DNN) contém múltiplas camadas ocultas entre as camadas de entrada e saída."
        },
        {
            question: "Qual é o propósito da função de ativação?",
            options: [
                "Armazenar dados",
                "Calcular a saída do neurônio com base em entradas, pesos e viés",
                "Treinar a rede",
                "Testar o modelo"
            ],
            correct: 1,
            explanation: "A função de ativação calcula o valor de saída de um neurônio com base na soma ponderada de entradas da camada anterior mais o viés."
        },
        {
            question: "O que é cobertura de mudança de sinal?",
            options: [
                "Toda ativação de neurônio > 0",
                "Toda ativação de neurônio > limite",
                "Cada neurônio alcança tanto valores de ativação positivos quanto negativos",
                "Pares de neurônios onde mudar o sinal de um muda o sinal do outro"
            ],
            correct: 2,
            explanation: "Cobertura de mudança de sinal exige casos de teste que façam cada neurônio alcançar tanto valores de ativação positivos quanto negativos."
        }
    ],
    chapter7: [
        {
            question: "O que é desvio de conceito?",
            options: [
                "Um bug no pipeline de dados",
                "Quando o ambiente operacional muda enquanto o modelo não, causando degradação de desempenho",
                "Quando o modelo está overfitted",
                "Um tipo de ataque de envenenamento de dados"
            ],
            correct: 1,
            explanation: "Desvio de conceito ocorre quando o ambiente operacional evolui mas o modelo treinado não se adapta, levando ao declínio de desempenho ao longo do tempo."
        },
        {
            question: "O que é viés de automação?",
            options: [
                "Viés no próprio algoritmo",
                "Quando humanos confiam demais em recomendações automatizadas ou perdem falhas do sistema devido a monitoramento reduzido",
                "Viés nos dados de treinamento",
                "Um tipo de limitação de hardware"
            ],
            correct: 1,
            explanation: "Viés de automação tem duas formas: aceitar recomendações do sistema sem questionar, ou perder falhas devido ao monitoramento reduzido."
        },
        {
            question: "Qual nível de teste é específico para sistemas baseados em IA?",
            options: [
                "Teste de componentes",
                "Teste de integração",
                "Teste de dados de entrada e teste de modelo ML",
                "Teste de aceite"
            ],
            correct: 2,
            explanation: "Teste de dados de entrada e teste de modelo ML são níveis de teste especializados introduzidos especificamente para sistemas baseados em IA junto com níveis de teste convencionais."
        },
        {
            question: "Qual é o propósito do teste de dados de entrada?",
            options: [
                "Testar a interface do usuário",
                "Garantir que dados de treinamento e previsão sejam de alta qualidade",
                "Testar a velocidade do algoritmo",
                "Verificar os requisitos do sistema"
            ],
            correct: 1,
            explanation: "Teste de dados de entrada garante que os dados usados para treinamento e previsão sejam de alta qualidade através de revisões, técnicas estatísticas, EDA e teste de pipeline."
        },
        {
            question: "Qual é o desafio na especificação de requisitos para sistemas de IA?",
            options: [
                "Requisitos são sempre claros e completos",
                "Desenvolvimento exploratório, precisão desconhecida, natureza probabilística e características evolutivas",
                "Sistemas de IA não têm requisitos",
                "Requisitos são muito simples"
            ],
            correct: 1,
            explanation: "Especificação de sistemas de IA é desafiadora devido ao desenvolvimento exploratório, precisão desconhecida até testes, natureza probabilística e características evolutivas como adaptabilidade."
        },
        {
            question: "Qual documentação é crítica para testar componentes de IA?",
            options: [
                "Apenas o manual do usuário",
                "Informações gerais, de design, uso, conjunto de dados, testes e treinamento/desempenho",
                "Apenas o código do algoritmo",
                "Apenas os resultados dos testes"
            ],
            correct: 1,
            explanation: "Documentação abrangente incluindo design, uso, características do conjunto de dados, abordagem de testes e detalhes de treinamento é crítica para transparência e testabilidade."
        },
        {
            question: "O que é teste de sistema para sistemas baseados em IA?",
            options: [
                "Testar componentes individuais",
                "Testar o sistema integrado completo em um ambiente representativo",
                "Testar apenas os dados",
                "Testar apenas o algoritmo"
            ],
            correct: 1,
            explanation: "Teste de sistema verifica que o sistema integrado completo (ambos componentes de IA e não-IA) funciona conforme esperado em um ambiente de teste representativo."
        },
        {
            question: "Por que testar sistemas de IA é desafiador em relação aos dados?",
            options: [
                "Dados são sempre perfeitos",
                "Desafios de big data (volume, velocidade, variedade), dados evolutivos, preocupações de privacidade e mascaramento de defeitos de pipeline",
                "Dados são muito simples",
                "Sempre há muitos dados de teste disponíveis"
            ],
            correct: 1,
            explanation: "Desafios de teste de dados em IA incluem características de big data, dados que devem evoluir ao longo do tempo, dados privados/confidenciais e usar a mesma implementação dos desenvolvedores que pode esconder defeitos de pipeline."
        },
        {
            question: "O que acontece durante o teste de modelo ML?",
            options: [
                "Apenas verificar o código",
                "Verificar métricas de desempenho (métricas funcionais ML e critérios não funcionais)",
                "Testar apenas a interface do usuário",
                "Revisar os requisitos"
            ],
            correct: 1,
            explanation: "Teste de modelo ML verifica que o modelo atende critérios de desempenho incluindo métricas funcionais ML (precisão, recall, etc.) e critérios não funcionais (velocidade, recursos)."
        },
        {
            question: "Como você deve lidar com desvio de conceito?",
            options: [
                "Ignorar completamente",
                "Testar regularmente contra critérios de desempenho acordados e retreinar ou refinar o modelo quando necessário",
                "Sempre reconstruir o modelo do zero",
                "Excluir os dados de treinamento"
            ],
            correct: 1,
            explanation: "Desvio de conceito deve ser tratado testando regularmente o modelo contra critérios de desempenho e retreinando ou refinando o modelo com dados atualizados quando degradação é detectada."
        }
    ],
    chapter8: [
        {
            question: "O que é o problema do oráculo de teste?",
            options: [
                "Um problema de banco de dados",
                "Dificuldade em determinar o resultado esperado de um teste",
                "Um problema de desempenho",
                "Uma vulnerabilidade de segurança"
            ],
            correct: 1,
            explanation: "O problema do oráculo de teste é o desafio de determinar qual deve ser o resultado correto ou esperado para uma dada entrada de teste."
        },
        {
            question: "O que é teste metamórfico?",
            options: [
                "Testar o metabolismo do sistema",
                "Gerar casos de teste de acompanhamento de casos de teste origem baseados em relações metamórficas",
                "Testar após o sistema ser implantado",
                "Testar apenas componentes de metal"
            ],
            correct: 1,
            explanation: "Teste metamórfico gera casos de teste de acompanhamento de um caso de teste origem baseado em uma relação metamórfica - uma propriedade da função que relaciona mudanças de entrada a mudanças de saída."
        },
        {
            question: "O que é teste contraditório?",
            options: [
                "Testar contra competidores",
                "Realizar ataques contraditórios para identificar vulnerabilidades",
                "Testar com usuários zangados",
                "Testar conflitos do sistema"
            ],
            correct: 1,
            explanation: "Teste contraditório envolve realizar ataques contraditórios em um sistema para identificar vulnerabilidades que podem então ser mitigadas."
        },
        {
            question: "O que é teste em pares?",
            options: [
                "Teste por duas pessoas juntas",
                "Uma técnica combinatória onde cada par de valores é testado pelo menos uma vez",
                "Testar dispositivos pareados",
                "Testar em pares de locais"
            ],
            correct: 1,
            explanation: "Teste em pares é uma técnica combinatória que garante que cada par de valores de parâmetro seja testado pelo menos uma vez, reduzindo significativamente casos de teste mantendo eficácia."
        },
        {
            question: "O que é teste consecutivo (back-to-back)?",
            options: [
                "Testar em ordem reversa",
                "Usar uma versão alternativa de sistema como pseudo-oráculo para comparar resultados",
                "Testar o backend duas vezes",
                "Teste sequencial do mesmo sistema"
            ],
            correct: 1,
            explanation: "Teste consecutivo (diferencial) usa uma versão alternativa de sistema como pseudo-oráculo, comparando resultados para detectar defeitos."
        },
        {
            question: "O que é teste A/B?",
            options: [
                "Testar recursos A e B sequencialmente",
                "Comparar duas variações de sistema com as mesmas entradas para determinar qual é melhor",
                "Testar com dois algoritmos",
                "Testar formatos binário e decimal"
            ],
            correct: 1,
            explanation: "Teste A/B compara duas variações (A e B) com as mesmas entradas para estatisticamente determinar qual é melhor."
        },
        {
            question: "O que é envenenamento de dados?",
            options: [
                "Limpar dados corrompidos",
                "Manipular dados de treinamento para causar previsões incorretas",
                "Criptografar dados de treinamento",
                "Comprimir arquivos de dados"
            ],
            correct: 1,
            explanation: "Envenenamento de dados envolve manipular maliciosamente dados de treinamento para fazer um modelo ML fazer previsões incorretas ou criar backdoors."
        },
        {
            question: "Qual técnica ajuda a mitigar o problema do oráculo de teste?",
            options: [
                "Escrever mais código",
                "Teste metamórfico, teste consecutivo e teste A/B",
                "Pular testes",
                "Usar apenas testes de unidade"
            ],
            correct: 1,
            explanation: "Teste metamórfico, teste consecutivo e teste A/B todos ajudam a abordar o problema do oráculo de teste fornecendo maneiras de verificar resultados sem precisar de saídas corretas conhecidas."
        },
        {
            question: "O que é transferibilidade em ataques contraditórios?",
            options: [
                "Mover dados entre sistemas",
                "Exemplos contraditórios que funcionam em modelos diferentes treinados para a mesma tarefa",
                "A capacidade de transferir modelos",
                "Portabilidade de dados"
            ],
            correct: 1,
            explanation: "Transferibilidade significa que exemplos contraditórios frequentemente funcionam em modelos diferentes treinados para a mesma tarefa, mesmo com arquiteturas e dados de treinamento diferentes."
        },
        {
            question: "Quando teste metamórfico é particularmente útil?",
            options: [
                "Quando existe o problema do oráculo",
                "Quando os testes são triviais",
                "Quando o sistema é muito simples",
                "Quando você tem muitos dados de teste"
            ],
            correct: 0,
            explanation: "Teste metamórfico é particularmente útil quando existe o problema do oráculo - quando é difícil determinar resultados esperados - pois usa resultados relativos em vez de absolutos."
        }
    ],
    chapter9: [
        {
            question: "O que é o método LIME?",
            options: [
                "Um algoritmo baseado em frutas",
                "Um método agnóstico ao modelo usando anomalias de entrada/saída para explicar decisões do modelo",
                "Um tipo de rede neural",
                "Uma técnica de limpeza de dados"
            ],
            correct: 1,
            explanation: "LIME (Local Interpretable Model-Agnostic Explanations) injeta anomalias em entradas e saídas para mostrar como entradas influenciam saídas do modelo."
        },
        {
            question: "O que torna desafiador testar sistemas de autoaprendizagem?",
            options: [
                "Eles nunca mudam",
                "Mudanças inesperadas, critérios de aceite complexos, restrições de tempo e modificações comportamentais não intencionais",
                "Eles são muito simples",
                "Eles não precisam de testes"
            ],
            correct: 1,
            explanation: "Sistemas de autoaprendizagem apresentam desafios incluindo mudanças comportamentais inesperadas, critérios de aceite complexos, tempo de teste insuficiente para adaptação rápida e risco de que testes influenciem o comportamento."
        },
        {
            question: "Como você testa sistemas autônomos?",
            options: [
                "Testar apenas o hardware",
                "Criar condições para verificar se o sistema solicita intervenção humana quando apropriado",
                "Testar apenas quando desconectado",
                "Testar apenas a interface do usuário"
            ],
            correct: 1,
            explanation: "Sistemas autônomos são testados criando condições que verificam se o sistema solicita intervenção humana quando perde o controle, após tempo limite ou quando solicita desnecessariamente intervenção."
        },
        {
            question: "O que é análise exploratória de dados (EDA)?",
            options: [
                "Testar o sistema em campo",
                "Exploração interativa e orientada por hipóteses de dados para identificar padrões e relações",
                "Geração automatizada de testes",
                "Teste de desempenho"
            ],
            correct: 1,
            explanation: "EDA é a exploração interativa e orientada por hipóteses de dados para identificar padrões, relações, tendências e lacunas através de visualização e análise."
        },
        {
            question: "O que é suposição de erro?",
            options: [
                "Teste aleatório",
                "Teste baseado em conhecimento de erros típicos em sistemas ou versões similares",
                "Teste automatizado",
                "Teste sem um plano"
            ],
            correct: 1,
            explanation: "Suposição de erro é uma técnica de teste baseada em experiência baseada em conhecimento de erros típicos que desenvolvedores cometem e falhas em sistemas similares."
        },
        {
            question: "Quais são os principais desafios de testar sistemas probabilísticos/não determinísticos?",
            options: [
                "Eles sempre produzem o mesmo resultado",
                "Múltiplos resultados válidos, dificuldade em definir resultados esperados, necessidade de validade estatística",
                "Eles estão sempre corretos",
                "Teste é trivial"
            ],
            correct: 1,
            explanation: "Sistemas probabilísticos podem produzir múltiplos resultados válidos, tornando difícil definir resultados esperados, exigindo conhecimento mais profundo e múltiplas execuções para validade estatística."
        },
        {
            question: "Como o viés pode ser testado em sistemas de IA?",
            options: [
                "Apenas por revisão de código",
                "Analisar modelo durante treinamento, revisar fontes de dados, medir saídas entre grupos, usar LIME",
                "Apenas por pesquisas com usuários",
                "Viés não pode ser testado"
            ],
            correct: 1,
            explanation: "Teste de viés envolve analisar o modelo durante treinamento, revisar fontes de dados e pré-processamento, medir saídas entre diferentes grupos e usar métodos como LIME."
        },
        {
            question: "Quais critérios de aceite devem ser usados para testar adaptabilidade?",
            options: [
                "Apenas verificar se o sistema inicializa",
                "Verificar funcionalidade após adaptação, tempo/recursos para adaptar",
                "Testar apenas os requisitos originais",
                "Nenhum critério de aceite necessário"
            ],
            correct: 1,
            explanation: "Critérios de aceite de adaptabilidade incluem verificar se o sistema ainda funciona corretamente após mudanças ambientais e medir o tempo/recursos usados para adaptar."
        },
        {
            question: "Qual é a diferença entre oráculo de teste e pseudo-oráculo?",
            options: [
                "São a mesma coisa",
                "Um oráculo de teste sabe a resposta correta; um pseudo-oráculo é um sistema alternativo usado para comparação",
                "Um pseudo-oráculo está sempre correto",
                "Um oráculo de teste está sempre errado"
            ],
            correct: 1,
            explanation: "Um oráculo de teste fornece o resultado correto conhecido. Um pseudo-oráculo é um sistema alternativo (possivelmente imperfeito) usado para comparar resultados quando um oráculo verdadeiro não está disponível."
        },
        {
            question: "O que o teste de transparência deve verificar?",
            options: [
                "Design da interface do usuário",
                "Comparar algoritmo e dados documentados com implementação real",
                "Velocidade da rede",
                "Tamanho do banco de dados"
            ],
            correct: 1,
            explanation: "Teste de transparência envolve comparar o algoritmo documentado, dados de treinamento e especificações de design com a implementação real para verificar consistência."
        }
    ],
    chapter10: [
            {
            question: "Qual é um benefício chave de ambientes de teste virtuais para sistemas de IA?",
            options: [
                "Eles são mais caros",
                "Testar cenários perigosos, incomuns ou extremos sem risco",
                "Eles requerem mais hardware",
                "Eles são mais lentos"
            ],
            correct: 1,
            explanation: "Ambientes virtuais permitem testar cenários perigosos sem risco, cenários incomuns/raros sob demanda e cenários extremos/caros com segurança."
        },
        {
            question: "O que é Habitat AI?",
            options: [
                "Uma plataforma de simulação de robôs usando Blender",
                "Plataforma de simulação 3D foto-realista da Facebook para treinar agentes de IA",
                "Plataforma de teste de veículos autônomos da NVIDIA",
                "Framework ML do Google"
            ],
            correct: 1,
            explanation: "Habitat AI é a plataforma da Facebook para simular ambientes 3D foto-realistas para treinar agentes de IA incorporados."
        },
        {
            question: "Como ambientes de teste virtuais lidam com cenários intensivos em tempo?",
            options: [
                "Eles os fazem demorar mais",
                "Eles não podem testar cenários intensivos em tempo",
                "Eles aceleram escalas de tempo e podem rodar múltiplos ambientes em paralelo",
                "Eles pulam testes intensivos em tempo"
            ],
            correct: 2,
            explanation: "Ambientes virtuais podem acelerar escalas de tempo (ex: rodar dias em minutos) e rodar múltiplos ambientes em paralelo para testar cenários intensivos em tempo eficientemente."
        },
        {
            question: "O que torna ambientes de teste diferentes para sistemas de IA de autoaprendizagem?",
            options: [
                "Eles são os mesmos que sistemas convencionais",
                "Eles devem imitar mudanças ambientais indefinidas e incorporar aleatoriedade",
                "Eles não precisam de ambientes especiais",
                "Eles usam apenas ambientes do mundo real"
            ],
            correct: 1,
            explanation: "Sistemas de autoaprendizagem precisam de ambientes de teste que podem imitar mudanças ambientais indefinidas e incorporar aleatoriedade já que o sistema se adaptará ao longo do tempo."
        },
        {
            question: "O que é DRIVE Constellation?",
            options: [
                "Um simulador de robôs",
                "Plataforma em nuvem da NVIDIA para teste de veículos autônomos",
                "Plataforma de IA da Facebook",
                "Benchmark ML do Google"
            ],
            correct: 1,
            explanation: "DRIVE Constellation é a plataforma baseada em nuvem da NVIDIA capaz de gerar bilhões de quilômetros de dados de teste de veículos autônomos."
        },
        {
            question: "Por que um ambiente de teste de sistema de IA pode precisar de hardware específico de IA?",
            options: [
                "É um requisito",
                "Alguns sistemas de IA usam processadores especializados como TPUs ou ASICs que devem estar no ambiente de teste",
                "Sempre necessário para velocidade",
                "Apenas para depuração"
            ],
            correct: 1,
            explanation: "Sistemas de IA usando hardware especializado como TPUs, ASICs ou processadores neuromórficos precisam desse hardware no ambiente de teste para testes precisos."
        },
        {
            question: "O que é Morse?",
            options: [
                "Um ambiente virtual para veículos autônomos",
                "Motor de simulação de robôs baseado em Blender",
                "Plataforma de simulação 3D da Facebook",
                "Framework ML do Google"
            ],
            correct: 1,
            explanation: "Morse é o Modular Open Robots Simulation Engine, um simulador de robôs baseado no motor de jogo Blender."
        },
        {
            question: "Como ambientes de teste virtuais melhoram a observação?",
            options: [
                "Eles tornam mais difícil observar",
                "Eles fornecem monitoramento contínuo e maior controle sobre o ambiente",
                "Eles não têm benefícios de observação",
                "Eles só registram resultados"
            ],
            correct: 1,
            explanation: "Ambientes virtuais fornecem maior controle e monitoramento contínuo de todos os componentes, permitindo observação abrangente do comportamento do sistema."
        },
        {
            question: "Que desafio o big data cria para ambientes de teste?",
            options: [
                "Nenhum desafio",
                "Planejamento cuidadoso para volume, velocidade e variedade de dados",
                "Big data torna o teste mais fácil",
                "Big data elimina a necessidade de testes"
            ],
            correct: 1,
            explanation: "Big data (alto volume, velocidade, variedade) requer planejamento cuidadoso em ambientes de teste para garantir armazenamento, capacidade de processamento e fluxo de dados suficientes."
        },
        {
            question: "Ao testar sistemas autônomos, o que o ambiente deve criar?",
            options: [
                "Apenas condições normais",
                "Condições onde o sistema deve e não deve solicitar intervenção humana",
                "Apenas condições perigosas",
                "Apenas condições seguras"
            ],
            correct: 1,
            explanation: "Ambientes de teste de sistemas autônomos devem criar condições para testar quando o sistema deve solicitar intervenção humana (perdendo controle, tempo limite) e quando não deve (ainda autônomo)."
        }
    ],
    chapter11: [
        {
            question: "Como a IA pode ser usada para análise de defeitos?",
            options: [
                "Apenas revisão manual",
                "PNL para categorização, ML para previsão de criticidade, ML para atribuição de desenvolvedor",
                "IA não pode analisar defeitos",
                "Apenas usando planilhas"
            ],
            correct: 1,
            explanation: "IA pode ajudar na análise de defeitos através de PNL para categorização, modelos ML para prever criticidade e ML para sugerir atribuições de desenvolvedor apropriadas."
        },
        {
            question: "Qual é um benefício chave da geração de testes baseada em IA?",
            options: [
                "É mais lenta que teste manual",
                "Alcança cobertura equivalente com menos etapas de teste e encontra mais defeitos",
                "Sempre produz testes perfeitos",
                "Não requer código"
            ],
            correct: 1,
            explanation: "Geração de testes baseada em IA pode alcançar cobertura equivalente encontrando mais defeitos, reduzindo etapas de teste de milhares para cerca de 100."
        },
        {
            question: "Como a IA pode otimizar conjuntos de teste de regressão?",
            options: [
                "Tornando-os maiores",
                "Analisando resultados anteriores, defeitos e mudanças para selecionar/priorizar testes",
                "Removendo todos os testes",
                "Rodando testes aleatoriamente"
            ],
            correct: 1,
            explanation: "IA pode otimizar conjuntos de teste de regressão analisando resultados de teste anteriores, defeitos associados e mudanças recentes para selecionar, priorizar e aumentar testes."
        },
        {
            question: "Quais métricas fornecem a melhor previsão de defeitos?",
            options: [
                "Métricas de código (linhas de código, complexidade ciclomática)",
                "Métricas de pessoas e organizacionais",
                "Especificações de hardware",
                "Número de desenvolvedores"
            ],
            correct: 1,
            explanation: "Pesquisas mostram que métricas de pessoas e organizacionais frequentemente fornecem melhores previsões de defeitos que métricas de código fonte como linhas de código ou complexidade ciclomática."
        },
        {
            question: "Como a IA ajuda com teste visual de interface gráfica?",
            options: [
                "Verificando apenas código",
                "Usando reconhecimento de imagem para interagir e comparar elementos de UI independentemente do código subjacente",
                "Testando apenas texto",
                "IA não pode testar interfaces gráficas"
            ],
            correct: 1,
            explanation: "IA usa reconhecimento de imagem para interagir diretamente com elementos visuais de UI e pode comparar capturas de tela para detectar mudanças de layout, tamanho, cor, fonte e outras mudanças visuais."
        },
        {
            question: "Quais são as três principais categorias de tecnologias de IA para testes?",
            options: [
                "Python, Java, C++",
                "Lógica difusa/probabilística, classificação/aprendizado/previsão, busca/otimização",
                "Teste, depuração, implantação",
                "Frontend, backend, banco de dados"
            ],
            correct: 1,
            explanation: "Tecnologias de IA para testes caem em três categorias: métodos de lógica difusa e probabilística, classificação/aprendizado/previsão, e busca/otimização."
        },
        {
            question: "Como a IA pode reduzir o tamanho de conjuntos de teste de regressão?",
            options: [
                "Removendo testes aleatoriamente",
                "Em até 50% enquanto ainda detecta a maioria dos defeitos",
                "Removendo todos os testes que falharam",
                "IA não pode reduzir o tamanho do conjunto de teste"
            ],
            correct: 1,
            explanation: "Otimização baseada em IA pode reduzir o tamanho de conjuntos de teste de regressão em até 50% enquanto ainda detecta a maioria dos defeitos."
        },
        {
            question: "Que desafio a IA enfrenta na geração de casos de teste?",
            options: [
                "Gera testes muito devagar",
                "O problema do oráculo de teste - saber resultados esperados sem um modelo de teste",
                "Cria muitos testes",
                "IA não pode gerar testes"
            ],
            correct: 1,
            explanation: "Geração de testes baseada em IA enfrenta o problema do oráculo de teste - determinar resultados esperados sem um modelo de teste legível por máquina ou pseudo-oráculo."
        },
        {
            question: "Como a IA ajuda com teste de GUI através de identificação de objetos?",
            options: [
                "Usando apenas um critério",
                "Ponderando múltiplos critérios de identificação (XPath, label, id, classe, coordenadas) com base na estabilidade histórica",
                "Testando apenas com IDs",
                "IA não pode ajudar com teste de GUI"
            ],
            correct: 1,
            explanation: "IA reduz a fragilidade do teste de GUI usando múltiplos critérios de identificação e ponderando critérios historicamente estáveis mais altos, adaptando-se a mudanças de UI."
        },
        {
            question: "Quando a previsão de defeitos é mais eficaz?",
            options: [
                "Em bases de código inteiramente novas",
                "Com experiência passada similar (mesma base de código, desenvolvedores, organização)",
                "Apenas em projetos pequenos",
                "Previsão nunca é eficaz"
            ],
            correct: 1,
            explanation: "Previsão de defeitos é mais eficaz quando baseada em experiência passada similar com a mesma base de código, desenvolvedores ou organização."
        }
    ]
};
