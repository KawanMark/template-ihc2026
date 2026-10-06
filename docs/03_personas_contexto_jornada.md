# Entrega 3 — Personas, mapa de empatia, contexto de uso e jornada

**Data:** 04/09/2026  
**Status:** 🟩 concluída  
**Responsabilidade:** 1 persona por integrante; 1 mapa de empatia, 1 contexto de uso consolidado e 1 jornada por equipe (salvo orientação diferente do docente).

## Objetivo da atividade

Representar grupos de usuários de forma útil para decisões de design. Persona não é personagem decorativo: suas características devem alterar requisitos, prioridades, linguagem, fluxos ou critérios de avaliação.

## Atenção a projetos técnicos

Em TCCs sem interface original, a persona pode representar um **profissional que se apropria da contribuição técnica**: DBA, analista, cientista de dados, administrador, pesquisador, técnico, operador, gestor ou especialista de domínio.

Não escolha um perfil apenas porque “parece combinar” com a tecnologia. Explique **qual objetivo esse perfil teria e qual parte da contribuição do TCC produziria valor para ele**. Se ainda for hipótese, mantenha como hipótese/proto-persona a validar.

Também considere papéis diferentes quando houver tarefas distintas, por exemplo:

- operador que executa análises;
- administrador que configura e gerencia permissões;
- especialista que interpreta resultados;
- gestor que consulta relatórios e decide;
- auditor que revisa histórico.

## Entradas da Entrega 1

Antes de criar personas, retome os tipos de usuários, características relevantes, objetivos e hipóteses registradas na Entrega 1. A persona **não deve transformar uma hipótese inicial em fato por meio de uma história fictícia**.

| Item da Entrega 1 | Status inicial | Evidência disponível agora | Como será tratado nesta entrega |
|---|---|---|---|
| **Perfil: operador da estação de imagem (H01)** | [H01] Hipótese reformulada | [F] C01 e C03 mostram que os produtos de mercado têm uma estação operada por alguém que examina a imagem. Não mostram quem é essa pessoa no Brasil nem se ela decide sobre a carga. | Base de P01 como proto-persona. A autoridade para liberar ou reter não é atribuída a P01: depende de H39. |
| **Divisão entre quem examina a imagem e quem decide (H39)** | [H39] Hipótese aberta | [F] C02: o despacho tem distribuição para auditor e exigência fiscal, e o Manual de Despacho atribui o desembaraço ao Auditor-Fiscal. Isso não mostra quem opera a estação, quem produz o apontamento nem como ele chega ao auditor. | Base de P02 como proto-persona. A fronteira entre P01 e P02 é a primeira questão da Entrega 7. |
| **Fadiga visual e plantão noturno (H10, H13)** | [H10], [H13] Hipóteses | [F] C03: o fabricante justifica monitores de 22" a 24" pela redução de fadiga ocular. É texto de fabricante, não observação de usuários. H13 é cenário exploratório da Entrega 1. | Dor hipotética de P01. Não fundamenta, por si, tema escuro nem outra solução. |
| **Sala de controle em recinto alfandegado (H14, H16)** | [H14] parcialmente sustentada, [H16] aberta | [F] C03: estação dedicada em sistema de alto tráfego. Iluminação, penumbra e ruído não têm evidência. | Entram no contexto de uso como hipótese e lacuna. |
| **Estação com monitor dedicado (H15)** | [H15] parcialmente sustentada | [F] C03: monitor dedicado de 22" a 24". Não há evidência de múltiplos monitores. | Restrição plausível para P01. Não define proporção de tela nem painéis. |
| **Comparação visual e explicação (H05, H30, H31, H37)** | Hipóteses parcialmente sustentadas | [F] C01 mostra comparação entre imagens e destaque de regiões. C03 mostra pseudo-cor por material. Nenhuma mostra a preferência dos operadores nem rejeição a métricas numéricas. | Necessidade de P01: entender onde a IA apontou discrepância. A forma (lado a lado, sobreposição, opacidade) é alternativa a testar. |
| **Registro motivado e responsabilidade (H06, H08, H17, H18, H19)** | [H18] sustentada documentalmente; as demais abertas ou parciais | [F] C02: a decisão aduaneira é um ato formal, com motivo e prazo, vinculado a um auditor responsável. | Necessidade de P02. Quem registra o quê depende de H39. |
| **Quatro canais aduaneiros (H24 revisada)** | [H24] Revisada na Entrega 2 | [F] C02: verde, amarelo, vermelho e cinza são classificação normativa do despacho, com critérios fiscais e documentais. | Entra como vocabulário que P01 e P02 conhecem. Não é usada para representar o resultado da IA (RC05, ?08). |
| **Perfil: Analista de Inteligência Aduaneira (H02)** | [H02] Hipótese aberta | Sem evidência nova. | Não vira persona nesta entrega. |
| **Perfil: agente de campo (H03, H42)** | [H03] aberta; [H42] nova | [F] C02: o canal vermelho prevê verificação física da mercadoria. Não há evidência de que quem a executa use a solução. A Entrega 1 (H03) supunha que não usaria. | P03 fica como proto-persona a validar, possível stakeholder. |

---

## 1. Personas

### Classificação do elenco

A classificação segue o papel de cada persona no design, e não a frequência de uso. Persona primária é a que precisa de uma interface própria, porque não seria bem atendida pela interface desenhada para outra.

| Persona | Classificação | Justificativa |
|---|---|---|
| P01, Gustavo Onofre | primária | [H01] Examina a imagem radiográfica, que é onde a contribuição do TCC atua. A interface de análise é desenhada para ela. |
| P02, Dr. Eduardo Resende | primária | [F] O Auditor-Fiscal é o responsável pelo desembaraço, e o despacho tem distribuição para auditor e exigência fiscal (C02 da Entrega 2). [H39] Se a decisão formal couber a ele, precisa de um fluxo próprio, de conferir a evidência com a declaração e formalizar o ato, que a interface de análise de P01 não atende. |
| P03, Marcos Oliveira | proto-persona a validar | [H42] Não está demonstrado que o agente de campo interage com a solução. Ele pode receber a ordem por outro sistema, verbalmente ou por documento, pertencer a outro órgão ou não precisar de interface nova. Até H42 ser investigada, P03 é tratado como possível stakeholder do fluxo, fica fora do recorte principal e não justifica uma interface móvel. |

[H39] Se a investigação mostrar que P01 e P02 são a mesma pessoa ou funções da mesma carreira, as duas personas serão fundidas ou redefinidas.

### Persona P01 — Gustavo Onofre (Fiscal Aduaneiro / Operador de Scanner)

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5  
**Tipo:** primária  
**Base de evidências:** Combinação entre a literatura do TCC (*Self-supervised anomaly detection and localization for x-ray cargo images*, Gaikwad et al., 2024), a análise de soluções de mercado na Entrega 2 (Rapiscan InSight C01 e Smiths Detection RIW C03), a rotina normativa do Siscomex (C02) e a situação concreta de uso H13 registrada na Entrega 1.  
**Hipóteses da Entrega 1 relacionadas:** H01, H04, H05, H06, H07, H08, H10, H13, H14, H15 (revisada), H16, H24 (revisada), H30, H31, H34, H37, H38

![Persona P01](../assets/03_personas/persona_p01.jpeg)

| Campo | Descrição |
|---|---|
| **Faixa etária / contexto relevante** | 46 anos. Atua há 12 anos na carreira aduaneira, dos quais 7 dedicados à fiscalização não intrusiva com scanners de contêineres e cargas em grande porto brasileiro. Trabalha em regime de escala de plantão (12x36h), alternando turnos diurnos e noturnos/madrugadas. |
| **Ocupação/papel** | Fiscal Aduaneiro da Receita Federal / Operador de Estação de Análise Radiográfica (RIW). É o usuário direto na linha de frente operacional, responsável por examinar a radiografia de cada contêiner que atravessa o scanner e decidir se a carga segue liberada ou se deve ser retida para conferência física/exigência fiscal. |
| **Conhecimento do domínio** | Altíssimo conhecimento empírico em radioscopia de carga: domina a leitura de densidades de feixe de raio-X, identifica padrões de falsa cor por número atômico ($Z_{eff}$: orgânico em tons quentes, inorgânico em tons frios/metálico), reconhece estruturas típicas de contêineres marítimos (vigas, piso, longarinas) e as táticas habituais de camuflagem de ilícitos (fundos falsos, blindagens de chumbo). Conhece com profundidade a legislação aduaneira brasileira e os canais de parametrização. |
| **Experiência tecnológica** | Média/alta com consoles dedicados de scanner (softwares proprietários Rapiscan AS&E e Smiths CargoVision) e sistemas corporativos do governo (Portal Único Siscomex). Baixa com inteligência artificial: não possui formação em ciência da computação e não se interessa por arquitetura de redes neurais, loss ou métricas estatísticas do modelo; exige que os resultados computacionais sejam traduzidos em apoios visuais operacionais diretamente sobre a imagem. |
| **Objetivos** | 1. Triar com máxima agilidade a fila contínua de contêineres do terminal sem provocar filas de carretas nos gates ou gargalos logísticos portuários.<br>2. Detectar com precisão anomalias estruturais e cargas ilícitas não declaradas camufladas no interior do contêiner.<br>3. Emitir decisões com respaldo legal sólido e rastreabilidade formal, fundamentando retenções de forma inequívoca. |
| **Necessidades** | 1. Fila de trabalho priorizada automaticamente pelo grau de anomalia detectado pela IA (ordenada pelos canais normativos, destacando cargas suspeitas).<br>2. Destaque visual imediato das regiões de interesse (ROI) e do mapa de anomalia residual sem mascarar a imagem original e sem anular a discriminação de materiais ($Z_{eff}$).<br>3. Ferramenta de comparação visual flexível (slider de opacidade ou lado a lado) para entender exatamente onde a IA enxergou discrepância.<br>4. Consulta integrada aos dados do manifesto de carga (descrição da mercadoria, peso, importador) na mesma interface para validar a coerência da imagem sem alternar de aplicativo.<br>5. Fluxo de registro de veredito em poucos passos, com justificativas pré-formatadas associadas automaticamente à sua credencial funcional. |
| **Dores/frustrações** | 1. Severa fadiga visual e exaustão mental acumulada após inspecionar centenas de radiografias complexas por turno, agravada nos plantões de madrugada (situação H13).<br>2. Tensão psicológica constante pela responsabilidade pessoal: pavor de liberar por engano uma carga com drogas/armas (falso negativo) e responder a sindicâncias ou processos administrativos.<br>3. Desgaste ao paralisar contêineres lícitos por falsos alarmes (falsos positivos), gerando atritos com despachantes e operadores do terminal portuário.<br>4. Fragmentação de sistemas: ter que inspecionar a imagem em um console proprietário e lançar a decisão manualmente em outro sistema governamental. |
| **Motivadores** | 1. Cumprir a meta operacional do turno com 100% de precisão e segurança jurídica.<br>2. Eficácia e prestígio profissional na interceptação de contrabando relevante de alto valor ou ameaças à segurança nacional.<br>3. Redução do estresse diário através de ferramentas de auxílio que façam o "trabalho pesado" de varredura prévia sem tirar dele a palavra final. |
| **Restrições/acessibilidade** | 1. Cansaço ocular recorrente e início de presbiopia (necessita de tipografia limpa com contraste adequado, ícones reconhecíveis e paleta visual que não ofusque).<br>2. Proibição de dependência exclusiva de cor (atendendo à recomendação RC11 da Entrega 2: o status de canal e o nível de anomalia devem apresentar texto explicativo redundante e ícones, não apenas semáforo cromático).<br>3. Ambiente em meia-luz (penumbra de sala de comando), tornando interfaces de fundo branco inaplicáveis por causarem ofuscamento e cansaço visual. |
| **Ambiente típico de uso** | Sala de controle e triagem de raio-X instalada em recinto alfandegado de terminal portuário; estação de trabalho desktop com monitor dedicado de alta fidelidade visual (22" a 24"); penumbra ambiente contínua; ruídos de maquinário e caminhões no pátio externo; interrupções ocasionais por rádio comunicador da fiscalização. |
| **Comportamentos relevantes** | Tem forte memória muscular no uso de teclas de atalho (zoom, contraste, pan) e teclado numérico; irrita-se profundamente quando um software demora para carregar ou congela a imagem; ao notar uma suspeita complexa, costuma chamar um fiscal colega para um segundo olhar confirmatório antes de lavrar o termo de retenção. |

**Decisões de design influenciadas por P01:**

- **Tema Dark Mode obrigatório:** Interface construída com paleta escura profissional de alto contraste, desenhada especificamente para salas de controle com pouca luz ambiente, minimizando a fadiga visual do plantonista (H10, H13, H16).
- **Centralidade absoluta da radiografia (RC10):** A imagem de raio-X deve ocupar mais de 70% da área útil do monitor de 24", mantendo metadados da carga (manifesto) e botões de ação em painéis laterais retraíveis para não desviar a atenção visual principal (H15).
- **Camada de anomalia com slider de opacidade e toggle rápido (RC09):** O mapa de calor residual da IA deve ser exibido como uma sobreposição ajustável (de 0% a 100%) via atalho de teclado ou controle deslizante suave, permitindo que Gustavo inspecione a anomalia sem perder a visão das cores falsas de número atômico ($Z_{eff}$) e do contorno dos objetos.
- **Fila de trabalho priorizada automaticamente por risco (RC05, RC06):** A tela inicial do sistema deve organizar os contêineres escaneados por ordem de criticidade de anomalia residual da IA, correlacionados aos quatro canais normativos (com destaque imediato para canal cinza - fraude e canal vermelho - conferência física), suprindo a maior deficiência dos softwares concorrentes.
- **Sinalização acessível redundante (RC11):** Toda classificação de risco e severidade de alerta deve conter texto explícito (ex.: `[CANAL VERMELHO — RISCO ELEVADO]`) acompanhado de ícones de advertência, sem confiar unicamente na distinção entre tons de verde, amarelo e vermelho.
- **Fluxo de veredito rápido com justificativas pré-estruturadas (RC04, RC07):** A homologação da decisão deve exigir poucos cliques (ex.: tecla de atalho + seleção de motivo em menu rápido: "discrepância de densidade em relação ao manifesto" / "indício de compartimento oculto"), vinculando automaticamente a matrícula de Gustavo e o timestamp para fins de conformidade legal (H17, H18).

---

### Persona P02 — Dr. Eduardo Resende (Auditor-Fiscal da Receita Federal)

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8  
**Tipo:** primária (ver Classificação do elenco)  
**Base de evidências:** [F] Análise do Portal Único Siscomex e do Manual de Despacho de Importação na Entrega 2 (C02): etapas do despacho, distribuição para auditor, canais de parametrização, exigência fiscal e responsabilidade do Auditor-Fiscal pelo desembaraço. Nenhum Auditor-Fiscal foi entrevistado ou observado. Por isso P02 é uma **proto-persona**.  
**Hipóteses relacionadas:** H06, H08, H11, H17, H18, H19, H24 (revisada), H29, H32, H39 e a lacuna ?08

**Como ler esta ficha.** Cada afirmação traz sua base:

- **[F]** sustentada por fonte, sempre a análise C02 da Entrega 2;
- **[H]** hipótese plausível de perfil, ainda não investigada com usuários;
- **[?]** lacuna, algo que a equipe não sabe;
- **ficcional** detalhe de identidade criado só para tornar o personagem memorável. Não embasa decisão de design.

![Persona P02](../assets/03_personas/persona_p02.jpeg)

| Campo | Descrição |
|---|---|
| **Nome** | Dr. Eduardo Resende (ficcional) |
| **Faixa etária / contexto relevante** | Ficcional: 52 anos. [H] Escolhas da proto-persona, sem base investigada: carreira longa, em torno de 20 anos, e formação em Direito. [H] Atua na conferência aduaneira de uma unidade portuária. |
| **Ocupação/papel** | [F] Auditor-Fiscal da Receita Federal. O Manual de Despacho de Importação atribui a ele a responsabilidade pelo desembaraço, e o despacho tem as etapas de distribuição para auditor e de exigência fiscal (C02). [H39] Recebe o apontamento de quem examina a imagem e decide sobre exigência, verificação física ou desembaraço. [?] Não está demonstrado se ele mesmo opera a estação de imagem, se existe um operador distinto (P01), nem como o resultado da imagem chega até ele (?08). |
| **Conhecimento do domínio** | [H] Alto em legislação aduaneira e no processo de despacho (DUIMP, DI, NCM, canais, exigência), por ser o conteúdo do cargo. [?] Familiaridade com leitura de imagens de raio-X desconhecida. |
| **Experiência tecnológica** | [F] Usa o Portal Único Siscomex, com acesso por certificado digital (C02). [H] Pouca familiaridade com termos de aprendizado de máquina. |
| **Objetivos práticos** | 1. [H] Decidir sobre os casos que recebe com base suficiente para sustentar a decisão.<br>2. [H] Verificar se o que a imagem indica é compatível com o que a declaração descreve (H11).<br>3. [F] Formalizar a decisão em ato com motivo e prazo, como a exigência fiscal (C02). |
| **Objetivos de experiência** | 1. [H] Sentir que controla a decisão e que a automação não substitui seu julgamento.<br>2. [H] Confiar que não deixou de ver informação relevante antes de decidir.<br>3. [H] Não se sentir inseguro quanto ao que assina.<br>4. [H] Entender por que um caso chegou até ele. |
| **Necessidades** | 1. [H] Ver a evidência da imagem junto dos dados da declaração (H11).<br>2. [H] Saber quem analisou a imagem e o que concluiu (H17, H39).<br>3. [F] Registrar a decisão com motivo, de forma rastreável (C02, H18). [H] O formato desse registro está aberto (H32).<br>4. [H] Consultar o que já aconteceu com o mesmo processo (H29). |
| **Dores/frustrações** | 1. [H] Alternar entre o sistema onde está a imagem e o Siscomex, onde a decisão tem valor jurídico.<br>2. [H] Receber um apontamento sem contexto documental, sem saber o que a carga declara ser.<br>3. [H] Decidir com base em uma evidência visual que não sabe interpretar sozinho. |
| **Motivadores** | 1. [H] Tomar decisões que se sustentem se forem questionadas.<br>2. [H] Concluir o despacho de cargas regulares sem retenção indevida. |
| **Restrições/acessibilidade** | 1. [F] Vocabulário normativo do despacho: DUIMP, canal, exigência, desembaraço, dossiê (C02, RC03).<br>2. [F] Autenticação por certificado digital no Portal Único (C02).<br>3. Informação crítica com redundância além da cor, por princípio de acessibilidade (RC11).<br>4. [?] Iluminação e demais condições do posto de trabalho desconhecidas. |
| **Ambiente típico de uso** | [H] Ambiente administrativo de unidade aduaneira. [?] Local exato, equipamento e número de monitores não foram investigados. |
| **Comportamentos relevantes** | [H] Confere a compatibilidade entre o que a imagem indica e a mercadoria declarada antes de decidir. [H] Consulta o histórico do importador. Este segundo ponto é escolha da proto-persona: [F] regularidade fiscal e habitualidade do importador são elementos da seleção do canal (C02), o que o torna plausível, mas não mostra que o auditor faz essa consulta. |

**Implicações de P02 para o design (alternativas a investigar, não requisitos):**

- [H] Reunir a evidência da imagem e os dados da declaração, ou facilitar a passagem entre eles (RC07, H11). Alternativas a comparar: visão conjunta, evidência anexada ao dossiê do Siscomex, resumo encaminhado.
- [H] Consultar o andamento do processo pelo identificador (RC08, H29).
- [H] Registrar o ato com motivo, destinatário e efeito, com correspondência aos atos que já existem no Siscomex (RC04, RC07). Modelos de texto e número de passos são alternativas a testar.
- [H] Vincular cada registro a quem o produziu (H17, H32).

Nenhuma dessas alternativas avança antes de se investigar H39 e ?08: sem saber quem decide e como o resultado da imagem chega ao processo formal, não há como definir a interface de P02.

---

### Persona P03 — Marcos Oliveira / Agente de Segurança Pública (Operacional de Campo)

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6  
**Tipo:** proto-persona a validar, possível stakeholder (ver Classificação do elenco)  
**Base de evidências:** Estruturada a partir dos requisitos formais de interceptação aduaneira e policial no ambiente portuário, pelas regras normativas de exigência/conferência física do Siscomex (C02), pelas hipóteses de uso operacional de campo (H03, H16, H17, H19, H24) e pela necessidade de consumo simplificado do resultado da IA sem complexidade de análise radiográfica.  
**Hipóteses da Entrega 1 relacionadas:** H03, H06, H08, H12, H14, H16, H17, H18, H19, H24 (revisada)

![Persona P03](../assets/03_personas/persona_p03.jpeg)

| Campo | Descrição |
|---|---|
| **Nome** | Marcos Oliveira (Capitão Oliveira) |
| **Faixa etária / contexto relevante** | 38 anos. Agente de segurança/policial atuante na fiscalização de campo e repressão ao contrabando em recinto alfandegado portuário há 8 anos. Atua em patrulha externa, pátios de contêineres e vistorias físicas diretas no *gate* ou terminal. |
| **Ocupação/papel** | Agente de Segurança Pública / Policial de Campo. É o usuário secundário e destinatário da decisão de triagem: não opera o console de raio-X nem analisa a imagem bruta, mas **consome o veredito simplificado de anomalia** para realizar a abordagem, retenção física, escolta do caminhão ou abertura do lacre do contêiner para verificação. |
| **Conhecimento do domínio** | Elevado conhecimento em táticas de abordagem, procedimentos de apreensão, conferência física de carga, legislação penal e cadeia de custódia de provas. **Baixo/Nulo conhecimento em física de radiologia ou interpretação de raio-X**: não sabe ler mapas residuais, números atômicos ($Z_{eff}$) ou densidades radiográficas, dependendo exclusivamente de um indicador binário/classificatório claro e objetivo (Existe anomalia? Qual a localização aproximada no contêiner?). |
| **Experiência tecnológica** | Média em dispositivos móveis (tablets e coletores robustecidos de pátio) e rádios comunicadores; baixa em softwares analíticos complexos. Exige dados diretos, legíveis sob luz solar e que requeiram o mínimo de toques na tela. |
| **Objetivos** | 1. Receber alertas imediatos e sem ambiguidade de cargas críticas/anômalas direcionadas para interceptação física.<br>2. Localizar e abordar o caminhão/contêiner no pátio antes da sua saída do recinto alfandegado.<br>3. Ter suporte visual direto (localização da anomalia) para abrir a porta do contêiner e ir diretamente ao ponto suspeito durante a busca física. |
| **Necessidades** | 1. Status claro e binário da anomalia (`[ANOMALIA DETECTADA — CANAL CINZA/VERMELHO]` vs `[NENHUMA ANOMALIA DETECTADA]`).<br>2. Indicador visual simplificado da posição no contêiner (ex.: "Setor Traseiro / Lado Esquerdo") para direcionar o esforço da vistoria física.<br>3. Notificações/alertas push instantâneos sobre contêineres que exigem retenção imediata.<br>4. Botão de confirmação de ação de campo rápida ("Abordagem Efetuada" / "Encaminhado para Vistoria Física"). |
| **Dores/frustrações** | 1. Receber relatórios visuais poluídos com gráficos de IA ou imagens de raio-X complexas que ele não consegue/não tem tempo de interpretar no pátio.<br>2. Perder tempo procurando mercadorias ilícitas no meio de toneladas de carga por falta de indicação exata de onde a anomalia foi localizada.<br>3. Falhas de comunicação ou atrasos no recebimento da ordem de retenção que permitam que o caminhão saia do terminal portuário. |
| **Motivadores** | 1. Efetuar a apreensão de ilícitos (drogas, armas, contrabando) com precisão e segurança para a equipe.<br>2. Agilidade no procedimento de liberação de pátio para não paralisar o tráfego de carretas. |
| **Restrições/acessibilidade** | 1. Operação em ambiente aberto sob alta iluminação solar e chuva (exige alto contraste visual em telas móveis/tablets).<br>2. Uso de luvas táticas e equipamento de proteção individual (EPI), exigindo botões amplos e alvos de toque grandes.<br>3. Impossibilidade de ler textos longos durante ações de abordagem física. |
| **Ambiente típico de uso** | Pátio aberto de contêineres, *gates* de saída de terminais portuários e galpões de conferência física; sob ruído forte de carretas e empilhadeiras; movimentado e exposto às intempéries do tempo. |
| **Comportamentos relevantes** | Toma decisões operacionais imediatas baseadas em comandos diretos; consulta o tablet/dispositivo móvel rapidamente com uma só mão antes ou durante a abordagem; depende da autorização/laudo do fiscal aduaneiro (Persona P01) para violar o lacre. |

---

### Decisões de design influenciadas pela Persona P03 (Marcos):

* **Cartão de Veredito Simplificado (Avisos de Campo):** Para perfis de segurança/policiais, o sistema deve fornecer uma visualização simplificada/exportável contendo apenas o número do contêiner, placa do veículo, o status formal do canal (ex.: `[CANAL CINZA — RETENÇÃO IMEDIATA]`) e a presença ou ausência de anomalia, sem expor o visualizador completo de raio-X.
* **Mapeamento de Zona/Quadrante no Contêiner:** A anomalia deve ser traduzida em uma localização textual/esquemática simples (ex.: "Quadrante 3 — Fundo do Contêiner, Lado Direito") para guiar a busca física no pátio sem exigir que o policial interprete a imagem radiográfica.
* **Ações de Confirmação em 1-Toque:** Botoeira simplificada para registro de status de campo (`[CONFIRMAR RETENÇÃO]` / `[INICIAR VISTORIA FÍSICA]`), garantindo a rastreabilidade e a sincronização do evento com o histórico do Siscomex (RC07, RC08[cite: 12]).

---

### Síntese das personas

| Dimensão | Persona P01 — Gustavo Onofre | Persona P02 — Dr. Eduardo Resende | Persona P03 — Marcos Oliveira |
|---|---|---|---|
| **Autor(a)** | Kawan Mark Geronimo Da Silva | Gabriel Albertini Pinheiro | Alexandre Domiciano Pierri |
| **Papel no domínio** | Fiscal Aduaneiro / Operador de Scanner (1ª Linha Operacional) | [F] Auditor-Fiscal da Receita Federal, responsável pelo desembaraço (C02) | Agente de Segurança Pública / Policial de Campo (Ação Tática) |
| **Tipo de persona** | **Primária** | **Primária** | **Proto-persona a validar** (possível stakeholder, H42) |
| **Dispositivo / Hardware** | Desktop com monitor dedicado de 24" de alta resolução radiográfica | [?] Não investigado. [F] Acesso ao Portal Único com certificado digital (C02) | Tablet / coletor móvel robustecido de pátio |
| **Ambiente de uso** | Sala de comando portuária em penumbra, ruído externo e alta demanda | [H] Ambiente administrativo de unidade aduaneira | Pátio externo aberto sob intempéries (sol, chuva, poeira) e ruído |
| **Frequência de interação** | Contínua e ininterrupta (varredura de dezenas de contêineres por hora) | [H] Sob demanda, quando recebe um caso apontado (H39) | Pontual e imediata (ao receber alertas de interceptação ou vistoria física) |
| **Interação com a IA** | Manipula a imagem bruta com sobreposição da máscara residual e slider de opacidade | [H] Usa o resultado da imagem como evidência, junto dos dados da declaração (H11, ?08) | Consome apenas o status binário (`ANOMALIA DETECTADA`) e localização de quadrante |
| **Decisão central** | Sinalizar contêiner como suspeito ou liberar na fila rápida de triagem | [F] Formalizar exigência, verificação física ou desembaraço (C02) | Executar a abordagem, romper lacre, vistoriar a carga e confirmar ação |
| **Principal impacto no design** | Dark Mode obrigatório, radiografia ocupando 70%+ da tela, botões rápidos de veredito | [H] Evidência da imagem reunida aos dados da declaração e registro com motivo. Formas a investigar | UI móvel de alto contraste para luz solar, botões grandes para luvas, alertas em 1 toque |

Na coluna de P02, cada afirmação traz `[F]`, `[H]` ou `[?]`. As colunas de P01 e P03 repetem as fichas dessas personas, que ainda não têm essa marcação.

---

## 2. Mapa de empatia — equipe

**Persona escolhida:** Persona P01 — Gustavo Onofre  
**Justificativa:** Das duas personas primárias, P01 é a que examina a imagem, onde a contribuição do TCC atua. O mapa é o de uma proto-persona: o conteúdo é hipotético [H], salvo onde indicado [F].

![Mapa de empatia](../assets/03_personas/mapa_empatia.svg)

| Dimensão | Conteúdo | Status/evidência |
|---|---|---|
| **O que pensa e sente?** | • "Minha prioridade é garantir a segurança aduaneira sem cometer erros: não posso travar o fluxo comercial do porto por falso alarme, mas não posso deixar passar ilícito na calada da noite."<br>• Tensão e estresse contínuo pela responsabilidade funcional e penal: pavor de falsos negativos sob fadiga visual.<br>• Deseja que a inteligência artificial seja uma aliada transparente e explicável, destacando áreas suspeitas sem tirar dele a autoridade decisória final. | [H08], [H10], [H12], [H34], [H37] |
| **O que vê?** | • **No ambiente de trabalho:** Sala de controle mantida em penumbra; estação de trabalho com monitor dedicado de 24" calibrado para radiologia exibindo imagens densas e complexas; fila contínua de carretas nos gates portuários aguardando liberação.<br>• **Nas ferramentas de mercado:** Softwares legados de scanners (Rapiscan, Smiths) densos, com excesso de janelas e telas de fundo claro que ofuscam os olhos no escuro; ausência de ordenação inteligente por grau de risco. | [FT01], [H14], [H15], [H16], Análises C01 e C03 da Entrega 2 |
| **O que ouve?** | • **Da chefia e supervisão:** Cobrança constante por produtividade e agilidade na liberação de contêineres para não congestionar a rodovia e os gates do porto; alertas severos de que a omissão funcional pode gerar processos administrativos disciplinares.<br>• **Da Polícia e Inteligência:** Informes sobre rotas internacionais de narcotráfico e novas táticas sofisticadas de camuflagem (ex.: chapas de chumbo para mascarar radiação, fundos falsos e paredes duplas).<br>• **No ambiente de operação:** Barulho constante de carretas no pátio, sirenes dos pórticos e comunicações via rádio da fiscalização. | [H16], [H17], [H19], situação H13 da Entrega 1 |
| **O que diz e faz?** | • **O que diz:** "Essa densidade no canto traseiro do contêiner não é compatível com paletes de madeira; preciso conferir a cor do número atômico ($Z_{eff}$) e os dados do manifesto antes de liberar."<br>• **O que faz:** Opera com foco metódico; utiliza atalhos de teclado rápidos (zoom, contraste, pan e inversão) com alta memória muscular sem desviar os olhos da radiografia; quando surge uma dúvida crítica de madrugada, chama o colega da estação adjacente para um segundo olhar de confirmação ("olhar cruzado"). | [H10], [H13], C03 da Entrega 2 (estação RIW) |
| **Dores** | • **Fadiga visual severa:** Ardência nos olhos e exaustão mental após 6 a 12 horas consecutivas examinando matrizes radiográficas densas no escuro.<br>• **Alto custo do erro:** Dilema permanente entre liberar contrabando por falha humana (falso negativo) e paralisar cargas idôneas indevidamente (falso positivo, gerando custos de demurrage e atrito com exportadores).<br>• **Poluição de tela:** Ferramentas de IA que mascaram a imagem bruta com caixas opacas ou anulam as falsas cores de absorção de materiais ($Z_{eff}$).<br>• **Retrabalho e fragmentação:** Ter que examinar a radiografia em um console e digitar manualmente as conclusões em sistemas governamentais. | [H10], [H12], [H13], [H34], RC09, RC10 da Entrega 2 |
| **Ganhos** | • **Fila priorizada automaticamente:** Contêineres ordenados pelo grau de anomalia da IA nos quatro canais oficiais da Receita Federal (Verde, Amarelo, Vermelho e Cinza), sabendo exatamente onde concentrar atenção.<br>• **Mapa de anomalia dinâmico e suave:** Visualizador com slider de transparência (0 a 100%) e tecla de atalho rápida para alternar a máscara da IA sem perder a visão do $Z_{eff}$.<br>• **Tema Dark Mode profissional:** Fundo escuro de alto contraste ergonomicamente desenhado para salas em penumbra.<br>• **Veredito rápido com respaldo:** Registro de decisões em até 3 cliques, com motivos pré-formatados vinculados à sua credencial funcional.<br>• **Consulta integrada ao manifesto:** Acesso instantâneo a NCM, peso e mercadoria declarada na mesma tela. | [H24 revisada], [H30], [H31], [H35], RC01 a RC11 da Entrega 2 |

---

## 3. Contexto de uso — consolidação

*(Consolidação das dimensões contextuais que guiam os requisitos de IHC para toda a equipe.)*

| Dimensão | Descrição | Implicação de design |
|---|---|---|
| **Usuários** | Três perfis operacionais com responsabilidades complementares e bem delimitadas:<br>1. **Gustavo Onofre (P01 — Primário):** Fiscal Aduaneiro / Operador de Scanner que atua na triagem radiográfica em tempo real na esteira de escaneamento.<br>2. **Dr. Eduardo Resende (P02 — Secundário):** Auditor-Fiscal da Receita Federal / Decisor de Despacho que recebe casos escalados, cruza evidências com o Siscomex e formaliza exigências com valor jurídico.<br>3. **Marcos Oliveira (P03 — Secundário):** Agente de Segurança Pública / Policial de Campo que consome alertas simplificados para abordagem física no pátio.<br>Stakeholders indiretos: transportadoras, despachantes e importadores. | Segregação de privilégios e visões no sistema (RBAC). A tela principal deve ser otimizada para o fluxo ininterrupto de P01 (análise radiográfica), oferecendo módulos secundários dedicados ao dossiê de despacho de P02 e alertas de campo simplificados para o dispositivo móvel de P03. |
| **Tarefas** | Conjunto de tarefas articuladas do fluxo aduaneiro:<br>(a) Triagem contínua da fila de entrada (~45 a 60 segundos por contêiner);<br>(b) Inspeção radiográfica de anomalias residuais com ferramentas de manipulação espectral;<br>(c) Confronto entre imagem e dados do manifesto de carga (DUIMP);<br>(d) Homologação de veredito de canal de risco (Verde, Amarelo, Vermelho, Cinza);<br>(e) Emissão de Termo de Retenção e Exigência Fiscal fundamentada;<br>(f) Localização espacial e vistoria física da mercadoria no pátio. | Eficiência máxima de interação: suporte a atalhos de teclado ergonômicos para todas as ações repetitivas de P01, redução drástica de cliques no fluxo de veredito e geração automática de laudos estruturados para P02. |
| **Equipamentos** | • **P01 (Operador):** Estação de trabalho dedicada (RIW - Review Image Workstation) com monitor profissional de 22" a 24" calibrado para escala radiográfica, teclado com teclas de atalho e mouse ergonômico.<br>• **P02 (Auditor-Fiscal):** Desktop corporativo com 2 monitores e leitor de certificado digital ICP-Brasil.<br>• **P03 (Policial de Campo):** Tablet robustecido (*rugged tablet*) com tela antirreflexo e conectividade sem fio de pátio. | A radiografia inspecionada por P01 deve ocupar mais de 70% da área útil do monitor de 24" (RC10). As ferramentas de apoio (manifesto e veredito) devem residir em painéis retráteis. O layout para P03 deve priorizar alvos de toque grandes e alto contraste para visualização móvel sob sol. |
| **Ambiente físico** | • **P01:** Sala de controle de raio-X mantida em penumbra (meia-luz contínua) para favorecer a percepção de contrastes radiológicos; ruído contínuo de motores diesel, carretas pesadas e sirenes de pátio no ambiente externo; temperatura climatizada fria.<br>• **P02:** Gabinete de conferência aduaneira silencioso com iluminação convencional de escritório.<br>• **P03:** Pátio aberto de contêineres e galpões de vistoria sob sol pleno, chuva, poeira e movimentação pesada de empilhadeiras. | Tema Dark Mode obrigatório para a estação de triagem de P01 (alívio à fadiga ocular na penumbra). Proibição estrita de depender de alertas exclusivamente sonoros (devido ao ruído ambiente severo). Para o tablet de P03, tema claro de altíssimo contraste para legibilidade sob luz solar. |
| **Ambiente social/organizacional** | Estrutura hierárquica e legal rígida da Receita Federal e órgãos de segurança pública; fiscalização aduaneira ininterrupta em turnos de plantão (12x36h); severa pressão de produtividade para evitar filas e gargalos nos gates portuários; elevado risco pessoal e responsabilidade administrativa e criminal (crimes de facilitação de contrabando ou prevaricação). | A interface deve transmitir alta seriedade e transparência corporativa. Cada decisão crítica (ex.: conversão para Canal Cinza - fraude) deve exibir confirmação clara do impacto. O sistema deve apoiar o operador sem criar sensação de vigilância punitiva por parte da IA. |
| **Papéis/permissões/governança** | Segregação estrita por competência funcional legal: P01 tria e emite apontamento técnico; P02 detém a fé pública exclusiva para formalizar retenção de carga, aplicar penalidades fiscais e autorizar arrombamento de lacre; P03 executa a ordem de busca e apreensão. | Trilha de auditoria imutável (H17, H18, H32): toda ação de veredito é carimbada com a matrícula funcional, perfil do usuário, nível de confiança da IA e timestamp criptográfico, sem permissão de exclusão retroativa de registros. |
| **Volume de dados/histórico** | Milhares de contêineres inspecionados por mês em cada pórtico; matrizes radiográficas brutas em alta resolução (dezenas de megabytes por arquivo); necessidade legal de armazenamento de históricos de varredura por no mínimo 5 anos para investigações fiscais e inquéritos policiais. | Arquitetura de interface com carregamento assíncrono e progressivo de imagens, sem congelar a UI durante inferências da IA. Mecanismo de busca indexada por número da declaração (DUIMP), contêiner, faixa de datas e canal de risco (RC06, H29). |

---

## 4. Jornada do usuário — equipe

**Persona:** Persona P01 — Gustavo Onofre  
**Objetivo da jornada:** Triar contêineres na fila de varredura contínua, inspecionar suspeitas de anomalia residual com auxílio da IA e emitir veredito fundamentado com agilidade e segurança jurídica.  
**Início e fim da jornada:** Inicia na assunção do posto de trabalho na sala de raio-X e encerra no fechamento do lote com registro formal e passagem de plantão.

| Etapa | Situação/ação | Objetivo | Pensamento/emoção | Dor | Oportunidade de design | Evidência |
|---|---|---|---|---|---|---|
| **1. Assunção do Posto e Calibração** | Gustavo chega à sala de comando às 19:00 para iniciar o plantão noturno de 12h; autentica-se no sistema com sua matrícula e confere o status de calibração do scanner e da IA. | Iniciar a sessão e certificar-se de que os sensores e o modelo de IA estão operando perfeitamente. | "Mais 12 horas pela frente. Preciso garantir que a estação tá calibrada pra nenhum falso positivo me atrapalhar hoje." *(Foco e atenção)* | Telas de login brancas que ofuscam a visão ao entrar na sala em penumbra. | Inicialização direta em tema escuro profissional (Dark Mode), com dashboard de status dos detectores e carregamento do perfil do operador. | H10, H14, H16 |
| **2. Triagem e Priorização da Fila** | O fluxo de carretas nos gates é intenso (~60/hora); a tela inicial recebe as novas radiografias e a IA reorganiza a fila automaticamente pelo score de anomalia residual. | Identificar rapidamente quais contêineres precisam de inspeção imediata e quais estão limpos. | "Excelente que os contêineres normais já caem em canal verde; posso focar minha atenção onde há discrepância real." *(Alívio cognitivo)* | Fila linear puramente cronológica que obriga a examinar contêineres normais antes dos suspeitos. | Fila inteligente organizada por 4 canais de risco (Verde, Amarelo, Vermelho, Cinza), com badges textuais e ícones redundantes à cor. | H04, H07, H24 revisada, RC05, RC06 |
| **3. Análise Detalhada de Alerta Crítico** | Às 02:45 da madrugada, um contêiner é classificado como Canal Cinza (alta anomalia); Gustavo abre a imagem em tela cheia e ativa o slider de opacidade da máscara residual sobre as falsas cores de $Z_{eff}$. | Entender exatamente onde a IA detectou a discrepância e inspecionar se há compartimento falso ou blindagem. | "A IA acusou uma massa densa no canto traseiro do palete... Deixa eu conferir a sobreposição para ver o contorno dos objetos." *(Tensão investigativa)* | Caixas delimitadoras rígidas que tampam a imagem ou alteram as cores de discriminação de material ($Z_{eff}$). | Visualizador central ocupando 70%+ da tela, com controle suave de transparência (0 a 100%) e alternância rápida por tecla de atalho. | H05, H10, H13, H30, RC01, RC09, RC10 |
| **4. Validação Contextual com Manifesto** | Gustavo abre a gaveta lateral integrada de dados da carga para confrontar a imagem com a Declaração de Importação (DUIMP). | Validar se a densidade atípica visualizada é compatível com o produto declarado na nota fiscal. | "O manifesto declara copos de vidro, mas essa densidade residual é característica de metal ou composto orgânico denso... É ilícito evidente." *(Certeza técnica)* | Ter que alternar para o Portal Único Siscomex em outra tela para consultar o manifesto, perdendo o foco visual da imagem. | Painel lateral retrátil integrado exibindo NCM, descrição declarada, peso e dados do importador sem desviar da radiografia. | H11, RC10, C03 |
| **5. Emissão de Veredito e Escalonamento** | Gustavo aciona o botão de veredito, seleciona o motivo pré-estruturado ("Incompatibilidade de densidade radiológica com mercadoria declarada"), marca o quadrante e homologa o encaminhamento. | Formalizar a retenção da carga com respaldo legal, encaminhando a ocorrência ao Auditor-Fiscal (P02) e à equipe de campo (P03). | "Veredito homologado com justificativa robusta. Minha parte tá cumprida com total rastreabilidade legal." *(Segurança jurídica)* | Preenchimento burocrático demorado de formulários manuais enquanto a fila de carretas continua aumentando lá fora. | Fluxo de veredito em até 3 cliques, com justificativas normativas pré-formatadas e assinatura digital associada automaticamente à matrícula. | H06, H08, H17, H18, RC04, RC07 |
| **6. Fechamento de Turno e Passagem de Plantão** | Às 07:00 da manhã, ao término do plantão de 12 horas, Gustavo visualiza o sumário de contêineres triados e transfere a estação ao colega da manhã com os casos pendentes documentados. | Concluir o plantão com todas as cargas auditadas e prestar contas transparentes das decisões tomadas no turno. | "Noite pesada, mas conseguimos barrar um contêiner suspeito sem travar o pátio do terminal." *(Sensação de dever cumprido)* | Perda de contexto na passagem de turno verbal e cansaço visual acumulado ao longo da noite. | Relatório consolidado de passagem de turno exportável em 1 clique, com resumo de contêineres triados, retidos e pendentes de conferência. | H13, H35, H38 |

---

## Síntese

Quais necessidades e objetivos devem obrigatoriamente aparecer nos cenários e nas tarefas seguintes?

A partir das personas, do contexto de uso e da jornada do usuário consolidados nesta entrega, os seguintes requisitos, objetivos e tarefas tornam-se **mandatórios para os Cenários de Problema (Entrega 4) e Análise de Tarefas (Entrega 5)**:

1. **Priorização Inteligente da Fila de Triagem por Risco:** O sistema deve organizar a entrada de radiografias de acordo com os 4 canais normativos da Receita Federal (Verde, Amarelo, Vermelho e Cinza), garantindo que cargas com alta anomalia residual da IA recebam foco prioritário imediato do operador.
2. **Inspeção Comparativa sem Degradação de Imagem:** A interface deve oferecer manipulação visual contínua da anomalia via controle deslizante suave de opacidade (slider de 0 a 100%) e alternância rápida (toggle), garantindo que o mapa residual conviva harmoniosamente com a discriminação de número atômico ($Z_{eff}$) e ferramentas de realce de bordas.
3. **Ergonomia Visual e Dark Mode Obrigatório:** O ambiente de sala de controle em penumbra e a prevenção da fadiga visual (especialmente nas madrugadas) impõem uma paleta escura de alto contraste com mais de 70% da área útil dedicada à radiografia, com painéis laterais retráteis.
4. **Integração de Metadados Aduaneiros (Dossiê Documental):** Consulta integrada aos dados da Declaração Única de Importação (DUIMP/Siscomex) diretamente no visualizador de imagem, evitando troca de janelas durante a validação da suspeita.
5. **Formalização Ágil de Veredito com Rastreabilidade Legal:** Registro de decisões em poucos cliques com justificativas pré-estruturadas, associando a matrícula do operador (P01) e carimbo de tempo para posterior ratificação pelo Auditor-Fiscal (P02).
6. **Disseminação Simplificada de Alertas para Equipes de Campo:** Notificação direcionada para dispositivos móveis de agentes de segurança (P03), contendo indicação textual/esquemática simplificada do quadrante físico da anomalia no contêiner para busca física no pátio.

---

## Checklist

- [x] Existe pelo menos uma persona por integrante (P01: Gustavo Onofre, P02: Dr. Eduardo Resende, P03: Marcos Oliveira).
- [x] As personas não são apenas diferenças demográficas superficiais (diferenciadas por papéis, ambientes, dispositivos e relação com a IA: triagem contínua, despacho legal e ação tática de campo).
- [x] Está claro o que é dado real e o que é hipótese/proto-persona.
- [x] A persona não “validou por ficção” uma hipótese da Entrega 1; afirmações continuam marcadas como hipótese quando não há evidência.
- [x] Objetivos e dores têm consequência para o design.
- [x] Contexto de uso está coerente com a Entrega 1 e com a análise de concorrência da Entrega 2.
- [x] Em TCC sem interface original, a persona possui relação explícita com a contribuição técnica (modelo de anomalia residual em raio-X).
- [x] Papéis administrativos, técnicos e decisórios só foram criados quando possuem objetivos/tarefas diferentes.
- [x] Jornada possui etapas, dores e oportunidades e não é apenas wireflow (mapeada em 6 etapas operacionais completas).
- [x] IDs das personas foram mapeados para a rastreabilidade.

