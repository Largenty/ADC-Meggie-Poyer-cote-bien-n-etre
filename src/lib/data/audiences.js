// ============================================================
//  « POUR QUI ? » — 3 cartes de la page d'accueil
//  ⚠️ Éditable depuis /admin (Sveltia CMS) → `content/audiences.json`.
//  href / linkLabel : facultatif (lien « En savoir plus »).
//  mebp : true pour la carte MEBP® (accent bleu).
// ============================================================

import data from '../../../content/audiences.json';

export const audiences = data.items;
