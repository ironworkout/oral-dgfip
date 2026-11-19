/*
  BANQUE — catégorie 6 : Questions pièges et classiques (12 questions)
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "q-impot",
    cat: 6,
    theme: "Le niveau de l'impôt",
    statut: "piege",
    question: "L'impôt est-il trop élevé en France ?",
    duree: 60,
    enjeu: "Question politique déguisée : le jury teste votre capacité à ne pas prendre position au nom de l'administration.",
    reponse: [
      "Je comprends que la question soit sensible : l'impôt touche directement le budget des ménages et des entreprises. Mais **ce n'est pas à moi de juger le niveau de la fiscalité** : il relève du débat démocratique et des choix du Parlement. Mon rôle, si je suis recruté, sera d'appliquer la loi avec équité et de l'expliquer aux usagers.",
      "Ce que je peux dire, c'est que l'impôt finance des services publics et de la solidarité, et que son acceptation dépend beaucoup de la qualité de l'information et de l'égalité de traitement. Un usager qui comprend pourquoi il paie et comment sa situation est calculée accepte mieux la règle.",
      "Si l'usager me demande mon avis personnel, je réponds que je n'ai pas à l'exprimer dans l'exercice de mes fonctions, et je recentre sur sa situation concrète. **La neutralité n'est pas un refus de comprendre** : c'est la condition pour que ma réponse soit la même pour tous."
    ],
    attentes: [
      "Refus de prendre position politiquement, sans fuite.",
      "Recentrage sur l'application de la loi et l'égalité de traitement."
    ],
    eviter: [
      "Donner son opinion sur le gouvernement ou sur les riches.",
      "Répondre « oui, clairement » ou « non, pas du tout »."
    ],
    relances: [
      "Et si un usager vous dit qu'il paie trop ?",
      "Que répondez-vous à quelqu'un qui conteste l'impôt ?"
    ],
    motsCles: ["impôt", "neutralité", "débat démocratique", "égalité", "usager"],
    source: "Question piège classique ; obligations de neutralité"
  },

  {
    id: "q-postes",
    cat: 6,
    theme: "Les effectifs",
    statut: "piege",
    question: "Que pensez-vous des suppressions de postes à la DGFiP ?",
    duree: 60,
    enjeu: "Sujet syndical et politique : le jury vérifie que vous savez en parler sans militantisme et sans nier la réalité.",
    reponse: [
      "Je sais que les effectifs de la DGFiP ont évolué à la baisse depuis plusieurs années, dans un contexte de modernisation : dématérialisation des démarches, déclaration pré-remplie, prélèvement à la source, nouveau réseau de proximité. Ce sont des faits que je ne conteste pas.",
      "Ces évolutions ont des conséquences sur l'organisation du travail et sur la charge des agents, et je comprends que ce soit un sujet de préoccupation. Mon rôle de futur agent n'est pas de commenter les choix budgétaires, mais de contribuer à la qualité du service avec les moyens disponibles, de signaler les difficultés et de m'organiser avec l'équipe.",
      "Si la question porte sur mon opinion, je réponds que **je ne suis pas là pour arbitrer une politique publique** : je suis là pour servir les usagers et respecter les règles. Je peux en revanche dire ce que je ferai concrètement : prioriser, tracer, alerter et ne pas laisser un usager sans réponse."
    ],
    attentes: [
      "Connaissance du contexte de modernisation, sans militantisme.",
      "Une posture professionnelle : servir avec les moyens donnés, alerter si besoin."
    ],
    eviter: [
      "Dénoncer le gouvernement ou reprendre un slogan syndical.",
      "Nier les suppressions de postes ou leurs conséquences."
    ],
    relances: [
      "Comment faites-vous face à une charge de travail élevée ?",
      "Que pensez-vous de la dématérialisation ?"
    ],
    motsCles: ["effectifs", "modernisation", "charge de travail", "neutralité", "service"],
    source: "Question piège classique ; contexte DGFiP 2026"
  },

  {
    id: "q-diplome",
    cat: 6,
    theme: "Le niveau de diplôme",
    statut: "piege",
    question: "Vous êtes trop diplômé pour un poste de catégorie C, non ?",
    duree: 60,
    enjeu: "Le jury teste votre cohérence : la réponse doit expliquer le choix sans le justifier par l'échec.",
    reponse: [
      "Je ne vois pas mon diplôme comme un obstacle, mais je comprends la question : le jury veut savoir si je vais m'ennuyer ou partir au bout de six mois. Ma réponse est que **j'ai choisi ce concours pour le métier**, pas par défaut.",
      "Le poste d'agent administratif demande des compétences que mon parcours m'a apportées : rigueur, rédaction, capacité à comprendre une règle et à l'expliquer. Le diplôme n'empêche pas de commencer en bas de l'échelle : il peut au contraire m'aider à progresser ensuite, par la formation et le concours interne.",
      "Je sais aussi ce que je ne sais pas : le fonctionnement concret d'un service, les outils métier, la relation à un usager mécontent. C'est précisément ce que je viens apprendre. **Je ne considère pas qu'un poste soit indigne de mon niveau** ; je considère qu'un métier s'apprend en le faisant."
    ],
    attentes: [
      "Un choix assumé, pas une justification par l'échec.",
      "La conscience de ce qu'il reste à apprendre."
    ],
    eviter: [
      "« C'est mieux que rien » ou « je prends ce qu'il y a ».",
      "Insister sur son diplôme comme une supériorité."
    ],
    relances: [
      "Comptez-vous passer le concours interne rapidement ?",
      "Qu'est-ce qui vous fera rester ?"
    ],
    motsCles: ["diplôme", "catégorie C", "cohérence", "apprentissage", "évolution"],
    source: "Question piège classique, entretien catégorie C"
  },

  {
    id: "q-ennui",
    cat: 6,
    theme: "L'ennui",
    statut: "piege",
    question: "Vous allez vous ennuyer dans un poste de catégorie C, non ?",
    duree: 60,
    enjeu: "Le jury vérifie votre représentation du travail réel et votre capacité à trouver de l'intérêt dans des tâches répétitives.",
    reponse: [
      "Je ne confonds pas routine et ennui. Un service fonctionne parce que des tâches sont faites de manière régulière et fiable : enregistrer un courrier, vérifier une pièce, répondre au téléphone. **La répétition est ce qui garantit l'égalité de traitement**, et elle demande de l'attention.",
      "Ce qui m'intéresse, c'est justement l'imprévu du public : chaque usager arrive avec une situation différente, et il faut adapter l'explication. Il y a aussi de la variété dans les dossiers et dans les outils, et la possibilité d'apprendre un nouveau service.",
      "Si je m'ennuie, ce sera de ma responsabilité : je demanderai à apprendre une tâche supplémentaire, à suivre une formation ou à aider un collègue. **Un poste ne rend pas quelqu'un curieux ou passif** ; c'est la façon dont il l'occupe qui fait la différence."
    ],
    attentes: [
      "Une vision réaliste des tâches répétitives.",
      "Une initiative personnelle pour apprendre et varier."
    ],
    eviter: [
      "Nier la répétition ou promettre qu'on ne s'ennuiera jamais.",
      "Dire qu'on attend un poste plus intéressant."
    ],
    relances: [
      "Quelle tâche vous paraît la plus répétitive ?",
      "Comment apprend-on dans un service ?"
    ],
    motsCles: ["ennui", "routine", "rigueur", "curiosité", "formation"],
    source: "Question piège classique, entretien catégorie C"
  },

  {
    id: "q-statut",
    cat: 6,
    theme: "La sécurité de l'emploi",
    statut: "piege",
    question: "Le statut de fonctionnaire, c'est surtout la sécurité de l'emploi, non ?",
    duree: 60,
    enjeu: "Le jury cherche à savoir si vous venez pour le statut ou pour le métier.",
    reponse: [
      "La sécurité de l'emploi existe, et je ne vais pas faire semblant qu'elle ne compte pas : elle permet de se projeter et de travailler sereinement. Mais **elle n'est pas ma première raison** ; sinon, j'aurais choisi n'importe quel concours de la fonction publique.",
      "Ce qui m'attire, c'est le contenu du travail et le cadre : servir les usagers, appliquer une règle commune, travailler en équipe, avec une déontologie claire. Le statut apporte aussi des obligations : neutralité, réserve, mobilité, disponibilité. **Ce n'est pas un contrat de confort, c'est un contrat de responsabilité.**",
      "Je sais que la sécurité de l'emploi ne dispense pas de faire ses preuves : il y a une période de stage, une évaluation professionnelle, des formations obligatoires. Un agent titulaire qui ne fait pas son travail peut être sanctionné. Je préfère cela à un poste sans cadre."
    ],
    attentes: [
      "Le statut reconnu sans en faire la motivation principale.",
      "La connaissance des obligations et de l'évaluation."
    ],
    eviter: [
      "« C'est surtout la sécurité » comme réponse principale.",
      "Nier l'attrait du statut et jouer l'idéalisme."
    ],
    relances: [
      "Que pensez-vous de l'obligation de mobilité ?",
      "Que se passe-t-il pendant le stage ?"
    ],
    motsCles: ["statut", "sécurité", "obligations", "stage", "évaluation"],
    source: "Question piège classique ; statut général"
  },

  {
    id: "q-greves",
    cat: 6,
    theme: "Le droit de grève",
    statut: "piege",
    question: "Que pensez-vous du droit de grève dans les services publics ?",
    duree: 60,
    enjeu: "Question politique : le jury attend une position juridique et professionnelle, pas une opinion partisane.",
    reponse: [
      "Le droit de grève est un **droit constitutionnel** reconnu aux agents publics, dans le cadre de la loi. Il peut être exercé, mais il implique des obligations : un préavis, un service minimum dans certains secteurs, et la continuité du service public.",
      "Je comprends que la grève soit un sujet sensible pour les usagers, qui peuvent subir une fermeture ou un retard. Si je suis agent, je respecterai le cadre et je ne confondrai pas mon opinion personnelle avec la position du service. Je ne commenterai pas les mouvements sociaux devant les usagers.",
      "Ce qui compte pour moi, c'est que **le dialogue social existe** : les représentants du personnel, les négociations, les instances. Un service public qui fonctionne, c'est aussi un service où les agents peuvent exprimer leurs difficultés par les voies prévues."
    ],
    attentes: [
      "La reconnaissance du droit et de ses limites.",
      "La distinction entre opinion personnelle et devoir de réserve."
    ],
    eviter: [
      "Prendre parti pour ou contre les grévistes.",
      "Promettre qu'on ne fera jamais grève."
    ],
    relances: [
      "Participeriez-vous à une grève ?",
      "Qu'est-ce que la continuité du service public ?"
    ],
    motsCles: ["grève", "droit", "continuité", "réserve", "dialogue social"],
    source: "Constitution ; statut général ; question piège classique"
  },

  {
    id: "q-fraude",
    cat: 6,
    theme: "La fraude",
    statut: "piege",
    question: "Avez-vous déjà fraudé le fisc ?",
    duree: 45,
    enjeu: "Question déstabilisante : le jury teste votre sincérité et votre rapport à la règle.",
    reponse: [
      "Non. Je n'ai jamais cherché à dissimuler des revenus ou à obtenir une aide à laquelle je n'avais pas droit. Je fais mes déclarations et je paie ce que je dois, même quand le montant me paraît élevé.",
      "Si la question porte sur un oubli ou une erreur passée, je le dis simplement : une erreur déclarative n'est pas une fraude, et si j'en ai commis une, je l'ai corrigée. **La différence entre l'erreur et la fraude, c'est l'intention de se soustraire à l'impôt.**",
      "Je comprends pourquoi le jury pose la question : un agent des Finances publiques doit être irréprochable sur ce point, car il manipule des données et applique des règles qu'il doit lui-même respecter. Je n'ai pas de situation personnelle qui me mettrait en conflit avec mes fonctions."
    ],
    attentes: [
      "Une réponse claire et cohérente.",
      "La distinction entre erreur et fraude intentionnelle."
    ],
    eviter: [
      "Faire une confession inutile ou minimiser.",
      "Répondre par une leçon de morale."
    ],
    relances: [
      "Que pensez-vous de la fraude fiscale ?",
      "Que faites-vous si un proche vous demande un conseil pour ne pas payer ?"
    ],
    motsCles: ["fraude", "sincérité", "erreur", "intention", "exemplarité"],
    source: "Question piège classique ; déontologie"
  },

  {
    id: "q-defaut",
    cat: 6,
    theme: "Le défaut",
    statut: "piege",
    question: "Quel est votre pire défaut ?",
    duree: 60,
    enjeu: "Le jury attend un défaut réel, analysé, avec une correction en cours. Pas un faux défaut.",
    reponse: [
      "Mon défaut est l'**impatience** : quand une tâche traîne ou qu'une réponse se fait attendre, j'ai tendance à vouloir la finir moi-même, quitte à empiéter sur le travail d'un collègue. Je l'ai remarqué en travaillant en équipe.",
      "Ce que j'ai changé : je vérifie d'abord si la personne a besoin d'aide avant de prendre sa tâche, je demande une priorisation à ma hiérarchie quand je trouve qu'un dossier n'avance pas, et j'accepte de ne pas tout contrôler. Je garde l'énergie, mais je la canalise.",
      "Je pourrais dire que je suis perfectionniste, mais ce serait un faux défaut. **Un défaut utile à nommer est un défaut qui a un effet concret et une correction vérifiable.** L'impatience m'a déjà fait parler trop vite ; j'apprends à ralentir sur les sujets sensibles."
    ],
    attentes: [
      "Un défaut crédible, avec un exemple et une correction.",
      "La lucidité sur l'effet du défaut sur l'équipe."
    ],
    eviter: [
      "« Je suis trop perfectionniste » ou « je travaille trop ».",
      "Un défaut disqualifiant pour le poste (violence, mensonge)."
    ],
    relances: [
      "Comment vos collègues le vivent-ils ?",
      "Sur quoi progressez-vous encore ?"
    ],
    motsCles: ["défaut", "lucidité", "correction", "équipe", "impatience"],
    source: "Question classique d'entretien d'admission"
  },

  {
    id: "q-critique",
    cat: 6,
    theme: "La critique",
    statut: "piege",
    question: "Comment réagissez-vous à la critique ?",
    duree: 60,
    enjeu: "Le jury teste votre ego : un agent qui se braque ne peut pas travailler en équipe ni accueillir un retour d'usager.",
    reponse: [
      "Je distingue la critique sur le fond, qui m'aide, de la critique gratuite, qui ne m'apprend rien. Quand un collègue ou un responsable me dit que mon travail n'est pas conforme, je demande un exemple précis et je vérifie les faits avant de répondre.",
      "Si la critique est justifiée, je corrige et je note ce que je dois changer. Si elle me paraît injuste, je l'explique calmement, avec des éléments, sans m'énerver ni chercher à avoir raison à tout prix. Je peux aussi demander un délai pour vérifier.",
      "Avec un usager, c'est différent : il critique le service ou la règle, pas moi personnellement. Je l'écoute, je reformule et je réponds sur le fond. **Savoir recevoir une critique, c'est ce qui permet de progresser** ; se braquer, c'est rester au même point."
    ],
    attentes: [
      "Écoute, demande de faits, correction ou explication calme.",
      "La distinction entre critique personnelle et critique du service."
    ],
    eviter: [
      "« Je prends tout très mal » ou « personne ne me critique ».",
      "Se justifier immédiatement sans écouter."
    ],
    relances: [
      "Donnez un exemple de critique reçue.",
      "Et si la critique est publique, devant l'équipe ?"
    ],
    motsCles: ["critique", "écoute", "correction", "ego", "usager"],
    source: "Question classique d'entretien d'admission"
  },

  {
    id: "q-chiffre",
    cat: 6,
    theme: "La pression du résultat",
    statut: "piege",
    question: "Que faites-vous si votre chef vous demande de « faire du chiffre » au détriment de l'équité ?",
    duree: 60,
    enjeu: "Question éthique : le jury vérifie que vous distinguez performance légitime et pression abusive.",
    reponse: [
      "Je commence par comprendre ce qui est demandé : parle-t-on d'un objectif de qualité, de délai ou de contrôle, ou d'une pression pour redresser à tout prix ? **Un objectif de performance n'est pas illégitime** ; une consigne qui conduirait à traiter différemment des usagers l'est.",
      "Si la demande est ambiguë, je demande une clarification et je rappelle les règles : le contrôle doit être fondé sur des critères objectifs et le contribuable doit être traité équitablement. Je ne modifie pas un dossier pour atteindre un chiffre et je ne signe pas un acte que je sais irrégulier.",
      "Si la pression persiste, je m'adresse au niveau supérieur ou aux circuits prévus. **Un agent doit être loyal, mais sa loyauté inclut le respect de la loi et de l'équité** ; un résultat obtenu par un traitement injuste est un mauvais résultat pour le service."
    ],
    attentes: [
      "Distinction entre performance et pression abusive.",
      "Refus argumenté et recours hiérarchique."
    ],
    eviter: [
      "Répondre qu'on obéit toujours.",
      "Accuser la hiérarchie sans avoir cherché à comprendre."
    ],
    relances: [
      "Qu'est-ce qu'un objectif légitime ?",
      "Que faites-vous si l'ordre vient d'en haut ?"
    ],
    motsCles: ["performance", "équité", "contrôle", "pression", "éthique"],
    source: "Déontologie ; contrôle fiscal et égalité de traitement"
  },

  {
    id: "q-lenteur",
    cat: 6,
    theme: "La lenteur administrative",
    statut: "piege",
    question: "L'administration est lente et paperassière, non ?",
    duree: 60,
    enjeu: "Question qui invite à critiquer son futur employeur : le jury attend une réponse nuancée et professionnelle.",
    reponse: [
      "Je comprends ce que ressentent les usagers : une démarche qui demande plusieurs pièces et plusieurs semaines peut sembler interminable. Mais **la lenteur apparente correspond souvent à des vérifications nécessaires** : contrôle de la régularité, respect du contradictoire, protection des données, recours possibles.",
      "Cela ne veut pas dire que tout est parfait. La dématérialisation, la simplification des formulaires et l'information sur les délais améliorent l'expérience. Un agent peut agir à son niveau : expliquer les étapes, donner une date réaliste, éviter de demander une pièce déjà fournie et tracer la demande.",
      "Si un usager me dit que l'administration est lente, je ne le contredis pas frontalement : je reconnais la gêne, j'explique ce qui est en cours et je lui donne un point de contact. **Défendre l'institution ne consiste pas à nier les difficultés**, mais à expliquer et à améliorer ce qui peut l'être."
    ],
    attentes: [
      "Reconnaissance de la gêne de l'usager et explication du cadre.",
      "Des leviers concrets d'amélioration au niveau de l'agent."
    ],
    eviter: [
      "Critiquer ouvertement l'administration.",
      "Nier la lenteur et réciter un discours institutionnel."
    ],
    relances: [
      "Comment réduire les délais ?",
      "Que dites-vous à un usager qui attend depuis six mois ?"
    ],
    motsCles: ["lenteur", "paperasse", "délais", "simplification", "information"],
    source: "Question piège classique ; qualité de service DGFiP"
  },

  {
    id: "q-pourquoi-vous",
    cat: 6,
    theme: "Le choix du candidat",
    statut: "piege",
    question: "Pourquoi vous plutôt qu'un autre candidat ?",
    duree: 60,
    enjeu: "Question de clôture : le jury attend une réponse confiante et concrète, sans comparaison arrogante.",
    reponse: [
      "Je ne connais pas les autres candidats, donc je ne peux pas me comparer. Ce que je peux dire, c'est ce que j'apporte : **de la fiabilité**, une capacité à comprendre une règle et à l'expliquer, et une vraie envie de servir les usagers.",
      "Je peux l'illustrer par mon parcours : une expérience de contact, un travail en équipe, une situation où j'ai dû m'organiser ou reconnaître une erreur. Je ne me contente pas de dire que je suis motivé ; je montre comment je travaille.",
      "Enfin, je connais le cadre : secret professionnel, neutralité, mobilité, travail en équipe. Je ne viens pas pour un poste provisoire, mais pour construire un parcours dans la DGFiP. **Ce que j'apporte, c'est de la constance et une capacité à apprendre** ; le reste, je viens l'acquérir avec la formation et l'expérience."
    ],
    attentes: [
      "Deux ou trois atouts prouvés par des exemples.",
      "Une connaissance du cadre et une projection dans la durée."
    ],
    eviter: [
      "Se déclarer meilleur que les autres candidats.",
      "Une liste de qualités sans preuve."
    ],
    relances: [
      "Quel est votre meilleur atout pour ce poste ?",
      "Qu'est-ce qui vous distingue d'un candidat expérimenté ?"
    ],
    motsCles: ["candidat", "atouts", "preuves", "fiabilité", "projection"],
    source: "Question de clôture fréquente, entretien catégorie C"
  }

]);
