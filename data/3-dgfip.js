/*
  BANQUE — catégorie 3 : Connaissance de la DGFiP et de la DGDDI (20 questions)
  Faits vérifiés sur les pages officielles DGFiP / economie.gouv.fr (2025-2026).
*/
window.BANQUE = (window.BANQUE || []).concat([

  {
    id: "d-missions",
    cat: 3,
    theme: "Les missions",
    statut: "probable",
    question: "Quelles sont les missions de la DGFiP ?",
    duree: 90,
    enjeu: "Question de base : le jury attend deux domaines distincts, la fiscalité et la gestion publique, avec des exemples.",
    reponse: [
      "La DGFiP exerce d'abord une mission **fiscale** : elle participe à la définition de la politique fiscale, établit l'assiette des impôts, droits et taxes, en assure le recouvrement et le contrôle, et traite les réclamations et le contentieux. Elle instruit aussi les demandes de rescrits et d'agréments et représente la France dans les négociations fiscales internationales.",
      "Elle exerce ensuite une mission de **gestion publique** : elle tient la comptabilité de l'État, contrôle la production et la qualité des comptes, paie les dépenses de l'État, tient les comptes des collectivités locales et des établissements publics, et gère le Domaine de l'État.",
      "Elle assure également des missions **foncières et cadastrales** : tenue du plan cadastral, publicité foncière, sécurisation des transactions immobilières. Enfin, elle gère les **retraites de l'État** et intervient à l'international. Cette variété explique pourquoi un agent C peut travailler dans un SIP, un SIE, un SGC, une trésorerie ou un service à compétence nationale."
    ],
    attentes: [
      "Les deux blocs : fiscalité et gestion publique.",
      "Un ou deux exemples concrets de missions."
    ],
    eviter: [
      "Réduire la DGFiP au calcul de l'impôt sur le revenu.",
      "Confondre la DGFiP avec la Douane ou avec France Services."
    ],
    relances: [
      "Quelle mission vous semble la plus utile aux usagers ?",
      "Que fait la DGFiP pour les collectivités ?"
    ],
    motsCles: ["mission fiscale", "gestion publique", "cadastre", "retraites", "Domaine"],
    source: "Site officiel DGFiP, « Nos missions » ; Rejoindre les Finances publiques, 2026"
  },

  {
    id: "d-creation",
    cat: 3,
    theme: "La création",
    statut: "probable",
    question: "Quand et comment la DGFiP a-t-elle été créée ?",
    duree: 60,
    enjeu: "Un repère simple, souvent demandé pour vérifier que la candidature est renseignée.",
    reponse: [
      "La DGFiP a été créée par le **décret du 3 avril 2008**. Elle est née de la fusion de deux administrations : la **Direction générale des impôts** (DGI), qui gérait l'assiette et le contrôle fiscal, et la **Direction générale de la comptabilité publique** (DGCP), qui tenait les comptes et payait les dépenses publiques.",
      "Cette fusion poursuivait un objectif de cohérence : rapprocher au sein d'une même direction le calcul de l'impôt, son recouvrement et la tenue des comptes publics, pour mieux servir les usagers et les collectivités et simplifier les circuits.",
      "Aujourd'hui, la DGFiP est la plus importante **direction à réseau** du ministère de l'Économie et des Finances. Elle conserve cette double culture, fiscale et comptable, qui explique la diversité de ses services et de ses métiers."
    ],
    attentes: [
      "La date de 2008 et les deux directions fusionnées.",
      "L'idée de rapprochement entre fiscalité et comptabilité publique."
    ],
    eviter: [
      "Confondre avec la création de la DGDDI ou avec la LOLF.",
      "Donner une date approximative sans les deux entités d'origine."
    ],
    relances: [
      "Quel intérêt à réunir impôts et comptabilité publique ?",
      "Quelle direction existait avant pour les collectivités ?"
    ],
    motsCles: ["2008", "DGI", "DGCP", "fusion", "direction à réseau"],
    source: "Site officiel DGFiP, histoire et missions"
  },

  {
    id: "d-organisation",
    cat: 3,
    theme: "L'organisation",
    statut: "probable",
    question: "Comment la DGFiP est-elle organisée ?",
    duree: 90,
    enjeu: "Le jury ne demande pas l'organigramme complet, mais une logique à trois niveaux : central, national, territorial.",
    reponse: [
      "La DGFiP s'organise à **trois niveaux**. Au niveau central, des services animent les politiques publiques : le service de la gestion fiscale, le service de la sécurité juridique et du contrôle fiscal, le service des collectivités locales, le service des retraites de l'État, le service des ressources humaines, le service de la fonction financière et comptable de l'État et le service des systèmes d'information.",
      "Au niveau national, des directions et services à compétence nationale traitent des publics ou des missions spécifiques : la Direction des grandes entreprises, la Direction nationale des enquêtes fiscales, la Direction des impôts des non-résidents, le service de documentation nationale du cadastre, la Délégation à la transformation numérique. S'y ajoutent les directions des services informatiques et les directions spécialisées de contrôle fiscal.",
      "Au niveau **territorial**, une centaine de directions régionales ou départementales pilotent les services de proximité : services des impôts des particuliers, services des impôts des entreprises, services de gestion comptable, trésoreries, services de publicité foncière et accueils de proximité. C'est dans ce réseau que travaille la majorité des agents."
    ],
    attentes: [
      "Une logique central / national / territorial.",
      "Le nom de deux ou trois services locaux."
    ],
    eviter: [
      "Tenter de réciter tout l'organigramme et se perdre.",
      "Croire que la DGFiP ne comprend que des services centraux à Paris."
    ],
    relances: [
      "Où travaille un agent C en début de carrière ?",
      "Qu'est-ce qu'une direction départementale ?"
    ],
    motsCles: ["services centraux", "directions nationales", "DRFiP", "DDFiP", "réseau"],
    source: "Rejoindre les Finances publiques, « Notre organisation », 2025-2026"
  },

  {
    id: "d-sip",
    cat: 3,
    theme: "Le SIP",
    statut: "probable",
    question: "Qu'est-ce qu'un service des impôts des particuliers et qu'y fait-on ?",
    duree: 75,
    enjeu: "C'est le service où débutent de nombreux agents : le jury attend des exemples concrets de tâches.",
    reponse: [
      "Le **SIP** est le service de proximité qui gère la fiscalité des particuliers : impôt sur le revenu, taxe foncière, taxe d'habitation sur les résidences secondaires, contributions sociales, et certains impôts locaux. Il reçoit les déclarations, met à jour les dossiers des contribuables et calcule les impositions.",
      "Il assure aussi l'**accueil** physique et téléphonique, l'aide à la déclaration en ligne, la prise de rendez-vous, le traitement des courriers et des réclamations simples. Il peut accorder des délais de paiement et suivre les échéanciers, dans le cadre des règles fixées.",
      "Le SIP suit le **rythme de l'année fiscale**. De janvier à février, le service traite surtout le contrôle et le contentieux, notamment la taxe foncière. D'avril à juin se déroule la **campagne d'impôt sur le revenu** : les usagers déclarent leurs revenus par plusieurs canaux — accueil physique, téléphone, messagerie, rendez-vous, permanences en mairie ou en France Services. En juillet-août, les avis d'imposition sont envoyés : l'impôt est calculé en tenant compte du prélèvement à la source. De septembre à décembre, c'est la campagne des avis et le paiement du solde d'impôt sur le revenu et de la taxe foncière.",
      "Un agent administratif y occupe des fonctions d'appui : accueil, saisie, enregistrement, préparation de dossiers, orientation. **Le SIP est la vitrine de la DGFiP** : c'est là que l'usager rencontre l'administration fiscale, souvent dans un moment de doute."
    ],
    attentes: [
      "Le périmètre : impôts des particuliers, accueil, réclamations.",
      "Le rôle concret d'un agent administratif dans ce service."
    ],
    eviter: [
      "Confondre SIP et SIE.",
      "Décrire uniquement le contrôle fiscal."
    ],
    relances: [
      "Quelles sont les missions les plus difficiles au SIP ?",
      "Comment aide-t-on un usager qui ne maîtrise pas internet ?"
    ],
    motsCles: ["SIP", "particuliers", "accueil", "déclaration", "réclamation"],
    source: "Site officiel DGFiP ; fiches métiers du réseau ; notes personnelles (11/11/2026)"
  },

  {
    id: "d-sie",
    cat: 3,
    theme: "Le SIE",
    statut: "probable",
    question: "À quoi sert un service des impôts des entreprises ?",
    duree: 75,
    enjeu: "Le jury vérifie que vous distinguez fiscalité des particuliers et fiscalité des entreprises.",
    reponse: [
      "Le **SIE** est le service de proximité compétent pour les **entreprises** : artisans, commerçants, professions libérales, sociétés. Il gère la cotisation foncière des entreprises, la TVA, l'impôt sur les sociétés et les déclarations professionnelles, ainsi que les taxes locales liées à l'activité.",
      "Il accompagne les entreprises dans leurs démarches : création, changement de situation, déclarations, demandes de délais ou de remises, réclamations. Il peut aussi les conseiller et les orienter vers les dispositifs adaptés, notamment en cas de difficulté.",
      "Pour un agent administratif, le travail est proche de celui du SIP : accueil, saisie, enregistrement, traitement du courrier, préparation de dossiers. La différence tient au **public** et au **vocabulaire** : il faut comprendre les notions de chiffre d'affaires, de régime d'imposition et de déclaration professionnelle."
    ],
    attentes: [
      "Le périmètre entreprises : CFE, TVA, IS, déclarations.",
      "La distinction claire avec le SIP."
    ],
    eviter: [
      "Dire que le SIE s'occupe des déclarations de revenus des particuliers.",
      "Rester vague sur les impôts concernés."
    ],
    relances: [
      "Qu'est-ce que la CFE ?",
      "Pourquoi les entreprises ont-elles un service dédié ?"
    ],
    motsCles: ["SIE", "entreprises", "TVA", "CFE", "déclarations"],
    source: "Site officiel DGFiP ; fiches métiers du réseau"
  },

  {
    id: "d-sgc",
    cat: 3,
    theme: "Le SGC",
    statut: "probable",
    question: "Qu'est-ce qu'un service de gestion comptable ?",
    duree: 75,
    enjeu: "Question qui permet de vérifier que vous connaissez la mission de gestion publique, pas seulement la fiscalité.",
    reponse: [
      "Le **SGC** est le service qui exerce la fonction de **comptable public** pour les collectivités locales et les établissements publics de son ressort. Il tient leur comptabilité, exécute les paiements et les encaissements, et contrôle la régularité des opérations.",
      "Il travaille avec les **ordonnateurs** — maires, présidents d'établissement — selon le principe de séparation de l'ordonnateur et du comptable : l'ordonnateur décide de la dépense, le comptable vérifie sa régularité et la paie. Ce contrôle protège l'argent public.",
      "Le SGC assure aussi le conseil et l'information des collectivités, notamment sur leur situation financière et leurs obligations. Un agent administratif y traite des dossiers de dépenses et de recettes, prépare des pièces, répond aux collectivités et participe au suivi comptable."
    ],
    attentes: [
      "La fonction de comptable public et le contrôle de la dépense.",
      "Le principe ordonnateur / comptable."
    ],
    eviter: [
      "Confondre SGC et SIP.",
      "Dire que le comptable décide des dépenses de la collectivité."
    ],
    relances: [
      "Qu'est-ce que la séparation ordonnateur / comptable ?",
      "Pourquoi ce contrôle est-il important ?"
    ],
    motsCles: ["SGC", "comptable public", "collectivités", "ordonnateur", "dépense"],
    source: "Site officiel DGFiP ; mission de gestion publique"
  },

  {
    id: "d-tresorerie",
    cat: 3,
    theme: "La trésorerie",
    statut: "probable",
    question: "Quel est le rôle d'une trésorerie ?",
    duree: 60,
    enjeu: "Le jury vérifie votre connaissance du réseau de proximité et des opérations de caisse.",
    reponse: [
      "La trésorerie est un service de proximité qui **encaisse les recettes et paie les dépenses** pour le compte de l'État et des collectivités. Elle assure aussi des opérations de caisse, la tenue de comptes et l'information des usagers et des partenaires.",
      "Selon son implantation, elle peut être une trésorerie générale, une trésorerie de collectivité ou un service de gestion comptable. Elle travaille avec les services fiscaux et les collectivités, et assure une mission de conseil financier local.",
      "Pour un agent administratif, cela signifie des tâches de caisse, de saisie, de contrôle de pièces et d'accueil. **La manipulation d'argent public impose une rigueur particulière** : comptage, traçabilité, respect des procédures et alerte immédiate en cas d'anomalie."
    ],
    attentes: [
      "Encaissement, paiement, tenue de comptes.",
      "La rigueur liée à la manipulation de fonds publics."
    ],
    eviter: [
      "Réduire la trésorerie à un simple guichet bancaire.",
      "Oublier la dimension de conseil aux collectivités."
    ],
    relances: [
      "Quelles vérifications faites-vous avant un paiement ?",
      "Que faites-vous si la caisse ne correspond pas ?"
    ],
    motsCles: ["trésorerie", "caisse", "encaissement", "paiement", "rigueur"],
    source: "Site officiel DGFiP ; réseau de proximité"
  },

  {
    id: "d-nrp",
    cat: 3,
    theme: "Le nouveau réseau de proximité",
    statut: "officiel",
    question: "Qu'est-ce que le nouveau réseau de proximité ?",
    duree: 75,
    enjeu: "Sujet d'actualité structurant : le jury attend au moins l'objectif de la réforme et son achèvement.",
    reponse: [
      "Le **nouveau réseau de proximité (NRP)** est la réforme du maillage territorial de la DGFiP. Elle vise à adapter l'implantation des services aux besoins des usagers et des collectivités, tout en maintenant un service public de proximité et en développant le conseil.",
      "Elle s'appuie sur plusieurs leviers : des **accueils de proximité** et des permanences, souvent en partenariat avec les **France Services**, un accueil sur rendez-vous, le développement des services en ligne et de l'accueil téléphonique, et des **conseillers aux décideurs locaux** pour accompagner les collectivités.",
      "Le déploiement du NRP a été **achevé au 1er septembre 2025**, hors Paris où des opérations se poursuivaient. Pour un agent, cela signifie des modalités de travail plus mobiles, une polyvalence accrue et une attention particulière à la qualité de l'accueil, y compris pour les publics éloignés du numérique."
    ],
    attentes: [
      "L'objectif : adapter le réseau sans renoncer à la proximité.",
      "Les France Services et l'accueil sur rendez-vous."
    ],
    eviter: [
      "Présenter le NRP comme une simple fermeture de services.",
      "Ignorer la date d'achèvement."
    ],
    relances: [
      "Comment accueille-t-on les publics sans numérique ?",
      "Quel est le rôle des conseillers aux décideurs locaux ?"
    ],
    motsCles: ["NRP", "proximité", "France Services", "rendez-vous", "conseillers"],
    source: "Bilan du COM 2023-2027, DGFiP, septembre 2026"
  },

  {
    id: "d-controle-fiscal",
    cat: 3,
    theme: "Le contrôle fiscal",
    statut: "probable",
    question: "Comment fonctionne le contrôle fiscal ?",
    duree: 90,
    enjeu: "Le jury vérifie que vous comprenez la logique de contrôle et les garanties du contribuable, sans confusion avec le recouvrement.",
    reponse: [
      "Le contrôle fiscal part d'une **programmation fondée sur l'analyse de risques** : croisement de données, signalements, écarts déclaratifs. Il peut prendre la forme d'un **contrôle sur pièces**, sur dossier, ou d'une **vérification de comptabilité** sur place, pour les entreprises. Les agents disposent d'un droit de communication auprès de tiers.",
      "Le contrôle se déroule dans un cadre contradictoire : le contribuable est informé, peut se faire assister, répond aux demandes et dispose de garanties et de voies de recours. Les redressements donnent lieu à des sanctions et à des intérêts, selon la nature des manquements.",
      "Un agent administratif n'est pas contrôleur : il **appuie** le service (préparation de dossiers, courriers, saisie, accueil, classement) et doit respecter le secret professionnel. Il peut aussi contribuer à la prévention, en expliquant les obligations et en orientant les usagers."
    ],
    attentes: [
      "Programmation, contrôle sur pièces, vérification de comptabilité.",
      "Le contradictoire et les garanties du contribuable."
    ],
    eviter: [
      "Décrire le contrôle comme une sanction automatique.",
      "Confondre contrôle et recouvrement forcé."
    ],
    relances: [
      "Quelles garanties a le contribuable ?",
      "Comment lutte-t-on contre la fraude fiscale ?"
    ],
    motsCles: ["contrôle fiscal", "programmation", "contradictoire", "redressement", "fraude"],
    source: "Site officiel DGFiP ; mission de contrôle fiscal"
  },

  {
    id: "d-recouvrement",
    cat: 3,
    theme: "Le recouvrement",
    statut: "probable",
    question: "Comment la DGFiP recouvre-t-elle les impôts impayés ?",
    duree: 75,
    enjeu: "Le jury attend une progression logique : amiable, puis forcé, avec des garanties pour l'usager.",
    reponse: [
      "Le recouvrement commence par une phase **amiable** : relances, mise en demeure, proposition d'échéancier et information du contribuable. L'objectif est d'obtenir le paiement ou un accord réaliste, avant toute mesure coercitive.",
      "En cas d'échec, la DGFiP peut engager le recouvrement **forcé** : saisie sur salaire ou compte bancaire, avis à tiers détenteur, saisie de biens, inscription d'hypothèque. Pour les entreprises en difficulté, le **pôle de recouvrement spécialisé** intervient. Des majorations et intérêts s'appliquent.",
      "Le contribuable peut demander un délai, contester ou solliciter une remise gracieuse dans certains cas. Un agent administratif participe au suivi des dossiers, à l'accueil et à l'information, mais **les décisions de poursuite relèvent de la hiérarchie** et d'un cadre juridique strict."
    ],
    attentes: [
      "La distinction amiable / forcé.",
      "L'existence d'échéanciers et de voies de recours."
    ],
    eviter: [
      "Dire que l'agent décide seul d'une saisie.",
      "Présenter le recouvrement comme une simple relance."
    ],
    relances: [
      "Qu'est-ce qu'un avis à tiers détenteur ?",
      "Que faites-vous face à un usager qui ne peut pas payer ?"
    ],
    motsCles: ["recouvrement", "amiable", "ATD", "échéancier", "PRS"],
    source: "Site officiel DGFiP ; missions de recouvrement"
  },

  {
    id: "d-collectivites",
    cat: 3,
    theme: "Les collectivités locales",
    statut: "probable",
    question: "Quel est le rôle de la DGFiP auprès des collectivités locales ?",
    duree: 75,
    enjeu: "La gestion publique locale est une mission méconnue : la citer montre une connaissance solide de la direction.",
    reponse: [
      "La DGFiP est le **comptable des collectivités locales**. Elle tient leurs comptes, exécute les recettes et les dépenses décidées par les ordonnateurs, et contrôle la régularité des opérations. Ce contrôle est une garantie pour l'argent public.",
      "Elle assure aussi une mission de **conseil** : information financière, aide à la compréhension des règles comptables, accompagnement des projets. Les **conseillers aux décideurs locaux**, créés dans le cadre du nouveau réseau de proximité, sont l'un des visages de cette mission.",
      "Enfin, elle gère la **fiscalité locale** — taxe foncière, cotisation foncière des entreprises, taxes annexes — et le cadastre, qui sert de base à ces impositions. Un agent administratif en SGC ou en trésorerie travaille quotidiennement avec les services municipaux et les élus."
    ],
    attentes: [
      "Comptable public, contrôle de la dépense, conseil.",
      "Le lien avec la fiscalité locale et le cadastre."
    ],
    eviter: [
      "Dire que la DGFiP vote les budgets des communes.",
      "Oublier la mission de conseil."
    ],
    relances: [
      "Qu'est-ce qu'un conseiller aux décideurs locaux ?",
      "Comment se passe le contrôle d'une dépense locale ?"
    ],
    motsCles: ["collectivités", "comptable public", "conseil", "fiscalité locale", "cadastre"],
    source: "Rejoindre les Finances publiques ; mission de gestion publique"
  },

  {
    id: "d-cadastre",
    cat: 3,
    theme: "Cadastre et publicité foncière",
    statut: "probable",
    question: "À quoi servent le cadastre et la publicité foncière ?",
    duree: 75,
    enjeu: "Sujet technique mais très DGFiP : il permet de montrer que vous savez ce qui fonde l'impôt local.",
    reponse: [
      "Le **cadastre** est la documentation foncière de la France : il identifie les parcelles, leurs propriétaires et leurs caractéristiques. Il sert de base à la **fiscalité locale** — taxe foncière, cotisation foncière des entreprises — et à l'aménagement du territoire.",
      "La **publicité foncière** consiste à publier et conserver les actes relatifs aux immeubles : ventes, hypothèques, servitudes. Elle sécurise les transactions et permet à chacun de connaître la situation juridique d'un bien. Les services de publicité foncière de la DGFiP en sont responsables.",
      "La DGFiP met à jour le plan cadastral avec les communes et gère les valeurs locatives, qui servent au calcul des impôts locaux. Un agent administratif peut y traiter des demandes, des formalités ou des recherches, avec une exigence de **précision** : une erreur de parcelle ou de propriétaire a des conséquences fiscales et juridiques."
    ],
    attentes: [
      "Le lien cadastre / fiscalité locale.",
      "La sécurisation des transactions par la publicité foncière."
    ],
    eviter: [
      "Confondre cadastre et registre du commerce.",
      "Répondre que c'est un sujet trop technique."
    ],
    relances: [
      "Qui met à jour le cadastre ?",
      "Pourquoi la valeur locative est-elle importante ?"
    ],
    motsCles: ["cadastre", "publicité foncière", "parcelle", "valeur locative", "hypothèque"],
    source: "Site officiel DGFiP ; missions foncières"
  },

  {
    id: "d-depenses-etat",
    cat: 3,
    theme: "La dépense de l'État",
    statut: "probable",
    question: "La DGFiP paie-t-elle les dépenses de l'État ?",
    duree: 75,
    enjeu: "Question qui teste la compréhension de la fonction comptable de l'État, souvent ignorée des candidats.",
    reponse: [
      "Oui, dans le cadre de sa mission de **gestion publique**. La DGFiP tient la comptabilité de l'État et exécute les dépenses et les recettes budgétaires. Elle contrôle la régularité des opérations et produit les comptes de l'État.",
      "Le circuit repose sur la **séparation entre l'ordonnateur et le comptable** : le ministère ordonnateur décide et engage la dépense ; le comptable public vérifie les pièces, la régularité et la disponibilité des crédits, puis paie. Ce contrôle évite les dépenses irrégulières ou sans crédits.",
      "Le service de la fonction financière et comptable de l'État (2FCE) pilote cette mission au niveau central. Les comptes de l'État sont ensuite certifiés par la **Cour des comptes**. Pour un agent, cela signifie travailler avec des procédures strictes et une traçabilité complète."
    ],
    attentes: [
      "La DGFiP comptable de l'État.",
      "La séparation ordonnateur / comptable et la certification."
    ],
    eviter: [
      "Dire que la DGFiP décide des dépenses de l'État.",
      "Confondre budget de l'État et comptabilité des collectivités."
    ],
    relances: [
      "Qu'est-ce que la LOLF ?",
      "Pourquoi la Cour des comptes intervient-elle ?"
    ],
    motsCles: ["comptabilité de l'État", "2FCE", "ordonnateur", "Cour des comptes", "dépense"],
    source: "Site officiel DGFiP ; mission de gestion publique"
  },

  {
    id: "d-retraites",
    cat: 3,
    theme: "Les retraites de l'État",
    statut: "probable",
    question: "Pourquoi la DGFiP gère-t-elle les retraites de l'État ?",
    duree: 60,
    enjeu: "Détail typique de la DGFiP : le citer prouve une connaissance qui dépasse les seuls impôts.",
    reponse: [
      "La DGFiP gère les **pensions des fonctionnaires de l'État** par l'intermédiaire du **service des retraites de l'État (SRE)**, service à compétence nationale. Il instruit les dossiers, calcule les droits, liquide les pensions et les paie.",
      "Cette mission découle de la culture comptable de la direction : payer une pension est une opération de dépense publique qui suppose de vérifier les droits, la carrière et les règles applicables. Le SRE travaille avec les employeurs publics et les régimes de retraite.",
      "Pour un agent administratif, cela peut représenter des tâches de saisie, de contrôle de pièces, d'accueil téléphonique et de suivi de dossiers. **C'est un métier de précision**, où une erreur sur une date ou un indice a des conséquences directes sur la pension d'une personne."
    ],
    attentes: [
      "Le SRE et la liquidation des pensions.",
      "Le lien avec la compétence comptable de la DGFiP."
    ],
    eviter: [
      "Confondre avec l'Agirc-Arrco ou la CNAV.",
      "Penser que la DGFiP gère toutes les retraites françaises."
    ],
    relances: [
      "Que fait concrètement le SRE ?",
      "Quelles qualités faut-il pour ce type de dossier ?"
    ],
    motsCles: ["retraites", "SRE", "pension", "liquidation", "fonctionnaires"],
    source: "Rejoindre les Finances publiques ; services à compétence nationale"
  },

  {
    id: "d-domaine",
    cat: 3,
    theme: "Le Domaine",
    statut: "probable",
    question: "Quelles sont les missions domaniales de la DGFiP ?",
    duree: 60,
    enjeu: "Question de culture DGFiP : peu de candidats la préparent, elle distingue.",
    reponse: [
      "La DGFiP gère le **domaine de l'État** : elle recense et administre les biens immobiliers publics, suit les baux, les acquisitions et les ventes, et veille à la protection du domaine public.",
      "Elle intervient aussi dans l'**évaluation** des biens et dans les opérations immobilières de l'État, avec la Direction nationale d'interventions domaniales. Elle peut délivrer des autorisations d'occupation et poursuivre les occupations sans titre.",
      "Cette mission est moins connue que la fiscalité, mais elle illustre la diversité de la direction. Un agent administratif peut y traiter des courriers, des dossiers de location, des états des lieux ou des demandes d'information, avec le souci de **protéger le patrimoine public**."
    ],
    attentes: [
      "Gestion du patrimoine de l'État, baux, ventes.",
      "La conscience de la protection du domaine public."
    ],
    eviter: [
      "Confondre avec le cadastre, qui est une documentation foncière.",
      "Répondre par une généralité sur l'immobilier."
    ],
    relances: [
      "Qu'est-ce que le domaine public ?",
      "Comment l'État vend-il un bien ?"
    ],
    motsCles: ["Domaine", "patrimoine", "baux", "DNID", "immobilier"],
    source: "Site officiel DGFiP ; directions à compétence nationale"
  },

  {
    id: "d-dgddi-missions",
    cat: 3,
    theme: "La DGDDI",
    statut: "probable",
    question: "Quelles sont les missions de la DGDDI ?",
    duree: 75,
    enjeu: "Le concours C est commun : le jury peut être douanier et attend au moins une connaissance générale de la Douane.",
    reponse: [
      "La **Direction générale des douanes et droits indirects (DGDDI)** est l'administration de la frontière et de la fiscalité indirecte. Elle perçoit les droits de douane, la TVA à l'importation et les **accises** sur les alcools, les tabacs et les énergies.",
      "Elle contrôle les marchandises et les voyageurs, lutte contre les trafics — stupéfiants, contrefaçons, armes, espèces — et protège la santé, l'environnement et la sécurité. Elle assure aussi la **sûreté de la chaîne logistique** et produit les statistiques du commerce extérieur.",
      "Elle dispose d'un réseau de bureaux de douane, de brigades et de services d'enquête, et d'une branche surveillance. Comme la DGFiP, elle recrute des agents de catégorie C par un concours commun, avec une branche administrative et une branche surveillance."
    ],
    attentes: [
      "Fiscalité indirecte et contrôle des flux.",
      "Lutte contre les trafics et protection du territoire."
    ],
    eviter: [
      "Réduire la Douane au contrôle des valises à l'aéroport.",
      "Confondre ses missions avec celles de la police."
    ],
    relances: [
      "Qu'est-ce qu'une accise ?",
      "Pourquoi un concours commun avec la DGFiP ?"
    ],
    motsCles: ["DGDDI", "douane", "accises", "frontière", "trafics"],
    source: "Site officiel de la Douane ; avis de concours commun C"
  },

  {
    id: "d-douane-controle",
    cat: 3,
    theme: "Le métier de douanier",
    statut: "probable",
    question: "Que fait un agent de constatation des douanes ?",
    duree: 75,
    enjeu: "Si le jury est douanier, cette question peut arriver : il faut connaître les deux branches et les tâches de terrain.",
    reponse: [
      "L'agent de constatation des douanes appartient à la **branche administrative** ou à la **branche surveillance**. Il contrôle les marchandises, les moyens de transport et les voyageurs, vérifie les déclarations et constate les infractions.",
      "Il peut travailler en bureau de douane — accueil des opérateurs, saisie des déclarations, contrôle documentaire — ou en brigade, sur le terrain, pour la surveillance des frontières et des flux. Il utilise des outils informatiques et des procédures précises.",
      "Comme l'agent administratif de la DGFiP, il doit être **rigoureux, discret et calme**, et savoir rendre compte. Les deux concours partagent d'ailleurs des épreuves communes, ce qui montre la proximité des compétences attendues."
    ],
    attentes: [
      "Les deux branches et la double dimension bureau / terrain.",
      "Le parallèle avec les compétences d'un agent C de la DGFiP."
    ],
    eviter: [
      "Croire que tous les douaniers portent un uniforme et font des poursuites.",
      "Ignorer la branche administrative."
    ],
    relances: [
      "Quelle branche vous attirerait ?",
      "Quelles qualités sont communes aux deux métiers ?"
    ],
    motsCles: ["agent de constatation", "douane", "surveillance", "bureau", "brigade"],
    source: "Site officiel de la Douane ; concours commun C"
  },

  {
    id: "d-douane-fiscalite",
    cat: 3,
    theme: "La fiscalité douanière",
    statut: "probable",
    question: "Quelles taxes la Douane perçoit-elle ?",
    duree: 60,
    enjeu: "Question de vérification factuelle : elle permet de distinguer fiscalité intérieure et fiscalité de frontière.",
    reponse: [
      "La Douane perçoit les **droits de douane** à l'entrée dans l'Union européenne, selon le tarif douanier commun, ainsi que la **TVA à l'importation** pour les marchandises importées.",
      "Elle perçoit aussi les **accises**, c'est-à-dire les taxes sur les alcools, les tabacs et les produits énergétiques, et diverses taxes affectées liées à ces produits. Ces recettes sont encaissées pour le compte de l'État et, pour partie, de l'Union européenne.",
      "Cette mission complète celle de la DGFiP : la DGFiP gère la fiscalité **intérieure** — revenus, sociétés, impôts locaux — tandis que la Douane intervient sur les **flux internationaux** et les droits indirects. Les deux directions travaillent ensemble sur certains dossiers, notamment les accises."
    ],
    attentes: [
      "Droits de douane, TVA à l'importation, accises.",
      "La distinction avec la fiscalité intérieure de la DGFiP."
    ],
    eviter: [
      "Dire que la Douane perçoit l'impôt sur le revenu.",
      "Oublier la dimension européenne des droits de douane."
    ],
    relances: [
      "Qui fixe les droits de douane ?",
      "Pourquoi les accises sont-elles sensibles ?"
    ],
    motsCles: ["droits de douane", "TVA import", "accises", "UE", "fiscalité indirecte"],
    source: "Site officiel de la Douane ; code des douanes"
  },

  {
    id: "d-concours-commun",
    cat: 3,
    theme: "Le concours commun",
    statut: "officiel",
    question: "Pourquoi le concours de catégorie C est-il commun à la DGFiP et à la Douane ?",
    duree: 60,
    enjeu: "Le candidat doit savoir à quel concours il s'inscrit : c'est un point de crédibilité immédiat.",
    reponse: [
      "Le concours commun C des ministères économiques et financiers est organisé par la DGFiP pour son compte et pour celui de la **DGDDI**. Les épreuves sont communes, mais le candidat choisit la direction qu'il souhaite rejoindre et classe ses vœux.",
      "Cette mutualisation **simplifie l'organisation** et évite de multiplier les concours pour des métiers qui partagent des compétences : sens du service, rigueur, confidentialité, capacité à appliquer des règles et à rendre compte.",
      "Pour le candidat, l'enjeu est de **connaître les deux directions**, car le jury peut être composé de membres de la DGFiP ou de la DGDDI, et une question sur l'autre direction est toujours possible. La branche administrative mène à agent administratif principal des Finances publiques ou à agent de constatation des douanes ; la branche surveillance est propre à la Douane."
    ],
    attentes: [
      "Le concours commun et le choix de direction.",
      "La connaissance des deux branches."
    ],
    eviter: [
      "Croire que le concours est propre à la seule DGFiP.",
      "Ignorer la branche surveillance."
    ],
    relances: [
      "Quelle branche avez-vous choisie ?",
      "Que savez-vous de la DGDDI ?"
    ],
    motsCles: ["concours commun", "DGDDI", "branche administrative", "surveillance", "vœux"],
    source: "Page officielle du concours C, 2026 ; guide ENFiP 2026"
  },

  {
    id: "d-difference",
    cat: 3,
    theme: "DGFiP / DGDDI",
    statut: "probable",
    question: "Quelle est la différence entre la DGFiP et la Douane ?",
    duree: 75,
    enjeu: "Question de synthèse : elle montre si vous avez compris la logique des deux directions du concours commun.",
    reponse: [
      "La **DGFiP** intervient à l'intérieur du territoire : impôts des particuliers et des entreprises, contrôle fiscal, recouvrement, comptabilité de l'État et des collectivités, cadastre, retraites de l'État. Son cœur est la **fiscalité intérieure et la gestion publique**.",
      "La **DGDDI** intervient sur les **frontières et les flux** : droits de douane, TVA à l'importation, accises, contrôle des marchandises et des voyageurs, lutte contre les trafics, statistiques du commerce extérieur. Son cœur est la **fiscalité indirecte et la protection du territoire**.",
      "Les deux directions partagent un même concours de catégorie C et des compétences proches : rigueur, intégrité, sens du service, capacité à travailler en équipe et à rendre compte. **Ce n'est donc pas un choix par défaut** : c'est un choix de métier, entre le guichet fiscal et la frontière."
    ],
    attentes: [
      "Deux périmètres clairement distincts.",
      "Des compétences communes reconnues."
    ],
    eviter: [
      "Dire que les deux font « la même chose ».",
      "Donner une réponse uniquement statutaire."
    ],
    relances: [
      "Lequel des deux métiers vous attire le plus ?",
      "Pourquoi avoir choisi la branche administrative ?"
    ],
    motsCles: ["DGFiP", "DGDDI", "fiscalité intérieure", "frontière", "comparaison"],
    source: "Sites officiels DGFiP et Douane, 2026"
  }

]);
