# Entrega 2 — Público-alvo e análise de concorrência

**Data:** 26/08/2026
**Status:** 🟨 em andamento
**Responsabilidade mínima:** cada integrante analisa pelo menos 1 concorrente/interface representativa; a equipe produz síntese comparativa.

## Objetivo da atividade

Compreender soluções do mesmo domínio **e também interfaces familiares ao público-alvo**. O objetivo não é copiar telas, mas identificar convenções, padrões, affordances percebidas, problemas recorrentes, expectativas e oportunidades de design.

> **Concorrente não precisa ser idêntico ao produto.** Pode atuar na mesma área, resolver objetivo semelhante ou disputar a mesma necessidade. Quando não houver concorrente direto, use produtos análogos e softwares que o público já utiliza.

### Para TCCs que não previam interface

Não procure apenas um “concorrente do algoritmo”. Investigue **interfaces profissionais que materializam atividades semelhantes** às que o usuário escolhido precisaria realizar.

Exemplos:

- TCC de banco de dados → consoles de administração, ferramentas para DBA, monitoramento e análise de consultas;
- TCC de LLM/ML → painéis de experimentos, gestão de modelos/datasets, comparação de métricas, revisão de resultados;
- TCC de análise de dados → dashboards, ferramentas de BI, filtros, relatórios e exploração;
- TCC de infraestrutura/API → portais administrativos, observabilidade, logs, gestão de credenciais e uso;
- TCC de cibersegurança → consoles de alertas, triagem, histórico e auditoria.

A pergunta é: **“que convenções esse perfil já conhece para executar tarefas equivalentes?”**

## Entrada obrigatória da Entrega 1

Retome o mapa inicial de alternativas e produtos citado na Entrega 1. Aqui a equipe deixa de trabalhar apenas com impressão inicial e passa a **investigar sistematicamente** cada solução.

| Item citado na Entrega 1                                                    | Tipo                                                | Por que foi citado                                                                                          | Status inicial                   | Decisão nesta entrega |
| --------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| Softwares proprietários dos fabricantes de scanners, como Rapiscan Systems | concorrente / interface profissional representativa | Representam soluções comerciais reais usadas em inspeção de cargas, veículos e contêineres por raio-X | [F] Produto existente no mercado | analisar               |
| Sistemas ERP alfandegários (Siscomex / Portal Único Siscomex) | interface profissional que o público já utiliza | Citado na Entrega 1 (§6.3, H21) como sistema que o fiscal aduaneiro conhece; concentra fila de despacho, parametrização por canal de risco e registro formal de decisões | [H21] | analisar |
| Sistemas de gerenciamento de carga portuária (TOS) | produto da mesma área, não equivalente | Citado na Entrega 1 (§6.2, H20) como ecossistema em que a inspeção se insere | [H20] | não analisar nesta entrega — foco no fluxo de decisão, não na gestão logística |

Se uma hipótese da Entrega 1 for confirmada ou refutada durante esta análise, atualize `H01`, `H02`... em [`../RASTREABILIDADE.md`](../RASTREABILIDADE.md).

## 1. Público-alvo desta análise

O público-alvo retomado da Entrega 1 é o **Fiscal Aduaneiro / Operador de Scanner de Raio-X**, profissional responsável por interpretar imagens radiográficas, identificar possíveis irregularidades e decidir se uma carga deve ser liberada, retida ou encaminhada para vistoria física.

Como o TCC não previa uma interface original, esta análise investiga uma solução profissional existente no mesmo domínio operacional: softwares e ferramentas de apoio à interpretação de imagens de raio-X em inspeção de cargas e veículos. O objetivo é observar convenções de interface, formas de destacar anomalias, comparação entre imagens e apoio à decisão do operador.

## 2. Concorrentes diretos/indiretos

### Análise C01 — Rapiscan Systems / AS&E InSight Intelligent Image Analytics

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5
**Tipo:** concorrente indireto / interface profissional representativa
**Link oficial:** https://www.rapiscan-ase.com/products/software/insight-operator-assist-tools
**Data de acesso:** 26/08/2026

#### Contexto e proposta

A Rapiscan Systems é uma empresa do grupo OSI Systems voltada a soluções de inspeção de segurança, incluindo equipamentos de raio-X para cargas, veículos, portos, fronteiras e infraestrutura crítica. Dentro do portfólio de inspeção de carga e veículos, a linha **AS&E InSight Intelligent Image Analytics** é apresentada como um conjunto de ferramentas inteligentes para apoiar operadores na interpretação de imagens.

Segundo a página oficial da Rapiscan AS&E, o InSight utiliza processamento avançado de imagens e técnicas de aprendizado de máquina/deep learning para destacar ameaças e contrabando potenciais, permitindo que analistas foquem em áreas suspeitas e maximizem a detecção. Isso se relaciona diretamente ao escopo de IHC do nosso projeto, pois também tratamos da tradução de resultados de IA em sinais visuais compreensíveis para o fiscal aduaneiro.

Para nossa análise, o InSight não será tratado como concorrente idêntico ao TCC, mas como **referência profissional de mercado** para tarefas semelhantes: análise de raio-X, apoio visual à detecção, comparação de imagens, identificação de alta densidade e triagem de cargas suspeitas.

#### Funcionalidades relevantes

| Funcionalidade                  | Como é realizada                                                                                                                                                         | Evidência/print                                                       | Observação de IHC                                                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comparação de veículo/carga  | A ferramenta**InSight Vehicle Compare** compara a imagem atual com uma imagem de referência anterior e destaca objetos adicionados ou removidos.                   | `../assets/02_concorrencia/c01_rapiscan_insight_vehicle_compare.png` | Confirma que a comparação visual lado a lado é um padrão relevante para analistas. Relaciona-se à hipótese H30 da Entrega 1.                                    |
| Detecção de alta densidade    | A ferramenta**InSight High Density** processa imagens de raio-X de transmissão e destaca objetos densos no contêiner, reboque ou caixa de carga.                  | `../assets/02_concorrencia/c01_rapiscan_insight_high_density.png`    | O destaque visual de regiões suspeitas reduz a necessidade de varredura manual da imagem inteira, favorecendo foco e eficiência.                                    |
| Busca por cargas semelhantes    | A ferramenta **InSight Similar Cargo** recupera imagens salvas semelhantes à imagem atual e as exibe para comparação pelo analista.                             | `../assets/02_concorrencia/c01_rapiscan_insight_similar_cargo.png`   | Sugere que histórico e comparação com casos anteriores podem apoiar decisão, auditoria e treinamento do operador.                                                 |
| Apoio à interpretação por IA | O produto oferece ferramentas específicas para identificar padrões como contêiner vazio, carga não homogênea, garrafas, cigarros, armas, ocupantes e alta densidade. | Página oficial do InSight                                             | A interface parece organizar a IA em ferramentas operacionais orientadas a tarefas, e não apenas em métricas técnicas. Essa abordagem é útil para nosso projeto. |

#### Experiência do usuário e opiniões

Use avaliações públicas, relatos, estudos, testes próprios ou outra fonte identificável. Não trate opinião isolada como verdade universal.

A análise foi baseada em informações públicas da página oficial do produto e nas imagens disponibilizadas pela própria Rapiscan AS&E. Não foram encontradas avaliações públicas detalhadas de operadores sobre a usabilidade do InSight, provavelmente por se tratar de um sistema comercial de segurança, vendido em contexto institucional e com acesso restrito.

Mesmo sem relatos diretos de usuários, a proposta declarada do produto permite observar uma preocupação de IHC: **diminuir a carga interpretativa do operador**. A linguagem do produto enfatiza apoio à interpretação, foco em áreas suspeitas e aumento da eficiência do analista. Isso reforça a hipótese de que, em sistemas de inspeção por raio-X, a interface deve evitar apresentar apenas a imagem bruta e precisa transformar achados computacionais em evidências visuais claras.

Limitação da análise: os prints disponíveis são materiais públicos de divulgação e não necessariamente representam todos os estados reais da interface em operação, como falhas, filas, auditoria, permissões ou registro de veredito.

#### Preço/modelo de negócio

O preço não é divulgado publicamente. O modelo de negócio aparenta ser **B2B / institucional**, com venda consultiva para governos, portos, fronteiras, forças de segurança e operadores de infraestrutura crítica. O software InSight parece ser oferecido como componente complementar ao ecossistema de equipamentos de inspeção de carga e veículos da Rapiscan/AS&E, não como aplicativo de consumidor final.

Essa característica é importante para o nosso projeto: a interface de IHC deve considerar um ambiente profissional, com alto custo de erro, treinamento de operadores, suporte técnico, rastreabilidade e possível integração com scanners e sistemas aduaneiros.

#### Padrões e tendências percebidos

- Uso de **destaques visuais sobre imagens radiográficas** para indicar regiões suspeitas.
- Comparação entre imagem atual e referência ou caso semelhante.
- Organização da IA por tarefas reconhecíveis pelo operador, como alta densidade, contêiner vazio, carga não homogênea, armas, cigarros e garrafas.
- Linguagem voltada ao apoio da interpretação humana, não à substituição completa do operador.
- Forte dependência de visualização de imagem como centro da tarefa.
- Necessidade provável de treinamento e suporte, já que o sistema opera em contexto de segurança crítica.

#### Pontos positivos, limitações e lições

| Ponto                                                                       | Evidência                                                                                                                  | Implicação para nosso projeto                                                                                       |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Ponto positivo: IA apresentada como apoio ao analista                       | Página oficial afirma que o InSight ajuda operadores a focar áreas suspeitas e maximizar detecção.                      | Nosso protótipo deve comunicar que a IA apoia a decisão do fiscal, sem remover sua responsabilidade profissional.   |
| Ponto positivo: comparação visual é recurso central                      | InSight Vehicle Compare e Similar Cargo usam comparação entre imagens.                                                    | Reforça a hipótese H30 e justifica explorar visualizador comparativo no protótipo.                                 |
| Ponto positivo: destaque de alta densidade/anomalia                         | InSight High Density destaca objetos densos em contêineres e trailers.                                                     | Nosso mapa residual deve destacar regiões relevantes sem esconder a imagem original.                                 |
| Limitação: pouca transparência pública sobre fluxo completo de decisão | A página pública mostra ferramentas e imagens, mas não detalha auditoria, fila operacional ou justificativa de veredito. | Há oportunidade para nosso projeto enfatizar rastreabilidade, histórico e registro claro de decisão.               |
| Lição de IHC: ferramentas devem ser orientadas à tarefa do fiscal        | InSight separa funções como Empty Container, High Density, Similar Cargo e Vehicle Compare.                               | Evitar interface genérica; organizar o protótipo em torno de tarefas reais: triar, inspecionar, comparar e decidir. |

### Análise C02 — Portal Único Siscomex (fluxo de despacho, canal de risco e registro de decisão)

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8
**Tipo:** interface profissional representativa / sistema que o público-alvo já utiliza
**Link oficial:** https://portalunico.siscomex.gov.br/portal/
**Data de acesso:** 27/08/2026

> **Recorte desta análise:** enquanto a C01 investiga *como a IA é apresentada sobre a imagem*, esta análise investiga *o que acontece antes e depois da imagem*: como o fiscal recebe o que precisa examinar, como registra a decisão e como essa decisão fica rastreável. É o eixo que a C01 não conseguiu evidenciar (ver limitação registrada na C01) e de onde saiu a recomendação RC04.

#### Contexto e proposta

O Portal Único Siscomex é o ambiente eletrônico único por onde tramitam as operações de comércio exterior brasileiras, mantido pela Receita Federal do Brasil em conjunto com a Secretaria de Comércio Exterior. Ele concentra o fluxo de importação (Declaração Única de Importação — DUIMP) e de exportação (DU-E), consolidando em um mesmo lugar o que antes se dividia entre sistemas separados e entre os diversos órgãos anuentes (ANVISA, MAPA, Inmetro e outros).

A documentação oficial organiza o sistema em módulos, entre os quais interessam a esta análise: **Importação** (funções *Elaborar Duimp* e *Consultar Duimp*), **Visão Integrada** (*Informações Gerais*, *Operações em Andamento*, *Consultar LI*, *Consultar DI*) e **Anexação de Documentos** (*Anexar Documento*, *Consultar Documento*, *Consultar Dossiê*). O Auditor-Fiscal da Receita Federal está entre os usuários do sistema, e é nele que o resultado da conferência aduaneira — incluindo a decisão sobre liberar a carga ou submetê-la a exame — é formalizado.

O Portal Único **não é concorrente do TCC**: ele não analisa imagens de raio-X nem detecta anomalias. Ele é o sistema no qual a decisão que nosso protótipo pretende apoiar já é registrada hoje, com valor jurídico. Por isso a análise se concentra no que a C01 não conseguiu evidenciar: a fila de trabalho, a classificação de risco, o registro formal do veredito e a rastreabilidade do processo.

#### Funcionalidades relevantes

| Funcionalidade | Como é realizada | Evidência/print | Observação de IHC |
| --- | --- | --- | --- |
| Linha do tempo do processo | O acompanhamento do despacho exibe a sequência de marcos do processo: *Registro da Declaração → Parametrização → Distribuição para Auditor → Exigência Fiscal → Desembaraço Aduaneiro*. | Guia de acompanhamento do despacho (ver Referências); print PENDENTE | O processo tem uma **espinha dorsal cronológica** explícita. Sustenta H18 (histórico) e sugere que o histórico do contêiner no nosso protótipo seja uma linha do tempo de eventos, não uma tabela solta. |
| Distribuição para auditor | Existe uma etapa formal de atribuição da declaração a um auditor responsável, entre a parametrização e a conferência. | Guia de acompanhamento do despacho; print PENDENTE | Confirma que **carga de trabalho atribuída a uma pessoa** é um conceito real do domínio — apoia H04 e H25, e reforça H17 (identificação do responsável). |
| Canal de parametrização por risco | O gerenciamento de risco classifica a declaração em quatro canais: **verde** (desembaraço automático, sem exame), **amarelo** (exame documental), **vermelho** (exame documental + verificação física) e **cinza** (exame, verificação física e procedimento especial por indício de fraude). Quando vários órgãos avaliam a mesma declaração, aplica-se o controle mais rigoroso. | Manual de Despacho de Importação da RFB — Parametrização (ver Referências); print PENDENTE | Evidência forte para **H24**: o código de cores por risco não é uma metáfora inventada por nós, é a convenção legal do domínio. **Achado que contraria nossa premissa:** são quatro níveis, não três — ver "Pontos positivos, limitações e lições". |
| Registro de exigência fiscal | Quando o auditor precisa de correção ou documento complementar, registra uma **exigência fiscal**, que aparece ao administrado como mensagem formal com prazo de resposta. | Guia de acompanhamento do despacho; print PENDENTE | Sustenta **H06** e **H19**: a decisão do fiscal não é um clique isolado, é um **ato comunicado, motivado e com prazo**. Nosso registro de veredito precisa prever destinatário, motivo e efeito, não apenas o estado final. |
| Dossiê de documentos | Documentos do despacho são anexados digitalmente e consultados como *dossiê* vinculado ao processo (*Anexar Documento*, *Consultar Documento*, *Consultar Dossiê*). | Documentação oficial do Portal Único (ver Referências); print PENDENTE | Relaciona-se a H11: a decisão se apoia em evidência documental além da imagem. O mapa residual seria mais uma peça de evidência anexável ao processo. |
| Consulta e localização de processos | O acompanhamento se dá pela função *Acompanhamento do Despacho* (menu *Operações → Despacho Importação → Consultas*), informando o número da declaração e consultando. | Instruções de consulta do canal de parametrização (ver Referências); print PENDENTE | Evidência **parcial** para H29: a chave de navegação é o **identificador do processo**, não o risco nem a data. Não encontramos evidência de busca por faixa de risco — ver limitações. |
| Vocabulário do domínio | Rótulos e status usam termos normativos: DUIMP, DI, LI, LPCO, canal, parametrização, distribuição, exigência, desembaraço, dossiê, anuência. | Documentação oficial do Portal Único; print PENDENTE | Alimenta **RC03**: o vocabulário da nossa interface deve vir daqui, não da terminologia de machine learning. "Anomalia residual" não é termo do fiscal; "indício" e "exigência" são. |

> **Estado dos prints:** as capturas ainda não foram feitas. O perfil de Auditor-Fiscal exige certificado digital e acesso institucional, de modo que as telas de decisão não são publicamente acessíveis. As capturas viáveis são as das áreas públicas do Portal e as figuras dos manuais oficiais da Receita, e devem ser salvas em `../assets/02_concorrencia/` com prefixo `c02_`.

#### Experiência do usuário e opiniões

As fontes utilizadas são de dois tipos, com pesos diferentes:

- **Documentação oficial** (Receita Federal e Portal Único): descreve estrutura de menus, etapas do despacho e a definição normativa dos canais. É confiável quanto ao que o sistema faz, mas descreve o processo, não a experiência de uso.
- **Material de mercado** (consultorias e blogs especializados em comércio exterior, voltados a importadores e despachantes): descreve o Portal Único como uma interface "mais intuitiva e centralizada" frente aos sistemas anteriores, e detalha a rotina de acompanhamento. São fontes com interesse comercial e sem método de avaliação declarado — tratamos essa afirmação como **indício, não como resultado de usabilidade**.

Um relato recorrente nessas fontes é a pressão de prazo associada à exigência fiscal, que requer resposta em prazo curto. Isso é coerente com o contexto de pressão temporal levantado na Entrega 1 (H16), embora aqui a pressão recaia sobre o administrado, e não sobre o fiscal.

**Limitações desta análise:**

1. Não houve acesso ao sistema em operação. O perfil de Auditor-Fiscal depende de certificado digital e vínculo institucional.
2. Praticamente toda a documentação pública é escrita **da perspectiva do importador/despachante**, não do fiscal. Sabemos que existe a etapa "Distribuição para Auditor", mas não como a lista de trabalho se apresenta a ele.
3. Não foram encontradas avaliações de usabilidade formais, nem material sobre acessibilidade do sistema.
4. Consequentemente, as hipóteses H17, H32 e boa parte de H29 permanecem **sem evidência direta** mesmo após esta análise.

#### Preço/modelo de negócio

Não há preço: é sistema público de governo, de uso **obrigatório** por força normativa para operar comércio exterior no Brasil. O acesso é controlado por certificado digital e por perfis distintos (importador, despachante, órgão anuente, auditor), cada um enxergando um subconjunto das funções.

Isso muda a relação do usuário com a interface de um modo que importa ao nosso projeto: **o usuário não escolheu a ferramenta e não pode abandoná-la**. Adoção não é um problema de design aqui — mas também não há pressão de mercado corrigindo atrito de uso, e o custo de um erro é jurídico, não comercial. Um sistema obrigatório tende a acumular funções e jargão normativo ao longo do tempo, o que é consistente com a caracterização de "interfaces densas e legadas" feita na Entrega 1 (H23).

#### Padrões e tendências percebidos

- **Linha do tempo de marcos** como estrutura central do acompanhamento de um processo.
- **Classificação por canal de cor** que determina quanto esforço de conferência a carga vai receber — o risco não é só informação, é o que define o trabalho a ser feito.
- **Atribuição explícita a um responsável** ("Distribuição para Auditor") antes da conferência.
- **Decisão como ato formal comunicado**, com motivo e prazo, e não como simples mudança de estado.
- **Consolidação multiórgão** em visão única, com aplicação do controle mais rigoroso entre os órgãos.
- **Documento como dossiê** vinculado ao processo.
- **Identificador único do processo** como chave primária de navegação.

#### Pontos positivos, limitações e lições

| Ponto | Evidência | Implicação para nosso projeto |
| --- | --- | --- |
| Ponto positivo: o código de cores por risco é convenção normativa consolidada | Canais verde, amarelo, vermelho e cinza definidos no despacho de importação. | **H24 sustentada.** Nosso semáforo de risco será lido corretamente pelo fiscal sem treinamento — mas deve seguir a semântica oficial, não uma escala inventada. |
| Achado que contraria nossa premissa: são **quatro** canais, não três | O canal **cinza** existe e significa suspeita de fraude, com procedimento especial. | A Entrega 1 (H24/H33) assumiu uma escala verde/amarelo/vermelho. Falta na nossa fila um estado para **suspeita que exige investigação**, distinto de "vistoria física". Isso deve ser revisto na modelagem. |
| Ponto positivo: a decisão é um ato motivado e com prazo | A exigência fiscal é registrada e comunicada com prazo de resposta. | **Confirma RC04.** O registro de veredito precisa de justificativa, destinatário e efeito — não basta um botão "liberar/reter". |
| Ponto positivo: existe responsável nomeado pelo processo | Etapa "Distribuição para Auditor". | Sustenta H17: cada análise no nosso protótipo deve ficar vinculada ao fiscal que a realizou. |
| Ponto positivo: histórico é cronológico e vai além da decisão | A linha do tempo segue até o comprovante de importação. | O histórico do contêiner deve ser uma linha do tempo de eventos, não uma lista de vereditos. |
| Limitação: navegação centrada no número da declaração | A consulta se faz informando o número da DI/DUIMP. | **Oportunidade clara:** não há evidência de uma fila priorizada por risco para o fiscal. Quem já sabe qual processo procurar é atendido; quem precisa decidir *o que examinar primeiro*, não. É exatamente o vazio que nossa tela de triagem preenche. |
| Limitação: documentação escrita para o importador, não para o fiscal | Manuais e material de mercado descrevem o acompanhamento pelo lado do administrado. | H29 e H32 seguem sem evidência direta; devem ser investigadas por entrevista na Entrega 7, não por análise documental. |
| Limitação: nenhuma evidência sobre acessibilidade | Não foram localizados relatórios ou declarações de acessibilidade. | Mesma lacuna registrada na C01 — a equipe não deve concluir nada sobre acessibilidade do domínio a partir dos concorrentes. |
| Lição de IHC: nosso sistema conviveria com o Siscomex, não o substituiria | O Portal Único é de uso obrigatório e detém o valor jurídico da decisão. | O veredito do nosso protótipo precisa ter correspondência com os atos que já existem (canal, exigência, desembaraço), sob pena de criar trabalho duplicado para o fiscal. |

### Análise C03 — Smiths Detection / CargoVision & Hi-TRAX (Ferramentas de Ajuste de Imagem e Filtros Radiográficos)

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6
**Tipo:** concorrente direto / interface profissional representativa
**Link oficial:** [https://www.smithsdetection.com/products/cargovision/](https://www.safeway-system.com/X-Ray-Baggage-Scanner-pl3041840.html?gad_source=1&gad_campaignid=20861473902&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3oQzQmXpsbMhSvxUdVjd-kf4fkWjh2QKA2F3sRFe680NqXr1prNUI8aAmpiEALw_wcB)
**Data de acesso:** 30/08/2026

#### Contexto e proposta

A Smiths Detection é uma das principais concorrentes globais da Rapiscan no fornecimento de sistemas de inspeção por raio-X e tomografia para portos, aeroportos e postos de fronteira. A suite de softwares operacionais da empresa (como o **CargoVision** e o sistema **Hi-TRAX**) é projetada para ser a interface primária do operador de scanner durante a varredura contínua de contêineres e veículos pesados.

Enquanto a análise C01 focou na detecção automática por IA e a C02 no fluxo processual do governo, esta análise foca no **manipulador visual primário da imagem radiográfica**: como a interface permite que o fiscal altere contraste, aplique filtros de número atômico, inverta cores e isole níveis de penetração do feixe para identificar itens ocultos sob materiais densos.

Esta análise é fundamental para o nosso TCC de IHC pois a nossa solução baseada em modelo residual precisará conviver com os hábitos visuais que o operador já possui para manipular e inspecionar a imagem bruta.

| Funcionalidade | Como é realizada | Evidência documental / Fonte | Observação de IHC |
| --- | --- | --- | --- |
| Colorização por Número Atômico ($Z_{eff}$) | Atribuição de cores falsas (*pseudo-color*) com base na absorção do feixe de raios-X de dupla energia, permitindo a separação entre materiais orgânicos, inorgânicos e mistos. | Datasheet *HCVG viZual Series* (*Dual energy material discrimination / Organic/inorganic/mixed material colorization based on equivalent atomic numbers*). | Confirma a convenção visual padrão do domínio. O mapa de calor residual da nossa IA deve ser sobreposto sem conflitar com essa paleta de cores. |
| Ajuste de Contraste e Equalização de Histograma | Manipulação do alcance dinâmico e aplicação de *histogram equalization* para esticar o contraste em regiões de alta densidade e isolar detalhes ocultos. | Datasheets *HCVP e series*, *HCVM e35*, *HCVG viZual* e *HCVM e35 T* (*DaiSy CargoVision Software: Contrast enhancement, histogram equalization*). | O fiscal depende de **atalhos rápidos na workstation (RIW)** para alternar filtros sem desviar os olhos da radiografia principal. |
| Realce de Bordas (*Edge Enhancement*) | Filtro de convoluição que acentua os contornos e gradientes de densidade de objetos escondidos atrás de blindagens metálicas ou paredes do contêiner. | Datasheets *HCVP e series*, *HCVM e35*, *HCVG viZual* e *HCVM e35 T* (*DaiSy CargoVision Software: Edge enhancement and image filters*). | Exige que a camada gráfica (*overlay*) do nosso modelo de IA possua controle de opacidade para não encobrir as bordas destacadas pelo operador. |
| Medição e Ferramentas de Anotação | Medição direta de dimensões reais de objetos na imagem (*objects measurement*), inserção de marcações (*marks and annotations*) e cruzamento com o manifesto. | Datasheets *HCVP e series*, *HCVM e35*, *HCVG viZual* e *HCVM e35 T* (*DaiSy CargoVision Software: Objects measurement, marks, annotations and manifest comparison*). | Sustenta o requisito de IHC de cruzar achados visuais com os dados da carga e permitir anotações na própria estação de trabalho. |

#### Experiência do usuário e opiniões

A análise foi realizada com base nas especificações técnicas e datasheets oficiais das estações de trabalho de análise de imagem (**RIW - Review/Image Workstation**) da Smiths Detection.

Em sistemas de inspeção radiográfica de alto tráfego (com capacidade de escaneamento de até 80 caminhões por hora no modo *pass-through*), a experiência do usuário é dominada pela **velocidade de varredura visual e redução da fadiga ocular**. As estações de trabalho contam com monitores dedicados de 22" a 24" (*flat screen workstation*) e softwares projetados para aplicação imediata de filtros de imagem e comparação direta com o banco de dados SQL e documentos de manifesto.

Limitação da análise: os softwares de inspeção da Smiths Detection são proprietários e de uso restrito por órgãos de segurança e alfândegas, não havendo versão trial pública.

#### Preço/modelo de negócio

Modelo **B2B / Governamental**, integrado à venda ou modernização dos complexos de escaneamento físico (sistemas fixos, móveis em chassis de caminhão ou pórticos gantry). O software é fornecido como licença proprietária de estação de trabalho (*Image Workstation RIW / Database Workstation DBW*), incluindo treinamento operacional formal e suporte contínuo.

#### Padrões e tendências percebidos

- **Paleta de cores padronizada por absorção de dupla energia** (discriminação orgânico/inorgânico por $Z_{eff}$).
- **Manipulação rápida via Workstation (RIW)** com ferramentas nativas de realce de bordas, equalização de histograma e zoom.
- **Integração direta entre radiografia e dados do manifesto** na mesma interface de análise.
- **Suporte a automações opcionais** (como reconhecimento de placas ALPR, códigos de contêiner ACCR e detecção de radiação ARD).

#### Pontos positivos, limitações e lições

| Ponto | Evidência | Implicação para nosso projeto |
| --- | --- | --- |
| Ponto positivo: discriminação de materiais e realce de bordas nativos | Módulos *viZual* e filtros *Edge Enhancement* em toda a linha DaiSy CargoVision. | **Lição direta:** o mapa de calor da nossa IA (mapa residual) não pode poluir visualmente nem conflitar com as cores padrão de discriminação de material ($Z_{eff}$). |
| Ponto positivo: integração de metadados e anotações na mesma tela | Recurso *Manifest data comparison and annotations* na estação RIW. | O protótipo de IHC deve permitir visualizar os dados da carga e adicionar marcações de anomalia sem trocar de janela. |
| Limitação: acúmulo de filtros na tela | O uso simultâneo de equalização de histograma, bordas e marcações pode poluir a imagem. | O protótipo de IHC deve oferecer controle de **opacidade ajustável (slider)** e alternância rápida (toggle) para a máscara de anomalia da IA. |
| Lição de IHC: centralidade na imagem radiográfica | A estação de trabalho (RIW com tela de 22"/24") prioriza a área de exibição do scanner. | A área central do nosso protótipo precisa ser dedicada à exibição e manipulação da radiografia, deixando metadados e botões de veredito em painéis laterais retraíveis. |


## 3. Softwares que o público-alvo usa no cotidiano

Analise interfaces que moldam a expectativa do público, mesmo que não sejam concorrentes.

| Software | Por que o público usa | Padrões relevantes | Prints         | O que aprender |
| -------- | ---------------------- | ------------------- | -------------- | -------------- |
| {{...}}  | {{...}}                | {{...}}             | {{link local}} | {{...}}        |

## 3.1 Padrões de interface relevantes ao escopo de IHC

Registre somente padrões encontrados nas soluções analisadas e que possam ter relação com objetivos reais da equipe.

| Padrão observado          | Produto(s)                                                                                       | Para qual tarefa serve                                                     | Vantagem percebida                                                                 | Risco/limitação                                                                         | Aplicável ao nosso escopo? |
| -------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------- |
| dashboard                  | Não observado em C01                                                                            | Não houve evidência pública suficiente de painel geral/fila operacional | Não se aplica nesta análise                                                      | Não concluir que dashboard é necessário apenas por ser comum em sistemas profissionais | talvez                      |
| relatório                 | Rapiscan InSight (inferido como necessidade operacional, mas não detalhado na página pública) | Registrar evidências de inspeção e apoiar auditoria                     | Pode consolidar decisão e evidências visuais                                     | Não há evidência pública suficiente sobre o formato do relatório                     | talvez                      |
| histórico + filtros       | Rapiscan InSight Similar Cargo                                                                   | Recuperar imagens salvas semelhantes para comparação pelo analista       | Apoia comparação com casos anteriores e reconhecimento de padrões               | Pode aumentar carga cognitiva se trouxer muitos casos sem priorização                   | sim                         |
| administração/CRUD       | Não observado em C01                                                                            | Não houve evidência pública suficiente para justificar esse padrão     | Não se aplica nesta análise                                                      | Não deve ser incluído sem tarefa real que justifique                                    | não                        |
| comparação de resultados | Rapiscan InSight Vehicle Compare; Rapiscan InSight Similar Cargo                                 | Comparar imagem atual com referência ou imagem semelhante                 | Facilita identificação de diferenças, objetos adicionados/removidos e anomalias | Comparações mal alinhadas podem induzir interpretação errada                          | sim                         |

> O objetivo não é concluir “todo concorrente tem dashboard, então teremos um”. O padrão só será adotado se apoiar uma tarefa rastreável.

## 4. Síntese comparativa da equipe

| Critério                         | C01                                                                                                                  | C02 | C03 | Oportunidade para o projeto                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --- | --- | ----------------------------------------------------------------------------------------------- |
| Navegação                       | Ferramentas organizadas por tarefa de inspeção: Vehicle Compare, High Density, Similar Cargo, Empty Container etc. |     |     | Organizar nosso protótipo por tarefas do fiscal: triagem, inspeção, comparação e decisão. |
| Feedback/estado                   | Destaca visualmente regiões de interesse na imagem e indica resultados de ferramentas analíticas.                  |     |     | Usar feedback visual direto no mapa residual, evitando depender apenas de números.             |
| Prevenção/recuperação de erro | A página pública não detalha fluxos de erro, confirmação ou reversão de decisão.                              |     |     | Projetar confirmação de veredito, justificativa e registro de auditoria como diferencial.     |
| Terminologia                      | Usa termos operacionais do domínio: cargo, container, high density, similar cargo, threats, contraband.             |     |     | Usar vocabulário do fiscal e evitar jargão técnico de IA na interface principal.             |
| Acessibilidade                    | Não há evidência pública suficiente sobre acessibilidade da interface.                                           |     |     | Avaliar contraste, legibilidade, cores de alerta e alternativa a informação apenas por cor.   |
| Eficiência                       | A proposta do InSight é tornar analistas mais eficientes ao focar áreas suspeitas.                                 |     |     | Priorizar interação rápida: fila de risco, comparação visual e decisão em poucos passos.  |

## 5. Recomendações derivadas

Liste recomendações com origem explícita.

- **RC01:** O visualizador principal deve permitir comparação clara entre imagem original e evidência gerada pela IA — derivada de C01 / InSight Vehicle Compare e InSight Similar Cargo.
- **RC02:** O sistema deve destacar regiões suspeitas sem substituir a decisão do fiscal — derivada de C01 / InSight High Density.
- **RC03:** A interface deve usar linguagem operacional do domínio aduaneiro e de inspeção, evitando expor métricas técnicas de IA como elemento principal — derivada de C01 / organização das ferramentas InSight por tarefa.
- **RC04:** O fluxo de decisão deve incluir registro de justificativa e trilha de auditoria, pois essa dimensão não aparece claramente nas evidências públicas da Rapiscan e é crítica no contexto aduaneiro — derivada de C01 / limitação observada.

## Referências

- RAPISCAN AS&E. **InSight Intelligent Image Analytics**. Disponível em: https://www.rapiscan-ase.com/products/software/insight-operator-assist-tools. Acesso em: 26/08/2026.
- RAPISCAN SYSTEMS. **Security Screening, Threat Detection, and Metal Detectors**. Disponível em: https://www.rapiscansystems.com/. Acesso em: 26/08/2026.
- GAIKWAD et al. **Self-supervised anomaly detection and localization for x-ray cargo images**. Referência utilizada no TCC.

Fontes da análise C02 (Portal Único Siscomex):

- BRASIL. Receita Federal. **Despacho de Importação — Parametrização (gerenciamento de riscos)**. Disponível em: https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/topicos-1/despacho-de-importacao/etapas-do-despacho-aduaneiro-de-importacao/parametricao. Acesso em: 27/08/2026.
- BRASIL. Receita Federal. **Portal Único Siscomex — módulos e funcionalidades (sistema PUCOMEX)**. Disponível em: https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/sistemas/duimp/sistema-pucomex. Acesso em: 27/08/2026.
- BRASIL. **Portal Único Siscomex**. Disponível em: https://portalunico.siscomex.gov.br/portal/. Acesso em: 27/08/2026.
- BRASIL. Siscomex. **Manuais**. Disponível em: https://www.gov.br/siscomex/pt-br/informacoes/manuais. Acesso em: 27/08/2026.
- TOEXCEED. **Acompanhamento do Despacho no Siscomex: guia prático de gestão**. Disponível em: https://toexceed.com.br/blog/2026/01/15/acompanhamento-do-despacho-no-siscomex-guia-pratico-de-gestao/. Acesso em: 27/08/2026. *(fonte de mercado, sem método declarado — usada como indício, conforme registrado na C02)*
- FAZCOMEX. **Canais de parametrização na importação e na DUIMP**. Disponível em: https://www.fazcomex.com.br/npi/canais-de-parametrizacao/. Acesso em: 27/08/2026. *(fonte de mercado)*

## Checklist

- [ ] O mapa inicial de alternativas da Entrega 1 foi revisitado e aprofundado.
- [ ] Hipóteses relevantes sobre mercado/padrões foram atualizadas na rastreabilidade quando surgiram evidências.
- [ ] Há pelo menos uma análise completa por integrante.
- [ ] Cada análise contém prints legíveis da interface.
- [ ] Prints mostram telas/estados relevantes, não apenas logos/homepage.
- [ ] Foram analisados concorrentes e/ou interfaces representativas ao público.
- [ ] Em TCC sem interface original, foram investigadas ferramentas profissionais análogas às atividades do usuário escolhido.
- [ ] Padrões como dashboard, relatório, filtros e CRUD foram analisados como soluções para tarefas, não como requisitos automáticos.
- [ ] Opiniões de UX têm fonte.
- [ ] A síntese compara critérios comuns e produz recomendações.
- [ ] Não há “copiar porque o concorrente faz”; há justificativa de adequação ao público/contexto.
