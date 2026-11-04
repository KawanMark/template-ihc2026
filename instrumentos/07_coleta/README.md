# Instrumentos online da Entrega 7

O [gerador para Google Apps Script](criar_formularios.gs) prepara I02 (questionário) e I03 (roteiro de entrevista para anotações do entrevistador), com o conteúdo textual da [Entrega 7](../../docs/07_coleta_dados.md). Nenhum instrumento foi aplicado. O gerador ainda não foi executado numa conta Google; não há links online criados nesta revisão.

1. Na conta Google da equipe, abrir [Google Apps Script](https://script.google.com/) e criar um projeto.
2. Copiar `criar_formularios.gs` e executar `criarInstrumentosEntrega7`. Autorizar o acesso aos formulários quando solicitado pelo Google.
3. Os endereços de edição aparecem no registro de execução. Os dois formulários ficam como rascunhos, sem receber respostas. Uma nova execução no mesmo projeto reutiliza os formulários, sem duplicá-los.
4. Conferir o conteúdo, manter coleta de e-mail desativada e definir acesso compatível com a revisão pelo professor. Publicar somente quando a equipe decidir disponibilizar os instrumentos; verificar o acesso sem privilégios e registrar os links na Entrega 7.

No questionário, recusa leva ao encerramento sem apresentar as perguntas. Caso a coleta seja aberta, a recusa pode gerar apenas o registro dessa opção; não deve ser contada como resposta válida. A entrevista é conduzida por uma pessoa: o formulário organiza notas e não transforma a técnica em questionário autoadministrado. Antes de eventual aplicação, definir canal para pedir exclusão pelo código e conferir se as permissões da conta não exigem identificação do participante.

Referência técnica: Google, [FormApp](https://developers.google.com/apps-script/reference/forms/form-app) e [Form](https://developers.google.com/apps-script/reference/forms/form). Sintaxe verificada localmente; execução e permissões online dependem da conta da equipe.
