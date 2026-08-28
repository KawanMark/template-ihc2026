# Matriz de rastreabilidade de IHC

A matriz deve ser atualizada ao longo do semestre. Ela ajuda a demonstrar que a interface não surgiu arbitrariamente e registra **como o conhecimento da equipe evoluiu**.

Para projetos cujo TCC não previa interface, esta matriz é especialmente importante: deve ficar visível a passagem da **contribuição técnica do TCC** para um **cenário de uso plausível**, e desse cenário para as decisões de interação.

---

## 1. Derivação do escopo de IHC a partir do TCC

| Elemento | Registro da equipe | Evidência/justificativa | Estado |
|---|---|---|---|
| Tema do TCC | Detecção de Anomalias em Imagens de Raio-X de Contêineres de Carga. | [TCCI.pdf](https://github.com/user-attachments/files/31158764/TCCI.pdf) | definido |
| Resultado técnico esperado | Modelo de IA/ML (Autoencoder autossupervisionado), algoritmos de injeção sintética de anomalias (Beer-Lambert) e estudo experimental/benchmark. | Proposta formal do TCC | definido |
| O TCC previa interface? | Não. | Escopo formal do TCC concentrado no modelo e benchmark | definido |
| Capacidade/contribuição central | Detectar e localizar anomalias e riscos em imagens de raio-X de contêineres utilizando aprendizado autossupervisionado e geração de imagens residuais. | Requisitos técnicos do algoritmo | definido |
| Possíveis beneficiários/stakeholders | Administrações portuárias, Receita Federal / Alfândega, Operadores logísticos e Empresas importadoras/exportadoras. | [F] Operação aduaneira e portuária | definido |
| Usuário escolhido para IHC | Fiscal Aduaneiro / Operador de Scanner de Raio-X. | [H01] Perfil diretamente responsável pela triagem visual na ponta operacional | definido |
| Objetivo principal do usuário | Triar contêineres, inspecionar mapas residuais de discrepância e registrar decisões de liberação ou vistoria física com agilidade e segurança. | [H05] Necessidade de conciliar metas operacionais com segurança pública | definido |
| Contexto de uso adotado | Sala de controle portuária em recinto alfandegado, estações multi-monitor sob alta pressão temporal e fadiga visual. | [H16] Contexto físico e operacional | definido |
| Interface/recorte de IHC | Visualizador comparativo de imagens (original vs. mapa residual) integrado a um painel de triagem e registro de vereditos. | Derivado do fluxo operacional do Fiscal Aduaneiro | definido |
| Relação com o TCC | Protótipo demonstrativo de aplicação potencial da capacidade analítica do modelo. | Extensão conceitual para a disciplina de IHC | definido |

---

## 2. Registro de hipóteses e lacunas da Entrega 1

| ID | Afirmação / dúvida inicial | Tipo | Por que importa | Como/onde investigar | Evidência obtida | Estado atual | Impacto no projeto |
|---|---|---|---|---|---|---|---|
| **H01** | Operadores de scanner de raio-X/fiscais aduaneiros são os usuários diretos operacionais que analisam mapas residuais e decidem sobre liberação/vistoria. | H | Define a persona primária da interface e as permissões do sistema. | Entrega 3 (Personas) / Entrevistas | PENDENTE | aberta | Direciona o fluxo principal de navegação para um perfil operacional. |
| **H02** | Analistas de inteligência aduaneira utilizam relatórios históricos para investigar padrões e auditar decisões. | H | Determina a necessidade de módulos táticos de pesquisa e relatórios consolidados. | Entrega 5 (Modelagem de Tarefas) | PENDENTE | aberta | Justifica visualizações agregadas e filtros avançados. |
| **H03** | Autoridades de segurança pública e alfândega beneficiam-se da eficácia da interceptação sem interagir com a interface. | H | Identifica stakeholders secundários para relatórios executivos e auditorias. | Entrega 3 (Análise de Stakeholders) | PENDENTE | aberta | Define requisitos de exportação de laudos. |
| **H04** | A triagem diária da fila de contêineres escaneados é uma atividade de alta frequência e criticidade (A01). | H | Define a tela inicial e a lista de trabalho (*worklist*) como peça central da aplicação. | Entrega 5 (Análise de Tarefas) | PENDENTE | aberta | Prioriza o painel principal de contêineres a examinar. |
| **H05** | Inspecionar detalhes de uma anomalia comparando imagem original e mapa residual é uma atividade frequente (A02). | H | Define a necessidade de um visualizador interativo de alta resolução. | Entrega 6 (Protótipos de Baixa Fidelidade) | PENDENTE | aberta | Exige ferramentas de zoom, contraste e alternância de camadas de imagem. |
| **H06** | O registro formal do veredito (liberado, vistoria, retenção) é uma atividade crítica de alta frequência (A03). | H | Exige um fluxo de decisão rápido, seguro e sem ambiguidades. | Entrega 5 (HTA) | PENDENTE | aberta | Impacta o design dos botões de ação e campos de justificativa. |
| **H07** | A triagem (A01) e o registro de vereditos (A03) são as atividades mais frequentes do fluxo. | H | Garante a otimização do número de cliques para o fluxo principal. | Entrega 5 / Mapeamento de Atalhos | PENDENTE | aberta | Determina requisitos de navegação por teclado e atalhos rápidos. |
| **H08** | A decisão de liberação (A03) é a atividade mais crítica devido aos custos de falsos positivos/negativos. | H | Exige etapas de confirmação para evitar cliques acidentais em ações irreversíveis. | Entrega 8 (Prevenção de Erros) | PENDENTE | aberta | Inclui diálogos de confirmação e trilhas de auditoria claras. |
| **H09** | Atualmente, operadores usam softwares proprietários dos scanners com inspeção 100% visual e manual, sem suporte de IA. | H | Identifica a linha de base (*baseline*) do processo atual para comparar melhorias de IHC. | Entrega 2 (Análise Competitiva) | PENDENTE | aberta | Base para demonstrar o valor agregado do protótipo frente aos sistemas legados. |
| **H10** | O processo atual é difícil devido à sobreposição de materiais, fadiga visual e ausência de padrões rígidos para anomalias. | H | Aponta as dores de uso a serem mitigadas pela interface de IHC. | Entrega 4 (Cenários de Problema) | PENDENTE | aberta | Define funcionalidades de destaque/realce (*highlight*) de anomalias residuais. |
| **H11** | O profissional interpreta tons de densidade material, geometria de objetos e dados do manifesto para decidir. | H | Determina quais metadados contextuais devem acompanhar a imagem na tela. | Entrega 5 (Mapeamento de Informações) | PENDENTE | aberta | Adiciona painel lateral com metadados da carga (manifesto, tipo de material). |
| **H12** | Falhas na interpretação geram entrada de ilícitos (falso negativo) ou paralisação e custos desnecessários (falso positivo). | H | Evidencia a necessidade de feedback claro sobre o grau de incerteza da IA. | Entrega 8 (Prevenção de Erros) | PENDENTE | aberta | Requer a exibição de um índice/score de confiança claro para o operador. |
| **H13** | Situação concreta de uso: o fiscal Carlos falha na detecção às 03:00 da manhã devido à exaustão e sobreposição visual. | H | Ilustra o cenário desfavorável de uso real (horário crítico, cansaço). | Entrega 4 (Cenário do Problema) | PENDENTE | aberta | Pauta a escolha de paletas de cores de alto contraste e iluminação ajustável (Dark Mode). |
| **H14** | A interação ocorre em salas de controle de raio-X de portos, armazéns alfandegados ou centros de triagem, sob alta demanda operacional. | H | Delimita o ambiente para o qual a interface é projetada. | Entrega 3 (Análise de Contexto) | PENDENTE | aberta | Descarta cenários móveis ou de uso ocasional. |
| **H15** | O uso se dá em estações desktop com múltiplos monitores de alta resolução e gama dinâmica adequada a imagens radiográficas. | H | Define resolução-alvo, área útil de tela e viabilidade de layouts lado a lado. | Entrega 3 / Entrega 8 | PENDENTE | aberta | Viabiliza o visualizador comparativo em tela dividida (H30). |
| **H16** | O ambiente físico conta com iluminação controlada, ruídos de pátio portuário, interrupções e pressão temporal. | H | Restringe escolhas de cores, feedback sonoro e densidade de informação visual. | Entrega 3 (Análise de Contexto Físico) | PENDENTE | aberta | Descarta alertas puramente sonoros e favorece contrastes visuais adequados à iluminação. |
| **H17** | O ambiente organizacional possui hierarquia rígida, responsabilidade legal e exigência de auditoria imutável. | H | Exige identificação clara do operador responsável por cada decisão. | Entrega 5 / Requisitos de Sistema | PENDENTE | aberta | Define vinculação automática do perfil logado a cada laudo emitido. |
| **H18** | É obrigatória a manutenção de histórico e rastreabilidade legal para cada contêiner e ação tomada. | H | Determina a criação de uma tela/módulo de histórico e log de auditoria. | Entrega 8 / Módulo de Consulta | PENDENTE | aberta | Garante a inclusão do componente de consulta de histórico na interface. |
| **H19** | Erros operacionais causam impacto crítico (evasão fiscal, contrabando ou atrasos logísticos internacionais). | H | Exige clareza máxima nas mensagens de alerta e validação de passos. | Entrega 8 (Severidade de Erros) | PENDENTE | aberta | Torna o campo de justificativa obrigatório em retenções de carga. |
| **H20** | Sistemas de gerenciamento portuário (TOS) são os softwares correlatos mais comuns no ecossistema atual. | H | Avalia potenciais pontos de integração de dados de entrada/saída. | Entrega 2 (Benchmark) | PENDENTE | aberta | Influencia a nomenclatura e o vocabulário das tabelas do sistema. |
| **H21** | Usuários já conhecem consoles industriais, softwares GIS e painéis com múltiplos filtros (ex: Siscomex). | H | Define metáforas visuais e padrões de navegação que aproveitam a carga cognitiva prévia. | Entrega 2 / Diretrizes de Design | PENDENTE | aberta | Utiliza tabelas denotativas, visualizadores divididos e filtros conhecidos do setor aduaneiro. |
| **H22** | Soluções atuais gerenciam bem o fluxo logístico global e o controle de manifestos de carga. | H | Orienta a interface a focar no ponto fraco (análise de imagem) sem redefinir fluxos consagrados. | Entrega 2 | PENDENTE | aberta | Evita redesenhar a gestão de manifestos, focando na inspeção radiográfica. |
| **H23** | Soluções atuais falham na falta de inteligência visual, interfaces poluídas/legadas e falta de explicação do risco. | H | Estabelece os diferenciais competitivos da interface proposta. | Entrega 2 / Proposta de Valor de IHC | PENDENTE | aberta | Foca na limpeza visual, visualização comparativa clara e mapas residuais explicativos. |
| **H24** | Terminologia aduaneira (BL, Manifesto, Recinto, Despacho) e código de cores (verde/amarelo/vermelho) são familiares. | H | Guia a padronização do vocabulário e do design system da aplicação. | Entrega 3 (Dicionário do Domínio) | PENDENTE | aberta | Assegura o uso de convenções cromáticas universais de risco e termos aduaneiros corretos. |
| **H25** | Um Dashboard/visão geral ajudará na navegação do fluxo diário de contêineres e na triagem por prioridades. | H | Valida a presença de um painel estatístico/operacional inicial. | Entrega 5 (Mapeamento de Funções) | PENDENTE | aberta | Justifica a criação de cartões com contagem de contêineres críticos pendentes. |
| **H26** | A interface precisa ter módulo de entrada/upload de dados e metadados de carga. | H | Garante funcionalidade de seleção/recebimento de novos arquivos do scanner. | Entrega 5 / Modelagem de Tarefas | PENDENTE | aberta | Avalia se a entrada será automatizada via pipeline ou manual pelo operador. |
| **H27** | O acompanhamento do tempo de processamento da IA reduz a ansiedade do usuário durante a inferência. | H | Trata o feedback de sistema durante inferências do modelo autossupervisionado. | Entrega 8 (Tempo de Resposta) | PENDENTE | aberta | Inclui barras de progresso ou indicadores de status de processamento da imagem. |
| **H28** | A emissão de relatórios/laudos de inspeção é necessária para documentar e encaminhar vistorias. | H | Define a necessidade de uma visão de exportação/impressão de resultados em PDF. | Entrega 5 | PENDENTE | aberta | Adiciona botão de geração de laudo estruturado com imagem e motivo da retenção. |
| **H29** | Filtros e busca histórica por ID do contêiner, data ou risco são essenciais para investigação. | H | Justifica a inclusão do componente de tabela com barra de busca e seletores de intervalo. | Entrega 6 (Wireframes) | PENDENTE | aberta | Estrutura componentes de busca refinada no módulo de histórico. |
| **H30** | Visualização comparativa lado a lado (original vs. mapa residual) é preferível à sobreposição com transparência. | H | Define a disposição dos painéis de imagem na tela de inspeção detalhada. | Entrega 6 / Teste A/B de Baixa Fidelidade | PENDENTE | aberta | Determina se o layout terá painéis divididos simultâneos ou um *slider* de opacidade. |
| **H31** | A exibição do score de confiança e caixas de destaque (ROI) aumentam a aceitabilidade da IA pelo operador. | H | Avalia o nível de explicabilidade (XAI) ideal para a interface. | Entrega 7 (Investigação de Hipóteses) | PENDENTE | aberta | Inclui indicativo percentual de anomalia e delimitadores visuais na imagem. |
| **H32** | O registro de logs de auditoria para cada veredito garante a conformidade com exigências legais do porto. | H | Garante a funcionalidade de histórico de alterações sem edição posterior. | Entrega 5 / Requisitos Não Funcionais | PENDENTE | aberta | Assegura que todas as ações fiquem registradas no histórico do contêiner. |
| **H33** | Alertas e notificações em tempo real são necessários para notificar o surgimento de contêineres de altíssimo risco. | H | Evita que cargas críticas fiquem estagnadas no final da fila de processamento. | Entrega 6 | PENDENTE | aberta | Adiciona sistema de alertas visuais (badges/pop-ups) para anomalias severas. |
| **H34** | O suporte visual da IA reduz a fadiga e direciona o foco imediatamente para regiões com anomalia residual. | H | Benefício esperado da IHC que melhora o desempenho do operador. | Entregas 12–14 (Avaliação de Usabilidade) | PENDENTE | aberta | Métrica de usabilidade: medir redução do tempo de identificação do problema. |
| **H35** | A priorização da fila por risco agiliza a liberação de cargas lícitas e reduz gargalos portuários. | H | Benefício organizacional esperado do uso correto da interface. | Entregas 12–14 | PENDENTE | aberta | Métrica de usabilidade: avaliar a eficácia do fluxo de liberação em lote ou acelerada. |
| **H36** | Se bem-sucedida, a tecnologia permitirá triar um volume muito maior de contêineres com maior precisão, reduzindo retenção de cargas lícitas. | H | É a promessa de valor que a interface precisa tornar visível ao usuário e à organização. | Entregas 12–14 (avaliação) | PENDENTE | aberta | Define as métricas de sucesso do protótipo: volume triado e tempo de decisão. |
| **H37** | Operadores trabalham sob fadiga visual e pressão de tempo, exigindo explicações visuais simples (ex: heatmaps) em vez de métricas matemáticas complexas. | H | Define a arquitetura da informação e o nível de explicabilidade do modelo de IA na tela. | Entrega 8 (Metas de Usabilidade) / Testes de IHC | PENDENTE | aberta | Evita interfaces sobrecarregadas com dados estatísticos abstratos. |
| **H38** | O objetivo real do usuário é cumprir metas de liberação e garantir segurança sem causar gargalos logísticos no porto. | H | Alinha os indicadores de sucesso da interface aos objetivos de negócio do usuário. | Entrega 3 / Entrevistas | PENDENTE | aberta | Requer agilidade no registro de decisões e alertas priorizados. |
| **?01** | Quais permissões e telas o Administrador/Engenheiro de IA precisa para ajustar *thresholds* do modelo? | ? | Define se o sistema precisa de um painel de configuração técnica ou apenas operacional. | Entrega 3 / Entrevistas | PENDENTE | aberta | Se necessário, exige telas de parametrização global. |
| **?02** | Qual é a frequência real e o fluxo da atividade de consulta de histórico/laudos anteriores (A04)? | ? | Determina o nível de complexidade e os filtros necessários no módulo de busca. | Entrega 5 (Modelagem HTA) | PENDENTE | aberta | Impacta a arquitetura de banco de dados e filtros de tela. |
| **?03** | Operadores seniores devem ter permissão para ajustar a sensibilidade da IA durante o turno? | ? | Define se a funcionalidade de parametrização estará acessível na UI operacional. | Entrega 3 (Análise de Perfil) | PENDENTE | aberta | Evita alterações acidentais de parâmetros por operadores juniores. |
| **?04** | Há necessidade de um módulo de ajuda/glossário radiográfico integrado à interface? | ? | Define a criação de componentes de suporte/tooltip para novos operadores. | Entrega 8 (Suporte ao Usuário) | PENDENTE | aberta | Avalia inclusão de ajuda contextual em termos técnicos. |
| **?05** | Quais restrições de tempo de inferência e formato do backend do TCC impactam a UI? | ? | Determina a necessidade de telas de carregamento, *spinners* e barras de progresso. | Alinhamento com equipe de TCC | PENDENTE | aberta | Previne problemas de usabilidade decorrentes de latência. |
| **?06** | A interface prototipada em IHC será formalmente implementada no código final do TCC? | ? | Alinha expectativas do escopo acadêmico entre a disciplina de IHC e o TCC. | Reunião com Orientador | PENDENTE | aberta | Se sim, exigirá exportação de código do protótipo (React/HTML/CSS). |

## 3. Rastreabilidade entre contribuição técnica, necessidades e artefatos

| ID | Capacidade do TCC utilizada | Necessidade/problema | Persona | Cenário problema | Objetivo/tarefa | HTA/GOMS/CTT | Cenário de interação / signos | MoLIC | Tela(s) Figma | Heurística / problema | Tarefa no teste | Decisão/melhoria |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R01 | {{ex.: recomendação de otimização}} | {{...}} | {{P01}} | {{C01}} | {{T01}} | {{links}} | {{...}} | {{M01}} | {{F01...}} | {{V01 ou —}} | {{UT01}} | {{...}} |
| R02 |  |  |  |  |  |  |  |  |  |  |  |  |

## 4. Rastreabilidade de padrões de interface

Use esta tabela quando o projeto incorporar padrões como dashboard, relatório, histórico, filtros ou administração. O objetivo é **justificar o padrão**, não apenas listar telas.

| ID da tela/fluxo | Padrão de interface | Objetivo/tarefa que justifica | Informação/ação principal | Evidência de necessidade | Artefatos relacionados |
|---|---|---|---|---|---|
| F01 | dashboard | {{T01}} | {{...}} | {{H01/evidência...}} | {{C01/M01}} |
| F02 | histórico com filtros | {{T02}} | {{...}} | {{...}} | {{...}} |
| F03 | administração/CRUD | {{T03}} | {{...}} | {{...}} | {{...}} |

## 5. Registro de mudanças de escopo

| Data | O que mudou | Evidência/feedback que motivou | Artefatos afetados | Responsável |
|---|---|---|---|---|
| {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |

## Como usar

- Use identificadores estáveis (`H01`, `P01`, `C01`, `T01`, `M01`, `F01`, `UT01`).
- Quando uma necessidade/problema tiver origem em hipótese da Entrega 1, cite o ID correspondente.
- Em TCC sem interface original, pelo menos uma linha deve mostrar claramente **como uma capacidade técnica chega até uma tarefa de usuário e uma tela/fluxo**.
- Uma linha pode se desdobrar quando um objetivo possui múltiplos caminhos.
- Não force relação inexistente: se algo ainda não foi modelado, marque `PENDENTE`.
- Ao remover uma funcionalidade, registre a decisão em vez de apagar silenciosamente o histórico.
- Dashboard, CRUD, filtros e relatórios só devem aparecer quando houver objetivo/tarefa que os justifique.
