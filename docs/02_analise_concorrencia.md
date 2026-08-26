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
| Comparação de veículo/carga  | A ferramenta**InSight Vehicle Compare** compara a imagem atual com uma imagem de referência anterior e destaca objetos adicionados ou removidos.                   | `../assets/02_concorrencia/c01_rapiscan_insight_vehicle_compare.png` | Confirma que a comparação visual lado a lado é um padrão relevante para analistas. Relaciona-se à hipótese H01 da Entrega 1.                                    |
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
| Ponto positivo: comparação visual é recurso central                      | InSight Vehicle Compare e Similar Cargo usam comparação entre imagens.                                                    | Reforça a hipótese H01 e justifica explorar visualizador comparativo no protótipo.                                 |
| Ponto positivo: destaque de alta densidade/anomalia                         | InSight High Density destaca objetos densos em contêineres e trailers.                                                     | Nosso mapa residual deve destacar regiões relevantes sem esconder a imagem original.                                 |
| Limitação: pouca transparência pública sobre fluxo completo de decisão | A página pública mostra ferramentas e imagens, mas não detalha auditoria, fila operacional ou justificativa de veredito. | Há oportunidade para nosso projeto enfatizar rastreabilidade, histórico e registro claro de decisão.               |
| Lição de IHC: ferramentas devem ser orientadas à tarefa do fiscal        | InSight separa funções como Empty Container, High Density, Similar Cargo e Vehicle Compare.                               | Evitar interface genérica; organizar o protótipo em torno de tarefas reais: triar, inspecionar, comparar e decidir. |

> Repita a subseção para C02, C03... até atender à quantidade da equipe.

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
