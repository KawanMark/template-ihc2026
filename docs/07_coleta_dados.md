# Entrega 7 — Coleta de dados, necessidades e aspectos éticos

**Data:** 04/11/2026<br>
**Status:** 🟨 em andamento — planejamento e levantamento documental inicial elaborados; adequação metodológica a discutir com o docente<br>
**Responsabilidade:** contribuições individuais e síntese da equipe<br>
**Equipe:** Kawan Mark Geronimo Da Silva (22.222.010-5), Gabriel Albertini Pinheiro (22.122.094-8) e Alexandre Domiciano Pierri (22.125.061-6)

## 1. Objetivo e escolha metodológica

Investigar a plausibilidade do usuário, das tarefas e do contexto adotados para a **Mesa de inspeção de imagens de raio-X de contêineres**, identificando quais necessidades de interação possuem apoio documental e quais continuam hipóteses. O recorte permanece a comparação da radiografia com a indicação visual do modelo e o registro justificado da análise, para apoiar uma decisão humana (AC02, AC03; R01 e R03).

A equipe não tem acesso ao profissional que interpreta radiografias de carga. Por isso, a **pesquisa documental é a fonte principal de dados desta entrega**. Serão examinados manuais institucionais, documentação pública de sistemas e trabalhos científicos. A unidade de análise é um trecho ou recurso documentado, com autoria, contexto e localização identificáveis; não é uma pessoa entrevistada. Não houve recrutamento, entrevista, questionário respondido ou observação profissional nesta etapa.

O enunciado exige técnicas diferentes por integrante e questionário entre elas. Para preservar essas exigências, a Parte B apresenta três instrumentos completos: **I01, análise documental; I02, questionário complementar; I03, entrevista semiestruturada complementar**. Apenas I01 tem levantamento inicial executado aqui. I02 e I03 ficam preparados para aplicação futura, se houver acesso e orientação docente; não foram convertidos em formulários respondidos pela equipe nem usados para inventar depoimentos. Os três integrantes têm eixos próprios na pesquisa documental, mas esses eixos **não são apresentados como três técnicas diferentes**.

> **Adequação a discutir com o professor:** utilização da pesquisa documental como coleta principal, diante da impossibilidade de recrutar o perfil especializado, mantendo questionário e entrevista preparados, sem aplicação nesta etapa. A orientação do enunciado é “discuta com o docente alternativas metodológicas”. Não há registro de que o docente já aceitou essa adaptação. O planejamento está elaborado, mas essa pendência impede declarar atendimento integral da adaptação.

## 2. Entradas e continuidade das entregas

| Entrada | O que será investigado nesta entrega |
|---|---|
| [Entrega 1](01_conhecendo_o_problema.md), prioridades da seção 10 | Quem examina, quem decide, que informação é necessária e o que caracteriza a tarefa. |
| [Entrega 2](02_analise_concorrencia.md), C01–C03 e RC01–RC11 | Distinguir funções oferecidas, alegações de fabricantes e necessidades efetivamente demonstradas. |
| [Entrega 3](03_personas_contexto_jornada.md), P01–P03 | Manter as fichas como proto-personas; investigar os papéis sem tomar identidades ficcionais como amostra. |
| [Entrega 4](04_cenarios_problema.md), CP01–CP03 | Examinar as lacunas sobre passagem da suspeita, dados declarados e retorno do desfecho. As histórias são cenários, não relatos de campo. |
| [Entrega 5](05_analise_tarefas.md), T01–T09 | Verificar a base dos passos modelados. Sequência de cliques, tempo de espera e ausência de integração não são comprovados pela modelagem. |
| [Entrega 6](06_prototipacao_papel.md), PF01/PF02 e OBS-01–OBS-06 | Usar dúvidas de compreensão como perguntas de pesquisa. O walkthrough com colega não confirma H11, H39 ou a rotina profissional. |
| [Rastreabilidade](../RASTREABILIDADE.md) e [checklist final](../CHECKLIST_FINAL.md) | Preservar estados das hipóteses e separar avaliação da interação de validação técnica do TCC. |

### 2.1 Alinhamento com o TCC

As entregas iniciais descrevem autoencoder e mapa residual. A Entrega 6 registra evolução para classificador EfficientNet-B1 e mapas de atenção; o texto local do TCC consultado (`IHC/TCC/TCC-VisaoRaioxContainer/parteEscrita/main.tex`, seções Metodologia e Resultados) descreve EfficientNet-B1 e Grad-CAM, com outra configuração experimental. Essas versões não permitem afirmar que há uma única configuração consolidada de resolução, pré-processamento, mapa e limiar.

Nesta coleta, **radiografia**, **resultado do classificador** e **mapa que destaca regiões relevantes para a predição** são conceitos separados. Grad-CAM não é diferença de reconstrução de autoencoder. O artigo dos autores descreve localização aproximada das regiões relevantes à predição ([D05](#referências-do-corpus)). Assim, o mapa não será apresentado como contorno exato de ilícito. A semântica e a calibração do número mostrado, inclusive o limiar de 70% do protótipo, precisam de documentação da versão técnica utilizada; não são comprovadas pela coleta de IHC. A inclusão da interface no TCC continua dependente de decisão da equipe e do orientador (?06).

## 3. Hipóteses e lacunas prioritárias

| IDs | Pergunta de coleta | Evidência de entrada | Decisão afetada | Prioridade |
|---|---|---|---|---|
| H01, H39 | Quem opera o equipamento, interpreta a imagem e formaliza a decisão? | Normas e fontes históricas já levantadas; papéis variam conforme contexto. | Papel de P01/P02 e significado do parecer. | alta |
| H06, H17, H28, H32, ?08 | O que é registrado e como a imagem se vincula à comunicação da suspeita e ao despacho? | C02 demonstra registros do despacho; não resolve a passagem da análise da imagem. | Conteúdo de PF02, identificação e referência ao caso. | alta |
| H11 | Quais dados acompanham a imagem e quais são usados na análise? | C03 lista comparação com manifesto; campos disponíveis na unidade são desconhecidos. | Contexto documental junto de PF01; não presumir todos os campos da declaração. | alta |
| H04, H07, H25, H41 | Existe fila de imagens e autonomia para alterar sua ordem? | Distribuição de processos em C02 não demonstra fila de radiografias. | Manter priorização e dashboard fora do recorte sem evidência. | alta |
| H14, H15, H16, ?07 | Que equipamento, ambiente, turnos e metas são documentados? | Estação dedicada em C03; iluminação e pressão temporal não observadas. | Plataforma e futuras metas de usabilidade. | alta |
| H03, H42 | Quem executa a conferência física e usa diretamente qual sistema? | CP03/T07–T09 são exploratórios. | P03 permanece stakeholder sem tela própria. | alta |
| H05, H30, H31, H37 | O que comparação, destaque e indicador permitem compreender? | C01/C03 e dúvidas do walkthrough; sem preferência profissional medida. | Alternativas visuais e linguagem do resultado da IA. | média |
| H10, H12, H34–H36, H38 | Há evidência sobre dificuldade, erros, confiança e benefícios? | Hipóteses de uso e objetivos esperados. | Não afirmar redução de fadiga, tempo, retenções ou erros sem medição compatível. | média |
| H18, H29, ?02 | Que recuperação de registros é documentada e com qual finalidade? | Evidência anterior de guarda e consulta, sem frequência de uso. | Não derivar módulo agregado de histórico só da existência de arquivos. | média |

?01 e ?03 (configuração técnica), ?04 (ajuda), ?05 (latência e formatos) e H20 (TOS) ficam como lacunas secundárias: não justificam ampliar esta coleta para administração nem criar telas adicionais. ?05 exige também medição da implementação, não apenas documentos do domínio.

## Parte A — necessidades e requisitos de IHC

As atribuições abaixo organizam as contribuições para revisão pelos integrantes. Os dados são coletados **sobre os perfis em documentos públicos**, sem afirmar coleta direta dessas pessoas.

### A01 — análise da imagem e compreensão do apoio computacional

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5

#### Que dados coletar?

| Dado/informação | Hipóteses | Por que é necessário | Decisão de design |
|---|---|---|---|
| Funções de comparação e realce descritas e contexto em que são oferecidas | H05, H09, H30 | Identificar a linha de base sem assumir inspeção sem apoio analítico. | Alternativas de PF01; preservação da radiografia original. |
| Significado e limites do mapa e do resultado numérico | H31, H37 | Evitar confundir relevância visual, classe predita e certeza de ilícito. | Texto do cartão de triagem e legenda do mapa. |
| Papel de quem utiliza a estação e equipamento descrito | H01, H14, H15 | Delimitar o público plausível e a plataforma. | Revisão de P01 e premissas para a Entrega 8. |
| Evidência empírica sobre fadiga e erros, quando existir | H10, H12, H34 | Separar expectativa de benefício de resultado medido. | Não fixar metas de redução com base em propaganda. |

#### De quem coletar? — perfis representados nas fontes

| Perfil/stakeholder | Critério de inclusão da fonte | Relação com persona/público |
|---|---|---|
| Operador/analista de imagem de carga | Documento identifica inspeção de contêineres ou veículos de carga e descreve tarefa ou função. | P01; não incluir radiologia médica como equivalente. |
| Fabricante e pesquisadores de visão computacional | Publicação do próprio fabricante ou dos autores, com recurso/método identificável. | Informação indireta sobre ferramentas e limites; não representa opinião de P01. |

#### Aspectos éticos

Serão usadas descrições públicas e sínteses próprias com atribuição. Não serão coletados rostos, nomes de operadores, placas ou números reais de contêineres. Imagens para demonstração devem ter origem e licença verificadas e identificadores removidos; imagens sintéticas devem ser rotuladas. Não haverá gravação ou consentimento de participantes nesta etapa documental, pois não há interação com pessoas. Materiais restritos e credenciais não serão solicitados. O risco principal é atribuir ao mapa capacidade de identificar ilícitos que a versão técnica não demonstra; cada interpretação será vinculada à fonte e às suas limitações.

### A02 — responsabilidades, registro e comunicação

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8

#### Que dados coletar?

| Dado/informação | Hipóteses/lacunas | Por que é necessário | Decisão de design |
|---|---|---|---|
| Atores responsáveis pela operação, interpretação e decisão, com unidade e data | H01, H39 | Não confundir operador do recinto, servidor que analisa e responsável pelo despacho. | Vocabulário de PF02 e distinção P01/P02. |
| Dados e canais de transmissão da imagem e seus metadados | H11, H26, H28, ?08 | Investigar o vínculo institucional existente antes de propor exportação. | Entrada demonstrativa e referência do parecer ao caso. |
| Registro, autoria e finalidade de atos documentados | H06, H17, H32 | Evitar tratar um PDF acadêmico como ato de desembaraço. | Identificação do registro como parecer de apoio. |
| Evidências de consulta, integração e retorno do desfecho | H18, H29, ?02, ?08 | Investigar as rupturas de CP02/T05/T06. | Integração e histórico continuam hipóteses quando não documentados. |

#### De quem coletar? — perfis representados nas fontes

| Perfil/stakeholder | Critério de inclusão da fonte | Relação com persona/público |
|---|---|---|
| Administração do recinto e RFB | Manual oficial com responsabilidade, fluxo ou dado explicitado. | Relação entre P01 e P02, sem presumir mesma pessoa. |
| Responsável pela conferência/despacho | Manual ou ato institucional com contexto e localização identificáveis. | P02; documentação do lado do importador não demonstra a tela interna do auditor. |

#### Aspectos éticos

Não serão acessados processos fiscais, declarações identificáveis nem telas autenticadas. A publicação se limitará a conceitos e campos documentados, sem reproduzir dados de contribuintes. Uma regra local ou página histórica terá alcance e data preservados. Não será feita certificação de conformidade jurídica do protótipo. Não há gravação nem coleta direta nesta etapa; os riscos são exposição de informações operacionais e generalização indevida. Notas de análise devem registrar divergências e evitar publicar detalhes de vulnerabilidades ou expedientes de evasão de fiscalização.

### A03 — conferência física e passagem da evidência

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6

#### Que dados coletar?

| Dado/informação | Hipóteses/lacunas | Por que é necessário | Decisão de design |
|---|---|---|---|
| Papéis e finalidade da verificação física | H03, H39, H42 | Delimitar P03 sem inventar cargo único de agente de campo. | Manter ou rever o papel de stakeholder. |
| Informação que acompanha a solicitação e evidência sobre localização da suspeita | H28, H32, ?08 | Investigar se a ruptura de CP03 está documentada. | Conteúdo candidato do parecer de PF02. |
| Forma de documentação do achado e eventual retorno à estação | H17, H38, ?08 | Verificar hipóteses de transcrição e ausência de retorno em T08/T09. | Não propor nova interface de campo sem necessidade demonstrada. |
| Condições e meios de trabalho documentados | H16, H42 | Distinguir existência de conferência de uso de celular, rádio ou papel. | Requisitos de campo só entram se houver evidência adequada. |

#### De quem coletar? — perfis representados nas fontes

| Perfil/stakeholder | Critério de inclusão da fonte | Relação com persona/público |
|---|---|---|
| Fiscalização, depositário e representante do importador | Manual institucional que diferencie responsabilidades na conferência. | Atores que CP03 reúne em torno de P03; não equivalem a um único usuário. |
| Profissional que executa a verificação | Documento descreve ação e meio utilizado; se não existir, marcar lacuna. | Não assumir interação direta com a Mesa de inspeção. |

#### Aspectos éticos

Não serão coletados nomes, fotos de equipes, apreensões identificáveis ou informações comerciais de cargas. Os episódios ficcionais de gelo e desova do CP03 não serão publicados como ocorrência real. Não haverá gravação. A ausência de acesso não será contornada com documentos vazados. Na futura pesquisa com pessoas, a participação deverá ser voluntária, sem relatos de operações sigilosas ou identificação de terceiros. A análise documental atual não permite estimar horas poupadas ou afirmar que a indicação de uma região radiográfica determina a posição física exata no contêiner.

### A.4 Armazenamento, minimização e descarte — regras comuns

O repositório guarda instrumentos, referências, paráfrases e conclusões sem dados pessoais de participantes. Cópias de trabalho de documentos só serão mantidas quando o acesso e a licença permitirem, em pasta restrita à equipe; não serão incluídas automaticamente no Git. Elas serão descartadas até 90 dias após o encerramento da disciplina. As sínteses acadêmicas sem dados identificáveis poderão permanecer no repositório.

Se os instrumentos complementares forem aplicados, respostas brutas e registros de consentimento terão acesso restrito à equipe, separado da síntese pública, e descarte no mesmo prazo. Usar IDs Q01, Q02 etc. para questionário e E01, E02 etc. para entrevista, sem guardar uma tabela nominal. Não coletar e-mail, IP deliberadamente, idade exata, empregador ou unidade exata. Conferir as configurações da ferramenta antes de usar serviço externo. Não prometer anonimato se respostas abertas ainda permitirem identificar alguém: revisar e remover referências a terceiros. O consentimento deve explicar a finalidade, a interrupção sem prejuízo e o momento até o qual a exclusão pelo código será possível.

## Parte B — ferramentas de coleta

### I01 — análise documental com ficha de extração

**Autor(a):** Kawan Mark Geronimo Da Silva — 22.222.010-5<br>
**Técnica:** análise documental, como alternativa metodológica a discutir com o docente<br>
**Objetivo:** confrontar as hipóteses prioritárias com documentos verificáveis e produzir evidências rastreáveis.<br>
**Público representado:** P01 e P02; P03 como stakeholder.<br>
**Aplicação:** levantamento inicial de cinco documentos, em 04/11/2026, registrado na seção 4. Cada integrante aprofundará seu eixo da Parte A, usando a mesma ficha.

#### Procedimento padronizado

1. Ler as hipóteses da seção 3 antes de buscar fontes. Consultar primeiro referências anteriores; registrar separadamente o que foi herdado e o que foi novamente acessado.
2. Buscar em portais da Receita Federal/Siscomex, páginas dos fabricantes e publicações dos próprios pesquisadores. Registrar expressão de busca, endereço, data, título, órgão/autor e seção utilizada.
3. Incluir documentos públicos que descrevam papéis, tarefas, dados, ferramentas ou limites do modelo no recorte. Excluir radiologia médica, inspeção exclusivamente de pessoas/bagagem sem relação com carga, conteúdo sem origem verificável e documentos restritos. Notícias antigas ficam apenas como contexto histórico, sem comprovar rotina atual.
4. Ler o trecho em contexto. Registrar edição, unidade/jurisdição e atualização declarada; se ausentes, escrever “não informada”. Em documento normativo, distinguir o texto consultado de uma verificação completa de vigência, que não está realizada aqui.
5. Preencher uma ficha por achado, com código ED e documento D. Preferir paráfrase; quando necessário, citação curta identificada. Não copiar páginas integrais para a entrega.
6. Classificar a evidência como **documentação institucional**, **oferta de fabricante**, **resultado de pesquisa** ou **documento interno do projeto**. Registrar se o documento descreve regra, recurso, relato ou resultado experimental. A última categoria contextualiza, mas não confirma o trabalho real.
7. Comparar com outra fonte de origem independente quando disponível. Páginas do mesmo órgão não contam como duas observações empíricas independentes. Registrar contradição ou ausência de informação, sem preenchê-la por suposição.
8. Revisar extração e conclusão em dupla antes de mudar o estado de uma hipótese. A revisão pelos integrantes ainda não está registrada neste levantamento inicial. Guardar síntese pública e descartar cópias conforme A.4.

#### Ficha integral de extração

| Campo | Instrução de preenchimento |
|---|---|
| Código | ED seguido de número sequencial; identificar D01–D05 ou cadastrar novo documento. |
| Identificação e acesso | Título, autor/órgão, URL, publicação/atualização informada e data de consulta. |
| Localizador | Seção, item, artigo ou página; incluir expressão que permita reencontrar o trecho. |
| Contexto e tipo | País/unidade, população/carga tratada e natureza da fonte. |
| Pergunta e hipótese | Que pergunta da seção 3 responde e quais IDs afeta? |
| Dado extraído | Paráfrase fiel; separar eventual citação literal. |
| Interpretação | O que o dado permite inferir para este recorte? |
| Limitação/contraponto | O que não demonstra? Há divergência com outra fonte? |
| Resultado | Sustentação parcial, refinamento, refutação delimitada ou sem resposta; justificar. |
| Decisão de IHC | Artefato afetado e ação candidata; separar evidência de solução proposta. |
| Registro de revisão | Responsável pela extração e, quando houver, revisor/data; não registrar revisão que não ocorreu. |

#### Como analisar

Agrupar achados nos códigos **PAP** (papéis), **DAD** (dados), **REG** (registro), **VIS** (visualização), **CTX** (contexto) e **LIM** (limites técnicos). Uma evidência pode ter mais de um código. Não contar documentos como número de usuários nem somar menções como frequência de uma tarefa. Só sustentar uma afirmação no alcance que a fonte demonstra; refutar apenas se houver contraposição explícita no mesmo contexto. Preferência, familiaridade, aceitação e redução de tempo exigem investigação empírica apropriada. Ausência no corpus significa “não encontrado neste levantamento”, não inexistência do recurso.

### I02 — questionário complementar sobre compreensão da informação

**Autor(a):** Gabriel Albertini Pinheiro — 22.122.094-8<br>
**Técnica:** questionário<br>
**Objetivo:** investigar interpretação dos resultados e informações que faltam para compreendê-los (H31, H37; aspectos de H11/H28).<br>
**Público:** adultos externos à equipe com experiência em análise de imagens de carga ou área próxima. Se o docente admitir proxies, adultos externos à equipe capazes de ler o material; analisar cada perfil separadamente.<br>
**Situação:** instrumento preparado, não aplicado; não substitui I01 nem confirma rotina portuária. Meta exploratória proposta: 3 a 5 respostas, sem representatividade estatística.

#### Procedimento padronizado

1. Confirmar idade mínima de 18 anos e relação com a atividade, sem solicitar comprovante ou nome. Explicar que a pesquisa investiga comunicação de um protótipo acadêmico, sem avaliar competência profissional.
2. Apresentar o consentimento abaixo. Se não aceitar, encerrar sem armazenar respostas. Não exigir login nem coletar contato.
3. Exibir a todos o mesmo estímulo textual: **“Um protótipo acadêmico mostra uma radiografia de contêiner, um mapa colorido de regiões relevantes para a predição e o cartão ‘Indício de anomalia — 94%; limiar 70%’. O parecer é registrado por uma pessoa.”** Os números são exemplos do protótipo, não resultado deste estudo.
4. Aplicar as questões na ordem abaixo, em aproximadamente 8 minutos, sem explicar o significado correto antes das respostas. Permitir pular qualquer questão.
5. Ao final, esclarecer que destaque e resultado do modelo não constituem prova de ilícito nem decisão aduaneira. Oferecer o código para eventual pedido de exclusão até a consolidação. Armazenar conforme A.4.

#### Instrumento integral

**Apresentação/consentimento:** “Esta pesquisa acadêmica busca compreender como informações de uma interface de apoio à inspeção são interpretadas. Participar é voluntário. Você pode pular perguntas ou interromper sem prejuízo. Não informe nomes, empresas, unidades, dados de cargas ou operações sigilosas. Serão publicados apenas resultados sem identificação; as respostas brutas serão descartadas até 90 dias após o encerramento da disciplina. Não haverá gravação. Você aceita participar?” Opções: **sim / não (encerrar)**.

1. Qual sua relação com inspeção de cargas? **Interpreto radiografias de carga / trabalho em atividade aduaneira ou logística relacionada / pesquiso ou estudo visão computacional / não tenho experiência relacionada / prefiro não responder**. Marcar todas as aplicáveis; agrupar separadamente quem interpreta imagens.
2. Já utilizou ferramenta com mapa de calor sobre imagem? **Sim / não / não sei / prefiro não responder**.
3. No exemplo apresentado, o que você entende por “indício de anomalia”? **Resposta aberta**.
4. O que você entende que o valor “94%” representa? **Resposta aberta**.
5. O que o mapa colorido permite concluir? O que ele não permite concluir? **Resposta aberta**.
6. Que informação, se alguma, falta para compreender o resultado? **Resposta aberta**.
7. Quão clara está a diferença entre resultado do modelo e parecer da pessoa? **1 nada clara / 2 pouco clara / 3 parcialmente clara / 4 clara / 5 muito clara / não sei avaliar**. Explique se desejar.
8. Ao receber o parecer, que informação você procuraria primeiro? **Resposta aberta; pode responder “não sei”**.
9. Que dúvida você teria antes de utilizar esse resultado? **Resposta aberta**.
10. Há alguma expressão que você mudaria? Qual e por quê? **Resposta aberta; opcional**.

#### Como analisar

Tabular contagens por perfil e apresentar o denominador de respostas válidas por questão, sem inferência para a população. Codificar respostas abertas em entendimento do indicador, limites do mapa, separação entre modelo e decisão e informação ausente. Identificar interpretações não sustentadas, como certeza de droga/arma, sem julgar a competência do respondente. Um achado com proxy serve para revisar a linguagem; não sustenta H01/H39, frequência de tarefas, autoridade de decisão ou aceitação profissional da IA. Sem respostas, não há resultados a tabular.

### I03 — entrevista semiestruturada complementar

**Autor(a):** Alexandre Domiciano Pierri — 22.125.061-6<br>
**Técnica:** entrevista semiestruturada<br>
**Objetivo:** aprofundar lacunas documentais sobre responsabilidades, informações e encaminhamento da suspeita (H01, H11, H28, H39, H42 e ?08).<br>
**Público:** profissional de inspeção de cargas, se acessível, ou especialista próximo com experiência concreta em logística/comércio exterior. Pesquisador de IA pode responder apenas sobre seu domínio técnico.<br>
**Situação:** roteiro preparado, não aplicado. Meta exploratória proposta: 1 a 2 entrevistas, se houver acesso; sem promessa de saturação.

#### Procedimento padronizado

1. Verificar experiência pertinente e apresentar objetivo e limites, sem coletar empregador ou unidade exata. Um especialista próximo não será registrado como operador de raio-X.
2. Ler o consentimento do I02, substituindo “perguntas” por “entrevista”, mantendo interrupção e exclusão pelo código até a consolidação. Solicitar autorização para notas escritas. Não gravar áudio, vídeo ou tela.
3. Conduzir por aproximadamente 20 a 30 minutos, começando pela experiência e pelo trabalho atual, antes de mostrar a proposta. Não solicitar documentos internos nem exemplos identificáveis.
4. Usar apenas as perguntas compatíveis com a experiência declarada. Para cada relato, perguntar se é experiência direta, documento conhecido ou hipótese. Aceitar “não sei” sem insistência.
5. Recapitular as notas para correção pelo participante, esclarecer o uso acadêmico e agradecer. Armazenar notas pelo código, conforme A.4, sem citação identificável.

#### Roteiro integral

1. Com quais atividades de inspeção, logística, despacho ou análise de imagem você tem experiência? Quais conhece apenas indiretamente?
2. Dentro do que você conhece, que evento inicia a análise de uma carga e quem participa?
3. Quem opera o escâner, quem examina a imagem e quem formaliza a decisão? Esses papéis podem coincidir? Em que contexto?
4. Quais informações, além da radiografia, são consultadas? Onde ficam disponíveis?
5. Como uma suspeita na imagem é registrada e comunicada? O que acompanha o registro?
6. Existe vínculo entre imagem, unidade de carga e processo? O que você consegue afirmar por experiência própria?
7. Como é definida a ordem de análise? Quem pode alterá-la, se alguém puder?
8. Quando a informação é insuficiente, o que acontece? Há consulta a outra pessoa ou procedimento conhecido?
9. Que informação chega a quem realiza a verificação física? Essa pessoa acessa algum sistema de imagem?
10. Onde o desfecho é registrado? Quem analisou a imagem recebe retorno? Se não souber, que documento público poderia ajudar a investigar?
11. Quais dificuldades de interpretação ou comunicação você já observou, sem mencionar pessoas ou operações identificáveis?
12. **Após as perguntas sobre o trabalho atual:** apresentar a descrição neutra “uma interface acadêmica compara a radiografia com um destaque do modelo e permite registrar um parecer”. O que precisaria ser esclarecido para essa proposta fazer sentido? Em que situações ela não ajudaria?
13. Que pontos desta conversa são experiência direta e quais ainda precisariam ser verificados com outro perfil?

#### Como analisar

Separar notas por PAP, DAD, REG, VIS, CTX e LIM e pelo grau de proximidade do participante. Confrontar cada afirmação com o corpus, registrando concordâncias e divergências, sem substituir norma por opinião. Um relato situado pode refinar uma hipótese naquele contexto; não autoriza generalização nacional. Entrevista com pesquisador de IA não confirma o fluxo do despacho. Preservar a autoria da interpretação e a ausência de resposta; nenhum resultado de entrevista é apresentado nesta entrega.

## 4. Levantamento documental inicial executado

**Data de consulta:** 04/11/2026. **Corpus intencional:** cinco documentos públicos efetivamente acessados, selecionados por relação com as lacunas prioritárias. Trata-se de levantamento exploratório, não revisão sistemática ou amostra representativa de recintos. A revisão humana das contribuições individuais está pendente.

### 4.1 Registro de busca e seleção

| Busca/caminho utilizado | Seleção e razão |
|---|---|
| `site.gov.br receita federal inspeção não invasiva imagens escâner operadores suspeita recinto` | D01, manual oficial sobre operação/transmissão; D02, perguntas frequentes do Siscomex sobre eventos e metadados. |
| `site.gov.br "Portaria" "9" "2024" "Imbituba" escâner` | Não forneceu nesta rodada fonte primária da norma local que pudesse ser incorporada ao corpus. As referências anteriores permanecem históricas, sem nova verificação de vigência. |
| `site.gov.br receita federal manual importação verificação física mercadoria escâner` | D03, seção “Introdução”, acessada a partir do índice do manual. O índice não foi contado como evidência independente. |
| Referência C01 da Entrega 2, acesso direto à página oficial | D04, comparação e destaque no InSight; reconsulta trouxe detalhe sobre apresentação lado a lado. |
| Referência conceitual Grad-CAM, página do artigo dos próprios autores | D05, resumo do artigo, suficiente para delimitar a finalidade do mapa; não foi feita avaliação da técnica. |

Resultados sem relação com o recorte (por exemplo, inspeção corporal e atos municipais sem ligação com escâner de carga) não foram incluídos. Não se afirma exaustividade da busca nem quantidade total de documentos encontrados.

### 4.2 Fichas preenchidas — dado, interpretação e limite

**ED01 — PAP, DAD — D01.** Localizadores: primeiro parágrafo e seção **“Transmissão de Imagens”**. Publicação informada: 14/08/2024. O manual atribui à administradora a disponibilização do equipamento, manutenção e operação com mão de obra especializada; descreve transmissão à RFB e integração ao SICA/API Recintos. **Interpretação:** reforça o vínculo entre recinto e RFB e a possibilidade de entrada integrada (H01, H26, H39). **Limite:** não identifica o cargo de quem interpreta cada imagem nem demonstra a tela utilizada. **Decisão candidata:** tratar upload como entrada de demonstração e não como rotina profissional confirmada. [Fonte D01](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/alfandegamento/requisitos-para-o-alfandegamento/requisitos-tecnicos-e-operacionais/disponibilizacao-manutencao-e-operacao-de-instrumentos-e-aparelhos-de-inspecao-nao-invasiva).

**ED02 — DAD, REG — D02.** Localizador: **“Evento Inspeção não Invasiva”**, perguntas sobre envio e arquivos; respostas com atualização de 27/10/2022 e complemento sobre compartilhamento de 29/04/2024. O evento transmite imagem e metadados do escâner com atributos relacionados à unidade; o envio é indicado após finalizar a inspeção. O compartilhamento pode envolver responsável e campos definidos pela autorização local. **Interpretação:** há mecanismo institucional documentado para vincular dados à inspeção (H11, H26, ?08). **Limite:** transmissão não demonstra quais dados aparecem ao analista, como o auditor recebe o parecer ou se há retorno do desfecho. **Decisão candidata:** preservar referência do caso; não apresentar PDF como integração já validada. [Fonte D02](https://www.gov.br/siscomex/pt-br/informacoes/perguntas-frequentes/perguntas-frequentes-recintos).

**ED03 — PAP, REG — D03.** Localizador: **“Introdução”**, parágrafos sobre finalidade, meios e responsáveis. Publicação de 28/11/2014, atualização informada de 21/04/2020. O manual admite imagens de inspeção não invasiva na verificação e descreve atuação de Auditor-Fiscal ou Analista-Tributário sob supervisão, além de participação do depositário no posicionamento da mercadoria. **Interpretação:** refina os atores exploratórios de CP03 (H03, H39, H42). **Limite:** não demonstra que todos esses atores utilizam a Mesa de inspeção, nem que a suspeita chega sem localização. **Decisão candidata:** manter P03 como stakeholder e registrar a comunicação como questão aberta. A consulta descreve o manual disponível, sem certificar a vigência de cada ato por ele citado. [Fonte D03](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/topicos-1/despacho-de-importacao/etapas-do-despacho-aduaneiro-de-importacao/conferencia-aduaneira/verificacao-da-mercadoria-1/introducao).

**ED04 — VIS — D04.** Localizador: lista **“InSight Intelligent Image Analytics Tools”**, itens *High Density* e *Similar Cargo*. Página sem data de publicação informada. O fabricante descreve destaque de alta densidade e recuperação de imagem semelhante apresentada ao lado da imagem atual. **Interpretação:** comparação lado a lado é recurso documentado de mercado, refinando a leitura anterior de C01 e RC09. **Limite:** são duas radiografias, não radiografia e mapa do TCC; a página comercial não mede preferência, eficácia ou aceitação profissional (H30, H31). **Decisão candidata:** manter lado a lado como alternativa a avaliar, sem declarar superioridade à sobreposição. [Fonte D04](https://www.rapiscan-ase.com/products/software/insight-operator-assist-tools).

**ED05 — VIS, LIM — D05.** Localizador: **resumo** do artigo Grad-CAM; versão 4, de 03/12/2019, com versão em conferência de 2017. Os autores descrevem um mapa de localização aproximada das regiões importantes para uma predição da rede. **Interpretação:** o mapa comunica relevância para a predição, distinto do mapa residual descrito inicialmente no projeto. **Limite:** não comprova a calibração do classificador do TCC nem a identificação de ilícitos em uso real. **Decisão candidata:** distinguir indicação visual e conclusão humana; documentar a versão do pipeline antes da avaliação (H31, H37). [Fonte D05](https://arxiv.org/abs/1610.02391).

### 4.3 Limites de validade do levantamento

As páginas institucionais descrevem procedimentos e dados, não observação de uma unidade escolhida. D01 e D02 pertencem ao mesmo ecossistema institucional, portanto não são confirmação empírica independente. D04 é material comercial. D05 fundamenta o conceito técnico, mas não testa a interface de vocês. Documentação interna e walkthrough da Entrega 6 não foram contados no corpus externo.

Não há evidência coletada sobre frequência de tarefas, duração de turno, metas, preferência de layout, redução de fadiga, precisão profissional ou tempo poupado. Também não se comprovou ausência de integração entre imagem e despacho. A atualização de uma página não comprova a vigência de todas as normas nela citadas. Fontes históricas de Santos e normas locais de Imbituba continuam contextualizadas nas entregas anteriores; não foram transformadas em retrato nacional atual.

## 5. Síntese e decisões para continuidade

| Hipótese/lacuna | Resultado deste levantamento | Consequência e investigação restante |
|---|---|---|
| H01, H39 | **Refinadas, com sustentação parcial:** ED01 e ED03 distinguem responsabilidades institucionais, sem identificar todo o percurso da interpretação. | Manter P01/P02 como papéis provisórios; não atribuir desembaraço ao operador pelo rótulo do protótipo. |
| H11 | **Parcialmente sustentada quanto à existência de dados vinculados:** ED02; uso efetivo e campos em tela continuam abertos. | Contexto da carga é candidato ao PF01; observar/consultar usuário para escolher conteúdo e momento. |
| H26 | **Refinada:** ED01/ED02 documentam transmissão institucional. | Upload local fica caracterizado como recurso demonstrativo; integração produtiva não implementada nem validada. |
| H28, H32, ?08 | **Abertas, com resposta documental parcial:** há transmissão e uso de imagens (ED02/ED03), sem demonstração do parecer ou do vínculo completo com a decisão. | PDF, comentários por região e retorno de desfecho seguem propostas; não confirmar a ruptura narrada em CP02. |
| H30 | **Refinada:** ED04 documenta lado a lado entre radiografias. Preferência entre radiografia/mapa lado a lado e sobreposição permanece aberta. | Comparar alternativas nas avaliações; atualizar a leitura de mercado sem afirmar preferência. |
| H31, H37 | **Abertas quanto à compreensão e aceitação; refinadas no conceito técnico:** ED05. | Separar mapa, número e parecer; I02 pode investigar compreensão se aplicado. |
| H03, H42 | **Refinadas nos atores possíveis; uso direto da solução não demonstrado:** ED03. | P03 permanece stakeholder; não criar interface móvel a partir deste levantamento. |
| H04, H07, H25, H41 | **Sem resposta no corpus.** | Não incluir fila priorizada/dashboard como necessidade confirmada. |
| H06, H17, H18, H29, ?02 | Evidências anteriores preservadas; **nenhuma confirmação adicional de frequência, registro da análise ou formato da trilha**. | Não confundir evento transmitido com histórico de uso ou justificativa completa do parecer. |
| H10, H12–H16, H34–H36, H38, ?07 | **Sem nova sustentação empírica** para ambiente, experiência ou benefícios. | Permanecem hipóteses/lacunas; não prometer redução mensurada de esforço ou tempo. |

Nenhuma hipótese sobre comportamento profissional foi integralmente sustentada ou refutada por esta coleta. As fontes permitem **refinar** o contexto e sustentar partes específicas. A equipe deve preservar as limitações ao atualizar a [matriz de rastreabilidade](../RASTREABILIDADE.md#21a-atualização-documental-da-entrega-7).

**Para a Entrega 8:** definir metas verificáveis de compreensão e interação, sem inventar produtividade do porto. **Para as Entregas 9–11:** comunicar “parecer de apoio”, distinguir o mapa de atenção da imagem original e explicitar o significado técnico do indicador da versão escolhida. Rótulos com efeito jurídico permanecem condicionados a H39. **Para as Entregas 12–14:** planejar avaliação de interação, com perfil real ou proxy previamente justificado; pesquisa documental não substitui os participantes finais exigidos na Entrega 14.

## 6. Checklist

- [x] Hipóteses/lacunas prioritárias da Entrega 1 foram revisitadas.
- [x] A coleta investiga plausibilidade de usuário, tarefa e contexto derivados do TCC.
- [x] Dados e perguntas estão relacionados a dúvidas concretas e decisões de design.
- [x] Parte A contém três contribuições, com dados, perfis representados e critérios de inclusão.
- [x] Aspectos éticos incluem privacidade, riscos, consentimento quando aplicável, armazenamento e descarte.
- [x] Há um instrumento completo atribuído a cada integrante e técnicas distintas.
- [x] Questionário está incluído, com cópia textual integral e procedimento de aplicação.
- [x] Objetivo, público, procedimento e análise estão definidos para cada instrumento.
- [x] Perguntas não pressupõem necessidade de dashboard, histórico, filtros ou relatórios.
- [x] Fontes consultadas e achados iniciais possuem localizadores e limitações.
- [x] Instrumentos preparados foram diferenciados de coleta efetivamente executada.
- [x] Síntese e rastreabilidade preservam hipóteses que os documentos não resolvem.
- [ ] Discussão com o docente sobre a pesquisa documental como coleta principal registrada.
- [ ] Revisão das contribuições e fichas pelos integrantes registrada.

Os instrumentos I02/I03 estão preparados, sem aplicação. Isso não é apresentado como dado coletado; se a orientação docente exigir aplicação para esta entrega, será necessário realizá-la ou obter adaptação expressa. A existência dos três instrumentos não elimina a pendência metodológica.

## Referências do corpus

Todos os acessos desta entrega ocorreram em **04/11/2026**. Os links e as sínteses ED01–ED05 permitem verificar o levantamento sem acesso às pastas locais do TCC.

- **D01 — BRASIL. Receita Federal.** *Disponibilização, Manutenção e Operação de Instrumentos de Inspeção não Invasiva*. Publicado em 14/08/2024. [Manual de Alfandegamento](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/alfandegamento/requisitos-para-o-alfandegamento/requisitos-tecnicos-e-operacionais/disponibilizacao-manutencao-e-operacao-de-instrumentos-e-aparelhos-de-inspecao-nao-invasiva).
- **D02 — BRASIL. Siscomex.** *Recintos — perguntas frequentes*. Seção “Evento Inspeção não Invasiva”; atualizações de respostas indicadas em ED02. [Perguntas frequentes](https://www.gov.br/siscomex/pt-br/informacoes/perguntas-frequentes/perguntas-frequentes-recintos).
- **D03 — BRASIL. Receita Federal.** *Verificação Física da Mercadoria — Introdução*. Manual de Importação. Publicado em 28/11/2014; atualizado em 21/04/2020. [Introdução](https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/topicos-1/despacho-de-importacao/etapas-do-despacho-aduaneiro-de-importacao/conferencia-aduaneira/verificacao-da-mercadoria-1/introducao).
- **D04 — RAPISCAN AS&E.** *InSight Intelligent Image Analytics*. Sem data de publicação informada. [Ferramentas InSight](https://www.rapiscan-ase.com/products/software/insight-operator-assist-tools).
- **D05 — SELVARAJU, R. R. et al.** *Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization*. ICCV, 2017; versão ampliada em IJCV, 2019. Consulta ao resumo da versão 4. [arXiv:1610.02391v4](https://arxiv.org/abs/1610.02391v4).

**Referências internas:** Entregas 1–6, [Guia de escopo](../GUIA_ESCOPO_IHC.md), [Guia de uso](../GUIA_DE_USO.md), [Rastreabilidade](../RASTREABILIDADE.md), [Checklist final](../CHECKLIST_FINAL.md) e texto local do TCC identificado na seção 2.1. Os arquivos do TCC contextualizam a evolução técnica; não são evidência independente do trabalho profissional nem precisam estar disponíveis para consultar o corpus público.

## Histórico de elaboração

| Data | Alteração | Motivo |
|---|---|---|
| 04/11/2026 | Planejamento documental, três partes individuais, três instrumentos, corpus inicial, síntese e limites de validade. | Falta de acesso ao perfil especializado, conforme informado pela equipe; adaptação a discutir com o docente. |
