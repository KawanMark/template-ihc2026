# Entrega 5 — Análise de tarefas: HTA, GOMS e CTT

**Data:** 16/10/2026  
**Status:** 🟨 em andamento  
**Responsabilidade:** cada integrante modela pelo menos 1 HTA, 1 GOMS e 1 CTT. As três técnicas podem abordar a mesma funcionalidade ou funcionalidades distintas, conforme a orientação da disciplina.

## Objetivo da atividade

Modelar tarefas importantes sob perspectivas complementares: decomposição hierárquica (HTA), estrutura de metas/métodos/operações (GOMS) e relações temporais entre tarefas (CTT). O diagrama deve ser acompanhado de interpretação textual.

## Para projetos cujo TCC não previa interface

Modele **tarefas humanas relacionadas ao uso da contribuição técnica**, e não a implementação interna do algoritmo. Exemplos de boas tarefas para análise:

- investigar uma consulta de baixo desempenho;
- configurar uma análise e selecionar parâmetros;
- submeter um dataset e verificar sua validade;
- acompanhar uma execução demorada;
- comparar dois resultados/modelos;
- interpretar uma recomendação e decidir se a aceita;
- localizar uma execução anterior usando busca/filtros;
- gerar e compartilhar um relatório;
- administrar papéis/permissões quando isso for parte do trabalho real;
- revisar um alerta e registrar uma decisão.

Um CRUD pode gerar tarefas relevantes, mas “cadastrar usuário” só merece modelagem se tiver significado no domínio (papéis, validações, riscos, permissões, dependências).

## Seleção das tarefas

| ID | Tarefa | Persona/cenário de origem | Frequência/criticidade | Autor responsável |
|---|---|---|---|---|
| T01 | {{...}} | {{P01/C01}} | {{...}} | {{...}} |
| T02 | Examinar a imagem de um contêiner e concluir se há motivo para apontar suspeita | P01 / CP01 | [H] Alta / Crítica: repete a cada contêiner (H05) e o erro tem custo nos dois sentidos (H12) | Kawan Mark Geronimo Da Silva — 22.222.010-5 |

> Priorize tarefas necessárias para que o usuário alcance objetivos centrais. Não desperdice a modelagem em ações triviais isoladas, como “clicar em login”, se o objetivo relevante é maior. Da mesma forma, não modele o funcionamento interno do algoritmo como se fosse uma tarefa humana.

---

## HTA — T01 {{nome da tarefa}}

**Autor(a):** {{nome — matrícula}}

### Descrição da tarefa

{{objetivo, ponto de início, conclusão esperada, contexto}}

### Diagrama

![HTA T01](../assets/05_tarefas/hta_t01.svg)

### Decomposição e planos

| ID | Objetivo/operação | Plano/ordem | Problema ou decisão de design observada |
|---|---|---|---|
| 0 | {{objetivo principal}} | {{1 }} 2 > 3 / 1 ou 2 etc.> | {{...}} |

**Verificação do HTA:**

- O objetivo 0 representa uma meta do usuário?
- As subtarefas são necessárias e suficientes?
- Os **planos** indicam ordem, alternativa, repetição ou condição?
- A decomposição parou em nível útil para projeto de interação?

---

## GOMS — T02 Examinar a imagem de um contêiner e concluir se há motivo para apontar suspeita

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5

### Descrição da tarefa

Persona: P01 Gustavo Onofre, operador da estação de imagem. Cenário de origem: CP01. Atividade: A02 (inspecionar). Linha da cadeia de contribuição: R01 (mapa residual, que localiza onde a imagem se afasta da reconstrução de uma carga normal).

- **Início:** a imagem do contêiner está disponível na estação e Gustavo vai examiná-la.
- **Fim:** Gustavo chega a uma conclusão, "apontar suspeita" ou "não apontar". A conclusão segue para o registro e para quem decide, o que corresponde a A03 e não é modelado aqui.
- **Papel de Gustavo:** ele examina e conclui se há motivo para apontar. Quem decide formalmente sobre a carga pode ser outra pessoa (H39), então a meta não é "decidir sobre a carga".
- **Nível de detalhe:** operadores no nível da ação do usuário (perceber, ajustar, comparar, decidir). Não há estimativa de tempo (não é KLM) nem desenho de tela. O que depende de interface ainda não projetada aparece como forma em aberto.

**Base dos métodos:**

- **M1 [F]** é a prática atual de examinar a imagem com os tratamentos visuais do software do fabricante (C01, C03; ADE Coana nº 19/2014, item 1.2.8).
- **M2 [H]** é hipótese de uso da contribuição do TCC: examinar a imagem a partir da região que a IA aponta. Não há evidência de que seja mais rápido ou mais seguro (H34).
- O resto é marcado em cada operador como `[F]`, `[H]` ou `[?]`.

### Goal

`G0: Concluir se há motivo para apontar suspeita na imagem de um contêiner`

**Submetas e ordem (M0):** `G1 >> G2 >> G3`. Se G1 não deixar nenhuma região em dúvida, G2 pode ser dispensada e G3 conclui "não apontar" `[H]`.

- `G1: Examinar a imagem e identificar regiões de dúvida`
- `G2: Confrontar a região em dúvida com a carga declarada`
- `G3: Decidir se aponta suspeita`

### Diagrama

![GOMS T02](../assets/05_tarefas/goms_t02.svg)

*Linha contínua: método baseado em fato `[F]`. Linha tracejada: hipótese de design `[H]`. O SVG é a fonte editável.*

### Métodos, operadores e regras de seleção

**Para G1 (examinar a imagem e identificar regiões de dúvida)**

- **Method M1:** exame direto, com os tratamentos visuais do software do fabricante `[F]`.
  1. Perceber a imagem inteira e as cores atribuídas a cada material.
  2. Varrer a imagem em busca de regiões que diferem do esperado.
  3. Para cada região em dúvida, repetir até conseguir dizer se faz parte da carga ou esgotar os tratamentos: ampliar e deslocar a imagem; ajustar contraste e brilho; ligar o realce de bordas; alternar pseudo-cor ou inversão e comparar com a imagem original.
  4. Reter quais regiões seguem em dúvida.
  - Operators: O1, O2, O3, O4, O5, O6, O7.
- **Method M2:** exame orientado pela região que a IA aponta `[H]`.
  1. Perceber a imagem e a região apontada pela IA.
  2. Perceber onde e por que a região foi apontada (forma de explicação em aberto, H31).
  3. Ampliar e deslocar a imagem até a região.
  4. Mostrar ou ocultar a camada da IA para comparar com a imagem sem ela (forma em aberto, H30, RC09).
  5. Ajustar contraste ou realce, se necessário.
  6. Varrer o restante da imagem por dúvida própria.
  7. Decidir se a região faz parte da carga.
  - Operators: O1, O8, O9, O4, O10, O3, O5, O2, O7.
- **Selection Rule SR1:** usar M2 quando a análise da IA estiver concluída e apontar região; usar M1 quando não houver análise (em curso, indisponível, ?05 e H27) ou quando a IA não apontar região.
- **Selection Rule SR1.1 (dentro de M2):** se Gustavo discordar da região apontada ou tiver dúvida em outra parte da imagem, aplicar o passo 3 de M1 nessa parte.

**Para G2 (confrontar a região com a carga declarada)**

- **Method M3:** dados da declaração mostrados na própria estação `[F]` para o campo de produtos no software do fabricante (C03), `[?]` para o que a unidade de Gustavo realmente mostra.
  1. Ler a descrição e a natureza da carga declarada.
  2. Recordar o que essa carga deveria mostrar na imagem.
  3. Comparar a região em dúvida com isso.
  - Operators: O11, O12, O13.
- **Method M4:** consulta à declaração fora da estação `[H]`.
  1. Abrir a declaração em outro sistema.
  2. Ler e reter a descrição da carga.
  3. Voltar à imagem e comparar.
  - Operators: O14, O11, O12, O13.
- **Selection Rule SR2:** usar M3 quando a estação mostrar os dados da declaração; usar M4 quando não mostrar.

**Para G3 (decidir se aponta suspeita)**

- **Method M5:** avaliar a compatibilidade e concluir `[H]`: a estrutura vem do CP01, que é cenário, e a segunda opinião não tem fonte.
  1. Avaliar se a região é compatível com a carga declarada.
  2. Se compatível, concluir "não apontar".
  3. Se incompatível, concluir "apontar".
  4. Se a dúvida persistir, pedir segunda opinião `[H]` ou concluir sob incerteza, pesando o custo de errar (H12).
  - Operators: O13, O15.
- **Selection Rule SR3:** critérios de decisão. Compatível, concluir "não apontar". Incompatível, concluir "apontar". Dúvida persistente, aplicar o passo 4 de M5. Não há fonte que diga se Gustavo pode pedir segunda opinião `[?]`.

> M1 e M2 são alternativas para G1, e M3 e M4 para G2. G3 tem um único método (M5), então SR3 não escolhe entre métodos: ela organiza os critérios de decisão.

### Operadores

| ID | Operador (ação do usuário) | Tipo | Base |
|---|---|---|---|
| O1 | Perceber a imagem inteira e as cores atribuídas a cada material | perceptivo | [F] C01, C03 |
| O2 | Varrer a imagem em busca de região que difere do esperado | perceptivo | [F] C01, C03 |
| O3 | Ajustar contraste, brilho e equalização | motor e cognitivo | [F] C01, C03 |
| O4 | Ampliar e deslocar a imagem até uma região | motor | [F] C01, C03 |
| O5 | Ligar o realce de bordas | motor | [F] C01, C03 |
| O6 | Alternar pseudo-cor ou inversão e comparar com a imagem original | motor e perceptivo | [F] C01, C03 |
| O7 | Reter quais regiões seguem em dúvida | cognitivo | [H] |
| O8 | Perceber a região apontada pela IA | perceptivo | [H] |
| O9 | Perceber a explicação de onde e por que a região foi apontada | perceptivo | [H] H31 |
| O10 | Mostrar ou ocultar a camada da IA | motor | [H] H30, RC09 |
| O11 | Ler os dados da declaração (na estação em M3, em outro sistema em M4) | perceptivo | [F] C03 na estação, [?] na unidade |
| O12 | Recordar o que a carga declarada deveria mostrar | cognitivo | [H] H11 |
| O13 | Comparar a região com o que a carga deveria mostrar | cognitivo | [H] H11 |
| O14 | Abrir a declaração em outro sistema | motor | [H] |
| O15 | Concluir "apontar" ou "não apontar" | cognitivo | [H] CP01 |

### Interpretação

O modelo mostra que o exame depende de três coisas ao mesmo tempo: do que Gustavo percebe na imagem (G1), do que ele sabe sobre a carga (G2) e de uma conclusão que ele precisa sustentar (G3). A IA entra apenas em G1, como alternativa de método (M2), e não substitui G2 nem G3: o mapa residual diz onde a imagem se afasta de uma carga normal, mas não diz se a região é compatível com a carga declarada.

M1 reproduz o que o CP01 descreve: Gustavo percorre a imagem, recorre a tratamentos visuais e fica na dúvida. M2 troca a varredura inicial por uma região de partida, mas mantém a varredura do restante (passo 6) e a possibilidade de discordar (SR1.1), para que o julgamento continue sendo dele.

### Problemas e decisões de design observadas

Estas são observações do modelo, não soluções.

| # | Observação | Onde aparece | Base |
|---|---|---|---|
| 1 | A varredura de M1 depende de atenção sustentada e perde qualidade com cansaço. | M1 passo 2 | [H] H10, H13 |
| 2 | O laço do passo 3 de M1 não tem critério de parada. Sem ele, Gustavo pode gastar tempo em uma região enquanto há contêineres esperando. | M1 passo 3 | [H] H16 |
| 3 | A camada da IA pode competir com a pseudo-cor do software do fabricante. Não se sabe como as duas conviveriam na mesma imagem. | M2 passo 4 | [H] H30, RC09 |
| 4 | Com a região já apontada, há risco de Gustavo deixar de olhar o resto da imagem. O passo 6 e SR1.1 existem para preservar o julgamento dele. | M2 passos 6 e 7 | [H] RC02 |
| 5 | M4 obriga a trocar de sistema e a lembrar a descrição da carga ao voltar à imagem. | M4 | [H] H11 |
| 6 | O erro tem custo nos dois sentidos: apontar sem motivo atrasa a carga, e não apontar pode deixar passar um ilícito. | G3 | [H] H12 |
| 7 | Depois da conclusão, não está claro se Gustavo recebe retorno sobre o que aconteceu com a carga. | fim de G3 | [?] ?08, CP01 |
| 8 | O benefício de M2 sobre M1 (menos fadiga, foco mais rápido) não foi medido. | SR1 | [H] H34 |

### Verificação do GOMS

- **Goals:** G0 é uma meta de Gustavo (concluir se há motivo para apontar), não uma ação de tela. G1, G2 e G3 são metas, não passos.
- **Operators:** os operadores O1 a O15 são ações no nível definido (perceber, ajustar, comparar, decidir) e não dependem de componente de interface.
- **Methods:** M1 e M2 atingem a mesma meta (G1) por caminhos diferentes. M3 e M4 atingem G2. M5 é o único caminho de G3.
- **Selection Rules:** SR1 e SR2 trazem condição observável (a IA concluiu e apontou? a estação mostra a declaração?). SR3 traz critérios de decisão.
- **Origem:** M1 e M3 têm base em fato (C01, C03, ADE Coana nº 19/2014), M3 com a lacuna sobre a unidade. M2, M4 e M5 são hipóteses e estão marcadas como tal.
- **Limites:** a tarefa não modela triagem (A01), registro (A03), nem o que o auditor faz depois. Também não assume que Gustavo decida sobre a carga (H39).

### Rastreabilidade

| Elemento | Origem |
|---|---|
| Persona | P01 |
| Cenário | CP01 |
| Atividade | A02 |
| Linha da cadeia de contribuição | R01 |
| Hipóteses e lacunas | H05, H10, H11, H12, H13, H16, H30, H31, H34, H38, H39, H41, ?05, ?08 |
| Recomendações da concorrência | RC02, RC09 |
| Concorrentes | C01, C03 |

---

## CTT — T03 {{nome da tarefa}}

**Autor(a):** {{nome — matrícula}}

### Descrição

{{...}}

### Diagrama

![CTT T03](../assets/05_tarefas/ctt_t03.svg)

### Legenda e relações temporais usadas

| Operador/relação | Significado no diagrama | Exemplo no modelo |
|---|---|---|
| {{...}} | {{...}} | {{...}} |

Identifique, quando aplicável, tarefas de usuário, sistema, interação e tarefas abstratas. Verifique se concorrência, escolha, habilitação, desabilitação e repetição estão representadas corretamente segundo a notação adotada em aula.

---

## Síntese da equipe

Quais problemas de interação, oportunidades e requisitos apareceram a partir das modelagens? Quais tarefas irão para o protótipo e para o teste de usabilidade?

## Checklist

- [ ] Cada integrante produziu ao menos 1 HTA, 1 GOMS e 1 CTT.
- [ ] Cada artefato identifica autor e tarefa.
- [ ] Diagramas são legíveis e possuem fonte editável quando possível.
- [ ] HTA contém planos, não apenas árvore de tópicos.
- [ ] GOMS distingue Goals, Operators, Methods e Selection Rules.
- [ ] CTT usa operadores temporais e tipos de tarefa coerentes.
- [ ] Há texto explicando cada diagrama.
- [ ] Tarefas estão ligadas a cenários/personas na rastreabilidade.
- [ ] Em TCC técnico, as tarefas descrevem o que a pessoa faz com a contribuição/resultados, não passos internos do código.
- [ ] CRUDs, relatórios, filtros e atividades administrativas foram escolhidos por relevância ao objetivo do usuário.
