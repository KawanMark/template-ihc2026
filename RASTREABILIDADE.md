# Matriz de rastreabilidade de IHC

A matriz deve ser atualizada ao longo do semestre. Ela ajuda a demonstrar que a interface não surgiu arbitrariamente e registra **como o conhecimento da equipe evoluiu**.

Para projetos cujo TCC não previa interface, esta matriz é especialmente importante: deve ficar visível a passagem da **contribuição técnica do TCC** para um **cenário de uso plausível**, e desse cenário para as decisões de interação.

## 1. Derivação do escopo de IHC a partir do TCC

| Elemento | Registro da equipe | Evidência/justificativa | Estado |
|---|---|---|---|
| Tema do TCC | Um sistema computacional capaz de analisar imagens radiográficas de contêineres de carga para detectar autonomamente mercadorias ilícitas e anomalias ocultas sem depender de exemplos reais prévios de contrabando. | [TCCI.pdf](https://github.com/user-attachments/files/31158764/TCCI.pdf) | definido |
| Resultado técnico esperado |Se bem-sucedida, a tecnologia permitirá que alfândegas e operadores portuários triem um volume muito maior de contêineres com maior precisão, reduzindo o tempo de retenção de cargas lícitas e direcionando a inspeção física apenas para contêineres com alta probabilidade de anomalia. | {{...}} | definido |
| O TCC previa interface? | não | {{...}} | definido |
| Capacidade/contribuição central | {{o que a tecnologia permite}} | {{...}} | definido |
| Possíveis beneficiários/stakeholders | {{...}} | {{fonte ou hipótese}} | F / H / ? |
| Usuário escolhido para IHC | Operador de Scanner de Raio-X / Fiscal Aduaneiro | Seriam possíveis usuários pois eles são encarregados de verificar os contêineres  | H|
| Objetivo principal do usuário | {{...}} | {{...}} | F / H / ? |
| Contexto de uso adotado | {{...}} | {{...}} | F / H / ? |
| Interface/recorte de IHC | {{...}} | {{como deriva dos itens acima}} | proposta / revisada |
| Relação com o TCC | parte prevista / extensão conceitual / protótipo demonstrativo / outra | {{...}} | definido |

> Se o escopo de IHC mudar ao longo do semestre, preserve a decisão anterior no histórico e registre **qual evidência motivou a mudança**.

## 2. Registro de hipóteses e lacunas da Entrega 1

Use esta tabela para itens importantes marcados como `[H]` ou `[?]`. Preserve o histórico: não apague uma hipótese refutada.

| ID | Afirmação / dúvida inicial | Tipo | Por que importa | Como/onde investigar | Evidência obtida | Estado atual | Impacto no projeto |
|---|---|---|---|---|---|---|---|
| H01 | Operadores preferem visualização lado a lado (original vs. mapa residual) em vez de sobreposição com opacidade. | H | Define a arquitetura da tela de análise detalhada. | Entrega 2 / análise C01 e testes posteriores | C01 — Rapiscan InSight Vehicle Compare e Similar Cargo usam comparação visual entre imagens. | sustentada parcialmente | Reforça a decisão de explorar visualizador comparativo no protótipo. |
| H02 | {{...}} | H / ? | {{...}} | {{...}} | {{...}} | aberta | {{...}} |

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
