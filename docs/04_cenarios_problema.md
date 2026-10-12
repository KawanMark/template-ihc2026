# Entrega 4 — Cenários de análise/problema

**Data:** 08/10/2026  
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

Os cenários usam o prefixo `CP`, conforme a convenção de identificadores de [`../RASTREABILIDADE.md`](../RASTREABILIDADE.md), porque `C` designa os concorrentes da Entrega 2. O número acompanha a ordem dos autores na equipe.

## Cenário CP01 — {{título}}

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5  
**Persona(s) relacionada(s):** {{P01}}  
**Necessidade relacionada:** {{R01}}  
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

> O checklist fica em aberto enquanto CP01 e CP03 não forem preenchidos. CP02 já atende aos itens que dependem de um único cenário.
