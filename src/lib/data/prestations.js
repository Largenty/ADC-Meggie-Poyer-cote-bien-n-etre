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
    name: 'Massage bien-être — 45 min',
    tagline: 'Une parenthèse',
    price: 50,
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
    name: 'Massage bien-être — 1 h 30',
    tagline: 'Pour aller plus en profondeur',
    price: 90,
    description:
      "Le temps de tout relâcher, sans se presser : un soin complet et profond du corps entier, pour un vrai lâcher-prise.",
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
      "Un soin tout en douceur, dans des positions confortables et sécurisantes, pour soulager le dos et offrir un vrai moment de détente à la future maman. Massage spécifique du dos, je ne touche pas le ventre. 55 minutes.",
    mebp: false,
  },
  {
    name: 'Séance Technique MEBP® — enfants',
    tagline: 'Enfants à besoins particuliers',
    price: 60, // 1ʳᵉ séance ; suivi 35 € (voir priceLabel/priceNote)
    priceLabel: '60 € / 35 €',
    priceNote: '1ʳᵉ séance / suivi',
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
    image: '/images/prestations/femme-enceinte.webp',
    imageAlt: 'Séance de shiatsu et de massage bien-être',
    cta: { label: 'Réserver 45 min, 1 h ou 1 h 30', href: site.booking },
    learnMore: { label: 'En savoir plus', href: '/prestations/shiatsu' },
    reverse: false,
    mebp: false,
    anchor: 'shiatsu',
  },
  {
    index: '02',
    eyebrow: 'Maternité',
    title: 'Massage femme enceinte',
    body:
      "Un soin tout en douceur pour soulager le dos et s'apaiser, dans des positions confortables et adaptées, un cadre calme et sécurisant. Massage spécifique du dos, je ne touche pas le ventre. 55 minutes.",
    note: 'À partir du 4ᵉ mois de grossesse, jusqu’au 8ᵉ.',
    image: '/images/prestations/massage-bien-etre.webp',
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
      "La Technique MEBP® est spécialement conçue pour les enfants à besoins particuliers*. C'est un massage composé de pressions profondes, donné au sol sur un futon, par-dessus les vêtements. Il respecte les caractéristiques sensorielles de chaque enfant. Avec des routines visuelles et des techniques adaptées, il améliore la disponibilité et aide à gérer l'anxiété.",
    note:
      "*Sont considérés comme besoins particuliers : les besoins reliés aux conditions neurodéveloppementales ou variations neurologiques, aux déficiences physiques et intellectuelles, aux psychopathologies et aux situations qui ne sont pas encore reconnues comme la douance, sans se limiter à ces conditions ou situations (temporaires ou permanentes).",
    image: '/images/prestations/mebp.webp',
    imageAlt: "Accompagnement d'un enfant en MEBP",
    cta: { label: 'Prendre contact pour une séance de Technique MEBP®', href: '/contact' },
    learnMore: { label: 'En savoir plus', href: '/prestations/mebp' },
    reverse: false,
    mebp: true,
    badge: true,
    anchor: 'mebp',
  },
];
