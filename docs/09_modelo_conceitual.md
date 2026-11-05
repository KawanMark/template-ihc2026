# Entrega 9 — Modelo conceitual e design centrado na comunicação

**Data:** 04/11/2026<br>
**Status:** 🟩 concluída<br>
**Responsabilidade:** soluções individuais e consolidação da equipe

## Objetivo e base do projeto

Definir como a Mesa de inspeção comunica o resultado do modelo e permite registrar um parecer. Os cenários abaixo partem de [CP01–CP03](04_cenarios_problema.md), das tarefas T01–T09, dos fluxos PF01/PF02 e das [metas MU01–MU06](08_engenharia_usabilidade.md).

São situações propostas para o protótipo, não sessões realizadas com profissionais. As respostas de refinamento são decisões de projeto baseadas nas entregas anteriores, não depoimentos de usuários. Cada cenário apresenta versão inicial, perguntas e versão refinada, seguindo o ciclo da aula. **Os trechos em negrito apresentam a interação acrescentada ou alterada em relação ao cenário de problema.** As condições de turno, fadiga e comunicação dos cenários originais continuam hipóteses. O sistema apoia a análise e produz um parecer; não autoriza desembaraço.

## 1. Soluções individuais

### CI01 — examinar a imagem e registrar uma suspeita

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5<br>
**Origem:** CP01; P01 Gustavo Onofre; T01–T03; PF01/PF02.

**Versão inicial:** Gustavo recebe a radiografia de um contêiner declarado como paletes de madeira. **Confere o caso, consulta a indicação do modelo, compara com a imagem original e registra uma região em dúvida com seu parecer.**

**Questões de refinamento:**

| Questão | Resposta de projeto | Efeito no cenário |
|---|---|---|
| Q1 — Como distingue interpretação humana e resultado automático? | A indicação do modelo tem seu alcance explicado; a conclusão é informada pelo analista. | A dúvida pode permanecer sem ser tratada como ilícito confirmado. |
| Q2 — Como examina a região sem perder o contexto? | Pode comparar a indicação com o original e consultar a carga declarada. | Confronta as evidências antes de registrar. |
| Q3 — O que acontece se o registro estiver incompleto? | O sistema informa a omissão e mantém os dados já informados. | Gustavo corrige e revisa antes de concluir. |

**Cenário refinado:** Durante o plantão, Gustavo recebe a radiografia de um contêiner declarado como paletes de madeira e observa uma região mais densa. **[Q1] Ao consultar o caso, é informado de que a análise está em andamento e, depois, recebe a indicação do modelo com seus limites. [Q2] Compara a região com a imagem original e a descrição da carga, usando os recursos de exame sem alterar o arquivo original.** Como a dúvida permanece, **registra a região e descreve o que observou, deixando sua conclusão e justificativa separadas do resultado automático. [Q3] Se omitir uma informação necessária, o sistema explica o que falta e permite completar o registro sem perder o trabalho. Gustavo revisa o caso e o parecer e solicita a emissão do documento de apoio.** A suspeita fica registrada para encaminhamento, sem afirmar que foi confirmada.

| Alteração em relação a CP01 | Motivo | Base |
|---|---|---|
| Contexto da carga junto da radiografia | Apoiar a comparação com o que está declarado. | H11; ED02; OBS-01 da Entrega 6. |
| Comparação e explicação do mapa | Ajudar a examinar o destaque sem perder a imagem original. | R01; H30/H31; MU01/MU02. |
| Marcação comentada e parecer revisável | Preservar o achado e a justificativa. | R03; T03; MU03/MU05. |

### CI02 — compreender o parecer antes de decidir

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8<br>
**Origem:** CP02; P02 Eduardo Resende; T04–T06; PF02.

**Versão inicial:** Eduardo recebe um caso cuja carga levantou suspeita no escâner. **Consulta o parecer emitido na análise, relaciona o achado à carga declarada e usa essa informação para fundamentar sua decisão no despacho.**

**Questões de refinamento:**

| Questão | Resposta de projeto | Efeito no cenário |
|---|---|---|
| Q1 — Como verifica que recebeu o documento correto? | O parecer informa caso, responsável e data. | Confere a correspondência antes de utilizar o achado. |
| Q2 — Como entende a origem da suspeita? | A região registrada tem comentário e conclusão humana distinguida do modelo. | Relaciona a indicação visual ao fundamento do parecer. |
| Q3 — E se faltar informação ou o caso estiver errado? | O documento não substitui esclarecimento nem decisão formal; o contato segue por canal externo. | Eduardo interrompe o uso da evidência e solicita correção. |

**Cenário refinado:** Eduardo precisa decidir sobre uma carga que levantou suspeita no escâner. **[Q1] Recebe o parecer de apoio e confere identificação do caso, autoria e data. [Q2] Relaciona a região registrada ao comentário do analista e à carga declarada. O documento distingue o resultado do modelo da conclusão humana, permitindo compreender o fundamento da suspeita. [Q3] Se encontrar divergência ou informação insuficiente, solicita esclarecimento pelo canal institucional antes de se apoiar no parecer.** A decisão formal permanece no sistema do despacho. **A emissão do parecer pela Mesa não significa transmissão automática ao Siscomex.**

| Alteração em relação a CP02 | Motivo | Base |
|---|---|---|
| Parecer com caso, autor, região e comentário | Propor uma forma de tornar a suspeita compreensível ao destinatário. | R03; T05/T06; H28/?08 ainda abertas. |
| Separação entre resultado e conclusão humana | Evitar atribuir à IA a decisão formal. | H39; MU02; ED01/ED03. |
| Conferência do documento e pedido de esclarecimento | Permitir reconhecer informação insuficiente ou caso incorreto. | MU03/MU05; RC04/RC07. |

### CI03 — preparar a informação para a conferência física

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6<br>
**Origem:** CP03; P03 Marcos Oliveira como stakeholder; T07–T09 exploratórias; contribuição para PF02.

**Versão inicial:** Marcos participa da conferência de um contêiner refrigerado retido após suspeita. **O responsável pelo encaminhamento prepara um parecer que identifica a carga e descreve a região observada, para que a equipe compreenda a origem da solicitação.**

**Questões de refinamento:**

| Questão | Resposta de projeto | Efeito no cenário |
|---|---|---|
| Q1 — Quem usa a Mesa nessa preparação? | P01/P02 revisam o documento; P03 é destinatário externo. | Não pressupõe interação direta de Marcos com o sistema. |
| Q2 — A região da radiografia identifica uma posição física exata? | É referência visual aproximada, dependente de interpretação e contexto. | Não determina sozinha o procedimento de abertura da carga. |
| Q3 — Como corrige uma referência ausente ou divergente? | Na origem, o responsável revê o caso e corrige região/comentário antes de emitir o documento. | O encaminhamento ocorre com informações consistentes. |

**Cenário refinado:** Marcos participa da conferência de um contêiner refrigerado retido após suspeita. **[Q1] Na origem, o responsável consulta o parecer preparado na Mesa. [Q3] Confere a identificação da carga e a correspondência entre região, comentário e conclusão; se houver omissão ou divergência, corrige o registro e solicita uma nova emissão. Marcos recebe o documento pelo procedimento institucional. [Q2] A região apresentada ajuda a compreender onde a diferença foi observada na radiografia, mas não é tratada como coordenada física exata.** A equipe conduz a verificação conforme seu procedimento. **O resultado é registrado no fluxo do despacho; seu retorno automático à Mesa não é presumido.** A proposta não afirma redução medida do tempo de conferência.

| Alteração em relação a CP03 | Motivo | Base |
|---|---|---|
| Identificação, marcação e descrição no parecer | Propor informação que ajude a esclarecer a origem da suspeita. | H28/?08; R03; MU03. |
| Conferência do conteúdo antes do encaminhamento | Reduzir a chance de trocar caso ou região. | MU05; RC04. |
| Entrega externa do documento, sem tela para P03 | Respeitar o recorte e a ausência de evidência de uso direto. | H42; ED03. |

## 2. Design centrado na comunicação

**Convenção:** `U` é o usuário; `D` é o preposto do designer/sistema. As falas descrevem a intenção da interação, não um roteiro de entrevista. Em CI02/CI03, o parecer comunica por seu conteúdo; ações institucionais externas não são comandos da Mesa.

| Cenário / tópico > subtópico | Falas e signos | Intenção |
|---|---|---|
| CI01 — caso > identificação | U: “Quero examinar este caso.” D: “Esta é a imagem e esta é a carga informada.” **S01/S02** | Conferir o contexto antes de analisar. |
| CI01 — análise > andamento | D: “Analisando imagem”; ou “Não foi possível analisar. Tente novamente.” **S03** | Distinguir espera, resultado e falha. |
| CI01 — análise > resultado | U: “O que o modelo indicou?” D: “Este é o resultado e esta é a região relevante para a predição.” **S04/S05** | Explicar o apoio e seus limites. |
| CI01 — comparação > visualização | U: “Quero ver o original e comparar.” D: “Você pode ocultar o mapa ou ver lado a lado.” **S02/S05/S06** | Preservar a leitura da imagem. |
| CI01 — registro > achado | U: “Quero registrar esta região e o que observei.” D: “Região numerada, com comentário editável.” **S07/S08** | Vincular observação à marcação. |
| CI01 — registro > conclusão | U: “Quero concluir o parecer.” D: “Informe conclusão, justificativa e responsável.” **S09/S10/S11** | Distinguir julgamento humano e modelo. |
| CI01 — exportação > revisão/erro | D: “Revise o caso e as regiões”; “Preencha o responsável”; ou “Falha ao exportar; seus dados foram mantidos.” **S01/S07–S12** | Apoiar revisão e recuperação. |
| CI02 — consulta > fundamento | U: “Qual foi o motivo da suspeita?” D, no parecer: “Caso, responsável, região e comentário.” **S01/S07/S08/S11/S12** | Dar contexto ao destinatário. |
| CI02 — consulta > alcance | D, no parecer: “Resultado do modelo e parecer humano; sem autorização de desembaraço.” **S04/S09/S12** | Separar apoio e ato formal. |
| CI03 — encaminhamento > referência | U: “O documento identifica a carga e a região observada?” D, no parecer: “Imagem numerada e comentário correspondente.” **S01/S07/S08/S12** | Apoiar conferência do conteúdo antes da entrega externa. |

## 3. Mapas de objetivos

Os mapas individuais usam os mesmos identificadores do mapa consolidado. A consolidação reúne objetivos repetidos de registro e consulta, mantendo um único parecer para o caso.

| Autor / mapa individual | Objetivo principal e decomposição |
|---|---|
| Kawan — CI01 | **O01 Examinar o caso com apoio visual** → O02 Conferir caso; O03 Comparar original e mapa; O04 Registrar regiões e comentários; O05 Concluir e exportar parecer. |
| Gabriel — CI02 | **O06 Compreender o fundamento do parecer** → O02 Conferir caso; O07 Relacionar região, comentário e conclusão; O08 Reconhecer limites e informação insuficiente. |
| Alexandre — CI03 | **O09 Preparar a informação para conferência física** → O02 Conferir caso; O07 Relacionar região, comentário e conclusão; O08 Reconhecer limites e informação insuficiente. |

![Mapa consolidado de objetivos](../assets/09_modelo_conceitual/mapa_objetivos.svg)

[Mapa em fonte Mermaid editável](../assets/09_modelo_conceitual/mapa_objetivos.mmd). O SVG também é editável. O09 cobre a preparação do documento na origem; a execução da vistoria permanece fora da interface.

### Dicionário de objetivos

| ID | Objetivo | Persona | Cenário | Prioridade |
|---|---|---|---|---|
| O01 | Examinar o caso com apoio visual | P01 | CI01 | alta |
| O02 | Conferir caso | P01/P02 | CI01–CI03 | alta |
| O03 | Comparar original e mapa | P01 | CI01 | alta |
| O04 | Registrar regiões e comentários | P01 | CI01 | alta |
| O05 | Concluir e exportar parecer | P01 | CI01 | alta |
| O06 | Compreender o fundamento do parecer | P02 | CI02 | alta |
| O07 | Relacionar região, comentário e conclusão | P01/P02 | CI01–CI03 | alta |
| O08 | Reconhecer limites e informação insuficiente | P01/P02 | CI01–CI03 | alta |
| O09 | Preparar a informação para conferência física | P01/P02; destinatário P03 | CI03 | média |

## 4. Esquema conceitual de signos

A classificação segue as páginas 5–6 da aula de signos: **PP**, prevenção passiva (explicação); **PA**, prevenção ativa (impedimento de entrada inválida); **AL**, alerta para decisão informada; **RA**, recuperação apoiada após uma ruptura; **CE**, captura de erro cuja solução depende de ação fora do sistema. “—” indica que não há mecanismo específico: uma ação normal, como ocultar o mapa, não é por si uma recuperação de ruptura.

A tabela distingue dados do caso, saídas do modelo e entradas humanas. **Origem** indica de onde vem o valor, não prova que existe integração. No protótipo, usar casos fictícios e nome fictício do responsável.

| ID / grupo | Signo | Origem | Significado | Conteúdo | Restrição | Padrão | Prevenção | Recuperação |
|---|---|---|---|---|---|---|---|---|
| S01 / caso | Identificação e carga declarada | Dados do caso | Vincula imagem e parecer à unidade informada. | Identificador e descrição textual | Identificador obrigatório para exportar; descrição ausente deve ser indicada. | Sem caso aberto | PP: identificação e contexto visíveis; AL: avisar sobre descarte ao trocar o caso. | RA: corrigir o vínculo ou completar a identificação mantendo o registro. |
| S02 / imagem | Radiografia original | Arquivo do caso | Evidência visual de referência. | Imagem | Formato compatível; preservar arquivo original. | Vazia | PP: informar formatos aceitos; PA: impedir análise de arquivo inválido. | RA: selecionar outro arquivo; CE: se corrompido, obter nova cópia na origem. |
| S03 / análise | Estado da análise | Sistema | Informa se há espera, resultado ou falha. | Estado textual | Não apresentar falha ou ausência como “sem indício”. | Aguardando imagem | PP: explicar o estado; PA: impedir uso de resultado inexistente. | RA: repetir análise após falha; CE: se o serviço não responder, verificar o serviço local e retomar. |
| S04 / modelo | Resultado do modelo | Modelo ou simulação declarada | Indício segundo a versão demonstrada; sem diagnóstico do tipo de ilícito. | Rótulo e indicador/limiar, quando disponíveis | Não representar canal aduaneiro nem probabilidade comprovada de contrabando. | Sem resultado | PP: explicar o indicador e separá-lo da conclusão humana. | —; nova análise deve ser solicitada se houver falha, conforme S03. |
| S05 / modelo | Mapa de atenção | Modelo ou simulação declarada | Regiões relevantes para a predição. | Camada visual | Não é contorno exato nem mapa residual. | Visível após análise válida | PP: explicar o alcance do mapa e distingui-lo da imagem original. | —; ocultar/reexibir é operação normal de visualização. |
| S06 / visualização | Modo e ajustes | Usuário | Sobreposição/lado a lado, zoom e tratamentos da imagem. | Opções e valores | Não alterar original nem sugerir nova inferência após ajuste apenas visual. | Imagem enquadrada; ajustes neutros | PP: explicar ajustes e indicar que são apenas visuais. | RA: restaurar ajustes quando a visualização dificultar a leitura. |
| S07 / achado | Região marcada | Usuário | Área numerada que o analista deseja registrar. | Retângulo e número | Dentro da imagem; ao menos uma para “Suspeita apontada”. | Nenhuma | PP: distinguir marca humana do mapa; PA: impedir região fora da imagem. | RA: corrigir ou excluir marcação feita incorretamente. |
| S08 / achado | Comentário da região | Usuário | O que foi observado naquela área. | Texto | Obrigatório em cada região exportada; não aceitar apenas espaços. | Vazio | PP: explicar o comentário; PA: impedir exportação de região sem comentário válido. | RA: identificar a omissão e permitir completar o comentário. |
| S09 / parecer | Conclusão da análise | Usuário | “Sem ressalvas na imagem” ou “Suspeita apontada”. | Escolha única | Não equivale a liberar/reter carga. | Não selecionada | PP: explicar o alcance da conclusão; PA: exigir escolha explícita. | RA: corrigir a escolha antes de emitir novamente o parecer. |
| S10 / parecer | Justificativa | Usuário | Fundamenta a conclusão geral. | Texto | Obrigatória; confirmar revisão se a conclusão divergir do indício do modelo. | Vazia | PP: indicar obrigatoriedade; PA: impedir emissão sem texto; AL: pedir revisão em divergência com o modelo. | RA: destacar a omissão e manter os demais dados para correção. |
| S11 / autoria | Responsável e data | Usuário; data pelo sistema | Identifica a autoria declarada do registro. | Texto e data/hora | Responsável obrigatório; sem autenticação institucional no protótipo. | Nome vazio; data na emissão | PP: informar que autoria é declarada; PA: exigir responsável. | RA: completar ou corrigir autoria antes de nova emissão. |
| S12 / documento | Parecer de apoio | Gerado dos dados revisados | Reúne caso, imagem, regiões, comentários, conclusão, autoria e resultado do modelo. | PDF | Exportação local; sem protocolo de envio institucional. | Não emitido | PP: explicar exportação local; PA: validar dados obrigatórios antes de emitir. | RA: informar falha de exportação e permitir repetir sem perder dados; CE: se depender do destino local, orientar verificar permissões/espaço e tentar novamente. |

O parecer é o relatório justificado por AC03/R03. Não há objetivo demonstrado para dashboard, fila priorizada, histórico agregado, administração ou CRUD; esses padrões continuam fora do recorte. Dados do caso são contexto da análise, não um cadastro novo.

## Síntese para a Entrega 10

Os diagramas MoLIC deverão reutilizar **O01–O09 e S01–S12**, cobrindo abertura do caso, processamento, comparação, anotação, revisão e exportação. Devem incluir arquivo inválido, falha de análise, campo incompleto, conclusão divergente do modelo, troca de caso com dados não exportados e falha de exportação.

Cada integrante terá um foco: CI01, exame e registro; CI02, conferência do fundamento e leitura do parecer; CI03, preparação e revisão do conteúdo destinado à conferência física. Leitura do PDF e procedimentos externos devem ser identificados como limites da interação, sem inventar tela de decisão formal ou aplicativo de campo.

## Checklist

- [x] Três cenários com versões inicial/refinada, perguntas e alterações destacadas.
- [x] Cenários descrevem ações e respostas sem antecipar rótulos ou widgets.
- [x] Autor e cenário de origem identificados em cada contribuição.
- [x] Tópicos, falas e signos ligados aos objetivos do usuário.
- [x] Mapas individuais e mapa consolidado apresentados.
- [x] Esquema de signos em tabela única, com origem, semântica e PP/PA/AL/RA/CE quando aplicáveis.
- [x] Identificadores definidos para reutilização na Entrega 10.
- [x] Resultados técnicos traduzidos para a tarefa, com limites claros.
- [x] Relatório justificado por objetivo; demais padrões fora do recorte.
- [x] Cenários propostos diferenciados de pesquisa ou avaliação realizada.

## Referências

- AQUINO JR., Plinio T. *Projeto de IHC e modelos conceituais*, págs. 5–6 e 19; *Esquema Conceitual de Signos*, págs. 3–8. Materiais da aula 9, baseados em Barbosa e Silva (2010). Cópia local: `Estudos/FEI_CC8122_IHC/09 - Tópico 9/`.

- Entregas [4](04_cenarios_problema.md), [5](05_analise_tarefas.md), [6](06_prototipacao_papel.md), [7](07_coleta_dados.md) e [8](08_engenharia_usabilidade.md); [rastreabilidade](../RASTREABILIDADE.md).
- BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Elsevier/Campus.
- DE SOUZA, C. S. *The Semiotic Engineering of Human-Computer Interaction*. MIT Press, 2005. Referências conceituais indicadas na [bibliografia da disciplina](../BIBLIOGRAFIA.md).
