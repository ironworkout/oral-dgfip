/*
  BANQUE — catégorie 7 : Culture administrative et actualité (14 questions)
  Données vérifiées au 16 novembre 2026 ; chaque fiche indique sa source.
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "a-valeurs",
    cat: 7,
    theme: "Les valeurs de la République",
    statut: "probable",
    question: "Quelles sont les valeurs de la République française ?",
    duree: 75,
    enjeu: "Question de culture civique : elle doit être précise, avec la devise et le cadre constitutionnel.",
    reponse: [
      "La devise de la République est **« Liberté, Égalité, Fraternité »**. Ces trois valeurs figurent à l'article 2 de la Constitution de 1958, avec le principe de **laïcité** et l'organisation décentralisée de la République.",
      "La **liberté** garantit les droits fondamentaux et les libertés publiques ; l'**égalité** assure l'égalité devant la loi et devant le service public, sans discrimination ; la **fraternité** fonde la solidarité nationale. La **laïcité** garantit la liberté de conscience et la neutralité de l'État. L'article 1er rappelle que la France est une République indivisible, laïque, démocratique et sociale.",
      "Ces valeurs ne sont pas abstraites : elles se traduisent dans le service public par l'égal accès, la neutralité, la continuité et l'adaptation aux usagers. **Un agent public en est le garant quotidien**, y compris quand la situation est difficile."
    ],
    attentes: [
      "La devise, la laïcité et le cadre constitutionnel.",
      "Le lien avec le service public et le comportement de l'agent."
    ],
    eviter: [
      "Oublier la laïcité ou la réduire à une interdiction.",
      "Réciter sans faire le lien avec le métier."
    ],
    relances: [
      "Comment la fraternité se traduit-elle au guichet ?",
      "Que signifie « indivisible » ?"
    ],
    motsCles: ["liberté", "égalité", "fraternité", "laïcité", "Constitution"],
    source: "Constitution de 1958, art. 1er et 2 ; DDHC 1789"
  },

  {
    id: "a-egalite",
    cat: 7,
    theme: "L'égalité de traitement",
    statut: "probable",
    question: "Qu'est-ce que l'égalité devant le service public ?",
    duree: 60,
    enjeu: "Notion centrale du concours : le jury attend une définition juridique et une application concrète.",
    reponse: [
      "L'égalité devant le service public signifie que **tous les usagers ont droit au même service et au même traitement**, sans discrimination fondée sur l'origine, le sexe, la religion, l'âge, le handicap ou la situation sociale. Elle découle de l'égalité devant la loi et des principes du service public.",
      "Elle ne signifie pas traiter tout le monde de façon identique : un usager en situation de handicap peut avoir besoin d'une adaptation, une personne âgée d'un accompagnement. **L'égalité est dans le droit au service, pas dans l'uniformité de la réponse.**",
      "Concrètement, je ne donne pas de priorité à un usager influent, je ne traite pas plus vite un dossier parce que la personne est sympathique, et je ne refuse pas une information à quelqu'un qui la demande légitimement. Si une différence de traitement est prévue par la loi, je l'applique et je l'explique."
    ],
    attentes: [
      "Égalité de droit et adaptation légitime.",
      "Des exemples de non-discrimination au guichet."
    ],
    eviter: [
      "Confondre égalité et uniformité.",
      "Dire qu'on traite chacun « selon son feeling »."
    ],
    relances: [
      "Comment adaptez-vous le service sans rompre l'égalité ?",
      "Quelles discriminations sont interdites ?"
    ],
    motsCles: ["égalité", "non-discrimination", "service public", "adaptation", "usagers"],
    source: "DDHC, art. 6 ; statut général ; principes du service public"
  },

  {
    id: "a-statut",
    cat: 7,
    theme: "Le statut des fonctionnaires",
    statut: "probable",
    question: "Qu'est-ce que le statut général des fonctionnaires ?",
    duree: 75,
    enjeu: "Question de culture administrative : elle permet de vérifier que vous connaissez le cadre dans lequel vous postulez.",
    reponse: [
      "Le statut général est fixé par la **loi du 13 juillet 1983**, dite loi Le Pors. Il définit les droits et obligations des fonctionnaires et s'applique aux trois fonctions publiques : **d'État, territoriale et hospitalière**.",
      "Il pose les principes du système : recrutement par **concours**, égalité d'accès aux emplois publics, carrière, notation et évaluation, mobilité, formation, protection fonctionnelle. Il fixe aussi les obligations : secret professionnel, discrétion, réserve, obéissance hiérarchique, neutralité, probité et dignité.",
      "La loi du 20 avril 2016 relative à la déontologie a renforcé ces obligations et créé des dispositifs comme la déclaration d'intérêts et le référent déontologue. **Le statut n'est donc pas seulement une protection** : c'est un ensemble d'obligations qui garantissent l'indépendance et la crédibilité de l'administration."
    ],
    attentes: [
      "La loi de 1983 et les trois fonctions publiques.",
      "L'équilibre entre droits et obligations."
    ],
    eviter: [
      "Réduire le statut à la sécurité de l'emploi.",
      "Confondre statut général et statut d'un corps particulier."
    ],
    relances: [
      "Citez trois obligations du fonctionnaire.",
      "Qu'est-ce que la protection fonctionnelle ?"
    ],
    motsCles: ["statut", "1983", "Le Pors", "concours", "déontologie"],
    source: "Loi n° 83-634 du 13 juillet 1983 ; loi du 20 avril 2016"
  },

  {
    id: "a-categories",
    cat: 7,
    theme: "Les catégories A, B, C",
    statut: "probable",
    question: "Que signifient les catégories A, B et C dans la fonction publique ?",
    duree: 60,
    enjeu: "Question simple mais souvent mal répondue : le jury attend une logique de niveau de recrutement et de fonctions.",
    reponse: [
      "Les catégories correspondent au **niveau de recrutement et au degré de responsabilité** des emplois. La catégorie **A** regroupe les emplois de conception et de direction, recrutés au niveau bac+3 ou plus ; la catégorie **B** les emplois d'application et d'encadrement intermédiaire, recrutés au niveau bac ; la catégorie **C** les emplois d'exécution et d'appui, accessibles avec le brevet.",
      "Cette classification ne dit pas la valeur des personnes : elle décrit des fonctions et des niveaux de responsabilité. Un agent C peut exercer des tâches complexes et évoluer par concours interne ou examen professionnel.",
      "Dans la DGFiP, l'agent administratif principal est en catégorie C ; le contrôleur en B ; l'inspecteur en A. **Chaque niveau a sa place dans la chaîne de responsabilité**, et le bon fonctionnement du service dépend de leur coopération."
    ],
    attentes: [
      "Le lien niveau de recrutement / fonctions.",
      "Le cas concret de la DGFiP."
    ],
    eviter: [
      "Hiérarchiser les personnes et non les emplois.",
      "Confondre catégorie et grade."
    ],
    relances: [
      "Comment passe-t-on de C à B ?",
      "Qu'est-ce qu'un grade ?"
    ],
    motsCles: ["catégorie A", "catégorie B", "catégorie C", "grade", "concours"],
    source: "Statut général ; corps de la DGFiP"
  },

  {
    id: "a-droits-obligations",
    cat: 7,
    theme: "Droits et obligations",
    statut: "probable",
    question: "Quels sont les principaux droits et obligations d'un fonctionnaire ?",
    duree: 75,
    enjeu: "Question de synthèse : le jury attend un équilibre, pas une liste incomplète.",
    reponse: [
      "Les **droits** sont notamment : la rémunération après service fait, les congés, la formation, la protection fonctionnelle, la liberté d'opinion et d'expression dans les limites du statut, le droit syndical et le droit de grève dans le cadre légal, et l'accès aux voies de recours.",
      "Les **obligations** sont : le secret professionnel et la discrétion, le devoir de réserve, l'obéissance hiérarchique, la neutralité, la laïcité, la probité, la dignité, l'impartialité et le respect de l'égalité de traitement. Le fonctionnaire doit aussi se consacrer à ses fonctions et ne pas exercer une activité incompatible.",
      "Ces droits et obligations forment un **équilibre** : la protection statutaire permet à l'agent de résister aux pressions, et les obligations garantissent que cette protection sert l'intérêt général. **Un agent ne peut pas invoquer ses droits pour manquer à ses obligations**, ni ses obligations pour refuser ses droits."
    ],
    attentes: [
      "Deux droits et deux obligations au minimum, exacts.",
      "L'idée d'équilibre au service de l'intérêt général."
    ],
    eviter: [
      "Ne citer que des droits ou que des obligations.",
      "Inventer un droit (par exemple un droit de refuser tout changement de service)."
    ],
    relances: [
      "Qu'est-ce que la protection fonctionnelle ?",
      "Un fonctionnaire peut-il exprimer ses opinions ?"
    ],
    motsCles: ["droits", "obligations", "protection fonctionnelle", "réserve", "neutralité"],
    source: "Loi du 13 juillet 1983 ; charte de déontologie"
  },

  {
    id: "a-rgpd",
    cat: 7,
    theme: "Le RGPD",
    statut: "probable",
    question: "Qu'est-ce que le RGPD et que change-t-il pour un agent des Finances publiques ?",
    duree: 75,
    enjeu: "Sujet technique et quotidien : le jury vérifie que vous comprenez la protection des données au-delà du sigle.",
    reponse: [
      "Le **RGPD** est le règlement européen sur la protection des données personnelles, entré en application en 2018. Il impose de traiter les données pour une **finalité déterminée**, de manière **minimale et proportionnée**, de les sécuriser et de respecter les droits des personnes (accès, rectification, effacement dans certains cas).",
      "La DGFiP traite des données fiscales, familiales, patrimoniales et bancaires, particulièrement sensibles. L'agent doit donc consulter uniquement les dossiers nécessaires à son travail, ne pas les exporter sans autorisation, protéger ses accès et signaler toute violation.",
      "Le RGPD ne s'oppose pas au secret fiscal : les deux se renforcent. **La donnée fiscale est protégée deux fois** : par le secret professionnel et par les règles de protection des données. Une violation peut avoir des conséquences pour l'usager et pour l'agent."
    ],
    attentes: [
      "Finalité, minimisation, sécurité et droits des personnes.",
      "L'application concrète aux dossiers fiscaux."
    ],
    eviter: [
      "Réduire le RGPD à l'accord cookies.",
      "Croire qu'il autorise à tout dire à l'usager sur lui-même sans vérification d'identité."
    ],
    relances: [
      "Que faites-vous si un usager demande son dossier ?",
      "Comment signale-t-on une violation de données ?"
    ],
    motsCles: ["RGPD", "données personnelles", "finalité", "sécurité", "CNIL"],
    source: "RGPD (UE) 2016/679 ; CNIL ; obligations DGFiP"
  },

  {
    id: "a-numerique",
    cat: 7,
    theme: "La transformation numérique",
    statut: "probable",
    question: "Que pensez-vous de la dématérialisation des services publics ?",
    duree: 75,
    enjeu: "Sujet d'actualité qui touche directement le métier d'accueil : le jury attend une position équilibrée.",
    reponse: [
      "La dématérialisation a des avantages réels : elle simplifie certaines démarches, réduit les délais, permet de déclarer à tout moment et de conserver des preuves. La déclaration pré-remplie, le prélèvement à la source et le compte en ligne impots.gouv.fr ont transformé la relation aux usagers.",
      "Elle crée aussi une **fracture numérique** : toutes les personnes ne disposent pas d'une connexion, d'un équipement ou des compétences nécessaires. Le service public doit donc maintenir des alternatives : accueil physique, téléphone, rendez-vous d'assistance, formulaires papier, accompagnement en France Services.",
      "Pour un agent, cela change le métier : moins de saisie de masse, plus d'accompagnement et de pédagogie. **Le numérique doit être un moyen de mieux servir, pas une condition d'accès au service.** C'est pourquoi l'accueil de proximité reste essentiel."
    ],
    attentes: [
      "Les bénéfices et les limites, notamment la fracture numérique.",
      "Le maintien d'alternatives et le rôle de l'agent."
    ],
    eviter: [
      "« Tout doit se faire en ligne » ou « le numérique est une catastrophe ».",
      "Ignorer les usagers éloignés du numérique."
    ],
    relances: [
      "Comment accompagnez-vous une personne qui ne sait pas utiliser internet ?",
      "Que fait la DGFiP pour les non-connectés ?"
    ],
    motsCles: ["dématérialisation", "fracture numérique", "impots.gouv.fr", "accueil", "alternatives"],
    source: "COM DGFiP 2023-2027 ; NRP ; impots.gouv.fr"
  },

  {
    id: "a-ia",
    cat: 7,
    theme: "L'intelligence artificielle",
    statut: "probable",
    question: "Que pensez-vous de l'usage de l'intelligence artificielle dans l'administration ?",
    duree: 75,
    enjeu: "Question d'actualité : le jury attend une position prudente et concrète, pas un jugement technophobe ou naïf.",
    reponse: [
      "L'IA peut apporter un gain réel : aider à analyser des données, détecter des incohérences, pré-remplir des documents, orienter un usager vers le bon service ou assister un agent dans une recherche. L'État développe d'ailleurs des outils d'IA générative et des expérimentations dans plusieurs administrations.",
      "Mais elle pose des questions importantes : **protection des données**, biais des modèles, traçabilité, capacité à expliquer une décision et responsabilité. Une décision administrative ne peut pas être prise par une machine sans intervention humaine : l'agent doit rester en mesure de comprendre, de vérifier et d'assumer.",
      "Pour un agent de catégorie C, l'IA ne remplace pas la relation à l'usager ni la connaissance du dossier. **Je vois l'IA comme un outil d'appui**, à utiliser avec des règles claires et un esprit critique : vérifier les résultats, ne pas saisir de données confidentielles dans un outil non autorisé, et signaler une anomalie."
    ],
    attentes: [
      "Les usages utiles et les risques (données, biais, responsabilité).",
      "La primauté de la décision humaine et du contrôle."
    ],
    eviter: [
      "« L'IA va remplacer les agents » ou « l'IA est magique ».",
      "Ignorer la confidentialité des données fiscales."
    ],
    relances: [
      "Utiliseriez-vous ChatGPT pour rédiger un courrier ?",
      "Qui est responsable d'une décision prise avec une IA ?"
    ],
    motsCles: ["intelligence artificielle", "biais", "données", "décision", "contrôle"],
    source: "Actualité de la transformation numérique de l'État, 2025-2026"
  },

  {
    id: "a-cyber",
    cat: 7,
    theme: "La cybersécurité",
    statut: "probable",
    question: "Pourquoi la cybersécurité est-elle un enjeu pour la DGFiP ?",
    duree: 60,
    enjeu: "Sujet d'actualité sensible : le jury attend des réflexes de base, pas une expertise technique.",
    reponse: [
      "La DGFiP détient des données fiscales, bancaires et patrimoniales, et gère des paiements. Elle est donc une **cible privilégiée** pour les attaques informatiques : hameçonnage, rançongiciels, vols d'identifiants, fraude au virement.",
      "Les administrations font face à une menace croissante, et les incidents récents rappellent que la sécurité ne repose pas seulement sur les informaticiens : elle dépend aussi du comportement de chaque agent. Un mot de passe partagé, une pièce jointe ouverte ou une clé USB trouvée peuvent suffire.",
      "Mes réflexes : vérifier l'expéditeur d'un courriel, ne pas cliquer sur un lien douteux, ne jamais communiquer mes identifiants, verrouiller ma session, signaler immédiatement une anomalie. **Un agent est la première ligne de défense**, et signaler vite limite les dégâts."
    ],
    attentes: [
      "La nature des données et des menaces.",
      "Des réflexes concrets et le signalement."
    ],
    eviter: [
      "Répondre que la cybersécurité est l'affaire des informaticiens.",
      "Minimiser le risque de hameçonnage."
    ],
    relances: [
      "Que faites-vous si vous recevez un courriel suspect ?",
      "Qu'est-ce que l'hameçonnage ?"
    ],
    motsCles: ["cybersécurité", "hameçonnage", "données", "signalement", "ANSSI"],
    source: "ANSSI ; enjeux numériques de la DGFiP, 2026"
  },

  {
    id: "a-facturation",
    cat: 7,
    theme: "La facturation électronique",
    statut: "officiel",
    question: "Qu'est-ce que la réforme de la facturation électronique ?",
    duree: 75,
    enjeu: "Actualité majeure pour la DGFiP et les entreprises : la citer avec les bonnes dates montre une veille sérieuse.",
    reponse: [
      "La réforme rend obligatoire la **facturation électronique** entre entreprises et avec les administrations. Elle se déploie en deux temps : depuis le **1er septembre 2026**, toutes les entreprises doivent pouvoir **recevoir** des factures électroniques, et les grandes entreprises, les entreprises de taille intermédiaire et les administrations publiques doivent en **émettre**. Au plus tard le **1er septembre 2027**, l'obligation d'émission s'étend aux PME et TPE.",
      "Elle s'accompagne d'une transmission de **données de facturation, de transaction et de paiement** à l'administration, via des plateformes de dématérialisation partenaires. L'objectif est de simplifier la vie des entreprises, d'améliorer la connaissance de l'activité économique et de lutter contre la fraude à la TVA.",
      "Pour la DGFiP, c'est un chantier structurant : adaptation des outils, accompagnement des entreprises, contrôle des données. Pour un agent, cela signifie de nouvelles questions des usagers et la nécessité de comprendre le calendrier. **Je retiens les deux dates et l'objectif**, sans prétendre maîtriser la technique."
    ],
    attentes: [
      "Les dates de 2026 et 2027 et le principe de la réforme.",
      "Le lien avec la lutte contre la fraude à la TVA."
    ],
    eviter: [
      "Confondre avec la déclaration de revenus des particuliers.",
      "Donner une date fausse ou un périmètre flou."
    ],
    relances: [
      "Quel est l'intérêt pour les entreprises ?",
      "Comment la DGFiP accompagne-t-elle ce changement ?"
    ],
    motsCles: ["facturation électronique", "2026", "2027", "TVA", "plateformes"],
    source: "Bilan du COM 2023-2027, DGFiP, septembre 2026 ; impots.gouv.fr"
  },

  {
    id: "a-budget",
    cat: 7,
    theme: "Le budget de l'État",
    statut: "probable",
    question: "Comment est construit le budget de l'État ?",
    duree: 75,
    enjeu: "Question de culture administrative : le jury attend la logique LOLF et le rôle du Parlement.",
    reponse: [
      "Le budget de l'État est voté chaque année par le **Parlement** dans la **loi de finances**. Il prévoit les recettes et autorise les dépenses des ministères pour l'année.",
      "Depuis la **LOLF de 2001**, le budget est présenté par **missions**, programmes et actions, avec des objectifs et des indicateurs de performance. Les crédits sont limitatifs et les comptables publics vérifient leur disponibilité avant de payer. La Cour des comptes contrôle l'exécution et certifie les comptes de l'État.",
      "Un budget peut être en déficit lorsque les dépenses dépassent les recettes, ce qui alimente la **dette publique**. Celle-ci est financée par l'émission de titres d'État, pilotée par l'**Agence France Trésor** : la DGFiP n'est donc pas l'organisme qui gère la dette, même si elle recouvre les recettes qui la financent. **La DGFiP est au cœur du circuit budgétaire** : elle recouvre les recettes fiscales et exécute les dépenses de l'État. Pour un agent, cela signifie que chaque opération doit être régulière et traçable."
    ],
    attentes: [
      "Loi de finances, Parlement, LOLF, missions et programmes.",
      "Le rôle de la DGFiP dans le circuit."
    ],
    eviter: [
      "Confondre budget de l'État et budget des collectivités.",
      "Donner des chiffres de déficit ou de dette non maîtrisés."
    ],
    relances: [
      "Qu'est-ce qu'une mission budgétaire ?",
      "Qui contrôle l'exécution du budget ?"
    ],
    motsCles: ["budget", "LOLF", "loi de finances", "Parlement", "Cour des comptes"],
    source: "LOLF 2001 ; Constitution ; finances publiques"
  },

  {
    id: "a-fraude-internationale",
    cat: 7,
    theme: "La fraude fiscale internationale",
    statut: "probable",
    question: "Comment lutte-t-on contre la fraude fiscale internationale ?",
    duree: 75,
    enjeu: "Sujet d'actualité : le jury attend des mécanismes, pas seulement une condamnation morale.",
    reponse: [
      "La lutte repose d'abord sur la **coopération entre États** : conventions fiscales, échange automatique de renseignements bancaires et financiers, assistance administrative, et travaux de l'OCDE et de l'Union européenne. Les administrations échangent des données sur les comptes, les revenus et les structures.",
      "Elle s'appuie aussi sur des règles anti-abus : lutte contre les **prix de transfert** abusifs, dispositifs anti-hybrides, imposition minimale des multinationales, listes de pays non coopératifs, obligations déclaratives pour les avoirs à l'étranger. Le contrôle fiscal utilise le croisement de données et le droit de communication.",
      "Pour la DGFiP, cela signifie des services spécialisés, une analyse de risques et une coopération internationale. **Un agent C n'est pas enquêteur**, mais il peut repérer une incohérence, alerter et respecter scrupuleusement la confidentialité des données échangées."
    ],
    attentes: [
      "Échange automatique, conventions, règles anti-abus.",
      "Le rôle de la DGFiP et la limite du rôle de l'agent C."
    ],
    eviter: [
      "Réduire la lutte à la seule sanction pénale.",
      "Promettre que la fraude internationale est éradiquée."
    ],
    relances: [
      "Qu'est-ce que l'échange automatique ?",
      "Pourquoi les prix de transfert posent-ils problème ?"
    ],
    motsCles: ["fraude internationale", "échange automatique", "OCDE", "prix de transfert", "contrôle"],
    source: "OCDE ; DGFiP, coopération internationale ; actualité fiscale 2026"
  },

  {
    id: "a-ecologie",
    cat: 7,
    theme: "La fiscalité écologique",
    statut: "probable",
    question: "Qu'est-ce que la fiscalité écologique ?",
    duree: 60,
    enjeu: "Question de culture générale reliée à la fiscalité : le jury attend le principe et un exemple.",
    reponse: [
      "La fiscalité écologique consiste à utiliser l'impôt et les taxes pour **orienter les comportements** vers moins de pollution et plus de sobriété, selon le principe **pollueur-payeur**. Elle ne sert pas seulement à financer le budget : elle a une fonction d'incitation.",
      "Elle comprend par exemple les taxes sur les produits énergétiques, la taxe générale sur les activités polluantes, les taxes sur les véhicules ou les dispositifs de bonus-malus, ainsi que les accises sur les énergies. Certaines de ces recettes relèvent de la Douane, d'autres de la DGFiP.",
      "La fiscalité écologique doit être **lisible et juste** : si elle pèse davantage sur les ménages modestes ou sur les territoires sans alternative, elle est contestée. C'est pourquoi les dispositifs d'accompagnement et les exonérations existent. Pour un agent, cela signifie expliquer une taxe et orienter vers les aides, sans porter de jugement politique."
    ],
    attentes: [
      "Principe pollueur-payeur et fonction d'incitation.",
      "Un exemple de taxe et la question de la justice sociale."
    ],
    eviter: [
      "Confondre fiscalité écologique et subventions.",
      "Prendre position pour ou contre une taxe précise."
    ],
    relances: [
      "Quelle est la différence entre une taxe et une redevance ?",
      "Comment expliquer une taxe impopulaire à un usager ?"
    ],
    motsCles: ["fiscalité écologique", "pollueur-payeur", "énergie", "incitation", "justice"],
    source: "Code des impositions sur les biens et services ; actualité fiscale"
  },

  {
    id: "a-reforme",
    cat: 7,
    theme: "La réforme du concours 2026",
    statut: "officiel",
    question: "Que change la réforme du concours de catégorie C en 2026 ?",
    duree: 60,
    enjeu: "Le candidat doit connaître l'épreuve qu'il passe : c'est un minimum de préparation et un signal de sérieux.",
    reponse: [
      "La réforme, prévue par l'**arrêté du 23 mars 2026** qui modifie l'arrêté du 12 avril 2016, allège l'écrit et renforce l'évaluation des compétences comportementales à l'oral. Les épreuves restent organisées en trois temps : préadmissibilité, admissibilité, admission.",
      "La **préadmissibilité** est un QCM de 1 h 30 (coefficient 1) portant sur les mathématiques et le raisonnement logique, la culture générale, l'environnement numérique et les missions des ministères économiques et financiers. L'**admissibilité** est une résolution de cas pratiques de 3 h (coefficient 2) avec réponses, synthèse et support de communication.",
      "L'**oral** dure 20 minutes, coefficient 3 : une présentation du parcours de 2 minutes maximum, puis un échange avec le jury comprenant des **mises en situation**. Toute note inférieure à 5/20 est éliminatoire. **Je connais ce format** : c'est lui qui structure ma préparation et le présent site."
    ],
    attentes: [
      "Les trois épreuves, leurs durées et coefficients.",
      "La place renforcée des mises en situation à l'oral."
    ],
    eviter: [
      "Citer l'ancien format (coefficient 2, 15 minutes).",
      "Confondre les épreuves de préadmissibilité et d'admissibilité."
    ],
    relances: [
      "Comment préparez-vous l'oral ?",
      "Que savez-vous du QCM ?"
    ],
    motsCles: ["réforme 2026", "coefficient 3", "mises en situation", "QCM", "cas pratiques"],
    source: "Arrêté du 23 mars 2026 ; page officielle du concours C ; guide ENFiP 2026"
  }

]);
