# Feedback do Professor > Entrega 02 > Equipe 09

## Avaliação geral

A equipe atendeu ao requisito quantitativo mais importante da Entrega 02: há **três integrantes e três análises individualizadas**, com autoria explícita - C01 por Kawan Mark Geronimo da Silva, C02 por Gabriel Albertini Pinheiro e C03 por Alexandre Domiciano Pierri. Portanto, o critério de **pelo menos uma interface corrente analisada por aluno** foi atendido.

A seleção das referências também é coerente com o escopo do projeto: a equipe não procurou apenas “concorrentes do algoritmo”, mas investigou uma ferramenta de apoio à interpretação radiográfica (C01), uma interface profissional já pertencente ao contexto aduaneiro (C02) e outra família de ferramentas de inspeção de imagens (C03). Isso é adequado para um TCC que originalmente não previa interface.

O ponto que mais merece revisão está no **grau de força das conclusões derivadas**. A equipe fez uma análise rica e encontrou padrões úteis, porém algumas recomendações da seção 5 avançam além do que as evidências observadas permitem concluir. Em especial, em alguns pontos uma ausência de recurso no concorrente passa a ser tratada como prova de que o projeto deve implementar esse recurso; em outros, uma convenção normativa do Siscomex é transferida diretamente para uma escala de risco da IA, embora sejam conceitos potencialmente diferentes.

Quanto às evidências visuais, o atendimento é **parcial**. O diretório `assets/02_concorrencia/` contém sete imagens e está organizado de forma coerente. C01 possui capturas efetivamente relacionadas à interface/ferramentas analisadas. C02 possui uma tela pública do Portal Único e uma captura de documentação normativa, mas não a interface operacional do Auditor-Fiscal. C03 contém páginas públicas de produto da Smiths Detection, e não telas reais da estação de trabalho RIW/CargoVision em uso. A própria equipe reconhece essa limitação no checklist, o que é correto. Assim, a documentação visual existe e é útil, mas não atende integralmente ao objetivo de observar estados e decisões reais de interface em todas as três análises.

De modo geral, a Entrega 02 apresenta boa maturidade analítica e mostra evolução em relação às hipóteses da Entrega 01. O trabalho agora precisa distinguir com maior rigor três coisas diferentes: **padrão efetivamente observado**, **inferência plausível a partir do concorrente** e **decisão de design ainda a validar no próprio projeto**.

## Pontos positivos

- O requisito de uma análise por integrante foi cumprido de forma clara e rastreável.
- As três análises têm autores identificados e apresentam recortes complementares, evitando três avaliações praticamente idênticas do mesmo produto.
- C01 é bem alinhada à tarefa central do projeto de IHC: interpretação visual de imagens radiográficas com apoio computacional.
- C02 amplia corretamente a análise para uma interface que faz parte do ecossistema profissional do público-alvo, mesmo não sendo concorrente direto.
- C03 procura compreender convenções visuais já conhecidas por operadores de inspeção, especialmente filtros, pseudo-cor, realce e integração com manifesto.
- A equipe registra limitações das fontes, em vez de fingir acesso a interfaces restritas.
- A análise comparativa da seção 4 usa critérios comuns entre C01, C02 e C03, o que permite realmente comparar as soluções.
- A Entrega 02 produziu evolução concreta da rastreabilidade: H09 foi revista, H15 foi parcialmente corrigida e H24 foi atualizada para reconhecer quatro canais normativos.
- A equipe identificou padrões que podem alimentar o projeto, como centralidade da imagem, comparação visual, linguagem do domínio, linha do tempo de processo, atribuição de responsável e necessidade de não sobrecarregar a imagem.
- O diretório `assets/02_concorrencia/` está organizado com nomes de arquivos consistentes e relacionados diretamente às análises.

## Correções prioritárias

### 1. O requisito visual foi apenas parcialmente atendido para C02 e C03

O diretório `assets/02_concorrencia/` contém:

- três imagens relacionadas à C01;
- duas imagens relacionadas à C02;
- duas imagens relacionadas à C03.

Em C01, as capturas mostram diretamente recursos utilizados na análise - High Density, Similar Cargo e Vehicle Compare. Portanto, existe boa correspondência entre evidência visual e argumento.

Em C02, a captura `c02_siscomex_portal_perfis.png` mostra uma interface real e corrente do Portal Único, mas em nível de entrada/perfil. Já `c02_siscomex_canais_parametrizacao.png` é essencialmente uma captura de documentação normativa. Ela é uma boa evidência para os quatro canais, mas não é uma tela operacional do fluxo do Auditor-Fiscal.

Em C03, `c03_smiths_daisy_plataforma.png` e `c03_smiths_vizual_discriminacao.png` são páginas públicas de produto do fabricante. Elas sustentam que DaiSy e viZual existem e quais capacidades são divulgadas, porém não permitem observar organização da estação de trabalho, posição dos controles, densidade de informação, sequência de uso ou comportamento do operador.

A própria equipe reconhece corretamente essa limitação no checklist. Portanto, não considero esse item simplesmente “não feito”; considero **parcialmente atendido**.

Para melhorar a entrega, a equipe deve procurar, quando legalmente e publicamente disponível, manuais, datasheets ilustrados, vídeos institucionais, materiais de treinamento, artigos ou apresentações técnicas que exibam a estação real. Caso isso realmente não exista publicamente, mantenham a limitação explicitada e evitem transformar especificações funcionais em conclusões sobre layout.

### 2. Os prints precisam ficar mais fortemente ligados aos achados positivos, negativos e padrões de mercado

A equipe descreve os achados em tabelas e referencia os arquivos do diretório `assets/02_concorrencia/`, o que é positivo. Porém, a comprovação visual ainda depende muito da interpretação do leitor.

Uma melhoria simples seria numerar ou destacar nas capturas os elementos relevantes e depois relacionar cada marcação ao texto. Por exemplo:

- “P1 - comparação simultânea das imagens”;
- “P2 - barra de ferramentas lateral”;
- “N1 - excesso de comandos próximos à imagem”;
- “M1 - padrão de mercado: imagem ocupa área central”.

Não é necessário transformar cada print em um pôster. O objetivo é permitir que o leitor identifique rapidamente **qual parte da tela comprova o ponto discutido**.

Esse aspecto é especialmente importante em uma entrega de análise de concorrência: o argumento deve nascer daquilo que foi observado, e não apenas do texto que acompanha a imagem.

### 3. RC04 está atribuída à fonte errada

A RC04 afirma que o fluxo de decisão deve incluir justificativa e trilha de auditoria e a deriva de uma **limitação da C01**, isto é, do fato de a Rapiscan não mostrar publicamente essa dimensão.

A ausência de evidência em C01 não é suficiente para concluir que o projeto precisa dessa funcionalidade.

Entretanto, a própria C02 apresenta evidência muito mais forte: exigência fiscal, atribuição a auditor responsável, processo formal e rastreabilidade. Portanto, a recomendação pode fazer sentido, mas sua origem precisa ser corrigida.

Sugiro que RC04 seja derivada principalmente de C02 e relacionada às hipóteses H17, H18, H19 e H32. A limitação de C01 pode aparecer apenas como contraste.

### 4. RC05 mistura “canal aduaneiro” com “nível de risco da IA”

A C02 identificou corretamente quatro canais normativos - verde, amarelo, vermelho e cinza - e isso corrige a hipótese H24 da Entrega 01.

Porém, RC05 conclui que **“a escala de risco da fila deve ter quatro estados alinhados aos canais oficiais”**.

Aqui existe um salto conceitual importante.

Os canais do Siscomex representam uma **classificação normativa do processo de despacho e do tipo de conferência**. Já o resultado do modelo de IA representa uma medida, classificação ou evidência de **anomalia radiográfica**. Não está demonstrado que essas duas escalas sejam semanticamente equivalentes.

A equipe deve evitar transformar os quatro canais normativos em quatro níveis de risco algorítmico apenas porque ambos podem ser apresentados com cores.

Uma recomendação mais defensável seria: o projeto deve **preservar e respeitar a semântica oficial dos canais quando essa informação for exibida**, deixando separada a evidência produzida pela IA até que sua relação com a decisão aduaneira seja investigada.

Este é um ponto prioritário porque uma mistura conceitual aqui pode induzir o usuário a interpretar um resultado algorítmico como decisão normativa.

### 5. RC06 transforma uma ausência observada em necessidade confirmada

A C02 não encontrou evidência pública de uma fila priorizada por risco para o fiscal. A equipe interpreta isso como uma “oportunidade clara” e RC06 determina que a tela deve oferecer uma fila ordenada por risco.

A ausência de um recurso no concorrente não demonstra automaticamente que o usuário precisa dele.

Pode ser:

- uma oportunidade real;
- uma função existente, mas não documentada;
- uma atividade realizada em outro sistema;
- uma função desnecessária;
- uma prática proibida ou incompatível com o processo institucional.

Portanto, RC06 ainda deve permanecer como **hipótese de design**, vinculada a H25/H33/H35, até que a investigação do trabalho real demonstre que o usuário precisa decidir “qual contêiner examinar primeiro” e possui autonomia para alterar essa ordem.

A análise de concorrência encontrou um vazio. A próxima etapa deve descobrir se esse vazio é realmente um problema.

### 6. RC09 extrapola corretamente um problema, mas prescreve cedo demais a solução

C03 mostra que o operador pode utilizar pseudo-cor, realce de bordas, equalização e outras formas de tratamento visual. Isso sustenta uma recomendação importante: **a visualização da IA não deve competir com as codificações visuais já conhecidas pelo operador**.

Entretanto, RC09 determina diretamente “opacidade ajustável e alternância rápida”.

Esses controles são soluções candidatas plausíveis, mas não foram observados como padrão de mercado nas evidências apresentadas.

Sugiro separar:

- **recomendação derivada:** a camada de IA deve poder ser distinguida dos tratamentos radiográficos existentes e não deve ocultar a imagem;
- **hipótese de solução:** testar opacidade ajustável, toggle, comparação lado a lado ou outras alternativas.

Isso prepara melhor a equipe para prototipação sem transformar uma primeira ideia em requisito.

### 7. RC10 contém uma boa conclusão e uma decisão de layout não sustentada

A centralidade da imagem radiográfica é bem sustentada por C01 e C03. Portanto, a recomendação de reservar alta prioridade visual à imagem faz sentido.

Porém, RC10 acrescenta que metadados e ações devem ficar em **“painéis laterais retráteis”**. Essa decisão específica não foi demonstrada pelas evidências.

“Imagem deve permanecer central” é recomendação derivada.

“Painéis laterais retráteis” é uma alternativa de design a experimentar posteriormente.

A equipe está um pouco ansiosa para abrir o Figma - calma, ele não vai fugir.

### 8. RC11 é conceitualmente boa, mas sua justificativa precisa ser corrigida

A recomendação de não transmitir informação crítica apenas por cor é coerente com princípios de acessibilidade e deve ser preservada.

Entretanto, a frase que afirma que C02 e C03 **“dependem exclusivamente de cor”** é mais forte do que as evidências apresentadas.

No caso do Siscomex, os canais possuem nomes textuais e significado normativo, ainda que a cor seja muito importante. Em C03, as páginas de produto demonstram pseudo-cor associada à discriminação de materiais, mas não demonstram que a interface completa dependa exclusivamente dessa codificação.

Portanto, RC11 deve ser apresentada como:

- uma preocupação despertada pela forte presença de codificação cromática nas interfaces analisadas;
- reforçada por princípios de acessibilidade de IHC.

Assim fica claro o que veio da concorrência e o que veio da teoria.

### 9. RC03 deveria incorporar C02 e C03, e não somente C01

RC03 recomenda usar linguagem operacional do domínio e evitar métricas técnicas de IA como elemento principal.

A recomendação faz sentido, mas a fundamentação mais forte não é apenas a organização do InSight por tarefas.

C02 fornece evidência explícita do vocabulário profissional brasileiro: canal, parametrização, exigência, desembaraço, dossiê etc. C03 também utiliza terminologia operacional específica da inspeção.

Portanto, RC03 deveria ser marcada como recomendação derivada **de C01 + C02 + C03**, com destaque especial para C02 quando o assunto for terminologia normativa do fiscal.

### 10. É preciso separar com mais rigor “padrão de mercado”, “achado do concorrente” e “oportunidade do projeto”

Na seção 3.1, alguns itens estão muito bem tratados. Por exemplo, dashboard é explicitamente marcado como **não observado**.

Esse cuidado deveria ser aplicado uniformemente.

Sugiro que cada recomendação da seção 5 receba uma classificação simples:

- **PM - padrão observado em mercado**;
- **AP - achado/problema observado**;
- **HD - hipótese de design derivada**;
- **TIHC - recomendação sustentada principalmente pela teoria de IHC**.

Isso evitaria frases como “o concorrente não tem, então nosso sistema deve ter”.

A Entrega 02 é justamente a fase em que o grupo aprende com o mercado. Aprender também significa descobrir o que **ainda não sabemos**.

## Recomendações de melhoria

### 1. Valorizar mais a qualidade visual de C01

C01 possui as evidências mais diretamente observáveis da entrega. A equipe poderia explorar melhor elementos concretos visíveis nos prints - distribuição espacial, comparação lado a lado, ferramentas periféricas, centralidade da imagem e formas de destaque.

Atualmente, parte da análise ainda se apoia fortemente no texto promocional do fabricante.

### 2. Manter a boa prática de registrar limitações de acesso

A ressalva de C02 e C03 é adequada e deve ser preservada. Em sistemas governamentais e de segurança, é perfeitamente plausível que telas reais não sejam públicas.

O erro seria inventar a interface que não foi observada. A equipe não fez isso de forma explícita, mas algumas inferências de layout precisam ser moderadas para manter essa coerência.

### 3. Diferenciar documentação normativa de screenshot de interface

`c02_siscomex_canais_parametrizacao.png`, no diretório `assets/02_concorrencia/`, é uma ótima evidência de domínio e processo, mas não deve ser contabilizada conceitualmente como “tela de interface analisada” no mesmo sentido de uma tela de operação.

Ela sustenta linguagem, estados normativos e regras. Não sustenta usabilidade da tela operacional.

### 4. Atualizar a matriz de rastreabilidade sem transformar “parcialmente sustentada” em “requisito”

A matriz foi atualizada de forma muito boa, mas alguns impactos já são escritos como componentes definidos - por exemplo, inclusão de painel, score, busca ou alertas.

Quando o estado é “parcialmente sustentada” ou “aberta”, o impacto deveria preferencialmente permanecer como possibilidade a investigar.

## Pontos que devem alimentar as próximas entregas

- **H01:** continuar investigando se Operador de Scanner e Auditor-Fiscal são de fato o mesmo papel ou papéis distintos.
- **H11:** aprofundar quais informações documentais precisam estar visíveis junto da imagem e em que momento.
- **H24:** manter os quatro canais como convenção normativa, sem confundi-los automaticamente com score/risco do modelo de IA.
- **H25/H33/H35:** investigar se existe realmente uma tarefa de priorização de fila e se o usuário possui autoridade para executá-la.
- **H28:** relatório/laudo continua sem evidência suficiente e deve permanecer hipótese.
- **H29:** separar claramente busca por identificador, histórico cronológico e busca por risco; são necessidades distintas.
- **H30:** comparação visual possui boa sustentação de mercado, mas a preferência entre lado a lado e sobreposição ainda deve ser testada.
- **H31:** ROI/destaque visual tem sustentação parcial; score numérico e sua interpretação continuam abertos.
- **H32:** rastreabilidade da decisão é importante no domínio, mas o formato concreto da trilha deve ser investigado.
- **Acessibilidade:** transformar RC11 em requisito de qualidade fundamentado em IHC e posteriormente verificar contraste, redundância visual e interpretação da informação cromática.
- **Protótipos:** testar alternativas em vez de congelar desde já slider, painel retrátil, fila automática ou quatro níveis de “risco IA”.

## Síntese das ações recomendadas

1. **Manter como atendido o requisito de uma análise por aluno:** C01, C02 e C03 possuem autoria individual explícita.
2. **Registrar o requisito de prints como parcialmente atendido**, pois C02 e principalmente C03 não possuem todas as telas operacionais reais; no parecer, as evidências do `.zip` correspondem ao diretório `assets/02_concorrencia/`.
3. **Reforçar as capturas com marcações ou chamadas visuais**, ligando diretamente o screenshot ao ponto positivo, negativo ou padrão observado.
4. **Reescrever RC04 com origem principal em C02**, e não na ausência de informação em C01.
5. **Revisar RC05 para não confundir os quatro canais normativos do Siscomex com quatro níveis de risco da IA.**
6. **Rebaixar RC06 para hipótese de design** até validar que priorização de fila é realmente uma tarefa do usuário.
7. **Separar em RC09 e RC10 o princípio aprendido da solução concreta**, deixando opacidade, toggle e painéis retráteis para prototipação e teste.
8. **Ajustar RC11**, apresentando redundância além da cor como recomendação de acessibilidade apoiada pela teoria, motivada - mas não totalmente provada - pelos concorrentes.
9. **Ampliar a origem de RC03 para C01+C02+C03**, porque a linguagem do domínio está especialmente bem evidenciada em C02.
10. **Classificar recomendações como padrão observado, achado, hipótese de design ou princípio de IHC**, aumentando a rastreabilidade entre evidência e decisão.

## Parecer geral sobre a Entrega 02

A Entrega 02 cumpre bem sua função principal de tirar o projeto do campo das suposições e colocá-lo em contato com soluções e convenções reais do domínio. A cobertura por aluno foi atendida, as três análises são complementares e a equipe demonstrou capacidade de revisar hipóteses anteriores a partir de novas evidências. O principal ponto de atenção está na passagem entre **“observei isto no mercado”** e **“portanto meu sistema deve fazer aquilo”**: algumas recomendações são diretamente sustentadas, enquanto outras ainda são hipóteses de design apresentadas com força excessiva. Também é necessário reconhecer formalmente que as evidências visuais no diretório `assets/02_concorrencia/` são desiguais: C01 possui material de interface mais representativo, C02 combina interface pública com documentação normativa e C03 utiliza páginas de produto porque as telas operacionais são restritas. Com esses ajustes, a equipe terá uma base muito boa para avançar sem copiar concorrentes e, principalmente, sem transformar ausência de evidência em requisito.
