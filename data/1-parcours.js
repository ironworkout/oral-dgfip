/*
  BANQUE — catégorie 1 : Parcours et présentation (8 questions)
  Champs : id, cat, theme, statut, question, duree (secondes conseillées),
  enjeu, reponse (paragraphes, **gras** = terme clé masquable), attentes,
  eviter, relances, motsCles, source.
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "p-pitch",
    cat: 1,
    theme: "La présentation",
    statut: "officiel",
    question: "Présentez votre parcours en deux minutes.",
    duree: 120,
    enjeu: "C'est l'ouverture de l'entretien et la seule partie que vous maîtrisez à 100 %. Le jury y cherche une trajectoire lisible, pas un CV récité.",
    reponse: [
      "**Le cadre.** L'épreuve commence par une présentation de mon parcours de **deux minutes au plus** ; au-delà, le jury m'interrompt. Je découpe donc mon propos en quatre blocs minutés et je m'entraîne au chronomètre, sans notes, en regardant les deux membres du jury.",
      "**La trame.** Une **accroche** de quinze secondes : mon nom, ma situation actuelle, et une phrase qui résume ma trajectoire. Puis **mon parcours** pendant quarante-cinq secondes : deux ou trois étapes seulement, et pour chacune une compétence concrète illustrée par un exemple. Ensuite **mes motivations** pendant quarante secondes : ce que j'ai compris du métier d'agent administratif, et pourquoi la DGFiP. Enfin **mon projet** en vingt secondes : réussir la scolarité, être rapidement opérationnel, puis évoluer par la formation et, à terme, par un concours interne.",
      "**La forme.** Je ne récite pas : je parle comme à un collègue, avec des phrases courtes et des exemples vérifiables. Je termine par une phrase ouverte, par exemple : « C'est ce parcours qui m'amène aujourd'hui devant vous, et je serais heureux de préciser le point qui vous intéresse. » Je m'entraîne devant un proche ou en me filmant, parce que le seul risque réel sur cet exercice est de dépasser le temps.",
      "**Ce que je choisis de montrer.** Un agent de catégorie C est en contact avec les usagers, manipule des données sensibles et travaille en équipe : je sélectionne donc dans mon parcours les éléments qui prouvent le sens du service, la rigueur et la discrétion, plutôt que les diplômes qui n'ont pas de lien avec le poste."
    ],
    attentes: [
      "Une trajectoire compréhensible en une écoute, avec des étapes choisies et non subies.",
      "Un lien explicite entre les expériences racontées et les qualités attendues d'un agent C."
    ],
    eviter: [
      "Dérouler son CV du brevet à aujourd'hui, sans hiérarchie ni exemple.",
      "Réciter un texte appris par cœur d'un ton monocorde, ou dépasser les deux minutes."
    ],
    relances: [
      "Pourquoi la DGFiP plutôt qu'une autre administration ?",
      "Quel a été le déclencheur de votre choix ?",
      "Que retenez-vous de votre dernière expérience ?"
    ],
    motsCles: ["pitch", "deux minutes", "parcours", "accroche", "projet"],
    source: "Guide ENFiP, Préparation à l'épreuve orale d'admission, juillet 2026"
  },

  {
    id: "p-scolaire",
    cat: 1,
    theme: "Le parcours scolaire",
    statut: "probable",
    question: "Revenez sur votre parcours scolaire : qu'en retenez-vous ?",
    duree: 75,
    enjeu: "Le jury ne veut pas un bulletin commenté, mais voir si vous savez tirer une compétence d'une scolarité ordinaire, y compris d'une matière où vous étiez en difficulté.",
    reponse: [
      "Je ne récite pas mon bulletin. Je choisis **deux éléments** : une matière ou une méthode qui m'a structuré, et un projet ou un travail collectif qui m'a appris quelque chose sur moi-même.",
      "Par exemple, j'ai gardé de ma scolarité la **rigueur** d'un travail régulier en mathématiques : rendre un exercice juste demande de vérifier, de recommencer et d'accepter la correction. J'ai aussi appris à travailler en groupe lors d'un projet, où il fallait répartir les tâches et tenir un délai. Ces deux points se retrouvent directement dans le métier : saisir une donnée sans erreur et rendre compte à sa hiérarchie.",
      "Si une matière a été difficile, je le dis simplement et je montre ce que j'en ai fait : un changement de méthode, un soutien demandé, une progression. **L'échec scolaire n'est pas disqualifiant** ; l'absence de recul l'est davantage. Je termine sur ce que cette période m'a appris de durable : la régularité, l'organisation, ou le fait de demander de l'aide au bon moment."
    ],
    attentes: [
      "Deux exemples choisis plutôt qu'une énumération de notes.",
      "Une compétence transférable au poste, nommée clairement."
    ],
    eviter: [
      "Dire « j'étais moyen partout » sans en tirer aucune conséquence.",
      "Blâmer un professeur ou un établissement."
    ],
    relances: [
      "Quelle matière vous a le plus servi ?",
      "Comment expliquiez-vous vos difficultés à l'époque ?"
    ],
    motsCles: ["scolarité", "brevet", "méthode", "rigueur", "progression"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "p-echec",
    cat: 1,
    theme: "L'échec",
    statut: "probable",
    question: "Parlez-nous d'un échec et de ce que vous en avez tiré.",
    duree: 90,
    enjeu: "Le jury teste votre lucidité et votre capacité à corriger sans vous effondrer ni vous justifier. Un échec bien raconté vaut mieux qu'une réussite abstraite.",
    reponse: [
      "Je choisis un échec **réel mais réparable** : un examen, une mission, une candidature. Je le raconte en quatre temps : le contexte, ce que j'avais prévu, ce qui n'a pas fonctionné, et ce que j'ai changé ensuite.",
      "Par exemple, j'ai échoué à un examen parce que j'avais organisé mes révisions trop tard et que je travaillais par blocs trop longs, sans me tester. Le résultat a été mauvais, et je l'ai d'abord mal vécu. J'ai analysé la cause : ce n'était pas un manque de capacité, mais une **méthode inadaptée**. J'ai découpé mes révisions en séances courtes avec des tests réguliers, et j'ai réussi la session suivante.",
      "Ce que j'en garde est concret : je vérifie maintenant ma méthode avant de m'y engager, je mesure mes progrès et je demande un avis extérieur plus tôt. Dans un service, cela veut dire signaler une difficulté avant l'échéance plutôt que de la masquer. **Un agent qui reconnaît une erreur à temps protège le service** ; un agent qui la cache laisse le problème grossir."
    ],
    attentes: [
      "Un échec assumé, avec une cause analysée et une correction vérifiable.",
      "La capacité à en parler sans victimisation ni fausse modestie."
    ],
    eviter: [
      "Choisir un faux échec flatteur du type « j'étais trop perfectionniste ».",
      "Raconter un échec trop lourd ou trop récent, qui laisse planer un doute."
    ],
    relances: [
      "Qu'est-ce que vous feriez différemment aujourd'hui ?",
      "Comment avez-vous vécu le regard des autres ?"
    ],
    motsCles: ["échec", "méthode", "lucidité", "correction", "responsabilité"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "p-experience",
    cat: 1,
    theme: "L'expérience marquante",
    statut: "probable",
    question: "Quelle expérience vous a le plus appris sur vous-même ?",
    duree: 90,
    enjeu: "Le jury cherche une preuve de savoir-être, pas une liste de fonctions. Une scène précise vaut mieux qu'un poste décrit en entier.",
    reponse: [
      "Je choisis une expérience où il y avait **une difficulté et une décision à prendre** : un usager mécontent, un délai serré, une erreur à rattraper, un désaccord dans une équipe. Je la raconte comme une scène, en une minute.",
      "Je décris d'abord la situation et mon rôle exact, puis ce que j'ai fait, et enfin le résultat. Par exemple, lors d'un stage ou d'un emploi, une personne s'est présentée sans rendez-vous avec un dossier incomplet et un délai très court. Je l'ai écoutée, j'ai vérifié ce qui manquait, je lui ai expliqué précisément les pièces à fournir et je lui ai proposé une solution dans mon périmètre, avant de rendre compte à ma responsable. Le dossier a pu être traité, et surtout l'usager est reparti avec une information claire.",
      "Ce que j'ai appris : **écouter avant d'expliquer**, ne pas promettre ce que je ne peux pas tenir, et alerter assez tôt. C'est exactement ce que demande un poste d'accueil aux Finances publiques, où la réponse doit être juste, compréhensible et traçable."
    ],
    attentes: [
      "Une situation concrète avec un rôle personnel clairement identifié.",
      "Un apprentissage relié au métier visé."
    ],
    eviter: [
      "Rester au niveau général (« j'ai appris le travail en équipe ») sans exemple.",
      "S'attribuer seul un résultat collectif."
    ],
    relances: [
      "Qu'auriez-vous fait si l'usager avait refusé votre solution ?",
      "Quel a été le retour de votre responsable ?"
    ],
    motsCles: ["expérience", "usager", "écoute", "initiative", "alerte"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "p-trou",
    cat: 1,
    theme: "Les ruptures de parcours",
    statut: "probable",
    question: "Vous avez une période sans activité ou un changement de voie : comment l'expliquez-vous ?",
    duree: 75,
    enjeu: "Le jury vérifie la cohérence du parcours et votre capacité à en parler simplement. Le silence ou la justification excessive attirent plus l'attention que la période elle-même.",
    reponse: [
      "Je réponds **factuellement et brièvement** : formation, recherche d'emploi, période familiale, santé, mobilité, reconversion. Je donne la raison principale sans entrer dans les détails qui ne concernent pas le jury, puis je passe à ce que j'ai fait pendant cette période.",
      "Une période sans emploi n'est pas une période vide : j'indique ce que j'ai continué à faire, par exemple une formation, des démarches administratives, du bénévolat, un travail saisonnier ou une remise à niveau. Si je n'ai rien pu faire, je le dis aussi : tout le monde peut traverser une période difficile, et le reconnaître est plus crédible qu'inventer une activité.",
      "Je termine sur le lien avec aujourd'hui : ce que cette période m'a appris, et pourquoi elle ne remet pas en cause ma capacité à tenir le poste. **Le jury ne cherche pas un parcours parfait**, il cherche quelqu'un de fiable, cohérent et capable d'expliquer ses choix."
    ],
    attentes: [
      "Une explication courte, stable et cohérente avec le dossier.",
      "Une continuité d'activité ou une remise en route identifiée."
    ],
    eviter: [
      "S'excuser longuement ou dramatiser.",
      "Donner une version différente de celle du dossier administratif."
    ],
    relances: [
      "Qu'avez-vous fait pendant cette période ?",
      "En quoi cette rupture a-t-elle changé votre façon de travailler ?"
    ],
    motsCles: ["reconversion", "période sans activité", "cohérence", "parcours"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "p-maintenant",
    cat: 1,
    theme: "Le moment du choix",
    statut: "probable",
    question: "Pourquoi passer ce concours maintenant, et pas plus tôt ?",
    duree: 75,
    enjeu: "Le jury vérifie que votre candidature est réfléchie et préparée, pas une inscription par défaut.",
    reponse: [
      "Je distingue **le déclencheur** et **la préparation**. Le déclencheur peut être une expérience de contact avec le service public, une recherche d'utilité, une envie de stabilité pour construire un projet, ou une réorientation après plusieurs années dans un autre secteur.",
      "La préparation, elle, est vérifiable : je me suis informé sur les missions et l'organisation de la DGFiP, j'ai échangé avec des agents ou assisté à une réunion d'information, j'ai consulté les rapports de jury, et je me suis entraîné à l'oral. Je peux citer ce que j'ai compris du métier : accueil, traitement de dossiers, rigueur, confidentialité.",
      "Si j'ai attendu, je le dis sans détour : j'avais besoin de mûrir mon choix ou de sécuriser ma situation. Ce qui compte, c'est que la candidature soit **datée, motivée et préparée**. Une motivation qui date d'hier se voit tout de suite ; un projet construit se démontre."
    ],
    attentes: [
      "Un déclencheur personnel, pas seulement un argument de stabilité.",
      "Des démarches concrètes de préparation et de connaissance du métier."
    ],
    eviter: [
      "« Parce que c'est la sécurité de l'emploi » comme seule réponse.",
      "Expliquer qu'on s'inscrit à plusieurs concours « au cas où » sans lien avec la DGFiP."
    ],
    relances: [
      "Qu'avez-vous fait pour vous renseigner ?",
      "Qu'est-ce qui vous a fait hésiter ?"
    ],
    motsCles: ["déclencheur", "préparation", "maturation", "projet"],
    source: "Question classique d'entretien d'admission, catégorie C"
  },

  {
    id: "p-projet",
    cat: 1,
    theme: "Le projet professionnel",
    statut: "probable",
    question: "Quel est votre projet professionnel après le concours ?",
    duree: 75,
    enjeu: "Le jury veut savoir si vous vous projetez dans le poste sans être ni dans le fantasme ni dans l'immobilisme.",
    reponse: [
      "Je vois trois étapes. **À court terme**, réussir la scolarité à l'ENFiP, découvrir le service où je serai affecté et devenir rapidement autonome sur les tâches qui me seront confiées : accueil, saisie, traitement de dossiers, relations avec les usagers.",
      "**À moyen terme**, approfondir un domaine — fiscalité des particuliers, des entreprises, gestion comptable locale ou recouvrement — et prendre des responsabilités dans l'équipe, par exemple former un nouvel arrivant ou suivre un dossier plus complexe. La DGFiP offre des formations internes et des mobilités, que je compte utiliser.",
      "**À long terme**, je sais que le corps des agents administratifs permet d'évoluer par concours interne ou examen professionnel, notamment vers contrôleur. Je ne veux pas brûler les étapes : mon premier objectif est de bien faire mon travail, avec fiabilité et discrétion. Un projet crédible est un projet **ancré dans le poste que je postule**, pas dans celui d'après."
    ],
    attentes: [
      "Une progression réaliste, du premier poste aux évolutions possibles.",
      "La connaissance des voies internes de progression, sans excès d'ambition."
    ],
    eviter: [
      "Dire qu'on veut devenir inspecteur dans les deux ans sans connaître les étapes.",
      "Répondre « je ne sais pas encore » sans aucune projection."
    ],
    relances: [
      "Quel service vous attirerait le plus ?",
      "Comment envisagez-vous une mobilité géographique ?"
    ],
    motsCles: ["projet", "ENFiP", "concours interne", "évolution", "mobilité"],
    source: "Guide ENFiP 2026 et questions classiques d'admission"
  },

  {
    id: "p-questions",
    cat: 1,
    theme: "Les questions au jury",
    statut: "probable",
    question: "Avez-vous des questions à nous poser ?",
    duree: 60,
    enjeu: "La question laisse au jury le dernier mot, et à vous une occasion de montrer que vous vous projetez dans la scolarité et le poste.",
    reponse: [
      "Je peux répondre deux choses, et les deux sont acceptables : soit **j'ai une question utile**, soit **je n'en ai pas**, en expliquant que l'échange a déjà couvert mes points de connaissance. Ce qu'il faut éviter, c'est de meubler avec une question dont la réponse figure dans l'avis de concours.",
      "Une question utile porte sur le déroulement concret du début de carrière : l'organisation de la scolarité à l'ENFiP, les conditions d'affectation, ou la façon dont un nouvel agent est accompagné dans son service. Par exemple : « Comment se passe l'accompagnement d'un agent qui arrive dans un SIP pour la première fois ? »",
      "Je ne pose **jamais** de question sur les congés, les horaires, les primes ou les possibilités de partir rapidement ailleurs. Je remercie le jury et je clôture calmement : « Merci pour cet échange, il confirme mon envie de rejoindre la DGFiP. »"
    ],
    attentes: [
      "Une question liée au poste ou à la prise de fonction.",
      "Une capacité à conclure l'entretien sans se disperser."
    ],
    eviter: [
      "Poser une question dont la réponse est évidente ou déjà donnée pendant l'entretien.",
      "Interroger le jury sur les avantages statutaires ou les possibilités de mutation immédiate."
    ],
    relances: [
      "Comment se déroule la scolarité à l'ENFiP ?",
      "Quel profil de candidat recherchez-vous ?"
    ],
    motsCles: ["questions", "ENFiP", "prise de poste", "clôture"],
    source: "Question de clôture fréquente, entretien catégorie C"
  }

]);
