# Entrega 5 — Análise de tarefas: HTA, GOMS e CTT

**Data:** {{15/10/2026}}  
**Status:** ⬜ não iniciada  
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

## Seleção das tarefas

| ID | Tarefa | Persona/cenário de origem | Frequência/criticidade | Autor responsável |
|---|---|---|---|---|
| T01 | Localizar contêiner, realizar vistoria física no pátio e registrar divergências | P03 / CP03 | Média / Alta (crítica para o fechamento da fiscalização e garantia da cadeia de custódia da prova) | Alexandre Domiciano Pierri — 22.125.061-6 |
| T02 | Registrar ocorrência de divergência física e anexar evidências em campo | P03 / CP03 | Média / Alta | Alexandre Domiciano Pierri — 22.125.061-6 |
| T03 | Execução e formalização tática da vistoria física no pátio | P03 / CP03 | Média / Alta | Alexandre Domiciano Pierri — 22.125.061-6 |

> Priorize tarefas necessárias para que o usuário alcance objetivos centrais. Não desperdice a modelagem em ações triviais isoladas, como “clicar em login”, se o objetivo relevante é maior. Da mesma forma, não modele o funcionamento interno do algoritmo como se fosse uma tarefa humana.

---

## HTA — T01 Localizar contêiner, realizar vistoria física no pátio e registrar divergências

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Descrição da tarefa

**Objetivo:** Localizar o contêiner no pátio do terminal, realizar a abertura do lacre, inspecionar fisicamente o conteúdo confrontando com a declaração de carga e registrar formalmente qualquer divergência constatada (volumetria ou mercadoria oculta).  
**Ponto de início:** Recebimento da ordem de verificação física para carga direcionada ao canal vermelho ou cinza.  
**Conclusão esperada:** Contêiner inspecionado, relatório/termo de ocorrência de vistoria preenchido, evidências fotográficas anexadas e situação transmitida ao Auditor-Fiscal (P02).  
**Contexto:** Pátio aberto de terminal portuário, sob ruído intenso de máquinas e empilhadeiras, exposição a intempéries (sol/chuva) e pressão por liberação logística.

### Diagrama

![HTA T01](../assets/05_tarefas/HTA_ALE.svg)

### Decomposição e planos

| ID | Objetivo/operação | Plano/ordem | Problema ou decisão de design observada |
|---|---|---|---|
| 0 | Vistoriar fisicamente a carga no pátio e registrar divergências | 1 > 2 > 3 > 4 | O processo atual é sequencial e depende de ferramentas analógicas/descentralizadas (papel, rádio e celular pessoal). |
| 1 | Localizar e acessar o contêiner no pátio | 1.1 > 1.2 | Dificuldade de orientação no pátio lotado sem indicação de quadrante/setor exato. |
| 1.1 | Conferir a identificação visual (número do contêiner e placa) | - | Inspeção visual direta sujeita a erros operacionais ou baixa visibilidade. |
| 1.2 | Deslocar a equipe de apoio e equipamentos de abertura | - | Coordenação via rádio sujeira a ruídos com a equipe de manobra do terminal. |
| 2 | Abrir o contêiner e inspecionar o conteúdo | 2.1 > 2.2 | Risco de quebra de cadeia de custódia se o rompimento do lacre não for registrado imediatamente. |
| 2.1 | Romper o lacre de segurança sob supervisão | - | Registro manual do número do lacre em formulário impresso de papel. |
| 2.2 | Inspecionar a disposição e o tipo da mercadoria | - | Ausência de comparativo visual direto no campo com a imagem do escâner para guiar a busca. |
| 3 | Constatar e documentar divergências físicas | 3.1 / 3.2 (Seleção) | *Plano de seleção:* Se houver conformidade, encerra com liberação; se houver irregularidade, registra a ocorrência. |
| 3.1 | Registrar divergências de volumetria ou mercadoria oculta | - | Uso de bloco de notas físico (risco de rasura ou perda de dados). |
| 3.2 | Capturar evidências fotográficas das irregularidades | - | Fotos tiradas em celular particular sem vínculo direto com o dossiê eletrônico. |
| 4 | Formalizar e transmitir a ocorrência | 4.1 > 4.2 | Desconexão entre o agente no pátio (P03) e o gabinete do Auditor-Fiscal (P02). |
| 4.1 | Comunicar o resultado da vistoria à fiscalização | - | Comunicação verbal via rádio propensa a mal-entendidos. |
| 4.2 | Consolidar e protocolar o relatório de vistoria | - | Retrabalho administrativo de redigitação posterior das anotações no terminal fixo. |

**Verificação do HTA:**

- O objetivo 0 representa uma meta do usuário? Sim, representa a execução completa da vistoria tática por P03.
- As subtarefas são necessárias e suficientes? Sim, cobrem desde a localização física até o envio do relatório.
- Os **planos** indicam ordem, alternativa, repetição ou condição? Sim, o plano 3 usa condição de seleção (carga conforme vs. divergente).
- A decomposição parou em nível útil para projeto de interação? Sim, o nível de operações expõe os pontos de ruptura analógica que justificam a interface móvel de apoio.

---

## GOMS — T02 Registrar ocorrência de divergência física em campo

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Goal

`G0: Registrar formalmente a divergência de volumetria ou mercadoria encontrada na vistoria física do contêiner`

### Métodos, operadores e regras de seleção

- **Method M1: Registro Digital Integrado via Aplicativo Móvel (Proposição de Design)**
  - *Subgoals:*
    - `G1`: Identificar o contêiner no aplicativo de pátio
    - `G2`: Registrar tipo de inconformidade e volumetria divergente
    - `G3`: Capturar e anexar evidência fotográfica da irregularidade
    - `G4`: Transmitir o termo de ocorrência para a fiscalização
  - *Operators:*
    - Perceber dados e quadrantes exibidos na tela do dispositivo móvel
    - Apontar o dedo para o campo de entrada de dados
    - Tocar em botões de seleção rápida (ex.: "Divergência de Volumetria", "Carga Oculta")
    - Acionar a câmera integrada do coletor/tablet móvel
    - Tocar em "Confirmar e Enviar Relatório"
- **Method M2: Registro Manual Tradicional em Papel e Rádio (Situação Atual / Concorrente)**
  - *Subgoals:*
    - `G1`: Anotar dados e divergências em bloco de notas de papel
    - `G2`: Fotografar as irregularidades com celular particular
    - `G3`: Acionar rádio comunicador para avisar a retaguarda
    - `G4`: Redigitar o laudo no sistema fixo ao retornar ao escritório
  - *Operators:*
    - Pegar caneta no bolso
    - Escrever dados à mão na folha/prancheta
    - Manusear celular pessoal e tirar foto da carga
    - Pressionar o botão PTT do rádio portátil
    - Falar as coordenadas e os dados da divergência
    - Deslocar-se até a sala administrativa para redigitar os dados no computador
- **Selection Rule SR1:** Usar o **Method M1** sempre que o dispositivo móvel oficial estiver disponível e com conectividade no pátio; usar o **Method M2** (contingência) em casos de falha de equipamento ou falta de sinal.

---

## CTT — T03 Execução e formalização da vistoria física no pátio

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Descrição

Modelagem das relações temporais e de comunicação entre o agente de campo (P03), o aplicativo móvel e o sistema de retaguarda durante a vistoria física de um contêiner no pátio.

### Diagrama

![CTT T03](../assets/05_tarefas/CTT_ALE.svg)

### Legenda e relações temporais usadas

| Operador/relação | Significado no diagrama | Exemplo no modelo |
|---|---|---|
| `>>` | Ativação sequencial (a segunda tarefa só inicia após o término da primeira) | `Deslocar-se e abrir contêiner >> Inspecionar e registrar carga` |
| `[]>>` | Ativação com passagem de informação | `Capturar fotos e dados no app móvel []>> Anexar fotos ao processo eletrônico` |
| `\|\|\|` | Tarefas concorrentes (podem ser realizadas em qualquer ordem ou simultaneamente) | `Verificar volumetria e lacre \|\|\| Capturar fotos e dados no app móvel` |

---

## Síntese da equipe

A aplicação das técnicas HTA, GOMS e CTT sobre o fluxo operacional de campo (Persona P03) revelou que a maior fragilidade da rotina atual está na fragmentação do processo de registro de divergências (uso de papel, fotos em celulares pessoais e rádio).

A análise evidenciou as seguintes oportunidades de design para a solução:
1. **Redução de Carga Motora e Cognitiva:** O modelo GOMS demonstrou que a substituição da rotina em papel pelo aplicativo móvel elimina múltiplos passos de redigitação e deslocamento físico, acelerando a liberação do pátio.
2. **Cadeia de Custódia e Rastreabilidade:** O diagrama CTT reforçou a necessidade de uma relação do tipo ativação com passagem de informação (`[]>>`) direta entre a captura da foto em campo e a anexação no dossiê do Siscomex, garantindo validade jurídica e acesso imediato ao Auditor-Fiscal (P02).
3. **Direcionamento para Protótipos:** As tarefas de *localização de contêiner*, *registro em um toque de inconformidades* e *captura de fotos com metadados integrados* serão a base para as telas móveis desenvolvidas nas próximas entregas.

---

## Checklist

- [x] Cada integrante produziu ao menos 1 HTA, 1 GOMS e 1 CTT.
- [x] Cada artefato identifica autor e tarefa.
- [x] Diagramas são legíveis e possuem fonte editável quando possível.
- [x] HTA contém planos, não apenas árvore de tópicos.
- [x] GOMS distingue Goals, Operators, Methods e Selection Rules.
- [x] CTT usa operadores temporais e tipos de tarefa coerentes.
- [x] Há texto explicando cada diagrama.
- [x] Tarefas estão ligadas a cenários/personas na rastreabilidade.
- [x] Em TCC técnico, as tarefas descrevem o que a pessoa faz com a contribuição/resultados, não passos internos do código.
- [x] CRUDs, relatórios, filtros e atividades administrativas foram escolhidos por relevância ao objetivo do usuário.
