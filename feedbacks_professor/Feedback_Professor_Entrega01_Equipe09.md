# Feedback do Professor > Entrega 01 > Grupo 09

## Avaliação geral

A equipe construiu uma Entrega 01 bastante estruturada e, de modo geral, compreendeu a principal proposta desta etapa: partir de um TCC predominantemente técnico e construir um cenário plausível de uso para a disciplina de IHC. A separação entre contribuição técnica do TCC e possível aplicação interativa está clara, o usuário prioritário foi explicitado, o contexto foi inicialmente descrito e houve esforço consistente para distinguir fatos, hipóteses e lacunas.

O principal problema neste momento não é falta de conteúdo. Pelo contrário: há bastante conteúdo. O desafio agora é impedir que uma boa quantidade de hipóteses se transforme, silenciosamente, em decisões de interface antes de a equipe conhecer melhor o trabalho real do usuário.

Também é necessário revisar a coerência entre a Entrega 01 e a matriz de rastreabilidade. A própria equipe já encontrou posteriormente evidências que corrigem premissas importantes da fotografia inicial. Isso é positivo e faz parte do processo da disciplina, mas essas mudanças precisam ficar refletidas de forma consistente nos artefatos. Uma hipótese pode envelhecer; o que não pode é continuar aparecendo em outro arquivo como se ainda estivesse válida.

Antes de avançar para personas, tarefas e protótipos, sugiro concentrar a revisão principalmente em quatro questões: **quem exatamente é o usuário operacional**, **qual é realmente o seu objetivo e responsabilidade**, **como ocorre o processo atual sem assumir antecipadamente a solução** e **quais hipóteses merecem ser investigadas primeiro**.

## Pontos positivos

- A equipe diferencia de forma clara o **escopo formal do TCC** do **escopo de IHC da disciplina**. Isso é especialmente importante porque o TCC não previa originalmente uma interface.
- A contribuição técnica está razoavelmente bem conectada a uma possível situação de uso: a equipe não tentou transformar treinamento de Autoencoder, backend ou benchmark em problema de IHC.
- Existe uma tentativa concreta de identificar usuários diretos, stakeholders, configuradores e pessoas afetadas, em vez de utilizar apenas o termo genérico "usuário".
- O uso de `[H]` e `[?]` é frequente e evita que várias suposições sejam apresentadas diretamente como fatos.
- A equipe identificou consequências de erro relevantes e percebeu que esse é um contexto em que tomada de decisão, interpretação visual e rastreabilidade podem ter grande importância.
- O recorte central proposto - análise de imagens e apoio à decisão - possui boa relação conceitual com a contribuição técnica do TCC e pode gerar atividades adequadas para modelagem, prototipação e avaliação em IHC.
- A matriz de rastreabilidade já demonstra evolução do conhecimento ao registrar hipóteses revisadas, parcialmente sustentadas e ainda abertas. Esse é exatamente o comportamento esperado ao longo da disciplina.
- A equipe não tentou esconder mudanças posteriores: registrou que algumas premissas iniciais foram corrigidas após novas evidências. Preservem essa prática.

## Correções prioritárias

### 1. A definição do usuário prioritário ainda mistura papéis que podem ser diferentes

Nas seções 2, 3 e 7, a equipe utiliza expressões como **"Operador de Scanner de Raio-X / Fiscal Aduaneiro"**, alternando depois entre "operador", "fiscal" e "Fiscal Aduaneiro" como se fossem necessariamente a mesma pessoa e tivessem a mesma responsabilidade.

Esse ponto é estrutural para o projeto. Em IHC, não basta saber que alguém "trabalha com o raio-X". É necessário entender **quem executa cada parte da atividade, quem interpreta a imagem, quem recebe a recomendação, quem decide, quem registra a decisão e quem possui responsabilidade formal por ela**. Se essas atividades forem realizadas por perfis distintos, as necessidades, permissões, vocabulário, conhecimento e interface podem ser diferentes.

A equipe precisa investigar essa separação antes de consolidar a persona principal. Não assumam que o profissional que opera o scanner é necessariamente o mesmo que toma a decisão aduaneira final.

Essa revisão afeta diretamente H01, H04, H05, H06, H07, H08 e o recorte descrito em 7.2–7.4.

### 2. O objetivo do usuário ainda mistura objetivo humano, meta organizacional e uma condição impossível de garantir

Na seção 3.1, o objetivo é descrito como garantir segurança, cumprir metas de liberação, evitar gargalos, "bater a meta diária" e alcançar **"absoluta certeza de que nenhum ilícito passou despercebido"**.

Há três problemas aqui.

Primeiro, parte do texto descreve objetivos organizacionais ou indicadores operacionais, e não necessariamente o objetivo pessoal do usuário durante a tarefa. Segundo, "meta diária" aparece como hipótese, mas ainda não há evidência apresentada de que essa seja realmente uma métrica do trabalho desse perfil. Terceiro, "absoluta certeza" é uma formulação problemática porque sistemas de detecção e decisões humanas podem operar sob incerteza; a própria entrega reconhece falsos positivos e falsos negativos.

A equipe precisa reformular o objetivo de modo que ele represente aquilo que o usuário procura alcançar durante a atividade, sem transformar uma expectativa ideal em garantia absoluta e sem assumir metas organizacionais ainda não investigadas.

Este ponto é particularmente importante porque objetivos mal definidos contaminam personas, cenários, tarefas, métricas de usabilidade e decisões posteriores de interface.

### 3. Algumas afirmações marcadas como fato ainda possuem evidência insuficientemente identificada

A equipe fez um bom esforço para usar `[F]`, `[H]` e `[?]`, porém alguns fatos ainda estão sustentados por referências genéricas.

Exemplos:

- F01 utiliza "Revisão bibliográfica do TCC e relatórios aduaneiros", sem identificar qual fonte sustenta especificamente a afirmação.
- F02 aparece como "Fato (operação portuária)", o que não permite rastrear a origem.
- F03 é classificado como "Fato de mercado", mas sem fonte explícita na própria linha.

O problema não é a plausibilidade dessas afirmações. O problema é a rastreabilidade. Quando a equipe marca algo como fato, o leitor precisa conseguir descobrir de onde aquilo veio.

Revisem os fatos para indicar uma fonte concreta quando ela existir. Se a equipe ainda não possui fonte suficiente, mantenham a afirmação como hipótese. Nesta disciplina, uma hipótese corretamente identificada é melhor do que um "fato" difícil de verificar.

### 4. A Entrega 01 ficou inconsistente com evidências posteriores já registradas na própria rastreabilidade

A matriz mostra que a equipe já revisou algumas premissas importantes da Entrega 01, mas o texto principal ainda conserva versões antigas.

Dois exemplos são especialmente relevantes:

- H09 e a síntese da seção 11 ainda descrevem o processo como essencialmente manual/visual, enquanto a rastreabilidade já registra que soluções atuais oferecem recursos de apoio analítico.
- H15 assume múltiplos monitores, mas a rastreabilidade posteriormente registra evidência apenas de monitor dedicado de 22"–24", sem sustentação para a configuração multi-monitor.

Também houve revisão do código de risco inicialmente tratado com três cores para quatro canais.

Isso não é um problema por a equipe ter "errado no começo". A Entrega 01 é justamente uma fotografia inicial e pode ser corrigida. O problema seria manter duas versões incompatíveis do mesmo conhecimento.

Sugiro atualizar a Entrega 01 ou marcar explicitamente os trechos superados, preservando o histórico na rastreabilidade. A regra é simples: **nova evidência pode mudar o projeto, mas a mudança precisa aparecer de forma coerente nos artefatos relacionados**.

### 5. Algumas hipóteses técnicas estão sendo convertidas cedo demais em requisitos de interface

A seção 9.3 merece revisão cuidadosa.

A equipe escreve, por exemplo, que a geração de mapa residual **"exige"** visualizador com opacidade, heatmap e alternância de camadas; que o tempo de inferência **"exige"** determinado feedback; e que a injeção sintética **"define"** como níveis de severidade/confiança serão exibidos.

A tecnologia pode criar possibilidades e restrições, mas ela não determina automaticamente a melhor solução de interação.

Um mapa residual não prova, por si só, que o usuário precisa de heatmap, slider de opacidade ou alternância de camadas. Um tempo de processamento não define necessariamente barra de progresso. Uma saída algorítmica não prova que um score percentual seja compreensível, confiável ou útil para o usuário.

Essas formulações devem permanecer como **hipóteses de design a investigar**, e não como consequências inevitáveis da arquitetura do TCC.

Cuidado para não deixar a IA do TCC virar o "designer" da interface. Quem deve determinar a forma de apresentação são as necessidades da atividade, o contexto e as evidências sobre os usuários.

### 6. O escopo de interação está se expandindo além do fluxo central antes de as necessidades estarem confirmadas

Na seção 8 aparecem dashboard, parametrização, upload, acompanhamento de processamento, relatórios, histórico, comparação, explicabilidade, auditoria, alertas e ajuda.

É correto registrar possibilidades, e a equipe inclusive declara que elas ainda não são requisitos. Entretanto, o conjunto já começa a se comportar como uma lista de funcionalidades candidatas bastante extensa.

Ao mesmo tempo, o recorte declarado na seção 7.4 é mais específico: apoiar o fiscal na triagem, análise de discrepâncias e registro da decisão.

A equipe precisa proteger esse recorte.

Antes de avançar, classifiquem o que é:

1. essencial para o fluxo principal escolhido;
2. hipótese secundária que pode apoiar esse fluxo;
3. necessidade de outro perfil;
4. possibilidade que poderá ser descartada.

Isso é importante para evitar que o projeto vire "um sistema portuário completo" quando o objetivo da disciplina é aprofundar um problema de interação suficientemente delimitado.

### 7. As hipóteses prioritárias escolhidas estão muito orientadas à solução; faltam hipóteses mais fundamentais sobre o trabalho real

Na seção 10, a equipe priorizou H30, H31 e H33:

- layout lado a lado versus sobreposição;
- score percentual e ROI;
- reorganização da fila por risco.

Essas são hipóteses relevantes, mas já estão em um nível relativamente avançado de solução.

Existem hipóteses anteriores mais fundamentais que ainda estão abertas: quem é realmente o usuário direto, como se divide a responsabilidade entre operador e fiscal, como acontece a triagem, quais informações são necessárias para decidir, qual a frequência das tarefas, como a decisão é registrada e quais condições do contexto realmente existem.

Antes de testar se um slider é melhor do que duas imagens lado a lado, a equipe precisa ter segurança de que está projetando para a pessoa certa e para a tarefa certa. Senão, corre o risco de fazer uma excelente comparação entre duas soluções para um problema ainda mal compreendido.

Revisem a priorização das hipóteses considerando **risco para o projeto**: quais suposições, se estiverem erradas, obrigariam a mudar o usuário, o fluxo ou o próprio recorte de IHC?

### 8. A situação do "Fiscal Carlos" deve continuar claramente como cenário hipotético, não como perfil já conhecido

A seção 4.5 cria uma situação bastante específica: "Carlos", terceiro turno consecutivo, 03:00 da manhã, centenas de contêineres e falha causada por exaustão.

Como cenário exploratório, isso é útil. Como descrição do trabalho real, ainda não.

A própria equipe marcou H13 como hipótese, o que está correto. Porém, na seção 12, já aparece "personas (Fiscal Carlos)", sugerindo que o personagem começou a ganhar status de usuário representativo antes da investigação.

Não transformem o exemplo narrativo da Entrega 01 em persona por inércia. A persona das próximas etapas deve ser derivada de informações investigadas sobre o perfil, e não do personagem que ficou mais fácil de lembrar.

### 9. A matriz de rastreabilidade ainda possui lacunas justamente na ligação que mais importa para um TCC sem interface original

A matriz está forte no registro das hipóteses, mas as seções de **rastreabilidade entre contribuição técnica, necessidades e artefatos** e de **padrões de interface** ainda possuem placeholders.

Para este projeto, essa ligação é especialmente importante porque a interface não fazia parte do TCC original. É necessário conseguir acompanhar algo como:

**capacidade técnica do TCC → problema/necessidade do usuário → objetivo/tarefa → decisão de interação → artefato de interface → avaliação posterior.**

Não é necessário preencher hoje campos que pertencem a entregas futuras. O que já puder ser ligado deve ser registrado; o restante pode ficar explicitamente como `PENDENTE`.

O problema não é existir campo pendente. O problema é a rastreabilidade central continuar apenas como modelo vazio enquanto várias funcionalidades já foram propostas.

### 10. Os identificadores estão começando a colidir e podem prejudicar a rastreabilidade

Na Entrega 01, `F01` aparece como identificador de um fato na seção 1.2 e depois `F01`, `F02`, `F03` e `F04` são reutilizados como identificadores de ações/funcionalidades na seção 9.2.

Isso pode gerar ambiguidade nas entregas seguintes, especialmente quando os mesmos códigos começarem a aparecer em cenários, modelos de tarefa, protótipos e avaliações.

A equipe deve estabelecer uma convenção estável de identificadores e evitar reutilizar o mesmo prefixo para tipos diferentes de informação. O nome exato do prefixo é menos importante do que a consistência ao longo do semestre.

## Recomendações de melhoria

### 1. Reduzir afirmações absolutas ou promocionais

Expressões como "extrema fadiga visual", "milhares de imagens", "avançado modelo", "mapas residuais precisos", "agilizando a liberação" e "bloqueando ilícitos" aparecem na comunicação final com um grau de certeza maior do que as evidências apresentadas nesta etapa.

Na comunicação do projeto, mantenham a distinção entre:

- problema já sustentado;
- contribuição técnica pretendida;
- benefício esperado ainda a validar.

Isso deixa o projeto mais científico e mais convincente, não menos.

### 2. Revisar a nomenclatura entre atividade, objetivo, ação e funcionalidade

A seção 9.2 usa identificadores `F01–F04` para "ações que o usuário deverá conseguir realizar". Algumas delas parecem tarefas do usuário; outras já pressupõem uma organização específica da interface, como "visualizar fila classificada por risco".

Nas próximas entregas, tomem cuidado para não confundir:

- objetivo do usuário;
- atividade/tarefa;
- informação necessária;
- funcionalidade;
- componente de interface.

Essa distinção será importante na modelagem de tarefas.

### 3. Revisar onde cada hipótese realmente deve ser investigada

Alguns campos "Como/onde investigar" apontam diretamente para prototipação ou modelagem quando a pergunta é, na verdade, sobre o trabalho real.

Por exemplo, saber se uma atividade é frequente, quem a executa ou como uma decisão é formalizada exige investigação sobre o domínio e os usuários. Um wireframe pode testar uma solução, mas não deve ser usado para "provar" como o trabalho real acontece.

A equipe deve diferenciar investigação de **situação atual** de avaliação de **solução proposta**.

### 4. Limpar duplicações e pequenos problemas de consistência editorial

A seção 12 repete parte do encadeamento das próximas entregas. Existem também pequenas diferenças terminológicas entre "operador", "fiscal", "Fiscal Aduaneiro" e "Operador de Scanner".

Esses pontos não comprometem o mérito da entrega, mas vale corrigi-los agora porque terminologia inconsistente se torna um problema grande quando começa a aparecer em personas, cenários, HTA, MoLIC e protótipos.

## Pontos que devem alimentar as próximas entregas

- **Identidade e divisão de papéis do usuário prioritário:** investigar quem opera o scanner, quem interpreta o resultado e quem possui autoridade para decidir ou registrar o encaminhamento.
- **H04–H08:** validar frequência, criticidade e sequência das atividades antes de otimizar número de cliques ou definir confirmações.
- **H10–H12 e H37:** aprofundar quais dificuldades perceptivas e cognitivas realmente existem na inspeção e quais informações ajudam o profissional a decidir.
- **H14–H17:** consolidar o contexto físico e organizacional com evidências; não carregar automaticamente as premissas iniciais que já foram parcialmente corrigidas.
- **H25, H28, H29, H32 e H33:** manter dashboard, relatórios, histórico, auditoria e alertas como hipóteses enquanto não houver uma tarefa suficientemente demonstrada que justifique cada padrão.
- **H30 e H31:** são boas hipóteses para avaliação de alternativas de design, mas devem vir depois de uma compreensão mais sólida do usuário, da tarefa e das informações necessárias.
- **?01, ?03 e ?04:** avaliar se configurador técnico, parametrização e ajuda pertencem realmente ao recorte central ou se representam outros perfis/fluxos que podem ser deixados fora do projeto.
- **Rastreabilidade:** atualizar continuamente a matriz quando uma hipótese for sustentada, refutada ou reformulada. Não apagar a história da decisão.
- **Personas:** não converter automaticamente "Carlos" em persona. Primeiro investiguem o perfil; depois construam a representação.
- **Modelagem de tarefas:** partir do trabalho efetivamente investigado e não da sequência de telas imaginada.

## Síntese das ações recomendadas

1. **Separar e confirmar os papéis de Operador de Scanner e Fiscal Aduaneiro**, definindo quem será realmente o usuário prioritário.
2. **Revisar o objetivo do usuário**, retirando garantias absolutas e metas organizacionais ainda não comprovadas.
3. **Corrigir a classificação dos fatos**, adicionando fontes concretas ou rebaixando afirmações para hipótese quando necessário.
4. **Sincronizar a Entrega 01 com a rastreabilidade**, especialmente nas premissas já revisadas sobre processo atual, monitores e códigos de risco.
5. **Transformar decisões prematuras de interface em hipóteses de design**, principalmente na seção 9.3.
6. **Reduzir e priorizar o escopo**, protegendo o fluxo central de análise da imagem e tomada de decisão.
7. **Repriorizar as hipóteses**, investigando primeiro aquelas que podem mudar usuário, tarefa, contexto ou recorte.
8. **Preencher a ligação inicial da matriz de rastreabilidade** entre contribuição do TCC, necessidade, tarefa e fluxo, deixando etapas futuras como `PENDENTE`.
9. **Eliminar colisões de identificadores** e estabelecer uma convenção que possa ser mantida ao longo das próximas entregas.
10. **Manter o "Fiscal Carlos" apenas como cenário hipotético** até que dados sobre usuários permitam construir uma persona sustentada.

A equipe está com uma base promissora para a continuidade da disciplina. Agora o trabalho precisa ficar um pouco menos "pronto para desenhar a tela" e um pouco mais "pronto para provar que estamos desenhando a tela certa para a pessoa certa". Essa diferença é pequena no texto, mas enorme em IHC.
