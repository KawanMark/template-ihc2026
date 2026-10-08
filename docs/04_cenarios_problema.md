# Entrega 4 — Cenários de análise/problema

**Data:** 8/10/2026  
**Status:** ⬜ não iniciada  
**Responsabilidade:** 1 solução completa por integrante  

## Objetivo da atividade

Descrever situações atuais em que o usuário tenta alcançar um objetivo e encontra dificuldades. O cenário de análise/problema deve tornar visível **o contexto, os atores, as ações e as rupturas**, sem antecipar a interface que será projetada.

---

## Cenário C03 — Inspeção Física no Pátio Ineficiente por Falta de Detalhamento Espacial e Visual da Anomalia em Cargas de Alto Risco

**Autor(a):** Alexandre Domiciano Pierri — 22.122.012-0  
**Persona(s) relacionada(s):** P03 – Marcos Oliveira (Agente de Campo / Fiscal de Pátio e Vistoria Física)  
**Necessidade relacionada:** R01 (Orientação precisa para verificação física no pátio através de mapa residual e coordenadas)  
**Situação concreta da Entrega 1 relacionada:** Seção 4.4 / H28 (Emissão e consulta de relatórios/laudos de instrução para vistorias) e H42 (Atuação e tomada de decisão do agente de pátio)  
**Hipóteses ainda presentes:** H12, H28, H31, H37, H42  

### 1. Cenário inicial

Durante o turno da noite no Porto de Imbituba, o agente de campo Marcos Oliveira (P03) recebe uma ordem de verificação física para um contêiner refrigerado (*reefer*) mantido em retenção. O laudo anexado ao processo eletrônico indica apenas "Inconsistência de densidade detectada na imagem de raio-X", sem especificar a Região de Interesse (ROI), a profundidade ou a natureza do desvio.

Marcos desloca-se até o pátio sob iluminação artificial precária e ruído intenso de maquinário pesado. Acompanhado pela equipe de apoio, ele precisa romper os lacres e descarregar manualmente dezenas de caixas de carne congelada na tentativa de localizar o ponto de suspeita apontado pela análise inicial. Sem um documento visual ilustrativo ou um gabarito explicativo de coordenadas, a equipe gasta mais de três horas esvaziando dois terços do contêiner para constatar que a alteração de densidade tratava-se de um adensamento de gelo acumulado no compressor interno do sistema de refrigeração (falso positivo).

O processo estende o tempo de permanência da carga no pátio, gera atrito com o operador logístico devido ao risco de deterioração do produto e expõe a equipe de vistoria a esforço físico desnecessário. Marcos registra a liberação no terminal móvel, lamentando a falta de um documento visual instrucional que identificasse a coordenada exata e o tipo de anomalia identificada durante a triagem.

---

### 2. Questões de refinamento

| # | Questão | Por que precisa ser respondida | Fonte/forma de obter resposta |
|---|---|---|---|
| Q1 | Quais condições operacionais do ambiente de pátio afetam a leitura do laudo pelo agente? | Para entender as limitações físicas (iluminação, dispositivos, EPIs) enfrentadas na ponta durante a consulta do laudo. | Entrevista contextual / observação de campo com agentes de vistoria no porto. |
| Q2 | Como a equipe de pátio decide por onde começar a descaltagem da carga quando o relatório é omisso? | Para identificar os heurísticos empíricos e os riscos operacionais assumidos ao adivinhar a posição da anomalia. | Análise de procedimento operacional padrão (POP) de vistoria física e histórico de incidentes. |
| Q3 | Qual o impacto temporal e econômico exato de um falso positivo não esclarecido previamente? | Para quantificar o custo da ruptura no processo de trabalho e justificar a necessidade de explicar os níveis de incerteza da análise. | Dados de tempo médio de atendimento (TMA) do terminal e registros de vistorias desnecessárias. |

---

### 3. Cenário refinado

Durante o turno da noite no Porto de Imbituba, sob chuva fina, vento forte e iluminação artificial precária, o agente de campo Marcos Oliveira (P03) recebe uma ordem de verificação física para um contêiner refrigerado (*reefer*) retido em canal vermelho. **[NOVO: Marcos consulta a ordem de serviço em seu terminal móvel industrial com tela de baixa resolução sob luz refletida, encontrando apenas a mensagem genérica "Inconsistência de densidade detectada na imagem de raio-X", sem qualquer anexo gráfico, marcação de quadrante (porta, meio ou fundo) ou indicação de probabilidade de risco.]**

Marcos desloca-se até o setor de vistorias, onde o ruído de empilhadeiras e reach stackers impede a comunicação clara sem o uso de rádio. Acompanhado pela equipe de apoio de movimentação física, **[NOVO: por não saber em qual seção a anomalia se encontra, Marcos adota o procedimento padrão empírico de esvaziar o contêiner a partir da porta frontal]**. A equipe rompe os lacres e descarrega manualmente dezenas de caixas de carne congelada a -18 °C. 

Sem o mapa residual visual ou o gabarito explicativo de ROI (Região de Interesse), a equipe gasta mais de três horas esvaziando dois terços do contêiner **[NOVO: manipulando cerca de 12 toneladas de carga em ambiente de extrema fadiga física]** para constatar que a alteração de densidade tratava-se de um adensamento de gelo acumulado no compressor interno do sistema de refrigeração. **[NOVO: Se a equipe soubesse que a alteração estava na parede do fundo, junto ao motor, a vistoria teria focado apenas no painel técnico externo, sem necessidade de tocar na carga.]**

O processo estende o tempo de permanência da carga no pátio em mais de 180 minutos, gera atrito com o operador logístico devido ao risco de quebra da cadeia de frio e expõe a equipe de vistoria a esforço físico e riscos de lesão desnecessários. Marcos registra a liberação no terminal móvel, lamentando a falta de um laudo instrucional detalhado com o mapa de divergências radiográficas.

---

### 4. Elementos extraídos

| Elemento | Evidência no cenário |
|---|---|
| **Ator(es)** | Marcos Oliveira (P03 - Agente de campo) e equipe de apoio de movimentação física de pátio. |
| **Objetivo(s)** | Localizar e inspecionar a suspeita de anomalia no contêiner com precisão, agilidade e segurança, validando a infração ou liberando a carga sem danos. |
| **Contexto** | Pátio portuário noturno, chuva fina, ruído alto de maquinário, restrições térmicas (-18 °C na carga) e uso de terminal móvel industrial sob iluminação deficiente. |
| **Recursos/informações** | Ordem de serviço no terminal móvel com texto vago ("Inconsistência de densidade"); ausência de laudo visual com mapa residual, marcação de ROI ou profundidade. |
| **Ações** | Consulta à ordem de serviço; deslocamento ao pátio; descaltagem e esvaziamento manual sistemático a partir da porta; inspeção visual das caixas; constatação do falso positivo; registro de liberação no terminal. |
| **Problemas/rupturas** | Omissão de coordenadas e mapa visual no laudo recebido; descarregamento manual cego de 12 toneladas de carga; incapacidade de distinguir falha estrutural do contêiner (compressor) de ilícitos na carga. |
| **Consequências** | Atraso de mais de 3 horas na liberação do contêiner; exposição do agente a fadiga e riscos físicos; risco de deterioração da carga refrigerada; atrito com operadores logísticos. |

---

### 5. Implicações para as próximas entregas

* **Análise de Tarefas:** Mapear minuciosamente o fluxo de trabalho do agente de pátio, identificando os pontos em que a tomada de decisão depende da visualização do espaço tridimensional do contêiner.
* **Mapeamento de Informações:** Levantar quais dados visuais (ex: mapa de calor residual, caixas de delimitação de ROI, identificação de setor anterior/posterior) e metadados (grau de incerteza da IA, tipo de material provável) precisam compor o artefato/laudo gerado na etapa de análise para instruir a ponta.
* **Requisitos de Usabilidade em Campo:** Coletar requisitos sobre como as informações de inspeção precisam ser apresentadas para rápida leitura sob condições ambientais adversas (telas pequenas, alta luminosidade/escuridão, operação com luvas).

---

## Checklist

- [x] Há um cenário completo por integrante.
- [x] Cada cenário tem título, ator, objetivo, contexto e problema.
- [x] O cenário possui origem rastreável na Entrega 1 ou justifica claramente a inclusão de uma nova situação.
- [x] O texto descreve a situação atual, sem antecipar a solução.
- [x] Para TCC sem interface original, o cenário descreve uma prática humana plausível relacionada à contribuição técnica, e não “a falta de uma tela”.
- [x] Questões de refinamento acrescentam informação nova.
- [x] O refinamento mostra claramente o que foi adicionado/alterado.
- [x] Cenários são diferentes o suficiente para cobrir objetivos/problemas relevantes.
- [x] Cada cenário está ligado a persona/necessidade na matriz de rastreabilidade.
