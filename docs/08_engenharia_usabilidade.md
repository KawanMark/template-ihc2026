# Entrega 8 — Ciclo de vida e engenharia de usabilidade

**Data:** 04/11/2026<br>
**Status:** 🟩 concluída<br>
**Autores:** Kawan Mark Geronimo Da Silva (22.222.010-5), Gabriel Albertini Pinheiro (22.122.094-8) e Alexandre Domiciano Pierri (22.125.061-6)

## Objetivo e recorte

Definir requisitos e metas para a **Mesa de inspeção**, que permite comparar uma radiografia de contêiner com o destaque do modelo, marcar regiões e registrar um parecer. A base são as [tarefas da Entrega 5](05_analise_tarefas.md), os fluxos PF01/PF02 da [Entrega 6](06_prototipacao_papel.md) e a [pesquisa documental da Entrega 7](07_coleta_dados.md).

| Camada | O que pertence ao projeto | O que será avaliado |
|---|---|---|
| Contribuição técnica do TCC | Classificação de imagens de raio-X com anomalias sintéticas e localização aproximada por mapa de atenção. O código local consultado utiliza EfficientNet-B1 e Grad-CAM. | Métricas do modelo pertencem ao estudo experimental do TCC. |
| Interação de IHC | Comparação visual, ajustes da imagem, marcação, comentário e emissão de parecer. | Compreensão, conclusão da tarefa, esforço, prevenção de erro e satisfação. |
| Dados e integrações do protótipo | Casos fictícios, resultados previamente preparados e espera simulada quando não houver integração. Sem envio real à RFB/Siscomex. | Entendimento dos estados e do fluxo; não desempenho de uma operação portuária. |

O mapa indica regiões relevantes para a predição, sem provar a presença de ilícito. O indicador e o limiar devem corresponder à versão técnica demonstrada: os valores da Entrega 6 são exemplos de interface, não uma probabilidade comprovada de contrabando. A interface da disciplina permanece um protótipo demonstrativo.

## 1. Características da plataforma

| Característica | Definição para o protótipo | Consequência para IHC |
|---|---|---|
| Software | Interface desktop, representada primeiro em baixa fidelidade e depois no Figma. | Manter os mesmos termos e estados entre os protótipos. |
| Hardware | Mouse, teclado e um monitor; referência de avaliação: 1920 × 1080, em tela de 22–24 polegadas. | Dar prioridade à radiografia e verificar a legibilidade dos painéis. É uma condição de teste, não um levantamento do posto real. |
| Capacidades | Abrir um caso, ajustar visualização, comparar camadas, marcar regiões e gerar parecer. | Ajustes e marcações devem ser reversíveis, preservando a imagem original. |
| Restrições | Sem validação profissional da interface; mapa de atenção aproximado e sem classificação do tipo de ilícito. | Explicar limites do resultado e separar indicação automática de conclusão humana. |
| Conectividade | Demonstração local ou navegável, sem integração institucional. | Falhas de processamento/exportação devem permitir tentar novamente sem perder anotações. |
| Tempo de processamento | Latência real ainda não medida; no teste, usar espera simulada fixa de 3 segundos. | Exibir “Analisando imagem”; em erro, explicar a falha. Não mostrar percentual sem progresso conhecido. |
| Dados/histórico | Um caso aberto por vez, com imagem, identificação fictícia e parecer. Histórico agregado fora do recorte. | Evitar troca de caso sem aviso sobre registros não exportados. |
| Privacidade | Casos fictícios ou imagens públicas com origem identificada; participantes futuros identificados por códigos. | Não expor nomes, placas, empresas ou operações reais na demonstração. |
| Papéis | P01 examina e registra; P02 consulta o parecer como apoio à decisão. P03 continua stakeholder (H42). | A Mesa não autoriza desembaraço nem cria uma interface móvel para P03. |

## 2. Princípios do projeto

| Princípio | Aplicação no projeto | Base |
|---|---|---|
| Contexto e tarefa | Concentrar a tela na comparação e no registro; fila priorizada depende de H04/H41. | Entregas 1, 3 e 7. |
| Controle do usuário | Permitir ocultar mapa, restaurar ajustes e corrigir marcações antes da exportação. | T01–T03; RC01/RC09. |
| Clareza do resultado | Distinguir imagem, destaque do modelo e parecer humano; não usar “liberar carga” para um apontamento. | H31/H39; ED01–ED05 da Entrega 7. |
| Acessibilidade visual | Informação crítica com texto além da cor; contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande. | WCAG 2.2, critérios 1.4.1 e 1.4.3. |
| Acesso aos controles | Foco visível, controles nomeados e operação por teclado; alternativa por clique ao comando de manter a tecla C pressionada. | WCAG 2.2, critérios 2.1.1, 2.4.7 e 4.1.2. |
| Prevenção e recuperação | Identificar campo incompleto e preservar o que já foi preenchido; confirmar descarte de um parecer em edição. | PP06 da Entrega 6; WCAG 2.2, critérios 3.3.1 e 3.3.3. |
| Minimização de dados | Usar identificação fictícia nos casos e publicar apenas resultados de avaliação sem identificação pessoal. | Aspectos éticos da Entrega 7. |

Esses critérios orientam o projeto; sua inclusão não declara conformidade integral do protótipo com a WCAG.

## 3. Metas de usabilidade

### 3.1 Metas qualitativas

| Meta | Público/tarefa | Evidência desejada | Motivo |
|---|---|---|---|
| Entender o papel da IA | P01/P02, leitura da triagem | Explicar que mapa e indicador apoiam a análise, sem provar ilícito. | Evitar confiança excessiva no resultado (H31/H37). |
| Comparar sem perder o contexto | P01, T01/T02 | Alternar a camada e localizar a mesma região na imagem original. | Preservar a leitura da radiografia (H30, RC09). |
| Produzir um parecer compreensível | P01/P02, T03/T05/T06 | Relacionar identificação do caso, região, comentário e conclusão. | Apoiar o encaminhamento da análise (R03). |

### 3.2 Metas quantitativas

São **critérios propostos**, ainda sem resultados. Nas Entregas 12–14, prever três participantes externos à equipe, como exige a Entrega 14. Priorizar o perfil profissional; se forem utilizados proxies, registrar a relação de cada um com a tarefa e limitar a conclusão à interação. A sessão começa com a mesma apresentação dos controles, sem treino das tarefas avaliadas.

| ID | Dimensão e tarefa | Métrica e meta | Como medir | Justificativa |
|---|---|---|---|---|
| MU01 | Eficácia — comparar original/mapa (T01/T02, PF01) | 3/3 concluem sem ajuda: localizar região indicada, ocultar o mapa e voltar à comparação. | Registrar sucesso e intervenções por participante. | A comparação é a tarefa central de AC02. |
| MU02 | Compreensão — interpretar triagem (PF01) | 3/3 distinguem indicação do modelo de prova de ilícito e de autorização de liberação. | Pergunta aberta após a tarefa, avaliada pelos dois critérios. | A interpretação errada afeta toda a análise. |
| MU03 | Eficácia — registrar parecer (T03/T06, PF02) | 3/3 geram parecer com caso correto, região comentada, responsável fictício e conclusão. | Conferir os quatro itens no documento produzido. | O registro precisa preservar a relação entre achado e caso. |
| MU04 | Eficiência — registrar um achado (PF02) | Mediana de até 3 minutos, sem ajuda. | Cronometrar da instrução, com caso já aberto, até a exportação; anotar falhas separadamente. | Limite inicial para uma região e um comentário curto; não é meta de produtividade portuária. |
| MU05 | Prevenção/recuperação — parecer incompleto e falha de exportação | Nenhuma exportação sem campos exigidos; 3/3 corrigem a omissão e repetem exportação sem perder dados. | Tentar exportar sem responsável e simular uma falha após o preenchimento. | Evitar documento incompleto e retrabalho. |
| MU06 | Satisfação — comparação e registro | Mediana ≥ 4 em escala de facilidade de 1 a 5. | Perguntar após cada tarefa: “Quão fácil foi realizar esta tarefa?”, de muito difícil a muito fácil. | Complementar tempo e sucesso com a percepção do participante. |

“Sem ajuda” significa sem orientação do facilitador após a instrução; consultar a ajuda da própria interface é permitido e será registrado. Em amostra de três pessoas, apresentar contagens individuais, mediana e falhas, sem generalização estatística. Tempos acima do limite ou tarefas não concluídas permanecem no relatório, sem descarte para melhorar a meta.

### 3.3 Prioridades

| Meta | Peso | Motivo |
|---|---:|---|
| MU01 | 20% | Comparação da imagem. |
| MU02 | 25% | Compreensão do limite da IA. |
| MU03 | 20% | Integridade do parecer. |
| MU04 | 10% | Agilidade no registro. |
| MU05 | 15% | Prevenção e recuperação. |
| MU06 | 10% | Facilidade percebida. |
| **Total** | **100%** | Pesos de prioridade, não resultados de avaliação. |

## 4. Ciclo de revisão

O ciclo adotado é **compreender o contexto → definir requisitos → projetar → avaliar → revisar**. A pesquisa documental sustenta a primeira definição; a ausência de acesso profissional continua como limite da base de conhecimento.

A Entrega 9 transforma PF01/PF02 em objetivos e signos; as Entregas 10/11 modelam e prototipam a interação. A avaliação heurística verifica estados, linguagem e recuperação; o teste observado verifica MU01–MU06. Quando uma meta falhar, registrar o problema e sua origem na rastreabilidade, revisar o fluxo e repetir a tarefa afetada. Evidência nova sobre H39 ou H42 também pode exigir revisão das personas e das tarefas.

## Checklist

- [x] Capacidades e restrições têm consequências de IHC.
- [x] Contribuição técnica e camada de interação estão separadas.
- [x] Dados, resultados e espera simulados foram explicitados.
- [x] As metas avaliam a interação e não substituem métricas do TCC.
- [x] Princípios estão ligados às tarefas e ao contexto.
- [x] Metas indicam público, tarefa, medida e limite aceitável.
- [x] Eficácia, eficiência e satisfação foram consideradas.
- [x] Critérios podem ser verificados nas Entregas 12–14.

## Referências

- Entregas [5](05_analise_tarefas.md), [6](06_prototipacao_papel.md) e [7](07_coleta_dados.md); [rastreabilidade](../RASTREABILIDADE.md).
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. Recomendação de 2024. [Critérios de acessibilidade](https://www.w3.org/TR/WCAG22/). Acesso em 04/11/2026.
- BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Elsevier/Campus. Referência conceitual da [bibliografia da disciplina](../BIBLIOGRAFIA.md).
- TCC da equipe: `IHC/TCC/TCC-VisaoRaioxContainer/codigo/main.py`, consultado para caracterizar a contribuição técnica. A avaliação de IHC não depende da execução desse código.
