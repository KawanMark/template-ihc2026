# Matriz de rastreabilidade de IHC

A matriz deve ser atualizada ao longo do semestre. Ela ajuda a demonstrar que a interface não surgiu arbitrariamente e registra **como o conhecimento da equipe evoluiu**.

Para projetos cujo TCC não previa interface, esta matriz é especialmente importante: deve ficar visível a passagem da **contribuição técnica do TCC** para um **cenário de uso plausível**, e desse cenário para as decisões de interação.

## 1. Derivação do escopo de IHC a partir do TCC

| Elemento | Registro da equipe | Evidência/justificativa | Estado |
|---|---|---|---|
| Tema do TCC | Um sistema computacional capaz de analisar imagens radiográficas de contêineres de carga para detectar autonomamente mercadorias ilícitas e anomalias ocultas sem depender de exemplos reais prévios de contrabando. | [TCCI.pdf](https://github.com/user-attachments/files/31158764/TCCI.pdf) | definido |
| Resultado técnico esperado |Se bem-sucedida, a tecnologia permitirá que alfândegas e operadores portuários triem um volume muito maior de contêineres com maior precisão, reduzindo o tempo de retenção de cargas lícitas e direcionando a inspeção física apenas para contêineres com alta probabilidade de anomalia. | Entrega 1, §1.4 (marcado como [H]) e mérito técnico descrito em §1.5. | definido |
| O TCC previa interface? | não | Entrega 1, §0.5 — o escopo formal se limita ao treinamento e validação do modelo, sem aplicação gráfica. | definido |
| Capacidade/contribuição central | Detectar e localizar anomalias em imagens de raio-X de contêineres por aprendizado autossupervisionado, gerando imagens residuais que apontam as regiões discrepantes. | Entrega 1, §1.3 e §1.5; artigo base do TCC (Gaikwad et al., 2024). | definido |
| Possíveis beneficiários/stakeholders | Usuários diretos: operador de scanner de raio-X / fiscal aduaneiro, analista de inteligência aduaneira e administrador/engenheiro de IA. Afetados sem uso direto: empresas importadoras/exportadoras e autoridades de segurança pública/alfândega. | Entrega 1, §2.2 e §2.3 — perfis operacionais são [H]; o impacto sobre importadores/exportadores é [F] da operação portuária; o perfil de administrador segue como [?]. | H |
| Usuário escolhido para IHC | Operador de Scanner de Raio-X / Fiscal Aduaneiro | Seriam possíveis usuários pois eles são encarregados de verificar os contêineres  | H|
| Objetivo principal do usuário | Analisar os alertas do modelo, comparar a imagem original de raio-X com o mapa residual e registrar o veredito (liberação, vistoria física ou retenção) com segurança e agilidade. | Entrega 1, §3.1 e §7.3; atividades A01–A03 de §3.2, sendo A03 a mais crítica (§3.4). | H |
| Contexto de uso adotado | Sala de controle de raio-X em terminal portuário alfandegado: estação desktop com múltiplos monitores, turnos longos com fadiga visual, interrupções, pressão de tempo e responsabilidade legal sobre cada liberação. | Entrega 1, §5.1 a §5.6 — contexto integralmente marcado como [H]; a exigência de auditoria (§5.5) decorre da responsabilidade legal de §5.4. | H |
| Interface/recorte de IHC | Estação de triagem do fiscal aduaneiro: fila de contêineres ordenada por risco, visualizador comparativo (imagem original × mapa residual, com score e ROI) e registro de veredito com justificativa e trilha de auditoria. | Deriva do usuário (§7.2), do objetivo (§7.3) e do enunciado do recorte (§7.4); as possibilidades marcadas como plausíveis em §8 delimitam o conjunto. | proposta |
| Relação com o TCC | protótipo demonstrativo | Entrega 1, §7.5 — protótipo demonstrativo de aplicação potencial; a incorporação ao TCC depende de decisão da equipe e do orientador. | definido |

> Se o escopo de IHC mudar ao longo do semestre, preserve a decisão anterior no histórico e registre **qual evidência motivou a mudança**.

## 2. Registro de hipóteses e lacunas da Entrega 1

Use esta tabela para itens importantes marcados como `[H]` ou `[?]`. Preserve o histórico: não apague uma hipótese refutada.

| ID | Afirmação / dúvida inicial | Tipo | Por que importa | Como/onde investigar | Evidência obtida | Estado atual | Impacto no projeto |
|---|---|---|---|---|---|---|---|
| H01 | Operadores preferem visualização lado a lado (original vs. mapa residual) em vez de sobreposição com opacidade. | H | Define a arquitetura da tela de análise detalhada. | Entrega 2 / análise C01 e testes posteriores | C01 — Rapiscan InSight Vehicle Compare e Similar Cargo usam comparação visual entre imagens. | sustentada parcialmente | Reforça a decisão de explorar visualizador comparativo no protótipo. |
| H02 | A exibição de um score de confiança numérico reduz falsas rejeições por desconfiança na IA. | H | Garante a adoção efetiva do sistema pelo fiscal; sem confiança no alerta, o operador ignora a IA e volta à inspeção puramente manual. | Entrevistas com especialistas e protótipo de papel (Entregas 3 e 6) | C01 — a Rapiscan InSight organiza a IA em ferramentas por tarefa (High Density, Empty Container) em vez de métricas técnicas, sem evidência pública sobre exibição de score. | aberta | Ainda indefinido se o score aparece como número, faixa ou apenas rótulo de risco no visualizador. |
| H03 | Alertas visuais com código de cores (verde/amarelo/vermelho) na fila de contêineres aceleram a triagem em comparação a uma lista monocromática. | H | Otimiza o fluxo visual de triagem diária na tela de fila. | Avaliação heurística e testes de protótipo (Entregas 6 e 13) | Entrega 1, §6.6 — códigos de risco por cores já fazem parte do vocabulário aduaneiro conhecido pelo público. | aberta | Sustenta a fila ordenada por risco, mas exige alternativa além da cor (acessibilidade, ver §4 da síntese da Entrega 2). |
| H04 | Operadores de scanner não têm familiaridade com conceitos de aprendizado de máquina e precisam de explicações visuais (mapa residual, ROI) em vez de métricas matemáticas. | H | Define a linguagem da interface e o nível de detalhe técnico exposto ao usuário. | Entrevistas e observação de usuário (Entregas 7 e 14) | C01 — a InSight usa terminologia operacional do domínio (cargo, container, high density) e não expõe métricas do modelo. | sustentada parcialmente | Origina a recomendação RC03 da Entrega 2: evitar jargão de IA na interface principal. |
| Q01 | Existe um perfil de administrador/engenheiro de IA que ajusta limiares de sensibilidade do modelo? | ? | Decide se haverá tela de configuração/parametrização no recorte de IHC ou se o limiar é fixo. | Entrega 3 (perfis e contexto) e consulta ao orientador | Nenhuma até o momento; a página pública da Rapiscan não detalha configuração. | aberta | Enquanto aberta, a tela de configuração permanece como "talvez" em §8 da Entrega 1 e fora do recorte principal. |
| Q02 | Com que frequência o analista de inteligência consulta o histórico de varreduras (atividade A04)? | ? | Define se o histórico com filtros é tarefa central ou secundária no protótipo. | Entrega 3 e Entrega 7 (coleta de dados) | C01 — o InSight Similar Cargo recupera imagens salvas semelhantes, indicando que consulta a casos anteriores é prática do domínio. | aberta | Mantém o histórico como prioridade média (F04 da Entrega 1, §9.2). |

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
