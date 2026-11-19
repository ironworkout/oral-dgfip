/* ============================================================
   Oral DGFiP — logique de l'application
   - banque : data/*.js (window.BANQUE)
   - sauvegarde : localStorage + fichier JSON (export / Google Drive)
   - répétition espacée : intervalles adaptatifs par niveau
   ============================================================ */

(function () {
  "use strict";

  var BANQUE = window.BANQUE || [];
  var CLE = "oral-dgfip-v1";
  var CLE_DRIVE = "oral-dgfip-drive-v1";
  var GOOGLE_CLIENT_ID = "731283926358-viam3ulpgna14flfdeb9m92l8s620hoi.apps.googleusercontent.com";
  var DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.file";
  var DRIVE_FICHIER = "oral-dgfip-revision.json";
  var CONCOURS_DEFAUT = "2027-01-04";

  var CATEGORIES = {
    1: { nom: "Parcours & présentation", court: "Parcours" },
    2: { nom: "Motivations", court: "Motivations" },
    3: { nom: "DGFiP & DGDDI", court: "DGFiP" },
    4: { nom: "Savoir-être & déontologie", court: "Savoir-être" },
    5: { nom: "Mises en situation", court: "Situations" },
    6: { nom: "Questions pièges", court: "Pièges" },
    7: { nom: "Culture & actualité", court: "Actualité" }
  };

  var NIVEAU = {
    encours: { label: "À travailler", aide: "Je ne maîtrise pas encore", classe: "vert", poids: 0 },
    presque: { label: "Presque", aide: "L'essentiel est là, il manque des précisions", classe: "orange", poids: 0.5 },
    pret: { label: "Prêt", aide: "Je peux le dire à l'oral", classe: "bleu", poids: 1 }
  };

  var INTERVALLES_PRET = [7, 14, 30, 60, 120];
  var MODES = { aleatoire: "Aléatoire", intelligente: "Intelligente", ciblee: "Révision ciblée", categorie: "Par catégorie", ratees: "Questions ratées" };
  var STATUTS = { officiel: "Officiel", probable: "Probable", piege: "Piège", methode: "Méthode" };

  var longueur = 5;
  var revele = false;
  var filtrePartie = 0;
  var filtreStatut = "tous";
  var filtreNiveau = "tous";
  var recherche = "";
  var editId = null;
  var modaleId = null;

  var chrono = { id: null, restant: 0, interval: null };
  var pitchChrono = { interval: null, ecoule: 0 };

  /* ---------------- utilitaires ---------------- */

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  function echapper(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function texteRiche(t) {
    return echapper(t)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function texteRicheTrous(t) {
    return echapper(t)
      .replace(/\*\*([^*]+)\*\*/g, '<span class="trou" data-trou="1" role="button" tabindex="0" aria-label="Terme masqué, cliquer pour révéler">$1</span>')
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function normaliser(t) {
    return String(t == null ? "" : t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function pluriel(n, mot) {
    return n + " " + mot + (n > 1 ? "s" : "");
  }

  function formatSecondes(s) {
    s = Math.max(0, Math.round(s));
    if (s < 60) return s + " s";
    return Math.floor(s / 60) + " min " + String(s % 60).padStart(2, "0") + " s";
  }

  /* ---------------- dates ---------------- */

  function jourISO(d) {
    var an = d.getFullYear();
    var mois = String(d.getMonth() + 1).padStart(2, "0");
    var jour = String(d.getDate()).padStart(2, "0");
    return an + "-" + mois + "-" + jour;
  }

  function aujourdhui() { return jourISO(new Date()); }

  function dansNJours(n) {
    var d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + n);
    return jourISO(d);
  }

  function ecartJours(depuis, jusqu) {
    var a = new Date(depuis + "T12:00:00");
    var b = new Date(jusqu + "T12:00:00");
    return Math.round((b - a) / 86400000);
  }

  var MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

  function dateCourte(iso) {
    if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return "";
    var p = iso.split("-");
    return Number(p[2]) + " " + MOIS[Number(p[1]) - 1] + " " + p[0];
  }

  function joursRestants() {
    var c = new Date(etat.concours + "T12:00:00");
    if (isNaN(c.getTime())) return null;
    var t = new Date();
    t.setHours(12, 0, 0, 0);
    return Math.round((c - t) / 86400000);
  }

  /* ---------------- état ---------------- */

  function etatVide() {
    return {
      version: 1,
      questions: {},
      seance: null,
      derniereSeance: null,
      evaluations: 0,
      jours: [],
      parJour: {},
      preferences: { trous: false },
      reponses: {},
      objectifCelebre: {},
      concours: CONCOURS_DEFAUT,
      derniereSauvegarde: null,
      pitch: { accroche: "", parcours: "", motivations: "", projet: "", maj: null }
    };
  }

  function charger() {
    try {
      var brut = localStorage.getItem(CLE);
      if (!brut) return etatVide();
      var objet = JSON.parse(brut);
      if (!objet || typeof objet !== "object") return etatVide();
      return normaliserEtat(objet);
    } catch (e) {
      return etatVide();
    }
  }

  function normaliserEtat(objet) {
    var base = etatVide();
    var o = objet || {};
    for (var k in base) if (!(k in o)) o[k] = base[k];
    if (!o.questions || typeof o.questions !== "object" || Array.isArray(o.questions)) o.questions = {};
    if (!o.parJour || typeof o.parJour !== "object" || Array.isArray(o.parJour)) o.parJour = {};
    if (!o.preferences || typeof o.preferences !== "object") o.preferences = { trous: false };
    if (typeof o.preferences.trous !== "boolean") o.preferences.trous = false;
    if (!o.reponses || typeof o.reponses !== "object" || Array.isArray(o.reponses)) o.reponses = {};
    if (!o.objectifCelebre || typeof o.objectifCelebre !== "object") o.objectifCelebre = {};
    if (!o.jours || !Array.isArray(o.jours)) o.jours = [];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(o.concours || "")) o.concours = CONCOURS_DEFAUT;
    if (!o.pitch || typeof o.pitch !== "object") o.pitch = base.pitch;
    if (!o.version) o.version = 1;
    return o;
  }

  var etat = charger();

  function sauverLocal() {
    try {
      localStorage.setItem(CLE, JSON.stringify(etat));
      return true;
    } catch (e) {
      toast("Sauvegarde impossible : le stockage du navigateur est plein.");
      return false;
    }
  }

  function sauver() {
    var ok = sauverLocal();
    if (ok) programmerDrive();
    return ok;
  }

  function remplacerEtat(nouveau) {
    var propre = normaliserEtat(nouveau);
    for (var k in etat) if (Object.prototype.hasOwnProperty.call(etat, k)) delete etat[k];
    for (var j in propre) if (Object.prototype.hasOwnProperty.call(propre, j)) etat[j] = propre[j];
  }

  function noterSauvegarde() {
    etat.derniereSauvegarde = aujourdhui();
    sauver();
    rendreAccueil();
  }

  /* ---------------- bilan ---------------- */

  function mesurerQuestions(liste) {
    var compte = { encours: 0, presque: 0, pret: 0 };
    var somme = 0;
    var travaillees = 0;
    var aRevoir = 0;
    var jour = aujourdhui();
    liste.forEach(function (q) {
      var f = etat.questions[q.id];
      if (!f || !f.niveau || !NIVEAU[f.niveau]) return;
      compte[f.niveau]++;
      somme += NIVEAU[f.niveau].poids;
      travaillees++;
      if (f.prochaineRevision && f.prochaineRevision <= jour) aRevoir++;
    });
    return {
      total: liste.length,
      compte: compte,
      travaillees: travaillees,
      aRevoir: aRevoir,
      pct: liste.length ? Math.round((somme / liste.length) * 100) : 0
    };
  }

  function bilanGlobal() { return mesurerQuestions(BANQUE); }

  function bilanCategorie(cat) {
    var b = mesurerQuestions(BANQUE.filter(function (q) { return q.cat === cat; }));
    return { total: b.total, pct: b.pct, travaillees: b.travaillees };
  }

  function serieJours() {
    var jours = etat.jours || [];
    if (!jours.length) return 0;
    var set = {};
    jours.forEach(function (j) { set[j] = true; });
    var n = 0;
    var d = new Date();
    d.setHours(12, 0, 0, 0);
    if (!set[jourISO(d)]) {
      d.setDate(d.getDate() - 1);
      if (!set[jourISO(d)]) return 0;
    }
    while (set[jourISO(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function fiche(id) {
    if (!etat.questions[id]) {
      etat.questions[id] = {
        niveau: null, derniereRevision: null, prochaineRevision: null,
        nbTravaux: 0, serie: 0, intervalle: null, historique: []
      };
    }
    var f = etat.questions[id];
    if (!f.historique) f.historique = [];
    return f;
  }

  function estReportee(f) {
    return !!(f && f.reportJusquA === aujourdhui());
  }

  function enregistrerJour() {
    var j = aujourdhui();
    if (etat.jours.indexOf(j) === -1) { etat.jours.push(j); etat.jours.sort(); }
  }

  /* ---------------- répétition espacée ---------------- */

  function planifier(f, niveau) {
    var avant = f.niveau;
    var jour = aujourdhui();
    var base;

    if (!f.facilite) f.facilite = 2.5;
    if (!f.presqueSerie) f.presqueSerie = 0;
    if (!f.rechutes) f.rechutes = 0;
    if (!f.parfaitsSuite) f.parfaitsSuite = 0;

    if (niveau === "encours") {
      if (avant && avant !== "encours") f.rechutes += 1;
      f.serie = 0;
      f.presqueSerie = 0;
      f.parfaitsSuite = 0;
      f.facilite = Math.max(1.3, f.facilite - 0.25);
      base = 1;
    } else if (niveau === "presque") {
      f.presqueSerie = Math.min(f.presqueSerie + 1, 3);
      f.serie = Math.max(0, (f.serie || 0) - 1);
      f.parfaitsSuite = 0;
      f.facilite = Math.max(1.3, f.facilite - 0.15);
      base = 2 + 2 * (f.presqueSerie - 1);
    } else {
      f.serie = avant === "pret" ? Math.min((f.serie || 0) + 1, INTERVALLES_PRET.length - 1) : 0;
      f.presqueSerie = 0;
      f.parfaitsSuite += 1;
      f.facilite = Math.min(3, f.facilite + 0.1);
      base = INTERVALLES_PRET[f.serie];
      if (f.parfaitsSuite >= 2) { f.fragile = false; f.rechutes = 0; }
    }

    if (f.rechutes >= 3) f.fragile = true;

    var intervalle = Math.round(base * (f.facilite / 2.5));
    intervalle = Math.max(1, Math.min(180, intervalle));
    if (f.fragile && intervalle > 7) intervalle = 7;

    /* Rien ne doit tomber après l'oral : dernière revue la veille au plus tard. */
    var joursAvant = joursRestants();
    if (joursAvant !== null && joursAvant > 0) {
      var limite = Math.max(1, joursAvant - 1);
      if (intervalle > limite) intervalle = limite;
    }

    f.niveau = niveau;
    f.nbTravaux = (f.nbTravaux || 0) + 1;
    f.derniereRevision = jour;
    f.intervalle = intervalle;
    f.prochaineRevision = dansNJours(intervalle);
    f.historique.push({ jour: jour, avant: avant, apres: niveau });
    if (f.historique.length > 60) f.historique = f.historique.slice(-60);
  }

  /* Taux de réussite des douze dernières questions travaillées : la dernière
     note de chaque question, pour que les répétitions ne pèsent pas douze fois. */
  function reussiteRecente() {
    var notes = [];
    BANQUE.forEach(function (q) {
      var f = etat.questions[q.id];
      if (f && f.historique && f.historique.length) {
        notes.push(f.historique[f.historique.length - 1]);
      }
    });
    if (!notes.length) return null;
    notes.sort(function (a, b) { return (a.jour || "").localeCompare(b.jour || ""); });
    var poids = { pret: 1, presque: 0.6, encours: 0 };
    var derniers = notes.slice(-12);
    var somme = 0;
    derniers.forEach(function (h) { somme += poids[h.apres] || 0; });
    return somme / derniers.length;
  }

  function parId(id) {
    for (var i = 0; i < BANQUE.length; i++) if (BANQUE[i].id === id) return BANQUE[i];
    return null;
  }

  function melanger(liste) {
    var a = liste.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function questionsDisponibles() {
    return BANQUE.filter(function (q) { return !estReportee(etat.questions[q.id]); });
  }

  function questionsARevoir() {
    var j = aujourdhui();
    return BANQUE.filter(function (q) {
      var f = etat.questions[q.id];
      return f && f.niveau && f.prochaineRevision && f.prochaineRevision <= j;
    });
  }

  /* Objectif du jour : la charge à revoir, jamais moins de 5 ni plus de 12. */
  function objectifJour() {
    return Math.min(12, Math.max(5, Math.round(questionsARevoir().length / 2)));
  }

  function aleatoire(n) {
    return melanger(questionsDisponibles()).slice(0, n);
  }

  /* Séance intelligente : priorité aux questions dues, découverte progressive,
     deux questions maximum par catégorie et jamais deux fragiles de suite. */
  function intelligente(n) {
    var j = aujourdhui();
    var infos = questionsDisponibles().map(function (q) {
      return { q: q, f: etat.questions[q.id] || {} };
    });

    var dues = infos.filter(function (x) { return x.f.niveau && x.f.prochaineRevision && x.f.prochaineRevision <= j; });
    var nouvelles = infos.filter(function (x) { return !x.f.niveau; });
    var plusTard = infos.filter(function (x) { return x.f.niveau && (!x.f.prochaineRevision || x.f.prochaineRevision > j); });

    var base = { encours: 120, presque: 55, pret: 12 };
    dues.forEach(function (x) {
      var retard = Math.max(0, ecartJours(x.f.prochaineRevision, j));
      x.score = (base[x.f.niveau] || 0) + Math.min(retard, 14) * 7
        + (x.f.niveau === "encours" ? 15 : 0) + (x.f.fragile ? 30 : 0) + Math.random() * 8;
    });
    dues.sort(function (a, b) { return b.score - a.score; });

    /* La découverte suit les résultats : plus de réussites ouvrent plus de
       places aux nouveautés ; les échecs les referment. Une séance garde
       toujours au moins une nouveauté tant que la banque n'est pas couverte. */
    var taux = reussiteRecente();
    var partNouvelles = taux === null ? 0.4 : (taux >= 0.85 ? 0.6 : (taux >= 0.65 ? 0.4 : (taux >= 0.45 ? 0.2 : 0)));
    var restantes = BANQUE.length - bilanGlobal().travaillees;
    var plancher = restantes > 0 ? (n >= 10 ? 2 : 1) : 0;
    var maxNouvelles = Math.min(nouvelles.length, Math.max(Math.round(n * partNouvelles), plancher));

    plusTard.sort(function (a, b) {
      return (a.f.prochaineRevision || "9999").localeCompare(b.f.prochaineRevision || "9999");
    });

    var pool = dues.concat(plusTard, melanger(nouvelles));
    var choix = [];
    var deja = {};
    var parPartie = {};
    var fragileSuite = false;
    var nbNouvelles = 0;

    function prendre(x, souple, seulementNouvelle) {
      if (!x || deja[x.q.id]) return false;
      var estNouvelle = !x.f.niveau;
      if (seulementNouvelle === true && !estNouvelle) return false;
      if (seulementNouvelle === false && estNouvelle) return false;
      if (estNouvelle && nbNouvelles >= maxNouvelles) return false;
      if (!souple) {
        if ((parPartie[x.q.cat] || 0) >= 2) return false;
        if (x.f.fragile && fragileSuite) return false;
      }
      choix.push(x.q);
      deja[x.q.id] = true;
      parPartie[x.q.cat] = (parPartie[x.q.cat] || 0) + 1;
      fragileSuite = !!x.f.fragile;
      if (estNouvelle) nbNouvelles++;
      return true;
    }

    /* échauffement : une question prête due, non fragile */
    for (var w = 0; w < dues.length && choix.length === 0; w++) {
      if (dues[w].f.niveau === "pret" && !dues[w].f.fragile) prendre(dues[w], false);
    }

    var plafondNonNouvelles = Math.max(0, n - maxNouvelles);
    for (var i = 0; i < pool.length && choix.length < plafondNonNouvelles; i++) prendre(pool[i], false, false);
    for (var i2 = 0; i2 < pool.length && choix.length < n && nbNouvelles < maxNouvelles; i2++) prendre(pool[i2], false, true);
    for (var i3 = 0; i3 < pool.length && choix.length < n; i3++) prendre(pool[i3], false, null);
    for (var k = 0; k < pool.length && choix.length < n; k++) prendre(pool[k], true, null);

    var secours = melanger(BANQUE);
    for (var f2 = 0; f2 < secours.length && choix.length < n; f2++) {
      if (!deja[secours[f2].id] && !estReportee(etat.questions[secours[f2].id])) {
        choix.push(secours[f2]);
        deja[secours[f2].id] = true;
      }
    }

    /* placer les nouvelles questions au milieu de la séance */
    var nouvellesChoisies = choix.filter(function (q) { return !etat.questions[q.id] || !etat.questions[q.id].niveau; });
    if (nouvellesChoisies.length && choix.length > 2) {
      var autres = choix.filter(function (q) { return nouvellesChoisies.indexOf(q) === -1; });
      var milieu = Math.max(1, Math.floor(autres.length / 2));
      for (var m = 0; m < nouvellesChoisies.length; m++) autres.splice(milieu + m, 0, nouvellesChoisies[m]);
      choix = autres;
    }

    return choix.slice(0, n);
  }

  function ciblee(niveau, n) {
    var liste = questionsDisponibles().filter(function (q) {
      var f = etat.questions[q.id];
      return f && f.niveau === niveau;
    });
    liste.sort(function (a, b) {
      var fa = etat.questions[a.id], fb = etat.questions[b.id];
      return (fa.prochaineRevision || "").localeCompare(fb.prochaineRevision || "");
    });
    return liste.slice(0, n);
  }

  function parCategorie(cat, n) {
    var liste = questionsDisponibles().filter(function (q) { return q.cat === cat; });
    return melanger(liste).slice(0, n);
  }

  /* ---------------- séance ---------------- */

  function lancerSeance(mode, questions) {
    questions = (questions || []).filter(function (q) { return !estReportee(etat.questions[q.id]); });
    if (!questions.length) {
      toast("Aucune question disponible pour ce mode.");
      return;
    }
    etat.seance = {
      mode: mode,
      ids: questions.map(function (q) { return q.id; }),
      index: 0,
      evaluations: {},
      debut: new Date().toISOString(),
      finie: false
    };
    revele = false;
    sauver();
    afficher("seance");
  }

  function evaluer(id, niveau) {
    var s = etat.seance;
    if (!s || !NIVEAU[niveau]) return;
    var f = fiche(id);
    var deja = s.evaluations[id];
    if (deja && deja.snapshot) {
      try { Object.assign(f, JSON.parse(deja.snapshot)); } catch (e) {}
    }
    var snapshot = JSON.stringify(f);
    var avant = f.niveau;
    planifier(f, niveau);
    s.evaluations[id] = { avant: avant, apres: niveau, snapshot: snapshot, jour: aujourdhui() };

    var jour = aujourdhui();
    if (!deja) {
      etat.evaluations = (etat.evaluations || 0) + 1;
      etat.parJour[jour] = (etat.parJour[jour] || 0) + 1;
      etat.objectifCelebre = etat.objectifCelebre || {};
      if (etat.parJour[jour] >= objectifJour() && !etat.objectifCelebre[jour]) {
        etat.objectifCelebre[jour] = true;
        toast("Objectif du jour atteint : " + etat.parJour[jour] + " questions. Bien joué.");
      }
    }
    enregistrerJour();
    sauver();
    majEntete();
    rendreSeance();
  }

  function reporterQuestion(id) {
    if (!id) return;
    var s = etat.seance;
    fiche(id).reportJusquA = aujourdhui();

    if (s) {
      var i = s.ids.indexOf(id);
      if (i !== -1) s.ids.splice(i, 1);
      if (!s.ids.length) {
        etat.seance = null;
        sauver();
        toast("Séance reportée : les questions reviendront demain.");
        afficher("accueil");
        return;
      }
      if (s.index >= s.ids.length) s.index = s.ids.length - 1;
    }

    sauver();
    revele = false;
    if (s) rendreSeance();
    toast("Question reportée à demain.");
  }

  function suivante() {
    var s = etat.seance;
    if (!s) return;
    if (!s.evaluations[s.ids[s.index]]) {
      toast("Choisis ton niveau avant de passer à la suite.");
      return;
    }
    s.index++;
    revele = false;
    if (s.index >= s.ids.length) { terminerSeance(); return; }
    sauver();
    rendreSeance();
  }

  function terminerSeance() {
    var s = etat.seance;
    if (!s) return;
    if (!s.finie) {
      s.finie = true;
      s.fin = new Date().toISOString();
      etat.derniereSeance = JSON.parse(JSON.stringify(s));
      sauver();
    }
    afficher("bilan");
  }

  /* ---------------- rendu : blocs réponse ---------------- */

  function blocsReponse(q) {
    var textes = q.reponse || [];
    var numeros = 0;
    return textes.map(function (p, i) {
      var role;
      if (i === 0) role = "intro";
      else if (i === textes.length - 1) role = "conclusion";
      else role = "dev";
      var libelle;
      if (role === "intro") libelle = "Ouverture";
      else if (role === "conclusion") libelle = "Clôture";
      else { numeros++; libelle = "Développement " + numeros; }
      return { role: role, libelle: libelle, texte: p };
    });
  }

  function rendreReponse(q, options) {
    var opts = options || {};
    var edition = !!opts.edition;
    var trous = etat.preferences.trous && !edition;
    var perso = etat.reponses && etat.reponses[q.id];
    var html = "";

    html += '<div class="reponse__barre">' +
      '<span class="reponse__legende">' + (edition ? "Ma réponse" : "Réponse modèle") + "</span>" +
      '<div class="reponse__outils">' +
        (edition ? "" :
          '<button type="button" class="mini-btn ' + (trous ? "actif" : "") + '" data-action="trous">Mots masqués</button>' +
          '<button type="button" class="mini-btn" data-action="editer" data-id="' + q.id + '">' + (perso ? "Modifier ma réponse" : "Ma réponse") + "</button>") +
      "</div>" +
    "</div>";

    if (edition) {
      html += '<p class="bloc__aide" style="margin-bottom:8px">Écris ta propre réponse. Elle reste sur cet appareil et dans ta sauvegarde, elle n\'est jamais publiée.</p>' +
        '<textarea id="editeur-reponse" class="editeur" style="width:100%;min-height:220px;border:1px solid var(--trait);border-radius:13px;padding:12px 14px;font-size:14.5px;line-height:1.55;resize:vertical" aria-label="Ma réponse">' +
          echapper(perso && perso.texte ? perso.texte : "") +
        "</textarea>" +
        '<div class="sauvegarde__actions" style="margin-top:10px">' +
          '<button type="button" class="btn btn--primaire" data-action="enregistrer-reponse" data-id="' + q.id + '">Enregistrer</button>' +
          '<button type="button" class="btn btn--fantome" data-action="annuler-edition">Annuler</button>' +
          (perso ? '<button type="button" class="btn btn--fantome" data-action="reinitialiser-reponse" data-id="' + q.id + '">Rétablir</button>' : "") +
        "</div>";
      return html;
    }

    if (perso && perso.texte) {
      html += '<div class="ma-reponse"><div class="ma-reponse__tete"><span class="ma-reponse__titre">Ma réponse</span></div>' +
        "<p>" + texteRiche(perso.texte).replace(/\n+/g, "<br>") + "</p></div>";
    }

    html += '<div class="reponse__barre" style="margin-top:16px"><span class="reponse__legende">Structure de la réponse</span></div>';

    blocsReponse(q).forEach(function (b) {
      var corps = trous ? texteRicheTrous(b.texte) : texteRiche(b.texte);
      html += '<div class="bloc-texte bloc-texte--' + b.role + '">' +
        '<span class="bloc-texte__label">' + b.libelle + "</span>" +
        "<p>" + corps.replace(/\n+/g, "<br>") + "</p>" +
      "</div>";
    });

    if (q.attentes && q.attentes.length) {
      html += '<div class="encadre encadre--attentes"><p class="encadre__titre">Ce que le jury écoute</p><ul>' +
        q.attentes.map(function (a) { return "<li>" + texteRiche(a) + "</li>"; }).join("") +
      "</ul></div>";
    }

    if (q.eviter && q.eviter.length) {
      html += '<div class="encadre encadre--eviter"><p class="encadre__titre">À éviter</p><ul>' +
        q.eviter.map(function (a) { return "<li>" + texteRiche(a) + "</li>"; }).join("") +
      "</ul></div>";
    }

    if (q.relances && q.relances.length) {
      html += '<p class="reponse__sous-titre">Relances possibles</p><div class="relances">' +
        q.relances.map(function (r) { return '<span class="relance">' + texteRiche(r) + "</span>"; }).join("") +
      "</div>";
    }

    if (q.source) {
      html += '<p class="source-ligne">Source : ' + echapper(q.source) + "</p>";
    }

    return html;
  }

  /* ---------------- rendu : accueil ---------------- */

  function blocDrive() {
    var boutons = jetonDrive
      ? '<button type="button" class="btn btn--fantome" data-action="drive-sauver">Sauvegarder dans Drive</button>' +
        '<button type="button" class="btn btn--fantome" data-action="drive-charger">Charger depuis Drive</button>'
      : '<button type="button" class="btn btn--fantome" data-action="drive-connecter">Connecter Google Drive</button>';

    return '<div class="drive">' +
      '<div class="drive__tete">' +
        '<span class="drive__nom">Google Drive</span>' +
        '<span class="drive__etat drive__etat--' + driveEtat + '">' + libelleDrive() + "</span>" +
      "</div>" +
      '<p class="bloc__aide" style="margin:8px 0 10px">La progression est enregistrée dans un fichier <code>' + DRIVE_FICHIER +
        "</code> de ton Drive, puis rechargée sur tes autres appareils.</p>" +
      '<div class="sauvegarde__actions">' + boutons + "</div>" +
    "</div>";
  }

  function rendreAccueil() {
    var zone = $("#ecran-accueil");
    if (!zone) return;
    var b = bilanGlobal();
    var s = etat.seance;
    var jours = joursRestants();
    var faitAujourdhui = (etat.parJour && etat.parJour[aujourdhui()]) || 0;
    var serie = serieJours();
    var objectif = objectifJour();
    var dateTxt = jours === null ? "" : (jours > 0 ? "J−" + jours + " avant l'oral" : (jours === 0 ? "C'est le jour J" : "Oral passé"));
    var pctObjectif = Math.min(100, Math.round((faitAujourdhui / objectif) * 100));

    var reprise = "";
    if (s && !s.finie && s.index < s.ids.length) {
      reprise = `<button type="button" class="duo-resume" data-action="reprendre">
        <span class="duo-resume__ico">▶</span>
        <span class="duo-resume__txt"><strong>Reprendre la séance</strong><small>Question ${s.index + 1} sur ${s.ids.length}</small></span>
        <span class="duo-resume__go">Go</span>
      </button>`;
    }

    var segments = [5, 10, 15].map(function (n) {
      return `<button type="button" class="segment${longueur === n ? " actif" : ""}" data-action="longueur" data-n="${n}">${n}</button>`;
    }).join("");

    var couleurs = { 1: "#1cb0f6", 2: "#ff4b4b", 3: "#ce82ff", 4: "#58cc02", 5: "#ff9600", 6: "#ffc800", 7: "#2ec4b6" };
    var emojis = { 1: "🧭", 2: "❤️", 3: "🏛️", 4: "🤝", 5: "💬", 6: "🎯", 7: "📰" };
    var path = Object.keys(CATEGORIES).map(function (cat) {
      var c = bilanCategorie(Number(cat));
      return `<button type="button" class="duo-node" data-action="categorie" data-cat="${cat}" data-n="5" style="--c:${couleurs[cat]}" aria-label="${echapper(CATEGORIES[cat].nom)} : ${c.travaillees} questions sur ${c.total}">
        <span class="duo-node__circle" style="--pct:${c.pct}"><span>${emojis[cat]}</span></span>
        <span class="duo-node__label">${CATEGORIES[cat].court}</span>
        <span class="duo-node__sub">${c.travaillees}/${c.total}</span>
      </button>`;
    }).join("");

    zone.innerHTML = `<div class="page page--duo">
      <div class="duo-hero">
        <div>
          <p class="duo-kicker">Agent administratif principal · DGFiP</p>
          <h1 class="duo-titre">Salut,<br>prêt pour l'oral ?</h1>
          <p class="duo-sub">100 questions, 7 catégories, pour arriver à l'aise le jour J.</p>
        </div>
        <div class="duo-ring" style="--pct:${b.pct}" role="img" aria-label="Progression : ${b.pct} pour cent">
          <div class="duo-ring__in"><strong>${b.pct}%</strong><span>maîtrisé</span></div>
        </div>
      </div>

      <div class="duo-daily">
        <div class="duo-daily__bloc"><span class="duo-flame">🔥</span><div><strong>${serie}</strong><span>jour${serie > 1 ? "s" : ""} de série</span></div></div>
        <div class="duo-daily__bloc duo-daily__bloc--right"><div><strong>${faitAujourdhui}/${objectif}</strong><span>objectif du jour</span></div></div>
      </div>
      <div class="duo-progress" role="progressbar" aria-valuenow="${faitAujourdhui}" aria-valuemin="0" aria-valuemax="${objectif}"><span style="width:${pctObjectif}%"></span></div>

      <div class="duo-date">
        <label for="date-concours">📅 Mon oral</label>
        <input class="champ-date" type="date" id="date-concours" value="${etat.concours}" aria-label="Date de mon oral">
        ${dateTxt ? `<span>${dateTxt}</span>` : ""}
      </div>

      ${reprise}

      <button type="button" class="duo-cta" data-action="intelligente" data-n="${longueur}">
        <span class="duo-cta__ico">⚡</span>
        <span class="duo-cta__txt"><strong>Séance intelligente</strong><small>Les révisions dues, puis les nouveautés</small></span>
        <span class="duo-cta__go">GO</span>
      </button>

      <div class="duo-quick">
        <button type="button" data-action="aleatoire" data-n="${longueur}">🎲 Aléatoire</button>
        <button type="button" data-action="ciblee" data-niveau="encours" data-n="${longueur}" ${b.compte.encours ? "" : "disabled"}>🌱 Mes erreurs</button>
        <button type="button" data-action="ciblee" data-niveau="presque" data-n="${longueur}" ${b.compte.presque ? "" : "disabled"}>🌤 Presque</button>
      </div>

      <div class="duo-length"><span>Questions par séance</span><div class="segments">${segments}</div></div>

      <div class="duo-stats">
        <div class="duo-stat duo-stat--vert"><span>🌱</span><strong>${b.compte.encours}</strong><small>à travailler</small></div>
        <div class="duo-stat duo-stat--orange"><span>🌤</span><strong>${b.compte.presque}</strong><small>presque</small></div>
        <div class="duo-stat duo-stat--bleu"><span>⭐</span><strong>${b.compte.pret}</strong><small>prêt</small></div>
      </div>

      <div class="duo-section-tete"><h2>Ton parcours</h2><span>${b.travaillees}/${b.total}</span></div>
      <div class="duo-path">${path}</div>

      ${etat.derniereSeance ? `<button type="button" class="duo-last" data-action="voir-bilan">↺ Dernière séance · ${MODES[etat.derniereSeance.mode] || "révision"}</button>` : ""}

      <details class="duo-backup">
        <summary><span>💾</span> Sauvegarde et synchronisation</summary>
        <div class="duo-backup__corps">
          <p class="bloc__aide">La progression est enregistrée dans ce navigateur. « Sauvegarder » crée un fichier de secours à déposer dans Drive ou Fichiers.</p>
          <div class="sauvegarde__actions">
            <button type="button" class="btn btn--fantome" data-action="exporter">Sauvegarder</button>
            <button type="button" class="btn btn--fantome" data-action="importer">Restaurer</button>
          </div>
          <p class="bloc__aide" style="margin-top:9px">${etat.derniereSauvegarde ? "Dernière sauvegarde le " + dateCourte(etat.derniereSauvegarde) + "." : "Aucune sauvegarde exportée pour l'instant."}</p>
          ${blocDrive()}
        </div>
      </details>
    </div>`;

    var champ = $("#date-concours");
    if (champ) {
      champ.addEventListener("change", function () {
        var v = champ.value;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) { toast("Date invalide."); rendreAccueil(); return; }
        etat.concours = v;
        sauver();
        rendreAccueil();
        toast("Date de l'oral enregistrée : " + dateCourte(v) + ".");
      });
    }
  }

  /* ---------------- rendu : séance ---------------- */

  function rendreSeance() {
    var zone = $("#ecran-seance");
    if (!zone) return;
    var s = etat.seance;
    if (!s) {
      zone.innerHTML = '<div class="page"><p class="vide">Aucune séance en cours.</p>' +
        '<div style="text-align:center;margin-top:16px"><button type="button" class="btn btn--primaire" data-action="accueil">Retour à l\'accueil</button></div></div>';
      return;
    }
    if (s.index >= s.ids.length) { terminerSeance(); return; }

    var q = parId(s.ids[s.index]);
    if (!q) {
      s.index++;
      if (s.index >= s.ids.length) { terminerSeance(); return; }
      sauver();
      rendreSeance();
      return;
    }

    if (chrono.id !== q.id) {
      if (chrono.interval) { clearInterval(chrono.interval); chrono.interval = null; }
      chrono.id = q.id;
      chrono.restant = q.duree || 90;
    }

    var deja = s.evaluations[q.id];
    var montre = revele || !!deja;
    var parfaits = 0;
    Object.keys(s.evaluations).forEach(function (id) {
      if (s.evaluations[id].apres === "pret") parfaits++;
    });

    var segments = s.ids.map(function (id, i) {
      var etatSeg = s.evaluations[id] ? " fait" : (i === s.index ? " courant" : "");
      return '<span class="progres-segments__seg' + etatSeg + '"></span>';
    }).join("");

    var html = '<div class="seance">' +
      '<div class="seance__tete">' +
        '<button type="button" class="lien-sortie" data-action="quitter">Quitter</button>' +
        '<div class="seance__progres">' +
          '<div class="progres-segments">' + segments + "</div>" +
          '<p class="seance__compte">Question ' + (s.index + 1) + " sur " + s.ids.length +
            (parfaits ? " · " + parfaits + " prêt" + (parfaits > 1 ? "s" : "") : "") + "</p>" +
        "</div>" +
      "</div>" +

      '<div class="seance__corps' + (montre ? "" : " seance__corps--centre") + '">' +
      '<div class="carte carte--question">' +
        '<div class="question__meta">' +
          '<span class="puce puce--cat">' + CATEGORIES[q.cat].court + "</span>" +
          '<span class="puce">' + echapper(q.theme) + "</span>" +
          (q.statut !== "probable" ? '<span class="puce puce--' + q.statut + '">' + (STATUTS[q.statut] || q.statut) + "</span>" : "") +
        "</div>" +
        '<h2 class="question__texte">' + echapper(q.question) + "</h2>" +
        (q.enjeu ? '<p class="question__enjeu">' + echapper(q.enjeu) + "</p>" : "") +
        '<div class="question__pied">' +
          '<button type="button" id="chrono-btn" class="chrono' + (chrono.restant <= 0 ? " fini" : "") + '" data-action="chrono" aria-label="Chronomètre conseillé : ' + (q.duree || 90) + ' secondes">' +
            '<span aria-hidden="true">⏱</span><span class="chrono__valeur" id="chrono-valeur">' + formatSecondes(chrono.restant) + "</span>" +
          "</button>" +
          (montre ? "" : '<button type="button" class="btn btn--primaire" data-action="reveler">Voir la réponse</button>') +
        "</div>" +
      "</div>";

    if (!montre) {
      html += '<p class="bloc__aide" style="text-align:center;margin-top:12px">Réponds à voix haute, puis révèle la réponse et note ton niveau.</p>' +
        '<div style="text-align:center;margin-top:6px"><button type="button" class="mini-btn" data-action="reporter" data-id="' + q.id + '">Passer cette question à demain</button></div>';
    } else {
      html += '<div class="carte carte--reponse">' + rendreReponse(q, {}) + "</div>" +
        '<div class="pied-reponse">' +
          '<span class="pied-reponse__info">' + (deja ? "Revu le " + dateCourte(etat.questions[q.id].prochaineRevision) : "Choisis ton niveau") + "</span>" +
          '<div class="pied-reponse__niveaux">' +
            ["encours", "presque", "pret"].map(function (n) {
              var info = NIVEAU[n];
              var choisi = deja && deja.apres === n;
              return '<button type="button" class="niveau-mini niveau-mini--' + info.classe + (choisi ? " choisi" : "") +
                '" data-action="evaluer" data-niveau="' + n + '" aria-pressed="' + (choisi ? "true" : "false") +
                '" title="' + echapper(info.aide) + '">' + info.label + "</button>";
            }).join("") +
          "</div>" +
          '<button type="button" class="btn btn--primaire" data-action="suivante"' + (deja ? "" : " disabled") + ">" +
            (s.index + 1 >= s.ids.length ? "Terminer" : "Suivant") + " →</button>" +
        "</div>" +
        '<div style="text-align:center;margin-top:10px"><button type="button" class="mini-btn" data-action="reporter" data-id="' + q.id + '">Passer cette question à demain</button></div>';
    }

    html += "</div></div>";
    zone.innerHTML = html;
    afficherChrono();
  }

  function afficherChrono() {
    var el = document.getElementById("chrono-valeur");
    var btn = document.getElementById("chrono-btn");
    if (el) el.textContent = formatSecondes(chrono.restant);
    if (btn) btn.classList.toggle("fini", chrono.restant <= 0);
  }

  function basculerChrono() {
    if (chrono.interval) {
      clearInterval(chrono.interval);
      chrono.interval = null;
      return;
    }
    if (chrono.restant <= 0) {
      var q = parId(chrono.id);
      chrono.restant = (q && q.duree) || 90;
    }
    chrono.interval = setInterval(function () {
      chrono.restant--;
      if (chrono.restant <= 0) {
        chrono.restant = 0;
        clearInterval(chrono.interval);
        chrono.interval = null;
      }
      afficherChrono();
    }, 1000);
    afficherChrono();
  }

  /* ---------------- rendu : bilan ---------------- */

  function rendreBilan() {
    var zone = $("#ecran-bilan");
    if (!zone) return;
    var s = etat.derniereSeance;
    if (!s) {
      zone.innerHTML = '<div class="page"><p class="vide">Aucun bilan disponible.</p></div>';
      return;
    }

    var compte = { encours: 0, presque: 0, pret: 0 };
    Object.keys(s.evaluations).forEach(function (id) {
      var n = s.evaluations[id].apres;
      if (compte[n] !== undefined) compte[n]++;
    });

    var ratees = Object.keys(s.evaluations).filter(function (id) { return s.evaluations[id].apres === "encours"; });
    var parCat = {};
    s.ids.forEach(function (id) {
      var q = parId(id);
      if (!q) return;
      if (!parCat[q.cat]) parCat[q.cat] = { total: 0, ok: 0 };
      parCat[q.cat].total++;
      var ev = s.evaluations[id];
      if (ev && (ev.apres === "pret" || ev.apres === "presque")) parCat[q.cat].ok++;
    });

    var conseil;
    if (ratees.length) conseil = "Reprends " + pluriel(ratees.length, "question") + " à retravailler dès demain.";
    else if (compte.presque) conseil = "Les " + compte.presque + " questions « presque » sont à consolider à la prochaine séance.";
    else conseil = "Reviens demain pour garder ta série et ancrer ces acquis.";

    var html = '<div class="page">' +
      '<span class="etiquette">Bilan de séance</span>' +
      '<h1 class="titre-page">' + (compte.pret + compte.presque) + " acquis, " + compte.encours + " à revoir.</h1>" +
      '<p class="sous-titre">' + (MODES[s.mode] || "Séance") + " · " + pluriel(s.ids.length, "question") + " travaillée" + (s.ids.length > 1 ? "s" : "") + ".</p>" +

      '<div class="bilan__grille">' +
        '<div class="bilan__chiffre bilan__chiffre--vert"><p class="bilan__val">' + compte.encours + '</p><p class="bilan__lab">À travailler</p></div>' +
        '<div class="bilan__chiffre bilan__chiffre--orange"><p class="bilan__val">' + compte.presque + '</p><p class="bilan__lab">Presque</p></div>' +
        '<div class="bilan__chiffre bilan__chiffre--bleu"><p class="bilan__val">' + compte.pret + '</p><p class="bilan__lab">Prêt</p></div>' +
      "</div>" +

      '<section class="bloc">' +
        '<h2 class="bloc__titre">Par catégorie</h2>' +
        '<div class="themes">' +
          Object.keys(parCat).map(function (cat) {
            var c = parCat[cat];
            var pct = Math.round((c.ok / c.total) * 100);
            return '<div class="theme-ligne"><span class="theme-ligne__nom">' + CATEGORIES[cat].nom + "</span>" +
              '<span class="theme-ligne__pct">' + c.ok + "/" + c.total + "</span>" +
              '<div class="barre barre--fine"><div class="barre__remplissage" style="width:' + pct + '%"></div></div></div>';
          }).join("") +
        "</div>" +
      "</section>" +

      (ratees.length
        ? '<section class="bloc"><h2 class="bloc__titre">À retravailler</h2><div class="bilan__liste">' +
            ratees.map(function (id) {
              var q = parId(id);
              if (!q) return "";
              return '<button type="button" class="bilan__ligne" data-question="' + id + '">' +
                '<span class="point point--vert"></span><span>' + echapper(q.question) + "</span><span>voir</span></button>";
            }).join("") +
          "</div></section>"
        : "") +

      '<div class="sauvegarde__actions" style="margin-top:24px">' +
        (ratees.length ? '<button type="button" class="btn btn--primaire" data-action="refaire-ratees">Refaire les ratées</button>' : "") +
        '<button type="button" class="btn btn--primaire" data-action="intelligente" data-n="' + longueur + '">Nouvelle séance</button>' +
        '<button type="button" class="btn btn--fantome" data-action="accueil">Retour à l\'accueil</button>' +
      "</div>" +
      '<div class="bilan__conseil"><span aria-hidden="true">🌱</span><p><strong>Prochaine étape</strong>' + conseil + "</p></div>" +
    "</div>";

    zone.innerHTML = html;
  }

  /* ---------------- rendu : banque ---------------- */

  function niveauBadge(f) {
    if (!f || !f.niveau) return '<span class="badge">Nouvelle</span>';
    var info = NIVEAU[f.niveau];
    return '<span class="badge badge--' + info.classe + '">' + info.label + "</span>";
  }

  function rendreBanque() {
    var zone = $("#ecran-banque");
    if (!zone) return;

    var optionsCat = '<option value="0">Toutes les catégories</option>' +
      Object.keys(CATEGORIES).map(function (c) {
        return '<option value="' + c + '"' + (Number(c) === filtrePartie ? " selected" : "") + ">" + CATEGORIES[c].nom + "</option>";
      }).join("");

    var optionsStatut = '<option value="tous">Tous les statuts</option>' +
      Object.keys(STATUTS).map(function (s) {
        return '<option value="' + s + '"' + (s === filtreStatut ? " selected" : "") + ">" + STATUTS[s] + "</option>";
      }).join("");

    var optionsNiveau = '<option value="tous">Tous les niveaux</option>' +
      '<option value="nouvelle"' + (filtreNiveau === "nouvelle" ? " selected" : "") + ">Non travaillées</option>" +
      ["encours", "presque", "pret"].map(function (n) {
        return '<option value="' + n + '"' + (n === filtreNiveau ? " selected" : "") + ">" + NIVEAU[n].label + "</option>";
      }).join("");

    zone.innerHTML = '<div class="page">' +
      '<span class="etiquette">Banque de questions</span>' +
      '<h1 class="titre-page">Les ' + BANQUE.length + " questions.</h1>" +
      '<p class="sous-titre">Cherche un thème, un mot-clé ou une formulation. Ouvre une fiche pour lire la réponse modèle, noter ton niveau et écrire ta propre réponse.</p>' +
      '<div style="margin-top:20px">' +
        '<label class="sr-only" for="recherche">Rechercher une question</label>' +
        '<input class="recherche" id="recherche" type="search" placeholder="Rechercher un thème, un mot-clé…" value="' + echapper(recherche) + '">' +
        '<div class="filtres">' +
          '<label class="sr-only" for="filtre-cat">Catégorie</label>' +
          '<select class="champ" id="filtre-cat">' + optionsCat + "</select>" +
          '<label class="sr-only" for="filtre-statut">Statut</label>' +
          '<select class="champ" id="filtre-statut">' + optionsStatut + "</select>" +
          '<label class="sr-only" for="filtre-niveau">Niveau</label>' +
          '<select class="champ" id="filtre-niveau">' + optionsNiveau + "</select>" +
        "</div>" +
        '<div class="banque__compte"><span id="compte-banque"></span>' +
          '<button type="button" class="mini-btn" data-action="reset-filtres">Réinitialiser</button></div>' +
        '<div class="liste-questions" id="liste-banque"></div>' +
      "</div>" +
    "</div>";

    var champ = $("#recherche");
    champ.addEventListener("input", function () { recherche = champ.value; filtrerBanque(); });
    $("#filtre-cat").addEventListener("change", function (e) { filtrePartie = Number(e.target.value); filtrerBanque(); });
    $("#filtre-statut").addEventListener("change", function (e) { filtreStatut = e.target.value; filtrerBanque(); });
    $("#filtre-niveau").addEventListener("change", function (e) { filtreNiveau = e.target.value; filtrerBanque(); });

    filtrerBanque();
  }

  function filtrerBanque() {
    var liste = $("#liste-banque");
    var compte = $("#compte-banque");
    if (!liste || !compte) return;

    var r = normaliser(recherche);
    var resultats = BANQUE.filter(function (q) {
      if (filtrePartie && q.cat !== filtrePartie) return false;
      if (filtreStatut !== "tous" && q.statut !== filtreStatut) return false;
      var f = etat.questions[q.id];
      if (filtreNiveau === "nouvelle" && f && f.niveau) return false;
      if (filtreNiveau !== "tous" && filtreNiveau !== "nouvelle" && (!f || f.niveau !== filtreNiveau)) return false;
      if (!r) return true;
      var texte = normaliser([
        q.question, q.theme, (q.motsCles || []).join(" "), CATEGORIES[q.cat].nom, (q.reponse || []).join(" ")
      ].join(" "));
      return texte.indexOf(r) !== -1;
    });

    compte.textContent = pluriel(resultats.length, "question") + " sur " + BANQUE.length;

    if (!resultats.length) {
      liste.innerHTML = '<p class="vide">Aucune question ne correspond à cette recherche.</p>';
      return;
    }

    liste.innerHTML = resultats.map(function (q) {
      var f = etat.questions[q.id];
      var revue = f && f.prochaineRevision ? " · revue " + dateCourte(f.prochaineRevision) : "";
      return '<button type="button" class="ligne-question" data-question="' + q.id + '" data-cat="' + q.cat + '">' +
        '<span class="ligne-question__corps">' +
          '<span class="ligne-question__q">' + echapper(q.question) + "</span>" +
          '<span class="ligne-question__m"><span class="ligne-question__cat">' + CATEGORIES[q.cat].court + "</span><span>" + echapper(q.theme) + "</span>" +
            (q.statut !== "probable" ? "<span>·</span><span>" + (STATUTS[q.statut] || q.statut) + "</span>" : "") +
            "<span>" + revue + "</span></span>" +
        "</span>" +
        niveauBadge(f) +
      "</button>";
    }).join("");
  }

  /* ---------------- rendu : documents ---------------- */

  var filtreDoc = "toutes";
  var rechercheDoc = "";
  var docOuvert = null;

  function docsCollections() {
    var liste = [];
    (window.DOCUMENTS || []).forEach(function (d) {
      if (liste.indexOf(d.collection) === -1) liste.push(d.collection);
    });
    return liste;
  }

  function rendreDocs() {
    var zone = $("#ecran-docs");
    if (!zone) return;
    var docs = window.DOCUMENTS || [];
    if (!docs.length) {
      zone.innerHTML = '<div class="page"><span class="etiquette">Bibliothèque</span>' +
        '<h1 class="titre-page">Aucun document.</h1>' +
        '<p class="sous-titre">Le catalogue n\'a pas chargé : vérifie le fichier <code>data/8-documents.js</code>.</p></div>';
      return;
    }

    var puces = [{ cle: "toutes", nom: "Tout", n: docs.length }].concat(docsCollections().map(function (c) {
      return { cle: c, nom: c, n: docs.filter(function (d) { return d.collection === c; }).length };
    }));

    zone.innerHTML = '<div class="page">' +
      '<span class="etiquette">Bibliothèque</span>' +
      '<h1 class="titre-page">Mes documents.</h1>' +
      '<p class="sous-titre">' + docs.length + ' pages classées : le carnet d\'oral, tes fiches manuscrites, le mémo des valeurs et le dépliant des taxes d\'urbanisme. Ouvre une page pour la lire en grand.</p>' +
      '<div class="docs-recherche">' +
        '<label class="sr-only" for="recherche-doc">Rechercher un document</label>' +
        '<input class="recherche" id="recherche-doc" type="search" placeholder="Rechercher un thème, un sigle…" value="' + echapper(rechercheDoc) + '">' +
      '</div>' +
      '<div class="docs-filtres">' + puces.map(function (p) {
        return '<button type="button" class="puce-filtre' + (filtreDoc === p.cle ? " actif" : "") + '" data-doc-action="filtre" data-doc-filtre="' + echapper(p.cle) + '">' +
          echapper(p.nom) + '<span>' + p.n + "</span></button>";
      }).join("") + "</div>" +
      '<div class="docs-grille" id="docs-grille"></div>' +
    "</div>";

    var champ = $("#recherche-doc");
    if (champ) champ.addEventListener("input", function () { rechercheDoc = champ.value; filtrerDocs(); });
    filtrerDocs();
  }

  function filtrerDocs() {
    var grille = $("#docs-grille");
    if (!grille) return;
    var r = normaliser(rechercheDoc);
    var liste = (window.DOCUMENTS || []).filter(function (d) {
      if (filtreDoc !== "toutes" && d.collection !== filtreDoc) return false;
      if (!r) return true;
      var texte = normaliser([d.titre, d.sousTitre, d.resume, d.page, d.collection,
        (d.mots || []).join(" "), (d.points || []).join(" ")].join(" "));
      return texte.indexOf(r) !== -1;
    });

    if (!liste.length) {
      grille.innerHTML = '<p class="vide" style="grid-column:1/-1">Aucun document ne correspond à cette recherche.</p>';
      return;
    }

    grille.innerHTML = liste.map(function (d) {
      return '<button type="button" class="doc-carte" data-doc="' + d.id + '">' +
        '<span class="doc-carte__img"><img src="' + d.vignette + '" alt="" loading="lazy" decoding="async">' +
          '<span class="doc-carte__page">' + echapper(d.page) + "</span></span>" +
        '<span class="doc-carte__txt"><strong>' + echapper(d.titre) + '</strong><small>' + echapper(d.sousTitre) + "</small></span>" +
      "</button>";
    }).join("");
  }

  function ouvrirDoc(id) {
    var docs = window.DOCUMENTS || [];
    var d = docs.filter(function (x) { return x.id === id; })[0];
    if (!d) return;
    docOuvert = id;
    $("#lecteur-etiquette").textContent = d.collection + " · " + d.page;
    $("#lecteur-titre").textContent = d.titre;
    var img = $("#lecteur-img");
    img.src = d.image;
    img.alt = d.titre + " — " + d.sousTitre;
    $("#lecteur-points").innerHTML = d.points.map(function (p) { return "<li>" + echapper(p) + "</li>"; }).join("");
    $("#lecteur-lien").href = d.image;
    var lecteur = $("#lecteur");
    if (lecteur && !lecteur.open) lecteur.showModal();
    var corps = lecteur && lecteur.querySelector(".lecteur__corps");
    if (corps) corps.scrollTop = 0;
    majBoutonsDoc();
  }

  function majBoutonsDoc() {
    var docs = window.DOCUMENTS || [];
    var i = docs.map(function (d) { return d.id; }).indexOf(docOuvert);
    var prec = document.querySelector('[data-doc-action="precedent"]');
    var suiv = document.querySelector('[data-doc-action="suivant"]');
    if (prec) prec.disabled = i <= 0;
    if (suiv) suiv.disabled = i === -1 || i >= docs.length - 1;
  }

  function docSuivant(pas) {
    var docs = window.DOCUMENTS || [];
    var i = docs.map(function (d) { return d.id; }).indexOf(docOuvert);
    var j = i + pas;
    if (j < 0 || j >= docs.length) return;
    ouvrirDoc(docs[j].id);
  }

  function fermerDoc() {
    var lecteur = $("#lecteur");
    if (lecteur && lecteur.open) lecteur.close();
    docOuvert = null;
  }

  /* ---------------- rendu : pitch ---------------- */

  var PITCH_PHASES = [
    { nom: "Accroche", duree: 15 },
    { nom: "Parcours", duree: 45 },
    { nom: "Motivations", duree: 40 },
    { nom: "Projet", duree: 20 }
  ];

  var PITCH_EXEMPLES = [
    {
      titre: "Exemple · étudiant ou jeune diplômé",
      texte: "« Je m'appelle …, j'ai 22 ans et je viens d'obtenir un BTS. Mon parcours tient en deux temps : une formation où j'ai appris la rigueur et la rédaction, puis un stage de trois mois à l'accueil d'une mairie, où j'ai découvert ce que veut dire servir un usager. J'y ai compris qu'un agent ne se contente pas d'appliquer une règle : il l'explique. C'est ce que je cherche à la DGFiP, dans un service de proximité. À court terme, je veux réussir la scolarité et devenir autonome ; à plus long terme, évoluer par la formation et, pourquoi pas, le concours interne. »"
    },
    {
      titre: "Exemple · salarié du privé",
      texte: "« Après huit ans dans la logistique, j'ai encadré une petite équipe et géré des dossiers clients, avec des délais et des erreurs à corriger. Ce que j'ai appris : la fiabilité se construit par des procédures et par le signalement des problèmes à temps. J'ai choisi la DGFiP pour revenir à un contact direct avec les usagers et donner un sens plus clair à mon travail. Je sais ce que je viens chercher : un cadre, une formation, une équipe. Et ce que j'apporte : de l'expérience du terrain, de la rigueur et l'habitude de rendre compte. »"
    },
    {
      titre: "Exemple · reconversion",
      texte: "« J'ai travaillé plusieurs années dans un autre secteur, puis j'ai pris le temps de réfléchir à ce que je voulais faire durablement. J'ai découvert les métiers de la DGFiP en accompagnant une démarche personnelle, et j'ai compris que le service public me correspondait : des règles écrites, une utilité immédiate, un contact humain. J'ai préparé ce concours sérieusement : information, échanges avec des agents, entraînement à l'oral. Je ne viens pas par défaut ; je viens parce que ce métier correspond à ce que je sais faire et à ce que je veux apprendre. »"
    }
  ];

  function compterMots(t) {
    var s = String(t || "").trim();
    return s ? s.split(/\s+/).length : 0;
  }

  function rendrePitch() {
    var zone = $("#ecran-pitch");
    if (!zone) return;
    var p = etat.pitch || {};
    var champs = [
      { cle: "accroche", label: "1 · Accroche (15 s)", aide: "Nom, situation, phrase de synthèse." },
      { cle: "parcours", label: "2 · Parcours (45 s)", aide: "Deux ou trois étapes, une compétence par étape." },
      { cle: "motivations", label: "3 · Motivations (40 s)", aide: "Ce que tu as compris du métier, pourquoi la DGFiP." },
      { cle: "projet", label: "4 · Projet (20 s)", aide: "Scolarité, prise de poste, évolution." }
    ];

    var totalMots = 0;
    var grille = champs.map(function (c) {
      var val = p[c.cle] || "";
      var mots = compterMots(val);
      totalMots += mots;
      var secondes = Math.round((mots / 140) * 60);
      return '<div class="pitch__champ">' +
        '<label for="pitch-' + c.cle + '">' + c.label + "</label>" +
        '<textarea id="pitch-' + c.cle + '" data-pitch="' + c.cle + '" placeholder="' + echapper(c.aide) + '">' + echapper(val) + "</textarea>" +
        '<p class="pitch__compte"><span>' + pluriel(mots, "mot") + "</span><span>≈ " + formatSecondes(secondes) + "</span></p>" +
      "</div>";
    }).join("");

    var totalSecondes = Math.round((totalMots / 140) * 60);

    zone.innerHTML = '<div class="page">' +
      '<span class="etiquette">Présentation de parcours</span>' +
      '<h1 class="titre-page">Deux minutes<br>pour être choisi.</h1>' +
      '<p class="sous-titre">Le jury écoute d\'abord une présentation de ton parcours, deux minutes au maximum. Écris ta trame ici, entraîne-toi avec le chrono, puis répète-la à voix haute.</p>' +

      '<div class="pitch__chrono">' +
        '<div class="pitch__tete">' +
          '<span class="pitch__phase-label" id="pitch-phase">Prêt</span>' +
          '<span class="pitch__temps" id="pitch-temps">2:00</span>' +
        "</div>" +
        '<div class="pitch__phases" aria-hidden="true">' +
          '<span class="pitch__phase" data-phase="0"></span>' +
          '<span class="pitch__phase" data-phase="1"></span>' +
          '<span class="pitch__phase" data-phase="2"></span>' +
          '<span class="pitch__phase" data-phase="3"></span>' +
        "</div>" +
        '<div class="pitch__noms" aria-hidden="true">' + PITCH_PHASES.map(function (x) { return "<span>" + x.nom + "</span>"; }).join("") + "</div>" +
        '<div class="pitch__actions">' +
          '<button type="button" class="btn btn--fantome" data-action="pitch-start">Lancer le chrono</button>' +
          '<button type="button" class="btn btn--fantome" data-action="pitch-reset">Réinitialiser</button>' +
        "</div>" +
      "</div>" +

      '<div class="carte" style="margin-top:16px">' +
        '<div class="pitch__grille">' + grille + "</div>" +
        '<p class="pitch__compte" style="margin-top:14px"><span>' + pluriel(totalMots, "mot") + " au total</span><span>≈ " + formatSecondes(totalSecondes) + " à 140 mots/min</span></p>" +
        '<p class="bloc__aide" style="margin-top:8px">Texte enregistré dans ce navigateur et dans ta sauvegarde. Il n\'est jamais publié.</p>' +
      "</div>" +

      '<section class="bloc">' +
        '<h2 class="bloc__titre">Trois exemples de trame</h2>' +
        '<div class="exemples">' +
          PITCH_EXEMPLES.map(function (ex) {
            return "<details><summary>" + ex.titre + "</summary><p>" + echapper(ex.texte) + "</p></details>";
          }).join("") +
        "</div>" +
      "</section>" +
    "</div>";

    $$("#ecran-pitch textarea[data-pitch]").forEach(function (ta) {
      ta.addEventListener("input", function () {
        etat.pitch[ta.getAttribute("data-pitch")] = ta.value;
        etat.pitch.maj = new Date().toISOString();
        var bloc = ta.parentNode.querySelector(".pitch__compte");
        var mots = compterMots(ta.value);
        if (bloc) bloc.innerHTML = "<span>" + pluriel(mots, "mot") + "</span><span>≈ " + formatSecondes(Math.round((mots / 140) * 60)) + "</span>";
        programmerSauvegarde();
      });
    });

    afficherPitchChrono();
  }

  var minuterieSauvegarde = null;
  function programmerSauvegarde() {
    clearTimeout(minuterieSauvegarde);
    minuterieSauvegarde = setTimeout(function () { sauver(); }, 500);
  }

  function afficherPitchChrono() {
    var temps = document.getElementById("pitch-temps");
    var label = document.getElementById("pitch-phase");
    if (!temps || !label) return;
    var restant = Math.max(0, 120 - pitchChrono.ecoule);
    temps.textContent = Math.floor(restant / 60) + ":" + String(restant % 60).padStart(2, "0");

    var cumul = 0;
    var active = -1;
    PITCH_PHASES.forEach(function (ph, i) {
      cumul += ph.duree;
      if (pitchChrono.ecoule < cumul && active === -1) active = i;
    });

    label.textContent = restant <= 0 ? "Temps écoulé" : (active === -1 ? "Prêt" : PITCH_PHASES[active].nom);
    $$("#ecran-pitch .pitch__phase").forEach(function (el, i) {
      var debut = PITCH_PHASES.slice(0, i).reduce(function (a, x) { return a + x.duree; }, 0);
      var fin = debut + PITCH_PHASES[i].duree;
      el.classList.toggle("fait", pitchChrono.ecoule >= fin);
      el.classList.toggle("active", pitchChrono.ecoule >= debut && pitchChrono.ecoule < fin);
    });
  }

  function basculerPitchChrono() {
    if (pitchChrono.interval) {
      clearInterval(pitchChrono.interval);
      pitchChrono.interval = null;
      return;
    }
    if (pitchChrono.ecoule >= 120) pitchChrono.ecoule = 0;
    pitchChrono.interval = setInterval(function () {
      pitchChrono.ecoule++;
      if (pitchChrono.ecoule >= 120) {
        pitchChrono.ecoule = 120;
        clearInterval(pitchChrono.interval);
        pitchChrono.interval = null;
      }
      afficherPitchChrono();
    }, 1000);
    afficherPitchChrono();
  }

  /* ---------------- modale ---------------- */

  function ouvrirModale(id) {
    var q = parId(id);
    if (!q) return;
    modaleId = id;
    editId = null;
    var d = $("#modale");
    $("#modale-etiquette").textContent = CATEGORIES[q.cat].nom + " · " + q.theme;
    $("#modale-question").textContent = q.question;
    rafraichirModale();
    if (!d.hasAttribute("open")) d.showModal();
  }

  function rafraichirModale() {
    var q = parId(modaleId);
    if (!q) return;
    $("#modale-reponse").innerHTML = rendreReponse(q, { edition: editId === q.id });
    $("#modale-niveaux").innerHTML = editId === q.id ? "" : rendreNiveauxBanque(q);
    if (editId === q.id) {
      var ta = $("#editeur-reponse");
      if (ta) ta.focus();
    }
  }

  function rendreNiveauxBanque(q) {
    var f = etat.questions[q.id] || {};
    var actuel = f.niveau || null;
    return '<p class="niveaux__titre">Ton niveau</p><div class="niveaux__grille">' +
      ["encours", "presque", "pret"].map(function (n) {
        var info = NIVEAU[n];
        var choisi = actuel === n;
        return '<button type="button" class="niveau niveau--' + info.classe + (choisi ? " choisi" : "") +
          '" data-action="niveau-banque" data-id="' + q.id + '" data-niveau="' + n + '" aria-pressed="' + (choisi ? "true" : "false") + '">' +
          '<span class="niveau__t">' + info.label + "</span>" +
          '<span class="niveau__s">' + info.aide + "</span></button>";
      }).join("") +
    "</div>" +
    (f.prochaineRevision ? '<p class="pied-reponse__info" style="margin-top:10px">Prochaine revue : ' + dateCourte(f.prochaineRevision) + " · " + f.intervalle + " jour" + (f.intervalle > 1 ? "s" : "") + "</p>" : "");
  }

  function fermerModale() {
    var d = $("#modale");
    if (d.hasAttribute("open")) d.close();
    modaleId = null;
    editId = null;
  }

  function definirNiveau(id, niveau) {
    var q = parId(id);
    if (!q || !NIVEAU[niveau]) return;
    var f = fiche(id);
    planifier(f, niveau);
    enregistrerJour();
    sauver();
    majEntete();
    rafraichirModale();
    filtrerBanque();
    toast("Niveau enregistré : " + NIVEAU[niveau].label + " · revue le " + dateCourte(f.prochaineRevision));
  }

  function enregistrerReponse(id) {
    var zone = $("#editeur-reponse");
    if (!zone) return;
    var texte = zone.value.trim();
    if (!texte) { toast("Le texte est vide : écris une réponse ou annule."); return; }
    if (!etat.reponses) etat.reponses = {};
    etat.reponses[id] = { texte: texte, maj: new Date().toISOString() };
    editId = null;
    sauver();
    rafraichirModale();
    if (etat.seance) rendreSeance();
    toast("Ma réponse est enregistrée.");
  }

  /* ---------------- sauvegarde fichier ---------------- */

  function paquetSauvegarde() {
    return {
      application: "oral-dgfip",
      version: 1,
      exporteLe: new Date().toISOString(),
      progression: etat
    };
  }

  function telechargerFichier(blob, nom) {
    var url = URL.createObjectURL(blob);
    var lien = document.createElement("a");
    lien.href = url;
    lien.download = nom;
    document.body.appendChild(lien);
    lien.click();
    lien.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    noterSauvegarde();
    toast("Sauvegarde téléchargée : " + nom);
  }

  function exporter() {
    var paquet = paquetSauvegarde();
    var nom = "oral-dgfip-sauvegarde-" + aujourdhui() + ".json";
    var blob = new Blob([JSON.stringify(paquet, null, 2)], { type: "application/json" });
    var fichier = null;
    try { fichier = new File([blob], nom, { type: "application/json" }); } catch (e) { fichier = null; }

    if (fichier && navigator.share && navigator.canShare && navigator.canShare({ files: [fichier] })) {
      navigator.share({
        files: [fichier],
        title: "Sauvegarde révision oral DGFiP",
        text: "Progression de révision, à conserver dans Drive ou Fichiers."
      }).then(function () {
        noterSauvegarde();
        toast("Sauvegarde envoyée : choisis Drive dans la feuille de partage.");
      }, function (err) {
        if (err && err.name === "AbortError") { toast("Sauvegarde annulée."); return; }
        telechargerFichier(blob, nom);
      });
      return;
    }
    telechargerFichier(blob, nom);
  }

  function traiterSauvegarde(fichier) {
    if (!fichier) return;
    var lecteur = new FileReader();
    lecteur.onload = function () {
      var paquet;
      try { paquet = JSON.parse(String(lecteur.result)); } catch (e) { paquet = null; }
      var prog = paquet && paquet.progression ? paquet.progression : paquet;
      if (!prog || typeof prog !== "object" || !prog.questions || typeof prog.questions !== "object") {
        toast("Ce fichier n'est pas une sauvegarde de l'application.");
        return;
      }
      var nb = Object.keys(prog.questions).length;
      if (!window.confirm("Remplacer la progression actuelle par cette sauvegarde (" + pluriel(nb, "question") + ") ?")) return;
      remplacerEtat(prog);
      sauver();
      afficher("accueil");
      toast("Sauvegarde restaurée : " + pluriel(nb, "question") + ".");
    };
    lecteur.readAsText(fichier);
  }

  function importer() {
    var input = $("#fichier-sauvegarde");
    if (!input) return;
    input.value = "";
    input.click();
  }

  /* ---------------- Google Drive ---------------- */

  var jetonDrive = null;
  var clientDrive = null;
  var driveEtat = "hors-ligne";
  var dernierDrive = null;
  var synchroEnCours = false;
  var minuterieDrive = null;
  var tentativesGis = 0;

  try {
    var memoInitial = JSON.parse(localStorage.getItem(CLE_DRIVE) || "{}") || {};
    dernierDrive = memoInitial.derniereSynchro || null;
  } catch (e) { dernierDrive = null; }

  function memoDrive() {
    try { return JSON.parse(localStorage.getItem(CLE_DRIVE) || "{}") || {}; } catch (e) { return {}; }
  }

  function ecrireMemoDrive(m) {
    try { localStorage.setItem(CLE_DRIVE, JSON.stringify(m)); } catch (e) {}
  }

  function dateHeure(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " à " +
      d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }

  function libelleDrive() {
    if (driveEtat === "synchro") return "Synchronisation…";
    if (driveEtat === "connecte") return dernierDrive ? "Synchronisé le " + dateHeure(dernierDrive) : "Connecté";
    if (driveEtat === "erreur") return "Connexion à refaire";
    if (driveEtat === "indisponible") return "Service Google indisponible";
    return "Non connecté";
  }

  function initDrive() {
    if (typeof google === "undefined" || !google.accounts || !google.accounts.oauth2) {
      if (tentativesGis++ < 50) { setTimeout(initDrive, 120); }
      else { driveEtat = "indisponible"; rendreAccueil(); }
      return;
    }
    if (clientDrive) return;

    try {
      clientDrive = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: DRIVE_SCOPE,
        callback: function (reponse) {
          if (reponse && reponse.access_token) {
            jetonDrive = reponse.access_token;
            var m = memoDrive();
            m.connecte = true;
            ecrireMemoDrive(m);
            driveEtat = "connecte";
            rendreAccueil();
            apresConnexionDrive();
          } else {
            driveEtat = "hors-ligne";
            rendreAccueil();
          }
        },
        error_callback: function () {
          driveEtat = "hors-ligne";
          rendreAccueil();
        }
      });

      if (driveEtat !== "connecte") { driveEtat = "pret"; rendreAccueil(); }
      var memo = memoDrive();
      if (!jetonDrive && memo.connecte) clientDrive.requestAccessToken({ prompt: "" });
    } catch (e) {
      driveEtat = "indisponible";
      rendreAccueil();
    }
  }

  function connecterDrive() {
    if (!clientDrive) {
      initDrive();
      toast("Connexion Google en préparation, réessaie dans un instant.");
      return;
    }
    clientDrive.requestAccessToken({ prompt: "" });
  }

  function apiDrive(url, options) {
    var opt = options || {};
    opt.headers = Object.assign({}, opt.headers || {}, { Authorization: "Bearer " + jetonDrive });
    return fetch(url, opt).then(function (r) {
      if (r.status === 401 || r.status === 403) {
        jetonDrive = null;
        driveEtat = "erreur";
        var m = memoDrive();
        m.connecte = false;
        ecrireMemoDrive(m);
        rendreAccueil();
        throw new Error("Session Google expirée, reconnecte le Drive.");
      }
      return r;
    });
  }

  async function chercherFichierDrive() {
    var requete = encodeURIComponent("name='" + DRIVE_FICHIER + "' and trashed=false");
    var r = await apiDrive("https://www.googleapis.com/drive/v3/files?q=" + requete +
      "&spaces=drive&fields=files(id,name,modifiedTime)&pageSize=10");
    if (!r.ok) throw new Error("Recherche dans Drive impossible.");
    var d = await r.json();
    return d.files && d.files.length ? d.files[0] : null;
  }

  async function ecrireFichierDrive(id, contenu) {
    var r = await apiDrive("https://www.googleapis.com/upload/drive/v3/files/" + id + "?uploadType=media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: contenu
    });
    if (!r.ok) throw new Error("Écriture dans Drive impossible (" + r.status + ").");
  }

  async function creerFichierDrive(contenu) {
    var frontiere = "oral" + Date.now();
    var corps = "--" + frontiere + "\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n" +
      JSON.stringify({ name: DRIVE_FICHIER, mimeType: "application/json" }) +
      "\r\n--" + frontiere + "\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n" +
      contenu + "\r\n--" + frontiere + "--\r\n";

    var r = await apiDrive("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id", {
      method: "POST",
      headers: { "Content-Type": "multipart/related; boundary=" + frontiere },
      body: corps
    });
    if (!r.ok) throw new Error("Création du fichier Drive impossible (" + r.status + ").");
    var d = await r.json();
    return d.id;
  }

  async function lireFichierDrive(id) {
    var r = await apiDrive("https://www.googleapis.com/drive/v3/files/" + id + "?alt=media");
    if (!r.ok) throw new Error("Lecture du fichier Drive impossible.");
    return r.text();
  }

  async function sauvegarderDansDrive(silencieux) {
    if (!jetonDrive) {
      if (!silencieux) { toast("Connecte Google Drive pour enregistrer en ligne."); connecterDrive(); }
      return false;
    }
    if (synchroEnCours) return false;

    synchroEnCours = true;
    driveEtat = "synchro";
    rendreAccueil();

    try {
      var memo = memoDrive();
      var contenu = JSON.stringify(paquetSauvegarde(), null, 2);

      if (!memo.fileId) {
        var fichier = await chercherFichierDrive();
        memo.fileId = fichier ? fichier.id : await creerFichierDrive(contenu);
        if (fichier) await ecrireFichierDrive(memo.fileId, contenu);
      } else {
        await ecrireFichierDrive(memo.fileId, contenu);
      }

      memo.derniereSynchro = new Date().toISOString();
      memo.connecte = true;
      ecrireMemoDrive(memo);
      dernierDrive = memo.derniereSynchro;
      driveEtat = "connecte";
      if (!silencieux) toast("Progression enregistrée dans Drive.");
      return true;
    } catch (e) {
      driveEtat = "erreur";
      if (!silencieux) toast(String(e.message || e));
      return false;
    } finally {
      synchroEnCours = false;
      rendreAccueil();
    }
  }

  function programmerDrive() {
    if (!jetonDrive || synchroEnCours) return;
    clearTimeout(minuterieDrive);
    minuterieDrive = setTimeout(function () { sauvegarderDansDrive(true); }, 4000);
  }

  async function apresConnexionDrive() {
    try {
      var memo = memoDrive();
      var id = memo.fileId;
      if (!id) {
        var trouve = await chercherFichierDrive();
        id = trouve && trouve.id;
      }
      if (!id) { await sauvegarderDansDrive(false); return; }

      memo.fileId = id;
      ecrireMemoDrive(memo);

      var texte = await lireFichierDrive(id);
      var paquet = null;
      try { paquet = JSON.parse(texte); } catch (e) { paquet = null; }
      var prog = paquet && paquet.progression ? paquet.progression : null;
      if (!prog || !prog.questions) { await sauvegarderDansDrive(false); return; }

      var local = bilanGlobal();
      var localVide = local.travaillees === 0 && !etat.seance && !(etat.jours && etat.jours.length);

      if (localVide) {
        remplacerEtat(prog);
        sauverLocal();
        afficher("accueil");
        toast("Progression chargée depuis Drive.");
        return;
      }

      var charger = window.confirm("Une sauvegarde existe dans Drive (" + Object.keys(prog.questions).length +
        " questions suivies). La charger et remplacer la progression de cet appareil ?\n\n" +
        "Annuler garde cet appareil et l'envoie dans Drive.");
      if (charger) {
        remplacerEtat(prog);
        sauverLocal();
        afficher("accueil");
        toast("Progression chargée depuis Drive.");
      } else {
        await sauvegarderDansDrive(false);
      }
    } catch (e) {
      toast(String(e.message || e));
    }
  }

  async function chargerDepuisDrive() {
    if (!jetonDrive) { connecterDrive(); return; }
    try {
      var memo = memoDrive();
      var id = memo.fileId;
      if (!id) {
        var trouve = await chercherFichierDrive();
        id = trouve && trouve.id;
      }
      if (!id) { toast("Aucune sauvegarde dans Drive pour l'instant."); return; }

      var texte = await lireFichierDrive(id);
      var paquet = JSON.parse(texte);
      var prog = paquet && paquet.progression ? paquet.progression : paquet;
      if (!prog || !prog.questions) { toast("Le fichier Drive n'est pas une sauvegarde lisible."); return; }

      if (!window.confirm("Remplacer la progression de cet appareil par celle de Drive ?")) return;

      memo.fileId = id;
      ecrireMemoDrive(memo);
      remplacerEtat(prog);
      sauverLocal();
      afficher("accueil");
      toast("Progression chargée depuis Drive.");
    } catch (e) {
      toast(String(e.message || e));
    }
  }

  /* ---------------- navigation ---------------- */

  function majEntete() {
    var el = document.getElementById("serie-entete");
    if (el) el.textContent = serieJours();
    var niv = document.getElementById("niveau-entete");
    if (niv) {
      var pct = bilanGlobal().pct;
      niv.textContent = pct >= 80 ? "Prêt" : pct >= 50 ? "Confirmé" : pct >= 20 ? "Apprenti" : "Débutant";
    }
  }

  function afficher(ecran) {
    document.body.dataset.ecran = ecran;
    $$(".ecran").forEach(function (el) { el.classList.remove("actif"); });
    var cible = document.getElementById("ecran-" + ecran);
    if (cible) cible.classList.add("actif");
    $$(".nav__lien").forEach(function (b) {
      var actif = b.getAttribute("data-nav") === ecran;
      b.classList.toggle("actif", actif);
      b.setAttribute("aria-current", actif ? "page" : "false");
    });
    if (ecran === "accueil") rendreAccueil();
    else if (ecran === "seance") rendreSeance();
    else if (ecran === "bilan") rendreBilan();
    else if (ecran === "banque") rendreBanque();
    else if (ecran === "pitch") rendrePitch();
    else if (ecran === "docs") rendreDocs();
    majEntete();
    if (ecran !== "seance" && chrono.interval) { clearInterval(chrono.interval); chrono.interval = null; }
    window.scrollTo(0, 0);
  }

  /* ---------------- toast ---------------- */

  var minuterieToast = null;
  function toast(message) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("visible");
    clearTimeout(minuterieToast);
    minuterieToast = setTimeout(function () { el.classList.remove("visible"); }, 3200);
  }

  /* ---------------- événements ---------------- */

  document.addEventListener("click", function (e) {
    var trou = e.target.closest ? e.target.closest(".trou") : null;
    if (trou) { trou.classList.toggle("ouvert"); return; }

    var nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      afficher(nav.getAttribute("data-nav"));
      return;
    }

    var docAction = e.target.closest("[data-doc-action]");
    if (docAction) {
      var da = docAction.getAttribute("data-doc-action");
      if (da === "fermer") fermerDoc();
      else if (da === "suivant") docSuivant(1);
      else if (da === "precedent") docSuivant(-1);
      else if (da === "filtre") { filtreDoc = docAction.getAttribute("data-doc-filtre"); rendreDocs(); }
      return;
    }

    var docCarte = e.target.closest("[data-doc]");
    if (docCarte) { ouvrirDoc(docCarte.getAttribute("data-doc")); return; }

    var question = e.target.closest("[data-question]");
    if (question) {
      ouvrirModale(question.getAttribute("data-question"));
      return;
    }

    var cible = e.target.closest("[data-action]");
    if (!cible) return;
    var action = cible.getAttribute("data-action");
    var id = cible.getAttribute("data-id");
    var n = Number(cible.getAttribute("data-n") || longueur);

    if (action === "longueur") {
      longueur = n;
      rendreAccueil();
    } else if (action === "aleatoire") {
      lancerSeance("aleatoire", aleatoire(n));
    } else if (action === "intelligente") {
      lancerSeance("intelligente", intelligente(n));
    } else if (action === "ciblee") {
      var niveauCible = cible.getAttribute("data-niveau");
      lancerSeance("ciblee", ciblee(niveauCible, n));
    } else if (action === "categorie") {
      lancerSeance("categorie", parCategorie(Number(cible.getAttribute("data-cat")), n));
    } else if (action === "reprendre") {
      revele = false;
      afficher("seance");
    } else if (action === "quitter") {
      sauver();
      toast("Séance mise de côté : tu la reprendras où tu t'es arrêté.");
      afficher("accueil");
    } else if (action === "reveler") {
      revele = true;
      rendreSeance();
    } else if (action === "chrono") {
      basculerChrono();
    } else if (action === "evaluer") {
      evaluer(etat.seance && etat.seance.ids[etat.seance.index], cible.getAttribute("data-niveau"));
    } else if (action === "suivante") {
      suivante();
    } else if (action === "reporter") {
      reporterQuestion(id);
    } else if (action === "accueil") {
      afficher("accueil");
    } else if (action === "voir-bilan") {
      if (etat.derniereSeance) afficher("bilan");
    } else if (action === "refaire-ratees") {
      var s = etat.derniereSeance;
      var ids = s ? Object.keys(s.evaluations).filter(function (k) { return s.evaluations[k].apres === "encours"; }) : [];
      lancerSeance("ratees", ids.map(parId).filter(Boolean));
    } else if (action === "exporter") {
      exporter();
    } else if (action === "importer") {
      importer();
    } else if (action === "drive-connecter") {
      connecterDrive();
    } else if (action === "drive-sauver") {
      sauvegarderDansDrive(false);
    } else if (action === "drive-charger") {
      chargerDepuisDrive();
    } else if (action === "trous") {
      etat.preferences.trous = !etat.preferences.trous;
      sauver();
      if (modaleId) rafraichirModale();
      if (etat.seance) rendreSeance();
    } else if (action === "editer") {
      var cibleId = cible.getAttribute("data-id") || modaleId;
      if (!modaleId && cibleId) ouvrirModale(cibleId);
      editId = cibleId;
      if (etat.preferences.trous) { etat.preferences.trous = false; sauver(); }
      rafraichirModale();
    } else if (action === "annuler-edition") {
      editId = null;
      rafraichirModale();
    } else if (action === "enregistrer-reponse") {
      enregistrerReponse(id || modaleId);
    } else if (action === "reinitialiser-reponse") {
      if (etat.reponses) delete etat.reponses[id || modaleId];
      editId = null;
      sauver();
      rafraichirModale();
      toast("Réponse d'origine rétablie.");
    } else if (action === "niveau-banque") {
      definirNiveau(cible.getAttribute("data-id"), cible.getAttribute("data-niveau"));
    } else if (action === "reset-filtres") {
      recherche = ""; filtrePartie = 0; filtreStatut = "tous"; filtreNiveau = "tous";
      rendreBanque();
    } else if (action === "pitch-start") {
      basculerPitchChrono();
    } else if (action === "pitch-reset") {
      if (pitchChrono.interval) { clearInterval(pitchChrono.interval); pitchChrono.interval = null; }
      pitchChrono.ecoule = 0;
      afficherPitchChrono();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (editId || (e.target && e.target.isContentEditable)) return;

    if (docOuvert) {
      if (e.key === "Escape") { fermerDoc(); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); docSuivant(1); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); docSuivant(-1); return; }
    }

    if (e.key === "Escape" && modaleId) { fermerModale(); return; }
    if (modaleId) return;
    var ecranSeance = $("#ecran-seance");
    if (!ecranSeance || !ecranSeance.classList.contains("actif")) return;

    if (e.key === "r" || e.key === "R") {
      if (!revele) { revele = true; rendreSeance(); }
    } else if (e.key === "1") {
      var q1 = etat.seance && etat.seance.ids[etat.seance.index];
      if (q1 && (revele || (etat.seance.evaluations && etat.seance.evaluations[q1]))) evaluer(q1, "encours");
    } else if (e.key === "2") {
      var q2 = etat.seance && etat.seance.ids[etat.seance.index];
      if (q2 && (revele || (etat.seance.evaluations && etat.seance.evaluations[q2]))) evaluer(q2, "presque");
    } else if (e.key === "3") {
      var q3 = etat.seance && etat.seance.ids[etat.seance.index];
      if (q3 && (revele || (etat.seance.evaluations && etat.seance.evaluations[q3]))) evaluer(q3, "pret");
    } else if (e.key === "n" || e.key === "N") {
      var s = etat.seance;
      if (s && s.evaluations && s.evaluations[s.ids[s.index]]) { e.preventDefault(); suivante(); }
    }
  });

  var champSauvegarde = document.getElementById("fichier-sauvegarde");
  if (champSauvegarde) {
    champSauvegarde.addEventListener("change", function () {
      traiterSauvegarde(champSauvegarde.files && champSauvegarde.files[0]);
    });
  }

  var boutonFermer = document.getElementById("modale-fermer");
  if (boutonFermer) boutonFermer.addEventListener("click", fermerModale);

  var lecteurDoc = document.getElementById("lecteur");
  if (lecteurDoc) {
    lecteurDoc.addEventListener("click", function (e) { if (e.target === this) fermerDoc(); });
    lecteurDoc.addEventListener("close", function () { docOuvert = null; });
  }

  var modale = document.getElementById("modale");
  if (modale) {
    modale.addEventListener("click", function (e) {
      if (e.target === this) fermerModale();
    });
    modale.addEventListener("close", function () { modaleId = null; editId = null; });
  }

  /* ---------------- démarrage ---------------- */

  if (!BANQUE.length) {
    document.getElementById("ecran-accueil").innerHTML =
      '<div class="page"><h1 class="titre-page">La banque de questions n\'a pas chargé.</h1>' +
      '<p class="sous-titre">Vérifie que les fichiers du dossier <code>data/</code> sont présents, puis recharge la page.</p></div>';
    return;
  }

  afficher("accueil");
  initDrive();

  /* Expose un utilitaire de diagnostic discret. */
  window.oralDgfip = {
    bilan: bilanGlobal,
    questions: function () { return BANQUE.length; },
    categories: function () {
      return Object.keys(CATEGORIES).map(function (c) {
        return { cat: Number(c), nom: CATEGORIES[c].nom, total: BANQUE.filter(function (q) { return q.cat === Number(c); }).length };
      });
    }
  };
})();
