# Feedback do Professor > Entrega 03 > Equipe 09

## Avaliação geral

A equipe cumpriu o requisito quantitativo básico da entrega: foram produzidas três personas para três integrantes, acompanhadas de imagens, mapa de empatia, contexto de uso consolidado e jornada. Há também uma boa preocupação em relacionar os artefatos às hipóteses e às descobertas das entregas anteriores.

Entretanto, a Entrega 03 apresenta um problema conceitual importante: várias hipóteses ainda abertas nas Entregas 01 e 02 foram transformadas em características muito específicas das personas, do ambiente e do fluxo de trabalho, como se já fossem fatos observados em usuários reais. Persona é fictícia, mas não é livremente inventada. Nome, foto e alguns detalhes pessoais podem ser fictícios; objetivos, habilidades, comportamentos, necessidades e contexto devem representar padrões derivados da investigação do usuário.

Além disso, a classificação do elenco precisa ser revista. Há uma persona primária e duas secundárias. Para esta atividade, o esperado é que o conjunto seja majoritariamente composto por personas primárias quando há diferentes perfis que exigem experiências próprias. Curiosamente, o próprio documento descreve P01, P02 e P03 como usuários com objetivos, dispositivos, ambientes e interfaces bastante diferentes. Isso enfraquece a justificativa de tratar P02 e P03 apenas como secundárias.

O mapa de empatia possui o formalismo esperado em sua estrutura, mas parte do conteúdo mistura empatia com decisões de solução já escolhidas. O contexto de uso é detalhado e cobre boas dimensões físicas e sociais, mas contém muitas afirmações específicas ainda não sustentadas. A jornada, por sua vez, está mais próxima de um cenário futuro de uso da solução do que de uma jornada completa do usuário: começa praticamente na entrada no sistema, detalha componentes de interface durante toda a narrativa e termina ainda dentro do processo operacional, sem desenvolver adequadamente o antes e, principalmente, o depois da interação.

O maior risco nesta entrega é a equipe estar usando a persona para confirmar o projeto que já decidiu fazer. O movimento correto é o contrário: a persona deve ajudar a equipe a questionar e decidir o projeto.

## Pontos positivos

- Foram produzidas três personas, correspondendo aos três integrantes da equipe.
- P01, P02 e P03 possuem nome, imagem, papel, objetivos, conhecimento do domínio, experiência tecnológica, necessidades, dores, motivadores, restrições e ambiente.
- Há tentativa explícita de diferenciar os papéis em vez de criar três personas que variam apenas por idade ou dados demográficos.
- A equipe recupera hipóteses das entregas anteriores e procura indicar a origem das decisões.
- O mapa de empatia utiliza as dimensões formais esperadas: o que pensa e sente, o que vê, o que ouve, o que diz e faz, dores e ganhos.
- O contexto de uso não se limita ao espaço físico. Ele procura considerar usuários, tarefas, equipamentos, ambiente físico, ambiente organizacional e governança.
- A jornada possui etapas, objetivos, emoções, dores e oportunidades, o que é melhor do que simplesmente apresentar uma sequência de telas.
- Há preocupação em distinguir necessidades de P01, P02 e P03 conforme o tipo de trabalho realizado.
- Os arquivos visuais estão organizados em `assets/03_personas/` e existem imagens correspondentes às três personas e ao mapa de empatia.

## Correções prioritárias

### 1. A quantidade de personas foi atendida, mas a distribuição entre primárias e secundárias precisa ser revista

A equipe possui três integrantes e três personas, portanto a responsabilidade mínima de uma persona por integrante foi cumprida.

Há, porém, apenas uma persona primária:

- P01 - Gustavo Onofre: primária;
- P02 - Eduardo Resende: secundária;
- P03 - Marcos Oliveira: secundária.

Essa proporção não é a mais adequada para esta atividade, que deve privilegiar personas primárias.

Mais importante que a contagem é a própria descrição produzida pela equipe. P02 exige um fluxo administrativo próprio, com dossiê, histórico, decisão formal e assinatura. P03 exige uma experiência móvel, em ambiente externo, com outra forma de apresentação e interação. Ou seja, o próprio documento afirma que essas pessoas **não seriam satisfatoriamente atendidas pela interface projetada para P01**.

Isso é justamente um indício de que P02 e/ou P03 podem representar outras personas primárias - ou, alternativamente, de que o projeto abriu um escopo grande demais e deveria assumir que uma dessas interfaces não faz parte do recorte principal.

A equipe precisa revisar o elenco e justificar a classificação usando o papel da persona no design, e não apenas sua frequência de uso.

Também há uma pequena inconsistência formal: a autoria de P03 aparece na síntese das personas, mas não aparece diretamente na abertura da seção de P03, como ocorre em P01 e P02. Sugiro padronizar.

### 2. As personas estão excessivamente “inventadas” em aspectos que deveriam vir da investigação

Este é o ponto conceitual mais importante da entrega.

Há uma grande quantidade de detalhes apresentados como características consolidadas das personas:

- P01 trabalha há 12 anos na carreira e 7 anos com scanner;
- atua em escala 12x36;
- sofre início de presbiopia;
- sente “pavor” de sindicância;
- utiliza memória muscular de atalhos específicos;
- chama um colega para um “segundo olhar”;
- P02 possui 20 anos de carreira, formação em Direito e especialização em Comércio Exterior;
- trabalha com dois monitores;
- consulta histórico de CNPJ antes de decidir;
- P03 atua há 8 anos;
- utiliza tablet robustecido;
- trabalha de luvas;
- possui determinados procedimentos operacionais de campo.

Esses detalhes tornam as personas concretas, mas concretude não é sinônimo de validade.

A equipe precisa separar claramente:

- o que foi observado ou documentado;
- o que é uma hipótese plausível de perfil;
- o que é apenas detalhe fictício criado para dar identidade à persona.

Idade e nome podem ser inventados sem problema. Já comportamento profissional, rotina, responsabilidade, dispositivo utilizado, pressão de trabalho, limitações físicas e forma de tomada de decisão influenciam diretamente o design e, portanto, precisam de base investigativa.

A recomendação é revisar as personas reduzindo ou marcando explicitamente os elementos ainda hipotéticos. A ficção deve preencher o personagem; não pode substituir pesquisa com usuários.

### 3. P01 ainda mistura “Fiscal Aduaneiro” e “Operador de Scanner” sem resolver a divisão real de papéis

Desde a Entrega 01 existe a hipótese de que “Fiscal Aduaneiro / Operador de Scanner” seja o usuário direto.

Na Entrega 03, a equipe cria P01 como “Fiscal Aduaneiro / Operador de Scanner” e P02 como “Auditor-Fiscal da Receita Federal / Chefe de Despacho”.

Isso parece resolver a separação, mas apenas parcialmente. Continua não demonstrado:

- quem efetivamente opera a estação de imagem;
- se essa pessoa possui autoridade para liberar ou reter;
- quem produz o apontamento técnico;
- quem recebe esse apontamento;
- quem formaliza juridicamente a decisão;
- se P01 e P02 são cargos distintos, funções exercidas pela mesma carreira ou papéis que variam por operação.

A análise de concorrentes mostrou que existem operadores de estação e mostrou que existe distribuição de processos para auditor. Isso não é suficiente para provar que o modelo organizacional descrito nas personas corresponde ao trabalho real.

Antes de consolidar as próximas tarefas, a equipe precisa investigar essa fronteira. Caso contrário, haverá o risco de modelar uma interface para um papel que, no mundo real, não possui a autoridade ou a responsabilidade que o protótipo está atribuindo a ele.

### 4. P02 e P03 possuem justificativas fracas para serem personas plenamente caracterizadas

P02 possui alguma sustentação documental porque o Siscomex evidencia etapas de distribuição para auditor, exigência e formalização de decisões. Ainda assim, a biografia e a rotina detalhada continuam majoritariamente hipotéticas.

P03 é mais problemática. A equipe parte da ideia plausível de que uma suspeita pode resultar em intervenção física e, a partir disso, cria uma persona completa de “Agente de Segurança Pública / Policial de Campo”, com tablet robustecido, alertas push, luvas, ações em um toque, localização por quadrante e fluxo móvel próprio.

Isso é uma expansão grande do escopo sem evidência suficiente.

A equipe deve investigar primeiro se esse perfil realmente interagiria com o sistema proposto. É possível que ele:

- receba informação por outro sistema;
- receba uma ordem verbal ou documental;
- não tenha acesso direto à solução;
- pertença a outro órgão;
- não precise de uma nova interface.

Se P03 não interage diretamente com o produto, talvez seja melhor tratá-lo como stakeholder relevante ao fluxo, e não como uma persona usuária que automaticamente justifica uma aplicação móvel.

### 5. O mapa de empatia atende ao formalismo estrutural, mas o conteúdo mistura empatia com requisitos de interface

A estrutura do mapa está correta. A equipe contemplou as dimensões clássicas do método e criou também um artefato visual coerente em `assets/03_personas/mapa_empatia.svg`.

O problema está principalmente em “Ganhos” e em parte de “O que vê”.

Entre os ganhos aparecem:

- fila priorizada automaticamente;
- slider de transparência;
- Dark Mode;
- decisão em até três cliques;
- consulta integrada ao manifesto.

Isso não representa propriamente o que Gustavo deseja ganhar em sua experiência; representa soluções que a equipe já escolheu.

O ganho deveria permanecer mais próximo da perspectiva humana, por exemplo: conseguir manter o foco, sentir segurança ao decidir, reduzir retrabalho, localizar suspeitas sem perder contexto, concluir o trabalho sem sobrecarga visual.

Depois, em outra etapa, a equipe poderá investigar quais soluções atendem a esses ganhos.

Há também conteúdo no mapa apresentado como realidade - interfaces de fundo claro, ausência de fila inteligente, penumbra, pressão disciplinar, informações de inteligência policial - que ainda não está devidamente demonstrado.

Portanto: **o formalismo do mapa foi atendido, mas ele precisa ficar menos “mapa da solução” e mais “mapa da pessoa”.**

### 6. A jornada não representa adequadamente o antes, durante e depois da interação

A jornada possui seis etapas e está bem escrita, mas conceitualmente está muito próxima de um cenário futuro da solução.

Ela começa com Gustavo chegando ao posto, autenticando-se e verificando o status da IA. Portanto, o “antes” praticamente já ocorre dentro da interface.

Durante a jornada, quase todas as oportunidades já são decisões de UI fechadas:

- Dark Mode;
- dashboard;
- quatro canais;
- slider de opacidade;
- painel lateral;
- três cliques;
- relatório exportável.

Isso transforma a jornada em uma espécie de wireflow narrado.

O “depois” também está incompleto. A última etapa é o encerramento do turno com um relatório dentro do sistema. Falta mostrar o que acontece **depois que a interface cumpriu seu papel**:

- o que ocorre com a carga;
- como a decisão segue para outros atores;
- que informação permanece disponível;
- como o usuário percebe se a decisão produziu o resultado esperado;
- como o trabalho realizado influencia a atividade seguinte;
- qual benefício concreto ele obtém por ter usado a solução.

A equipe precisa reconstruir a jornada começando pelo gatilho e pela motivação antes da interação, passando pelo uso e encerrando nas consequências posteriores.

### 7. A jornada incorpora como fato várias soluções que ainda deveriam ser hipóteses

Há exemplos particularmente importantes:

- “IA reorganiza a fila automaticamente”;
- “contêineres normais já caem em canal verde”;
- “Canal Cinza (alta anomalia)”;
- “slider de opacidade”;
- “70%+ da tela”;
- “veredito em até 3 cliques”;
- “relatório exportável em 1 clique”.

Aqui reaparece um problema já visível na análise de concorrência: solução candidata passou a ser apresentada como se fosse necessidade confirmada.

Especial atenção deve ser dada à associação entre **canal aduaneiro** e **anomalia produzida pela IA**. Canal verde, amarelo, vermelho ou cinza é uma classificação normativa do processo aduaneiro. Não foi demonstrado que o modelo de detecção de anomalias possa ou deva atribuir esses canais.

A jornada não deve consolidar essa equivalência sem evidência.

### 8. O contexto de uso é bem estruturado, mas mistura contexto observado, hipótese e requisito técnico

A seção de contexto é uma das partes mais completas da entrega. Ela considera aspectos humanos, tecnológicos, ambientais, sociais e organizacionais.

Porém, aparecem como fatos diversos elementos ainda não sustentados:

- operação de 45 a 60 segundos por contêiner;
- P02 usando dois monitores;
- P03 utilizando tablet robustecido;
- plantão 12x36;
- sala mantida em penumbra;
- criminalização pessoal associada a determinadas decisões;
- milhares de contêineres por mês em cada pórtico;
- obrigação de armazenar radiografias por pelo menos cinco anos;
- uso de timestamp criptográfico;
- determinados níveis de autoridade de cada papel.

Alguns desses pontos podem ser verdadeiros. O problema é que a entrega não apresenta evidência suficiente para tratá-los como característica consolidada do contexto.

O contexto de uso precisa ser detalhado, mas detalhado **com rastreabilidade**. O que ainda não foi investigado deve permanecer claramente marcado como hipótese.

### 9. As imagens das personas existem, mas nem todas reforçam adequadamente o personagem descrito

As três personas possuem imagens, o que atende ao requisito formal.

Entretanto, vale observar a coerência semântica do artefato.

A imagem de P01 mostra um personagem em um ambiente corporativo genérico, enquanto a persona é definida como operador de estação radiográfica portuária.

A imagem de P02 mostra o personagem em uma sala repleta de monitores técnicos e imagens, embora sua descrição diga que ele trabalha em gabinete administrativo e não opera a estação de análise contínua.

P03 é a imagem mais coerente com o ambiente descrito, pois mostra um profissional de campo entre contêineres com dispositivo móvel.

A foto da persona não precisa reproduzir literalmente a cena de trabalho, mas ela deve ajudar a equipe a lembrar **quem é aquela pessoa e em qual realidade atua**. Sugiro revisar P01 e P02 ou adotar imagens mais neutras, sem elementos ambientais que contradigam a própria descrição.

### 10. A rastreabilidade não foi atualizada para registrar efetivamente a Entrega 03

Este é um problema de conformidade importante.

O arquivo `RASTREABILIDADE.md` ainda permanece essencialmente no estado da Entrega 02:

- H01 continua com investigação em “Entrega 3 / Entrevistas” e evidência `PENDENTE`;
- H16 continua `PENDENTE`;
- H38 continua `PENDENTE`;
- não há registro efetivo de P01, P02 e P03 na cadeia principal;
- a seção “Rastreabilidade entre contribuição técnica, necessidades e artefatos” ainda contém placeholders;
- a seção “Rastreabilidade de padrões de interface” ainda contém placeholders;
- o registro de mudanças termina em 03/09/2026, antes da consolidação desta entrega.

Isso é especialmente problemático porque o documento da Entrega 03 afirma que várias hipóteses foram confirmadas ou incorporadas.

Se houve novo conhecimento, ele precisa aparecer também na matriz. Se não houve evidência nova, a hipótese deve continuar aberta e a persona não pode funcionar como mecanismo de validação.

A equipe deve atualizar a rastreabilidade registrando P01, P02 e P03 e relacionando cada uma às hipóteses realmente sustentadas, às hipóteses ainda abertas e às futuras tarefas/cenários.

### 11. A síntese final transforma prematuramente hipóteses em requisitos “mandatórios”

A seção final afirma que certas decisões tornam-se obrigatórias para as próximas entregas, entre elas:

- quatro canais na fila de IA;
- slider de 0 a 100%;
- Dark Mode obrigatório;
- mais de 70% da tela dedicada à imagem;
- painéis laterais retráteis;
- integração de DUIMP;
- veredito em poucos cliques;
- alertas móveis para agentes de campo.

Nesse estágio, várias dessas decisões ainda são alternativas de design, não necessidades comprovadas.

O objetivo da Entrega 03 não é congelar a interface. É construir um entendimento das pessoas que permita decidir melhor posteriormente.

Sugiro revisar a síntese em três níveis:

- necessidades/objetivos sustentados;
- hipóteses que as próximas entregas precisam investigar;
- alternativas de solução que poderão ser prototipadas e comparadas.

Isso preserva a liberdade de design e evita que a equipe passe as próximas entregas apenas justificando decisões que já tomou.

## Recomendações de melhoria

### 1. Reescrever as personas com uma camada explícita de evidência

Não é necessário empobrecer as personas. O ideal é manter a riqueza, mas diferenciar claramente:

- características sustentadas;
- características hipotéticas;
- detalhes ficcionais usados apenas para tornar o personagem memorável.

Isso também reduzirá o risco de a biografia fictícia virar “prova” de um requisito.

### 2. Trabalhar melhor objetivos pessoais, práticos e de experiência

Os objetivos atuais estão fortemente associados à tarefa institucional: liberar cargas, interceptar ilícitos, emitir decisões.

A equipe pode enriquecer as personas incluindo objetivos de experiência relevantes, como:

- manter a sensação de controle;
- confiar que não perdeu informação importante;
- evitar insegurança ao decidir;
- manter concentração ao longo do turno;
- não sentir que a automação está substituindo seu julgamento.

Esses objetivos ajudam muito mais o design de interação do que apenas metas organizacionais.

### 3. Reduzir decisões de UI dentro das personas

Slider, Dark Mode, painéis retráteis, quantidade de cliques, percentual de área da tela e push notification não precisam desaparecer do projeto. Eles apenas precisam voltar à categoria correta: **alternativas de design a investigar**.

### 4. Manter o mapa de empatia como representação da pessoa

Ganhos, dores, pensamentos e comportamentos devem ser formulados pelo ponto de vista da persona. Depois, a equipe deriva oportunidades.

Quando o mapa já contém o componente de interface, a análise perde parte de sua utilidade.

### 5. Refazer a jornada como experiência ponta a ponta

A jornada deveria responder claramente:

1. O que dispara a necessidade?
2. O que a pessoa tenta realizar antes de abrir a interface?
3. Como chega ao sistema?
4. O que acontece durante a interação?
5. Como termina a interação?
6. O que acontece depois?
7. Como ela percebe o resultado ou benefício produzido?

Essa estrutura ajudará a separar atividade humana de tela.

## Pontos que devem alimentar as próximas entregas

- Investigar com prioridade a diferença real entre operador da estação de raio-X e Auditor-Fiscal.
- Verificar se P02 e P03 são usuários diretos da mesma solução ou stakeholders de sistemas distintos.
- Validar quais personas realmente precisam de interfaces próprias.
- Investigar a rotina e frequência de triagem antes de modelar tarefa.
- Investigar o fluxo de decisão formal antes de definir quem pode “liberar”, “reter” ou “homologar”.
- Confirmar ou refutar ambiente em penumbra, turnos, ruído, dispositivos, número de monitores e práticas de colaboração.
- Separar canal aduaneiro de classificação produzida pelo modelo de IA.
- Investigar como resultados de imagem chegam ao processo formal no Siscomex.
- Testar posteriormente comparação lado a lado, sobreposição, opacidade e outras alternativas sem congelá-las agora.
- Verificar se existe demanda real por interface móvel para P03.
- Atualizar a rastreabilidade após cada confirmação, refutação ou reformulação de hipótese.
- Levar para a Entrega 04 cenários de problema centrados na situação atual, evitando começar já com a solução idealizada.
- Levar para a Entrega 05 tarefas derivadas do trabalho real, e não de botões ou componentes já imaginados.

## Síntese das ações recomendadas

1. **Manter as três personas, mas revisar a classificação entre primárias e secundárias**, justificando-a pela necessidade de interfaces distintas.
2. **Resolver a ambiguidade entre operador de scanner e Auditor-Fiscal** antes de consolidar os papéis.
3. **Revisar as biografias**, removendo ou identificando como hipótese os detalhes profissionais, comportamentais e ambientais sem evidência.
4. **Reavaliar P03**, verificando se é realmente usuário direto da solução ou stakeholder do processo.
5. **Preservar a estrutura do mapa de empatia**, mas retirar componentes de UI dos campos de ganhos, pensamentos e comportamentos.
6. **Refazer a jornada para cobrir claramente antes, durante e depois da interação**, incluindo as consequências posteriores do uso.
7. **Retirar da jornada e da síntese a equivalência automática entre canais do Siscomex e risco/anomalia da IA.**
8. **Reclassificar slider, Dark Mode, 70% de tela, painéis retráteis, três cliques e push notifications como hipóteses de solução**, e não como requisitos já determinados.
9. **Revisar o contexto de uso distinguindo fatos, hipóteses e lacunas**, especialmente nos detalhes operacionais muito específicos.
10. **Atualizar `RASTREABILIDADE.md` com P01, P02 e P03 e com o conhecimento produzido nesta entrega**, eliminando os placeholders que já deveriam ter sido preenchidos.
11. **Ajustar as imagens de P01 e P02**, caso a equipe queira que elas representem também o ambiente profissional descrito.
12. **Usar as próximas entregas para investigar o trabalho real antes de congelar a solução.**

## Parecer geral sobre a Entrega 03

A equipe produziu uma entrega visualmente rica, detalhada e aparentemente completa. O problema não está na quantidade de conteúdo; está em distinguir **conhecimento sobre o usuário** de **imaginação sobre o usuário**.

As personas possuem boa estrutura e são memoráveis, mas várias características capazes de alterar diretamente o design foram inventadas ou extrapoladas a partir de documentação de mercado. O mapa de empatia atende ao formato, porém incorpora soluções prontas. O contexto de uso é abrangente, mas precisa de melhor tratamento de evidência. A jornada apresenta sequência e emoções, mas ainda funciona mais como um cenário futuro da interface do que como uma narrativa completa da experiência antes, durante e depois do uso.

Antes de avançar, a equipe precisa fazer uma revisão conceitual: **menos certeza sobre a interface e mais rigor sobre as pessoas**. Se isso for corrigido, os artefatos desta entrega poderão cumprir muito bem sua função nas próximas etapas de cenários e análise de tarefas.
