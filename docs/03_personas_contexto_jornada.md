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
| **Perfil: Fiscal Aduaneiro / Operador de Scanner (H01)** | [H01] Hipótese | Confirmado pela análise de mercado (C01 Rapiscan e C03 Smiths) e pelo fluxo de despacho do Siscomex (C02) como o usuário que opera a estação de imagem e decide sobre a conferência. | Incorporar como base da Persona Primária P01 (Gustavo Onofre). |
| **Fadiga visual e exaustão em plantão noturno (H10, H13)** | [H10], [H13] Hipóteses | Situação concreta descrita na Entrega 1 (§4.5) e corroborada pelas especificações de estações de alta rotação da Smiths (C03: monitores de 22"-24" para alívio ocular em tráfego de até 80 caminhões/h). | Incorporar como restrição central e dor prioritária de P01, demandando Dark Mode e ergonomia visual. |
| **Ambiente de sala de controle em recinto alfandegado (H14, H16)** | [H14], [H16] Hipóteses | Especificações da estação RIW (Review Image Workstation) da Smiths e salas de monitoramento portuário. Ambiente com penumbra e ruídos externos. | Incorporar no contexto de uso de P01, descartando soluções com interfaces claras ou alertas puramente sonoros. |
| **Estação de trabalho com monitor dedicado (H15)** | [H15] Hipótese (revisada) | Análise C03 demonstrou uso de monitor dedicado de 22" a 24" calibrado para radiografia (afastando a premissa inicial de múltiplos monitores genéricos). | Incorporar como restrição de hardware para P01, exigindo centralidade da radiografia e painéis retráteis. |
| **Necessidade de comparação visual e explicabilidade (H05, H30, H31, H37)** | [H05], [H30], [H31], [H37] Hipóteses | C01 (InSight Vehicle Compare / High Density) e C03 (viZual Zeff) mostram que operadores dependem de comparação e rejeitam métricas matemáticas abstratas na hora da triagem. | Incorporar como objetivo técnico de P01: mapa residual por transparência (slider) e destaque de ROI. |
| **Registro motivado de veredito e responsabilidade legal (H06, H08, H17, H18, H19)** | [H06], [H08], [H17], [H18], [H19] Hipóteses | Análise C02 comprovou que a decisão aduaneira é um ato formal comunicado (exigência fiscal), motivado e com valor jurídico, vinculado à matrícula do auditor. | Incorporar como requisito de fluxo de P01: veredito com justificativa rápida e registro de auditoria imutável. |
| **Escala de risco com quatro canais aduaneiros (H24 revisada)** | [H24] Revisada na Entrega 2 | Manual de Despacho de Importação da RFB (C02) comprovou que o gerenciamento aduaneiro adota 4 canais: verde, amarelo, vermelho e cinza (fraude). | Incorporar no modelo mental de P01, adaptando a fila de triagem da IA aos quatro canais normativos. |
| **Perfil: Auditor-Fiscal / Decisão de Despacho e Inteligência (H02)** | [H02] Hipótese | Confirmado pela análise do Siscomex (C02: parametrização, distribuição para auditor e exigência fiscal). É a autoridade com competência jurídica para lavrar a retenção e emitir o ato formal. | Incorporar como base da Persona Secundária P02 (Eduardo Resende). |
| **Perfil: Agente de Segurança Pública / Policial de Campo (H03)** | [H03] Hipótese | Necessidade de intervenção física de campo no pátio e gates para abordagem e abertura do contêiner sem interpretar o raio-X bruto. | Incorporado na Persona Secundária P03 (Marcos Oliveira). |

---

## 1. Personas

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

### Persona Secundária P02 — Dr. Eduardo Resende (Auditor-Fiscal da Receita Federal / Chefe de Despacho Aduaneiro)

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8  
**Tipo:** secundária  
**Base de evidências:** Análise do Portal Único Siscomex na Entrega 2 (C02: fluxo DUIMP, distribuição para auditor, canais de parametrização e exigência fiscal motivada), regulamentação aduaneira da Receita Federal do Brasil (RFB), requisitos de auditoria, conformidade legal e governança (H02, H06, H08, H17, H18, H19, H24 revisada, RC04, RC07, RC08).  
**Hipóteses da Entrega 1 relacionadas:** H02, H06, H08, H11, H14, H17, H18, H19, H24 (revisada), H29, H32, H35

![Persona P02](../assets/03_personas/persona_p02.jpeg)

| Campo | Descrição |
|---|---|
| **Nome** | Dr. Eduardo Resende |
| **Faixa etária / contexto relevante** | 52 anos. Auditor-Fiscal da Receita Federal há 20 anos, atuando na Seção de Conferência Aduaneira e Gerenciamento de Risco em delegacia alfandegária portuária. Possui formação em Direito e especialização em Comércio Exterior. Atua em gabinete administrativo/auditoria, atendendo a demandas de conferência e decisões de parametrização fiscal. |
| **Ocupação/papel** | Auditor-Fiscal da Receita Federal / Chefe de Equipe de Despacho Aduaneiro. É o usuário secundário detentor da **competência legal privativa ("a caneta")** para formalizar atos fiscais, lavrar termos de retenção e determinar abertura física da carga. Não opera o console de triagem contínua a cada 45 segundos como o Gustavo (P01); é acionado quando o operador ou o modelo de IA sinaliza anomalia crítica (Canal Vermelho ou Canal Cinza — fraude), cabendo a ele cruzar a evidência técnica da imagem com a documentação no Siscomex, lavrar a Exigência Fiscal e autorizar a ação policial no pátio (P03). |
| **Conhecimento do domínio** | Altíssimo em legislação aduaneira, regulamento aduaneiro da Receita Federal, comércio exterior (DUIMP, DI, NCM, valoração aduaneira), parametrização de risco e processo administrativo fiscal. Conhecimento intermediário em imagens de raio-X: compreende o significado de mapas de calor residuais e áreas de densidade atípica, focando na coerência entre a mercadoria declarada na DUIMP e o conteúdo radiográfico inspecionado. |
| **Experiência tecnológica** | Altíssima no Portal Único Siscomex (PUCOMEX), sistemas corporativos da Receita Federal e assinatura digital com certificado ICP-Brasil. Média/baixa em softwares de edição ou processamento avançado de imagens. Busca um ambiente integrado, seguro e prático, rejeitando interfaces com jargões puramente matemáticos de machine learning. |
| **Objetivos** | 1. Avaliar com rapidez e segurança jurídica os contêineres escalados com anomalia pelo operador (P01) e pelo modelo de IA.<br>2. Cruza a evidência radiográfica residual com os dados do manifesto de carga (DUIMP) para comprovar indícios de contrabando, descaminho ou compartimentos ocultos.<br>3. Emitir com respaldo formal a Exigência Fiscal ou Termo de Retenção motivado, com prazo e efeitos jurídicos vinculados à sua credencial funcional.<br>4. Evitar litígios judiciais ou custos portuários decorrentes de retenções físicas infundadas de grandes exportadores/importadores idôneos. |
| **Necessidades** | 1. Dossiê integrado na mesma interface, reunindo a radiografia com o mapa de anomalia da IA e os metadados do Siscomex (DUIMP, descrição da mercadoria, NCM, exportador, peso e histórico de parametrização).<br>2. Linha do tempo e histórico de processos anteriores do mesmo importador ou rota de risco para checar reincidências (apoiando H29).<br>3. Módulo de formalização rápida de veredito com modelos pré-estruturados de despacho (Exigência Fiscal / Vistoria Física com Rompimento de Lacre / Liberação Homologada).<br>4. Trilha de auditoria rastreável e imutável que vincule a matrícula funcional e o timestamp da decisão (atendendo H17 e H18). |
| **Dores/frustrações** | 1. Fragmentação de sistemas: ter que visualizar a imagem do scanner em um software proprietário e abrir manualmente o Siscomex para lançar os dados da exigência fiscal.<br>2. Receber alertas de anomalia da IA desprovidos de contexto documental, sem saber quem é o importador ou qual a mercadoria declarada.<br>3. Insegurança jurídica e administrativa: pavor de liberar uma carga ilícita ou ordenar uma conferência física invasiva em carga sensível sem prova visual robusta. |
| **Motivadores** | 1. Eficiência na repressão a fraudes fiscais e interceptação de ilícitos de alto impacto no comércio exterior.<br>2. Conclusão ágil do despacho aduaneiro para empresas certificadas e de baixo risco (OEA).<br>3. Absoluta conformidade jurídica dos atos praticados sob sua assinatura funcional. |
| **Restrições/acessibilidade** | 1. Ambiente de gabinete com iluminação convencional de escritório (necessita de tipografia legível, bom contraste e harmonia com outros sistemas de governo).<br>2. Interface orientada ao vocabulário normativo oficial da aduana brasileira (DUIMP, canal, exigência, desembaraço, dossiê, recinto), eliminando métricas técnicas obscuras de inteligência artificial.<br>3. Exigência estrita de conformidade com padrões de segurança da informação e autenticação por certificado digital. |
| **Ambiente típico de uso** | Gabinete da Seção de Conferência Aduaneira em delegacia alfandegária de porto; ambiente climatizado de escritório; estação desktop padrão corporativo com dois monitores; acesso autenticado à rede da Receita Federal. |
| **Comportamentos relevantes** | Analisa os casos com rigor documental e metodológico; antes de lavrar a exigência, consulta o histórico do CNPJ importador; confere sempre a compatibilidade entre a densidade radiológica identificada pela IA e a descrição do produto na nota fiscal/fatura. |

**Decisões de design influenciadas pela Persona Secundária P02 (Eduardo):**

- **Dossiê Integrado Siscomex + Radiografia (RC04, RC07):** Painel consolidado de decisão que exibe, lado a lado, os dados documentais da carga (DUIMP, mercadoria, NCM, importador) e o visualizador radiográfico com o mapa residual da IA, permitindo ao auditor validar a suspeita sem alternar de aplicativo.
- **Módulo de Linha do Tempo e Consulta a Histórico de Processos (RC06, RC08, H29):** Busca direta por chave processual (número da DUIMP ou contêiner) com exibição cronológica de marcos e histórico de varreduras passadas para investigar reincidência de importadores ou fraudes conhecidas.
- **Emissão Estruturada de Exigência Fiscal e Termo de Retenção (RC04, RC07):** Ferramenta integrada que gera o despacho formal em poucos cliques, pré-carregando as evidências visuais da IA (área de discrepância residual e score de risco), motivo normativo pré-selecionado e prazo legal de resposta.
- **Trilha de Auditoria e Vinculação Funcional (H17, H18, H32):** Registro imutável de cada etapa decisória, associando o login/certificado digital do auditor à homologação do canal de risco e à ordem de intervenção enviada ao agente de campo (P03).
---

### Persona Secundária P03 — Marcos Oliveira / Agente de Segurança Pública (Operacional de Campo)

**Tipo:** secundária  
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

### Decisões de design influenciadas pela Persona Secundária P03 (Marcos):

* **Cartão de Veredito Simplificado (Avisos de Campo):** Para perfis de segurança/policiais, o sistema deve fornecer uma visualização simplificada/exportável contendo apenas o número do contêiner, placa do veículo, o status formal do canal (ex.: `[CANAL CINZA — RETENÇÃO IMEDIATA]`) e a presença ou ausência de anomalia, sem expor o visualizador completo de raio-X.
* **Mapeamento de Zona/Quadrante no Contêiner:** A anomalia deve ser traduzida em uma localização textual/esquemática simples (ex.: "Quadrante 3 — Fundo do Contêiner, Lado Direito") para guiar a busca física no pátio sem exigir que o policial interprete a imagem radiográfica.
* **Ações de Confirmação em 1-Toque:** Botoeira simplificada para registro de status de campo (`[CONFIRMAR RETENÇÃO]` / `[INICIAR VISTORIA FÍSICA]`), garantindo a rastreabilidade e a sincronização do evento com o histórico do Siscomex (RC07, RC08[cite: 12]).

---

### Síntese das personas

| Dimensão | Persona P01 — Gustavo Onofre | Persona P02 — Dr. Eduardo Resende | Persona P03 — Marcos Oliveira |
|---|---|---|---|
| **Autor(a)** | Kawan Mark Geronimo Da Silva | Gabriel Albertini Pinheiro | Alexandre Domiciano Pierri |
| **Papel no domínio** | Fiscal Aduaneiro / Operador de Scanner (1ª Linha Operacional) | Auditor-Fiscal da Receita Federal / Chefe de Despacho (2ª Linha Decisória) | Agente de Segurança Pública / Policial de Campo (Ação Tática) |
| **Tipo de persona** | **Primária** | **Secundária** | **Secundária** |
| **Dispositivo / Hardware** | Desktop com monitor dedicado de 24" de alta resolução radiográfica | Desktop corporativo padrão com dois monitores | Tablet / coletor móvel robustecido de pátio |
| **Ambiente de uso** | Sala de comando portuária em penumbra, ruído externo e alta demanda | Gabinete administrativo climatizado e silencioso | Pátio externo aberto sob intempéries (sol, chuva, poeira) e ruído |
| **Frequência de interação** | Contínua e ininterrupta (varredura de dezenas de contêineres por hora) | Sob demanda / escalonamento (ao receber casos de Canal Vermelho/Cinza) | Pontual e imediata (ao receber alertas de interceptação ou vistoria física) |
| **Interação com a IA** | Manipula a imagem bruta com sobreposição da máscara residual e slider de opacidade | Avalia o score de risco, mapa de calor e cruza com a DUIMP/Siscomex | Consome apenas o status binário (`ANOMALIA DETECTADA`) e localização de quadrante |
| **Decisão central** | Sinalizar contêiner como suspeito ou liberar na fila rápida de triagem | Lavrar Exigência Fiscal / Termo de Retenção e ordenar conferência física | Executar a abordagem, romper lacre, vistoriar a carga e confirmar ação |
| **Principal impacto no design** | Dark Mode obrigatório, radiografia ocupando 70%+ da tela, botões rápidos de veredito | Dossiê integrado (Siscomex + Raio-X), busca por ID/DUIMP, termo com assinatura digital | UI móvel de alto contraste para luz solar, botões grandes para luvas, alertas em 1 toque |

---

## 2. Mapa de empatia — equipe

**Persona escolhida:** Persona P01 — Gustavo Onofre  
**Justificativa:** É a persona primária do projeto, representando o operador direto que toma a decisão crítica de triagem e veredito na estação de imagem sob condições severas de fadiga visual e pressão de tempo.

![Mapa de empatia](../assets/03_personas/mapa_empatia.svg)

| Dimensão | Conteúdo | Status/evidência |
|---|---|---|
| **O que pensa e sente?** | • "Minha prioridade é garantir a segurança aduaneira sem cometer erros: não posso travar o fluxo comercial do porto por falso alarme, mas não posso deixar passar ilícito na calada da noite."<br>• Tensão e estresse contínuo pela responsabilidade funcional e penal: pavor de falsos negativos sob fadiga visual.<br>• Deseja que a inteligência artificial seja uma aliada transparente e explicável, destacando áreas suspeitas sem tirar dele a autoridade decisória final. | [H08], [H10], [H12], [H34], [H37] |
| **O que vê?** | • **No ambiente de trabalho:** Sala de controle mantida em penumbra; estação de trabalho com monitor dedicado de 24" calibrado para radiologia exibindo imagens densas e complexas; fila contínua de carretas nos gates portuários aguardando liberação.<br>• **Nas ferramentas de mercado:** Softwares legados de scanners (Rapiscan, Smiths) densos, com excesso de janelas e telas de fundo claro que ofuscam os olhos no escuro; ausência de ordenação inteligente por grau de risco. | [F01], [H14], [H15], [H16], Análises C01 e C03 da Entrega 2 |
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

