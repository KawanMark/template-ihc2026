# Entrega 4 — Cenários de análise/problema

**Data:** 08/10/2026  
**Status:** 🟩 concluída 
**Responsabilidade:** 1 solução completa por integrante

## Objetivo da atividade

Descrever situações atuais em que o usuário tenta alcançar um objetivo e encontra dificuldades. O cenário de análise/problema deve tornar visível **o contexto, os atores, as ações e as rupturas**, sem antecipar a interface que será projetada.

> **Regra central:** cenário de problema é a “história do problema”. Se o texto já diz “o sistema mostra”, “o aplicativo resolve” ou descreve botões/telas futuras, provavelmente está misturando problema com solução.

Sempre que possível, o cenário deve aprofundar uma **situação concreta já registrada na Entrega 1**.

### Quando o TCC não possuía interface

O cenário continua sendo uma história de **problema/atividade humana**, não uma história do futuro sistema. Descreva como o profissional realiza hoje uma atividade semelhante ou como lida atualmente com dados, resultados, configurações, logs, decisões e limitações que o tema do TCC pretende apoiar.

Exemplo: em vez de “o DBA abre o novo dashboard e executa o algoritmo”, descreva “o DBA precisa investigar uma consulta lenta, reúne informações em ferramentas distintas, compara planos manualmente e tem dificuldade para estimar o impacto de uma mudança”.

A interface da disciplina aparecerá somente depois, nos cenários de interação.

Se o integrante escolher um novo problema/situação, explique por que ele passou a ser relevante e indique a evidência que motivou sua inclusão.

Os cenários usam o prefixo `CP`, conforme a convenção de identificadores de [`../RASTREABILIDADE.md`](../RASTREABILIDADE.md), porque `C` designa os concorrentes da Entrega 2. O número acompanha a ordem dos autores na equipe.

## Cenário CP01 — Dúvida diante de uma imagem de contêiner no meio do plantão

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5  
**Persona(s) relacionada(s):** P01 — Gustavo Onofre (operador da estação de imagem)  
**Necessidade relacionada:** R01 (saber onde olhar em uma imagem densa e sobreposta), com contato com R03 (o que acontece com o que o operador conclui)  
**Situação concreta da Entrega 1 relacionada:** seção 4.5 (H13), que aprofunda as seções 4.2 (H10) e 4.4 (H12)  
**Hipóteses ainda presentes:** H01, H04, H10, H11, H12, H13, H16, H38, H39, H41 e as lacunas ?07 e ?08

**Por que esta situação.** H13 é o único relato concreto da Entrega 1 e descreve o problema que justifica o recorte: a anomalia que passa despercebida na imagem. Ela é um cenário exploratório, e não uma observação. O personagem original (Carlos) não foi investigado nem virou persona, por isso a história é contada com Gustavo (P01), a proto-persona de quem examina a imagem. Turno, horário e volume continuam suposições [H13]. O cenário não valida H10 nem H13: ele os torna narráveis para as próximas entregas.

### 1. Cenário inicial

Gustavo Onofre opera a estação de imagem de raio-X de um terminal portuário. Está no meio de um plantão noturno e, por volta das três da manhã, já examinou centenas de imagens de contêineres e caminhões que passaram pelo escâner. A cada imagem, ele tem poucos segundos para decidir se há alguma coisa ali que justifique desconfiar da carga. Faz isso olhando a imagem no software do fabricante do escâner, que oferece cores por tipo de material, realce de bordas e ajuste de contraste, mas não diz por onde começar a olhar.

Chega a imagem de um contêiner declarado como carregado de paletes de madeira. A imagem é densa, com muitos objetos sobrepostos. Em uma região, o material parece um pouco mais denso que no restante, mas a diferença é pequena e Gustavo já viu variações assim em cargas de madeira que eram regulares. Ele ajusta o contraste, liga o realce de bordas, volta à imagem original e tenta lembrar o que a carga deveria ser. Os caminhões seguintes já esperam e a próxima imagem está pronta. Cansado, ele não consegue afirmar se aquela região faz parte da carga ou se há algo escondido ali.

Gustavo conclui que não tem motivo suficiente para apontar uma suspeita e deixa o caso seguir. Ele não sabe se acertou. No resto do plantão, não terá como descobrir o que havia naquela região.

### 2. Questões de refinamento

Convenções desta seção: `[F]` fato com fonte, `[H]` hipótese, `[?]` lacuna, e `**[NOVO: ...]**` para o que o refinamento acrescenta, acompanhado de `[Q1]`, `[Q2]` etc. para vincular cada acréscimo à pergunta correspondente. Cada questão está associada a um dos **sete elementos característicos do cenário** trabalhados na disciplina (**ambiente/contexto, atores, objetivos, planejamento, ações, eventos e avaliação**), os mesmos extraídos na seção 4.

As perguntas buscam apenas informações **ainda ausentes** do cenário inicial. As respostas vêm de documentos e de fontes já analisadas nas Entregas 1 a 3. Nenhum profissional foi ouvido, por isso o que não tem fonte permanece `[H]` ou `[?]` e segue para a Entrega 7.

| # | Elemento | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|---|
| Q1 | Atores | Quem é Gustavo em termos institucionais (servidor da Receita Federal ou operador designado pelo recinto) e que outros atores participam quando há suspeita sobre uma carga? | O cenário inicial não diz se ele decide ou só aponta, nem quem recebe o apontamento, e isso muda o que “deixar o caso seguir” significa e quem responde por ele. | Documentos: Portaria ALF/FNS nº 9/2024 (arts. 3º e 8º), Portaria RFB nº 143/2022 (art. 14). Entrevista na Entrega 7 (H01, H39). |
| Q2 | Objetivos | Qual é o alcance formal do objetivo de Gustavo ao concluir a análise (apenas apontar suspeita à fiscalização ou decidir pela retenção/liberação) e o que torna uma conclusão defensável? | O cenário inicial fala em “decidir se há alguma coisa ali que justifique desconfiar”, mas não delimita até onde vai a atribuição formal do operador nem o custo de errar para cada lado. | Portaria ALF/FNS nº 9/2024 (art. 8º), C02 (redirecionamento de canal e desembaraço). Entrevista na Entrega 7 (H01, H12, H38, H39). |
| Q3 | Planejamento | Como o operador se prepara e que informações da declaração e ferramentas adicionais do software estão disponíveis para estruturar a conferência da imagem? | O cenário inicial cita apenas cores, bordas e contraste, mas não informa como o operador planeja a conferência nem que dados da carga declarada ele tem para orientar a busca visual. | Análise C03 da Entrega 2 e ADE Coana nº 19/2014, item 1.2.8. Entrevista para o restante (H11). |
| Q4 | Ambiente/contexto | Quais são as condições físicas de acesso, iluminação, ruído e equipamento da sala onde funciona a estação, e qual é a duração formal da escala e a meta de atendimento? | O cenário inicial já informa que é um plantão noturno às três da manhã, mas não descreve as restrições físicas da sala, o porte do monitor nem se há escala ou meta formal de liberação. | Portaria ALF/FNS nº 9/2024 (art. 3º) para a sala; análise C03 para o monitor. Entrevista, fotos ou material institucional para iluminação, ruído, duração da escala e metas (H14, H16, ?07). |
| Q5 | Eventos | Como ocorrem os eventos de chegada e transmissão das imagens à estação, quem define a ordem da fila e que eventos são disparados no pátio quando uma suspeita é comunicada? | O cenário inicial menciona que a próxima imagem está pronta, mas não explica como ela chega, quem mais a recebe em tempo real nem o que ocorre com o veículo no pátio em caso de alerta. | Portaria RFB nº 143/2022 (art. 14), Portaria ALF/FNS nº 9/2024 (art. 8º) e C03 para o fluxo. Entrevista ou observação para a ordem da fila (H04, H41). |
| Q6 | Ações | Que ações práticas Gustavo pode realizar quando os ajustes de contraste e bordas não eliminam a dúvida (como consultar dados do manifesto, pedir segunda opinião ou formalizar apontamento)? | O cenário inicial só mostra ajustes básicos de imagem e a escolha solitária entre apontar ou deixar seguir. Falta saber que outras ações cabem durante o exame. | Portaria ALF/FNS nº 9/2024 (art. 8º) e C03 (anotações e dados do manifesto). Entrevista para práticas informais, como pedir segunda opinião (H11, H12). |
| Q7 | Avaliação | Como o resultado da decisão é avaliado posteriormente e que mecanismos de consulta ou retorno existem para Gustavo saber o que foi encontrado nas cargas apontadas ou liberadas? | O cenário inicial termina dizendo que ele não terá como descobrir o que havia na região. É preciso saber o que fica armazenado e se há retorno institucional sobre o desfecho. | Portaria ALF/FNS nº 9/2024 (art. 5º) para o que fica guardado. Entrevista sobre retorno de desfecho (H38, ?08). |

### 3. Cenário refinado

Gustavo Onofre opera a estação de imagem de raio-X de um terminal portuário. **[NOVO [Q1]: [F] Na unidade usada como referência (Portaria ALF/FNS nº 9/2024, Imbituba), o escâner é operado por operadores designados pelo recinto alfandegado, em sala com acesso restrito às pessoas autorizadas, e não por servidores da Receita Federal. [H] Este cenário adota esse modelo como referência exploratória, sem afirmar que vale para outros terminais. Em Santos há indício de outro modelo, com a imagem analisada por servidores da vigilância da RFB em uma central (CP02). [?] Ainda não sabemos em qual modelo Gustavo estaria nem que cargo da RFB examina as imagens (H01, H39).]** Está no meio de um plantão noturno e, por volta das três da manhã, já examinou centenas de imagens de contêineres e caminhões que passaram pelo escâner. **[NOVO [Q4]: [?] Não sabemos qual é a duração formal da escala, a meta de atendimento por hora nem as condições reais de iluminação e ruído da sala (H13, H14, H16, ?07); a hora e o volume exato permanecem suposições do cenário exploratório.]** A cada imagem, ele tem poucos segundos para decidir se há alguma coisa ali que justifique desconfiar da carga. Faz isso olhando a imagem no software do fabricante do escâner, **[NOVO [Q3, Q4]: [F] em um monitor dedicado de 22" a 24" (C03). [F] Para planejar e conduzir o exame, o software oferece zoom, inversão, realce de contornos, colorização por densidades, brilho, contraste e equalização (ADE Coana nº 19/2014, item 1.2.8) e, nos produtos analisados, visualização de dados do manifesto e anotações sobre a imagem (C03).]** que oferece cores por tipo de material, realce de bordas e ajuste de contraste, mas não diz por onde começar a olhar. **[NOVO [Q5]: [H] Os eventos de chegada das imagens acompanham a passagem dos veículos pelo escâner na ordem de chegada. [F] As imagens são transmitidas em tempo real à unidade da RFB (Portaria RFB nº 143/2022, art. 14), de modo que Gustavo não é o único que pode vê-las. [?] Não sabemos se existe fila configurável nem quem controla a ordem de atendimento (H04, H41).]**

Chega a imagem de um contêiner declarado como carregado de paletes de madeira. A imagem é densa, com muitos objetos sobrepostos. Em uma região, o material parece um pouco mais denso que no restante, mas a diferença é pequena e Gustavo já viu variações assim em cargas de madeira que eram regulares. Ele ajusta o contraste, liga o realce de bordas, volta à imagem original e tenta lembrar o que a carga deveria ser. **[NOVO [Q3, Q6]: [H] Ele procura conferir a imagem com a descrição da carga na declaração. [?] Não sabemos que informações da declaração ele tem diante dos olhos nesse momento, nem se precisa buscá-las em outro sistema ou janela (H11).]** Os caminhões seguintes já esperam e a próxima imagem está pronta. Cansado, ele não consegue afirmar se aquela região faz parte da carga ou se há algo escondido ali. **[NOVO [Q2, Q5, Q6]: O objetivo de Gustavo é chegar a uma conclusão defensável dentro do limite de sua função, mas ele tem duas saídas e nenhuma é sem custo. [F] Se desconfiar, sua ação é comunicar a suspeita à RFB, evento que interrompe imediatamente o fluxo daquele veículo e mantém a carga retida e segregada até a manifestação da fiscalização; sem manifestação nem bloqueio no Siscomex Carga em 3 dias úteis, a carga segue (Portaria ALF/FNS nº 9/2024, art. 8º). [H] Se comunicar sem base suficiente, ele retém uma carga regular e gera atrito com quem espera pela liberação (H12). [H] Se deixar seguir e houver algo escondido, a carga entra no país sem que ninguém tenha visto (H12). [H] Pedir a opinião de um colega antes de apontar é uma ação plausível, mas não há fonte sobre essa prática na unidade.]**

Gustavo conclui que não tem motivo suficiente para apontar uma suspeita e deixa o caso seguir. Ele não sabe se acertou. No resto do plantão, não terá como descobrir o que havia naquela região. **[NOVO [Q7]: [F] As imagens ficam disponíveis por 180 dias e podem ser buscadas por unidade de carga, data, hora ou placa (Portaria ALF/FNS nº 9/2024, art. 5º). Isso permite rever a imagem armazenada, mas não mostra o que a verificação física da carga encontrou para avaliar o acerto da decisão. [?] Não sabemos se quem examina a imagem recebe algum retorno sobre os casos que apontou ou deixou de apontar (H38, ?08). [H] Sem avaliação de desfecho, ele não aprende com o resultado e o próximo caso parecido recomeça do mesmo ponto.]**

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| Ambiente/contexto | Sala de operação do escâner com acesso restrito [F] e estação com monitor dedicado de 22" a 24" [F]; plantão noturno às 3h, cansaço e pressão de tempo [H, H13]; condições de iluminação, ruído, duração da escala e metas em aberto [?, H14, H16, ?07]. |
| Atores | Gustavo Onofre, operador da estação de imagem (P01). Quem recebe a suspeita: a RFB, que se manifesta sobre a carga [F]. Quem espera a liberação: motoristas e operadores logísticos [H]. O vínculo institucional de Gustavo depende do modelo da unidade (H01, H39). |
| Objetivos | Chegar a uma conclusão confiável e defensável sobre a compatibilidade entre a imagem radiográfica e a carga declarada (H38), decidindo sob incerteza se cabe comunicar suspeita à RFB ou liberar o fluxo do veículo. |
| Planejamento | Uso das funções de tratamento do software do fabricante (zoom, inversão, realce de contornos, pseudo-cor por densidade, brilho, contraste e equalização) [F] e consulta à descrição da carga declarada [H, H11] para orientar a inspeção visual, sem apoio de recurso que indique por onde começar a olhar. |
| Ações | Examinar a imagem; alternar filtros de contraste, realce de bordas e cor por material; confrontar visualmente a região densa com a mercadoria declarada; optar entre comunicar suspeita à RFB ou deixar o caso seguir; passar à imagem seguinte. |
| Eventos | Chegada da imagem de um contêiner declarado como paletes de madeira após passagem pelo escâner [H]; transmissão em tempo real à RFB [F]; fila de veículos aguardando no pátio [H]; em caso de comunicação de suspeita, interrupção do fluxo do veículo e retenção da carga por até 3 dias úteis aguardando manifestação da RFB [F]. |
| Avaliação | Dúvida não resolvida pela pequena diferença de densidade em imagem sobreposta (H10); impossibilidade de avaliar se a liberação foi um acerto ou um falso negativo [H, H12]; imagens guardadas por 180 dias para consulta [F], mas sem retorno conhecido sobre o desfecho da fiscalização para calibrar decisões futuras [?, H38, ?08]. |

### 5. Implicações para as próximas entregas

Estas são perguntas e tarefas candidatas, e não decisões. A forma de apoiar cada uma só entra a partir das Entregas 6 e 9.

**Tarefas que merecem análise na Entrega 5, se a investigação sustentar:**

- A02: examinar a região de uma imagem e concluir se é compatível com a carga declarada. É a tarefa central do cenário, e liga a R01.
- A03: comunicar ou registrar a conclusão a quem decide. A forma depende de H39 e liga a R03.
- Acompanhar o desfecho de um caso apontado ou não apontado. Ainda não tem ID: só vira atividade se a Entrega 7 mostrar que o retorno existe ou faz falta.

**Informações a coletar na Entrega 7** (todas pendentes, nenhuma pode ser respondida por protótipo):

1. Quem examina a imagem em outras unidades, e se essa pessoa pode reter ou só apontar (H01, H39).
2. Se existe fila e quem decide a ordem de exame (H04, H41).
3. Que informações da declaração a pessoa usa junto da imagem e onde as consulta (H11).
4. O que a pessoa faz quando fica em dúvida, e se há segunda opinião ou protocolo (H12).
5. Se há retorno sobre o desfecho dos casos, e como chega (H38, ?08).
6. Condições reais de turno, iluminação e ruído (H14, H16) e se há metas de liberação (?07).

**Cadeia de rastreabilidade:** CP01 liga P01 → R01 → A02 em [`RASTREABILIDADE.md`](../RASTREABILIDADE.md). O cenário não confirma H10 nem H13 e não altera o estado das hipóteses.

---

## Cenário CP02 — Decidir sobre uma carga bloqueada por suspeita na imagem do escâner

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8  
**Persona(s) relacionada(s):** P02, Dr. Eduardo Resende (Auditor-Fiscal)  
**Necessidade relacionada:** R03  
**Situação concreta da Entrega 1 relacionada:** nova situação justificada. A Entrega 1 narra só o lado de quem examina a imagem (seção 4.5). Este cenário trata de quem decide e formaliza, papel que passou a existir no projeto com H39 e que tem base na análise C02 da Entrega 2 e nas normas da RFB citadas na Entrega 3. Liga-se à atividade A03 (seção 3.2).  
**Hipóteses ainda presentes:** H01, H06, H08, H11, H17, H18, H32, H39 e a lacuna ?08

O cenário se passa na Alfândega do Porto de Santos. Nenhum Auditor-Fiscal foi entrevistado: a narrativa é hipotética `[H]`, salvo onde indicado `[F]`.

### 1. Cenário inicial

Atores: Dr. Eduardo Resende (Auditor-Fiscal), servidor da vigilância que analisou a imagem, importador.

Dr. Eduardo Resende, Auditor-Fiscal na Alfândega do Porto de Santos, recebe uma declaração de importação cuja carga está bloqueada porque a imagem do escâner levantou suspeita. Ele precisa decidir o que fazer com essa carga e formalizar a decisão. Abre a declaração no Siscomex e lê o que a mercadoria declara ser. Sabe que existe uma suspeita, mas não sabe o que foi visto na imagem nem em que parte do contêiner. A imagem não está junto da declaração. Ele procura quem fez o bloqueio para entender o motivo e recebe uma descrição curta, que tenta relacionar com a mercadoria declarada. Sem prática de leitura de radiografia, não consegue avaliar sozinho se a suspeita se sustenta. Na dúvida, determina a verificação física. A verificação não encontra irregularidade, a carga é liberada com atraso, e quem analisou a imagem não fica sabendo do resultado.

### 2. Questões de refinamento

As questões seguem os **sete elementos característicos do cenário** vistos em aula (**ambiente/contexto, atores, objetivos, planejamento, ações, eventos e avaliação**) e perguntam apenas o que está ausente do cenário inicial. Só documentos, normas e matérias históricas foram usados nas respostas; como as matérias sobre Santos são de 2013 e 2015, o funcionamento atual depende de confirmação empírica na Entrega 7 e o que não tem fonte atual fica marcado como `[H]` ou `[?]`.

| # | Elemento | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|---|
| Q1 | Ambiente/contexto | Em que setor da Alfândega de Santos as imagens de escâner são analisadas e em que regime de funcionamento? | Contextualiza o ambiente institucional de onde parte o apontamento que chega a P02. | `[F]` A Tribuna, 2013 e 2015 (registro histórico): as imagens eram analisadas na Central de Operações e Vigilância (COV), na sede da Alfândega, em plantão de 24 horas. `[F]` Portaria ALF/STS nº 197/2025, art. 34: a vigilância remota e a verificação do uso de inspeção não invasiva competem à Equipe de Vigilância e Plantão (Eqvig). `[?]` Cargo desses servidores e se a COV opera hoje como descrito em 2013. |
| Q2 | Atores | Quem tem atribuição para bloquear ou liberar a carga a partir da imagem antes do despacho? | Identifica os atores envolvidos e separa o bloqueio operacional da decisão formal do despacho (H39). | `[F]` A Tribuna, 2013 (registro histórico): os servidores da COV podiam consultar os sistemas da Receita e liberar ou bloquear cargas de importação e exportação. `[?]` Em que sistema o bloqueio é feito atualmente. |
| Q3 | Objetivos | Quem responde pelo objetivo de decidir o despacho aduaneiro, a que equipe pertence e qual é o alcance formal dessa decisão? | Confirma o objetivo institucional de P02 e a distância organizacional entre quem decide o despacho e quem viu a imagem. | `[F]` Manual de Despacho de Importação (C02): o Auditor-Fiscal responde pelo desembaraço. `[F]` Portaria ALF/STS nº 197/2025, art. 1º: a Equipe de Despacho Aduaneiro de Importação (Edaim) fica na Divisão de Despacho, e a Eqvig em outra divisão. `[H]` P02 atua na Edaim. |
| Q4 | Eventos | Como o evento de bloqueio por suspeita na imagem é comunicado da vigilância ao auditor responsável pelo despacho? | É o evento de transição em que a informação sobre a anomalia pode se perder. | `[?]` Não encontrado para Santos (lacuna ?08). `[F]` Em Imbituba, o recinto comunica a suspeita à RFB com interrupção do fluxo (Portaria ALF/FNS nº 9/2024, art. 8º), o que vale para uma unidade. Investigar na Entrega 7. |
| Q5 | Planejamento | O auditor do despacho tem acesso à imagem do escâner e como ele planeja a verificação da suspeita antes de decidir? | Define se o planejamento da análise inclui inspecionar diretamente a evidência visual ou apenas ler o relato de terceiros. | `[F]` A Tribuna, 2013 (registro histórico), fala do inspetor: o servidor responsável pelo despacho precisa ter convicção para liberar, e "algumas vezes, apenas a imagem do escâner pode ser suficiente". `[F]` A norma nacional prevê software de análise em estações de trabalho da RFB (ADE Coana nº 19/2014). `[?]` Onde e como o auditor acessa a imagem hoje, e se sabe interpretá-la. |
| Q6 | Planejamento | Que informações da declaração e do dossiê ele reúne para planejar o confronto com a suspeita apontada na imagem? | Define quais dados documentais precisam ser articulados no momento da decisão (H11). | `[F]` C02: o despacho se apoia no dossiê de documentos, e a seleção do canal considera natureza e características da mercadoria, origem e habitualidade do importador. `[?]` Quais desses dados o auditor de fato usa diante de uma suspeita de imagem. |
| Q7 | Ações | Que ações formais ele pode executar no sistema depois de analisar a suspeita? | Delimita as ações possíveis para concluir a tarefa (H06). | `[F]` C02: exigência fiscal com motivo e prazo, verificação física e desembaraço, e a declaração em canal verde pode ser redirecionada quando há indício de irregularidade. `[F]` A Tribuna, 2013 (registro histórico): a conferência física podia ser presencial ou remota, via COV. `[?]` Qual ato é usado hoje quando a origem da suspeita é a imagem. |
| Q8 | Ambiente/contexto | Por quanto tempo a carga permanece retida no ambiente portuário enquanto o auditor analisa e decide? | Caracteriza a pressão temporal do contexto operacional e o custo de uma retenção prolongada (H08). | `[?]` Não encontrado para Santos. `[F]` Em Imbituba, a carga segue se a RFB não se manifestar em 3 dias úteis (Portaria ALF/FNS nº 9/2024, art. 8º). |
| Q9 | Eventos | Com que frequência eventos de cargas bloqueadas por imagem chegam à equipe de despacho? | Indica se esse evento é rotina ou exceção, o que muda a prioridade da tarefa. | `[F]` A Tribuna, 2015 (registro histórico): 16 escâneres nos terminais, e desde setembro de 2013 a Receita determinou a inspeção de todas as cargas de importação no desembarque. `[?]` Quantas imagens viram suspeita hoje e quantas chegam ao despacho. |
| Q10 | Avaliação | O que fica registrado para avaliação posterior da decisão, e quem recebe retorno sobre o desfecho da verificação física? | Sustenta a avaliação e a rastreabilidade do ato (H17, H32) e mostra se quem analisou a imagem consegue avaliar o acerto do bloqueio. | `[F]` A Tribuna, 2013 (registro histórico): imagens guardadas por 90 dias na COV e dados de controle por cinco anos em Santos. `[F]` C02: a decisão com valor jurídico é registrada no Siscomex. `[?]` Se a suspeita de imagem fica vinculada à declaração e se há retorno a quem a analisou. |

### 3. Cenário refinado

Atores: Dr. Eduardo Resende (Auditor-Fiscal), servidor da vigilância que analisou a imagem, importador.

Dr. Eduardo Resende, Auditor-Fiscal na Alfândega do Porto de Santos, **[NOVO [Q3]: `[F]` responde formalmente pela decisão do despacho aduaneiro (C02) e `[H]` atua na equipe de despacho de importação (Edaim), que fica em uma divisão diferente da equipe de vigilância (Eqvig) `[F]` (Portaria ALF/STS nº 197/2025)]**. Ele recebe uma declaração de importação cuja carga está bloqueada porque a imagem do escâner levantou suspeita. **[NOVO [Q1, Q2, Q9]: `[F]` Segundo registros históricos de Santos (A Tribuna, 2013 e 2015), a imagem era analisada por servidores da Receita na Central de Operações e Vigilância (COV), em plantão de 24 horas, com atribuição para bloquear a carga, competindo hoje à Eqvig a vigilância remota (Portaria ALF/STS nº 197/2025, art. 34). `[?]` Não sabemos se a COV segue operando do mesmo modo nem com que frequência esses bloqueios chegam hoje ao despacho.]**

Ele precisa decidir o que fazer com essa carga e formalizar a decisão. Abre a declaração no Siscomex e lê o que a mercadoria declara ser, **[NOVO [Q6]: `[F]` planejando a conferência a partir dos documentos do dossiê, da natureza da mercadoria, da origem e do histórico do importador (C02), `[?]` embora ainda não saibamos quais desses itens ele prioriza diante de uma suspeita radiográfica]**. Sabe que existe uma suspeita, mas não sabe o que foi visto na imagem nem em que parte do contêiner. **[NOVO [Q4]: `[H]` O evento de bloqueio não chegou a ele acompanhado de uma explicação detalhada; `[?]` como a suspeita passa da vigilância para o despacho em Santos é uma lacuna que a equipe ainda precisa apurar na Entrega 7 (?08).]**

A imagem não está junto da declaração. **[NOVO [Q5]: `[F]` Embora haja registro histórico de que o servidor do despacho pode se apoiar na imagem do escâner para formar convicção (A Tribuna, 2013) e previsão normativa de software de análise em estações da RFB (ADE Coana nº 19/2014), `[H]` a equipe supõe que, para isso, ele precisa buscá-la fora do Siscomex, em outro sistema; `[?]` onde e como o auditor acessa a imagem atualmente segue sem resposta.]** Ele procura quem fez o bloqueio para entender o motivo e recebe uma descrição curta, que tenta relacionar com a mercadoria declarada. Sem prática de leitura de radiografia, não consegue avaliar sozinho se a suspeita se sustenta.

**[NOVO [Q7, Q8]: `[F]` As ações formais de que ele dispõe no Siscomex são registrar uma exigência fiscal com motivo e prazo, determinar a verificação física ou desembaraçar a declaração (C02). `[?]` Enquanto não decide, a carga permanece retida no terminal por prazo que ainda não foi apurado para Santos (H08).]** Na dúvida, determina a verificação física. **[NOVO [Q10]: `[H]` Ao justificar o ato no Siscomex, escreve o motivo com as próprias palavras, a partir do relato que recebeu, porque a análise da imagem não estaria vinculada à declaração; `[?]` se esse vínculo existe hoje é pergunta em aberto.]**

A verificação não encontra irregularidade, a carga é liberada com atraso, e quem analisou a imagem não fica sabendo do resultado. **[NOVO [Q10]: `[F]` A decisão fica registrada no Siscomex (C02) e há referência histórica de guarda das imagens por 90 dias na COV (A Tribuna, 2013), mas `[H]` nada vincula a imagem ao resultado da verificação física para permitir a avaliação do acerto por quem originou o alerta `[?]` (?08).]**

A base de cada trecho novo está na tabela da seção 2, na questão indicada entre colchetes (`[Q1]` a `[Q10]`), com `[F]`, `[H]` ou `[?]`.

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| Ambiente/contexto | Alfândega do Porto de Santos; equipe de despacho (Edaim) e equipe de vigilância (Eqvig) alocadas em divisões diferentes `[F]`; funcionamento atual da COV em aberto `[?]`; carga retida no terminal aguardando decisão por tempo ainda não apurado em Santos `[?, H08]`. |
| Atores | Dr. Eduardo Resende, Auditor-Fiscal responsável pelo despacho de importação (P02) `[F, H]`; servidor da vigilância que analisou a imagem e bloqueou a carga `[F, ?]`; importador que aguarda a liberação. |
| Objetivos | Decidir sobre a carga bloqueada com convicção suficiente para sustentar o ato administrativo e formalizá-lo com justificativa no Siscomex `[F, H06]`. |
| Planejamento | Consulta à declaração, ao dossiê de documentos e aos dados da mercadoria e do importador no Siscomex `[F]`; necessidade de localizar a imagem radiográfica fora do Siscomex `[H, ?]` e de obter o relato de quem efetuou o bloqueio para planejar o confronto documental (H11). |
| Ações | Abrir e ler a declaração e o dossiê; procurar o autor do bloqueio para obter o motivo; tentar confrontar o relato com a mercadoria declarada; escolher entre exigência fiscal, verificação física ou desembaraço `[F]`; redigir manualmente o motivo do ato no Siscomex `[H]`. |
| Eventos | Recebimento de declaração bloqueada por suspeita em imagem de escâner `[H]`; comunicação da suspeita entre vigilância e despacho sem detalhamento visual anexo `[H, ?08]`; realização da verificação física sem constatação de irregularidade e liberação da carga com atraso `[H]`. |
| Avaliação | Dificuldade de avaliar a procedência da suspeita sem ver a região indicada e sem prática de leitura radiográfica `[H]`; decisão formalizada sem vínculo direto com a evidência visual `[H, ?]`; ausência de retorno sobre o resultado da verificação física a quem analisou a imagem na vigilância `[H, ?08]`. |

### 5. Implicações para as próximas entregas

Tarefas que merecem análise na Entrega 5:

- entender por que uma carga foi bloqueada a partir da imagem;
- confrontar o que a imagem indica com o que a declaração descreve;
- decidir e formalizar o ato com motivo.

Informações a coletar na Entrega 7:

- como a suspeita passa da vigilância para o despacho em Santos (Q4, ?08);
- se o auditor do despacho abre a imagem e como (Q5);
- que ato é usado quando a suspeita vem da imagem (Q7);
- tempo de retenção e volume de casos (Q8, Q9);
- se existe retorno a quem analisou a imagem (Q10);
- se a COV funciona hoje como descrito em 2013 e que cargo analisa as imagens (Q1).

---

## Cenário C03 — Inspeção Física no Pátio Ineficiente por Falta de Detalhamento Espacial e Visual da Anomalia em Cargas de Alto Risco

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6  
**Persona(s) relacionada(s):** P03 – Marcos Oliveira (Agente de Campo / Fiscal de Pátio e Vistoria Física)  
**Necessidade relacionada:** R01 (Orientação precisa para verificação física no pátio através de mapa residual e coordenadas)  
**Situação concreta da Entrega 1 relacionada:** Seção 4.4 / H28 (Emissão e consulta de relatórios/laudos de instrução para vistorias) e H42 (Atuação e tomada de decisão do agente de pátio)  
**Hipóteses ainda presentes:** H12, H28, H31, H37, H42  

### 1. Cenário inicial

Durante o turno da noite no Porto de Imbituba, o agente de campo Marcos Oliveira (P03) recebe uma ordem de verificação física para um contêiner refrigerado (*reefer*) mantido em retenção. O laudo anexado ao processo eletrônico indica apenas "Inconsistência de densidade detectada na imagem de raio-X", sem especificar a Região de Interesse (ROI), a profundidade ou a natureza do desvio.

Marcos desloca-se até o pátio sob iluminação artificial precária e ruído intenso de maquinário pesado. Acompanhado pela equipe de apoio, ele precisa romper os lacres e descarregar manualmente dezenas de caixas de carne congelada na tentativa de localizar o ponto de suspeita apontado pela análise inicial. Sem um documento visual ilustrativo ou um gabarito explicativo de coordenadas, a equipe gasta mais de três horas esvaziando dois terços do contêiner para constatar que a alteração de densidade tratava-se de um adensamento de gelo acumulado no compressor interno do sistema de refrigeração (falso positivo).

O processo estende o tempo de permanência da carga no pátio, gera atrito com o operador logístico devido ao risco de deterioração do produto e expõe a equipe de vistoria a esforço físico desnecessário. Marcos registra a liberação no terminal móvel, lamentando a falta de um documento visual instrucional que identificasse a coordenada exata e o tipo de anomalia identificada durante a triagem.

---

### 2. Questões de refinamento

As perguntas foram formuladas com base na taxonomia de refinamento de cenários (questões exploratórias, de verificação e por quê/como) para detalhar os elementos de ambiente, ator, ações e planejamento:

| # | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|
| Q1 | Quais condições operacionais do ambiente de pátio afetam a leitura do laudo pelo agente? | Para entender as limitações físicas (iluminação, dispositivos, EPIs) enfrentadas na ponta durante a consulta do laudo. | Entrevista contextual / observação de campo com agentes de vistoria no porto. |
| Q2 | Como a equipe de pátio decide por onde começar a descaltagem da carga quando o relatório é omisso? | Para identificar os heurísticos empíricos e os riscos operacionais assumidos ao adivinhar a posição da anomalia. | Análise de procedimento operacional padrão (POP) de vistoria física e histórico de incidentes. |
| Q3 | Qual o impacto temporal e econômico exato de um falso positivo não esclarecido previamente? | Para quantificar o custo da ruptura no processo de trabalho e justificar a necessidade de explicar os níveis de incerteza da análise. | Dados de tempo médio de atendimento (TMA) do terminal e registros de vistorias desnecessárias. |

---

### 3. Cenário refinado

Durante o turno da noite no Porto de Imbituba, sob chuva fina, vento forte e iluminação artificial precária, o agente de campo Marcos Oliveira (P03) recebe uma ordem de verificação física para um contêiner refrigerado (*reefer*) retido em canal vermelho. **[NOVO: Marcos consulta a ordem de serviço em seu terminal móvel industrial com tela de baixa resolução sob luz refletida, encontrando apenas a mensagem genérica "Inconsistência de densidade detectada na imagem de raio-X", sem qualquer anexo gráfico, marcação de quadrante (porta, meio ou fundo) ou indicação de probabilidade de risco.]**

Marcos desloca-se até o setor de vistorias, onde o ruído de empilhadeiras e reach stackers impede a comunicação clara sem o uso de rádio. Acompanhado pela equipe de apoio de movimentação física, **[NOVO: por não saber em qual seção a anomalia se encontra, Marcos adota o procedimento padrão empírico de esvaziar o contêiner a partir da porta frontal.]** A equipe rompe os lacres e descarregar manualmente dezenas de caixas de carne congelada a -18 °C. 

Sem o mapa residual visual ou o gabarito explicativo de ROI (Região de Interesse), a equipe gasta mais de três horas esvaziando dois terços do contêiner **[NOVO: manipulando cerca de 12 toneladas de carga em ambiente de extrema fadiga física]** para constatar que a alteração de densidade tratava-se de um adensamento de gelo acumulado no compressor interno do sistema de refrigeração. **[NOVO: Se a equipe soubesse que a alteração estava na parede do fundo, junto ao motor, a vistoria teria focado apenas no painel técnico externo, sem necessidade de tocar na carga.]**

O processo estende o tempo de permanência da carga no pátio em mais de 180 minutos, gera atrito com o operador logístico devido ao risco de quebra da cadeia de frio e expõe a equipe de vistoria a esforço físico e riscos de lesão desnecessários. Marcos registra a liberação no terminal móvel, lamentando a falta de um laudo instrucional detalhado com o mapa de divergências radiográficas.

---

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| **Ator(es)** | Marcos Oliveira (P03 - Agente de campo) e equipe de apoio de movimentação física de pátio. |
| **Objetivo(s)** | Localizar e inspecionar a suspeita de anomalia no contêiner com precisão, agilidade e segurança, validando a infração ou liberando a carga sem danos. |
| **Contexto** | Pátio portuário noturno, chuva fina, ruído alto de maquinário, restrições térmicas (-18 °C na carga) e uso de terminal móvel industrial sob iluminação deficiente. |
| **Recursos/informações** | Ordem de serviço no terminal móvel com texto vago ("Inconsistência de densidade"); ausência de laudo visual com mapa residual, marcação de ROI ou profundidade. |
| **Ações** | Consulta à ordem de serviço; deslocamento ao pátio; descaltagem e esvaziamento manual sistemático a partir da porta; inspeção visual das caixas; constatação do falso positivo; registro de liberação no terminal. |
| **Problemas/rupturas** | Omissão de coordenadas e mapa visual no laudo recebido; descarregamento manual cego de 12 toneladas de carga; incapacidade de distinguir falha estrutural do contêiner (compressor) de ilícitos na carga. |
| **Consequências** | Atraso de mais de 3 horas na liberação do contêiner; exposição do agente a fadiga e riscos físicos; risco de deterioração da carga refrigerada; atrito com operadores logísticos. |

---

### 5. Implicações para as próximas entregas

* **Análise de Tarefas:** Mapear minuciosamente o fluxo de trabalho do agente de pátio, identificando os pontos em que a tomada de decisão depende da visualização do espaço tridimensional do contêiner.
* **Mapeamento de Informações:** Levantar quais dados visuais (ex: mapa de calor residual, caixas de delimitação de ROI, identificação de setor anterior/posterior) e metadados (grau de incerteza da IA, tipo de material provável) precisam compor o artefato/laudo gerado na etapa de análise para instruir a ponta.
* **Requisitos de Usabilidade em Campo:** Coletar requisitos sobre como as informações de inspeção precisam ser apresentadas para rápida leitura sob condições ambientais adversas (telas pequenas, alta luminosidade/escuridão, operação com luvas).

---

## Referências

Fontes do cenário CP01:

- BRASIL. Receita Federal. **Portaria RFB nº 143, de 11 de fevereiro de 2022**. Art. 14, sobre equipamentos de inspeção não invasiva e transmissão das imagens à RFB.
- BRASIL. Receita Federal. Alfândega em Florianópolis. **Portaria ALF/FNS nº 9, de 22 de agosto de 2024**. Arts. 3º, 5º e 8º. Norma de uma unidade (Imbituba), e não regra nacional.
- BRASIL. Receita Federal. Coordenação-Geral de Administração Aduaneira. **Ato Declaratório Executivo Coana nº 19, de 6 de outubro de 2014**. Item 1.2.8, sobre funções do software de análise de imagem do escâner. As três normas foram lidas na reprodução do site normasbrasil.com.br, e não no Diário Oficial da União (ver [Entrega 3](03_personas_contexto_jornada.md#referências)).
- Análises C02 e C03 da [Entrega 2](02_analise_concorrencia.md).
- BARBOSA, Simone D. J.; SILVA, Bruno S. **Interação Humano-Computador**. Elsevier/Campus. Estrutura de cenário (título, objetivo, contexto, recursos, atores, episódios).

Fontes do cenário CP02:

- A TRIBUNA. **Novo sistema de fiscalização deve agilizar os processos de liberação de cargas**. Santos, 2013. Lida em reprodução de terceiros: https://contadores.cnt.br/projetos/48/noticias/tecnicas/2013/12/04/novo-sistema-de-fiscalizacao-deve-agilizar-os-processos-de-liberacao-de-cargas.html. Acesso em: 08/10/2026.
- A TRIBUNA. **Tecnologia adotada no Porto de Santos afasta quadrilhas**. Santos, 24/06/2015. Lida em reprodução no site do Setcesp: https://setcesp.org.br/noticias/tecnologia-adotada-no-porto-de-santos-afasta-quadrilhas/. Acesso em: 08/10/2026.
- BRASIL. Receita Federal. Alfândega do Porto de Santos. **Portaria ALF/STS nº 197, de 24 de setembro de 2025**. Altera a Portaria ALF/STS nº 7, de 28 de janeiro de 2021, sobre a organização interna da Alfândega. Lida em https://www.normasbrasil.com.br/norma/portaria-197-2025_483927.html, e não no Diário Oficial da União. Acesso em: 08/10/2026.
- Manual de Despacho de Importação, Portaria ALF/FNS nº 9/2024 e ADE Coana nº 19/2014: referências completas nas Entregas 2 e 3.

As duas matérias são de jornal e têm mais de dez anos. Sustentam o que se dizia sobre Santos em 2013 e 2015, e não o funcionamento atual.

Fontes do cenário C03:

- BRASIL. Presidência da República. **Decreto nº 6.759, de 5 de fevereiro de 2009** (Regulamento Aduaneiro). Disposições sobre a conferência física e fiscalização aduaneira de mercadorias.
- BRASIL. Receita Federal. **Manual de Despacho de Importação (MDI)**. Diretrizes sobre canais de parametrização e verificação física.
- GAIKWAD, B.; PATRA, A.; CRAWFORD, C. R.; MILLER, E. L. **Self-supervised anomaly detection and localization for X-ray cargo images: generalization to novel anomalies**. *Engineering Applications of Artificial Intelligence*, 2025.
- Entregas 1, 2 e 3 do projeto de IHC (especificamente as hipóteses H28, H42 e a caracterização da persona P03).

## Checklist

- [x] Há um cenário completo por integrante.
- [x] Cada cenário tem título, ator, objetivo, contexto e problema.
- [x] O cenário possui origem rastreável na Entrega 1 ou justifica claramente a inclusão de uma nova situação.
- [x] O texto descreve a situação atual, sem antecipar a solução.
- [x] Para TCC sem interface original, o cenário descreve uma prática humana plausível relacionada à contribuição técnica, e não “a falta de uma tela”.
- [x] Questões de refinamento acrescentam informação nova.
- [x] O refinamento mostra claramente o que foi adicionado/alterado.
- [x] Cenários são diferentes o suficiente para cobrir objetivos/problemas relevantes.
- [x] Cada cenário está ligado a persona/necessidade na matriz de rastreabilidade.

