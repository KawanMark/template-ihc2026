# Entrega 1 — Conhecendo o projeto, o usuário e o problema

**Data:** 13/08/2026
**Status:** 🟩 em andamento
**Responsabilidade:** 1 solução consolidada por equipe

## Objetivo da atividade

Reinterpretar o tema do TCC sob a perspectiva de Interação Humano-Computador e construir um **entendimento comum entre os integrantes da equipe**.

A disciplina utiliza preferencialmente o tema do TCC para os exercícios de IHC. Isso vale tanto para TCCs que já preveem uma interface quanto para trabalhos cujo resultado principal é algoritmo, modelo, API, biblioteca, análise de dados, infraestrutura, estudo experimental ou outro artefato técnico.

> **Importante:** a interface projetada na disciplina é um artefato de aprendizagem de IHC. Ela **não se torna automaticamente uma obrigação do TCC**. Sua incorporação ao trabalho de conclusão depende de decisão da equipe e do orientador.

Antes de preencher, leia [`../GUIA_ESCOPO_IHC.md`](../GUIA_ESCOPO_IHC.md).

Nesta primeira semana a equipe **não deve começar desenhando telas**. Primeiro deverá compreender:

- o que o TCC realmente produz;
- quem poderia obter valor dessa contribuição;
- quais pessoas interagem, administram, configuram, interpretam ou são afetadas;
- o que essas pessoas precisam alcançar;
- como atividades relacionadas acontecem hoje;
- problemas, limitações e contexto;
- alternativas existentes;
- qual recorte de interação fará sentido para a disciplina.

Ao final desta entrega, a equipe deve diferenciar:

- **tema do TCC** × **escopo formal do TCC** × **escopo de IHC da disciplina**;
- **objetivo do projeto** × **objetivo do usuário**;
- **problema do usuário** × **solução tecnológica**;
- **fato conhecido** × **hipótese** × **lacuna de conhecimento**;
- **capacidade técnica** × **forma de uso dessa capacidade**;
- **funcionalidade** × **atividade/resultado que o usuário precisa alcançar**;
- **usuário direto** × **stakeholders**.

---

## Como classificar as respostas

Sempre que a resposta fizer uma afirmação sobre usuários, problemas, atividades, necessidades, contexto ou mercado, use:

- **[F] Fato conhecido** — existe evidência/fonte.
- **[H] Hipótese** — afirmação plausível que ainda precisa ser investigada.
- **[?] Não sabemos ainda** — lacuna relevante.

Quando usar `[F]`, informe a origem. Hipóteses prioritárias devem receber IDs (`H01`, `H02`...) e também ser registradas em [`../RASTREABILIDADE.md`](../RASTREABILIDADE.md).

> **Exemplo:** `[H] H01 — DBAs considerariam útil comparar automaticamente o plano atual de execução com uma recomendação produzida pelo algoritmo.`

Uma hipótese explicitada é melhor do que uma suposição escondida.

---

# 0. Identificação do TCC e da equipe

## 0.1 Membros

| Nome completo                |   Matrícula | GitHub                       |
| ---------------------------- | -----------: | ---------------------------- |
| Kawan Mark Geronimo Da Silva | 22.222.010-5 | https://github.com/KawanMark |
| Gabriel Albertini Pinheiro   | 22.122.094-8 | https://github.com/albertx0  |
| Alexandre Domiciano Pierri   | 22.125.061-6 | https://github.com/Apierri05 |

## 0.2 Título atual do TCC

Detecção de Anomalias em Imagens de Raio-X de Contêineres de Carga

> ## 0.3 Orientador(a):

Murilo Bouzon

## 0.4 Qual é o resultado principal atualmente previsto no TCC?

Marque e descreva:

- [ ] sistema/aplicação interativa;
- [X] algoritmo;
- [X] modelo de IA/ML/LLM;
- [ ] biblioteca/API/framework;
- [ ] análise de dataset;
- [X] estudo/benchmark/avaliação experimental;
- [ ] infraestrutura/backend;
- [ ] componente embarcado/IoT;
- [ ] outro: {{...}}.

**Descrição:** O TCC desenvolve primariamente um **modelo de IA/ML** baseado em aprendizado (Autoencoder) acompanhado de **algoritmos** de injeção sintética de anomalias e um **estudo experimental/benchmark** avaliando a precisão da detecção em imagens de raio-X de contêineres

## 0.5 O TCC já previa desenvolvimento de interface com usuário?

- [ ] Sim, a interface já faz parte do TCC.
- [ ] Parcialmente; existe alguma interação, mas ainda não está bem definida.
- [X] Não. O TCC é predominantemente técnico e não previa interface.

**Explique o que está formalmente previsto no TCC:** O escopo formal do TCC concentra-se no treinamento e validação de um modelo de aprendizado para detecção de anomalias em imagens radiográficas de contêineres, utilizando datasets públicos e simulação sintética de ameaças, sem prever o desenvolvimento de uma aplicação de interface gráfica.

---

# 1. Entendendo a contribuição do projeto

## 1.1 Explique o TCC em uma frase, sem citar linguagem de programação, framework ou banco de dados.

Um sistema computacional capaz de analisar imagens de raio-x de contêineres de carga para detectar autonomamente mercadorias ilícitas e anomalias ocultas sem depender de exemplos reais prévios de contrabando.

## 1.2 Qual situação, atividade ou problema do mundo real motivou o TCC?

[F] O volume massivo do comércio exterior e a rigorosa regulamentação de segurança tornam a inspeção física de 100% dos contêineres impraticável nos portos (Fonte: Revisão bibliográfica do TCC e relatórios aduaneiros). Isso gera a necessidade de triagem não intrusiva por raio-X, cujas imagens complexas e sobrepostas são difíceis de inspecionar manualmente com precisão.

## 1.3 Qual é a **capacidade/contribuição central** produzida pelo TCC?

> “Nosso TCC produz, melhora, analisa ou permite **detectar e localizar anomalias e riscos em imagens de raio-X de contêineres utilizando aprendizado e geração de imagens residuais**.”

## 1.4 O que se espera que esteja diferente **para pessoas, organizações ou processos** se essa contribuição for bem-sucedida?

[H] Se bem-sucedida, a tecnologia permitirá que alfândegas e operadores portuários triem um volume muito maior de contêineres com maior precisão, reduzindo o tempo de retenção de cargas lícitas e direcionando a inspeção física apenas para contêineres com alta probabilidade de anomalia.

## 1.5 O que é mérito técnico/científico do TCC e o que seria uma possível aplicação prática?

| Mérito/contribuição técnica                                                                                                                                  | Possível aplicação/valor em uso                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Treinamento de Autoencoder autossupervisionado com cargas normais; injeção sintética de anomalias via Lei de Beer-Lambert; segmentação por imagem residual. | Ferramenta de apoio à decisão para operadores de scanners em portos, destacando discrepâncias e priorizando alvos de vistoria. |

---

# 2. Entendendo as pessoas envolvidas

## 2.1 Quem interage diretamente com o produto, se já existe interface prevista?

NÃO SE APLICA AO ESCOPO ORIGINAL (O TCC não prevê interface).

## 2.2 Quem poderia **usar, configurar, administrar, operar, interpretar ou tomar decisões** a partir da contribuição técnica?

| Perfil                                                     | Relação com a contribuição | O que faria                                                                                                                   | Status/evidência |
| ---------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Operador de Scanner de Raio-X / Fiscal Aduaneiro** | Usuário direto operacional    | Visualiza a fila de contêineres triados, analisa mapas residuais de anomalia e decide sobre liberação ou vistoria física. | [H] Hipótese     |
| **Analista de Inteligência Aduaneira**              | Usuário tático               | Consulta relatórios históricos de varreduras, investiga padrões de contrabando e audita decisões anteriores.              | [H] Hipótese     |
| **Administrador / Engenheiro de IA**                 | Configurador técnico          | Ajusta limiares de sensibilidade (*thresholds*) do modelo e monitora a performance do pipeline de IA.                       | [?] Lacuna        |

## 2.3 Existem pessoas afetadas que não usariam a interface diretamente?

| Stakeholder                                               | Como é afetado                                                                           | Usa interface?                          | Status/evidência                |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------- |
| **Empresas Importadoras / Exportadoras**            | Sofrem impacto direto no tempo de liberação e custos logísticos das cargas nos portos. | Não                                    | [F] Fato (operação portuária) |
| **Autoridades de Segurança Pública / Alfândega** | Beneficiam-se da eficácia na interceptação de ilícitos (drogas, armas, contrabando).  | Não (recebem relatórios consolidados) | [H] Hipótese                    |

## 2.4 Que características desses perfis podem influenciar a interação?

[H] Operadores de scanner trabalham sob pressão de tempo severa, em turnos prolongados, sujeitos à fadiga visual. Possuem forte conhecimento prático de leitura radiográfica, mas podem não ter familiaridade com conceitos profundos de aprendizado de máquina (exigem explicações visuais claras e diretas, como heatmaps e scores de risco, em vez de métricas matemáticas complexas).

---

# 3. Entendendo objetivos e atividades

## 3.1 O que o usuário está tentando conseguir no mundo real?

[H] O fiscal aduaneiro tentando garantir a segurança da carga que entra no país e cumprir as metas de liberação alfandegária sem causar gargalos logísticos no porto. Alem do objetivo de bater a meta diária de liberação de contêineres do terminal com segurança jurídica e absoluta certeza de que nenhum ilícito passou despercebido.

## 3.2 Quais são as atividades mais importantes?

| ID  | Atividade/objetivo                                                                          | Quem realiza              | Frequência/criticidade inicial | Status/evidência |
| --- | ------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------- | ----------------- |
| A01 | Triar a fila diária de contêineres escaneados por raio-X                                  | Operador de Scanner       | Alta / Crítica                 | [H] Hipótese     |
| A02 | Inspecionar detalhes de uma anomalia detectada (comparar imagem original com mapa residual) | Fiscal Aduaneiro          | Média / Alta                   | [H] Hipótese     |
| A03 | Registrar o veredito (liberado, suspeito para vistoria física, retenção)                 | Fiscal Aduaneiro          | Alta / Crítica                 | [H] Hipótese     |
| A04 | Consultar histórico de varreduras e laudos anteriores                                      | Analista de Inteligência | Baixa / Média                  | [?] Lacuna        |

## 3.3 Qual atividade parece mais frequente? Por quê?

[H] A atividade A01 (triar a fila de contêineres) e A03 (registrar vereditos), pois todo contêiner escaneado precisa passar por verificação e liberação formal no fluxo portuário.

## 3.4 Qual parece mais crítica? Que consequência existe se for mal executada?

[H] A atividade A03 (tomada de decisão de liberação). Se um contêiner ilícito for liberado por erro de interpretação (falso negativo), há risco de contrabando de armas ou drogas. Se uma carga lícita for retida indevidamente por falso positivo, gera prejuízos financeiros e atrasos logísticos severos.

---

# 4. Entendendo o problema ou processo atual

## 4.1 Como essas atividades são realizadas hoje, antes da interface imaginada na disciplina?

[H] Hoje, operadores utilizam softwares fornecidos pelos fabricantes dos scanners de raio-X, visualizando imagens densas em múltiplos monitores, sem auxílio avançado de IA para destaque de anomalias complexas, baseando-se puramente em inspeção visual humana.

## 4.2 O que é difícil, demorado, confuso, repetitivo, arriscado ou pouco transparente?

[H] A sobreposição visual de mercadorias complexas (diferentes densidades e materiais), a fadiga visual acumulada após horas de plantão examinando imagens, e a dificuldade de detectar anomalias que não correspondem a assinaturas rígidas pré-cadastradas.

## 4.3 Que informações o profissional precisa interpretar para tomar decisão?

[H] Tons indicativos de densidade material (orgânico vs. inorgânico vs. metálico), geometria dos objetos no interior do contêiner, contexto da declaração da carga e alertas de sistemas auxiliares.

## 4.4 O que acontece quando a atividade falha ou quando o resultado é interpretado incorretamente?

[H] Ocorrência de falsos negativos (entrada de ilícitos no país) ou falsos positivos (paralisação de contêineres legítimos, gerando custos de pátio, inspeção física desnecessária e atrito com exportadores).

## 4.5 Conte uma situação concreta.

[H] Carlos, fiscal aduaneiro em um terminal portuário movimentado, inicia seu terceiro turno consecutivo de análise de imagens de raio-X. Às 03:00 da manhã, após centenas de contêineres escaneados, uma densidade levemente atípica camuflada no interior de paletes de madeira passa despercebida na tela devido à exaustão visual, permitindo a passagem de mercadoria não declarada.

## 4.6 Que evidência existe hoje?

| Evidência/fonte                                                                                                         | O que sustenta                                                                                       | Limitação                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Artigo base do TCC (*Self-supervised anomaly detection and localization for x-ray cargo images*, Gaikwad et al., 2024) | Dificuldade da inspeção manual e necessidade de detecção autossupervisionada em raio-X de carga. | Foco estritamente técnico/algorítmico, sem modelagem de experiência do operador. |

---

# 5. Entendendo o contexto de uso

## 5.1 Onde e em quais situações a interação poderia ocorrer?

[H] Em salas de controle de raio-X de portos, armazéns alfandegados ou centros de triagem da Receita Federal, sob alta demanda operacional.

## 5.2 Em quais dispositivos/equipamentos?

[H] Estações de trabalho desktop profissionais com múltiplos monitores de alta resolução e gama dinâmica otimizada para imagens radiográficas.

## 5.3 Existem condições físicas relevantes?

[H] Iluminação ambiente controlada, ruído de equipamentos e sirenes de pátio portuário, interrupções frequentes e intensa pressão temporal.

## 5.4 Existem fatores sociais ou organizacionais?

[H] Hierarquia rígida de fiscalização, responsabilidade legal e criminal associada à liberação de cargas, necessidade de auditoria e registro imutável de quem autorizou cada liberação.

## 5.5 Existe necessidade de histórico, rastreabilidade ou auditoria?

[H] Sim. Toda decisão de liberação ou direcionamento para vistoria deve ser estritamente rastreável para fins legais, investigativos e de conformidade aduaneira.

## 5.6 Um erro pode produzir consequência relevante? Qual?

[H] Sim. Falhas podem resultar em evasão fiscal, entrada de drogas/armas no território nacional (falso negativo) ou prejuízos logísticos internacionais por retenção injustificada de cargas (falso positivo).

---

# 6. Entendendo mercado e alternativas existentes

> Nesta entrega faça apenas um **levantamento inicial**. A análise aprofundada ocorre na Entrega 2.

## 6.1 Como pessoas resolvem problemas semelhantes hoje?

| Alternativa atual                                                      | Quem usa               | Para quê                                                            | Status/evidência   |
| ---------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------- | ------------------- |
| Softwares proprietários dos fabricantes de scanners (ex: Rapiscan OS) | Operadores portuários | Visualizar e ajustar contraste de imagens de raio-X de contêineres. | [F] Fato de mercado |

## 6.2 Existem produtos que atuam na mesma área, mesmo sem serem equivalentes ao TCC?

[H] Sistemas de gerenciamento de carga portuária (TOS - Terminal Operating Systems)

## 6.3 Quais interfaces profissionais esse público já conhece?

[H] Consoles de operação industrial, softwares GIS/monitoramento, painéis de controle com múltiplos filtros, sistemas ERP alfandegários (ex: Siscomex / Portal Único Siscomex).

## 6.4 O que essas soluções parecem fazer bem?

[H] Gerenciamento do fluxo logístico global, controle de manifesto de cargas e exibição básica de imagens de raio-X.

## 6.5 O que parecem fazer mal, dificultar ou não atender?

[H] Falta de inteligência para destacar anomalias invisíveis ao olho humano, interfaces muitas vezes densas, legadas e pouco intuitivas, com alta taxa de falsos alarmes sem explicações claras.

## 6.6 Que padrões de interface ou vocabulário parecem familiares a esse público?

[H] Terminologia aduaneira e portuária (BL, Manifesto, Recinto, Vistoria, Despacho), códigos de risco por cores (verde, amarelo, vermelho) e filas de status.

---

# 7. Derivando o escopo de IHC da disciplina

## 7.1 Escolha o caminho do projeto

### Caminho A — TCC já possui interface

Explique qual parte da interface será usada como recorte da disciplina e por que esse fluxo é relevante.

{{...}}

### Caminho B — TCC não possui interface prevista

Faça o exercício de transferência de uso:

> **Imagine que o TCC foi concluído com sucesso e uma empresa, laboratório ou organização quer transformar a contribuição em algo utilizável. Quem precisaria interagir com ela e para quê?**

1. quem poderia contratar/adotar a solução? Administrações portuárias, operadores logísticos alfandegados e órgãos aduaneiros (ex: Receita Federal).
2. quem seria o usuário direto? Operador de Scanner de Raio-X e Fiscal Aduaneiro.
3. quem administraria/configuraria? Administrador de TI do terminal e Engenheiro de IA.
4. quem interpretaria resultados? Fiscais aduaneiros e analistas de inteligência.
5. quem tomaria decisões? Fiscais aduaneiros responsáveis pela liberação.
6. quais dados/entradas seriam necessários? Imagens de raio-X de transmissão do contêiner e metadados do manifesto de carga.
7. quais resultados deveriam ser compreendidos? Score de anomalia, mapas residuais de discrepância e regiões de alerta (ROI).
8. que erros/rupturas seriam possíveis? Falsos positivos gerando vistoria desnecessária; falsos negativos deixando passar ameaças; falha de carregamento da imagem radiográfica.

## 7.2 Qual perfil será priorizado no projeto de IHC?

**Fiscal Aduaneiro / Operador de Scanner de Raio-X.**
**Por que esse perfil foi escolhido?** É o profissional que lida diretamente com a ponta operacional da triagem de imagens e toma a decisão crítica de liberação ou retenção da carga.

## 7.3 Qual objetivo desse usuário será priorizado?

Analisar os alertas gerados pelo modelo de IA, comparar a imagem original de raio-X com o mapa residual de anomalia e registrar o veredito de liberação ou vistoria física com segurança e agilidade.

## 7.4 Que interface será explorada na disciplina?

> **Para fins da disciplina de IHC, será projetada uma interface que permita ao `Fiscal Aduaneiro` utilizar o `modelo de detecção de anomalias em raio-X` para `triar contêineres suspeitos, inspecionar mapas residuais de discrepância e registrar decisões de liberação ou vistoria`, no contexto de `um terminal portuário alfandegado sob pressão de tempo`.**

## 7.5 Qual é a relação dessa interface com o TCC?

- [ ] Já fazia parte do TCC.
- [ ] É um aprofundamento de algo parcialmente previsto.
- [ ] É uma extensão conceitual criada para a disciplina.
- [X] É um protótipo demonstrativo de aplicação potencial.
- [ ] Outra: {{...}}.

> **Declaração:** a interface desenvolvida nesta disciplina é um artefato de aprendizagem de IHC baseado no tema do TCC. Sua inclusão ou implementação no TCC somente ocorrerá se isso for posteriormente decidido pela equipe e pelo orientador.

---

# 8. Levantando possibilidades de interação — sem desenhar ainda

A equipe pode registrar possibilidades para investigação. **Não significa que todas serão implementadas.**

Marque apenas as que parecem plausíveis e explique o objetivo correspondente.

| Possibilidade                                     | Pode fazer sentido? | Objetivo/tarefa que justificaria                                                    | Evidência atual |
| ------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| **Dashboard/visão geral**                  | Sim                 | Acompanhar o fluxo diário de contêineres escaneados e status de triagem           | [H]              |
| **Configuração/parametrização**         | Talvez              | Ajustar sensibilidade de detecção da IA pelo operador sênior                     | [?]              |
| **Entrada/upload/seleção de dados**       | Sim                 | Carregar novas imagens de raio-X e metadados do contêiner                          | [H]              |
| **Acompanhamento de processamento**         | Sim                 | Acompanhar o status da inferência do Autoencoder na imagem radiográfica           | [H]              |
| **Relatório/resultados**                   | Sim                 | Exportar laudos de inspeção e estatísticas operacionais                          | [H]              |
| **Histórico com busca/filtros**            | Sim                 | Consultar varreduras anteriores por ID do contêiner, data ou nível de risco       | [H]              |
| **Comparação de resultados**              | Sim                 | Visualizar lado a lado a imagem original de raio-X e o mapa residual gerado pela IA | [H]              |
| **Explicabilidade/detalhamento**            | Sim                 | Exibir score de confiança e regiões de destaque (ROI) da anomalia                 | [H]              |
| **Administração/configurações globais** | Não                | -                                                                                   | -                |
| **Usuários/perfis/permissões**            | Não                | -                                                                                   | -                |
| **CRUD de entidade do domínio**            | Não                | -                                                                                   | -                |
| **Auditoria/logs**                          | Sim                 | Registrar trilha de ações de liberação/vistoria para fins legais                | [H]              |
| **Alertas/ocorrências**                    | Sim                 | Notificar contêineres com alta probabilidade de anomalia crítica                  | [H]              |
| **Ajuda/documentação**                    | Talvez              | Exibir glossário de termos radiográficos e instruções de uso do sistema         | [?]              |

> **Atenção:** “login + dashboard + CRUD” não é uma solução universal. Cada padrão deve surgir de uma tarefa real.

---

# 9. Benefícios e ações iniciais

## 9.1 Qual benefício concreto o projeto de IHC pretende oferecer?

| Benefício esperado                                               | Problema/necessidade                                    | Usuário            | Status/evidência |
| ----------------------------------------------------------------- | ------------------------------------------------------- | ------------------- | ----------------- |
| Redução da fadiga visual e foco direcionado em áreas suspeitas | Exaustão em plantões longos analisando imagens densas | Fiscal Aduaneiro    | [H]               |
| Agilidade na tomada de decisão de liberação ou vistoria        | Gargalos operacionais e filas portuárias               | Operador de Scanner | [H]               |

## 9.2 Que ações o usuário deverá conseguir realizar?

| ID  | O usuário precisa conseguir...                                                 | Para alcançar...                                     | Prioridade inicial |
| --- | ------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------ |
| F01 | Visualizar fila de contêineres classificados por nível de risco               | Priorizar inspeções críticas                       | Alta               |
| F02 | Comparar imagem original de raio-X com o mapa residual de anomalia              | Confirmar a veracidade do alerta da IA                | Alta               |
| F03 | Registrar veredito (liberado / vistoria física / retenção) com justificativa | Concluir o despacho alfandegário com rastreabilidade | Alta               |
| F04 | Consultar histórico de varreduras anteriores                                   | Investigar reincidências ou auditar laudos           | Média             |

## 9.3 Tecnologias/restrições já definidas no TCC

A tecnologia aparece *agora*, depois do entendimento do uso.

| Tecnologia/restrição | Por que existe | Possível impacto na interação |
| ---------------------- | -------------- | -------------------------------- |
| *Modelo de IA Autossupervisionado (Autoencoder)* | Escolha de arquitetura do TCC para aprender o padrão de cargas normais sem necessitar de imagens de contrabando prévio para treino. | Exige que a interface apresente o resultado em formato comparativo e explicativo (mapa residual/diferença), já que o modelo aponta discrepâncias e não categorias de objetos pré-rotulados. |
| *Geração de Mapa Residual de Anomalia* | Saída primária do algoritmo que calcula a diferença entre a imagem real de raio-X e a reconstrução do Autoencoder. | A interface precisa oferecer um visualizador interativo com controle de opacidade, mapa de calor (heatmap) e alternância de camadas para que o fiscal entenda o que a IA destacou. |
| *Tempo de Inferência e Processamento de Imagem* | Restrição computacional do pipeline de visão computacional ao carregar e reconstruir matrizes de alta resolução de raio-X. | Exige feedback de sistema claro (indicadores de status/carregamento) para que o operador não pense que a interface travou durante a análise do contêiner. |
| *Injeção Sintética de Anomalias (Lei de Beer-Lambert)* | Método matemático do TCC para simular atenuamentos de radiação de objetos ocultos nas imagens de treino. | Define como os níveis de severidade/confiança das anomalias são calculados e exibidos na interface (ex: score de densidade atípica). |

---

# 10. Hipóteses e dúvidas prioritárias

| ID  | Hipótese/dúvida | Por que importa | Como poderá ser investigada |
| --- | ----------------- | --------------- | ---------------------------- |
| *H30* | Operadores preferem a visualização lado a lado (imagem original vs. mapa residual) em vez de sobreposição com ajuste de opacidade (slider). | Define a arquitetura da tela principal de análise e o nível de esforço cognitivo do fiscal durante a inspeção. | Teste A/B com wireframes e protótipos de baixa fidelidade na Entrega 6. |
| *H04* | A exibição de um índice percentual de anomalia (score de risco) acompanhado de marcação visual (ROI) é suficiente para o fiscal tomar a decisão sem precisar ver métricas estáticas do modelo. | Evita a sobrecarga de informações matemáticas complexas na tela para um operador sob pressão de tempo e fadiga. | Entrevistas e validação de requisitos de IHC nas Entregas 3 e 5. |
| *H33* | A reorganização automática da fila de trabalho baseada no nível de risco (alertas em tempo real) reduz o tempo de resposta em contêineres críticos. | Valida se a automação da priorização agrega valor direto ao fluxo diário de triagem aduaneira. | Modelagem de Tarefas (HTA) na Entrega 5 e avaliação de usabilidade nas Entregas 12–14. |
Registre em [`../RASTREABILIDADE.md`](../RASTREABILIDADE.md).

---

# 11. Síntese da equipe

| Pergunta                                 | Síntese atual                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Qual é a contribuição central do TCC? | Detecção autossupervisionada de anomalias em raio-X de contêineres via Autoencoders e imagens residuais.                     |
| O TCC já previa interface?              | Não                                                                                                                            |
| Quem é o usuário prioritário de IHC?  | Fiscal Aduaneiro                                                                                                                |
| O que ele precisa alcançar?             | Triar contêineres, inspecionar  se há discrepâncias em seu interior e decidir liberação/vistoria com segurança e rapidez. |
| Qual problema/atividade será estudado?  | Triagem de contêineres e tomada de decisão sob fadiga visual e pressão de tempo.                                             |
| Como isso acontece hoje?                 | Inspeção visual manual em softwares legados de fabricantes de scanners.                                                       |
| Qual é o contexto de uso?               | Sala de controle portuária, alta resolução, pressão temporal e gravidade da segurança.                                     |
| Que interface/recorte será explorado?   | Visualizador comparativo (original vs. mapa residual) e painel de veredito.                                                     |
| Como a interface se relaciona ao TCC?    | Protótipo demonstrativo de aplicação potencial da capacidade analítica do modelo.                                           |
| Quais pontos ainda são hipóteses?      | H01 (preferência de layout de comparação), H02 (impacto do score de confiança na aceitação da IA) e H03 (eficácia do código de cores no dashboard de triagem). |

### Delimitação

**Dentro do escopo de IHC:** Projeto de telas de triagem, visualização comparativa de imagens e fluxo de decisão
**Fora do escopo de IHC:** Treinamento do modelo de IA, ajuste de hiperparâmetros do Autoencoder, engenharia de backend e captura física de dados do scanner de raio-X.
**Dentro do escopo formal do TCC:** Pesquisa e desenvolvimento do algoritmo de detecção autossupervisionada e validação experimental por métricas (F1-score).
**Interface da disciplina será implementada no TCC?** não definido

---

# 12. Como esta entrega alimenta as próximas

- **Entrega 2:** verifica mercado, concorrentes e interfaces profissionais representativas.
- **Entrega 3:** detalha perfis e contexto.
- **Entrega 4:** aprofunda situações problemáticas.
- **Entrega 5:** modela tarefas centrais.
- **Entrega 6:** experimenta alternativas em baixa fidelidade.
- **Entrega 7:** investiga hipóteses com dados.
- **Entrega 8:** define restrições e metas de usabilidade.
- **Entregas 9–11:** transformam o recorte em modelo de interação e protótipo.
- **Entregas 12–14:** avaliam a interface construída na disciplina.
- **Entrega 2:** Verifica concorrentes de softwares alfandegários e sistemas de inspeção portuária.
- **Entrega 3:** Detalha perfis de personas (Fiscal Carlos).
- **Entregas 4 e 5:** Aprofundam cenários de problema e análise de tarefas (HTA).
- **Entregas 6 a 11:** Prototipação em baixa e alta fidelidade (Figma) do sistema de triagem.
- **Entregas 12 a 14:** Avaliação heurística e testes de usabilidade com usuários.

A Entrega 1 é uma **fotografia inicial do conhecimento**. Ela pode e deve ser revisada quando surgirem evidências.

---

# 13. Relação com INOVA e comunicação do projeto

Prepare uma explicação de até três frases:

1. **Problema/atividade humana:** Fiscais aduaneiros enfrentam extrema fadiga visual e pressão temporal ao inspecionar milhares de imagens complexas de raio-X de contêineres para coibir contrabando.
2. **Contribuição técnica do TCC:** Um modelo avançado de inteligência artificial autossupervisionada que aprende o padrão de cargas normais e detecta autonomamente anomalias ocultas gerando mapas residuais precisos.
3. **Como uma pessoa poderia utilizar essa contribuição:** Uma interface intuitiva em sala de controle portuária que prioriza contêineres de risco e destaca visualmente as discrepâncias detectadas pela IA, agilizando a liberação de cargas legítimas e bloqueando ilícitos.

Essa síntese ajuda a apresentar o projeto para público não especializado sem reduzir seu mérito técnico.

---

# Checklist de qualidade

- [x] Está clara a diferença entre tema do TCC, escopo formal do TCC e escopo de IHC.
- [x] A equipe declarou se o TCC já previa interface.

- [X] Se não previa, foi derivado um usuário plausível e um objetivo de uso.
- [X] A interface de IHC não foi apresentada como obrigação automática do TCC.
- [X] A contribuição do TCC foi descrita sem começar por tecnologias de implementação.
- [X] Usuários diretos e stakeholders foram diferenciados.
- [X] Foram considerados profissionais que configuram, administram, interpretam ou decidem, quando pertinente.
- [X] Objetivo do usuário não foi confundido com objetivo do projeto.
- [X] Processo/problema atual foi descrito antes da solução.
- [X] Existe situação concreta de uso/problema.
- [X] Contexto físico, social/organizacional, dispositivos e consequências de erro foram considerados.
- [X] Mercado/alternativas existentes foram levantados inicialmente.
- [X] Possibilidades como dashboard, relatório, histórico, filtros e CRUD foram tratadas como hipóteses de solução, não como requisitos automáticos.
- [X] Cada possibilidade de interface tem um objetivo/tarefa que poderia justificá-la.
- [X] Afirmações relevantes estão marcadas `[F]`, `[H]` ou `[?]`.
- [X] Hipóteses prioritárias receberam IDs e foram para a rastreabilidade.
- [X] O recorte de IHC é viável para modelar, prototipar e avaliar no semestre.
- [X] A equipe consegue explicar problema humano → contribuição computacional → forma de uso.
