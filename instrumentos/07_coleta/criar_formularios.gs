// Google Apps Script: executar criarInstrumentosEntrega7 em script.google.com.
// Cria rascunhos na conta que executar. Não publica nem coleta respostas.
function criarInstrumentosEntrega7() {
  const props = PropertiesService.getScriptProperties();
  const questionario = obterOuCriar('I02', 'IHC — I02 — Compreensão da triagem', props);
  if (questionario.getItems().length === 0) {
    questionario.setDescription(CONSENTIMENTO);
    const consentimento = questionario.addMultipleChoiceItem()
      .setTitle('Você aceita participar?').setRequired(true);
    const perguntas = questionario.addPageBreakItem().setTitle('Questionário');
    consentimento.setChoices([
      consentimento.createChoice('Sim', perguntas),
      consentimento.createChoice('Não', FormApp.PageNavigationType.SUBMIT)
    ]);
    questionario.addSectionHeaderItem().setTitle('Exemplo do protótipo')
      .setHelpText(EXEMPLO + ' Valores ilustrativos; sem demonstração de probabilidade de ilícito.');
    questionario.addMultipleChoiceItem().setTitle(QUESTOES[0]).setChoiceValues([
      'Interpreto radiografias', 'Atuo em logística ou atividade aduaneira',
      'Estudo ou pesquiso IA', 'Não tenho experiência', 'Prefiro não responder'
    ]);
    QUESTOES.slice(1, 5).forEach(t => questionario.addParagraphTextItem().setTitle(t));
    questionario.addMultipleChoiceItem().setTitle(QUESTOES[5]).setChoiceValues([
      '1 — nada clara', '2', '3', '4', '5 — muito clara', 'Não sei avaliar'
    ]);
    questionario.addParagraphTextItem().setTitle('Explique sua resposta, se desejar.');
    questionario.addParagraphTextItem().setTitle(QUESTOES[6]);
    questionario.setConfirmationMessage('Participação encerrada. O resultado do modelo não comprova ilícito nem autoriza liberação da carga.');
  }
  const entrevista = obterOuCriar('I03', 'IHC — I03 — Roteiro de entrevista', props);
  if (entrevista.getItems().length === 0) {
    entrevista.setDescription('Roteiro para o entrevistador, sem gravação. Leia o consentimento e peça autorização para notas. Não registre nomes, empresas ou operações identificáveis. ' + CONSENTIMENTO);
    entrevista.addTextItem().setTitle('Código da entrevista (sem nome ou contato)');
    const consentimento = entrevista.addMultipleChoiceItem()
      .setTitle('O participante aceitou a entrevista e as notas escritas?').setRequired(true);
    const notas = entrevista.addPageBreakItem().setTitle('Notas da entrevista');
    consentimento.setChoices([
      consentimento.createChoice('Sim', notas),
      consentimento.createChoice('Não — encerrar sem registrar notas', FormApp.PageNavigationType.SUBMIT)
    ]);
    ROTEIRO.forEach(t => entrevista.addParagraphTextItem().setTitle(t));
    entrevista.addParagraphTextItem().setTitle('Correções solicitadas após a recapitulação das notas');
  }
  [questionario, entrevista].forEach(form => {
    form.setAcceptingResponses(false);
    Logger.log(form.getTitle() + ': ' + form.getEditUrl());
  });
}

function obterOuCriar(chave, titulo, props) {
  const id = props.getProperty(chave);
  if (id) return FormApp.openById(id);
  const form = FormApp.create(titulo, false);
  props.setProperty(chave, form.getId());
  form.setCollectEmail(false).setLimitOneResponsePerUser(false)
    .setPublishingSummary(false).setProgressBar(true);
  return form;
}

const CONSENTIMENTO = "Este questionário acadêmico investiga a compreensão de uma interface. Participar é voluntário e você pode interromper sem prejuízo. Não informe pessoas, empresas ou operações identificáveis. As respostas serão usadas sem identificação e descartadas até 90 dias após o encerramento da disciplina. Você aceita participar?";
const EXEMPLO = "A tela mostra uma radiografia, um mapa colorido e o cartão ‘Indício de anomalia — 94%; limiar 70%’. Uma pessoa registra o parecer.";
const QUESTOES = [
  "Qual sua relação com inspeção de cargas?",
  "O que você entende por “indício de anomalia”?",
  "O que o valor “94%” significa para você?",
  "O que o mapa colorido permite concluir?",
  "Que informação falta para compreender o resultado?",
  "A diferença entre resultado do modelo e parecer humano está clara?",
  "Que expressão você mudaria na tela e por quê?"
];
const ROTEIRO = [
  "Com quais atividades de inspeção ou despacho você tem experiência direta?",
  "Quem opera o escâner, interpreta a imagem e formaliza a decisão? Esses papéis coincidem?",
  "Que informações são consultadas junto da imagem e onde ficam disponíveis?",
  "Como uma suspeita é registrada e encaminhada? O que acompanha esse registro?",
  "Como é definida a ordem de análise e quem pode alterá-la?",
  "O que acontece quando a imagem deixa uma dúvida?",
  "Que informação chega a quem realiza a conferência física? Essa pessoa consulta imagens?",
  "Onde o desfecho é registrado e quem recebe retorno?",
  "Que dificuldade de comunicação você já observou, sem identificar pessoas ou operações?"
];
