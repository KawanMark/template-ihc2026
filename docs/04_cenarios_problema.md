# Entrega 4 — Cenários de análise/problema

**Data:** 09/10/2026  
**Status:** 🟨 em andamento  
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

### Convenções usadas nesta entrega

- **Identificador:** os cenários de problema usam `CP` (CP01, CP02...), conforme a [convenção de identificadores](../RASTREABILIDADE.md#convenção-de-identificadores). O prefixo `C` é dos concorrentes (Entrega 2).
- **Marcação de evidência:** `[F]` fato com fonte, `[H]` hipótese, `[?]` lacuna, como nas Entregas 1 e 3.
- **Marcação do refinamento:** o que o refinamento acrescenta aparece como `**[NOVO: ...]**`.
- **Taxonomia das questões:** cada questão é classificada por um tipo, que corresponde aos elementos de um cenário (ator, objetivo, contexto, recursos, ações, rupturas, consequências). Esses são os mesmos elementos extraídos na seção 4. A classificação foi adotada pela equipe a partir da estrutura de cenário de Barbosa e Silva (título, objetivo, contexto, recursos, atores e episódios). Não houve ainda um valor oficial da disciplina para ela.

---

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

Gustavo Onofre opera a estação de imagem de raio-X de um terminal portuário. **[NOVO: [F] Na unidade usada como referência (Portaria ALF/FNS nº 9/2024, Imbituba), o escâner é operado por operadores designados pelo recinto alfandegado, e não por servidores da Receita Federal. [H] Este cenário adota esse modelo, sem afirmar que vale para outros terminais. [?] Ainda não sabemos em qual modelo Gustavo estaria nem que cargo da RFB examina as imagens (H01, H39).]** Está no meio de um plantão noturno e, por volta das três da manhã, já examinou centenas de imagens de contêineres e caminhões que passaram pelo escâner. **[NOVO: [?] Não sabemos se o turno, a escala e o volume são esses (H13, H16); a hora e o cansaço são suposições do cenário exploratório.]** A cada imagem, ele tem poucos segundos para decidir se há alguma coisa ali que justifique desconfiar da carga. Faz isso olhando a imagem no software do fabricante do escâner, **[NOVO: [F] em um monitor dedicado de 22" a 24" (C03). [F] O software oferece zoom, inversão, realce de contornos, colorização por densidades, brilho, contraste e equalização (ADE Coana nº 19/2014, item 1.2.8) e, nos produtos analisados, comparação com dados do manifesto e anotações sobre a imagem (C03).]** que oferece cores por tipo de material, realce de bordas e ajuste de contraste, mas não diz por onde começar a olhar. **[NOVO: [H] As imagens chegam conforme os veículos passam pelo escâner e são vistas na ordem de chegada. [F] As imagens são transmitidas em tempo real à unidade da RFB (Portaria RFB nº 143/2022, art. 14), de modo que Gustavo não é o único que pode vê-las. [?] Não sabemos se existe fila nem quem controla a ordem (H04, H41).]**

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

> Os demais cenários (CP02, CP03...) são acrescentados com autoria individual.

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

## Referências

- BRASIL. Receita Federal. **Portaria RFB nº 143, de 11 de fevereiro de 2022**. Art. 14, sobre equipamentos de inspeção não invasiva e transmissão das imagens à RFB.
- BRASIL. Receita Federal. Alfândega em Florianópolis. **Portaria ALF/FNS nº 9, de 22 de agosto de 2024**. Arts. 3º, 5º e 8º. Norma de uma unidade (Imbituba), e não regra nacional.
- BRASIL. Receita Federal. Coordenação-Geral de Administração Aduaneira. **Ato Declaratório Executivo Coana nº 19, de 6 de outubro de 2014**. Item 1.2.8, sobre funções do software de análise de imagem do escâner. As três normas foram lidas na reprodução do site normasbrasil.com.br, e não no Diário Oficial da União (ver [Entrega 3](03_personas_contexto_jornada.md#referências)).
- Análises C02 e C03 da [Entrega 2](02_analise_concorrencia.md).
- BARBOSA, Simone D. J.; SILVA, Bruno S. **Interação Humano-Computador**. Elsevier/Campus. Estrutura de cenário (título, objetivo, contexto, recursos, atores, episódios).
