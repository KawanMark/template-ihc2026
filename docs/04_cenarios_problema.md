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

Convenções desta seção: `[F]` fato com fonte, `[H]` hipótese, `[?]` lacuna, e `**[NOVO: ...]**` para o que o refinamento acrescenta. Cada questão traz um **Tipo**, que segue os elementos de um cenário (ator, objetivo, contexto, recursos, ações, rupturas, consequências), os mesmos extraídos na seção 4. A classificação foi adotada pela equipe a partir da estrutura de cenário de Barbosa e Silva (título, objetivo, contexto, recursos, atores e episódios) e ainda não é a taxonomia oficial da disciplina.

As perguntas revelam informações ausentes do cenário inicial. As respostas vêm de documentos e de fontes já analisadas nas Entregas 1 a 3. Nenhum profissional foi ouvido, por isso o que não tem fonte permanece `[H]` ou `[?]` e segue para a Entrega 7.

| # | Tipo | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|---|
| Q1 | Ator | Quem é Gustavo em termos institucionais: servidor da Receita Federal ou operador designado pelo recinto? O que ele pode fazer quando desconfia de uma carga? | O cenário inicial não diz se ele decide ou só aponta, e isso muda o que “deixar o caso seguir” significa e quem responde por ele. | Documentos: Portaria ALF/FNS nº 9/2024 (arts. 3º e 8º), Portaria RFB nº 143/2022 (art. 14). Entrevista na Entrega 7 (H01, H39). |
| Q2 | Recursos | Que ferramentas e informações Gustavo realmente tem para examinar a imagem e conferi-la com a carga? | O cenário cita cores, bordas e contraste, mas não diz o que mais está à disposição, nem o que a declaração da carga lhe informa. | Análise C03 da Entrega 2 e ADE Coana nº 19/2014, item 1.2.8. Entrevista para o restante (H11). |
| Q3 | Contexto | Como as imagens chegam à estação e quem define a ordem em que Gustavo as examina? | A pressão do cenário depende de haver fila, de a ordem ser a de chegada ou de ele poder alterá-la. | Portaria RFB nº 143/2022 (art. 14) e C03 para o fluxo. Entrevista ou observação para a ordem (H04, H41). |
| Q4 | Contexto | Em que condições de turno e de sala o exame acontece? | “Plantão noturno”, cansaço e ambiente são suposições do cenário original e influenciam o tipo de ruptura. | Portaria ALF/FNS nº 9/2024 (art. 3º) para a sala. Entrevista, fotos ou material institucional para turnos, iluminação e ruído (H14, H16). |
| Q5 | Ações | O que Gustavo pode fazer, na prática, quando fica em dúvida, além de decidir sozinho em poucos segundos? | O cenário inicial só prevê “apontar” ou “deixar seguir”. Falta saber que outros caminhos existem e o que cada um desencadeia. | Portaria ALF/FNS nº 9/2024 (art. 8º). Entrevista para práticas informais, como pedir segunda opinião (H12). |
| Q6 | Consequências | O que acontece com a carga e com o fluxo quando ele aponta a suspeita? E quando ele não aponta? | O custo de errar para cada lado é o que dá peso à dúvida e não aparece no cenário inicial. | Portaria ALF/FNS nº 9/2024 (art. 8º), C02 (redirecionamento de canal e desembaraço). Custos para o terminal: sem fonte (H12, ?08). |
| Q7 | Consequências | Gustavo fica sabendo, depois, o que foi encontrado na carga que ele apontou ou deixou de apontar? | O cenário inicial termina sem retorno. É preciso saber se isso é característica do trabalho ou algo que o texto assumiu. | Portaria ALF/FNS nº 9/2024 (art. 5º) para o que fica guardado. Entrevista sobre retorno de desfecho (H38, ?08). |

### 3. Cenário refinado

Gustavo Onofre opera a estação de imagem de raio-X de um terminal portuário. **[NOVO: [F] Na unidade usada como referência (Portaria ALF/FNS nº 9/2024, Imbituba), o escâner é operado por operadores designados pelo recinto alfandegado, e não por servidores da Receita Federal. [H] Este cenário adota esse modelo, sem afirmar que vale para outros terminais. Em Santos há indício de outro modelo, com a imagem analisada por servidores da vigilância da RFB em uma central (CP02). [?] Ainda não sabemos em qual modelo Gustavo estaria nem que cargo da RFB examina as imagens (H01, H39).]** Está no meio de um plantão noturno e, por volta das três da manhã, já examinou centenas de imagens de contêineres e caminhões que passaram pelo escâner. **[NOVO: [?] Não sabemos se o turno, a escala e o volume são esses (H13, H16); a hora e o cansaço são suposições do cenário exploratório.]** A cada imagem, ele tem poucos segundos para decidir se há alguma coisa ali que justifique desconfiar da carga. Faz isso olhando a imagem no software do fabricante do escâner, **[NOVO: [F] em um monitor dedicado de 22" a 24" (C03). [F] O software oferece zoom, inversão, realce de contornos, colorização por densidades, brilho, contraste e equalização (ADE Coana nº 19/2014, item 1.2.8) e, nos produtos analisados, comparação com dados do manifesto e anotações sobre a imagem (C03).]** que oferece cores por tipo de material, realce de bordas e ajuste de contraste, mas não diz por onde começar a olhar. **[NOVO: [H] As imagens chegam conforme os veículos passam pelo escâner e são vistas na ordem de chegada. [F] As imagens são transmitidas em tempo real à unidade da RFB (Portaria RFB nº 143/2022, art. 14), de modo que Gustavo não é o único que pode vê-las. [?] Não sabemos se existe fila nem quem controla a ordem (H04, H41).]**

Chega a imagem de um contêiner declarado como carregado de paletes de madeira. A imagem é densa, com muitos objetos sobrepostos. Em uma região, o material parece um pouco mais denso que no restante, mas a diferença é pequena e Gustavo já viu variações assim em cargas de madeira que eram regulares. Ele ajusta o contraste, liga o realce de bordas, volta à imagem original e tenta lembrar o que a carga deveria ser. **[NOVO: [H] Ele confere a imagem com a descrição da carga na declaração. [?] Não sabemos que informações da declaração ele tem diante dos olhos nesse momento, nem se precisa buscá-las em outro lugar (H11).]** Os caminhões seguintes já esperam e a próxima imagem está pronta. Cansado, ele não consegue afirmar se aquela região faz parte da carga ou se há algo escondido ali. **[NOVO: Gustavo tem duas saídas e nenhuma é sem custo. [F] Se desconfiar, comunica a suspeita à RFB, o que interrompe o fluxo daquele veículo, e a carga fica retida e segregada até a manifestação da RFB. Sem manifestação nem bloqueio no Siscomex Carga em 3 dias úteis, a carga segue (Portaria ALF/FNS nº 9/2024, art. 8º). [H] Se comunicar sem base suficiente, ele retém uma carga regular e gera atrito com quem espera pela liberação (H12). [H] Se deixar seguir e houver algo escondido, a carga entra no país sem que ninguém tenha visto (H12). [H] Pedir a opinião de um colega é uma possibilidade plausível, mas não há fonte sobre essa prática na unidade.]**

Gustavo conclui que não tem motivo suficiente para apontar uma suspeita e deixa o caso seguir. Ele não sabe se acertou. No resto do plantão, não terá como descobrir o que havia naquela região. **[NOVO: [F] As imagens ficam disponíveis por 180 dias e podem ser buscadas por unidade de carga, data, hora ou placa (Portaria ALF/FNS nº 9/2024, art. 5º). Isso permite rever a imagem, mas não mostra o que a verificação da carga encontrou. [?] Não sabemos se quem examina a imagem recebe algum retorno sobre os casos que apontou ou deixou de apontar (H38, ?08). [H] Sem retorno, ele não aprende com o resultado e o próximo caso parecido recomeça do mesmo ponto.]**

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| Ator(es) | Gustavo Onofre, operador da estação de imagem (P01). Quem recebe a suspeita: a RFB, que se manifesta sobre a carga [F]. Quem espera a liberação: caminhões e quem os acompanha [H]. O papel institucional de Gustavo está aberto (H01, H39). |
| Objetivo(s) | Chegar a uma conclusão confiável sobre o contêiner e deixá-la defensável, sob incerteza (H38): entender se a região diferente faz parte da carga declarada ou se há algo escondido. |
| Contexto | Estação com monitor dedicado de 22" a 24" [F]; plantão noturno, cansaço e pressão de tempo [H, H13]; carga declarada como paletes de madeira; fluxo contínuo de veículos a examinar [H]. |
| Recursos/informações | Imagem radiográfica; pseudo-cor por material, realce de bordas, contraste e equalização [F]; descrição da carga na declaração [H, H11]; imagens guardadas por 180 dias [F]. Nenhum recurso que indique por onde começar a olhar. |
| Ações | Examina a imagem; ajusta contraste e realce; compara com o que a carga deveria ser; decide entre apontar suspeita ou deixar o caso seguir; passa à imagem seguinte. |
| Problemas/rupturas | Imagem densa e sobreposta (H10); diferença sutil que não permite concluir; cansaço (H13); dúvida decidida em segundos, sob pressão do que vem depois; ausência de retorno sobre o resultado. |
| Consequências | [H] Falso negativo: carga com algo escondido segue sem ser apontada. [H] Falso positivo: carga regular retida, com atrito. [F] A suspeita comunicada interrompe o veículo e retém a carga até a manifestação da RFB ou 3 dias úteis. [?] O que acontece com a dúvida de Gustavo depois: sem retorno conhecido. |

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

As questões seguem o modelo das perguntas de cenário visto em aula (quem, onde, como, que informações, com que frequência). Só documentos e normas foram usados nas respostas. O que não tem fonte fica como `[?]`.

| # | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|
| Q1 | Quem analisa as imagens de escâner em Santos, e onde? | Define quem origina o apontamento que chega a P02. | `[F]` A Tribuna, 2013 e 2015: as imagens são analisadas na Central de Operações e Vigilância (COV), na sede da Alfândega, por servidores da Receita em plantão de 24 horas. `[F]` Portaria ALF/STS nº 197/2025, art. 34: a vigilância remota e a verificação do uso de inspeção não invasiva competem à Equipe de Vigilância e Plantão (Eqvig). `[?]` Cargo desses servidores e se a COV funciona hoje como em 2013. |
| Q2 | Quem pode bloquear ou liberar a carga a partir da imagem? | Separa o bloqueio operacional da decisão formal do despacho (H39). | `[F]` A Tribuna, 2013: os servidores da COV podem consultar os sistemas da Receita e liberar ou bloquear cargas de importação e exportação. `[?]` Em que sistema o bloqueio é feito. |
| Q3 | Quem decide o despacho, e a que equipe pertence? | Confirma o papel de P02 e a distância organizacional entre ele e quem viu a imagem. | `[F]` Manual de Despacho de Importação (C02): o Auditor-Fiscal responde pelo desembaraço. `[F]` Portaria ALF/STS nº 197/2025, art. 1º: a Equipe de Despacho Aduaneiro de Importação (Edaim) fica na Divisão de Despacho, e a Eqvig em outra divisão. `[H]` P02 atua na Edaim. |
| Q4 | Como a suspeita chega ao auditor responsável pelo despacho? | É a passagem em que a informação pode se perder. | `[?]` Não encontrado para Santos (lacuna ?08). `[F]` Em Imbituba, o recinto comunica a suspeita à RFB com interrupção do fluxo (Portaria ALF/FNS nº 9/2024, art. 8º), o que vale para uma unidade. Investigar na Entrega 7. |
| Q5 | O auditor do despacho tem acesso à imagem do escâner? | Decide se ele julga a evidência ou só o relato de outra pessoa. | `[F]` A Tribuna, 2013, fala do inspetor: o servidor responsável pelo despacho precisa ter convicção para liberar, e "algumas vezes, apenas a imagem do escâner pode ser suficiente". `[F]` A norma nacional prevê software de análise em estações de trabalho da RFB (ADE Coana nº 19/2014). `[?]` Onde e como o auditor acessa a imagem, e se sabe interpretá-la. |
| Q6 | Que informações da declaração ele confronta com a imagem? | Define o que precisa estar à mão no momento da decisão (H11). | `[F]` C02: o despacho se apoia no dossiê de documentos, e a seleção do canal considera natureza e características da mercadoria, origem e habitualidade do importador. `[?]` Quais desses dados o auditor de fato usa diante de uma suspeita de imagem. |
| Q7 | Que atos ele pode praticar depois de avaliar a suspeita? | Delimita as saídas possíveis da decisão (H06). | `[F]` C02: exigência fiscal com motivo e prazo, verificação física e desembaraço, e a declaração em canal verde pode ser redirecionada quando há indício de irregularidade. `[F]` A Tribuna, 2013: a conferência física pode ser presencial ou remota, via COV. `[?]` Qual ato é usado quando a origem da suspeita é a imagem. |
| Q8 | Por quanto tempo a carga fica parada enquanto ele decide? | Mostra a pressão de tempo e o custo de uma retenção indevida (H08). | `[?]` Não encontrado para Santos. `[F]` Em Imbituba, a carga segue se a RFB não se manifestar em 3 dias úteis (Portaria ALF/FNS nº 9/2024, art. 8º). |
| Q9 | Com que frequência casos assim chegam ao despacho? | Indica se é rotina ou exceção, o que muda a prioridade da tarefa. | `[F]` A Tribuna, 2015: 16 escâneres nos terminais, e desde setembro de 2013 a Receita determinou a inspeção de todas as cargas de importação no desembarque. `[?]` Quantas imagens viram suspeita e quantas chegam ao despacho. |
| Q10 | O que fica registrado, e quem fica sabendo do desfecho? | Sustenta a rastreabilidade (H17, H32) e mostra se quem analisou a imagem recebe retorno. | `[F]` A Tribuna, 2013: imagens guardadas por 90 dias na COV e dados de controle por cinco anos em Santos. `[F]` C02: a decisão com valor jurídico é registrada no Siscomex. `[?]` Se a suspeita de imagem fica vinculada à declaração e se há retorno a quem a analisou. |

### 3. Cenário refinado

Atores: Dr. Eduardo Resende (Auditor-Fiscal), servidor da vigilância que analisou a imagem, importador.

Dr. Eduardo Resende, Auditor-Fiscal na Alfândega do Porto de Santos, **[NOVO: atua na equipe de despacho de importação, que fica em uma divisão diferente da equipe de vigilância (Q3)]**. Ele recebe uma declaração de importação cuja carga está bloqueada porque a imagem do escâner levantou suspeita. **[NOVO: A imagem foi analisada por um servidor da Receita na central de vigilância da Alfândega, que funciona em plantão e tem poder para bloquear a carga (Q1, Q2). Casos assim podem não ser raros, porque em Santos as cargas de importação passam pelo escâner no desembarque, mas ninguém sabe dizer quantos chegam ao despacho (Q9).]**

Ele precisa decidir o que fazer com essa carga e formalizar a decisão. Abre a declaração no Siscomex e lê o que a mercadoria declara ser, **[NOVO: junto com os documentos do dossiê e o que sabe sobre o importador (Q6)]**. Sabe que existe uma suspeita, mas não sabe o que foi visto na imagem nem em que parte do contêiner. **[NOVO: O bloqueio não chegou a ele acompanhado de uma explicação; como a suspeita passa da vigilância para o despacho é algo que a equipe ainda não conseguiu apurar (Q4).]**

A imagem não está junto da declaração. **[NOVO: Ele pode se apoiar na imagem para formar convicção (Q5). `[H]` A equipe supõe que, para isso, precisa buscá-la fora do Siscomex, em outro sistema: onde e como o auditor acessa a imagem segue sem resposta.]** Ele procura quem fez o bloqueio para entender o motivo e recebe uma descrição curta, que tenta relacionar com a mercadoria declarada. Sem prática de leitura de radiografia, não consegue avaliar sozinho se a suspeita se sustenta.

**[NOVO: As saídas que ele tem são registrar uma exigência fiscal, com motivo e prazo, determinar a verificação física, que pode ser presencial ou remota, ou desembaraçar (Q7). Enquanto não decide, a carga continua parada e o importador aguarda (Q8).]** Na dúvida, determina a verificação física. **[NOVO: `[H]` Ao justificar o ato no Siscomex, escreve o motivo com as próprias palavras, a partir do relato que recebeu, porque a análise da imagem não estaria vinculada à declaração. Se esse vínculo existe é pergunta sem resposta (Q10).]**

A verificação não encontra irregularidade, a carga é liberada com atraso, e quem analisou a imagem não fica sabendo do resultado. **[NOVO: A imagem continua guardada na central por um prazo definido (Q10). `[H]` Nada a liga à decisão que ela motivou.]**

A base de cada trecho novo está na tabela da seção 2, na questão indicada entre parênteses, com `[F]`, `[H]` ou `[?]`. Onde a questão ficou sem resposta, o trecho é suposição da equipe e traz a marca `[H]`.

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| Ator(es) | Dr. Eduardo Resende, Auditor-Fiscal do despacho de importação (P02). Servidor da vigilância que analisou a imagem. Importador, que aguarda a liberação. |
| Objetivo(s) | Decidir sobre a carga bloqueada com base suficiente para sustentar a decisão e formalizá-la com motivo. |
| Contexto | Alfândega do Porto de Santos. Despacho e vigilância em divisões diferentes. Carga parada enquanto a decisão não sai. |
| Recursos/informações | Declaração e dossiê no Siscomex. Imagem do escâner, `[H]` guardada fora do Siscomex (Q5 sem resposta). Relato de quem fez o bloqueio. |
| Ações | Ler a declaração. Procurar o motivo do bloqueio. Buscar a imagem. Confrontar o relato com a mercadoria declarada. Escolher o ato. Registrar a justificativa. |
| Problemas/rupturas | O bloqueio chega sem explicação. `[H]` Imagem e declaração ficam em lugares diferentes. O auditor depende do relato de outra pessoa para entender a evidência. A justificativa é reescrita à mão. Não há retorno a quem analisou a imagem. |
| Consequências | Verificação física pedida por precaução. Atraso na liberação de carga regular. `[H]` Decisão registrada sem vínculo com a evidência que a motivou. |

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

## Cenário CP03 — {{título}}

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6  
**Persona(s) relacionada(s):** {{a definir pela equipe. P03 está fora do recorte enquanto H42 estiver aberta (Entrega 3, Classificação do elenco). Opções compatíveis: outra situação de P01, ou a verificação física como situação atual de um stakeholder, sem supor uso da solução}}  
**Necessidade relacionada:** {{R02 ou outra linha da matriz, conforme a escolha acima}}  
**Situação concreta da Entrega 1 relacionada:** {{seção 4.4 / H01 / outra ou “nova situação justificada”}}  
**Hipóteses ainda presentes:** {{H01, H02 ou —}}

### 1. Cenário inicial

{{narrativa}}

### 2. Questões de refinamento

Use os tipos de questões/taxonomia definidos na aula. As perguntas devem revelar informações **ainda ausentes** do cenário, não repetir o que já foi respondido.

| # | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|
| Q1 | {{...}} | {{...}} | {{...}} |

### 3. Cenário refinado

Reescreva o cenário incorporando as respostas. Marque o conteúdo novo de forma consistente (por exemplo, `**[NOVO: ...]**`).

{{narrativa refinada}}

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| Ator(es) | {{...}} |
| Objetivo(s) | {{...}} |
| Contexto | {{...}} |
| Recursos/informações | {{...}} |
| Ações | {{...}} |
| Problemas/rupturas | {{...}} |
| Consequências | {{...}} |

### 5. Implicações para as próximas entregas

Quais tarefas merecem análise? Quais informações precisam ser coletadas? **Não desenhe a solução ainda.**

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

## Checklist

- [ ] Há um cenário completo por integrante.
- [ ] Cada cenário tem título, ator, objetivo, contexto e problema.
- [ ] O cenário possui origem rastreável na Entrega 1 ou justifica claramente a inclusão de uma nova situação.
- [ ] O texto descreve a situação atual, sem antecipar a solução.
- [ ] Para TCC sem interface original, o cenário descreve uma prática humana plausível relacionada à contribuição técnica, e não “a falta de uma tela”.
- [ ] Questões de refinamento acrescentam informação nova.
- [ ] O refinamento mostra claramente o que foi adicionado/alterado.
- [ ] Cenários são diferentes o suficiente para cobrir objetivos/problemas relevantes.
- [ ] Cada cenário está ligado a persona/necessidade na matriz de rastreabilidade.

> O checklist fica em aberto enquanto CP03 não for preenchido. CP02 já atende aos itens que dependem de um único cenário.

**Verificação específica de CP01:**

- [x] Autoria, persona, necessidade, situação da Entrega 1 e hipóteses estão no cabeçalho.
- [x] O cenário cita a origem em H13 (seção 4.5) e explica por que usa Gustavo e não Carlos.
- [x] O texto não menciona IA, mapa residual, tela, fila priorizada ou outro componente do sistema futuro.
- [x] Descreve uma prática humana atual com as ferramentas dos fabricantes, e não a falta de uma tela.
- [x] As sete questões trazem informação ausente do cenário inicial, com tipo, motivo e fonte.
- [x] Tudo o que o refinamento acrescenta está marcado com `**[NOVO: ...]**` e com `[F]`, `[H]` ou `[?]`.
- [x] Gustavo não decide sozinho a liberação ou retenção (H39).
- [x] A seção 5 lista tarefas candidatas e informações a coletar, sem desenhar solução.
- [x] CP01 está ligado a P01, R01 e A02 na matriz de rastreabilidade.
