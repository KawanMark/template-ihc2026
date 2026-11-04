# Entrega 7 — Coleta de dados, necessidades e aspectos éticos

**Data:** 04/11/2026<br>
**Status:** 🟩 concluída<br>
**Responsabilidade:** contribuições individuais e síntese da equipe

## Objetivo e método

Levantar informações para a Mesa de inspeção de raio-X de contêineres: quem analisa a imagem, quais dados consulta e como registra e encaminha uma suspeita.

Como não temos acesso ao profissional que interpreta essas imagens, adotamos **pesquisa documental**, com manuais da Receita Federal, documentação do Siscomex, informações de fabricantes e literatura técnica. Consultamos cinco fontes públicas. Questionário e entrevista também foram preparados, conforme o enunciado, mas não foram aplicados.

O levantamento retoma as hipóteses da [Entrega 1](01_conhecendo_o_problema.md), a análise de concorrentes, as personas, os cenários, as tarefas e o [protótipo da Entrega 6](06_prototipacao_papel.md). Os documentos ajudam a fundamentar o projeto, mas não revelam todas as práticas de uma unidade portuária.

## Hipóteses prioritárias

| Hipóteses/lacunas | O que precisamos saber | Decisão afetada | Prioridade |
|---|---|---|---|
| H01, H39 | Quem opera o escâner, interpreta a imagem e decide sobre a carga? | Papéis de P01/P02 e significado do parecer. | alta |
| H11, H26 | Quais dados acompanham a imagem e como chegam ao sistema? | Contexto da carga e entrada de imagens. | alta |
| H06, H28, H32, ?08 | Como a suspeita é registrada e ligada ao despacho? | Conteúdo e encaminhamento do parecer. | alta |
| H03, H42 | Quem realiza a conferência física e que informação recebe? | Papel de P03 como usuário ou stakeholder. | alta |
| H04, H41 | Existe fila de imagens e autonomia para mudar a ordem? | Necessidade de priorização. | alta |
| H30, H31, H37 | Como apresentar a comparação, o mapa e o indicador do modelo? | Organização visual e linguagem. | média |
| H10, H16, H34, ?07 | Quais dificuldades, condições de trabalho e metas existem? | Requisitos de uso e benefícios a avaliar. | média |

## Parte A — necessidades e aspectos éticos

### A01 — análise da imagem

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5

| Dados a coletar | Por que coletar / decisão de design | Hipóteses |
|---|---|---|
| Recursos de comparação, realce e marcação disponíveis nas estações | Conhecer as ferramentas existentes e orientar a comparação no protótipo. | H05, H09, H30 |
| Significado do mapa e do indicador do modelo | Explicar o resultado sem sugerir certeza de ilícito. | H31, H37 |
| Equipamento e contexto de uso documentados | Definir premissas de tela e identificar o que ainda depende de pesquisa com usuários. | H14, H15, H16 |

**De quem/fontes:** documentos sobre o trabalho de P01, publicados por fabricantes de scanners de carga e pesquisadores dos métodos utilizados. Incluir fontes com autoria e descrição do recurso; excluir radiologia médica e materiais sem origem identificável.

**Ética:** citar as fontes e respeitar a licença das imagens. Não publicar nomes de operadores, placas ou cargas identificáveis. O destaque do modelo deve ser apresentado como apoio à análise, sem atribuir a ele uma capacidade de identificar ilícitos que o TCC não demonstrou.

### A02 — registro e responsabilidades

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8

| Dados a coletar | Por que coletar / decisão de design | Hipóteses/lacunas |
|---|---|---|
| Responsabilidades do recinto, de quem analisa e da fiscalização | Separar o parecer técnico da decisão sobre a carga. | H01, H39 |
| Dados vinculados à imagem e forma de transmissão | Identificar o caso corretamente e evitar entrada manual desnecessária. | H11, H26 |
| Registro e encaminhamento da suspeita | Definir o conteúdo do parecer e sua relação com o processo. | H06, H28, H32, ?08 |

**De quem/fontes:** manuais públicos da Receita Federal e do Siscomex que descrevam os papéis de P01/P02, dados e procedimentos. Registrar a data e o alcance da fonte; uma orientação local não será tratada como regra de todos os portos.

**Ética:** não acessar declarações fiscais, processos identificáveis ou telas restritas. Usar apenas campos e procedimentos públicos. O PDF do protótipo é um registro de apoio, sem valor de autorização para desembaraço.

### A03 — conferência física

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

| Dados a coletar | Por que coletar / decisão de design | Hipóteses/lacunas |
|---|---|---|
| Atores e finalidade da verificação física | Delimitar o papel de P03. | H03, H39, H42 |
| Informações usadas para localizar e verificar a suspeita | Investigar o que precisa acompanhar o parecer. | H28, ?08 |
| Registro do achado e retorno a quem analisou a imagem | Investigar a comunicação entre análise e conferência. | H17, H38, ?08 |

**De quem/fontes:** documentação institucional sobre fiscalização, depositário e representante do importador. Incluir textos que diferenciem suas responsabilidades. A existência de conferência física, sozinha, não demonstra que P03 usa nossa interface.

**Ética:** não usar fotos de apreensões ou operações identificáveis. Os episódios dos cenários anteriores continuam ficcionais. A pesquisa não envolve gravações nem contato com equipes de fiscalização.

**Armazenamento e privacidade:** referências e sínteses sem dados pessoais permanecem no repositório. Cópias de trabalho serão mantidas apenas quando a licença permitir e descartadas até 90 dias após o encerramento da disciplina. Se houver aplicação dos instrumentos abaixo, respostas e consentimentos ficarão restritos à equipe, identificados por códigos, com descarte no mesmo prazo. Não serão solicitados nome, empregador, unidade exata ou informações sigilosas.

## Parte B — instrumentos de coleta

### I01 — pesquisa documental

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5<br>
**Objetivo:** investigar as hipóteses prioritárias em documentos sobre inspeção de cargas.<br>
**Público representado:** P01 e P02; P03 como stakeholder.

**Procedimento:**

1. Buscar fontes oficiais sobre inspeção não invasiva, transmissão de imagens e conferência aduaneira; consultar também as referências da Entrega 2 e os autores do método de visualização.
2. Selecionar documentos públicos com autoria, contexto e relação com as perguntas da pesquisa. Excluir materiais restritos ou sem origem verificável.
3. Ler o conteúdo em contexto e preencher a ficha abaixo para cada achado.
4. Comparar o resultado com as hipóteses e registrar o que foi sustentado, refinado ou ficou sem resposta.

**Ficha de extração:** código do documento; título e autor; endereço e data de acesso; seção/página; hipótese relacionada; informação encontrada; interpretação para o projeto; limite da evidência.

**Análise:** agrupar as informações em papéis, dados da carga, registro e visualização. Distinguir procedimento institucional de recurso anunciado pelo fabricante. Não interpretar ausência de informação como prova de que uma função não existe. O resultado da aplicação está na seção seguinte.

### I02 — questionário

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8<br>
**Objetivo:** investigar a compreensão do resultado apresentado pela interface (H31, H37).<br>
**Público:** adultos externos à equipe, com experiência em inspeção de cargas ou área próxima. Respostas de pessoas sem essa experiência serão analisadas separadamente, apenas quanto à compreensão da informação.<br>
**Situação:** instrumento preparado, não aplicado.

**Procedimento:** apresentar o objetivo e o consentimento, mostrar o mesmo exemplo a todos e aplicar as perguntas sem explicar previamente as respostas. Duração prevista: 5 a 10 minutos. Não coletar nome ou contato; permitir pular questões e encerrar a participação.

**Consentimento:** “Este questionário acadêmico investiga a compreensão de uma interface. Participar é voluntário e você pode interromper sem prejuízo. Não informe pessoas, empresas ou operações identificáveis. As respostas serão usadas sem identificação e descartadas até 90 dias após o encerramento da disciplina. Você aceita participar?” **Sim / Não (encerrar).**

**Exemplo apresentado:** “A tela mostra uma radiografia, um mapa colorido e o cartão ‘Indício de anomalia — 94%; limiar 70%’. Uma pessoa registra o parecer.” Os valores são ilustrativos do protótipo.

1. Qual sua relação com inspeção de cargas? **Interpreto radiografias / atuo em logística ou atividade aduaneira / estudo ou pesquiso IA / não tenho experiência / prefiro não responder.**
2. O que você entende por “indício de anomalia”? **Resposta aberta.**
3. O que o valor “94%” significa para você? **Resposta aberta.**
4. O que o mapa colorido permite concluir? **Resposta aberta.**
5. Que informação falta para compreender o resultado? **Resposta aberta.**
6. A diferença entre resultado do modelo e parecer humano está clara? **1 — nada clara a 5 — muito clara / não sei avaliar.** Explique, se desejar.
7. Que expressão você mudaria na tela e por quê? **Resposta aberta, opcional.**

**Encerramento e análise:** esclarecer que o resultado não comprova ilícito nem autoriza liberação da carga. Fornecer um código para solicitar exclusão antes da consolidação. Contar respostas por perfil e agrupar dúvidas sobre indicador, mapa e decisão humana. A análise serve para revisar a linguagem; não mede aceitação profissional ou desempenho do algoritmo.

### I03 — entrevista semiestruturada

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6<br>
**Objetivo:** aprofundar a comunicação entre análise da imagem, decisão e conferência física.<br>
**Público:** profissional de inspeção de cargas ou área aduaneira/logística, respondendo sobre atividades que conhece diretamente.<br>
**Situação:** roteiro preparado, não aplicado.

**Procedimento:** explicar o objetivo, apresentar o consentimento do I02 adaptado à entrevista e pedir autorização para notas escritas. Conversa de aproximadamente 20 minutos, sem gravação. Permitir interrupção, não solicitar exemplos identificáveis e aceitar perguntas sem resposta. Ao final, recapitular as notas para correção e fornecer código para exclusão antes da consolidação.

**Roteiro:**

1. Com quais atividades de inspeção ou despacho você tem experiência direta?
2. Quem opera o escâner, interpreta a imagem e formaliza a decisão? Esses papéis coincidem?
3. Que informações são consultadas junto da imagem e onde ficam disponíveis?
4. Como uma suspeita é registrada e encaminhada? O que acompanha esse registro?
5. Como é definida a ordem de análise e quem pode alterá-la?
6. O que acontece quando a imagem deixa uma dúvida?
7. Que informação chega a quem realiza a conferência física? Essa pessoa consulta imagens?
8. Onde o desfecho é registrado e quem recebe retorno?
9. Que dificuldade de comunicação você já observou, sem identificar pessoas ou operações?

**Análise:** organizar as notas por papéis, informações, registros e dificuldades. Separar experiência direta de suposição e comparar com os documentos. Um relato descreve seu contexto; não representa todos os recintos. Guardar as notas conforme as regras de privacidade da Parte A.

## Resultados da pesquisa documental

Foram consultados cinco documentos em **04/11/2026**. As referências completas estão ao final.

| Evidência | Fonte e localização | Informação encontrada | Consequência para o projeto |
|---|---|---|---|
| ED01 | D01 — primeiro parágrafo e “Transmissão de Imagens” | O recinto disponibiliza equipamento e operação; as imagens são transmitidas à RFB, com integração ao SICA/API Recintos. | Refina H01, H26 e H39. O upload local é adequado à demonstração, mas não representa toda a entrada institucional. |
| ED02 | D02 — “Evento Inspeção não Invasiva” | O envio reúne imagem e metadados do escâner, com atributos da unidade inspecionada. | Sustenta parte de H11: existem dados vinculados à imagem. Não mostra quais deles o analista consulta em tela nem resolve ?08. |
| ED03 | D03 — parágrafos sobre meios e responsáveis pela verificação | O manual prevê uso de imagens e diferencia fiscalização, atuação sob supervisão e participação do depositário. | Refina os atores de H39/H42. P03 permanece stakeholder, pois não há evidência de uso direto da solução. |
| ED04 | D04 — itens “High Density” e “Similar Cargo” | O fabricante oferece destaque de alta densidade e comparação lado a lado entre radiografias. | Refina H30: há referência de mercado para comparação, sem demonstrar preferência entre original/mapa lado a lado e sobreposição. |
| ED05 | D05 — resumo do artigo | Grad-CAM destaca aproximadamente as regiões relevantes para uma predição. | Orienta a linguagem de H31/H37: o mapa indica relevância para o modelo, não delimitação exata ou prova de ilícito. |

As entregas iniciais usavam o termo **mapa residual**, associado a autoencoder. A Entrega 6 passou a descrever classificação e mapas de atenção. Nesta entrega, a indicação visual é tratada conforme o método utilizado: mapa de atenção e mapa residual não são equivalentes. O limiar e o indicador do protótipo também não representam uma medida comprovada de probabilidade de ilícito.

## Síntese

A pesquisa fundamenta a separação entre operação, análise e decisão, a vinculação de dados à imagem e a comparação visual como recurso de apoio. Para PF01/PF02, isso orienta a identificação do caso, a preservação da radiografia original e o registro do parecer com justificativa.

H01/H39, H11/H26 e H30 foram **refinadas ou parcialmente sustentadas**, no alcance descrito acima. H28, H32 e ?08 continuam sem resposta sobre o caminho completo do parecer até a decisão. H04/H41 (fila e autonomia), H10/H16 (fadiga e ambiente), H31/H37 (compreensão e aceitação) e H34 (redução de esforço) permanecem abertas. Nenhuma hipótese de comportamento profissional foi integralmente refutada ou confirmada.

Esses resultados estão registrados na [rastreabilidade](../RASTREABILIDADE.md#21a-atualização-documental-da-entrega-7). Eles orientam as próximas etapas de modelagem e avaliação, sem atribuir à pesquisa documental a observação de uma rotina profissional.

## Checklist

- [x] Hipóteses e lacunas da Entrega 1 retomadas.
- [x] Dados, fontes e decisões de design relacionados ao projeto.
- [x] Uma Parte A por integrante, com autoria e aspectos éticos.
- [x] Três instrumentos completos, com técnicas distintas e questionário incluído.
- [x] Procedimentos de aplicação e análise definidos.
- [x] Perguntas sem pressupor necessidade de funcionalidades.
- [x] Pesquisa documental realizada, com fontes e localização dos achados.
- [x] Instrumentos preparados diferenciados de coleta realizada.
- [x] Limitações e hipóteses ainda abertas registradas.
- [x] Rastreabilidade atualizada.

## Referências

Acesso às fontes em 04/11/2026.

- **D01 — Receita Federal.** *Disponibilização, Manutenção e Operação de Instrumentos de Inspeção não Invasiva*. 2024. [Manual de Alfandegamento](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/alfandegamento/requisitos-para-o-alfandegamento/requisitos-tecnicos-e-operacionais/disponibilizacao-manutencao-e-operacao-de-instrumentos-e-aparelhos-de-inspecao-nao-invasiva).
- **D02 — Siscomex.** *Recintos — perguntas frequentes*. Seção “Evento Inspeção não Invasiva”, respostas atualizadas em 2022 e 2024. [Documento](https://www.gov.br/siscomex/pt-br/informacoes/perguntas-frequentes/perguntas-frequentes-recintos).
- **D03 — Receita Federal.** *Verificação Física da Mercadoria — Introdução*. Atualizado em 2020. [Manual de Importação](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/topicos-1/despacho-de-importacao/etapas-do-despacho-aduaneiro-de-importacao/conferencia-aduaneira/verificacao-da-mercadoria-1/introducao).
- **D04 — Rapiscan AS&E.** *InSight Intelligent Image Analytics*. Sem data. [Página do produto](https://www.rapiscan-ase.com/products/software/insight-operator-assist-tools).
- **D05 — Selvaraju et al.** *Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization*. ICCV, 2017; versão ampliada, 2019. [Artigo, versão 4](https://arxiv.org/abs/1610.02391v4).
