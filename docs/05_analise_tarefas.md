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
- submeter um dataset e verificar sua validez;
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
| T01 | Localizar o contêiner, inspecionar fisicamente o conteúdo e registrar divergências no pátio | P03 / CP03 | Média / Alta: crítica para o fechamento da fiscalização e cadeia de custódia da prova física | Alexandre Domiciano Pierri — 22.125.061-6 |

> Priorize tarefas necessárias para que o usuário alcance objetivos centrais. Não desperdice a modelagem em ações triviais isoladas, como “clicar em login”, se o objetivo relevante é maior. Da mesma forma, não modele o funcionamento interno do algoritmo como se fosse uma tarefa humana.

---

## HTA — T01 Localizar o contêiner, inspecionar fisicamente o conteúdo e registrar divergências no pátio

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Descrição da tarefa

**Objetivo:** Localizar o contêiner direcionado no pátio, realizar a abertura física, inspecionar o conteúdo confrontando com os documentos declarados e registrar formalmente eventuais divergências.  
**Ponto de início:** Recebimento da ordem de verificação física para carga em canal vermelho ou cinza.  
**Conclusão esperada:** Contêiner vistoriado, termo de ocorrência preenchido, evidências fotográficas anexadas e comunicação enviada ao Auditor-Fiscal (P02).  
**Contexto:** Pátio aberto de terminal portuário, sujeito a intempéries, ruído intenso de maquinário pesado e pressões operacionais por liberação de carga.

### Diagrama

![HTA T01](../assets/05_tarefas/HTA_ALE.svg)

### Decomposição e planos

| ID | Objetivo/operação | Plano/ordem | Problema ou decisão de design observada |
|---|---|---|---|
| 0 | Vistoriar fisicamente a carga no pátio e registrar divergências | 1 > 2 > 3 > 4 | O processo analógico atual depende de deslocamentos cegos e registros em papel/celular particular. |
| 1 | Localizar e acessar o contêiner no pátio | 1.1 > 1.2 | Ausência de mapa residual ou coordenadas espaciais precisas para orientar a equipe diretamente ao ponto de anomalia. |
| 1.1 | Conferir a identificação visual (número do contêiner e placa) | - | Inspeção visual direta sujeita a falhas sob baixa visibilidade. |
| 1.2 | Coordenar com a equipe de apoio o posicionamento | - | Dependência de comunicação verbal via rádio sujeita a ruídos e atritos operacionais. |
| 2 | Abrir o contêiner e inspecionar o conteúdo | 2.1 > 2.2 | Risco de descarregamento cego e exaustivo de toneladas de carga por falta de indicação de profundidade da ROI. |
| 2.1 | Romper o lacre de segurança sob supervisão | - | Registro manual do número do lacre em prancheta de papel. |
| 2.2 | Realizar a descaltagem e conferência visual | - | Esforço físico extremo e risco de quebra da cadeia de frio em cargas refrigeradas (reefer). |
| 3 | Constatar e documentar divergências físicas | 3.1 / 3.2 (Seleção) | *Plano de seleção:* se houver conformidade, encerra; se houver divergência, executa o registro detalhado. |
| 3.1 | Registrar divergências de volumetria ou mercadoria oculta | - | Uso de bloco de notas físico sujeito a perdas e rasuras. |
| 3.2 | Capturar evidências fotográficas das irregularidades | - | Fotos avulsas em aparelhos particulares sem vínculo automático com o dossiê oficial. |
| 4 | Formalizar e transmitir a ocorrência | 4.1 > 4.2 | Ruptura de comunicação entre o campo (P03) e o gabinete de despacho (P02). |
| 4.1 | Comunicar resultado da vistoria à fiscalização | - | Comunicação fragmentada e geradora de atrasos na liberação. |
| 4.2 | Consolidar e protocolar o relatório no sistema | - | Retrabalho de redigitação posterior das informações coletadas em campo. |

**Verificação do HTA:**

- O objetivo 0 representa uma meta do usuário? Sim, reflete a execução completa da vistoria tática de campo.
- As subtarefas são necessárias e suficientes? Sim, cobrem desde a chegada ao pátio até a formalização.
- Os **planos** indicam ordem, alternativa, repetição ou condição? Sim, o plano 3 emprega condição de seleção.
- A decomposição parou em nível útil para projeto de interação? Sim, evidencia as lacunas analógicas que justificam a ferramenta de campo.

---

## GOMS — T02 Registrar ocorrência de divergência física em campo

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Descrição da tarefa

Persona: P03 Marcos Oliveira, agente de campo. Cenário de origem: CP03. Atividade: A04 / A05 (conferência física e registro de divergências).  
Linha da cadeia de contribuição: R01 / suporte espacial para verificação no pátio.

- **Início:** Marcos depara-se com uma divergência física ou falso positivo durante a abertura do contêiner no pátio.
- **Fim:** O termo de ocorrência e as evidências são registrados e transmitidos para a retaguarda.
- **Nível de detalhe:** Operadores no nível da ação do usuário (perceber, apontar, fotografar, registrar), sem estimativas de tempo via KLM.

### Goal

`G0: Registrar formalmente a divergência encontrada na vistoria física do contêiner`

**Submetas e ordem (M0):** `G1 >> G2 >> G3`.

- `G1: Identificar a ocorrência e os dados da carga no terminal móvel`
- `G2: Registrar a natureza da divergência e capturar evidências visuais`
- `G3: Transmitir o termo de vistoria validado para a fiscalização`

### Métodos, operadores e regras de seleção

- **Method M1: Registro Digital Integrado via Aplicativo Móvel (Proposição de Design)**
  - 1. Perceber os dados e o mapa residual de orientação na tela do dispositivo móvel.
  - 2. Selecionar o tipo de divergência em campos estruturados (volumetria, mercadoria oculta, falso positivo estrutural).
  - 3. Acionar a câmera integrada para capturar a evidência fotográfica vinculada ao caso.
  - 4. Revisar e tocar em "Confirmar e Enviar Termo".
  - Operators: O1, O2, O3, O4, O5.
- **Method M2: Registro Manual Tradicional em Papel e Rádio (Situação Atual / Concorrente)**
  - 1. Anotar manualmente as divergências em bloco de notas físico.
  - 2. Fotografar a irregularidade usando um celular particular.
  - 3. Acionar o rádio comunicador para informar a fiscalização.
  - 4. Retornar à sala administrativa para redigitar os dados no sistema fixo.
  - Operators: O6, O7, O8, O9.
- **Selection Rule SR1:** Usar o **Method M1** quando o aplicativo móvel de campo estiver disponível e operando com conectividade; usar o **Method M2** em situações de contingência de rede ou ausência de equipamento digital oficial.

### Operadores

| ID | Operador (ação do usuário) | Tipo | Base |
|---|---|---|---|
| O1 | Perceber dados e orientações na tela do coletor móvel | perceptivo | [H] Proposta |
| O2 | Selecionar campos de inconformidade por toque rápido | motor | [H] Proposta |
| O3 | Acionar câmera integrada para registro fotográfico com metadados | motor | [H] Proposta |
| O4 | Revisar informações compiladas do termo | cognitivo | [H] Proposta |
| O5 | Tocar no botão de envio para transmissão síncrona | motor | [H] Proposta |
| O6 | Escrever anotações manuais em bloco de papel | motor | [F] CP03 |
| O7 | Fotografar com aparelho particular | motor | [F] CP03 |
| O8 | Acionar rádio portátil PTT para comunicação verbal | motor e verbal | [F] CP03 |
| O9 | Redigitar laudo posteriormente no computador de mesa | motor e cognitivo | [F] CP03 |

---

## CTT — T03 Execução e formalização da vistoria física no pátio

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

### Descrição

Modelagem das relações temporais e de comunicação entre o agente de campo (P03), o terminal móvel de vistoria e o sistema de retaguarda da fiscalização durante a inspeção física de um contêiner.

### Diagrama

![CTT T03](../assets/05_tarefas/CTT_ALE.svg)

### Legenda e relações temporais usadas

| Operador/relação | Significado no diagrama | Exemplo no modelo |
|---|---|---|
| `>>` | Ativação sequencial (a segunda tarefa inicia após o término da primeira) | `Deslocar-se ao contêiner >> Abrir o contêiner` |
| `[]>>` | Ativação com passagem de informação | `Capturar fotos e dados no app móvel []>> Anexar ao processo eletrônico` |
| `|||` | Tarefas concorrentes (podem ocorrer em qualquer ordem ou simultaneamente) | `Verificar volumetria e lacre ||| Conferir dados no terminal móvel` |

---

## Síntese da equipe

A modelagem de tarefas evidenciou que o principal gargalo operacional de campo reside na dependência de meios analógicos e fragmentados (papel, rádio e celular pessoal). A introdução de um fluxo móvel integrado reduz o esforço motor de redigitação, garante a segurança da cadeia de custódia por meio de transmissão direta de evidências (`[]>>`) e orienta a equipe de pátio com precisão espacial, mitigando falsos positivos e o desgaste físico severo em cargas refrigeradas.

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
