document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. DADOS EMBUTIDOS (funciona em file://)
  // ==========================================
  // Textos extraídos do PDF "redacoes 3.pdf" + 17ª redação fornecida pelo aluno
  // TEMA 7 não existe no PDF — pulado. As 17 redações estão completas abaixo.

  const MEMORIAS = [
    // ---- PRÉ-ESCOLA ----
    {
      id: 1,
      fase: "pre-escola",
      tipo: "foto",
      ano: "2014",
      titulo: "Pré-escola — o começo de tudo",
      imagem: "assets/img/pre-escola-ursinho.jpg",
      alt: "Eu no prezinho abraçado ao meu ursinho de pelúcia"
    },
    {
      id: 2,
      fase: "pre-escola",
      tipo: "historia",
      ano: "2014",
      titulo: "O ursinho e o primeiro dia",
      historia: `
        <div class="story-header">
          <span class="story-ano">2014</span>
          <span class="story-fase">Pré-escola</span>
        </div>
        <div class="story-corpo">
          <strong>O começo de tudo.</strong> Eu chegava ao colégio agarrado ao meu ursinho de pelúcia, com aquela mochila gigante nas costas. No primeiro dia, chorei na porta e não queria entrar — parecia que o mundo inteiro era muito grande para mim.<br><br>
          Mas aí aconteceu a mágica: a professora me mostrou a rodinha de brincadeiras, conheci o primeiro amigo da minha vida e aquele ursinho parou de ser um escudo e virou um companheiro de aventuras.<br><br>
          <span class="story-destaque">Curiosidade:</span> eu carregava o ursinho para todo lugar, até no banheiro.<br>
          <span class="story-destaque">Desafio superado:</span> ficar longe da mamãe por algumas horas sem chorar.<br>
          <span class="story-destaque">Momento inesquecível:</span> o primeiro abraço de um amigo novo na escola.
        </div>
      `
    },
    // ---- FUNDAMENTAL ----
    {
      id: 3,
      fase: "fundamental",
      tipo: "foto",
      ano: "2015–2023",
      titulo: "Fundamental — cadernos novos e mochila cheia",
      imagem: "assets/img/primeiro-dia-aula.jpg",
      alt: "Eu no primeiro dia de aula do Fundamental, de frente para um carro laranja"
    },
    {
      id: 4,
      fase: "fundamental",
      tipo: "historia",
      ano: "2015–2023",
      titulo: "Do carro laranja à volta às aulas",
      historia: `
        <div class="story-header">
          <span class="story-ano">2015–2023</span>
          <span class="story-fase">Fundamental</span>
        </div>
        <div class="story-corpo">
          <strong>Cadernos novos, mochila cheia e muita correria.</strong> Em 2015, entrei no Fundamental com um uniforme novinho e uma foto inesquecível em frente ao carro laranja da minha família. Foi a fase de aprender a ler de verdade, dividir o lanche no recreio, dançar quadrilha nas festas juninas e descobrir que o mundo ia muito além da sala de aula.<br><br>
          Mas nem tudo foi fácil. Entre 2020 e 2023, as aulas viraram telas de computador, aprendi a estudar sozinho no quarto e senti muita falta do barulho dos amigos no corredor. Quando voltamos para a escola presencial, parecia que todo mundo tinha crescido da noite para o dia.<br><br>
          <span class="story-destaque">Curiosidade:</span> a foto no carro laranja virou minha favorita daquela época.<br>
          <span class="story-destaque">Desafio superado:</strong> aprender a ler e, depois, estudar sozinho durante a pandemia.<br>
          <span class="story-destaque">Momento inesquecível:</span> as festas juninas no colégio e o reencontro com os amigos depois do isolamento.
        </div>
      `
    },
    // ---- ENSINO MÉDIO ----
    {
      id: 5,
      fase: "ensino-medio",
      tipo: "foto",
      ano: "2024–2026",
      titulo: "Ensino Médio — a reta final",
      imagem: "assets/img/festa-junina-2.jpg",
      alt: "Eu de blusa preta segurando uma placa de identificação como foto de prisão numa festa junina da escola"
    },
    {
      id: 6,
      fase: "ensino-medio",
      tipo: "historia",
      ano: "2024–2026",
      titulo: "A reta final",
      historia: `
        <div class="story-header">
          <span class="story-ano">2024–2026</span>
          <span class="story-fase">Ensino Médio</span>
        </div>
        <div class="story-corpo">
          <strong>Provas, redações e o último sinal.</strong> Em 2024, comecei o Ensino Médio e tudo de repente ficou mais sério. Provas maiores, redações toda semana, a pressão do ENEM pairando no ar e aquela pergunta que não saía da cabeça: “e agora, o que você vai fazer da vida?”.<br><br>
          Mas foi também a fase mais intensa da minha vida escolar. Fiz amizades que viraram família, encontrei professores que marcaram para sempre, participei da última festa junina vestido de preso — blusa preta e uma placa com o número, como uma foto de identificação da polícia — e senti, dia após dia, que estava escrevendo o último capítulo de uma história que começou aos 5 anos.<br><br>
          Em 2026, no último sinal, olhei para trás e vi o menino do ursinho, o garoto do carro laranja e o adolescente que aprendeu a escrever. Tudo valeu a pena.<br><br>
          <span class="story-destaque">Curiosidade:</span> a minha “foto de preso” na festa junina: blusa preta e placa com o número, como numa revista policial.<br>
          <span class="story-destaque">Desafio superado:</span> equilibrar redações, provas e a preparação para o ENEM.<br>
          <span class="story-destaque">Momento inesquecível:</span> o último sinal e a certeza de que doze anos de escola valeram cada momento.
        </div>
      `
    }
  ];

    const REDACOES_DATA = [
    {
      id: 1,
      titulo: "Mudanças climáticas e a crise hídrica no Brasil",
      tema: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
      categorias: ["Meio Ambiente", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      texto: "As mudanças climáticas estão transformando de forma profunda o ciclo da água no Brasil, criando um cenário de extremos cada vez mais frequentes. Enquanto o Sul sofre com enchentes devastadoras, o Nordeste e o Sudeste enfrentam secas prolongadas. O geógrafo Milton Santos já alertava sobre a \"globalização perversa\", que penaliza os mais pobres. No contexto ambiental não é diferente: esses eventos climáticos desregulados geram impactos sociais e econômicos profundos, exigindo ações urgentes do poder público e da sociedade.\n\nQuando chove demais, o estrago atinge a base da sociedade. As chuvas intensas provocam deslizamentos, deixam famílias inteiras desabrigadas e, em casos mais graves, tiram vidas, como aconteceu tragicamente no Rio Grande do Sul. A infraestrutura das cidades não aguenta a pressão. Falta água potável, surgem epidemias e os prejuízos econômicos se acumulam. Reconstruir tudo isso exige investimentos públicos enormes, que muitas vezes não estão previstos nos orçamentos municipais, deixando as cidades à deriva.\n\nDo outro lado, a seca prolongada atinge diretamente a agricultura e o abastecimento de água. Com menos chuva, a produção de alimentos cai, os preços sobem e a inflação aperta o bolso de todo mundo. A irregularidade no abastecimento ainda aumenta as desigualdades regionais. Conforme aponta o IBGE, são as comunidades mais vulneráveis, especialmente no interior do Nordeste, que mais sofrem com a falta de água para as necessidades básicas. O escritor Euclides da Cunha, em \"Os Sertões\", já denunciava o abandono do povo nordestino; infelizmente, a realidade pouco mudou.\n\nDiante desse cenário, o poder público precisa agir com urgência. O Governo Federal, em parceria com a Agência Nacional de Águas (ANA), deve implementar políticas de gestão hídrica eficazes, como a construção de reservatórios estratégicos e a criação de sistemas de alerta para eventos extremos. Além disso, é fundamental incentivar o reúso da água e investir em educação ambiental nas escolas. Só assim o Brasil poderá reduzir os danos e garantir segurança hídrica para toda a população."
    },
    {
      id: 2,
      titulo: "Canetas emagrecedoras e a pressão estética",
      tema: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
      categorias: ["Sociedade", "Tecnologia"],
      imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      texto: "Nos últimos anos, a busca pelo corpo perfeito ganhou uma força enorme nas redes sociais, e as canetas emagrecedoras se tornaram quase uma febre entre quem quer perder peso de forma rápida. O problema é que a automedicação e o uso exagerado desses remédios, muitas vezes sem nenhum acompanhamento médico, podem trazer riscos sérios para a saúde. Por trás disso tudo, estão a pressão estética e uma certa trivialização da medicina que merecem muita atenção.\n\nA pressão social por padrões de magreza extrema tem um papel central nessa história. Um ideal de beleza praticamente inatingível, ditado por influenciadoras digitais e pela indústria da moda, é o que a sociedade contemporânea mais valoriza. A filósofa Simone de Beauvoir dizia que não se nasce mulher, torna-se mulher, e hoje esse tornar-se está intimamente ligado a um padrão físico específico. Isso empurra muitas pessoas a buscar soluções rápidas, mesmo que isso signifique colocar a saúde em risco em troca de aceitação social.\n\nAs consequências desse comportamento são extremamente preocupantes. Usar essas canetas sem orientação médica pode causar desde náuseas e pancreatite até distúrbios alimentares mais graves. A médica Fernanda Macuco já alertou que essas drogas não são inofensivas e exigem acompanhamento médico rigoroso. Mas a busca por resultados imediatos faz muita gente se automedicar, esquecendo que a saúde deveria vir sempre em primeiro lugar, muito antes da estética.\n\nPara enfrentar esse problema, o Ministério da Saúde precisa investir em campanhas que mostrem de forma clara os riscos do uso sem controle dessas canetas, além de fiscalizar a venda desses produtos com mais rigor. As escolas também têm um papel importante ao promover conversas sobre aceitação corporal e sobre a diversidade de corpos que existem na realidade. Assim, a sociedade pode começar a se livrar desses padrões prejudiciais e voltar a valorizar o que realmente importa, que é a saúde."
    },
    {
      id: 3,
      titulo: "Deepfakes e desinformação na era da IA",
      tema: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
      categorias: ["Tecnologia", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      texto: "A tecnologia avançou a passos largos e trouxe inúmeros benefícios, mas, como tudo na vida, também tem seu lado negativo. Um dos problemas mais graves da atualidade é a desinformação gerada pela Inteligência Artificial. Os chamados deepfakes, que nada mais são do que vídeos e áudios falsos fabricados para enganar, ameaçam a confiança nas informações e a segurança de todos nós. Discutir os limites éticos dessa ferramenta deixou de ser um debate do futuro para se tornar uma urgência do presente.\n\nÉ assustador perceber como a proliferação de conteúdo falso está gerando uma crise de confiança na sociedade. O filósofo Jean Baudrillard já falava sobre isso: vivemos num mundo de \"simulacros\", onde a cópia acaba substituindo o original. Com os deepfakes, criminosos podem manipular a imagem de políticos ou celebridades para espalhar mentiras, bagunçar eleições e causar pânico na população. É uma forma silenciosa, mas muito eficaz, de enfraquecer a nossa democracia.\n\nE os danos não param por aí. A privacidade e a honra das pessoas ficam totalmente expostas. Qualquer um de nós pode ter a imagem associada a um crime ou a uma situação vergonhosa sem ter feito absolutamente nada. O caso da atriz Scarlett Johansson, que teve sua imagem usada em vídeos falsos gerados por IA, é só a ponta do iceberg. Isso mostra que qualquer cidadão comum pode se tornar vítima de ataques virtuais e sofrer consequências psicológicas terríveis. É uma exposição involuntária que destrói reputações.\n\nPara resolver essa bagunça, o Estado e as plataformas digitais precisam unir forças. O Poder Legislativo tem o dever de criar leis mais rígidas, que obriguem a identificação clara de tudo o que é gerado por Inteligência Artificial nas redes sociais, além de punir com severidade quem desrespeitar as regras. As empresas de tecnologia, por sua vez, precisam investir pesado em algoritmos que detectem e removam esses vídeos rapidamente, além de facilitar os canais de denúncia. Só assim vamos conseguir proteger a verdade e a dignidade das pessoas no ambiente digital."
    },
    {
      id: 4,
      titulo: "Bets e o endividamento dos jovens",
      tema: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
      categorias: ["Tecnologia", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
      texto: "O avanço da tecnologia trouxe novas formas de entretenimento, e as plataformas de apostas online, as famosas bets, conquistaram rapidamente uma popularidade enorme no Brasil. Mas o que parecia apenas diversão se transformou num problema socioeconômico sério, especialmente entre os jovens. Atraídos por promessas de dinheiro fácil, muitos acabam endividados e sem saída. É preciso falar abertamente sobre os impactos reais das apostas na vida dessa geração.\n\nAs bets utilizam estratégias psicológicas cuidadosamente pensadas para viciar os usuários. O psiquiatra Augusto Cury explica que o cérebro humano é naturalmente atraído por recompensas rápidas, e as apostas entregam exatamente isso, que é a ilusão de ganhar dinheiro fácil. Influenciadores digitais bombardeiam os jovens com propaganda enganosa, prometendo riqueza e liberdade financeira. Na prática, a maioria dos apostadores perde dinheiro, e isso cria um ciclo de dependência que prejudica tanto a saúde mental quanto a estabilidade financeira.\n\nO endividamento não afeta só o jovem, ele se espalha pela família inteira. Muitos apostam o salário inteiro ou chegam a pedir empréstimos para continuar jogando. O resultado são brigas em casa, ansiedade, depressão e um clima de tensão constante. O economista Muhammad Yunus, vencedor do Nobel da Paz, defende que o crédito deve ser usado de forma consciente e libertadora, nunca como armadilha. As bets fazem exatamente o oposto, pois prendem financeiramente os jovens e impedem que construam um futuro estável.\n\nMedidas urgentes são necessárias para frear esse avanço. O Governo Federal precisa criar campanhas educativas nas escolas, alertando os jovens sobre os riscos reais das apostas, e regular com mais rigor a propaganda dessas plataformas. As famílias também devem entrar nessa conversa, criando um ambiente de diálogo. Assim, a juventude brasileira terá mais condições de se proteger desse mercado predatório e construir um futuro mais seguro."
    },
    {
      id: 5,
      titulo: "Inclusão digital no Brasil",
      tema: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
      categorias: ["Tecnologia", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
      texto: "Vivemos em um mundo cada vez mais conectado, onde a tecnologia está presente em praticamente tudo: no trabalho, nos estudos, nas compras e até nos relacionamentos. No entanto, no Brasil, nem todos têm acesso a esse universo digital. A inclusão digital, que deveria ser um direito básico, ainda é um desafio enorme para milhões de brasileiros. Enquanto parte da população já vive imersa na era digital, outra parcela significativa sequer tem acesso à internet ou a um computador, o que acaba criando uma desigualdade que vai muito além do mundo virtual.\n\nO principal obstáculo para a inclusão digital no país é a falta de infraestrutura, especialmente nas regiões mais afastadas e periféricas. Muitas escolas públicas não têm computadores em bom estado, e em várias comunidades rurais ou favelas urbanas, o sinal de internet é precário ou inexistente. Além disso, o custo dos equipamentos e dos planos de internet ainda é alto para grande parte da população, que precisa escolher entre pagar contas básicas ou ter acesso à rede. Sem essas condições mínimas, fica impossível acompanhar o ritmo do mundo virtual.\n\nAs consequências dessa exclusão são graves. Sem acesso à internet, o jovem fica prejudicado nos estudos, já que muitas atividades escolares exigem pesquisa e entrega de trabalhos online. O trabalhador perde oportunidades de emprego, pois a maioria das vagas hoje é divulgada pela internet e exige conhecimentos digitais. Até mesmo serviços públicos essenciais, como agendar consultas ou resolver problemas bancários, estão cada vez mais digitais. Quem fica fora desse sistema acaba sendo excluído não só do mundo virtual, mas também da sociedade como um todo, ampliando ainda mais as desigualdades sociais que já existem no país.\n\nPara mudar essa realidade, é preciso que o governo e a sociedade atuem juntos. Uma proposta eficaz seria a criação de um programa nacional de universalização da internet, com investimento em fibra ótica e antenas para alcançar áreas remotas. Além disso, seria importante oferecer computadores e cursos de informática gratuitos para comunidades carentes, principalmente em escolas públicas. Parcerias com empresas privadas também poderiam ajudar a reduzir o custo dos planos de internet. Com essas medidas, o Brasil daria um grande passo para garantir que todos tenham as mesmas oportunidades e que a tecnologia seja, de fato, uma ferramenta de inclusão e não de exclusão."
    },
    {
      id: 6,
      titulo: "Cultura fitness e transtornos corporais",
      tema: "Cultura fitness: bem-estar ou busca por estética inatingível?",
      categorias: ["Sociedade"],
      imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      texto: "A chamada cultura fitness ganhou uma força enorme nas redes sociais, prometendo saúde e bem-estar para quem aderisse. Só que o que deveria ser uma busca genuína por qualidade de vida virou, em muitos casos, uma obsessão por um padrão de beleza praticamente inatingível. Vale a pena refletir sobre os riscos que essa pressão estética traz para a saúde mental e física das pessoas.\n\nA busca desenfreada pelo corpo perfeito gera transtornos psicológicos que não podem ser subestimados. O filósofo Michel Foucault já discutia como a sociedade exerce controle sobre os corpos, e hoje esse controle chega principalmente pelos algoritmos. Nas redes, corpos esculturais são vendidos como sinônimo de sucesso e felicidade, o que leva muitos jovens a desenvolver ansiedade, bulimia e anorexia. A busca por aprovação nas fotos acaba se tornando mais importante do que a própria saúde.\n\nA mercantilização da saúde é outro problema grave. A indústria vende suplementos milagrosos e dietas restritivas, sempre prometendo resultados rápidos. O médico Drauzio Varella, no entanto, alerta que a saúde de verdade é fruto de hábitos equilibrados, e não de fórmulas mágicas. A pressão para consumir esses produtos afeta não só o corpo, com lesões e distúrbios alimentares, mas também o bolso das famílias, que gastam fortunas em soluções que muitas vezes não funcionam.\n\nÉ essencial que o Ministério da Saúde, em parceria com escolas e profissionais de educação física, promova campanhas de conscientização sobre a diversidade corporal e sobre a importância do exercício físico pelo prazer e pela saúde, e não apenas pela aparência. As redes sociais também precisam ser pressionadas a reduzir a divulgação de padrões inalcançáveis. Só assim será possível promover um estilo de vida mais saudável e, acima de tudo, mais feliz."
    },
    {
      id: 7,
      titulo: "Direitos indígenas e demarcação de terras",
      tema: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
      categorias: ["Sociedade", "Meio Ambiente"],
      imagem: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80",
      texto: "A Constituição de 1988 garantiu aos indígenas o direito à terra e à sua cultura, mas, passados mais de trinta anos, a gente percebe que a prática está muito longe do papel. A briga por terras, a falta de demarcação e o desrespeito à cultura dos povos originários continuam aí, escancarados. Garantir a cidadania indígena de verdade é uma luta urgente, que não pode mais esperar.\n\nO conflito por terras é, sem dúvida, o coração do problema. O agronegócio e o garimpo ilegal avançam sobre os territórios indígenas, deixando um rastro de violência e destruição. O líder Ailton Krenak vive alertando que precisamos ouvir a voz da floresta, mas, na prática, o que a gente vê é a ganância econômica esmagando a vida desses povos. O resultado são mortes e famílias inteiras expulsas de suas terras ancestrais, como se a história não tivesse ensinado nada.\n\nA cultura indígena, por sua vez, também sofre com o preconceito. A falta de representatividade na mídia faz com que os povos originários sejam vistos de forma estereotipada e reduzida. O educador Paulo Freire já defendia uma educação que valorizasse a cultura local, e a Lei 11.645/08 tornou obrigatório o ensino da história afro-brasileira e indígena nas escolas. O problema é que, na prática, essa lei quase nunca é aplicada como deveria, o que acaba jogando o preconceito de geração em geração.\n\nPara tentar virar esse jogo, o Governo Federal precisa agilizar a demarcação das terras e garantir a segurança dessas áreas, combatendo o garimpo ilegal com firmeza. O Ministério da Educação, por sua vez, tem o dever de capacitar os professores para que a Lei 11.645/08 funcione de verdade nas salas de aula, promovendo o respeito à diversidade desde cedo. Só assim os povos originários vão ter seus direitos respeitados de verdade."
    },
    {
      id: 8,
      titulo: "Algoritmos, bolhas e autonomia individual",
      tema: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
      categorias: ["Tecnologia", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      texto: "Vivemos numa era em que a internet e as redes sociais atuam como mediadoras das nossas relações e do nosso consumo. Os algoritmos escolhem o que vemos online e, aos poucos, moldam os modos de vida da sociedade contemporânea, influenciando desde as roupas que vestimos até as opiniões que formamos. Essa influência traz desafios reais para a autonomia individual e para a diversidade cultural.\n\nOs algoritmos criam bolhas que reduzem drasticamente a variedade de informações a que temos acesso. O sociólogo Zygmunt Bauman alertava sobre a fragilidade das relações na modernidade líquida, e hoje as redes sociais mostram apenas o que o usuário quer ver, criando uma falsa sensação de realidade. As pessoas passam a consumir apenas produtos e ideias alinhadas ao seu gosto, o que impede o contato com o diferente e torna a sociedade cada vez mais polarizada.\n\nA busca por padrões impostos pela mídia também afeta a cultura e a identidade. O filósofo Guy Debord, em sua obra A Sociedade do Espetáculo, afirmava que o consumo virou o centro da vida social. Hoje, influencers digitais ditam tendências de consumo que são seguidas em massa, muitas vezes sem nenhum questionamento. Isso homogeneíza a cultura e faz com que as pessoas comprem e ajam não por necessidade ou convicção, mas para se sentirem aceitas socialmente.\n\nÉ fundamental que a sociedade desenvolva um olhar mais crítico sobre o que consome na internet. O Ministério da Educação deve promover o letramento digital nas escolas, ensinando os alunos a identificar como os algoritmos funcionam e a questionar as informações que recebem. As plataformas digitais, por sua vez, devem oferecer opções de configuração que ampliem a diversidade de conteúdo. Assim, a tecnologia poderá enriquecer a cultura e não padronizar as vidas."
    },
    {
      id: 9,
      titulo: "Preservação do patrimônio histórico",
      tema: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
      categorias: ["Sociedade", "Cultura"],
      imagem: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      texto: "A Constituição Federal de 1988, em seu Artigo 216, estabelece que o patrimônio cultural brasileiro deve ser protegido pelo poder público e pela comunidade. Contudo, na contemporaneidade, a preservação dos monumentos históricos enfrenta sérios desafios, seja pela crônica negligência do Estado, seja pela desconexão da sociedade com sua própria memória. Esses fatores colocam em risco a identidade cultural do país e a transmissão de sua história.\n\nEm primeiro lugar, a omissão do poder público configura um grave obstáculo. O incêndio que destruiu o Museu Nacional, em 2018, no Rio de Janeiro, é um exemplo emblemático dessa negligência. Apesar de abrigar um acervo de mais de 20 milhões de itens, incluindo o fóssil de Luzia, a instituição sofria com a falta crônica de recursos e a deterioração de sua estrutura. A tragédia, que poderia ter sido evitada com investimentos básicos em segurança e manutenção, resultou na perda irreparável de parte da história e da memória científica do Brasil, evidenciando o descaso com o patrimônio.\n\nAdemais, a desvalorização social agrava esse cenário. Conforme o sociólogo Zygmunt Bauman, vivemos em uma \"modernidade líquida\", na qual as relações e os valores são efêmeros e o passado perde relevância diante do imediatismo. Essa mentalidade reflete-se na pouca importância dada aos monumentos históricos pela população, que muitas vezes não se reconhece neles. A ausência de uma educação patrimonial eficaz nas escolas e comunidades contribui para que esses espaços sejam vistos como obsoletos, e não como parte fundamental da identidade coletiva.\n\nPortanto, superar os desafios da preservação do patrimônio histórico no Brasil exige uma ação conjunta. É imperativo que o Ministério da Cultura, em parceria com o Ministério da Educação, implemente um Programa Nacional de Educação e Preservação Patrimonial. Esse programa deve atuar em duas frentes: a primeira, por meio da destinação de verbas específicas e fiscalização rigorosa para a manutenção de museus e sítios históricos, evitando tragédias como a do Museu Nacional; a segunda, pela inclusão de conteúdos práticos sobre patrimônio cultural na grade curricular das escolas. Dessa forma, será possível construir uma sociedade que valorize e proteja suas raízes, garantindo a transmissão da memória para as futuras gerações."
    },
    {
      id: 10,
      titulo: "Exploração espacial e desigualdade",
      tema: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
      categorias: ["Tecnologia", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      texto: "A exploração espacial no século XXI está a todo vapor. Empresas privadas e agências do governo investem fortunas em missões para Marte e além. É um avanço impressionante, sem dúvida, mas que nos coloca diante de um dilema ético e muito complicado: como equilibrar todo esse progresso científico com a responsabilidade de resolver os problemas urgentes aqui na Terra? A gente precisa parar e se perguntar: vale a pena gastar bilhões de dólares no espaço enquanto milhões de pessoas ainda passam fome, não têm água potável e não conseguem atendimento médico?\n\nClaro que a exploração espacial trouxe benefícios reais. A corrida espacial gerou invenções que usamos no dia a dia, como os satélites, o GPS e exames médicos mais avançados. O físico Stephen Hawking defendia que precisamos ir para o espaço para garantir a sobrevivência da humanidade no futuro. O problema não é querer avançar, mas sim a falta de equilíbrio. Enquanto bilhões são gastos em foguetes e bases em Marte, milhões de pessoas aqui embaixo continuam sem comer todos os dias, sem saneamento básico e sem uma vida minimamente digna.\n\nE tem outro agravante: a exploração espacial está cada vez mais virando um negócio. O filósofo Milton Santos já falava sobre a \"globalização perversa\", esse modelo que coloca o capital acima das pessoas. Hoje, vemos bilionários gastando fortunas em viagens turísticas ao espaço enquanto os problemas sociais só aumentam por aqui. Essa desigualdade é injusta e, mais do que isso, fere os direitos humanos. O mesmo dinheiro que poderia construir escolas, hospitais e redes de esgoto está sendo usado para financiar projetos que só beneficiam uma minoria riquíssima.\n\nPara resolver isso, precisamos de uma governança global muito mais forte. A ONU, junto com os países membros, precisa criar um tratado internacional que coloque limites éticos na exploração espacial. Esse tratado deve obrigar que uma parte dos lucros e investimentos do setor espacial seja revertida para programas sociais aqui na Terra, como erradicação da fome, educação e saneamento. Olhar para as estrelas não pode ser uma forma de fugir dos nossos problemas. O futuro não se constrói apenas lá em cima; ele precisa começar aqui, no chão da nossa própria casa."
    },
    {
      id: 11,
      titulo: "Conservação da fauna brasileira",
      tema: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
      categorias: ["Meio Ambiente"],
      imagem: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
      texto: "O Brasil é conhecido no mundo inteiro pela sua biodiversidade gigantesca, com milhares de espécies vivendo por aqui. Mas toda essa riqueza está sob ameaça. O desmatamento, a caça ilegal e as mudanças climáticas estão empurrando vários animais para a extinção. E o pior é que isso não é só um problema deles: é um risco para o equilíbrio ecológico do país. Discutir a conservação da fauna brasileira é urgente, porque o tempo está correndo contra nós.\n\nA destruição dos habitats é, com certeza, a maior ameaça. O desmatamento para abrir espaço para a agricultura e a pecuária está encurralando os animais. Bichos como a onça-pintada e o mico-leão-dourado simplesmente não têm mais para onde ir. O biólogo E. O. Wilson, que criou o termo \"biodiversidade\", já avisava que a perda de espécies é um perigo para a própria humanidade. Quando o animal perde seu lar, ele não consegue se alimentar nem se reproduzir. Aos poucos, ele desaparece, e toda a cadeia alimentar sai do prumo.\n\nSomado a isso, a caça ilegal e o tráfico de animais silvestres pioram tudo. Muitos bichos são capturados para vender como pet ou para tradições que usam partes do corpo deles. O filósofo Peter Singer, no livro \"Libertação Animal\", defende que todos os seres que sentem dor merecem respeito. O tráfico é cruel e letal: quando uma espécie é retirada da natureza em grande quantidade, ela pode simplesmente sumir. A extinção não é algo distante, está acontecendo agora, aqui no Brasil.\n\nPara mudar esse cenário, o IBAMA, junto com a Polícia Federal, precisa apertar a fiscalização e garantir que as punições por tráfico e desmatamento ilegal realmente aconteçam. De nada adianta ter lei se ela não é cumprida. Além disso, o Ministério do Meio Ambiente deve criar mais unidades de conservação para dar um lar seguro a esses bichos. E a educação ambiental é o passo essencial: as escolas precisam ensinar as crianças a valorizar a natureza desde cedo. Afinal, o Brasil tem um dos maiores tesouros naturais do planeta nas mãos. Proteger a nossa fauna não é só uma questão ambiental, é um dever de todos nós."
    },
    {
      id: 12,
      titulo: "Migração e acolhimento de refugiados",
      tema: "Migração e acolhimento: desafios da convivência em contextos globais",
      categorias: ["Sociedade"],
      imagem: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
      texto: "A Declaração Universal dos Direitos Humanos garante que todo mundo tem o direito de ir e vir e de buscar asilo em outros países. Só que, na prática, a migração e o acolhimento de refugiados enfrentam uma barra pesada: a falta de políticas públicas que funcionem e uma xenofobia que só cresce. É preciso parar para pensar em como garantir a dignidade humana nesse meio de tanta dificuldade.\n\nA omissão do poder público é um dos piores obstáculos. A filósofa Hannah Arendt já dizia que quem perde a cidadania perde a própria humanidade, e isso se aplica perfeitamente ao que acontece hoje. No Brasil, a crise migratória venezuelana é o exemplo mais claro: houve um acolhimento no começo, mas a falta de políticas de moradia, emprego e regularização de documentos mantém milhares de imigrantes numa situação de vulnerabilidade. Eles não têm condições reais de reconstruir a vida e nem de contribuir com o país.\n\nE o preconceito piora ainda mais esse cenário. O geógrafo Milton Santos já falava sobre a \"globalização perversa\", em que as pessoas são barradas por muros físicos e invisíveis. Muitos imigrantes são vistos como uma ameaça ao mercado de trabalho ou, de forma injusta, associados à criminalidade. Falta uma educação multicultural que mostre a realidade, pois essa visão distorcida impede uma convivência pacífica e a troca de culturas, que só teria a enriquecer a sociedade brasileira.\n\nPara resolver isso, não tem jeito: tem que ser uma ação conjunta. O Ministério dos Direitos Humanos, em parceria com ONGs, precisa colocar em prática um Programa Nacional de Integração, oferecendo assistência jurídica para a papelada e cursos de qualificação profissional. O Ministério da Educação, por sua vez, tem que incluir debates sobre diversidade cultural e direitos humanos nas escolas. Assim, o Brasil pode ser, de verdade, um exemplo de acolhimento e respeito."
    },
    {
      id: 13,
      titulo: "Eventos climáticos extremos",
      tema: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
      categorias: ["Meio Ambiente", "Sociedade"],
      imagem: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
      texto: "O Brasil tem enfrentado eventos climáticos extremos com uma frequência cada vez maior. As secas no Nordeste e as enchentes no Sul estão mais constantes, e o El Niño só agrava a situação. Isso mostra que a sociedade e o poder público não estão preparados para lidar com as mudanças climáticas, e isso só piora os problemas sociais e econômicos. É preciso conversar seriamente sobre como preparar o Brasil para esses desafios.\n\nA falta de planejamento urbano é um problema grave e histórico. O arquiteto e urbanista Jaime Lerner dizia que a cidade é o reflexo da alma de seus habitantes. No Brasil, a urbanização rápida e irregular empurrou milhões de pessoas para áreas perigosas, como encostas e margens de rios. Quando as chuvas fortes chegam, a falta de drenagem e a ocupação irregular provocam tragédias, com perdas de vidas e de casas que poderiam ter sido evitadas com um planejamento sério.\n\nA desigualdade social coloca os mais vulneráveis na linha de frente. O escritor Euclides da Cunha, em Os Sertões, já denunciava o abandono do povo brasileiro diante das forças da natureza. Hoje a realidade quase não mudou. As populações pobres são as que mais sofrem com a seca e as enchentes. A falta de políticas de adaptação climática e de infraestrutura para essas comunidades aumenta o sofrimento e a exclusão social de forma cruel.\n\nMedidas urgentes são necessárias para proteger a população. O Ministério das Cidades, junto com as prefeituras, deve priorizar a reurbanização de áreas de risco e investir em infraestrutura de drenagem eficiente. As escolas também devem incluir a educação climática no currículo, ensinando os alunos a reconhecer riscos e a agir com segurança. Assim, o Brasil estará mais preparado para enfrentar os eventos extremos que já fazem parte da nossa realidade."
    },
    {
      id: 14,
      titulo: "Caminhos para combater a intolerância religiosa",
      tema: "Caminhos para combater a intolerância religiosa no Brasil",
      categorias: ["Sociedade", "ENEM"],
      imagem: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80",
      texto: "A intolerância religiosa não é novidade por aqui. Desde a colonização, quando os portugueses forçaram o catolicismo aos indígenas e africanos, essa falta de respeito com as crenças dos outros vem causando brigas e violência. Hoje, mesmo com a Constituição dizendo que todos são livres para ter sua fé, os ataques não param, principalmente contra as religiões de matriz africana. Temos que achar um jeito de mudar isso.\n\nA raiz desse problema está na herança da colonização e na pura falta de informação. O sociólogo Gilberto Freyre, em \"Casa-Grande & Senzala\", mostrou como a imposição cultural moldou a nossa sociedade, colocando o catolicismo como se fosse superior. Além disso, muita gente julga o que não conhece, e é esse desconhecimento que alimenta o preconceito e acaba gerando ataques a terreiros e discriminação contra os fiéis.\n\nE a impunidade e a falta de educação só pioram esse cenário. A filósofa Djamila Ribeiro vive reforçando a importância de debater o respeito à diversidade para combater as desigualdades. Se os crimes de intolerância não são punidos com o rigor que deveriam, os agressores se sentem no direito de continuar. E dentro das escolas, a ausência de um ensino religioso laico e plural também pesa, porque não ensina os alunos a conviver com quem é diferente.\n\nPara combater esse problema, o Ministério da Educação precisa promover um ensino religioso que valorize a diversidade e o respeito, em vez de ficar doutrinando. E o poder público tem que criar campanhas de conscientização e garantir que os crimes de intolerância sejam punidos de forma exemplar. Só assim o Brasil vai conseguir construir uma sociedade que seja, de verdade, laica, pacífica e respeitosa com todas as crenças."
    },
    {
      id: 15,
      titulo: "Agro forte, futuro sustentável",
      tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
      categorias: ["Agro", "Meio Ambiente"],
      imagem: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      texto: "O agronegócio é, sem dúvida, um dos maiores motores da economia do Brasil. É dele que sai boa parte das nossas exportações e é ele que emprega muita gente por aí. Só que esse crescimento acelerado tem um preço, e o meio ambiente está sentindo na pele. O desmatamento é a prova disso. A grande questão que fica é: como continuar produzindo em alta escala sem acabar com a natureza que ainda nos resta?\n\nO primeiro passo é encarar as práticas agrícolas predatórias de frente. O avanço da fronteira agrícola sobre a Amazônia e o Cerrado, muitas vezes de forma ilegal, está acabando com a biodiversidade dessas regiões. O filósofo Hans Jonas, em seu livro \"O Princípio da Responsabilidade\", já dizia que a gente não pode agir pensando só no agora, porque as consequências das nossas ações vão bater na porta das gerações futuras. Produzir destruindo tudo é uma irresponsabilidade com o amanhã.\n\nPor outro lado, existe um caminho possível, e a tecnologia tem ajudado muito nisso. Práticas como o plantio direto na palha e a Integração Lavoura-Pecuária-Floresta (ILPF) mostram que dá para aumentar a produtividade sem precisar derrubar mais nada. A ex-ministra Marina Silva sempre defendeu que é possível produzir e preservar ao mesmo tempo. O uso de bioinsumos e a recuperação de pastagens degradadas são a prova viva de que o agronegócio pode ser sustentável, lucrativo e, acima de tudo, consciente.\n\nPara que isso funcione de verdade, o Ministério da Agricultura precisa fazer a sua parte, oferecendo linhas de crédito com juros mais baixos para quem adotar práticas sustentáveis. E o IBAMA tem que apertar a fiscalização, aplicando multas pesadas em quem insiste no desmatamento ilegal. Se o Brasil quiser ser uma potência agrícola respeitada, ele precisa entender de uma vez por todas que a natureza não é um obstáculo, mas sim a base de tudo."
    },
    {
      id: 16,
      titulo: "O respeito às diferenças como caminho para a superação dos conflitos sociais",
      tema: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
      categorias: ["Sociedade", "ENEM"],
      imagem: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      texto: "A internet, que era para ser um espaço de troca e conhecimento, virou palco de ódio e intolerância. Com o anonimato das redes sociais, muita gente se sente no direito de atacar, humilhar e excluir os outros só porque pensam ou vivem de forma diferente. Nesse cenário, o respeito às diferenças deixou de ser uma questão de \"educação\" e virou uma necessidade urgente para conseguir frear os conflitos sociais que só crescem.\n\nO ambiente digital é o exemplo mais claro disso. O cyberbullying e os ataques a minorias acontecem todos os dias. O sociólogo Zygmunt Bauman falava que vivemos em uma \"modernidade líquida\", onde as relações são frágeis e as pessoas são descartáveis. É exatamente isso que a gente vê: pessoas sendo humilhadas por causa da cor, da religião, da orientação sexual ou simplesmente por terem uma opinião diferente. Esses ataques deixam marcas psicológicas profundas nas vítimas.\n\nE o preconceito estrutural, que já vem de longe, só piora tudo. A filósofa Djamila Ribeiro reforça que precisamos falar do \"lugar de fala\" para entender as desigualdades. Na prática, o diferente ainda é tratado como inferior, e isso perpetua a violência e a exclusão. Nas escolas, por exemplo, o silêncio sobre a diversidade é ensurdecedor. Sem debates sobre o assunto, os alunos crescem sem aprender a conviver com o outro, e o ciclo de intolerância continua.\n\nPara mudar esse cenário, o Ministério da Educação precisa agir de forma prática, incluindo nas escolas um programa nacional de educação voltado para o respeito e a empatia no ambiente virtual. Além disso, as plataformas digitais precisam criar canais de denúncia que funcionem de verdade, sem burocracia. Só com atitudes concretas vamos conseguir construir uma sociedade mais justa, pacífica e respeitosa."
    },
    {
      id: 17,
      titulo: "Obsolescência programada e o descarte de lixo eletrônico",
      tema: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
      categorias: ["Meio Ambiente", "Tecnologia", "ENEM"],
      imagem: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      texto: "A Revolução Industrial, que começou no século XVIII, alterou a maneira como a sociedade adquire produtos. Hoje em dia, esse consumo é estimulado pela chamada \"obsolescência programada\", que é quando os aparelhos eletrônicos são feitos para durarem pouco tempo. Assim, o descarte de aparelhos eletrônicos se transformou em um enorme desafio. Esse panorama no Brasil traz desafios para a sustentabilidade, tanto pela falta de conscientização da população quanto pela ausência de políticas públicas eficazes.\n\nEm primeiro lugar, vale ressaltar que o consumismo desenfreado é um dos principais responsáveis por essa situação. Segundo o sociólogo Zygmunt Bauman, em sua obra \"Modernidade Líquida\", as relações e os objetos na sociedade atual são descartáveis e passageiros. Isso se torna um problema ainda maior, uma vez que a computação é rapidamente substituída por novos modelos, mesmo quando ainda estão operacionais. Como resultado, uma grande quantidade de resíduos eletrônicos é produzida, muitas vezes carregando metais pesados que contaminam o solo e a água, causando danos ao meio ambiente.\n\nAlém disso, a ausência de uma destinação correta para esses materiais agrava a situação. Um grande número de pessoas não tem ideia de onde descartar seus aparelhos antigos, resultando em seu descarte no lixo convencional. Para agravar a situação, o documentário \"Lixo Extraordinário\" (2010) mostra a realidade de catadores em lixões, que lidam com materiais perigosos sem qualquer proteção. No contexto da eletrônica, isso se torna um problema sério, uma vez que a exposição a substâncias tóxicas presentes nesses dispositivos pode prejudicar gravemente a saúde dos trabalhadores e da população local, além de poluir o meio ambiente.\n\nAssim, é preciso agir para que o dano da obsolescência tecnológica seja minimizado. O Governo Federal, através do Ministério do Meio Ambiente, deve implementar e veicular campanhas de conscientização nas redes sociais e na TV, informando a população sobre onde realizar o descarte correto de eletrônicos (em ecopontos, por exemplo). As escolas também precisam organizar palestras e oficinas sobre consumo sustentável e reciclagem. Com isso, a sociedade brasileira será capaz de avançar rumo a um futuro mais sustentável e harmonioso."
    },
  ];

  // ==========================================
  // 1. LENIS SMOOTH SCROLL + GSAP
  // ==========================================
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  // ==========================================
  // 2. TEMA (claro / escuro / sépia)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const themes = ['light', 'dark', 'sepia'];
  const themeIcons = { light: '🌙', dark: '☀️', sepia: '📜' };

  let currentThemeIndex = themes.indexOf(htmlElement.getAttribute('data-theme')) || 0;

  const updateIcon = () => {
    themeToggle.textContent = themeIcons[htmlElement.getAttribute('data-theme')] || '🌙';
  };
  updateIcon();

  themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon();
  });

  // ==========================================
  // 4. HERO ANIMATION & TILT (com throttle)
  // ==========================================
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroSection = document.getElementById('hero');

  const text = heroTitle.textContent;
  heroTitle.innerHTML = '';
  const words = text.split(' ');
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.overflow = 'hidden';
    wordSpan.style.marginRight = '0.2em';
    [...word].forEach(char => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char';
      charSpan.textContent = char;
      wordSpan.appendChild(charSpan);
    });
    heroTitle.appendChild(wordSpan);
    if (index < words.length - 1) {
      heroTitle.appendChild(document.createTextNode('\u00A0'));
    }
  });

  gsap.to('.char', { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power4.out', delay: 0.5 });
  gsap.to(heroSubtitle, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.5 });

  let ticking = false;
  heroSection.addEventListener('mousemove', (e) => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      gsap.to(heroTitle, {
        rotateY: x * 3,
        rotateX: -y * 3,
        x: x * 15,
        y: y * 10,
        duration: 0.8,
        ease: 'power2.out'
      });
      ticking = false;
    });
    ticking = true;
  });

  // ==========================================
  // 5. SCROLL REVEAL
  // ==========================================
  gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
    );
  });

  // ==========================================
  // 6. PRELOADER
  // ==========================================
  const loader = document.getElementById('page-loader');
  const loaderBar = document.querySelector('.loader-bar');
  const loaderPct = document.getElementById('loader-pct');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    loaderBar.style.width = `${progress}%`;
    loaderPct.textContent = `${Math.floor(progress)}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 400);
    }
  }, 100);

  // ==========================================
  // 7. PORTFÓLIO (RENDER, FILTER, SORT)
  // ==========================================
  let redacoesData = [...REDACOES_DATA];
  const gridContainer = document.getElementById('redacoes-grid');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.tag-btn');
  const sortSelect = document.getElementById('sort-select');
  const searchHint = document.getElementById('search-hint');

  let activeFilter = 'all';
  let activeSearch = '';
  let activeSort = 'default';

  // Escape de regex para busca segura
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Escape de HTML para evitar injeção
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function applyFilters() {
    // mata só os triggers dos cards (não todos do site)
    gsap.utils.toArray('.redacao-card').forEach(card => {
      const triggers = ScrollTrigger.getAll().filter(t => t.trigger === card);
      triggers.forEach(t => t.kill());
    });

    let resultado = redacoesData.filter(r => {
      const matchFilter = activeFilter === 'all' || r.categorias.includes(activeFilter);
      const matchSearch = activeSearch === '' ||
        r.titulo.toLowerCase().includes(activeSearch) ||
        r.tema.toLowerCase().includes(activeSearch);
      return matchFilter && matchSearch;
    });

    if (activeSort === 'titulo') {
      resultado = [...resultado].sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (activeSort === 'tempo') {
      resultado = [...resultado].sort((a, b) => {
        const wa = (a.texto || '').split(/\s+/).length;
        const wb = (b.texto || '').split(/\s+/).length;
        return Math.ceil(wa / 200) - Math.ceil(wb / 200);
      });
    }

    renderCards(resultado);

    if (activeSearch) {
      searchHint.textContent = `${resultado.length} resultado(s) para "${escapeHtml(activeSearch)}"`;
    } else {
      searchHint.textContent = `${resultado.length} redação(ões)`;
    }
  }

  function renderCards(data) {
    gridContainer.innerHTML = '';
    if (data.length === 0) {
      gridContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-style: italic;">Nenhuma redação encontrada.</p>';
      return;
    }

    data.forEach(redacao => {
      const card = document.createElement('div');
      card.className = 'redacao-card reveal';

      const words = (redacao.texto || '').split(/\s+/).length;
      const readTime = Math.ceil(words / 200);

      let tituloHTML = escapeHtml(redacao.titulo);
      if (activeSearch) {
        const regex = new RegExp(`(${escapeRegExp(activeSearch)})`, 'gi');
        tituloHTML = escapeHtml(redacao.titulo).replace(regex, '<mark>$1</mark>');
      }

      card.innerHTML = `
        <img src="${redacao.imagem}" alt="${escapeHtml(redacao.titulo)}" class="redacao-image" loading="lazy" width="400" height="250">
        <h3 class="redacao-card-title">${tituloHTML}</h3>
        <p class="redacao-card-tema">${escapeHtml(redacao.tema)}</p>
        <div class="redacao-card-meta">
          <span class="redacao-card-tempo">Leitura: ${readTime} min</span>
        </div>
      `;

      card.addEventListener('click', () => openModal(redacao));
      gridContainer.appendChild(card);
    });

    gsap.utils.toArray('.redacao-card').forEach(elem => {
      gsap.fromTo(elem,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: elem, start: 'top 90%' } }
      );
    });
  }

  searchInput.addEventListener('input', (e) => {
    activeSearch = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  sortSelect.addEventListener('change', (e) => {
    activeSort = e.target.value;
    applyFilters();
  });

  // inicial
  applyFilters();
  ScrollTrigger.refresh();

  // ==========================================
  // 8. TIMELINE (memórias escolares)
  // ==========================================
  const timelineTrack = document.getElementById('timeline-track');
  const navYears = document.querySelectorAll('.nav-year');

  function renderTimeline(filterFase = null) {
    timelineTrack.innerHTML = '';
    const filtradas = filterFase
      ? MEMORIAS.filter(m => m.fase === filterFase)
      : MEMORIAS;

    filtradas.forEach((mem) => {
      let card;
      if (mem.tipo === 'historia') {
        card = document.createElement('div');
        card.className = 'timeline-card story-card reveal';
        card.innerHTML = mem.historia;
      } else {
        card = document.createElement('div');
        card.className = 'timeline-card photo-card reveal';
        card.innerHTML = `
          <img src="${mem.imagem}" alt="${escapeHtml(mem.alt || mem.titulo)}" class="photo-card-image" loading="lazy">
        `;
      }
      timelineTrack.appendChild(card);
    });

    gsap.utils.toArray('.timeline-card').forEach(elem => {
      gsap.fromTo(elem,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
      );
    });
  }

  navYears.forEach(btn => {
    btn.addEventListener('click', () => {
      navYears.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(btn.getAttribute('data-fase'));
      lenis.scrollTo('#timeline', { offset: -100 });
    });
  });

  renderTimeline('pre-escola');

  // ==========================================
  // 9. MODAL
  // ==========================================
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalTema = document.getElementById('modal-tema');
  const modalTempo = document.getElementById('modal-tempo');
  const modalText = document.getElementById('modal-text');
  const modalPageIndicator = document.getElementById('modal-page-indicator');

  let currentRedacao = null;

  const focusableElements = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-"])';

  function openModal(redacao) {
    currentRedacao = redacao;

    modalTitle.textContent = redacao.titulo;
    modalTema.textContent = redacao.tema;

    const words = (redacao.texto || '').split(/\s+/).length;
    const readTime = Math.ceil(words / 200);
    modalTempo.textContent = `Leitura: ${readTime} min`;
    modalPageIndicator.textContent = `Redação ${redacao.id} de ${REDACOES_DATA.length}`;
    modalText.textContent = redacao.texto || '(texto não disponível)';

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    lenis.stop();

    setTimeout(() => {
      const focavel = modalOverlay.querySelector(focusableElements);
      if (focavel) focavel.focus();
      else modalClose.focus();
    }, 300);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    lenis.start();
    currentRedacao = null;
  }

  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ==========================================
  // 10. ÂNCORAS SUAVES (Lenis)
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80, duration: 1.2 });
      }
    });
  });

  // ==========================================
  // 11. EASTER EGG: KONAMI CODE (ignora inputs)
  // ==========================================
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    // ignora se o usuário está digitando num campo de texto
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
      konamiIndex = 0;
      return;
    }
    if (e.key === konami[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konami.length) {
        activateModoSaudade();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateModoSaudade() {
    const modo = document.createElement('div');
    modo.id = 'modo-saudade';
    modo.textContent = '📼 MODO SAUDADE ATIVADO';
    Object.assign(modo.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '99999',
      fontFamily: 'monospace',
      fontSize: '2rem',
      background: '#000',
      color: '#0f0',
      padding: '1rem 2rem',
      border: '4px solid #0f0',
      textAlign: 'center',
      boxShadow: '0 0 20px #0f0'
    });
    document.body.appendChild(modo);
    setTimeout(() => {
      modo.style.opacity = '0';
      modo.style.transition = 'opacity 1s';
      setTimeout(() => modo.remove(), 1000);
    }, 3000);
  }

});
