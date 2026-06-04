// ============================================================
//  PRESTATIONS — SOURCE UNIQUE
//  Ce fichier alimente À LA FOIS :
//   • la liste de prix de la page Tarifs  (tableau `tarifs`)
//   • les grands blocs de la page Prestations (tableau `blocs`)
//  Modifiez les textes, prix et images ici, c'est répercuté partout.
// ============================================================

import { site } from './site.js';

// ---- LISTE TARIFAIRE (page /tarifs) ------------------------
//  price : un nombre en euros, ou `null` si le prix n'est pas
//          encore fixé (affiché « sur demande »).
//  mebp  : true pour la séance MEBP® (accent bleu de la charte).
export const tarifs = [
  {
    name: 'Massage bien-être — 30 min',
    tagline: 'Une parenthèse',
    price: null, // TODO cliente : prix du format 30 min
    description:
      "Un format court pour relâcher l'essentiel : nuque, dos, épaules. Idéal quand le temps manque mais que le corps réclame une pause.",
    mebp: false,
  },
  {
    name: 'Massage bien-être — 1 h',
    tagline: 'Un vrai relâchement',
    price: 65,
    description:
      "Un modelage doux et enveloppant du corps entier pour dénouer les tensions en profondeur et retrouver un vrai calme intérieur.",
    mebp: false,
  },
  {
    name: 'Séance de Shiatsu',
    tagline: 'Énergie & tensions profondes',
    price: 70,
    description:
      "Des pressions le long des méridiens, habillé et allongé, pour rééquilibrer l'énergie, soulager les tensions profondes et apaiser le stress. Certaines mutuelles remboursent.",
    mebp: false,
  },
  {
    name: 'Massage femme enceinte',
    tagline: 'Douceur & sécurité',
    price: 70,
    description:
      "Un soin tout en douceur, dans des positions confortables et sécurisantes, pour soulager le dos, alléger les jambes lourdes et offrir un vrai moment de détente à la future maman.",
    mebp: false,
  },
  {
    name: 'Séance MEBP® — enfants',
    tagline: 'Enfants à besoins particuliers',
    price: null, // TODO cliente : prix de la séance MEBP®
    description:
      "Massage certifié pensé pour le confort et l'apaisement des enfants à besoins particuliers. Des gestes lents et rassurants, à leur rythme, dans un cadre calme.",
    mebp: true,
  },
];

// ---- GRANDS BLOCS (page /prestations) ----------------------
//  Présentation « par thème », plus narrative que la grille tarifaire.
//  reverse : inverse texte/image (alternance visuelle).
//  badge   : affiche le badge « Praticienne certifiée MEBP® ».
//  anchor  : ancre HTML (ex. /prestations#mebp).
export const blocs = [
  {
    index: '01',
    eyebrow: 'Bien-être adulte',
    title: 'Shiatsu & massage bien-être',
    body:
      "Pressions, étirements, gestes lents : un moment pour relâcher les tensions et retrouver de l'énergie. Vous n'avez rien à décider à l'avance, on ajuste ensemble selon ce que votre corps demande.",
    image: '/images/prestations/massage-bien-etre.webp',
    imageAlt: 'Séance de shiatsu et de massage bien-être',
    cta: { label: 'Réserver 30 min ou 1 h', href: site.booking },
    reverse: false,
    mebp: false,
    anchor: 'shiatsu',
  },
  {
    index: '02',
    eyebrow: 'Maternité',
    title: 'Massage femme enceinte',
    body:
      "Un soin tout en douceur pour soulager le dos, alléger les jambes et s'apaiser. Des positions confortables et adaptées, dans un cadre calme et sécurisant.",
    note: '[À compléter : précisions ou limitations selon le trimestre.]',
    image: '/images/prestations/femme-enceinte.webp',
    imageAlt: 'Soin doux pour femme enceinte',
    cta: { label: 'Réserver', href: site.booking },
    reverse: true,
    mebp: false,
    anchor: 'femme-enceinte',
  },
  {
    index: '03',
    eyebrow: 'Enfants à besoins particuliers',
    title: 'Technique MEBP®',
    body:
      "La Technique MEBP® (Massage pour Enfants à Besoins Particuliers) est une approche certifiée, pensée pour le confort et l'apaisement de l'enfant.",
    note:
      "Je suis praticienne certifiée MEBP®. [À compléter : description officielle MEBP® et bienfaits validés, déroulé d'une séance, accompagnement des parents.]",
    image: '/images/prestations/mebp.webp',
    imageAlt: "Accompagnement d'un enfant en MEBP",
    cta: { label: 'Prendre contact pour une séance MEBP®', href: '/contact' },
    reverse: false,
    mebp: true,
    badge: true,
    anchor: 'mebp',
  },
];
