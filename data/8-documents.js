/*
  DOCUMENTS — bibliothèque des pages photographiées.
  Trois sources : le carnet d'oral imprimé (17 pages, photos partielles), les fiches manuscrites,
  et le dépliant officiel des taxes d'urbanisme. Les images sont dans documents/, les vignettes dans documents/_vignettes/.
*/
window.DOCUMENTS = [

  /* ---------------- carnet d'oral ---------------- */

  {
    id: "g-p02",
    collection: "Carnet d'oral",
    page: "p. 2/17",
    titre: "Le SDIF et la taxe foncière",
    sousTitre: "Chapitre 2 · structures",
    resume: "Le service départemental des impôts fonciers, ses missions, et la mécanique complète de la taxe foncière : base, taux, exonérations.",
    points: [
      "La taxe foncière est due par le propriétaire au 1er janvier de l'année d'imposition.",
      "Base = valeur locative cadastrale ; taux votés par la commune, le département et la région.",
      "Le SDIF évalue les locaux, tient le foncier et gère les demandes de dégrèvement."
    ],
    image: "documents/guide/p02-sdif-taxe-fonciere.jpg",
    vignette: "documents/_vignettes/guide-p02-sdif-taxe-fonciere.jpg",
    mots: ["SDIF", "taxe foncière", "valeur locative", "exonération"]
  },

  {
    id: "g-p03",
    collection: "Carnet d'oral",
    page: "p. 3/17",
    titre: "Le circuit de la dépense publique",
    sousTitre: "Chapitre 2 · BIL et secrétariat général",
    resume: "Les quatre étapes de la dépense, le rôle de l'ordonnateur et du comptable, et l'organisation du secrétariat général du SDIF.",
    points: [
      "Quatre étapes : engagement, liquidation, ordonnancement (mandatement), paiement.",
      "L'ordonnateur décide de la dépense ; le comptable contrôle la régularité et paie.",
      "Le secrétariat général pilote les moyens ; le pôle 2 suit la dépense et la comptabilité."
    ],
    image: "documents/guide/p03-bil-depense-publique.jpg",
    vignette: "documents/_vignettes/guide-p03-bil-depense-publique.jpg",
    mots: ["BIL", "dépense publique", "ordonnateur", "comptable", "SDIF"]
  },

  {
    id: "g-p05",
    collection: "Carnet d'oral",
    page: "p. 5/17",
    titre: "Le SIP en chiffres et dans l'année",
    sousTitre: "Chapitre 2 · service des impôts des particuliers",
    resume: "Le périmètre du SIP, ses compétences fiscales et le rythme des campagnes, mois par mois.",
    points: [
      "Le SIP gère l'impôt sur le revenu, la taxe foncière, la taxe d'habitation et les contributions sociales.",
      "Avril à juin : campagne déclarative ; juillet-août : avis d'imposition ; septembre-décembre : soldes et paiements.",
      "La CSG et la CRDS sont recouvrées avec l'impôt sur le revenu."
    ],
    image: "documents/guide/p05-sip-chiffres-calendrier.jpg",
    vignette: "documents/_vignettes/guide-p05-sip-chiffres-calendrier.jpg",
    mots: ["SIP", "calendrier fiscal", "CSG", "CRDS", "avis d'imposition"]
  },

  {
    id: "g-p07",
    collection: "Carnet d'oral",
    page: "p. 7/17",
    titre: "Les valeurs du service public",
    sousTitre: "Chapitre 3 · entretien",
    resume: "Pourquoi la DGFiP, ce que signifie servir l'usager, et les principes qui structurent chaque réponse.",
    points: [
      "Citer les valeurs : égalité, neutralité, impartialité, laïcité, continuité, secret professionnel.",
      "Montrer le lien avec le quotidien : accueil, explication de la règle, orientation.",
      "La Charte Marianne illustre les engagements d'accueil de la DGFiP."
    ],
    image: "documents/guide/p07-entretien-valeurs-service-public.jpg",
    vignette: "documents/_vignettes/guide-p07-entretien-valeurs-service-public.jpg",
    mots: ["valeurs", "service public", "Charte Marianne", "égalité"]
  },

  {
    id: "g-p08",
    collection: "Carnet d'oral",
    page: "p. 8/17",
    titre: "Parcours, mobilité et prise de poste",
    sousTitre: "Chapitre 3 · entretien",
    resume: "Questions sur le parcours, l'affectation, les premiers mois et la façon de se projeter dans un service.",
    points: [
      "Relier chaque étape du parcours à une compétence utile au poste.",
      "Assumer la mobilité : le concours ouvre un poste national, pas un poste de proximité garanti.",
      "Décrire une prise de poste réaliste : observation, notes, questions, montée en autonomie."
    ],
    image: "documents/guide/p08-entretien-parcours-mobilite.jpg",
    vignette: "documents/_vignettes/guide-p08-entretien-parcours-mobilite.jpg",
    mots: ["parcours", "mobilité", "prise de poste", "affectation"]
  },

  {
    id: "g-p09",
    collection: "Carnet d'oral",
    page: "p. 9/17",
    titre: "Intelligence artificielle, erreur et questions au jury",
    sousTitre: "Chapitre 3 · entretien",
    resume: "Les réponses attendues sur l'IA à la DGFiP, la gestion d'une erreur et les questions à poser en fin d'entretien.",
    points: [
      "L'IA à la DGFiP : aide au contrôle, détection d'anomalies, mais décision toujours humaine.",
      "Une erreur se traite par le signalement immédiat, la correction et la traçabilité.",
      "Préparer deux questions au jury : organisation du service, parcours de formation."
    ],
    image: "documents/guide/p09-entretien-ia-erreur.jpg",
    vignette: "documents/_vignettes/guide-p09-entretien-ia-erreur.jpg",
    mots: ["IA", "erreur", "questions au jury", "contrôle"]
  },

  {
    id: "g-p10",
    collection: "Carnet d'oral",
    page: "p. 10/17",
    titre: "Postes, arguments et accueil difficile",
    sousTitre: "Chapitre 3 · entretien",
    resume: "Comment parler de ses postes préférés, de ses trois arguments, et réagir à un usager qui ne comprend pas le français.",
    points: [
      "Citer quatre services en trente secondes : SIP, SIE, SGC, trésorerie.",
      "Trois arguments : rigueur, sens du service, capacité à apprendre et à rendre compte.",
      "Usager non francophone : ralentir, reformuler, s'appuyer sur un collègue ou un document traduit."
    ],
    image: "documents/guide/p10-entretien-postes-arguments.jpg",
    vignette: "documents/_vignettes/guide-p10-entretien-postes-arguments.jpg",
    mots: ["postes", "arguments", "accueil", "langue"]
  },

  {
    id: "g-p11",
    collection: "Carnet d'oral",
    page: "p. 11/17",
    titre: "Les 14 situations clés",
    sousTitre: "Chapitre 3 · mises en situation",
    resume: "Le tableau des quatorze situations les plus probables, avec la réaction attendue et l'erreur à éviter.",
    points: [
      "Chaque situation se traite en trois temps : écouter, appliquer la règle, rendre compte.",
      "Toujours distinguer ce que l'agent peut décider seul de ce qui remonte à la hiérarchie.",
      "Les deux premières situations sont corrigées en détail sur cette page."
    ],
    image: "documents/guide/p11-situations-les-14.jpg",
    vignette: "documents/_vignettes/guide-p11-situations-les-14.jpg",
    mots: ["situations", "14 situations", "méthode", "hiérarchie"]
  },

  {
    id: "g-p12",
    collection: "Carnet d'oral",
    page: "p. 12/17",
    titre: "Accueil et relations de travail",
    sousTitre: "Chapitre 3 · mises en situation",
    resume: "Douze situations corrigées : usager mécontent, collègue qui ne fait pas sa part, demande hors procédure.",
    points: [
      "Un usager mécontent : accueillir l'émotion, reformuler le problème, proposer une solution ou une orientation.",
      "Un collègue en difficulté : en parler d'abord avec lui, puis alerter le responsable si besoin.",
      "Ne jamais promettre ce que le service ne peut pas faire."
    ],
    image: "documents/guide/p12-situations-accueil-public.jpg",
    vignette: "documents/_vignettes/guide-p12-situations-accueil-public.jpg",
    mots: ["situations", "accueil", "collègue", "conflit"]
  },

  {
    id: "g-p13",
    collection: "Carnet d'oral",
    page: "p. 13/17",
    titre: "Doutes, règles et confidentialité",
    sousTitre: "Chapitre 3 · mises en situation",
    resume: "Les situations où il faut savoir dire non, alerter ou demander un arbitrage : secret, cadeau, dossier d'un proche.",
    points: [
      "Un dossier d'un proche : se retirer du traitement et le signaler.",
      "Un cadeau ou une enveloppe : refuser avec tact, c'est une question de probité.",
      "En cas de doute : demander à la hiérarchie, jamais improviser sur une règle écrite."
    ],
    image: "documents/guide/p13-situations-doutes-regles.jpg",
    vignette: "documents/_vignettes/guide-p13-situations-doutes-regles.jpg",
    mots: ["secret", "probité", "déontologie", "situations"]
  },

  {
    id: "g-p16",
    collection: "Carnet d'oral",
    page: "p. 16/17",
    titre: "Sigles et cinq sujets d'actualité",
    sousTitre: "Chapitre 5 · actualité",
    resume: "Le vocabulaire à ne pas confondre, les cinq dossiers à préparer et deux questions de cours sur le prélèvement à la source.",
    points: [
      "Les cinq sujets : NRP, facturation électronique, IA, suppression de la taxe d'habitation, ESSOC.",
      "Prélèvement à la source : l'impôt est retenu chaque mois, la régularisation se fait en fin d'année.",
      "La déclaration en ligne est obligatoire pour la plupart des foyers, avec accompagnement en service."
    ],
    image: "documents/guide/p16-actualite-5-sujets.jpg",
    vignette: "documents/_vignettes/guide-p16-actualite-5-sujets.jpg",
    mots: ["sigles", "actualité", "PAS", "déclaration en ligne", "ESSOC"]
  },

  {
    id: "g-p17",
    collection: "Carnet d'oral",
    page: "p. 17/17",
    titre: "Checklist de la veille",
    sousTitre: "Chapitre 5 · checklist J-1",
    resume: "La liste des questions les plus probables à relire la veille, avec les réponses courtes à retenir.",
    points: [
      "Dix questions à savoir répondre en moins d'une minute chacune.",
      "Taxe d'habitation : supprimée sur les résidences principales, maintenue sur les secondaires.",
      "Catégories A, B, C : niveau de recrutement et de carrière, pas niveau de compétence."
    ],
    image: "documents/guide/p17-checklist-j1.jpg",
    vignette: "documents/_vignettes/guide-p17-checklist-j1.jpg",
    mots: ["checklist", "révision", "taxe d'habitation", "catégories"]
  },

  /* ---------------- mémo ---------------- */

  {
    id: "m-valeurs",
    collection: "Mémo",
    page: "1 page",
    titre: "Principes et valeurs du fonctionnaire",
    sousTitre: "Tableau à retenir par cœur",
    resume: "Les douze devoirs du fonctionnaire, classés en trois blocs : envers les usagers, intégrité, envers l'administration.",
    points: [
      "Envers les usagers : neutralité, impartialité, égalité de traitement, laïcité, secret professionnel, continuité.",
      "Intégrité : probité, dignité, exemplarité.",
      "Envers l'administration : obéissance hiérarchique, loyauté, devoir de réserve, rendre compte."
    ],
    image: "documents/memoires/principes-et-valeurs.jpg",
    vignette: "documents/_vignettes/memoires-principes-et-valeurs.jpg",
    mots: ["valeurs", "déontologie", "probité", "réserve", "laïcité"]
  },

  /* ---------------- fiches manuscrites ---------------- */

  {
    id: "f-sip-organisation",
    collection: "Fiches",
    page: "Fiche 1",
    titre: "L'organisation du SIP",
    sousTitre: "Trois équipes et un calendrier",
    resume: "Le SIP découpé en trois équipes, avec le calendrier annuel des campagnes.",
    points: [
      "Équipe 1 : assiette et recouvrement simple.",
      "Équipe 2 : contrôle, recouvrement complexe et contentieux.",
      "Équipe 3 : comptabilité et appui au service."
    ],
    image: "documents/fiches/01-sip-organisation.jpg",
    vignette: "documents/_vignettes/fiches-01-sip-organisation.jpg",
    mots: ["SIP", "organisation", "équipes", "calendrier"]
  },

  {
    id: "f-sip-quotidien",
    collection: "Fiches",
    page: "Fiche 2",
    titre: "Le rôle quotidien du SIP",
    sousTitre: "Schéma des missions",
    resume: "Un schéma des missions du SIP : accueil, assiette, recouvrement, contentieux.",
    points: [
      "Le SIP est le point de contact unique du particulier.",
      "Il instruit, calcule, encaisse et traite les réclamations simples.",
      "L'agent administratif y assure l'accueil, la saisie et la préparation des dossiers."
    ],
    image: "documents/fiches/02-sip-role-quotidien.jpg",
    vignette: "documents/_vignettes/fiches-02-sip-role-quotidien.jpg",
    mots: ["SIP", "missions", "accueil", "réclamation"]
  },

  {
    id: "f-campagnes",
    collection: "Fiches",
    page: "Fiche 3",
    titre: "Les grandes campagnes",
    sousTitre: "Le rythme de l'année fiscale",
    resume: "Les trois temps forts de l'année : campagne d'impôt sur le revenu, campagne des avis, taxe foncière.",
    points: [
      "Avril à juin : campagne d'impôt sur le revenu.",
      "Septembre à novembre : campagne des avis et paiement du solde.",
      "La taxe foncière arrive à l'automne, avec les avis et les dégrèvements."
    ],
    image: "documents/fiches/03-grandes-campagnes.jpg",
    vignette: "documents/_vignettes/fiches-03-grandes-campagnes.jpg",
    mots: ["campagnes", "impôt sur le revenu", "avis", "taxe foncière"]
  },

  {
    id: "f-qcm",
    collection: "Fiches",
    page: "Fiche 5",
    titre: "QCM DGFiP : l'essentiel",
    sousTitre: "Organisation, missions, vocabulaire",
    resume: "Une fiche de révision brute : ministère, directions, quatre missions, vocabulaire fiscal et bases de TVA.",
    points: [
      "Bercy réunit DGFiP, DGDDI, DGCCRF, INSEE et DGE.",
      "Quatre missions : fiscalité, gestion publique, foncier, missions diverses.",
      "Assiette, contrôle et recouvrement : trois étapes distinctes de la chaîne fiscale."
    ],
    image: "documents/fiches/05-qcm-dgfip-organisation.jpg",
    vignette: "documents/_vignettes/fiches-05-qcm-dgfip-organisation.jpg",
    mots: ["QCM", "organisation", "missions", "TVA", "vocabulaire"]
  },

  {
    id: "f-revenus",
    collection: "Fiches",
    page: "Fiche 6",
    titre: "Les catégories de revenus",
    sousTitre: "Ce qui entre dans l'impôt sur le revenu",
    resume: "Les huit catégories de revenus imposables, avec un exemple concret pour chacune.",
    points: [
      "Traitements et salaires, pensions et rentes.",
      "Revenus fonciers, revenus mobiliers, plus-values.",
      "Bénéfices agricoles, BIC, BNC : les revenus des indépendants."
    ],
    image: "documents/fiches/06-categories-de-revenus.jpg",
    vignette: "documents/_vignettes/fiches-06-categories-de-revenus.jpg",
    mots: ["revenus", "IR", "BIC", "BNC", "foncier"]
  },

  /* ---------------- officiel ---------------- */

  {
    id: "o-urbanisme",
    collection: "Officiel",
    page: "Dépliant",
    titre: "Taxes d'urbanisme",
    sousTitre: "Déclaration de travaux, formulaire TU 2025",
    resume: "Le dépliant officiel de la déclaration de travaux en vue du paiement des taxes d'urbanisme.",
    points: [
      "À déclarer dans les 90 jours suivant l'achèvement des travaux.",
      "La taxe d'aménagement et la taxe d'archéologie préventive financent les équipements publics.",
      "La déclaration se fait en ligne, avec les justificatifs de surface."
    ],
    image: "documents/officiels/taxes-urbanisme-tu2025.jpg",
    vignette: "documents/_vignettes/officiels-taxes-urbanisme-tu2025.jpg",
    mots: ["urbanisme", "taxe d'aménagement", "travaux", "TU"]
  }

];
