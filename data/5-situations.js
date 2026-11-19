/*
  BANQUE — catégorie 5 : Mises en situation professionnelle (20 questions)
  Méthode commune : accueillir, qualifier, agir dans son périmètre, alerter, tracer.
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "x-colere",
    cat: 5,
    theme: "L'usager en colère",
    statut: "officiel",
    question: "Un usager arrive furieux au guichet et parle très fort. Que faites-vous ?",
    duree: 60,
    enjeu: "Mise en situation classique : le jury observe votre capacité à ne pas répondre à l'agressivité et à rester dans le cadre.",
    reponse: [
      "Je l'accueille sans répondre à l'agressivité : je le regarde, je baisse le ton et je dis : « Je comprends que cette situation vous inquiète. Asseyez-vous, je vais regarder avec vous. » Je ne prends pas la colère pour une attaque personnelle et je ne hausse pas la voix.",
      "Je le laisse expliquer, je reformule ce que j'ai compris et je vérifie les faits dans le dossier. Je distingue ce que je peux faire — expliquer, corriger une donnée, donner une échéance, orienter — de ce que je ne peux pas décider. Je réponds précisément, sans promettre l'impossible.",
      "Si les insultes ou les menaces continuent, je pose une limite : « Je suis là pour vous aider, mais je ne peux pas vous laisser m'insulter. » J'appelle alors un collègue ou un responsable, et je signale l'incident. **La sécurité de l'accueil et des autres usagers passe avant la poursuite de l'entretien.**"
    ],
    attentes: [
      "Accueil calme, reformulation et vérification des faits.",
      "Une limite posée et un relais hiérarchique en cas d'escalade."
    ],
    eviter: [
      "Répondre sur le même ton ou prendre la remarque personnellement.",
      "Promettre une remise ou un délai que vous ne pouvez pas accorder."
    ],
    relances: [
      "Et si l'usager refuse de baisser le ton ?",
      "Que notez-vous après l'incident ?"
    ],
    motsCles: ["colère", "accueil", "reformulation", "limite", "alerte"],
    source: "Guide ENFiP 2026, mises en situation ; pratique d'accueil DGFiP"
  },

  {
    id: "x-sans-rdv",
    cat: 5,
    theme: "L'usager sans rendez-vous",
    statut: "probable",
    question: "Un usager se présente sans rendez-vous et insiste pour être reçu immédiatement. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury vérifie que vous appliquez une règle d'organisation sans devenir rigide ni céder au rapport de force.",
    reponse: [
      "Je l'accueille et je qualifie sa demande : s'agit-il d'une urgence, d'un dépôt de pièce, d'une simple information ? Certaines situations peuvent être réglées sans rendez-vous — remise d'un document, orientation, réponse courte — et je le fais si l'organisation du service le permet.",
      "Si un rendez-vous est nécessaire, je propose le prochain créneau disponible et j'explique pourquoi. Je donne les pièces à préparer pour éviter un second déplacement. Je ne promets pas un passage prioritaire que je ne peux pas garantir : **je ne crée pas de passe-droit**, même sous la pression.",
      "Si la situation est réellement urgente — une impossibilité de payer, une date limite le jour même — je demande à mon responsable s'il peut arbitrer. Je trace la demande et la réponse. L'usager peut être mécontent, mais il doit repartir avec une information claire et la même règle que les autres."
    ],
    attentes: [
      "Qualification de la demande et solution sans rendez-vous si possible.",
      "Refus du passe-droit et arbitrage hiérarchique en cas d'urgence."
    ],
    eviter: [
      "Céder parce que l'usager parle fort.",
      "Renvoyer sèchement sans proposer de créneau ni de solution."
    ],
    relances: [
      "Qu'est-ce qui justifie une urgence ?",
      "Comment gérez-vous la file d'attente ?"
    ],
    motsCles: ["rendez-vous", "urgence", "passe-droit", "organisation", "arbitrage"],
    source: "Organisation de l'accueil DGFiP ; mises en situation types"
  },

  {
    id: "x-langue",
    cat: 5,
    theme: "La barrière de la langue",
    statut: "probable",
    question: "Un usager ne parle pas bien français et vous ne comprenez pas sa demande. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury évalue votre capacité d'adaptation et votre refus de laisser une personne sans réponse.",
    reponse: [
      "Je ralentis, je fais des phrases courtes et je reformule. Je peux m'appuyer sur des supports écrits, des pictogrammes ou une traduction automatique pour les mots simples, en vérifiant toujours la compréhension. Je demande à la personne de répéter ou de montrer les documents, plutôt que de faire semblant d'avoir compris.",
      "Si la demande reste incompréhensible et qu'un collègue parle sa langue, je demande son aide. Sinon, je propose un rendez-vous avec un interprète ou une association partenaire, ou j'oriente vers une permanence adaptée. Je note la langue et le besoin pour le prochain contact.",
      "En aucun cas je ne traite la personne différemment ou je ne la renvoie sans solution. **L'égalité d'accès au service public suppose de surmonter la barrière de la langue**, pas de la transformer en obstacle définitif."
    ],
    attentes: [
      "Adaptation de la communication et vérification de la compréhension.",
      "Recours à un tiers ou à une orientation adaptée."
    ],
    eviter: [
      "Parler plus fort en espérant être compris.",
      "Faire signer un document sans être sûr de la compréhension."
    ],
    relances: [
      "Comment vérifiez-vous que la personne a compris ?",
      "Quels partenaires peuvent vous aider ?"
    ],
    motsCles: ["langue", "compréhension", "interprète", "égalité", "orientation"],
    source: "Mises en situation types, accueil de proximité"
  },

  {
    id: "x-age",
    cat: 5,
    theme: "Le public âgé et le numérique",
    statut: "probable",
    question: "Une personne âgée ne parvient pas à faire sa déclaration en ligne. Que faites-vous ?",
    duree: 60,
    enjeu: "Situation très fréquente au SIP : le jury attend une aide concrète, dans le respect de l'autonomie et de la confidentialité.",
    reponse: [
      "Je l'accueille et je vérifie d'abord ce qui bloque : accès au compte, mot de passe, connexion internet, compréhension de l'écran. Je l'accompagne pas à pas, en lui montrant plutôt qu'en faisant à sa place, pour qu'elle puisse refaire la démarche seule ensuite.",
      "Je respecte sa autonomie : je ne saisis pas ses identifiants à sa place, je ne conserve pas ses codes, et je ne fais pas la déclaration sans son accord. Si elle ne peut pas ou ne veut pas utiliser le numérique, je l'oriente vers la voie papier ou vers un rendez-vous d'assistance, selon les règles du service.",
      "Je lui remets une fiche avec les étapes et le numéro à appeler. **L'accompagnement numérique ne doit pas créer de dépendance** : l'objectif est de rendre la personne capable de faire, ou de lui donner une alternative, pas de faire à sa place."
    ],
    attentes: [
      "Accompagnement progressif et respect de l'autonomie.",
      "Une alternative pour ceux qui ne peuvent pas utiliser internet."
    ],
    eviter: [
      "Prendre les identifiants et faire la déclaration à sa place.",
      "Répondre « tout se fait en ligne » sans solution."
    ],
    relances: [
      "Comment protégez-vous ses données ?",
      "Que faites-vous si elle ne veut pas du numérique ?"
    ],
    motsCles: ["numérique", "personnes âgées", "autonomie", "alternative", "confidentialité"],
    source: "Accueil DGFiP ; NRP et accompagnement au numérique"
  },

  {
    id: "x-handicap",
    cat: 5,
    theme: "L'usager en situation de handicap",
    statut: "probable",
    question: "Une personne en situation de handicap se présente à l'accueil. Comment adaptez-vous votre accueil ?",
    duree: 60,
    enjeu: "Le jury vérifie votre connaissance de l'obligation d'accessibilité et votre capacité à adapter sans stigmatiser.",
    reponse: [
      "Je demande à la personne ce dont elle a besoin, sans décider à sa place : parler face à elle si elle lit sur les lèvres, utiliser un support écrit, proposer une salle calme, appeler un collègue formé, ou adapter le déplacement. Je m'adresse directement à elle, pas seulement à l'accompagnant.",
      "Je vérifie l'accessibilité du parcours : porte, ascenseur, largeur de passage, éclairage, sonorisation. Si le service n'est pas adapté, je propose une alternative — rendez-vous téléphonique, aide à domicile, orientation vers un service partenaire — et je signale le problème à ma hiérarchie.",
      "Je respecte la confidentialité : le handicap ou la situation personnelle ne se commentent pas devant les autres usagers. **L'accessibilité n'est pas une faveur**, c'est une obligation qui permet l'égal accès au service public."
    ],
    attentes: [
      "Demander à la personne plutôt que présumer.",
      "Connaissance de l'accessibilité et des alternatives."
    ],
    eviter: [
      "Parler à l'accompagnant au lieu de l'usager.",
      "Évoquer le handicap à voix haute devant la file d'attente."
    ],
    relances: [
      "Que faites-vous si le local n'est pas accessible ?",
      "Comment adaptez-vous un entretien téléphonique ?"
    ],
    motsCles: ["handicap", "accessibilité", "autonomie", "confidentialité", "égalité"],
    source: "Obligation d'accessibilité du service public ; accueil DGFiP"
  },

  {
    id: "x-cadeau",
    cat: 5,
    theme: "Le cadeau de l'usager",
    statut: "probable",
    question: "Un usager satisfait vous laisse une enveloppe ou un cadeau. Que faites-vous ?",
    duree: 45,
    enjeu: "Mise en situation de probité : la réponse doit être un refus clair, courtois et sans négociation.",
    reponse: [
      "Je refuse poliment et immédiatement : « C'est très gentil, mais je ne peux pas accepter : nous n'avons pas le droit de recevoir de cadeau dans le cadre de nos fonctions. » Je rends l'objet sans le garder, même temporairement.",
      "Je n'accepte aucun équivalent — un café, un billet, un bon d'achat — et je ne propose pas de le donner à l'équipe. Si la personne insiste, je répète le refus et je propose que sa satisfaction soit exprimée par un courrier ou un questionnaire, ce qui est utile au service.",
      "Je signale la situation à ma hiérarchie si elle est insistante ou si elle pourrait être mal interprétée. **Un cadeau accepté, même petit, crée une dette morale** et peut faire douter de l'impartialité du service. La meilleure réponse est un refus constant et expliqué."
    ],
    attentes: [
      "Refus immédiat et courtois, sans ambiguïté.",
      "Une alternative pour exprimer la satisfaction."
    ],
    eviter: [
      "Accepter « pour ne pas vexer ».",
      "Partager le cadeau avec l'équipe."
    ],
    relances: [
      "Et si c'est un simple café ?",
      "Que faites-vous si l'enveloppe est laissée sur le comptoir ?"
    ],
    motsCles: ["cadeau", "probité", "impartialité", "refus", "signalement"],
    source: "Obligations déontologiques ; prévention de la corruption"
  },

  {
    id: "x-proche",
    cat: 5,
    theme: "Le dossier d'un proche",
    statut: "probable",
    question: "Votre cousin vous demande de traiter son dossier fiscal. Que faites-vous ?",
    duree: 60,
    enjeu: "Conflit d'intérêts : le jury attend un retrait, pas seulement une promesse d'impartialité.",
    reponse: [
      "Je ne traite pas le dossier. Même si je pense pouvoir rester impartial, la situation crée un **conflit d'intérêts** et un doute légitime sur l'égalité de traitement. Je le dis à mon cousin et je l'oriente vers la procédure normale.",
      "J'en informe ma hiérarchie pour que le dossier soit confié à un autre agent. Je ne consulte pas le dossier « pour rendre service », je ne donne pas d'information privilégiée et je ne m'entremets pas auprès d'un collègue.",
      "Si le dossier arrive malgré tout dans mon flux de travail, je le signale immédiatement et je demande son transfert. **La confiance dans l'administration repose sur le fait qu'un agent ne puisse pas favoriser les siens**, même s'il en est capable."
    ],
    attentes: [
      "Retrait immédiat et information de la hiérarchie.",
      "Aucune consultation ni information privilégiée."
    ],
    eviter: [
      "« Je peux le faire, je suis honnête ».",
      "Confier le dossier à un collègue sans le signaler."
    ],
    relances: [
      "Et si le dossier est déjà dans votre pile ?",
      "Comment expliquez-vous ce refus à votre famille ?"
    ],
    motsCles: ["conflit d'intérêts", "proche", "impartialité", "retrait", "hiérarchie"],
    source: "Déontologie ; prévention des conflits d'intérêts"
  },

  {
    id: "x-collegue-curieux",
    cat: 5,
    theme: "Le collègue curieux",
    statut: "probable",
    question: "Vous voyez un collègue consulter le dossier d'une célébrité ou d'un voisin, sans motif professionnel. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury teste votre capacité à réagir à une atteinte au secret, sans complaisance ni escalade inutile.",
    reponse: [
      "Je réagis tout de suite, discrètement mais fermement : « Tu n'as pas de raison de consulter ce dossier, il faut fermer. » Je ne ris pas, je ne demande pas de détails et je ne regarde pas l'écran. La curiosité n'est pas un motif professionnel.",
      "Je vérifie si un motif existe — par exemple un dossier qui lui a été attribué — et si ce n'est pas le cas, j'en informe ma hiérarchie. Je ne promets pas de me taire : le secret professionnel protège les personnes, et un agent qui le viole expose le service.",
      "Je ne cherche pas à humilier le collègue devant l'équipe, mais je ne couvre pas la faute. **La loyauté envers un collègue ne justifie jamais de laisser violer la confidentialité** ; c'est aussi une protection pour lui, car la sanction serait plus lourde si la pratique durait."
    ],
    attentes: [
      "Réaction immédiate, sans complaisance.",
      "Signalement à la hiérarchie et distinction avec un motif légitime."
    ],
    eviter: [
      "Ne rien dire pour éviter un conflit.",
      "Accuser publiquement sans vérifier."
    ],
    relances: [
      "Et si c'est votre supérieur ?",
      "Que risque le collègue ?"
    ],
    motsCles: ["secret", "collègue", "curiosité", "signalement", "confidentialité"],
    source: "Secret professionnel ; obligations déontologiques"
  },

  {
    id: "x-collegue-travail",
    cat: 5,
    theme: "Le collègue qui ne fait pas sa part",
    statut: "probable",
    question: "Un collègue ne fait pas sa part du travail et l'équipe en souffre. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury évalue votre capacité à traiter un problème collectif sans juger les personnes.",
    reponse: [
      "Je commence par observer les faits : quelles tâches ne sont pas faites, depuis quand, avec quel impact pour les usagers et l'équipe. Je ne me fie pas à une impression générale.",
      "J'en parle d'abord directement au collègue, calmement et sans accuser : « J'ai vu que ces dossiers n'ont pas été traités cette semaine ; est-ce qu'il y a une difficulté ? » Il peut y avoir une raison — surcharge, difficulté personnelle, méconnaissance d'une procédure — et une aide peut suffire.",
      "Si la situation persiste, j'en informe ma hiérarchie en présentant des faits, pas des reproches. **Je ne fais pas le travail à sa place en silence**, car cela masque le problème et m'épuise ; je ne le dénonce pas non plus à toute l'équipe. Le bon niveau, c'est la personne concernée, puis le responsable."
    ],
    attentes: [
      "Faits observés, discussion directe, puis hiérarchie.",
      "Refus de compenser silencieusement."
    ],
    eviter: [
      "Rapporter immédiatement à la hiérarchie sans avoir parlé au collègue.",
      "Faire le travail à sa place sans rien dire."
    ],
    relances: [
      "Et si le collègue est en difficulté personnelle ?",
      "Quel impact pour les usagers ?"
    ],
    motsCles: ["équipe", "répartition", "faits", "dialogue", "hiérarchie"],
    source: "Mises en situation types, travail en équipe"
  },

  {
    id: "x-retard",
    cat: 5,
    theme: "Le collègue en retard",
    statut: "probable",
    question: "Un collègue arrive systématiquement en retard, ce qui désorganise l'accueil. Que faites-vous ?",
    duree: 45,
    enjeu: "Situation de vie de service : le jury regarde si vous savez distinguer la solidarité de la complaisance.",
    reponse: [
      "Je constate l'impact concret : l'accueil ouvre avec du retard, les usagers attendent, un autre agent doit compenser. Je ne me contente pas de dire « il est toujours en retard ».",
      "J'en parle au collègue, sans agressivité : je lui demande s'il y a une difficulté et je lui explique l'effet sur l'équipe. Si le retard est ponctuel ou lié à une contrainte connue, je peux assurer une continuité temporaire. Si le retard est répété et sans explication, je le signale à la hiérarchie, qui est responsable du temps de travail.",
      "Je ne couvre pas les absences en falsifiant un pointage et je ne fais pas de remarque devant les usagers. **La solidarité ne consiste pas à cacher un problème**, mais à aider à le résoudre ou à le faire traiter au bon niveau."
    ],
    attentes: [
      "Constat d'impact et dialogue direct.",
      "Refus de la fausse solidarité et saisine de la hiérarchie."
    ],
    eviter: [
      "Falsifier un pointage ou mentir pour couvrir.",
      "Dénoncer devant les usagers."
    ],
    relances: [
      "Et si le retard est lié à un problème de transport ?",
      "Que dit le règlement sur les horaires ?"
    ],
    motsCles: ["retard", "horaires", "continuité", "dialogue", "hiérarchie"],
    source: "Organisation du travail ; mises en situation types"
  },

  {
    id: "x-erreur-saisie",
    cat: 5,
    theme: "L'erreur de saisie",
    statut: "officiel",
    question: "Vous découvrez que vous avez saisi une mauvaise adresse ou un mauvais montant dans un dossier. Que faites-vous ?",
    duree: 60,
    enjeu: "Situation typique du métier : le jury veut voir un réflexe de signalement et de correction, pas une tentative de dissimulation.",
    reponse: [
      "Je vérifie d'abord l'erreur dans l'outil et dans les pièces du dossier, pour être sûr de ce qui a été saisi et de ce qui aurait dû l'être. Je note la date, le dossier et la nature de l'erreur.",
      "Je le signale immédiatement à mon responsable ou au collègue qui peut corriger, selon la procédure. Je ne modifie pas une donnée sensible sans autorisation, et je ne cherche pas à effacer la trace. Je vérifie ensuite que la correction a été enregistrée.",
      "Si l'erreur a eu des conséquences pour l'usager — un courrier envoyé à la mauvaise adresse, un montant erroné — je le signale pour qu'une information ou une régularisation soit faite. **Le plus grave n'est pas l'erreur, c'est le silence** : une donnée fausse peut produire une relance, une pénalité ou une décision injuste."
    ],
    attentes: [
      "Vérification, signalement immédiat, correction et suivi.",
      "La conscience des conséquences pour l'usager."
    ],
    eviter: [
      "Corriger seul et ne rien dire.",
      "Attendre de voir si quelqu'un s'en aperçoit."
    ],
    relances: [
      "Comment évitez-vous ce type d'erreur ?",
      "Que faites-vous si la correction est impossible ?"
    ],
    motsCles: ["erreur", "saisie", "signalement", "correction", "usager"],
    source: "Métier d'agent administratif ; mises en situation types"
  },

  {
    id: "x-double",
    cat: 5,
    theme: "Le double paiement",
    statut: "probable",
    question: "Un usager vous signale qu'il a payé deux fois la même somme. Que faites-vous ?",
    duree: 60,
    enjeu: "Situation financière concrète : le jury vérifie votre rigueur et votre capacité à ne pas promettre un remboursement que vous ne pouvez pas décider.",
    reponse: [
      "Je l'écoute, je relève les éléments : date, montant, moyen de paiement, références du dossier. Je vérifie dans les outils si le double paiement est constaté ou seulement déclaré, sans donner de conclusion avant d'avoir les faits.",
      "Je lui explique la suite : la demande sera instruite, un remboursement peut être proposé si le trop-perçu est confirmé, et il recevra une réponse. Je ne promets ni le montant ni le délai, car la décision ne m'appartient pas. Je l'oriente vers le service compétent et je lui indique les pièces à fournir.",
      "Je trace la demande et je la transmets au bon interlocuteur. **La rigueur comptable protège l'usager et le service** : un remboursement versé à tort est aussi difficile à récupérer qu'un trop-perçu à faire rembourser."
    ],
    attentes: [
      "Vérification factuelle avant toute promesse.",
      "Orientation et traçabilité de la demande."
    ],
    eviter: [
      "Annoncer un remboursement immédiat sans vérification.",
      "Dire à l'usager que ce n'est pas votre problème."
    ],
    relances: [
      "Quelles pièces demandez-vous ?",
      "Que faites-vous si le double paiement est confirmé ?"
    ],
    motsCles: ["double paiement", "trop-perçu", "remboursement", "traçabilité", "rigueur"],
    source: "Procédures de recouvrement et de remboursement DGFiP"
  },

  {
    id: "x-delai",
    cat: 5,
    theme: "Le délai impossible",
    statut: "probable",
    question: "Votre responsable vous confie un dossier à rendre le jour même, alors que vous avez déjà une file d'attente. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury teste votre capacité à arbitrer et à alerter sans dramatiser.",
    reponse: [
      "Je regarde ce qui est réellement prioritaire : y a-t-il un délai légal, un usager qui attend, un risque financier ? Je ne dis pas oui mécaniquement si je sais que je ne pourrai pas tenir.",
      "Je vais voir mon responsable avec une information claire : « Je peux traiter ce dossier, mais l'accueil va attendre ; ou je le fais après la file, en fin de journée. Qu'est-ce que vous préférez ? » Je propose une solution, je ne me contente pas de dire que c'est impossible.",
      "Si je dois faire les deux, je découpe et je préviens des délais réels. Je note ce qui n'a pas été fait pour la relève. **Tenir un délai impossible en silence conduit à l'erreur ou à l'épuisement** ; l'alerte à temps permet à la hiérarchie d'arbitrer."
    ],
    attentes: [
      "Arbitrage explicite et proposition de solution.",
      "Alerte précoce plutôt que promesse intenable."
    ],
    eviter: [
      "Accepter tout et rendre un travail bâclé.",
      "Refuser sans proposer d'alternative."
    ],
    relances: [
      "Comment priorisez-vous ?",
      "Et si votre responsable maintient l'échéance ?"
    ],
    motsCles: ["délai", "priorité", "arbitrage", "alerte", "qualité"],
    source: "Mises en situation types, organisation du travail"
  },

  {
    id: "x-ordre",
    cat: 5,
    theme: "L'ordre contestable",
    statut: "probable",
    question: "Votre responsable vous demande de traiter en priorité le dossier d'un ami à lui. Que faites-vous ?",
    duree: 60,
    enjeu: "Mise en situation de déontologie : elle teste votre capacité à refuser un favoritisme sans insubordination.",
    reponse: [
      "Je demande d'abord une précision : s'agit-il d'une urgence réelle, d'un dossier bloqué, d'une demande de sa hiérarchie ? Si le motif est professionnel, je le traite comme les autres, selon les règles de priorité.",
      "Si la demande vise à **favoriser une personne**, je l'explique calmement : « Je peux traiter ce dossier selon l'ordre normal, mais je ne peux pas lui donner une priorité liée à vos relations. » Je ne modifie pas le rang de traitement et je ne le cache pas.",
      "Si l'instruction persiste, je demande une confirmation écrite ou je m'adresse au niveau supérieur, selon les circuits prévus. **Un agent ne peut pas être complice d'un favoritisme**, même à la demande de son chef : c'est une question d'égalité devant le service public et de probité."
    ],
    attentes: [
      "Distinction entre urgence professionnelle et favoritisme.",
      "Refus argumenté et recours au circuit hiérarchique."
    ],
    eviter: [
      "Exécuter pour ne pas contrarier son chef.",
      "Refuser sèchement sans vérifier le motif."
    ],
    relances: [
      "Et si votre chef insiste ?",
      "Que risque l'agent qui accepte ?"
    ],
    motsCles: ["favoritisme", "ordre", "égalité", "probité", "hiérarchie"],
    source: "Déontologie ; égalité de traitement des usagers"
  },

  {
    id: "x-journaliste",
    cat: 5,
    theme: "Le journaliste",
    statut: "probable",
    question: "Un journaliste vous appelle pour obtenir des informations sur un dossier fiscal. Que faites-vous ?",
    duree: 45,
    enjeu: "Le jury vérifie votre réflexe : ni fuite, ni agressivité, ni improvisation.",
    reponse: [
      "Je ne confirme ni n'infirme aucune information, même indirectement. Je ne donne pas de nom, de montant, de date ni de détail qui permettrait d'identifier une personne. Le secret fiscal s'applique à toute demande extérieure, quel que soit l'interlocuteur.",
      "Je réponds courtoisement que je ne suis pas habilité à communiquer sur ce sujet et je propose d'orienter vers le service de communication ou la direction, qui est compétente pour les relations avec la presse. Je note le nom du journaliste, sa demande et l'heure de l'appel.",
      "J'en informe immédiatement ma hiérarchie. Je ne commente pas l'appel avec des collègues, et je ne publie rien sur les réseaux sociaux. **La réponse à une sollicitation extérieure ne s'improvise pas** : elle relève d'un circuit identifié."
    ],
    attentes: [
      "Refus de toute information, même partielle.",
      "Orientation vers le service compétent et information de la hiérarchie."
    ],
    eviter: [
      "Répondre « je ne sais pas » tout en donnant un détail.",
      "Raccrocher sans orienter ni signaler."
    ],
    relances: [
      "Et si le journaliste insiste ?",
      "Qui est habilité à parler à la presse ?"
    ],
    motsCles: ["journaliste", "secret fiscal", "communication", "hiérarchie", "trace"],
    source: "Secret professionnel ; relations avec la presse"
  },

  {
    id: "x-menace",
    cat: 5,
    theme: "L'usager menaçant",
    statut: "probable",
    question: "Un usager vous menace physiquement. Que faites-vous ?",
    duree: 45,
    enjeu: "Situation de sécurité : le jury attend des réflexes simples et hiérarchisés, pas un discours.",
    reponse: [
      "Je ne réponds pas à la menace et je ne reste pas seul face à la personne. Je me place en retrait, je garde une issue accessible et j'appelle un collègue ou un agent de sécurité. La priorité est la sécurité des personnes, pas la poursuite de l'entretien.",
      "Je demande à l'usager de quitter les lieux ou je fais appel aux forces de l'ordre si la menace est immédiate. Je ne tente pas de le maîtriser moi-même et je ne provoque pas d'escalade verbale.",
      "Après l'incident, j'en informe immédiatement ma hiérarchie, je rédige un compte rendu factuel et je demande, si nécessaire, la **protection fonctionnelle** et un signalement. **Un agent menacé doit être protégé**, et l'incident doit être traité pour éviter qu'il se reproduise."
    ],
    attentes: [
      "Sécurité d'abord, retrait et appel à de l'aide.",
      "Compte rendu, information de la hiérarchie et protection."
    ],
    eviter: [
      "Rester seul et tenter de calmer physiquement la personne.",
      "Minimiser l'incident et ne pas le signaler."
    ],
    relances: [
      "Que notez-vous dans le compte rendu ?",
      "Qu'est-ce que la protection fonctionnelle ?"
    ],
    motsCles: ["menace", "sécurité", "retrait", "protection fonctionnelle", "compte rendu"],
    source: "Sécurité des agents ; protection fonctionnelle"
  },

  {
    id: "x-donnees",
    cat: 5,
    theme: "La perte de données",
    statut: "probable",
    question: "Vous perdez une clé USB contenant des données d'usagers. Que faites-vous ?",
    duree: 60,
    enjeu: "Mise en situation RGPD : le jury attend un signalement rapide et des mesures de protection.",
    reponse: [
      "Je préviens immédiatement ma hiérarchie et le service compétent, sans attendre de savoir si la clé sera retrouvée. Je décris ce qui était stocké, le nombre de personnes concernées et les circonstances de la perte.",
      "Je ne tente pas de masquer l'incident et je ne cherche pas à récupérer seul les données. Le service évalue le risque, peut informer la personne responsable de la protection des données et, si le risque est élevé, les personnes concernées. Je participe à la recherche et au compte rendu.",
      "Je tire ensuite les conséquences : les données sensibles ne doivent pas être transportées sur une clé personnelle ou non chiffrée. **Une perte de données n'est pas seulement une maladresse** : c'est une atteinte possible à la vie privée des usagers, et le signalement rapide limite les conséquences."
    ],
    attentes: [
      "Signalement immédiat et factuel.",
      "Connaissance du risque RGPD et des mesures de sécurité."
    ],
    eviter: [
      "Attendre de voir si la clé réapparaît.",
      "Minimiser parce que la clé était dans un sac fermé."
    ],
    relances: [
      "Que faites-vous des données au quotidien ?",
      "Qui est le référent RGPD du service ?"
    ],
    motsCles: ["RGPD", "données personnelles", "clé USB", "signalement", "sécurité"],
    source: "RGPD ; obligations de sécurité des données"
  },

  {
    id: "x-pic",
    cat: 5,
    theme: "Le pic d'activité",
    statut: "probable",
    question: "Nous sommes en pleine campagne déclarative et la file d'attente s'allonge. Comment gérez-vous ?",
    duree: 60,
    enjeu: "Situation récurrente aux Finances publiques : le jury cherche une organisation concrète et le respect de l'usager.",
    reponse: [
      "Je préviens les usagers du temps d'attente réel plutôt que de laisser l'incertitude s'installer, et je vérifie que chacun a les pièces nécessaires pour éviter un second passage. Je propose les services en ligne ou un rendez-vous à ceux dont la demande peut attendre.",
      "Avec l'accord de mon responsable, j'organise la file : demandes simples d'un côté, dossiers longs de l'autre, et je m'appuie sur les collègues disponibles. Je ne saute pas les étapes de vérification sous prétexte de rapidité, car une erreur coûtera plus de temps ensuite.",
      "Je signale les tensions à ma hiérarchie — personnel insuffisant, outil lent, affluence inhabituelle — pour qu'elle puisse renforcer l'accueil. **La rapidité ne doit pas se faire au détriment de la qualité ni de l'égalité de traitement.**"
    ],
    attentes: [
      "Information des usagers et tri des demandes.",
      "Priorité à la qualité et alerte sur les moyens."
    ],
    eviter: [
      "Accélérer en supprimant les vérifications.",
      "Laisser la file sans information."
    ],
    relances: [
      "Comment triez-vous les demandes ?",
      "Que faites-vous si un usager s'impatiente ?"
    ],
    motsCles: ["pic d'activité", "file d'attente", "organisation", "qualité", "alerte"],
    source: "Organisation de l'accueil DGFiP ; campagnes déclaratives"
  },

  {
    id: "x-discrimination",
    cat: 5,
    theme: "Les propos discriminatoires",
    statut: "probable",
    question: "Un usager tient des propos racistes ou discriminatoires envers un autre usager. Que faites-vous ?",
    duree: 60,
    enjeu: "Situation sensible : le jury attend une réaction ferme, protectrice et non conflictuelle.",
    reponse: [
      "Je m'interpose calmement mais fermement : « Ces propos ne sont pas acceptables ici. Je suis là pour traiter votre demande, pas pour cela. » Je protège d'abord la personne visée, je vérifie qu'elle va bien et je lui propose un autre espace ou un autre rendez-vous.",
      "Je ne laisse pas passer les propos sous prétexte de ne pas créer de conflit. Si l'usager continue, je mets fin à l'entretien et je demande l'appui d'un responsable ou, si nécessaire, des forces de l'ordre. Je note les faits.",
      "J'en informe ma hiérarchie et je signale l'incident. **Le service public doit être un espace sûr pour tous** : la neutralité de l'agent n'oblige pas à tolérer une atteinte à la dignité d'un usager."
    ],
    attentes: [
      "Protection de la personne visée et limite claire.",
      "Information de la hiérarchie et traçabilité."
    ],
    eviter: [
      "Ne rien dire pour éviter d'envenimer.",
      "Répondre par des insultes ou entrer dans un débat."
    ],
    relances: [
      "Et si les propos visent un collègue ?",
      "Que notez-vous dans le compte rendu ?"
    ],
    motsCles: ["discrimination", "dignité", "protection", "limite", "signalement"],
    source: "Valeurs du service public ; lutte contre les discriminations"
  },

  {
    id: "x-harcelement",
    cat: 5,
    theme: "Le harcèlement",
    statut: "probable",
    question: "Vous êtes témoin de propos ou de comportements harcelants d'un collègue envers un autre. Que faites-vous ?",
    duree: 60,
    enjeu: "Le jury évalue votre courage professionnel et votre connaissance des circuits de signalement.",
    reponse: [
      "Je ne reste pas spectateur. Je commence par soutenir la personne visée, sans l'obliger à raconter ni à porter plainte à ma place. Je lui rappelle qu'elle peut s'adresser aux représentants du personnel, au médecin de prévention, au service RH ou au référent harcèlement.",
      "Si les faits sont répétés et que je les constate, je les note précisément — dates, propos, témoins — et je les signale à ma hiérarchie ou au circuit dédié. Je ne diffuse pas les faits dans l'équipe et je ne prends pas parti publiquement.",
      "Je sais que le harcèlement peut être moral ou sexuel et qu'il engage la responsabilité de l'employeur. **Se taire, c'est laisser la situation s'installer** ; mais parler doit se faire au bon endroit, avec des faits, pour protéger la personne et permettre une enquête équitable."
    ],
    attentes: [
      "Soutien à la personne et connaissance des circuits.",
      "Signalement factuel et confidentialité."
    ],
    eviter: [
      "Minimiser en disant que c'est de l'humour.",
      "Répandre les faits dans l'équipe."
    ],
    relances: [
      "Qui peut être saisi ?",
      "Que faites-vous si le harceleur est votre supérieur ?"
    ],
    motsCles: ["harcèlement", "signalement", "RH", "témoin", "protection"],
    source: "Code du travail et statut ; prévention du harcèlement"
  }

]);
