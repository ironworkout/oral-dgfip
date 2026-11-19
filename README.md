# Oral DGFiP — révision active

**En ligne :** https://ironworkout.github.io/oral-dgfip/

Site statique de préparation à l'**entretien d'admission** du concours externe d'agent administratif principal des Finances publiques (catégorie C, branche administrative, concours commun DGFiP / DGDDI).

100 questions, une réponse modèle, trois niveaux de maîtrise, répétition espacée, séances intelligentes, chrono de pitch et sauvegarde de la progression.

## Lancer le site

Aucune installation, aucune compilation. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

Le site fonctionne aussi bien depuis GitHub Pages (fichiers statiques, chemins relatifs).

## Structure

```
index.html                 écrans Accueil · Séance · Bilan · Banque · Pitch · Docs
assets/style.css           thème « parcours » : émeraude/menthe, fond animé, chemin coloré
assets/app.js              état, répétition espacée, séances, sauvegarde, Drive, bibliothèque
data/1-parcours.js         8 questions
data/2-motivations.js      12 questions
data/3-dgfip.js            20 questions (dont 5 DGDDI)
data/4-savoir-etre.js      14 questions
data/5-situations.js       20 mises en situation
data/6-pieges.js           12 questions pièges
data/7-actualite.js        14 questions de culture et d'actualité
data/8-documents.js        catalogue des 19 documents photographiés
documents/                 pages classées : guide/, fiches/, memoires/, officiels/
manifest.json              installation sur mobile (PWA)
assets/icone-*.png         icônes
```

## Format d'une question

```js
{
  id: "d-sip",              // clé de sauvegarde, ne pas modifier
  cat: 3,                    // 1 à 7
  theme: "Le SIP",
  statut: "probable",        // officiel | probable | piege | methode
  question: "…",
  duree: 75,                 // secondes conseillées
  enjeu: "…",                // pourquoi le jury pose la question
  reponse: ["…", "…"],       // paragraphes ; **gras** masquable
  attentes: ["…"],
  eviter: ["…"],
  relances: ["…"],
  motsCles: ["…"],
  source: "…"
}
```

## Moteur de révision

La planification reprend celle du site de référence : facilité propre à chaque question (2,5 au départ), séries, rechutes, questions fragiles, intervalles de 1, 2, 7, 14, 30, 60 et 120 jours, avec une butée pour que la dernière revue tombe avant l'oral.

L'objectif quotidien varie de 5 à 12 questions selon la charge à revoir. La séance intelligente priorise les questions dues (retard, niveau, fragilité), ouvre plus ou moins de nouveautés selon le taux de réussite récent et limite à deux questions par catégorie. Les révisions ciblées sortent les questions les plus en retard en premier.

## Progression et sauvegarde

- Progression locale : `localStorage`, clé `oral-dgfip-v1`.
- Sauvegarde fichier : export / import JSON.
- Google Drive (optionnel) : fichier `oral-dgfip-revision.json`, scope `drive.file`, via Google Identity Services. Le bouton n'apparaît qu'une fois le service Google chargé.

## Documents

L'onglet **Docs** rassemble les pages photographiées, dédoublonnées et redressées : les douze pages
retrouvées du carnet d'oral imprimé, cinq fiches manuscrites, le tableau des principes et valeurs,
et le dépliant officiel des taxes d'urbanisme. Chaque fiche porte un résumé et trois points clés.

Le classement, les pages manquantes et ce qui a été écarté sont détaillés dans `documents/README.md`.

## Sources

- Page officielle du concours externe C, `economie.gouv.fr` (mise à jour du 6 novembre 2026) : épreuves, coefficients, calendrier.
- Guide ENFiP, *Préparation à l'épreuve orale d'admission*, juillet 2026.
- Carnet d'oral personnel (17 pages, photographié le 11 novembre 2026) et fiches manuscrites.
- Arrêté du 12 avril 2016 modifié par l'arrêté du 23 mars 2026.
- Site officiel DGFiP / « Rejoindre les Finances publiques » : missions, organisation, réseau.
- Bilan du cadre d'objectifs et de moyens 2023-2027, septembre 2026 (facturation électronique, NRP).
- Site officiel de la Douane (DGDDI).

Les données d'actualité sont arrêtées au **16 novembre 2026**. Les réponses sont des modèles de préparation : elles ne remplacent ni les textes officiels ni les conseils du jury.
