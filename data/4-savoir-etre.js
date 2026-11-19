/*
  BANQUE — catégorie 4 : Savoir-être et déontologie (14 questions)
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "s-secret",
    cat: 4,
    theme: "Le secret professionnel",
    statut: "probable",
    question: "Qu'est-ce que le secret professionnel ?",
    duree: 75,
    enjeu: "Question de déontologie fondamentale : la réponse doit être exacte, pas seulement morale.",
    reponse: [
      "Le secret professionnel interdit à l'agent de **révéler les informations dont il a connaissance dans l'exercice de ses fonctions** et qui concernent la vie privée, la situation fiscale ou les données personnelles des usagers. En matière fiscale, il est renforcé par le **secret fiscal** : les agents sont tenus à une obligation de confidentialité sous peine de sanctions pénales et disciplinaires.",
      "Concrètement, je ne consulte un dossier que si j'en ai besoin pour mon travail, je ne le commente pas en dehors du service, je ne laisse pas un écran ouvert, je ne transmets pas de pièce à un tiers non habilité, et je ne plaisante pas sur la situation d'un usager. Le secret s'applique aussi entre collègues qui n'ont pas besoin de l'information.",
      "Le secret n'empêche pas de **rendre compte à sa hiérarchie** ni de coopérer avec les services habilités dans un cadre légal. Ce n'est pas une règle pour cacher des fautes, mais pour protéger les personnes et la confiance dans l'administration."
    ],
    attentes: [
      "La distinction secret professionnel / secret fiscal.",
      "Des gestes concrets de protection des données."
    ],
    eviter: [
      "Réduire le secret à une simple politesse.",
      "Croire que le secret empêche de signaler une anomalie."
    ],
    relances: [
      "Un collègue vous demande un dossier : que faites-vous ?",
      "Que dites-vous à un proche qui vous interroge ?"
    ],
    motsCles: ["secret professionnel", "secret fiscal", "confidentialité", "données", "sanctions"],
    source: "Code pénal, art. 226-13 ; livre des procédures fiscales, art. L.103"
  },

  {
    id: "s-secret-fiscal",
    cat: 4,
    theme: "Le secret fiscal en pratique",
    statut: "probable",
    question: "Un ami vous demande des informations sur un contribuable qu'il connaît. Que faites-vous ?",
    duree: 60,
    enjeu: "Mise en situation de déontologie : le jury attend un refus clair, immédiat et non négociable.",
    reponse: [
      "Je refuse, tout de suite et sans ambiguïté : « Je ne peux pas te répondre, ces informations sont couvertes par le secret professionnel. » Je ne vérifie même pas le dossier pour « voir » : consulter une donnée sans motif professionnel est déjà une faute.",
      "Je n'ajoute aucun commentaire sur la personne, je ne confirme ni n'infirme rien, et je ne propose pas de détour. Si l'ami insiste, je le redis calmement et je change de sujet. Je ne transforme pas ce refus en conflit : c'est une règle du métier, pas un manque d'amitié.",
      "Je sais que la violation du secret fiscal expose à des **sanctions disciplinaires et pénales**, et qu'elle engage la responsabilité du service. Si la demande était formulée par un tiers insistant ou par un collègue, j'en informerais ma hiérarchie. **La loyauté envers l'institution prime sur la familiarité.**"
    ],
    attentes: [
      "Un refus immédiat, sans justification détaillée ni exception.",
      "La conscience du caractère pénal de la violation."
    ],
    eviter: [
      "Répondre « je regarde mais je ne dis rien ».",
      "Minimiser en disant que ce n'est pas grave entre amis."
    ],
    relances: [
      "Et si la personne est en difficulté et que vous voulez aider ?",
      "Que faites-vous si un collègue insiste ?"
    ],
    motsCles: ["secret fiscal", "refus", "déontologie", "sanction", "loyauté"],
    source: "Obligations déontologiques des fonctionnaires ; secret fiscal"
  },

  {
    id: "s-reserve",
    cat: 4,
    theme: "Le devoir de réserve",
    statut: "probable",
    question: "Qu'est-ce que le devoir de réserve ?",
    duree: 75,
    enjeu: "Notion souvent confondue avec la neutralité : le jury vérifie que vous savez la définir et l'appliquer.",
    reponse: [
      "Le devoir de réserve est l'obligation de **mesure dans l'expression publique** de ses opinions, en particulier politiques, syndicales ou religieuses, lorsque cette expression peut être rattachée à l'administration ou porter atteinte à sa neutralité et à sa réputation.",
      "Il ne supprime pas la liberté d'opinion ni l'engagement syndical : un agent peut voter, adhérer, manifester ou s'exprimer, mais il ne doit pas laisser croire qu'il parle au nom du service, ni attaquer publiquement l'institution ou sa hiérarchie de manière injurieuse. La réserve est plus forte pour les agents qui occupent des fonctions d'autorité ou d'accueil.",
      "En pratique, je ne publie pas sur les réseaux sociaux des propos politiques en me présentant comme agent de la DGFiP, je ne commente pas les décisions du service en public, et je réserve mes désaccords aux **circuits internes** : hiérarchie, représentants du personnel, recours. La réserve protège la crédibilité de l'administration et la sérénité de l'équipe."
    ],
    attentes: [
      "La distinction entre liberté d'opinion et expression publique.",
      "Une application concrète, notamment sur les réseaux sociaux."
    ],
    eviter: [
      "Dire que le fonctionnaire n'a pas le droit d'avoir d'opinion.",
      "Confondre réserve, secret et neutralité."
    ],
    relances: [
      "Un agent peut-il manifester ?",
      "Que diriez-vous sur les réseaux sociaux de votre travail ?"
    ],
    motsCles: ["réserve", "liberté d'opinion", "réseaux sociaux", "institution", "hiérarchie"],
    source: "Statut général des fonctionnaires ; obligations déontologiques"
  },

  {
    id: "s-neutralite",
    cat: 4,
    theme: "La neutralité",
    statut: "probable",
    question: "Comment rester neutre face à un usager ?",
    duree: 75,
    enjeu: "Le jury évalue votre capacité à traiter tout le monde de la même façon, y compris quand l'usager est sympathique ou désagréable.",
    reponse: [
      "La neutralité, c'est **appliquer la même règle à tout le monde**, sans tenir compte des opinions, de l'origine, de la religion, du sexe, de l'âge ou de la situation sociale de la personne. Elle ne signifie pas être froid : on peut être courtois et attentif tout en restant strictement égal dans le traitement.",
      "Concrètement, je ne donne pas de rendez-vous prioritaire à quelqu'un parce qu'il est insistant, je ne accélère pas un dossier parce que l'usager est un ami, je ne ralentis pas parce qu'il est désagréable, et je ne commente pas ses opinions. Si une situation personnelle justifie un traitement particulier, c'est le **droit applicable** qui le prévoit, pas mon appréciation.",
      "Face à un usager qui me demande mon avis politique ou religieux, je réponds que ce n'est pas le sujet et je reviens à sa démarche. **La neutralité est ce qui rend la règle crédible** : si elle varie selon la personne, elle n'est plus une règle."
    ],
    attentes: [
      "L'égalité de traitement, y compris dans les détails.",
      "Une distinction claire entre neutralité et froideur."
    ],
    eviter: [
      "Dire qu'on traite mieux les personnes polies.",
      "Donner son opinion personnelle sur un sujet politique."
    ],
    relances: [
      "Et si l'usager est un proche ?",
      "Comment refusez-vous sans être brutal ?"
    ],
    motsCles: ["neutralité", "égalité", "impartialité", "usagers", "discrétion"],
    source: "Statut général ; charte de déontologie du service public"
  },

  {
    id: "s-laicite",
    cat: 4,
    theme: "La laïcité",
    statut: "probable",
    question: "Qu'est-ce que la laïcité dans un service public ?",
    duree: 75,
    enjeu: "Sujet sensible : le jury attend une définition juridique et une attitude professionnelle, pas un débat.",
    reponse: [
      "La laïcité garantit la **liberté de conscience** et l'égalité de tous devant le service public. L'État ne reconnaît ni ne subventionne aucun culte, et le service public doit fonctionner indépendamment des convictions religieuses.",
      "Pour l'agent, cela signifie une **neutralité religieuse** : pas de signe religieux ostensible dans l'exercice des fonctions, pas de prosélytisme, pas de traitement différencié selon la religion de l'usager. Pour l'usager, la liberté de conscience est garantie : il peut exprimer sa religion dans les limites de l'ordre public et du fonctionnement normal du service.",
      "En pratique, si un usager demande un traitement particulier au nom de sa religion, j'applique la règle commune et j'explique calmement. Si un collègue fait du prosélytisme, j'en parle à ma hiérarchie. **La laïcité n'est pas l'hostilité aux religions** : c'est la condition d'un accueil égal pour tous."
    ],
    attentes: [
      "Liberté de conscience et neutralité du service.",
      "Une distinction claire entre agent et usager."
    ],
    eviter: [
      "Confondre laïcité et athéisme d'État.",
      "Entrer dans un débat théologique avec l'usager."
    ],
    relances: [
      "Un usager porte un signe religieux : que faites-vous ?",
      "Un collègue prie visiblement à l'accueil : que faites-vous ?"
    ],
    motsCles: ["laïcité", "neutralité", "liberté de conscience", "prosélytisme", "égalité"],
    source: "Loi de 1905 ; Constitution ; charte de la laïcité dans les services publics"
  },

  {
    id: "s-probite",
    cat: 4,
    theme: "La probité",
    statut: "probable",
    question: "Qu'est-ce que la probité et pourquoi est-elle essentielle aux Finances publiques ?",
    duree: 75,
    enjeu: "Question de déontologie financière : le jury veut voir que vous comprenez les risques propres à une administration qui manipule de l'argent et des données.",
    reponse: [
      "La probité est l'obligation de **ne pas utiliser sa fonction pour obtenir un avantage personnel** et de ne pas se placer en situation de conflit d'intérêts. Elle interdit les cadeaux, les commissions, les favoritismes et toute utilisation des moyens du service à des fins privées.",
      "Aux Finances publiques, la probité est centrale : les agents traitent des données fiscales, des paiements, des remises, des échéanciers et parfois des espèces. Un agent qui accepte une enveloppe pour accélérer un remboursement, ou qui modifie un dossier pour un proche, commet une faute pénale et détruit la confiance dans l'institution.",
      "En pratique, je refuse tout cadeau ou avantage, je signale une situation de conflit d'intérêts, je ne touche pas à un dossier qui concerne un proche et je respecte les procédures de contrôle. **La probité n'est pas seulement une qualité morale : c'est une condition de légitimité de l'impôt.**"
    ],
    attentes: [
      "Le lien entre probité, confiance et consentement à l'impôt.",
      "Des exemples concrets de refus et de signalement."
    ],
    eviter: [
      "Répondre que l'agent est honnête « par nature ».",
      "Minimiser les petits cadeaux."
    ],
    relances: [
      "Un usager vous offre une bouteille : que faites-vous ?",
      "Qu'est-ce qu'un conflit d'intérêts ?"
    ],
    motsCles: ["probité", "intégrité", "conflit d'intérêts", "cadeaux", "confiance"],
    source: "Statut général ; obligations déontologiques ; politique de prévention de la corruption"
  },

  {
    id: "s-equipe",
    cat: 4,
    theme: "Le travail en équipe",
    statut: "probable",
    question: "Comment travaillez-vous en équipe ?",
    duree: 60,
    enjeu: "Le jury cherche une attitude concrète, pas une déclaration d'amour au collectif.",
    reponse: [
      "Je travaille en équipe en **clarifiant ma part** : je sais ce que je dois faire, je le fais dans les délais, et je préviens si je ne peux pas. Je partage l'information utile pour que le dossier puisse être repris par un collègue, ce qui est indispensable dans un service où les absences sont fréquentes.",
      "Je suis attentif à la répartition des tâches : si un collègue est en difficulté, je propose de l'aide sans le faire à sa place ; si je suis en difficulté, je demande de l'aide assez tôt. Je respecte les compétences de chacun, y compris celles des agents plus expérimentés, et je ne commente pas les erreurs devant les usagers.",
      "En cas de désaccord, je commence par en parler directement à la personne, puis, si le désaccord persiste et gêne le service, je passe par la hiérarchie. **Un bon collectif n'est pas un collectif sans conflit** : c'est un collectif où les problèmes se disent et se règlent."
    ],
    attentes: [
      "Une contribution personnelle claire et des relais.",
      "Une méthode de gestion des désaccords."
    ],
    eviter: [
      "« Je m'entends avec tout le monde » sans exemple.",
      "Dire qu'on préfère travailler seul."
    ],
    relances: [
      "Avez-vous déjà aidé un collègue en difficulté ?",
      "Que faites-vous si un collègue ne fait pas sa part ?"
    ],
    motsCles: ["équipe", "entraide", "transmission", "désaccord", "hiérarchie"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "s-hierarchie",
    cat: 4,
    theme: "La relation hiérarchique",
    statut: "probable",
    question: "Quelle est votre relation à la hiérarchie ?",
    duree: 60,
    enjeu: "Le jury vérifie que vous savez obéir sans être passif, et alerter sans être insubordonné.",
    reponse: [
      "Je considère la hiérarchie comme un **cadre de responsabilité** : elle fixe les priorités, contrôle la régularité et protège l'agent. Mon rôle est d'exécuter les instructions légitimes, de rendre compte de ce que je fais et de signaler les difficultés avant qu'elles ne deviennent des problèmes.",
      "Je ne suis pas passif : si je constate une erreur ou une difficulté, je le dis à la personne concernée, avec des faits et une proposition. Si l'instruction me paraît contestable, je demande une explication et je propose une alternative, mais je ne refuse pas d'exécuter un ordre régulier et je ne contourne pas la voie hiérarchique.",
      "Si l'ordre était **manifestement illégal** — par exemple modifier un dossier ou communiquer une donnée confidentielle — je ne l'exécuterais pas et je le signalerais. Un agent doit être loyal, mais sa loyauté s'exerce dans le respect de la loi et de la déontologie."
    ],
    attentes: [
      "Loyauté, rendu compte et capacité d'alerte.",
      "La limite de l'ordre manifestement illégal."
    ],
    eviter: [
      "« J'obéis à tout » ou « je n'aime pas qu'on me donne des ordres ».",
      "Confondre respect hiérarchique et soumission aveugle."
    ],
    relances: [
      "Et si votre chef vous demande quelque chose d'illégal ?",
      "Comment signalez-vous une erreur de votre chef ?"
    ],
    motsCles: ["hiérarchie", "loyauté", "rendu compte", "alerte", "ordre illégal"],
    source: "Statut général ; obligations déontologiques"
  },

  {
    id: "s-initiative",
    cat: 4,
    theme: "L'initiative",
    statut: "probable",
    question: "Savez-vous prendre des initiatives ?",
    duree: 60,
    enjeu: "Le jury veut une initiative cadrée, pas un goût du risque.",
    reponse: [
      "Oui, mais dans mon **périmètre**. Je distingue l'initiative qui améliore le service — proposer une organisation, préparer une réponse, anticiper un dossier — de la décision qui ne m'appartient pas. Un agent de catégorie C peut prendre des initiatives : il ne peut pas engager le service à la place de sa hiérarchie.",
      "Par exemple, si je constate que des usagers posent toujours la même question, je peux proposer à mon responsable une fiche d'information ou une phrase type. Je le fais avec une proposition concrète et je mesure l'effet. Je préfère demander un accord avant de modifier une procédure.",
      "En cas d'urgence, j'agis dans les limites de ma fonction, puis je rends compte immédiatement. **L'initiative utile est celle qui est tracée et partagée**, pas celle qui se fait en secret."
    ],
    attentes: [
      "Une initiative concrète, améliorante et tracée.",
      "La conscience des limites de son niveau de responsabilité."
    ],
    eviter: [
      "« Je prends toujours des initiatives » sans cadre.",
      "« Je ne prends jamais d'initiative, je suis un exécutant »."
    ],
    relances: [
      "Donnez un exemple d'initiative que vous avez prise.",
      "Que faites-vous sans attendre votre chef ?"
    ],
    motsCles: ["initiative", "périmètre", "proposition", "urgence", "rendu compte"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "s-stress",
    cat: 4,
    theme: "La gestion du stress",
    statut: "probable",
    question: "Comment gérez-vous le stress ?",
    duree: 60,
    enjeu: "Le jury teste votre lucidité : le stress est normal, la question est ce que vous en faites.",
    reponse: [
      "Je commence par **identifier ce qui stresse** : une échéance, un usager, une erreur possible, une surcharge. Une fois identifié, je peux agir : découper la tâche, demander une priorisation à ma hiérarchie, préparer mes réponses, ou simplement ralentir ma respiration avant un entretien difficile.",
      "Dans une situation d'urgence, je reviens aux fondamentaux : sécuriser les personnes, ne pas prendre de décision hors cadre, noter ce qui s'est passé et alerter. Le stress me fait perdre de la nuance, pas mes procédures ; c'est pourquoi **les procédures écrites sont un appui**, pas une contrainte.",
      "Je sais aussi reconnaître mes limites : si une charge devient durablement excessive, j'en parle à mon responsable plutôt que de tenir jusqu'à l'épuisement. Un agent qui craque ne rend pas service à l'équipe."
    ],
    attentes: [
      "Des techniques concrètes et un recours à la hiérarchie.",
      "La conscience que le stress ne justifie pas un écart de procédure."
    ],
    eviter: [
      "« Je ne suis jamais stressé ».",
      "Raconter une situation de burn-out sans recul."
    ],
    relances: [
      "Comment vous préparez-vous à un oral ?",
      "Que faites-vous la veille d'une échéance difficile ?"
    ],
    motsCles: ["stress", "priorisation", "procédure", "alerte", "équilibre"],
    source: "Guide ENFiP 2026, gestion du stress ; questions classiques"
  },

  {
    id: "s-priorites",
    cat: 4,
    theme: "Les priorités",
    statut: "probable",
    question: "Comment gérez-vous plusieurs tâches en même temps ?",
    duree: 60,
    enjeu: "Le jury cherche une méthode de priorisation, pas une aptitude au multitâche.",
    reponse: [
      "Je commence par **lister ce qui est demandé**, puis je classe selon trois critères : l'échéance, l'impact pour l'usager et le risque juridique ou financier. Une réponse à un usager qui attend au guichet passe avant un classement, un dossier dont le délai légal court passe avant une tâche de forme.",
      "Si deux urgences se présentent, je les traite dans l'ordre et je préviens ma hiérarchie pour qu'elle arbitre si nécessaire. Je note ce qui reste à faire pour ne pas l'oublier et pour que le service puisse reprendre le dossier en mon absence.",
      "Je me méfie du multitâche : passer d'une tâche à l'autre sans finir augmente les erreurs. **Je préfère finir une tâche courte, la tracer, puis passer à la suivante**, quitte à demander un relais quand la file d'attente s'allonge."
    ],
    attentes: [
      "Une méthode explicite de priorisation.",
      "La traçabilité et le recours à l'arbitrage hiérarchique."
    ],
    eviter: [
      "« Je fais tout en même temps ».",
      "Prioriser uniquement selon ce qui est le plus agréable."
    ],
    relances: [
      "Quelle tâche laisseriez-vous de côté ?",
      "Comment gérez-vous une file d'attente ?"
    ],
    motsCles: ["priorités", "échéance", "risque", "traçabilité", "arbitrage"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "s-accueil",
    cat: 4,
    theme: "Les qualités de l'accueil",
    statut: "probable",
    question: "Quelles qualités faut-il pour accueillir du public ?",
    duree: 60,
    enjeu: "Question simple en apparence : le jury attend des qualités incarnées, pas une liste abstraite.",
    reponse: [
      "Il faut d'abord de l'**écoute** : laisser la personne expliquer sa situation, reformuler pour vérifier qu'on a compris, puis répondre. Ensuite de la **clarté** : parler simplement, sans jargon, et indiquer l'étape suivante. Enfin de la **patience**, parce que l'usager peut être stressé, pressé ou en difficulté avec le numérique.",
      "Il faut aussi de la **rigueur** : ne pas inventer une réponse, vérifier dans le dossier ou demander à un collègue, et tracer ce qui a été dit. Et de la **maîtrise de soi** : ne pas répondre à l'agressivité par l'agressivité, savoir poser une limite et appeler un responsable si nécessaire.",
      "À cela s'ajoute la **discrétion** : l'accueil donne accès à des informations personnelles, qu'on ne commente pas et qu'on ne répète pas. Ces qualités ne sont pas innées : elles s'apprennent par l'expérience, les formations et les retours des collègues."
    ],
    attentes: [
      "Écoute, clarté, patience, rigueur, maîtrise de soi.",
      "La dimension de confidentialité de l'accueil."
    ],
    eviter: [
      "« Il faut aimer les gens », sans autre contenu.",
      "Oublier la rigueur et la traçabilité."
    ],
    relances: [
      "Laquelle de ces qualités vous manque le plus ?",
      "Comment progressez-vous sur ce point ?"
    ],
    motsCles: ["accueil", "écoute", "clarté", "patience", "discrétion"],
    source: "Fiches métiers DGFiP ; questions classiques d'admission"
  },

  {
    id: "s-conflit",
    cat: 4,
    theme: "Le conflit",
    statut: "probable",
    question: "Comment réagissez-vous à un conflit avec un collègue ?",
    duree: 60,
    enjeu: "Le jury évalue votre maturité relationnelle et votre capacité à ne pas polluer le service.",
    reponse: [
      "Je commence par **baisser la tension** : je ne réponds pas à chaud, je propose de reparler du sujet à un moment calme et, si possible, dans un lieu où les usagers ne nous entendent pas. Un conflit devant un usager est doublement grave : il dégrade le service et l'image de l'administration.",
      "Ensuite, je cherche les faits : ce qui a été dit, ce qui a été fait, ce qui pose problème. J'écoute la version de l'autre et je reformule la mienne sans accuser. Souvent, le conflit vient d'une ambiguïté de répartition ou d'un malentendu, et une clarification suffit.",
      "Si le désaccord persiste ou s'il s'agit d'un comportement inacceptable — insultes, harcèlement, discrimination — j'en informe ma hiérarchie. **Je ne règle pas un conflit en le laissant pourrir** : je le traite au bon niveau, avec les faits et pas les rumeurs."
    ],
    attentes: [
      "Apaissement, faits, discussion directe puis hiérarchie.",
      "La distinction entre désaccord et comportement inacceptable."
    ],
    eviter: [
      "« Je ne réponds jamais, je laisse passer ».",
      "Raconter un conflit en désignant un coupable sans recul."
    ],
    relances: [
      "Avez-vous déjà dû alerter votre hiérarchie ?",
      "Comment protégez-vous l'usager d'un conflit interne ?"
    ],
    motsCles: ["conflit", "écoute", "faits", "hiérarchie", "usager"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "s-erreur",
    cat: 4,
    theme: "L'erreur",
    statut: "probable",
    question: "Comment réagissez-vous quand vous vous trompez ?",
    duree: 60,
    enjeu: "Le jury teste votre rapport à l'erreur dans une administration où une saisie peut avoir des conséquences financières.",
    reponse: [
      "Je le signale **immédiatement**, sans attendre de voir si cela se remarque. Une erreur connue tôt peut souvent être corrigée ; une erreur cachée s'aggrave et devient un problème de confiance.",
      "Je décris les faits : ce que j'ai fait, sur quel dossier, à quelle date, et ce que je pense qu'il faut corriger. Je propose une correction ou je demande à qui m'adresser, puis je vérifie que la correction a bien été faite. Je ne cherche pas à me justifier en accusant un collègue ou l'outil.",
      "Ensuite, j'en tire une leçon : vérifier deux fois une donnée sensible, utiliser la procédure de contrôle, demander une relecture quand je doute. **Reconnaître une erreur est une preuve de professionnalisme**, pas une faiblesse ; la cacher met le service en danger."
    ],
    attentes: [
      "Signalement immédiat, faits, correction et suivi.",
      "Une leçon concrète pour éviter la répétition."
    ],
    eviter: [
      "« Cela ne m'arrive jamais ».",
      "Rejeter la faute sur l'outil ou sur un collègue."
    ],
    relances: [
      "Donnez un exemple d'erreur et de correction.",
      "Que faites-vous si l'erreur concerne un proche ?"
    ],
    motsCles: ["erreur", "signalement", "correction", "traçabilité", "professionnalisme"],
    source: "Question classique d'entretien d'admission, catégorie C"
  }

]);
